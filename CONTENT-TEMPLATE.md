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
   A `review` record (`reviewer` slug into src/lib/reviewers.ts, `reviewedAt`, optional `reviewDue` + public `note`) is then required, and the slug must resolve to a registered profile.
3. Every page renders the footer disclaimer (automatic via layout). Opioid
   content additionally must include the SAMHSA helpline inline.

## Voice & tone

- Compassionate, plain-English, evidence-cited. Target ~8th-grade reading level.
- The emotional spine: **"You are not imagining your pain — and you are not powerless over it."**
- Describe, never prescribe. Always route decisions to "discuss with your physician."

### Default to the optimistic take — opportunity over anxiety

Pain content tends to catastrophize. We do the opposite. When the evidence
supports hope, we lead with it in plain, confident language. The reader
should leave each page knowing what they *can* do next, not just what might
go wrong. Opportunity over anxiety, every time the science allows.

This is not spin — it is honest prognosis, stated with the confidence the
evidence earns. The discipline is **calibrating the promise to the
condition**, never promising more than the science, and never promising less:

- **Recovery-realistic (lead boldly with recovery).** Acute musculoskeletal
  and orthopedic injury, most post-surgical pain, many sports injuries — the
  large ortho audience where full recovery is the *expected* outcome. Say so
  directly: "Most people make a complete recovery." Pessimism here is its own
  inaccuracy. Frame healing as the default and the reader as its active
  participant (movement, rehab, pacing).
- **Momentum-realistic (lead with a field that is winning).** Migraine and
  conditions where the science is visibly improving — newer targeted
  preventives, clearer hormone-cycle and perimenopausal management, nerve
  blocks and procedures that can now target close to the source. The honest
  message is forward motion: "This is one of the fastest-moving areas in
  medicine, and the options keep getting better." Hope anchored to a named,
  citable advance — never to a vague someday.
- **Management-realistic (lead with agency, not cure).** Chronic and
  neuropathic pain where the honest goal is *less pain, more life* rather than
  zero pain. Here optimism means control and self-efficacy — neuroplasticity,
  the brain's gate, the real relief in the placebo page — not a finish line
  that may never come.

### Agency without blame (hard rule)

Never imply that remaining pain is a failure of will, effort, or attitude.
No "where there's a will there's a way," no "beat it / rise above it / mind
over matter." The enemy is the mystery and the pain, never the patient.
Agency language ("here's your next move," "here's what to ask your doctor")
lifts; willpower framing blames the sick for being sick.

### Charisma on a medical site = credibility, not mystique

Our authority is "built from primary sources, not other websites." Keep it.
No esoteric, hidden-knowledge, or mystical framing — "no secrets, no
miracles, just the truth told kindly" is a stronger voice than any guru's.
Coach *beside* the reader (companion), never *above* them (guru).

### Banned phrasings
- "cure," "best treatment," "guaranteed relief," "miracle," "breakthrough" (unless quoting).
  Note: these are superlative *marketing* claims, not the word "recovery."
  Honest prognosis — "most people recover fully," "a complete recovery is the
  usual outcome" — is encouraged where the evidence supports it and is cited.
- Willpower-as-treatment framing ("where there's a will there's a way,"
  "rise above / beat / conquer your pain," "mind over matter") — see
  *Agency without blame* above.
- Esoteric / hidden-knowledge / mystical framing ("unlock the secret,"
  "ancient wisdom they don't want you to know").
- Any dosing instruction to the reader (established regulator/label safety
  limits printed as harm-reduction literacy — "the FDA ceiling is…" — are
  allowed per CONTENT-INTAKE.md §2, never framed as the reader's dose)
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
- Every re-review updates `lastUpdated` and (if clinical) `review.reviewedAt`; `review.reviewDue` (default: quarterly for future-of-pain-medicine, annual elsewhere) drives the cadence check.

## Data model

Typed content lives in `src/lib/*.ts` (`hubs.ts` today; `conditions.ts`,
`treatments.ts`, `future.ts` as sections build out). Hub/spoke pages are
generated via `generateStaticParams`. Do not hand-write one-off page copy that
bypasses the review-status model.
