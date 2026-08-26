/**
 * content-lint — the mechanical half of the YMYL editorial gate.
 *
 * Enforces the hard rules in CONTENT-TEMPLATE.md against the typed content
 * modules (hubs.ts, articles via articles.ts). Run as part of `npm run lint`;
 * exits non-zero on any ERROR so non-compliant content cannot ship.
 *
 * Modes:
 *   default          — full compliance lint (errors fail, warnings report)
 *   --cadence-only   — print ONLY overdue re-review lines (for the monthly
 *                      cadence-keeper cron; silent + exit 0 when clean)
 *
 * This script is a safety net, not the whole gate: prose that lives in
 * src/components/science/*.tsx is scanned too, matched by article slug.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { HUBS } from "../src/lib/hubs";
import { ALL_ARTICLES } from "../src/lib/articles";
import type { PageMeta } from "../src/lib/schema";

const REPO = path.resolve(__dirname, "..");
const COMPONENT_DIRS = ["science", "future", "conditions", "treatments"].map(
  (d) => path.join(REPO, "src", "components", d)
);

type Finding = { level: "ERROR" | "WARN"; page: string; msg: string };
const findings: Finding[] = [];
const err = (page: string, msg: string) =>
  findings.push({ level: "ERROR", page, msg });
const warn = (page: string, msg: string) =>
  findings.push({ level: "WARN", page, msg });

/* ---------------------------------------------------------------- helpers */

/** Collect every string value nested anywhere in an object. */
function allStrings(obj: unknown): string[] {
  if (typeof obj === "string") return [obj];
  if (Array.isArray(obj)) return obj.flatMap(allStrings);
  if (obj && typeof obj === "object")
    return Object.values(obj).flatMap(allStrings);
  return [];
}

/** Prose component source for an article slug, if one exists. */
function proseFor(slug: string): string {
  const key = slug.replace(/-/g, "");
  for (const dir of COMPONENT_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const hit = fs
      .readdirSync(dir)
      .find((f) =>
        f.toLowerCase().replace(/[^a-z0-9]/g, "").includes(key)
      );
    if (hit) return fs.readFileSync(path.join(dir, hit), "utf8");
  }
  return "";
}

const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const wordCount = (s: string) => s.trim().split(/\s+/).length;

/* ------------------------------------------------------- banned language */

// Regulatory terms of art are allowed (they are quotes of FDA designations).
const ALLOWED_BREAKTHROUGH =
  /breakthrough (therapy|device)s? designation|fda breakthrough/i;

const BANNED: { re: RegExp; label: string }[] = [
  { re: /\bcures?\b|\bcurative\b/i, label: `"cure" claim` },
  { re: /\bbest treatment\b|\bbest (drug|medication|therapy|option)\b/i, label: `"best treatment" superlative` },
  { re: /\bguaranteed?\b.{0,20}\b(relief|results?|cure)\b/i, label: `"guaranteed relief" claim` },
  { re: /\bmiracle\b/i, label: `"miracle" claim` },
];

// Dosing guidance: numbers with dose units, or take/schedule phrasing.
const DOSING: { re: RegExp; label: string }[] = [
  { re: /\b\d+(\.\d+)?\s?(mg|mcg|µg|milligrams?|micrograms?)\b/i, label: "numeric dose (mg/mcg)" },
  { re: /\btake\s+\d+\b/i, label: `"take N" instruction` },
  { re: /\b\d+\s?(times?|x)\s?(a|per)\s?(day|daily|week)\b/i, label: "dosing schedule" },
  { re: /\bhow to (get|obtain|buy|acquire)\b.{0,40}\b(opioid|oxycodone|fentanyl|hydrocodone|morphine|controlled)\b/i, label: "how-to-obtain framing for controlled substances" },
];

