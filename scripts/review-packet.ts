/**
 * review-packet — render a page into a self-contained Markdown packet a
 * medical reviewer can read, mark up, and sign, with no code involved.
 *
 *   npm run review:packet -- conditions/low-back-pain            one page
 *   npm run review:packet -- conditions/low-back-pain --offline  skip prose fetch
 *   npm run review:packet -- --queue                             print status table
 *   npm run review:packet -- --all                               every non-reviewed page
 *
 * Each packet = front matter · the AEO answer · the live prose (fetched from
 * painmedicine.com and flattened to Markdown, so the reviewer sees exactly
 * what readers see) · FAQs · references · the §5 checklist · the §6
 * attestation. Output: reports/review/<hub>--<slug>.md (git-ignored).
 *
 * When the packet comes back signed, apply it with scripts/review-apply.ts.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { ALL_ARTICLES } from "../src/lib/articles";
import { HUBS } from "../src/lib/hubs";
import { SITE } from "../src/lib/site";
import type { Article } from "../src/lib/understanding";

const REPO = path.resolve(__dirname, "..");
const OUT = path.join(REPO, "reports", "review");

const CHECKLIST = [
  "**Accurate** and consistent with current guidelines / best evidence.",
  "**Every clinical claim** is supported by a cited primary source.",
  "**≥3 authoritative references**, correctly represented (no overstated findings).",
  "**No dosing**, **no \"best/cure/guaranteed/miracle,\"** no \"how to obtain\" controlled substances.",
  "**Opioid content** includes the SAMHSA helpline inline and stewardship framing.",
  "**Safety net present:** when to seek specialist / urgent / emergency care.",
  "**Balanced** — benefits *and* limits/risks; evidence strength stated honestly.",
  "**Reading level ~8th grade**; tone compassionate and non-dismissive.",
  "**No promotional / conflict-of-interest** language; nothing implies the site provides care.",
  "Byline credential line and review date are correct.",
];

/* ------------------------------------------------------------ html → md */

function decode(s: string): string {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
}

function inline(html: string): string {
  return decode(
    html
      .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
      .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*")
      .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
        const t = text.replace(/<[^>]+>/g, "").trim();
        const abs = href.startsWith("/") ? `${SITE.url}${href}` : href;
        return t ? `[${t}](${abs})` : "";
      })
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/[ \t]+/g, " ")
      .trim()
  );
}

/**
 * Flatten the <article> prose to Markdown: headings, paragraphs, lists,
 * figure captions, blockquotes. Figures themselves are noted by caption so
 * the reviewer knows a diagram sits there (they can view it on the live page).
 */
