/**
 * check-references — do the site's citations still resolve?
 *
 * Every article publishes a reference list, and the pipeline tracker links a
 * source per candidate. A dead or mis-numbered citation undoes the trust the
 * rest of the page earns, so this script checks all of them against the
 * network. It is NOT part of `npm run lint` (CI must not fail because a
 * publisher is briefly down); it runs monthly from
 * .github/workflows/reference-check.yml and on demand:
 *
 *   npm run check:refs               # full run
 *   npm run check:refs -- --only=conditions/low-back-pain
 *
 * How each kind of link is checked:
 *   - PubMed / PMC   NCBI E-utilities (the HTML pages sit behind a consent
 *                    wall for scripts). Confirms the ID exists AND compares
 *                    the record's title/first author with what we cite, so a
 *                    wrong PMID is caught even though it "resolves".
 *   - everything else  an HTTP GET. Many publishers refuse scripts (403/429);
 *                    when the URL carries a DOI we fall back to asking
 *                    doi.org whether the DOI is registered.
 *
 * Verdicts:
 *   DEAD        404/410, unknown PMID, unregistered DOI, DNS failure → exit 1
 *   MISMATCH    the ID resolves to a paper that does not look like the one
 *               cited → exit 1
 *   UNVERIFIED  blocked, rate-limited, timed out, or server error → reported,
 *               never fails the run (check by hand if it persists)
 */

import * as fs from "node:fs";
import { ALL_ARTICLES } from "../src/lib/articles";
import { CANDIDATES } from "../src/lib/pipeline";

type Cite = { url: string; label: string; pages: Set<string> };
type Verdict = "OK" | "DEAD" | "MISMATCH" | "UNVERIFIED";
type Result = { cite: Cite; verdict: Verdict; detail: string };

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 reference-check";
const TIMEOUT_MS = 25_000;
const CONCURRENCY = 6;

/* -------------------------------------------------------------- collect */

const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7);
const cites = new Map<string, Cite>();

function add(url: string, label: string, page: string) {
  const hit = cites.get(url);
  if (hit) hit.pages.add(page);
  else cites.set(url, { url, label, pages: new Set([page]) });
}

for (const a of ALL_ARTICLES) {
  const page = `/${a.hub}/${a.slug}`;
  if (only && page !== `/${only.replace(/^\//, "")}`) continue;
  for (const r of a.references) add(r.url, r.title, page);
}
if (!only || only.replace(/^\//, "") === "future-of-pain-medicine/pipeline")
  for (const c of CANDIDATES)
    add(c.source.url, `${c.name} – ${c.source.label}`, "/future-of-pain-medicine/pipeline");

/* ---------------------------------------------------------------- utils */

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function get(url: string, init: RequestInit = {}): Promise<Response> {
  return fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT_MS),
    ...init,
    headers: {
      "User-Agent": UA,
      Accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      ...(init.headers ?? {}),
    },
  });
}

/** Lower-cased significant words, accents and punctuation stripped. */
function words(s: string): string[] {
  return s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/<[^>]+>/g, " ")
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 4);
}

/**
 * Does an NCBI record look like the paper we cite? Either the first author's
 * surname appears in our citation, or most of the record's title words do.
 */
function looksLike(cited: string, recordTitle: string, firstAuthor: string) {
  const citedWords = new Set(words(cited));
  const surname = words(firstAuthor.split(" ")[0] ?? "")[0];
  if (surname && citedWords.has(surname)) return true;
  const rec = words(recordTitle);
  if (!rec.length) return true; // nothing to compare against
  const shared = rec.filter((w) => citedWords.has(w)).length;
  return shared / rec.length >= 0.5;
}

/* ----------------------------------------------------------------- NCBI */

type Summary = {
  error?: string;
  title?: string;
  authors?: { name: string }[];
  source?: string;
  pubdate?: string;
};

