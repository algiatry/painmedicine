# PainMedicine.com — Next Steps

> **Purpose.** A prioritized worklist for the site as of 2026-11-14, written
> from the state of `main`. Pair it with `CONTENT-INTAKE.md` (the standard),
> `REVIEWER-BRIEF.md` (recruitment), and `CONTENT-TEMPLATE.md` (gating
> rules). Re-cut it as items close.

---

## 1. Where the site stands

| Signal | State |
|---|---|
| Content | 53 articles: 21 condition guides, 13 treatment pages, 10 understanding-pain explainers, 5 future-of-pain-medicine pages, 4 specialty pages |
| Review status | **0 / 53 reviewed.** `REVIEWERS` is empty; every page publishes as `sourced` with the "review pending" byline |
| Contact route | `SITE.editorialEmail` is empty. `/reviewers` cannot take applications, and the "Report a correction" links stay hidden until it is set |
| CI | `verify` (audit, lint, build) is a required check on `main`; Dependabot is on |
| Citations | `npm run check:refs` runs monthly and on demand. Last full run: 0 dead, 0 mismatched |
| Content lint | 0 errors, 0 warnings. Enforces the cross-link triangle and that every internal link resolves |
| Search | Header search over articles, hubs, and glossary; runs in the browser |
| Search data | No Search Console or Bing report has been run; `reports/` does not exist |
| Tests | None beyond the content lint |

The site is built and its citations are checked. What it lacks is the one
thing every page is waiting for: a named reviewer.

---

## 2. Priority 1 — Land the first medical reviewer

Still the largest trust and ranking lever, and still entirely off-repo.

1. **Set `SITE.editorialEmail`** in `src/lib/site.ts` to a monitored inbox.
   This one line opens `/reviewers` to applications and switches on the
   "Report a correction" link on every article and on `/about`.
2. **Have the one-page letter of agreement** from `REVIEWER-BRIEF.md` looked
   at by counsel.
3. **Send `REVIEWER-EMAIL.md`** to 10–20 candidates.
4. **Pre-build the launch-set packets** (`npm run review:packet -- <hub>/<slug>`)
   so a "yes" can be answered the same day.
5. **On sign-off:** add the profile to `src/lib/reviewers.ts`, run
   `review:apply`, lint, deploy, then `npm run indexnow`.
6. **Second reviewer (PharmD)** for the medication pages. That set is now
   larger: `medications-for-pain`, `medication-organ-safety`,
   `opioid-stewardship`, `opioids-for-acute-pain`, `tapering-opioids`,
   `buprenorphine-for-pain`, `ketamine`, `kratom`,
   `cannabis-and-cannabinoids`.

**Review these first.** The November pages carry open questions recorded in
PRs #40 and #41:

- `tapering-opioids` quotes the CDC's "about 10% a month or slower"
  benchmark. Keep, reword, or cut.
- `trigeminal-neuralgia` omits genetic testing before carbamazepine because
  the source could not be opened. Likely worth adding.
- `shingles-pain` rests its three-month definition on a paper whose text was
  not accessible, and gives no figure for how often shingles leads to
  lasting pain.
- `cannabis-and-cannabinoids` says nothing about federal scheduling.

---

## 3. Priority 2 — Measure before writing more

The site has grown from 41 to 53 pages with no search data behind the
choices. Close the loop before the next wave.

1. **Search Console.** Follow the setup comment in `scripts/gsc-report.mjs`,
   then `npm run gsc -- --days=90`.
2. **Bing Webmaster.** Export the Keyword Research CSV into
   `reports/bing/inbox/` and run `npm run bing`.
3. **`npm run indexnow` after every content deploy.** Twelve pages have
   shipped since September; confirm it was run for them.
4. **One dated report a month** in `reports/`, read before choosing the
   next page.

---

## 4. Priority 3 — Keep the citations honest

- **Read the monthly reference-check issue.** Dead or mismatched citations
  fail the run and open one GitHub issue.
- **About 25 links cannot be checked by script** (IASP, CDC, JAMA, investor
  pages refuse automated requests). Open them by hand once a quarter.
- **Three citations point at archive.org copies** because FDA and ABMS
  removed the originals. Replace them if the agencies republish.
- **The pipeline tracker promises quarterly updates.** Entries are current
  to 2026-11 except Evoke (2026-08) and Tanezumab (2021-12, discontinued).
  Next sweep due February 2027.

---

## 5. Priority 4 — Next content wave (after §3 has data)

Let the search reports reorder this list.

**Conditions**
- Carpal tunnel and entrapment neuropathies.
- Pain in older adults; pain in pregnancy.
- Hand osteoarthritis, if joint-specific queries justify a third joint page.

**Treatments**
- Spinal cord stimulation as its own page (now split between
  `interventional-procedures` and `future/neuromodulation`).
- Acupuncture, TENS, and complementary approaches.

Every new page: template in `CONTENT-INTAKE.md` §3, at least three primary
sources, every figure taken from a source read while drafting,
`npm run check:refs -- --only=<hub>/<slug>` clean, links in all three
directions, and into the review queue the day it ships.

---

## 6. Priority 5 — Trust surface polish (after the first byline)

- Reviewer profiles with photos and NPI numbers; the `Reviewer` type
  supports both.
- A "what changed in review" note (`review.note`) on every reviewed page.
- Link the editorial board and policy from each article's byline.

---

## 7. Small engineering items

- **Tests for the pure logic.** `search()` ranking in `src/lib/search.ts` and
  the title matcher in `scripts/check-references.ts` are both easy to break
  silently.
- **Search analytics.** Nothing records what people search for and fail to
  find. The privacy policy states that search terms never leave the
  device, so any logging would need that page changed first.

---

## 8. Not now

- **Redesign, new brand assets, or animation work.**
- **A CMS or Markdown pipeline.** Typed records plus the lint still work at
  53 pages.
- **Internationalization / non-US help lines.**
- **Newsletter, comments, accounts.**

---

## 9. The order, in one glance

1. Set `editorialEmail`; send the reviewer email; pre-build the packets.
2. Wire Search Console and Bing; run IndexNow; one report a month.
3. Read the monthly reference-check issue; hand-check the blocked links
   quarterly.
4. Write the next content wave in the order the data says.
5. Polish the trust surface once the first byline is live.
