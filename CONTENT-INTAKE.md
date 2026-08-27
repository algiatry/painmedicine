# PainMedicine.com — Content Intake & Review Packet

> **Purpose.** Everything a contributor or reviewer needs to produce or approve a
> clinical page to the site's standard. Give this to your medical reviewer (and
> to anyone drafting content). It operationalizes the rules in
> `CONTENT-TEMPLATE.md` and matches the review model in the codebase
> (`src/lib/schema.ts`). Pair it with `REVIEWER-BRIEF.md`.

---

## 1. How content flows

```
Draft (to the standard below)
   → copy-align to house voice
   → MEDICAL REVIEW  ← the gate
   → reviewer sign-off (attestation)
   → publish with reviewer byline + date
   → re-review on cadence
```

Contributors work in **Markdown or a Google Doc** — no code required. Approved
content is transformed into typed records in `src/lib/*.ts` by the site owner.
Each page tracks a **review status**; only `"reviewed"` (a named reviewer has
signed off) may carry a byline and publish as clinical guidance.

---

## 2. The house standard (non-negotiable)

**Voice**
- Compassionate, plain-English, evidence-cited. Target **~8th-grade** reading
  level. Never condescending, never fear-based ("doom"), never salesy.
- Emotional spine: *"You are not imagining your pain."*
- **Describe, never prescribe.** Explain what options exist and what the evidence
  says; route every decision to *"discuss with your physician."*

**Banned phrasings**
- "cure," "best treatment," "guaranteed relief," "miracle," "breakthrough"
  (unless directly quoting a source, in quotation marks).
- **Any dosing guidance whatsoever.**
- Any "how to obtain" framing for controlled substances.

**Safety rules**
- Every page ships with the site-wide disclaimer (automatic).
- **Opioid content must additionally include the SAMHSA helpline inline**
  (1-800-662-HELP / 4357), not only in the footer.
- Include "when to seek urgent/emergency care" wherever relevant.

**Citations**
- **≥3 primary or authoritative sources**, linked and dated: NIH/NINDS, CDC,
  FDA (labels, safety communications), IASP, WHO/ICD-11, Cochrane, or
  peer-reviewed journals. No blogs, no vendor pages, no AI-generated summaries as
  sources.
- Every substantive clinical claim must be traceable to one of the cited
  sources.

---

## 3. Page templates

### Condition page

1. **Title + one-paragraph plain answer** — answer the core question in the
   first ~60 words (what this condition is), readable on its own.
2. **What it is** — plain definition, how common, who it affects.
3. **Why it hurts** — the mechanism at a patient level (link to the relevant
   *Understanding Pain* explainer where possible).
4. **Today's treatment ladder** — the real options, *described not recommended*,
   from first-line to specialist; note evidence strength honestly.
5. **What's coming** — brief, with a link to the relevant *Future of Pain
   Medicine* page / the pipeline tracker.
6. **When to see a specialist / seek urgent care** — concrete signs.
7. **FAQ** — 3–6 real patient questions (these become `FAQPage` schema).
8. **References** — ≥3 primary sources, linked and dated.
9. **Reviewer byline + last-updated date** (added at publish).

### Treatment / medication page

1. **Title + plain answer** (what this treatment is, in ~60 words).
2. **What it is & how it works** — mechanism in plain language.
3. **What the evidence says** — strength and limits, honestly; who it tends to
   help.
