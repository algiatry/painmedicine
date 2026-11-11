/**
 * Pain-therapy pipeline dataset – the data behind the /future-of-pain-medicine
 * pipeline tracker.
 *
 * This is FACTUAL REPORTING on publicly disclosed drug/device development
 * status (regulatory approvals, trial phase, mechanism) – not clinical advice
 * and not a recommendation of any therapy. A candidate being "in the pipeline"
 * does NOT mean it is available or proven; most investigational therapies never
 * reach patients. Every entry is dated and linked to a primary source; re-verify
 * against the FDA and ClinicalTrials.gov before relying on any status.
 *
 * Update cadence: quarterly (this is a fast-moving field). Bump `LAST_REVIEWED`
 * and each affected entry's `updated` when you re-check.
 */

export const LAST_REVIEWED = "2026-11-11";

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
  /** Status nuance – a caveat, a caution, or what happens next. */
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
    why: "The first non-opioid painkiller of a genuinely new class in decades – it blocks pain signals in the peripheral nerves rather than acting on the brain, so it carries no opioid addiction risk.",
    note: "FDA-approved for moderate-to-severe acute pain (January 2025). Chronic-pain uses are not approved. On 2 November 2026 Vertex said both Phase 3 diabetic-neuropathy studies are on track to finish enrollment by the end of 2026, with results in mid-2027. A lumbosacral radiculopathy program has also been described as ongoing; that update did not mention it. Vertex said that, as of August 2026, JOURNAVX was the most prescribed branded oral pain medicine in the U.S. Earlier 2026 reports describe it inside opioid-free recovery plans after keyhole surgery.",
    updated: "2026-11",
    source: {
      label: "Vertex – third-quarter 2026 results (2 Nov 2026)",
      url: "https://news.vrtx.com/news-releases/news-release-details/vertex-reports-third-quarter-2026-financial-results",
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
    why: "The first stimulator that measures the spinal cord's actual response to each pulse and corrects itself more than 100 times a second – in trials it outperformed conventional open-loop stimulation.",
    note: "FDA-approved 2022. Represents the shift from fixed-output devices toward feedback-controlled neuromodulation.",
    updated: "2026-08",
    source: {
      label: "Saluda Medical – FDA approval of Evoke",
      url: "https://www.saludamedical.com/press-releases/saluda-medical-receives-fda-approval-for-the-evoke-spinal-cord-stimulation-system-to-treat-chronic-intractable/",
    },
  },
  {
    name: "Cebranopadol",
    sponsor: "Adneuris Therapeutics (Tris Pharma)",
    mechanism: "Dual NOP + µ-opioid receptor agonist",
    modality: "Small molecule",
    indication: "Moderate-to-severe acute pain",
    phase: "Phase 3",
    why: "Aims to keep opioid-level pain relief while lowering abuse potential – in human abuse-potential studies it was reported less abusable than oxycodone and tramadol.",
    note: "Not approved. Adneuris submitted a New Drug Application on 9 November 2026 for moderate-to-severe acute pain in adults. The FDA has about 60 days to decide whether to accept the file. Phase 3 trials ALLEVIATE-1 and ALLEVIATE-2 met their primary endpoints. It still engages the µ-opioid receptor, so it is opioid-adjacent, not opioid-free.",
    updated: "2026-11",
    source: {
      label: "Adneuris – NDA submission for cebranopadol (9 Nov 2026)",
      url: "https://www.biospace.com/press-releases/adneuris-therapeutics-reaches-key-regulatory-milestone-with-fda-submission-of-new-drug-application-for-cebranopadol-in-moderate-to-severe-acute-pain",
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
      label: "ClinicalTrials.gov – RTX knee OA Phase 3 (NCT04044742)",
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
    note: "Holds FDA Fast Track designation. On 5 November 2026 Lexicon said the FDA has raised no objections to Phase 3 (two 12-week studies of 10 mg versus placebo) and described those studies as the plan, not as started.",
    updated: "2026-11",
    source: {
      label: "Lexicon – third-quarter 2026 results (5 Nov 2026)",
      url: "https://investors.lexpharma.com/news-releases/news-release-details/lexicon-pharmaceuticals-reports-third-quarter-2026-financial/",
    },
  },
  {
    name: "LEVI-04",
    sponsor: "Levicept",
    mechanism: "Neurotrophin-3 (NT-3) inhibitor (p75 receptor fusion protein)",
    modality: "Biologic",
    indication: "Knee osteoarthritis pain",
    phase: "Phase 2",
    why: "Targets the same neurotrophin pain pathway as earlier anti-NGF drugs but appears to spare the joint – its Phase 2 trial improved pain and function without the joint-damage signal that sank tanezumab.",
    note: "Phase 2 results were published in The Lancet in March 2026. In early 2026 the FDA accepted Levicept's IND. The company says it is preparing further clinical development and has no studies open to new patients.",
    updated: "2026-11",
    source: {
      label: "Levicept – LEVI-04 trials and IND status",
      url: "https://levicept.com/trials/",
    },
  },
  {
    name: "VX-993",
    sponsor: "Vertex Pharmaceuticals",
    mechanism: "Next-generation selective NaV1.8 sodium-channel blocker",
    modality: "Small molecule",
    indication: "Diabetic neuropathy (acute-pain arm halted)",
    phase: "Phase 2",
    why: "A reminder that even a hot new class stumbles: its acute-pain Phase 2 missed the primary endpoint in 2025, so Vertex dropped that use – but the chronic nerve-pain program continues.",
    note: "Not advancing as an acute-pain monotherapy after the August 2025 Phase 2 miss. The diabetic-neuropathy program continues: on 2 November 2026 Vertex said the Phase 2 study is on track to finish enrollment by the end of 2026, with results in mid-2027.",
    updated: "2026-11",
    source: {
      label: "Vertex – third-quarter 2026 results (2 Nov 2026)",
      url: "https://news.vrtx.com/news-releases/news-release-details/vertex-reports-third-quarter-2026-financial-results",
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
    note: "Not approved. Seven sites are activated in the Phase 1/2 STAND study (NCT06980948). On 13 October 2026 Sangamo said the sale of this program is expected to finish in the fourth quarter of 2026; the company is in Chapter 11. Fast Track designation. Primate data were published in 2026; still unproven in people.",
    updated: "2026-11",
    source: {
      label: "Sangamo – ST-503 sale-process update (13 Oct 2026)",
      url: "https://investor.sangamo.com/news-releases/news-release-details/sangamo-therapeutics-launches-auction-process-clinical-stage",
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
    note: "Discontinued. Its failure reframed the whole anti-NGF class – and is the backdrop against which newer neurotrophin drugs like LEVI-04 are measured.",
    updated: "2021-12",
    source: {
      label: "FierceBiotech – Lilly & Pfizer halt tanezumab",
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