function scanText(page: string, text: string, origin: string) {
  for (const { re, label } of BANNED) {
    const m = text.match(re);
    if (!m) continue;
    // Affirmative-use check: negated forms ("there is no cure", "a cure is
    // not always possible") are honest language and allowed — only flag
    // affirmative claims.
    const idx = text.toLowerCase().indexOf(m[0].toLowerCase());
    const before = text.slice(Math.max(0, idx - 30), idx).toLowerCase();
    const after = text.slice(idx + m[0].length, idx + m[0].length + 45).toLowerCase();
    if (/\b(no|not|isn't|is not|without|cannot|can't|never|nor)\s+(a\s+|known\s+|the\s+)?$/.test(before)) continue;
    if (/^\s*(is|are|was|were|remains?)?\s*(not|n't|no longer possible|rarely possible)\b/.test(after) || /\bnot (always )?(possible|available|realistic)\b/.test(after)) continue;
    err(page, `banned phrasing (${label}) in ${origin}: “…${text.slice(Math.max(0, idx - 25), idx + m[0].length + 25).replace(/\s+/g, " ")}…”`);
  }
  if (!ALLOWED_BREAKTHROUGH.test(text) && /\bbreakthrough\b/i.test(text)) {
    const idx = text.toLowerCase().indexOf("breakthrough");
    const quoted = /["“”']/.test(text.slice(Math.max(0, idx - 2), idx + 14));
    if (!quoted)
      err(page, `banned phrasing ("breakthrough" outside quote/FDA designation) in ${origin}`);
  }
  for (const { re, label } of DOSING) {
    const m = text.match(re);
    if (m)
      err(page, `dosing/obtainment guidance (${label}) in ${origin}: “${m[0]}”`);
  }
}

/* ------------------------------------------------------- review status */

function checkReviewModel(page: string, meta: PageMeta) {
  if (meta.status === "reviewed") {
    const r = meta.reviewer;
    if (!r || !r.name || !r.credentials || !r.reviewedAt)
      err(page, `status "reviewed" without complete reviewer (name, credentials, reviewedAt) — the gate forbids this`);
    else if (!isoDate.test(r.reviewedAt))
      err(page, `reviewer.reviewedAt is not an ISO date: "${r.reviewedAt}"`);
  } else if (meta.reviewer) {
    err(page, `reviewer object present but status is "${meta.status}" — a byline may only appear on reviewed pages`);
  }
  if (!isoDate.test(meta.lastUpdated))
    err(page, `lastUpdated is not an ISO date: "${meta.lastUpdated}"`);
  else if (new Date(meta.lastUpdated) > new Date())
    err(page, `lastUpdated is in the future: ${meta.lastUpdated}`);
}

/* -------------------------------------------------------------- cadence */

const DAY = 24 * 60 * 60 * 1000;
function cadenceCheck(): string[] {
  const overdue: string[] = [];
  const now = Date.now();
  for (const a of ALL_ARTICLES) {
    const anchor = a.reviewer?.reviewedAt ?? a.lastUpdated;
    const ageDays = Math.floor((now - new Date(anchor).getTime()) / DAY);
    const limit = a.hub === "future-of-pain-medicine" ? 92 : 366; // quarterly vs annual
    if (ageDays > limit)
      overdue.push(
        `OVERDUE re-review: /${a.hub}/${a.slug} — last ${anchor} (${ageDays}d ago; policy: ${limit <= 92 ? "quarterly" : "annual"})`
      );
  }
  for (const h of HUBS) {
    const ageDays = Math.floor((now - new Date(h.lastUpdated).getTime()) / DAY);
    if (ageDays > 366)
      overdue.push(`OVERDUE re-review: /${h.slug} (hub) — last ${h.lastUpdated} (${ageDays}d ago; policy: annual)`);
  }
  return overdue;
}

/* ----------------------------------------------------------------- main */

const cadenceOnly = process.argv.includes("--cadence-only");

if (cadenceOnly) {
  const overdue = cadenceCheck();
  if (overdue.length) {
    console.log("painmedicine.com — published re-review cadence is being missed:\n");
    overdue.forEach((l) => console.log("  " + l));
    console.log("\nEditorial policy publishes these cadences; update the pages (and lastUpdated) to keep the promise true.");
  }
  process.exit(0); // reporting job, never a build failure
}

// -- hubs
const hubSlugs = new Set<string>();
for (const h of HUBS) {
  const page = `/${h.slug}`;
  if (hubSlugs.has(h.slug)) err(page, "duplicate hub slug");
  hubSlugs.add(h.slug);
  checkReviewModel(page, h);
  scanText(page, allStrings(h).join("\n"), "hubs.ts");
}

// -- articles
const seen = new Set<string>();
for (const a of ALL_ARTICLES) {
  const page = `/${a.hub}/${a.slug}`;
  if (seen.has(page)) err(page, "duplicate article (hub+slug)");
  seen.add(page);
  if (!hubSlugs.has(a.hub)) err(page, `article hub "${a.hub}" has no matching hub in hubs.ts`);
  checkReviewModel(page, a);

  // Required sections (CONTENT-TEMPLATE.md)
  if (!a.answer?.trim()) err(page, "missing plain-English answer (AEO first-60-words rule)");
  else if (wordCount(a.answer) > 110)
    warn(page, `answer is ${wordCount(a.answer)} words — template targets ~50–60; trim if possible`);
  if (!a.faqs || a.faqs.length < 3 || a.faqs.length > 6)
    err(page, `FAQ block must have 3–6 questions (has ${a.faqs?.length ?? 0})`);
  if (!a.references || a.references.length < 3)
    err(page, `needs ≥3 primary/authoritative references (has ${a.references?.length ?? 0})`);
  for (const r of a.references ?? [])
    if (!/^https:\/\//.test(r.url)) err(page, `reference URL not https: ${r.url}`);

  const typedText = allStrings(a).join("\n");
  const prose = proseFor(a.slug);
  scanText(page, typedText, "typed record");
  if (prose) scanText(page, prose, "prose component");

  // Opioid rule: substantive opioid content must carry SAMHSA inline.
  const combined = typedText + "\n" + prose;
  const opioidMentions = (combined.match(/\bopioids?\b/gi) ?? []).length;
  const hasSamhsa = /SAMHSA|1-800-662/i.test(combined);
  if (opioidMentions >= 3 && !hasSamhsa)
    err(page, `substantive opioid content (${opioidMentions} mentions) without inline SAMHSA helpline`);
  else if (opioidMentions > 0 && opioidMentions < 3 && !hasSamhsa)
    warn(page, `mentions opioids (${opioidMentions}×) without inline SAMHSA — verify context (site-wide footer helpline still renders)`);
}

// -- cadence (as warnings in full mode)
for (const line of cadenceCheck()) warn("cadence", line);

/* --------------------------------------------------------------- report */

const errors = findings.filter((f) => f.level === "ERROR");
const warns = findings.filter((f) => f.level === "WARN");

for (const f of findings)
  console.log(`${f.level === "ERROR" ? "✖" : "⚠"} [${f.level}] ${f.page}: ${f.msg}`);

console.log(
  `\ncontent-lint: ${HUBS.length} hubs, ${ALL_ARTICLES.length} articles checked — ${errors.length} error(s), ${warns.length} warning(s).`
);
if (errors.length) {
  console.log("Fix errors before shipping — see CONTENT-TEMPLATE.md.");
  process.exit(1);
}
