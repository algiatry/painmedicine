/**
 * Pain-therapy pipeline dataset — the data behind the /future-of-pain-medicine
 * pipeline tracker.
 *
 * This is FACTUAL REPORTING on publicly disclosed drug/device development
 * status (regulatory approvals, trial phase, mechanism) — not clinical advice
 * and not a recommendation of any therapy. A candidate being "in the pipeline"
 * does NOT mean it is available or proven; most investigational therapies never
 * reach patients. Every entry is dated and linked to a primary source; re-verify
 * against the FDA and ClinicalTrials.gov before relying on any status.
 *
 * Update cadence: quarterly (this is a fast-moving field). Bump `LAST_REVIEWED`
 * and each affected entry's `updated` when you re-check.
 */

export const LAST_REVIEWED = "2026-08-26";

export type Phase =
  | "Approved"
  | "Phase 3"
  | "Phase 2"
  | "Phase 1"
  | "Discontinued";

export type Modality =
  | "Small molecule"
  | "Biologic"
  | "Device"
  | "Gene therapy";

export type Candidate = {
  name: string;
  /** Development code and/or brand, e.g. "VX-548 · Journavx". */
  code?: string;
  sponsor: string;
  mechanism: string;
  modality: Modality;
  indication: string;
  phase: Phase;
  /** One plain-language line on why this candidate is worth watching. */
  why: string;
  /** Status nuance — a caveat, a caution, or what happens next. */
  note?: string;
  /** Month we last confirmed this entry's status. */
  updated: string;
  source: { label: string; url: string };
};

/** Display order, most-advanced first; "Discontinued" shown last. */
export const PHASE_ORDER: Phase[] = [
  "Approved",
  "Phase 3",
  "Phase 2",
  "Phase 1",
  "Discontinued",
];

export const MODALITY_COLOR: Record<Modality, string> = {
  "Small molecule": "#0d9488",
  Biologic: "#4f46e5",
  Device: "#0891b2",
  "Gene therapy": "#7c3aed",
};