function articleToMarkdown(html: string): string {
  const start = html.indexOf("<article");
  const end = html.lastIndexOf("</article>");
  if (start < 0 || end < 0) return "_(prose extraction failed — review on the live page)_";
  let body = html.slice(start, end);
  // Drop everything before the body and the FAQ/reference tail (rendered from the record separately).
  body = body.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<svg[\s\S]*?<\/svg>/gi, "");
  const faqIdx = body.search(/id="faq-heading"/);
  if (faqIdx > 0) body = body.slice(0, body.lastIndexOf("<section", faqIdx));
  const headerEnd = body.indexOf("</header>");
  if (headerEnd > 0) body = body.slice(headerEnd + 9);

  const out: string[] = [];
  const re =
    /<(h2|h3|h4|p|li|figcaption|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body))) {
    const tag = m[1].toLowerCase();
    const text = inline(m[2]);
    if (!text) continue;
    if (tag === "h2") out.push(`\n## ${text}\n`);
    else if (tag === "h3") out.push(`\n### ${text}\n`);
    else if (tag === "h4") out.push(`\n#### ${text}\n`);
    else if (tag === "li") out.push(`- ${text}`);
    else if (tag === "figcaption") out.push(`> **Figure.** ${text}\n`);
    else if (tag === "blockquote") out.push(`> ${text}\n`);
    else out.push(`${text}\n`);
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

/* ---------------------------------------------------------------- packet */

async function fetchProse(pathname: string, offline: boolean): Promise<string> {
  if (offline) return `_(prose omitted; read it at ${SITE.url}${pathname})_`;
  try {
    const res = await fetch(`${SITE.url}${pathname}`, {
      headers: { "user-agent": "painmedicine-review-packet" },
    });
    if (!res.ok) return `_(HTTP ${res.status} fetching live page — read it at ${SITE.url}${pathname})_`;
    return articleToMarkdown(await res.text());
  } catch (e) {
    return `_(fetch failed: ${(e as Error).message} — read it at ${SITE.url}${pathname})_`;
  }
}

async function packet(a: Article, offline: boolean): Promise<string> {
  const pathname = `/${a.hub}/${a.slug}`;
  const hub = HUBS.find((h) => h.slug === a.hub);
  const prose = await fetchProse(pathname, offline);
  const today = new Date().toISOString().slice(0, 10);

  return `---
page: ${pathname}
title: "${a.title.replace(/"/g, '\\"')}"
hub: ${hub?.title ?? a.hub}
status: ${a.status}
lastUpdated: ${a.lastUpdated}
packetGenerated: ${today}
live: ${SITE.url}${pathname}
---

# Review packet: ${a.title}

**Live page:** ${SITE.url}${pathname}
**Section:** ${hub?.title ?? a.hub} · **Current status:** \`${a.status}\` · **Last updated:** ${a.lastUpdated}

> **How to use this packet.** Read the page below as a patient would. Mark
> anything inaccurate, overstated, unsafe, or missing directly in this file
> (or in your own notes, referencing the heading). Work through the checklist,
> then complete the attestation at the end. Return the whole file. Figures are
> shown here by caption only; view them on the live page.

---

## Page summary (the "answer" shown under the title)

${a.answer}

## Meta description

${a.description}

---

## Page prose

${prose}

---

## Frequently asked questions (published with FAQ schema)

${a.faqs.map((f) => `**Q. ${f.question}**\n\n${f.answer}`).join("\n\n")}

---

## References (${a.references.length})

${a.references.map((r, i) => `${i + 1}. ${r.source} — ${r.title}  \n   ${r.url}`).join("\n")}

---

## Reviewer checklist

Tick each line only if it holds for this page. Note the heading and the
issue for anything you cannot tick.

${CHECKLIST.map((c) => `- [ ] ${c}`).join("\n")}

**Requested changes (if any):**

_(write here)_

---

## Reviewer attestation

Complete once per page. This is what authorizes publication and the byline.

\`\`\`
Reviewer name:              ______________________________________
Credential line (verbatim,  ______________________________________
  as it should appear):       e.g. "MD, board-certified in Pain Medicine (ABA)"
License number & state:     ______________________________________
Board certification(s):     ______________________________________
Page reviewed:              ${pathname}
Review date (YYYY-MM-DD):   ______________________________________

Attestation:
  "I have reviewed the page listed above. To the best of my professional
   knowledge, the content is medically accurate and consistent with current
   evidence as of the review date. I understand this is educational content,
   not individualized medical advice or a guarantee of outcomes."

Consent to publish name + credentials + review date:   [ ] Yes
Conflicts of interest to disclose (if any):  __________________________
One-line public note on what changed in review (optional): ________________

Signature: __________________________     Date: ________________
\`\`\`

_On receipt, the site owner applies the sign-off with
\`npm run review:apply -- ${a.hub}/${a.slug} --reviewer <slug> --date <YYYY-MM-DD>\`._
`;
}

/* ----------------------------------------------------------------- queue */

function printQueue() {
  const rows = ALL_ARTICLES.map((a) => ({
    page: `/${a.hub}/${a.slug}`,
    status: a.status,
    updated: a.lastUpdated,
    reviewed: a.review ? `${a.review.reviewer} ${a.review.reviewedAt}` : "",
  }));
  const w = Math.max(...rows.map((r) => r.page.length));
  console.log(`${"page".padEnd(w)}  status          updated     reviewed`);
  for (const r of rows)
    console.log(`${r.page.padEnd(w)}  ${r.status.padEnd(15)} ${r.updated}  ${r.reviewed}`);
  const n = rows.filter((r) => r.status === "reviewed").length;
  console.log(`\n${n}/${rows.length} reviewed · ${rows.length - n} awaiting sign-off`);
}

/* ------------------------------------------------------------------ main */

async function main() {
  const args = process.argv.slice(2).filter((a) => a !== "--");
  const offline = args.includes("--offline");
  const targets = args.filter((a) => !a.startsWith("--"));

  if (args.includes("--queue")) return printQueue();

  let pages: Article[];
  if (args.includes("--all")) pages = ALL_ARTICLES.filter((a) => a.status !== "reviewed");
  else {
    if (!targets.length) {
      console.error("usage: review-packet <hub>/<slug> [--offline] | --queue | --all");
      process.exitCode = 1;
      return;
    }
    pages = targets.map((t) => {
      const [hub, slug] = t.replace(/^\//, "").split("/");
      const a = ALL_ARTICLES.find((x) => x.hub === hub && x.slug === slug);
      if (!a) throw new Error(`no article at /${hub}/${slug} (see --queue)`);
      return a;
    });
  }

  fs.mkdirSync(OUT, { recursive: true });
  for (const a of pages) {
    const file = path.join(OUT, `${a.hub}--${a.slug}.md`);
    fs.writeFileSync(file, await packet(a, offline), "utf8");
    console.log(`✓ ${path.relative(REPO, file)}`);
  }
}

main().catch((e) => {
  console.error(`✗ ${e.message}`);
  process.exitCode = 1;
});
