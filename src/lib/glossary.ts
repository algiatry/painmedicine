/**
 * Plain-language glossary of pain terms. Definitions are educational and
 * consistent with the cited explainers; `href` links a term to the page that
 * covers it in depth, knitting the site together. Keep entries alphabetical.
 */
export type GlossaryTerm = {
  term: string;
  definition: string;
  /** Optional internal link to the page that explains this term in depth. */
  href?: string;
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "Acute pain",
    definition:
      "Short-term pain from a recent injury or illness that usually fades as the body heals. Its opposite is chronic pain.",
    href: "/understanding-pain/acute-vs-chronic-pain",
  },
  {
    term: "Adjuvant analgesic",
    definition:
      "A medicine whose original purpose is something else — such as an antidepressant or anti-seizure drug — but that also relieves certain kinds of pain, especially nerve pain.",
  },
  {
    term: "Allodynia",
    definition:
      "Pain from something that should not hurt at all, such as light touch or clothing on the skin — a hallmark of a sensitized nervous system.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    term: "Analgesic",
    definition: "Any medicine or agent that relieves pain.",
  },
  {
    term: "Biologic",
    definition:
      "A large, precisely engineered medicine — often an antibody — designed to block one specific molecular target, unlike broad-acting small-molecule drugs.",
    href: "/future-of-pain-medicine/biologics-and-gene-therapy",
  },
  {
    term: "Biopsychosocial model",
    definition:
      "The modern understanding that pain is shaped by biological, psychological, and social factors together — not by tissue damage alone.",
  },
  {
    term: "Central sensitization",
    definition:
      "A state in which the spinal cord and brain become more responsive to pain signals, so the same input produces more pain. A key driver of chronic pain.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    term: "CGRP (calcitonin gene-related peptide)",
    definition:
      "A protein involved in migraine attacks. Antibodies that block the CGRP pathway became the first precisely targeted drugs to prevent migraine.",
    href: "/future-of-pain-medicine/biologics-and-gene-therapy",
  },
  {
    term: "Chronic pain",
    definition:
      "Pain that persists or recurs for more than three months, often after tissue has healed; now recognized as a health condition in its own right.",
    href: "/understanding-pain/acute-vs-chronic-pain",
  },
  {
    term: "Closed-loop stimulation",
    definition:
      "Neuromodulation that measures the nervous system's own response and adjusts itself in real time, instead of delivering a fixed output.",
    href: "/future-of-pain-medicine/neuromodulation",
  },
  {
    term: "Complex regional pain syndrome (CRPS)",
    definition:
      "A rare but severe chronic pain condition, usually affecting a limb and often following an injury. Early recognition matters.",
  },
  {
    term: "CYP2D6",
    definition:
      "A liver enzyme, and the gene that builds it, that determines how quickly a person converts certain painkillers such as codeine into their active form — a cornerstone of pharmacogenomics.",
    href: "/future-of-pain-medicine/precision-pain-medicine",
  },
  {
    term: "Dorsal horn",
    definition:
      "The region of the spinal cord where incoming pain signals are filtered before traveling on to the brain — home of the pain 'gate.'",
    href: "/understanding-pain/how-pain-works",
  },
  {
    term: "Dorsal root ganglion (DRG)",
    definition:
      "A small cluster of sensory nerve-cell bodies serving one region of the body; a precise target for neuromodulation of focal pain.",
    href: "/future-of-pain-medicine/neuromodulation",
  },
  {
    term: "Gate control theory",
    definition:
      "The idea, introduced by Melzack and Wall in 1965, that a 'gate' in the spinal cord can open or close to let more or fewer pain signals through.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    term: "Hyperalgesia",
    definition:
      "An exaggerated response to something that is genuinely painful — more pain than the stimulus would normally produce.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    term: "Interventional pain procedure",
    definition:
      "An image-guided procedure — such as a nerve block, injection, or radiofrequency treatment — used to diagnose or treat pain.",
  },
  {
    term: "Multidisciplinary pain care",
    definition:
      "Pain treatment that combines medical, physical, and psychological approaches, reflecting that chronic pain has many contributors.",
  },
  {
    term: "NaV1.7 / NaV1.8",
    definition:
      "Sodium channels that carry pain signals in peripheral nerves. Blocking NaV1.8 produced the first new non-opioid painkiller class in decades; NaV1.7 is a major gene-therapy target.",
    href: "/future-of-pain-medicine/biologics-and-gene-therapy",
  },
  {
    term: "Neuromodulation",
    definition:
      "Treating pain by delivering carefully placed electrical or magnetic stimulation to nerves, the spinal cord, or the brain.",
    href: "/future-of-pain-medicine/neuromodulation",
  },
  {
    term: "Neuropathic pain",
    definition:
      "Pain caused by damage or disease in the nervous system itself — often described as burning, shooting, or electric.",
    href: "/understanding-pain/types-of-pain",
  },
  {
    term: "Nociceptive pain",
    definition:
      "Pain from actual or threatened tissue damage detected by nociceptors, such as a sprain, a cut, or arthritis.",
    href: "/understanding-pain/types-of-pain",
  },
  {
    term: "Nociceptor",
    definition:
      "A specialized nerve ending that detects potentially harmful heat, pressure, or chemicals — the body's threat detector.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    term: "Nociplastic pain",
    definition:
      "Pain that arises from a changed, over-sensitive pain system without clear tissue or nerve damage; the IASP's third pain category (2017), as in fibromyalgia.",
    href: "/understanding-pain/types-of-pain",
  },
  {
    term: "Numeric rating scale (NRS)",
    definition:
      "The familiar 0-to-10 scale used to rate pain intensity — quick and useful, but only a starting point.",
    href: "/understanding-pain/measuring-pain",
  },
  {
    term: "Opioid",
    definition:
      "A class of strong pain-relieving drugs that act on the body's opioid receptors. Effective but carrying risks of dependence and overdose, so used with careful stewardship.",
  },
  {
    term: "Paresthesia",
    definition:
      "A tingling, 'pins and needles' sensation. Older spinal cord stimulators created it deliberately to mask pain; newer ones can work without it.",
    href: "/future-of-pain-medicine/neuromodulation",
  },
  {
    term: "Pain reprocessing therapy (PRT)",
    definition:
      "A psychological treatment that helps the brain unlearn chronic pain when that pain has become a kind of false alarm.",
    href: "/future-of-pain-medicine/mind-and-brain",
  },
  {
    term: "Pharmacogenomics",
    definition:
      "The study of how a person's genes affect their response to medicines — used to make pain prescribing safer and more effective.",
    href: "/future-of-pain-medicine/precision-pain-medicine",
  },
  {
    term: "Quantitative sensory testing (QST)",
    definition:
      "A structured way of measuring how a person responds to controlled sensations, used to help characterize their pain mechanism.",
    href: "/future-of-pain-medicine/precision-pain-medicine",
  },
  {
    term: "Radiofrequency ablation",
    definition:
      "An interventional procedure that uses heat to interrupt specific nerves carrying pain signals.",
  },
  {
    term: "Spinal cord stimulation (SCS)",
    definition:
      "An implanted device that delivers electrical pulses near the spinal cord to interrupt pain signals before they reach the brain.",
    href: "/future-of-pain-medicine/neuromodulation",
  },
  {
    term: "Suzetrigine (Journavx)",
    definition:
      "The first non-opioid painkiller of a new class in decades — a NaV1.8 blocker approved in 2025 for moderate-to-severe acute pain.",
    href: "/future-of-pain-medicine/pipeline",
  },
  {
    term: "TENS (transcutaneous electrical nerve stimulation)",
    definition:
      "A small external device that sends mild electrical currents through the skin to reduce pain, working on the gate-control principle.",
  },
];

/** Groups terms by their uppercase first letter, in alphabetical order. */
export function glossaryByLetter(): { letter: string; terms: GlossaryTerm[] }[] {
  const groups = new Map<string, GlossaryTerm[]>();
  for (const entry of GLOSSARY) {
    const letter = entry.term[0].toUpperCase();
    const bucket = groups.get(letter);
    if (bucket) bucket.push(entry);
    else groups.set(letter, [entry]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, terms]) => ({ letter, terms }));
}

/** A stable id/anchor for a term. */
export function termSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