export const CANDIDATES: Candidate[] = [
  {
    name: "Suzetrigine",
    code: "VX-548 · Journavx",
    sponsor: "Vertex Pharmaceuticals",
    mechanism: "Selective NaV1.8 sodium-channel blocker",
    modality: "Small molecule",
    indication: "Moderate-to-severe acute pain",
    phase: "Approved",
    why: "The first non-opioid painkiller of a genuinely new class in decades — it blocks pain signals in the peripheral nerves rather than acting on the brain, so it carries no opioid addiction risk.",
    note: "FDA-approved for acute pain (Jan 2025). Phase 3 trials in diabetic nerve pain and lumbosacral radiculopathy are ongoing — those chronic-pain uses are not yet approved.",
    updated: "2026-08",
    source: {
      label: "Vertex — FDA approval of Journavx",
      url: "https://news.vrtx.com/news-releases/news-release-details/vertex-announces-fda-approval-journavxtm-suzetrigine-first-class",
    },
  },
  {
    name: "Evoke closed-loop SCS",
    code: "ECAP-controlled SCS",
    sponsor: "Saluda Medical",
    mechanism:
      "Closed-loop spinal cord stimulation that reads the cord's response (ECAPs) and self-adjusts",
    modality: "Device",
    indication: "Chronic intractable trunk & limb pain",
    phase: "Approved",
    why: "The first stimulator that measures the spinal cord's actual response to each pulse and corrects itself more than 100 times a second — in trials it outperformed conventional open-loop stimulation.",
    note: "FDA-approved 2022. Represents the shift from fixed-output devices toward feedback-controlled neuromodulation.",
    updated: "2026-08",
    source: {
      label: "Saluda Medical — FDA approval of Evoke",
      url: "https://www.saludamedical.com/press-releases/saluda-medical-receives-fda-approval-for-the-evoke-spinal-cord-stimulation-system-to-treat-chronic-intractable/",
    },
  },
  {
    name: "Cebranopadol",
    sponsor: "Tris Pharma",
    mechanism: "Dual NOP + µ-opioid receptor agonist",
    modality: "Small molecule",
    indication: "Moderate-to-severe acute pain",
    phase: "Phase 3",
    why: "Aims to keep opioid-level pain relief while lowering abuse potential — in human abuse-potential studies it was reported less abusable than oxycodone and tramadol.",
    note: "Positive topline results from two Phase 3 trials (ALLEVIATE-1 and -2). It still engages the µ-opioid receptor, so it is opioid-adjacent, not opioid-free; not yet FDA-filed or approved.",
    updated: "2026-03",
    source: {
      label: "Tris Pharma — ALLEVIATE-2 Phase 3 results",
      url: "https://www.trispharma.com/tris-pharma-announces-positive-results-from-alleviate-2-phase-3-pivotal-trial-for-cebranopadol-an-investigational-first-in-class-oral-dual-nmr-agonist-for-the-treatment-of-moderate-to-severe-acute-p/",
    },
  },
  {
    name: "Resiniferatoxin",
    code: "RTX",
    sponsor: "Grünenthal",
    mechanism: "Ultra-potent TRPV1 agonist that quiets pain-sensing nerve endings",
    modality: "Small molecule",
    indication: "Knee osteoarthritis pain",
    phase: "Phase 3",
    why: "A single injection into the joint 'defunctionalizes' the local pain nerves for long-lasting, non-opioid relief. It holds FDA Breakthrough Therapy designation.",
    note: "In a global Phase 3 program of more than 1,800 patients.",
    updated: "2026-08",
    source: {
      label: "ClinicalTrials.gov — RTX knee OA Phase 3 (NCT04044742)",
      url: "https://clinicaltrials.gov/study/NCT04044742",
    },
  },
  {
    name: "Pilavapadin",
    code: "LX9211",
    sponsor: "Lexicon Pharmaceuticals",
    mechanism: "AAK1 (adaptor-associated kinase 1) inhibitor",
    modality: "Small molecule",
    indication: "Diabetic peripheral neuropathic pain",
    phase: "Phase 2",
    why: "A once-daily pill hitting a brand-new, non-opioid target for nerve pain. Its Phase 2b study met its goals at the 10 mg dose, which is moving toward Phase 3.",
    note: "Holds FDA Fast Track designation; Phase 3 planned.",
    updated: "2025-03",
    source: {
      label: "Lexicon — PROGRESS Phase 2b topline results",
      url: "https://investors.lexpharma.com/news-releases/news-release-details/lexicon-pharmaceuticals-announces-topline-results-phase-2b",
    },
  },
  {
    name: "LEVI-04",
    sponsor: "Levicept",
    mechanism: "Neurotrophin-3 (NT-3) inhibitor (p75 receptor fusion protein)",
    modality: "Biologic",
    indication: "Knee osteoarthritis pain",
    phase: "Phase 2",
    why: "Targets the same neurotrophin pain pathway as earlier anti-NGF drugs but appears to spare the joint — its Phase 2 trial improved pain and function without the joint-damage signal that sank tanezumab.",
    note: "Phase 2 results published in The Lancet (2026); Phase 3 in planning.",
    updated: "2026-03",
    source: {
      label: "The Lancet — LEVI-04 Phase 2 trial",
      url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00131-5/fulltext",
    },
  },
  {
    name: "VX-993",
    sponsor: "Vertex Pharmaceuticals",
    mechanism: "Next-generation selective NaV1.8 sodium-channel blocker",
    modality: "Small molecule",
    indication: "Diabetic neuropathy (acute-pain arm halted)",
    phase: "Phase 2",
    why: "A reminder that even a hot new class stumbles: its acute-pain Phase 2 missed the primary endpoint in 2025, so Vertex dropped that use — but the chronic nerve-pain program continues.",
    note: "Not advancing as an acute-pain monotherapy; Phase 2 continues in diabetic peripheral neuropathy.",
    updated: "2025-08",
    source: {
      label: "Vertex — VX-993 Phase 2 acute-pain results",
      url: "https://news.vrtx.com/news-releases/news-release-details/vertex-announces-results-phase-2-study-vx-993-treatment-acute",
    },
  },
  {
    name: "ST-503",
    sponsor: "Sangamo Therapeutics",
    mechanism:
      "Zinc-finger repressor that epigenetically dials down the SCN9A / NaV1.7 pain gene",
    modality: "Gene therapy",
    indication: "Idiopathic small fiber neuropathy",
    phase: "Phase 1",
    why: "The frontier's edge: a one-time gene therapy that turns down the body's master pain gene at its source in the sensory nerves, aiming for durable relief. First-in-human.",
    note: "Entering a Phase 1 trial (NCT06980948) after primate data published in 2026; earliest-stage and unproven in people.",
    updated: "2026-03",
    source: {
      label: "ClinicalTrials.gov — ST-503 Phase 1 (NCT06980948)",
      url: "https://clinicaltrials.gov/study/NCT06980948",
    },
  },
  {
    name: "Tanezumab",
    sponsor: "Pfizer / Eli Lilly",
    mechanism: "Anti-NGF (nerve growth factor) monoclonal antibody",
    modality: "Biologic",
    indication: "Osteoarthritis & chronic low back pain",
    phase: "Discontinued",
    why: "The cautionary tale of the field: it clearly relieved pain, but an FDA advisory panel voted 19–1 against it over a risk of rapidly progressive joint destruction. Development was halted in 2021.",
    note: "Discontinued. Its failure reframed the whole anti-NGF class — and is the backdrop against which newer neurotrophin drugs like LEVI-04 are measured.",
    updated: "2021-12",
    source: {
      label: "FierceBiotech — Lilly & Pfizer halt tanezumab",
      url: "https://www.fiercebiotech.com/biotech/lilly-pfizer-stop-development-osteoarthritis-drug-after-fda-rejection-extending-bleak-run",
    },
  },
];

export function candidatesByPhase(phase: Phase): Candidate[] {
  return CANDIDATES.filter((c) => c.phase === phase);
}

export function phaseCounts(): { phase: Phase; count: number }[] {
  return PHASE_ORDER.map((phase) => ({
    phase,
    count: candidatesByPhase(phase).length,
  }));
}
