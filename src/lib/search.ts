import { HUBS } from "./hubs";
import { ALL_ARTICLES } from "./articles";
import { GLOSSARY, termSlug } from "./glossary";

/**
 * Site search. The index is built from the same typed records the pages are
 * rendered from, served once as static JSON (/search-index.json), and ranked
 * in the browser – no third-party service, no query ever leaves the device.
 */
export type SearchEntry = {
  /** Title shown in results. */
  title: string;
  href: string;
  /** Section label, e.g. "Conditions" or "Glossary". */
  section: string;
  /** One or two sentences shown under the title. */
  summary: string;
  /** Extra searchable text that is matched but never displayed. */
  body: string;
  /** Everyday words people type for this page; ranked like the title. */
  aliases?: string;
};

const SECTION: Record<string, string> = {
  "what-is-pain-medicine": "The specialty",
  "understanding-pain": "Understanding pain",
  treatments: "Treatments",
  conditions: "Conditions",
  "future-of-pain-medicine": "Future of pain medicine",
};

/**
 * What people actually type. Each alias names something the page itself
 * covers – this is a ranking aid, never a promise of content that isn't there.
 */
export const ALIASES: Record<string, string> = {
  "/conditions/low-back-pain": "backache back ache lumbar spine",
  "/conditions/sciatica": "pinched nerve leg pain herniated disc slipped disc radiculopathy",
  "/conditions/neuropathic-pain": "nerve pain neuropathy burning tingling numbness",
  "/conditions/migraine": "headache headaches",
  "/conditions/arthritis-pain": "osteoarthritis rheumatoid joint pain knee hip",
  "/conditions/fibromyalgia": "fibro widespread pain",
  "/conditions/persistent-postsurgical-pain": "pain after surgery operation postoperative",
  "/conditions/diabetic-neuropathy": "diabetes nerve pain feet peripheral neuropathy",
  "/conditions/spinal-stenosis": "narrowing spine neurogenic claudication",
  "/conditions/crps": "complex regional pain syndrome reflex sympathetic dystrophy rsd",
  "/conditions/tmj-disorders": "jaw pain temporomandibular",
  "/conditions/chronic-pelvic-pain": "pelvis pelvic floor",
  "/conditions/central-post-stroke-pain": "stroke thalamic pain",
  "/conditions/shoulder-pain": "rotator cuff frozen shoulder",
  "/conditions/neck-pain": "cervical spine pinched nerve arm",
  "/treatments/medications-for-pain":
    "painkillers pain relievers medicine drugs pills nsaids ibuprofen acetaminophen tylenol gabapentin",
  "/treatments/medication-organ-safety": "side effects liver kidney stomach tylenol ibuprofen nsaids",
  "/treatments/interventional-procedures":
    "injections epidural steroid nerve block radiofrequency ablation spinal cord stimulator",
  "/treatments/physical-and-behavioral-therapies": "physical therapy exercise cbt mindfulness pacing",
  "/treatments/opioid-stewardship": "addiction dependence overdose naloxone tapering",
  "/treatments/buprenorphine-for-pain": "butrans belbuca suboxone",
  "/future-of-pain-medicine/pipeline": "new drugs clinical trials suzetrigine journavx",
  "/future-of-pain-medicine/neuromodulation": "spinal cord stimulator scs brain stimulation",
};

export function buildSearchIndex(): SearchEntry[] {
  const articles = ALL_ARTICLES.map((a) => ({
    title: a.title,
    href: `/${a.hub}/${a.slug}`,
    section: SECTION[a.hub] ?? "Article",
    summary: a.description,
    body: [a.answer, ...a.faqs.flatMap((f) => [f.question, f.answer])].join(" "),
    aliases: ALIASES[`/${a.hub}/${a.slug}`],
  }));

  const hubs = HUBS.map((h) => ({
    title: h.title,
    href: `/${h.slug}`,
    section: "Section",
    summary: h.description,
    body: h.intro.join(" "),
  }));

  const glossary = GLOSSARY.map((t) => ({
    title: t.term,
    href: `/glossary#${termSlug(t.term)}`,
    section: "Glossary",
    summary: t.definition,
    body: "",
  }));

  const pages = [
    {
      title: "Find help",
      href: "/find-help",
      section: "Page",
      summary:
        "Crisis lines, how to find a board-certified pain specialist, and where to turn for urgent help.",
      body: "988 SAMHSA helpline emergency referral directory doctor near me",
    },
    {
      title: "About & editorial policy",
      href: "/about",
      section: "Page",
      summary: "Who writes this site, how pages are sourced and reviewed, and how corrections work.",
      body: "sources review corrections funding independence",
    },
    {
      title: "Editorial board",
      href: "/reviewers",
      section: "Page",
      summary: "The medical reviewers behind the site, and the open call for new ones.",
      body: "reviewers physicians credentials medically reviewed",
    },
  ];

  return [...articles, ...hubs, ...glossary, ...pages];
}

/* ---------------------------------------------------------------- ranking */

const normalize = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const tokens = (s: string) => normalize(s).split(/[^a-z0-9]+/).filter(Boolean);

/** How well one query term matches a block of text: whole word > word start > inside a word. */
function termScore(term: string, words: string[]): number {
  let best = 0;
  for (const w of words) {
    if (w === term) return 3;
    if (w.startsWith(term)) best = Math.max(best, 2);
    else if (term.length >= 4 && w.includes(term)) best = Math.max(best, 1);
  }
  return best;
}

export type PreparedEntry = SearchEntry & {
  _title: string[];
  _aliases: string[];
  _summary: string[];
  _body: string[];
};

export function prepare(entries: SearchEntry[]): PreparedEntry[] {
  return entries.map((e) => ({
    ...e,
    _title: tokens(e.title),
    _aliases: tokens(e.aliases ?? ""),
    _summary: tokens(e.summary),
    _body: tokens(e.body),
  }));
}

/**
 * Rank entries for a query. Every term must match somewhere in the entry;
 * a match in the title outweighs the summary, which outweighs hidden body
 * text. The last term is treated as a prefix so results update as you type.
 */
export function search(entries: PreparedEntry[], query: string, limit = 8): PreparedEntry[] {
  const terms = tokens(query);
  if (!terms.length) return [];
  const phrase = terms.join(" ");

  const scored: { entry: PreparedEntry; score: number }[] = [];
  for (const entry of entries) {
    let score = 0;
    let matchedAll = true;
    for (const term of terms) {
      const s =
        Math.max(termScore(term, entry._title), termScore(term, entry._aliases)) * 10 +
        termScore(term, entry._summary) * 3 +
        termScore(term, entry._body);
      if (s === 0) {
        matchedAll = false;
        break;
      }
      score += s;
    }
    if (!matchedAll) continue;
    const title = entry._title.join(" ");
    if (title === phrase) score += 60;
    else if (title.startsWith(phrase)) score += 30;
    else if (title.includes(phrase)) score += 15;
    else if (terms.length > 1 && entry._aliases.join(" ").includes(phrase)) score += 15;
    // Full guides answer a search better than a one-line definition.
    if (entry.section !== "Glossary") score += 2;
    scored.push({ entry, score });
  }
  return scored
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((s) => s.entry);
}
