# PainMedicine.com — Next Steps

> **Purpose.** A prioritized, evidence-based worklist for the site as of
> 2026-09-24, written from the state of `main` and the live deployment.
> Pair it with `CONTENT-INTAKE.md` (the standard), `REVIEWER-BRIEF.md`
> (recruitment), and `CONTENT-TEMPLATE.md` (gating rules). Re-cut it as
> items close.

---

## 1. Where the site stands

| Signal | State |
|---|---|
| Live URLs (sitemap) | 54 — 8 static, 5 hubs, 41 articles; live sitemap matches `main` exactly |
| Content | 16 condition guides, 8 treatment pages, 8 understanding-pain explainers, 5 future-of-pain-medicine pages, 4 specialty pages |
| Hub roadmaps | Every `planned` spoke in `src/lib/hubs.ts` has an `href` — the launch queue in `CONTENT-INTAKE.md` §7 is fully delivered |
| Review status | **0 / 41 reviewed.** `REVIEWERS` registry is empty; every page publishes as `sourced` with the honest "review pending" byline |
| Reviewer tooling | Complete: `review:packet`, `review:apply`, registry-gated lint, `/reviewers` board page, Person JSON-LD, cadence fields |
| Build / lint | `next build` clean (156 static pages); content-lint 0 errors, 1 warning; `npm audit` 0 vulnerabilities |
| CI | None — no `.github/` directory; lint and build run only on the developer's machine |
| Tests | None (the content lint is the only automated check) |
| Search tooling | `gsc-report`, `bing-keywords`, `indexnow` scripts exist; they need credentials / CSV exports and have no run cadence |
| Contact route | `SITE.editorialEmail` is empty, so the open call on `/reviewers` renders "a contact route for applications is being set up" |
| Open issues / PRs | 0 / 0 |

The site is built, hardened, and indexed. What it lacks is not more pages;
it is the one thing every page is waiting for: a named reviewer.

---

## 2. Priority 1 — Land the first medical reviewer (the gate)

This is the single biggest trust and ranking lever (YMYL content with
`reviewedBy` structured data), and every piece of machinery for it already
exists. The blocker is entirely off-repo.

1. **Open the door.** Set `SITE.editorialEmail` in `src/lib/site.ts` to a
   monitored inbox. Until this ships, a candidate who finds `/reviewers` has
   no way to apply. One-line change; do it first.
2. **Put the agreement in place.** Draft the one-page letter of agreement
   from `REVIEWER-BRIEF.md` ("Boundaries & a light agreement") and have it
   looked at by counsel. Candidates will ask for it before signing the
   attestation.
3. **Send the first-touch email** (`REVIEWER-EMAIL.md`) to 10–20 candidates
   via the channels in the brief (ASRA / AAPM / AAPM&R directories, LinkedIn
   "board certified pain medicine" + "medical reviewer", fellowship program
   alumni). Offer the per-page honorarium; it is the lowest-friction shape.
4. **Pre-generate the launch-set packets** so a "yes" can be answered the
   same day:
   ```
   npm run review:packet -- conditions/low-back-pain
   # …for all 13 pages in the REVIEWER-BRIEF launch set
   ```
5. **On the first sign-off:** add the verified profile to
   `src/lib/reviewers.ts`, run `review:apply`, `npm run lint`, deploy, then
   `npm run indexnow` so the `reviewedBy` markup is recrawled within hours.
6. **Second reviewer (PharmD)** for the four medication pages
   (`medications-for-pain`, `medication-organ-safety`, `opioid-stewardship`,
   `kratom`) once the first physician is signed.

Success looks like: `review:packet --queue` shows the 13 launch pages as
`reviewed`, and `/reviewers` lists at least one profile.

---

## 3. Priority 2 — Close the correctness debt (small, do this week)

Each item is under an hour and prevents the site contradicting itself.

- **`public/llms.txt` is stale.** It says `/conditions` is "in editorial
  preparation" and lists only 12 of the 41 spokes, and it still describes
  pages "in editorial review" carrying a notice — none do. Regenerate it from
  `ALL_ARTICLES` (a small script under `scripts/`, or a route handler at
  `/llms.txt` like `sitemap.ts`) so it cannot drift again.
- **Pipeline tracker cadence.** `/future-of-pain-medicine/pipeline` promises
  quarterly updates; entries `updated` more than two quarters ago:
  Pilavapadin (2025-03), VX-993 (2025-08), Tanezumab (2021-12). Re-check each
  against ClinicalTrials.gov / sponsor releases and bump `updated`, or mark
  the program discontinued explicitly.
- **Content-lint warning.** `/conditions/neck-pain` mentions opioids once
  without the inline SAMHSA line. Either add the helpline sentence or, if
  the mention is purely historical, rephrase so the lint is clean. A clean
  lint is what lets CI (below) block on warnings.
- **Static-page `lastModified`.** `sitemap.ts` stamps `/about`, `/privacy`,
  etc. with `new Date()` on every build, which tells crawlers those pages
  change daily. Give them real dates.

---

## 4. Priority 3 — Automate the gate (so the standard holds without you)

- **Add CI.** A single GitHub Actions workflow on pull requests:
  `npm ci && npm run lint && npm run build`. The content lint is the
  editorial gate; today nothing enforces it before merge.
- **Add a PR template** (`.github/pull_request_template.md`) with the two
  questions that matter here: *which pages changed status* and *were new
  references verified (PubMed ID / URL resolves)*.
