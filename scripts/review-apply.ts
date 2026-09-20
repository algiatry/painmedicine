/**
 * review-apply — record a reviewer's sign-off in a page's typed record.
 *
 *   npm run review:apply -- conditions/low-back-pain --reviewer jane-doe --date 2026-10-01
 *       [--due 2027-10-01] [--note "Clarified imaging red flags."] [--dry]
 *
 * What it does, in the page's src/lib/*.ts record:
 *   status: "sourced"  →  status: "reviewed"
 *   inserts  review: { reviewer, reviewedAt, reviewDue?, note? }
 *   lastUpdated  →  the review date (if older)
 *
 * Refuses unless the reviewer slug exists in src/lib/reviewers.ts (add the
 * profile from their attestation first). Run `npm run lint` afterwards — the
 * content lint re-validates the record against the registry.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { ALL_ARTICLES } from "../src/lib/articles";
import { HUBS } from "../src/lib/hubs";
import { getReviewer, defaultReviewDue } from "../src/lib/reviewers";

const REPO = path.resolve(__dirname, "..");
const LIB = path.join(REPO, "src", "lib");
const ISO = /^\d{4}-\d{2}-\d{2}$/;

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : undefined;
}

function main() {
  const args = process.argv.slice(2).filter((a) => a !== "--");
  const target = args.find((a) => !a.startsWith("--"));
  const reviewer = arg("reviewer");
  const date = arg("date");
  const due = arg("due");
  const note = arg("note");
  const dry = args.includes("--dry");

  if (!target || !reviewer || !date)
    throw new Error("usage: review-apply <hub>/<slug> --reviewer <slug> --date YYYY-MM-DD [--due YYYY-MM-DD] [--note \"...\"] [--dry]");
  if (!ISO.test(date)) throw new Error(`--date must be YYYY-MM-DD, got "${date}"`);
  if (due && !ISO.test(due)) throw new Error(`--due must be YYYY-MM-DD, got "${due}"`);
  if (!getReviewer(reviewer))
    throw new Error(`reviewer "${reviewer}" is not in src/lib/reviewers.ts — add the verified profile first`);

  const [hub, slug] = target.replace(/^\//, "").split("/");
  const isHub = !slug;
  const rec = isHub
    ? HUBS.find((h) => h.slug === hub)
    : ALL_ARTICLES.find((a) => a.hub === hub && a.slug === slug);
  if (!rec) throw new Error(`no page at /${target}`);
  if (rec.status !== "sourced" && rec.status !== "reviewed")
    throw new Error(`/${target} is "${rec.status}" — only sourced (or previously reviewed) pages can take a sign-off`);

  // Locate the record in the lib module that declares it.
  const files = fs.readdirSync(LIB).filter((f) => f.endsWith(".ts"));
  let hit: { file: string; src: string; start: number } | undefined;
  for (const f of files) {
    const src = fs.readFileSync(path.join(LIB, f), "utf8");
    const re = new RegExp(`\\n(\\s*)slug: "${(isHub ? hub : slug)!.replace(/[-]/g, "\\-")}",`, "g");
    let m: RegExpExecArray | null;
    while ((m = re.exec(src))) {
      // Confirm it is the right hub by looking back to the opening brace.
      const open = src.lastIndexOf("\n  {", m.index);
      const block = src.slice(open, src.indexOf("\n  }", m.index));
      if (isHub ? block.includes("heading:") : block.includes(`hub: `)) {
        if (!isHub) {
          const hubMatch = block.match(/hub:\s*(HUB|"([^"]+)")/);
          const declared = hubMatch?.[2] ?? (src.match(/const HUB = "([^"]+)"/)?.[1] ?? "");
          if (declared !== hub) continue;
        }
        hit = { file: f, src, start: open };
        break;
      }
    }
    if (hit) break;
  }
  if (!hit) throw new Error(`could not locate the typed record for /${target} in src/lib/*.ts`);

  const { file, src, start } = hit;
  const end = src.indexOf("\n  }", start);
  let block = src.slice(start, end);

  // 1. status
  if (!/status: "(sourced|reviewed)",/.test(block))
    throw new Error(`record for /${target} has no editable status line`);
  block = block.replace(/status: "(sourced|reviewed)",/, 'status: "reviewed",');

  // 2. review record (replace an existing one, else insert after status)
  const reviewLines = [
    `    review: {`,
    `      reviewer: "${reviewer}",`,
    `      reviewedAt: "${date}",`,
    ...(due ? [`      reviewDue: "${due}",`] : []),
    ...(note ? [`      note: ${JSON.stringify(note)},`] : []),
    `    },`,
  ].join("\n");
  if (/\n    review: \{[\s\S]*?\n    \},/.test(block))
    block = block.replace(/\n    review: \{[\s\S]*?\n    \},/, "\n" + reviewLines);
  else block = block.replace(/(\n\s*status: "reviewed",)/, `$1\n${reviewLines}`);

  // 3. lastUpdated — never move it backwards
  const lu = block.match(/lastUpdated: (?:"([^"]+)"|(\w+)),/);
  if (lu) {
    const current = lu[1] ?? "";
    if (!lu[1] || current < date) block = block.replace(/lastUpdated: (?:"[^"]+"|\w+),/, `lastUpdated: "${date}",`);
  }

  const next = src.slice(0, start) + block + src.slice(end);
  const rel = path.relative(REPO, path.join(LIB, file));
  if (dry) {
    console.log(`--- ${rel} (dry run) ---\n${block.trim()}\n`);
    return;
  }
  fs.writeFileSync(path.join(LIB, file), next, "utf8");
  console.log(`✓ /${target} → reviewed by ${reviewer} on ${date} (due ${due ?? defaultReviewDue(hub, date)}) — ${rel}`);
  console.log("  next: npm run lint && commit");
}

try {
  main();
} catch (e) {
  console.error(`✗ ${(e as Error).message}`);
  process.exitCode = 1;
}