4. **Risks, side effects, and cautions** — balanced; **no dosing**.
5. **How it fits with other options** — comparative, not prescriptive.
6. **FAQ** (schema'd) + **References** (≥3) + **byline/date**.
7. **Opioid pages:** stewardship framing, CDC-guideline alignment, SAMHSA
   helpline inline, never "how to obtain."

---

## 4. Reviewer workflow & sign-off

- Content reaches you **fully drafted and cited**. You review against the
  checklist below.
- Request changes freely; iterate until you're comfortable.
- To approve, complete the **attestation** (Section 6). On sign-off, the page
  publishes with:
  > *Medically reviewed by **[Name], [Credentials]** on [Date].*
- The credential line is published verbatim as you specify it, e.g.
  *"MD, board-certified in Pain Medicine (ABA)."*
- You may withdraw your name at any time, which returns the page to held status.

---

## 5. Reviewer checklist (per page)

- [ ] **Accurate** and consistent with current guidelines / best evidence.
- [ ] **Every clinical claim** is supported by a cited primary source.
- [ ] **≥3 authoritative references**, correctly represented (no overstated
      findings).
- [ ] **No dosing**, **no "best/cure/guaranteed/miracle,"** no "how to obtain"
      controlled substances.
- [ ] **Opioid content** includes the SAMHSA helpline inline and stewardship
      framing.
- [ ] **Safety net present:** when to seek specialist / urgent / emergency care.
- [ ] **Balanced** — benefits *and* limits/risks; evidence strength stated
      honestly.
- [ ] **Reading level ~8th grade**; tone compassionate and non-dismissive.
- [ ] **No promotional / conflict-of-interest** language; nothing implies the
      site provides care.
- [ ] Byline credential line and review date are correct.

---

## 6. Reviewer attestation form

> Complete once per page (or per batch, listing the pages). This is what
> authorizes publication and the byline.

```
Reviewer name:              ______________________________________
Credential line (verbatim,  ______________________________________
  as it should appear):       e.g. "MD, board-certified in Pain Medicine (ABA)"
License number & state:     ______________________________________
Board certification(s):     ______________________________________
Page(s) reviewed:           ______________________________________
Review date (YYYY-MM-DD):   ______________________________________

Attestation:
  "I have reviewed the page(s) listed above. To the best of my professional
   knowledge, the content is medically accurate and consistent with current
   evidence as of the review date. I understand this is educational content, not
   individualized medical advice or a guarantee of outcomes."

Consent to publish name + credentials + review date:   [ ] Yes
Conflicts of interest to disclose (if any):  __________________________

Signature: __________________________     Date: ________________
```

The site owner records the name, credential line, and review date into the
page's typed record (the `Reviewer` object: `name`, `credentials`, `reviewedAt`).

---

## 7. Launch content queue

Draft, review, and publish in this order (highest leverage first). One-line
scope each — expand to the condition/treatment template above.

**Conditions**
1. **Chronic low back pain** — the most common chronic pain condition; sets the
   template.
2. **Neuropathic pain & peripheral neuropathy** — nerve-damage pain and why it's
   treated differently.
3. **Migraine** — a neurological disease; pain medicine's biggest recent success
   (CGRP).
4. **Arthritis pain** — osteoarthritis and inflammatory arthritis.
5. **Fibromyalgia** — the signature nociplastic condition.
6. **Sciatica** — radicular leg pain from the low back.
7. **Cancer pain** — managing pain through and after treatment.
8. **Complex regional pain syndrome (CRPS)** — rare, severe, catch it early.

**Treatments**
- **Medications** — non-opioid analgesics, adjuvants, topicals, and an
  **opioid-stewardship** page (SAMHSA inline, CDC-aligned).
- **Interventional procedures** — injections, nerve blocks, radiofrequency
  ablation, spinal cord stimulation.
- **Physical & behavioral therapies** — PT, CBT/ACT for pain, pain reprocessing.

Each condition page should cross-link its mechanism (*Understanding Pain*) and
its horizon (*Future of Pain Medicine* / pipeline tracker) — the
mechanism → treatment → future triangle.

---

## 8. The quality bar (match these)

The non-clinical pages are already live and define the standard for depth,
citation rigor, structure, and voice. Draft to match them:

- `/understanding-pain/how-pain-works`
- `/understanding-pain/types-of-pain`
- `/future-of-pain-medicine/pipeline`

Same plain-English clarity, same source discipline, same honest framing — plus,
for clinical pages, the reviewer byline that these "sourced" pages deliberately
do not claim.

---

## 9. What to hand back

For each page, deliver:

- The page text in the template structure (Markdown or Doc).
- A **references list**: for each source, the title, publisher, URL, and date.
- The completed **attestation** (Section 6).

That's everything needed to publish. Questions on scope or standard go to the
site owner.