- **Dependabot or Renovate** for `next` / `react`. PR #3 patched a critical
  Next.js RCE by hand; make that automatic.
- **Reference-link check** as a lint step: fetch each reference URL (or at
  least validate PubMed IDs against E-utilities) on a monthly schedule and
  fail on 404s. Dead citations are the fastest way to lose the trust the
  bylines will earn.

---

## 5. Priority 4 — Measure before writing more

The site has 41 pages and no organic data loop closed yet. Before the next
content wave, know what is landing.

1. **Wire Google Search Console.** Follow the setup comment in
   `scripts/gsc-report.mjs` (service account, property permission), then run
   `npm run gsc -- --days=90`. The report surfaces striking-distance queries
   (positions 5–20) and low-CTR titles — the cheapest wins available.
2. **Wire Bing Webmaster.** Drop the Keyword Research CSV into
   `reports/bing/inbox/` and run `npm run bing`. Its "content gap" output is
   the input for §6.
3. **Run `npm run indexnow` after every content deploy.** It is documented
   but has no place in the release habit; add it to the deploy checklist (or
   a post-deploy hook).
4. **Monthly cadence.** One dated report per month in `reports/` (already
   git-ignored), reviewed before deciding the next page.

---

## 6. Priority 5 — Next content wave (only after §5 has data)

The launch queue is done. Candidates below are chosen for search demand and
for filling structural holes, not because they are next alphabetically.
Let the GSC / Bing gap report reorder them.

**Cross-linking first (no new pages).** The mechanism → treatment → future
triangle in `CONTENT-INTAKE.md` §7 is only partly realized: across 16
condition guides there are 12 `related` links into `/treatments`, 13 into
`/understanding-pain`, and only 8 into `/future-of-pain-medicine`. Give
every condition guide at least one link to each of the three, and every
treatment page a link back to the conditions it serves. This is a
half-day of editing with outsized effect on crawl depth and dwell time.

**Conditions (gap-filling)**
- Postherpetic neuralgia / shingles pain — high-volume neuropathic query,
  distinct from diabetic neuropathy.
- Trigeminal neuralgia — the canonical "worst pain" search; pairs with the
  neuromodulation page.
- Tension-type and cluster headache — migraine is the only headache page;
  headache queries are the largest single cluster in pain search.
- Knee, hip, and shoulder osteoarthritis as spokes off arthritis-pain —
  joint-specific queries dominate over the generic term.
- Carpal tunnel / entrapment neuropathies — common, surgical-decision-heavy.
- Pain in older adults; pain in pregnancy — population pages the
  medication-safety content already half-answers.

**Treatments (gap-filling)**
- Cannabis and cannabinoids for pain — the natural sibling of the kratom
  page; same honest-evidence framing.
- Spinal cord stimulation as its own page — currently split between
  interventional-procedures and future/neuromodulation.
- Ketamine and infusion therapies — rising query volume, needs the
  stewardship treatment the opioid page got.
- Acupuncture, TENS, and complementary approaches — high demand, and the
  site's "describe, never prescribe" voice handles the mixed evidence well.
- Tapering opioids safely — the most-asked follow-up to opioid stewardship;
  must stay at the literacy level (CDC 2022 framing), never a schedule.

**Understanding pain**
- Central sensitization / nociplastic pain as a standalone explainer — the
  fibromyalgia, TMJ, and pelvic-pain pages all lean on it.

Every new page: template in `CONTENT-INTAKE.md` §3, ≥3 primary sources,
figures, FAQ block, `related` links in all three directions, and it enters
the review queue on the day it ships.

---

## 7. Priority 6 — Trust surface polish (after the first byline)

- **Corrections route.** `/about` has a "Corrections" section that invites
  reports but gives no address, and the README says "open an issue". Add
  the editorial email (or the issues link) there and a one-line "Report a
  correction" pointer in the article footer.
- **Reviewer profiles with photos and NPI** — the `Reviewer` type supports
  both; use them, they are what Google's E-E-A-T guidance actually checks.
- **"What changed in review" notes** (`review.note`) on every reviewed page
  — the field exists; make it a habit so readers can see the gate working.
- **Author/organization page depth.** `/about` describes the policy; once
  reviewers exist, link the board and the policy from every article's
  byline, not just the footer.

---

## 8. Not now

- **Redesign, new brand assets, or animation work.** Brand is settled
  (`brand/`, lockup B shipped). No reader-facing return until reviewed.
- **A CMS or Markdown pipeline.** Typed records in `src/lib/*.ts` plus the
  lint are working; 41 pages is not the scale that justifies a CMS.
- **Internationalization / non-US help lines.** The audience, the sources,
  and the crisis lines are US-scoped; broadening them is a different product.
- **Newsletter, comments, accounts.** Each is a privacy-policy and
  moderation surface the site is deliberately free of.

---

## 9. The order, in one glance

1. Set `editorialEmail`; send the reviewer email; pre-build the 13 packets.
2. Fix `llms.txt`, stale pipeline entries, the neck-pain lint warning,
   static sitemap dates.
3. Add CI (lint + build), PR template, dependency updates.
4. Wire GSC and Bing; run IndexNow after every deploy; one report a month.
5. Complete the cross-link triangle on every existing page.
6. Write the next content wave in the order the data says.
7. Polish the trust surface once the first byline is live.