async function esummary(db: "pubmed" | "pmc", ids: string[]) {
  const out = new Map<string, Summary>();
  for (let i = 0; i < ids.length; i += 150) {
    const batch = ids.slice(i, i + 150);
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=${db}&retmode=json&id=${batch.join(",")}`;
    let json: { result?: Record<string, Summary> } | undefined;
    for (let attempt = 0; attempt < 3 && !json; attempt++) {
      try {
        const res = await get(url);
        if (res.ok) json = await res.json();
      } catch {
        /* retry */
      }
      if (!json) await sleep(1500 * (attempt + 1));
    }
    for (const id of batch) {
      const rec = json?.result?.[id];
      if (rec) out.set(id, rec);
    }
    await sleep(400); // E-utilities allows 3 requests/second without a key
  }
  return out;
}

const PUBMED = /^https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)\/?/;
const PMC = /^https:\/\/(?:pmc\.ncbi\.nlm\.nih\.gov|www\.ncbi\.nlm\.nih\.gov\/pmc)\/articles\/PMC(\d+)\/?/;

async function checkNcbi(db: "pubmed" | "pmc", re: RegExp, list: Cite[]): Promise<Result[]> {
  const idOf = (c: Cite) => c.url.match(re)![1];
  const records = await esummary(db, [...new Set(list.map(idOf))]);
  const name = db === "pubmed" ? "PMID" : "PMCID";
  return list.map((cite) => {
    const id = idOf(cite);
    const rec = records.get(id);
    if (!rec)
      return { cite, verdict: "UNVERIFIED", detail: `E-utilities did not answer for ${name} ${id}` };
    if (rec.error || !rec.title)
      return { cite, verdict: "DEAD", detail: `${name} ${id} is not a record in ${db}` };
    const first = rec.authors?.[0]?.name ?? "";
    if (!looksLike(cite.label, rec.title, first))
      return {
        cite,
        verdict: "MISMATCH",
        detail: `${name} ${id} is “${rec.title}” (${first || "no author"}, ${rec.source ?? ""} ${rec.pubdate ?? ""})`,
      };
    return { cite, verdict: "OK", detail: `${name} ${id}` };
  });
}

/* ----------------------------------------------------------------- HTTP */

const DOI = /\b(10\.\d{4,9}\/[^\s?#"<>]+)/;

/** doi.org's handle API answers for any registered DOI, whoever hosts it. */
async function doiRegistered(doi: string): Promise<boolean | undefined> {
  try {
    const res = await get(`https://doi.org/api/handles/${encodeURI(doi)}`);
    if (res.status === 404) return false;
    if (!res.ok) return undefined;
    const json = (await res.json()) as { responseCode?: number };
    return json.responseCode === 1;
  } catch {
    return undefined;
  }
}

async function checkHttp(cite: Cite): Promise<Result> {
  let status = 0;
  let failure = "";
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await get(cite.url);
      status = res.status;
      await res.body?.cancel();
      if (status < 500 && status !== 429) break;
    } catch (e) {
      const cause = (e as { cause?: { code?: string } }).cause?.code;
      failure = cause ?? (e as Error).name;
      if (cause === "ENOTFOUND")
        return { cite, verdict: "DEAD", detail: "domain does not resolve" };
    }
    await sleep(2000);
  }
  if (status >= 200 && status < 300 && status !== 203)
    return { cite, verdict: "OK", detail: String(status) };

  const why = status ? `HTTP ${status}` : `no response (${failure || "error"})`;
  const doi = decodeURIComponent(cite.url).match(DOI)?.[1]?.replace(/\/(full|abstract|pdf)$/, "");
  if (status === 404 || status === 410) {
    return { cite, verdict: "DEAD", detail: why };
  }
  if (doi) {
    const registered = await doiRegistered(doi);
    if (registered === true)
      return { cite, verdict: "OK", detail: `${why} from publisher; DOI ${doi} is registered` };
    if (registered === false)
      return { cite, verdict: "DEAD", detail: `${why}; DOI ${doi} is not registered` };
  }
  return { cite, verdict: "UNVERIFIED", detail: why };
}

async function pool<T, R>(items: T[], n: number, fn: (t: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i]);
      }
    }),
  );
  return out;
}

/* ----------------------------------------------------------------- main */

async function main() {
  const all = [...cites.values()];
  const pubmed = all.filter((c) => PUBMED.test(c.url));
  const pmc = all.filter((c) => PMC.test(c.url));
  const rest = all.filter((c) => !PUBMED.test(c.url) && !PMC.test(c.url));

  console.log(
    `check-references: ${all.length} unique links (${pubmed.length} PubMed, ${pmc.length} PMC, ${rest.length} other)…`,
  );

  const results = [
    ...(await checkNcbi("pubmed", PUBMED, pubmed)),
    ...(await checkNcbi("pmc", PMC, pmc)),
    ...(await pool(rest, CONCURRENCY, checkHttp)),
  ];

  const by = (v: Verdict) => results.filter((r) => r.verdict === v);
  const failing = [...by("DEAD"), ...by("MISMATCH")];
  const unverified = by("UNVERIFIED");

  const line = (r: Result) =>
    `- **${r.verdict}** ${r.cite.url}\n  - cited as: ${r.cite.label}\n  - found: ${r.detail}\n  - on: ${[...r.cite.pages].join(", ")}`;

  const report = [
    `## Reference check — ${new Date().toISOString().slice(0, 10)}`,
    "",
    `${all.length} unique links: ${by("OK").length} OK, ${by("DEAD").length} dead, ${by("MISMATCH").length} mismatched, ${unverified.length} unverified.`,
    "",
    ...(failing.length
      ? ["### Needs fixing", "", ...failing.map(line), ""]
      : ["No dead or mismatched citations.", ""]),
    ...(unverified.length
      ? [
          "### Could not be checked by script",
          "",
          "The site refused or timed out. Usually bot-blocking, not a dead link; open by hand if the same link appears here month after month.",
          "",
          ...unverified.map(line),
          "",
        ]
      : []),
  ].join("\n");

  console.log("\n" + report);
  if (process.env.GITHUB_STEP_SUMMARY)
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + "\n");
  const outFile = process.argv.find((a) => a.startsWith("--report="))?.slice(9);
  if (outFile) fs.writeFileSync(outFile, report + "\n");

  process.exit(failing.length ? 1 : 0);
}

main();
