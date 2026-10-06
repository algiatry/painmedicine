# Content audit — source-literature fact-check (2026-10)

An audit of the medical **claims** across all 45 hub-spoke articles against
primary-source literature (the articles' own cited references first, then
independent corroboration: WHO, NIH/NINDS, NICE, Cochrane, IASP, FDA/DEA,
CDC/ADA/ACR/ACOG/AAOS guidelines, ABMS/ACGME, and the named trials/journals).

**Scope note.** This checks factual accuracy against sources. It is not a
clinical review and does not replace the site's own reviewer model.

## Headline

Roughly **270 hard, checkable claims** (statistics, prevalence/incidence,
dates, approval years and status, named trials and their results, guideline
positions) were verified.

| Severity | Count |
|----------|-------|
| HIGH (wrong / contradicted / potentially harmful) | **0** |
| MED (misleading, notably off, or chart/number mismatch) | **1** |
| LOW (imprecise, rounded, slightly dated, or citation-attribution nuance) | ~15 |

The content held up unusually well. The great majority of claims verified
**exactly** — including the load-bearing figures (WHO low-back-pain burden,
asymptomatic-imaging rates, CGRP/suzetrigine approval years, SAMSON nocebo
numbers, Cochrane effect sizes, CDC-2022 opioid guidance, the ABMS six-board
pain-medicine pathway, and the pipeline phase/status for every candidate).

## Fixes applied in this change

| Article | Was | Now | Source |
|---------|-----|-----|--------|
| central-post-stroke-pain (onset chart) | "~28% after the first year" | "~5% after the first year" (chart, desc, footnote corrected) | Liampas 2020 — late onset is ~5%, not ~28% (the 28% had been computed by subtraction and conflated the ~26% coincident-onset group) |
| central-post-stroke-pain (prose) | ">50% in those whose strokes caused sensory loss or hit the thalamus" | ">50% after strokes that struck the thalamus or the brainstem" | Liampas 2020 attributes the >50% to thalamic/medullary strokes |
| migraine | "three times the rate of men" | "two to three times the rate of men" | Female:male migraine prevalence ≈ 2–3:1; 3:1 was the upper edge |
| crps | "population studies find roughly 26 new cases per 100,000" | "a large Dutch population study found roughly 26 … (other studies report fewer)" | de Mos 2007 = 26.2/100k; Sandroni 2003 ≈ 5.5/100k — not a consensus figure |
| shoulder-pain | SIX-Shoulder "200 people" | "183 people" | Trial randomized 183 (91 injection / 92 exercise) |
| kratom (answer + body) | "roughly two million Americans use it each year" | "roughly 1.7 million" | NSDUH most-cited figure ≈ 1.7M (age 12+, 2021) |
| how-pain-physicians-train | "120 accredited fellowship programs" | "over 100 accredited fellowship programs" | ~109–115 ACGME-accredited programs |
| how-pain-physicians-train | "a four-year residency" (unqualified) | "four-year residency for the most common routes … three to five years across the six feeder specialties" | FM = 3y, radiology = 5y among the six boards |
| the-pain-team | team roster "consistent across IASP, the CDC's 2022 guideline, and academic centers"; pharmacists/social workers "named in the CDC's picture" | roster attributed to IASP + academic centers; CDC cited for the coordinated-care principle only | CDC 2022 endorses multidisciplinary care but does not enumerate a team roster |
| pain-and-sleep | regions that went quiet: "the thalamus, the insula, and the brain's reward circuitry" | "the insula and the brain's reward circuitry" | Krause 2019 — finding is insula + reward (striatum/NAc), not thalamus |
| pain-and-sleep | deep-sleep disruption "lowered pain thresholds by about a quarter" | "lowered pain thresholds" (unsourced magnitude removed) | "~a quarter" was not tied to a cited source |
| pain-and-emotion | expectation changed pain "by around 20%" | "by roughly 15 to 30%, depending on the study" | effect size varies by study (Koyama ≈28%; others 15–20%) |
| the-nocebo-effect (SAMSON caption) | "60 people … each spent months …" | "60 people (49 completed the protocol) …" | 60 enrolled, 49 completed |
| pipeline: Pilavapadin (LX9211) | note "Phase 3 planned", updated 2025-03 | note "FDA cleared Phase 3 development in early 2026", updated 2026-04 | entry was stale for a quarterly-reviewed tracker |
| pipeline: ST-503 | "Phase 1 trial" (note + source label) | "Phase 1/2 trial" | registered NCT06980948 is a Phase 1/2 design |
| pipeline: Cebranopadol | sponsor note (none) | added "Now developed by Adneuris Therapeutics, a Tris Pharma company" | program moved to Adneuris (Tris subsidiary) in 2026 |

## Flagged for the team — citations to confirm (substance not contradicted)

These claims are **not** established errors; the auditors simply could not
independently confirm the exact cited paper or figure (several PubMed pages are
behind consent walls, and a few sources are very recent / in-press). Worth a
quick citation check:

- **interventional-procedures** — "a 2026 meta-analysis of 17 studies and 669
  patients found burst stimulation beat conventional by ~1.3 points" (cited
  Aldehri et al., PMID 42742508). Confirm the PMID resolves with those numbers.
- **opioids-for-acute-pain** — the exact per-condition point estimates
  (abdominal ~18, dental ~20, myringotomy ~15, musculoskeletal ~9 on 0–100)
  attributed to the 2026 Sydney overview. The overview, its 59-review scope, and
  the "very small for MSK / earns its place for abdominal & procedural" framing
  all verified; the precise decimals were not independently reconfirmed.
- **mind-and-brain** — the 2025 nature-sounds burn-dressing trial
  (Zarei et al., PMID 41066932). Substance fine; confirm the citation.
- **attention-and-distraction** — Tavakolnia et al., *Pain Management Nursing*
  2026 (N=114 preschoolers). Confirmed the paper exists and supports the claim;
  exact N/design not reconfirmable from the in-press abstract. Leaning on a
  one-month-old source is a durability note, not an accuracy one.

## Not changed (deliberate)

- **the-placebo-effect** "~30% by 2013" placebo-arm pain reduction — approximate
  but supported by the cited rising-trend source (Tuttle 2015). Left as-is.
- **the-nocebo-effect** SAMSON figure footnote cites "Howard 2021" — both the
  2020 primary (Wood, NEJM) and 2021 analysis (Howard, JACC) are in the
  reference list; which reported the 0.90 nocebo ratio is a citation-precision
  nuance, left unchanged to avoid introducing an error.
- **how-pain-physicians-train** figure caption "about nine years" — a reasonable
  simplification for the common paths; the prose now carries the 3–5 year nuance.
