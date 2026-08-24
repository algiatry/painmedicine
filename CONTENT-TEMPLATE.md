# PainMedicine.com — Content Template & Editorial Rules

This site is YMYL (Your Money / Your Life) medical content. Every rule here
exists to protect readers and the site's credibility. **No exceptions without
explicit sign-off.**

## Publication gate (hard rules)

1. **Clinical content is HELD until council reviewer credentials are
   confirmed.** Until then, pages ship as structural/orientation content with
   `status: "pending-review"` and the in-review notice rendered by
   `ReviewByline`.
2. A page may set `status: "reviewed"` ONLY when a named reviewer with
   publishable credentials (MD, DO, PharmD, DPT, PhD, etc.) has reviewed it.
   The reviewer object (name, credentials, reviewedAt) is then required.
3. Every page renders the footer disclaimer (automatic via layout). Opioid
   content additionally must include the SAMHSA helpline inline.

## Voice

- Compassionate, plain-English, evidence-cited. Target ~8th-grade reading level.
- The emotional spine: "You are not imagining your pain."
- Describe, never prescribe. Always route decisions to "discuss with your physician."

### Banned phrasings
- "cure," "best treatment," "guaranteed relief," "miracle," "breakthrough" (unless quoting)
- Any dosing guidance whatsoever
- Any "how to obtain" framing for controlled substances

## Required sections per clinical page

1. **Title + one-paragraph plain answer** (AEO: answer the query in the first 60 words)
2. **Body sections** per the page type template (condition / treatment / science)
3. **FAQ block** (3–6 questions, mirrored into `FAQPage` JSON-LD)
4. **References** — ≥3 primary/authoritative sources (NIH, CDC, IASP, FDA labels, Cochrane, peer-reviewed journals), linked and dated
5. **Reviewer byline block** (or in-review notice)
6. **Last-updated date**

## Condition page template

what it is → why it hurts (mechanism, patient-level) → today's treatment
ladder (described, not recommended) → what's coming (link to
/future-of-pain-medicine) → when to seek a specialist → FAQ → references.

## Update cadence

- Future-science pages: re-review quarterly (FDA approvals move fast).
- Condition/treatment pages: re-review annually or on major guideline changes.
- Every re-review updates `lastUpdated` and (if clinical) `reviewer.reviewedAt`.

## Data model

Typed content lives in `src/lib/*.ts` (`hubs.ts` today; `conditions.ts`,
`treatments.ts`, `future.ts` as sections build out). Hub/spoke pages are
generated via `generateStaticParams`. Do not hand-write one-off page copy that
bypasses the review-status model.
