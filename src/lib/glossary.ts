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
    href: "/what-is-pain-medicine/the-pain-team",
  },
  {
    term: "Board certification",
    definition:
      "A physician's credential beyond the medical license: passing a national specialty exam and keeping it current through ongoing assessment. For pain medicine, the ABMS-recognized certificate is verifiable free at abms.org.",
    href: "/what-is-pain-medicine/how-pain-physicians-train",
  },
  {
    term: "Boom-bust cycle",
    definition:
      "The pattern of overdoing activity on a good day, flaring, and losing the days that follow — which teaches a sensitized pain system that activity is dangerous. Pacing is its evidence-backed replacement.",
    href: "/treatments/physical-and-behavioral-therapies",
  },
  {
    term: "Budapest criteria",
    definition:
      "The clinical diagnostic criteria for complex regional pain syndrome: continuing pain out of proportion to the injury, plus a required mix of sensory, color/temperature, swelling/sweating, and motor or tissue signs.",
    href: "/conditions/crps",
  },
  {
    term: "Cauda equina syndrome",
    definition:
      "A rare surgical emergency in which the nerve bundle at the base of the spine is compressed. Warning signs: new numbness in the groin or inner thighs, trouble controlling bladder or bowels, or progressive leg weakness — seek same-day care.",
    href: "/conditions/low-back-pain",
  },
  {
    term: "CBT-I (cognitive behavioral therapy for insomnia)",
    definition:
      "A structured, non-drug program that retrains sleep habits and the thoughts that fuel insomnia. In people with chronic pain it reliably improves sleep and mood; its direct effect on pain is more modest.",
    href: "/understanding-pain/pain-and-sleep",
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
    term: "Conditioned pain modulation (CPM)",
    definition:
      "The nervous system's built-in 'pain-inhibits-pain' reflex: pain in one part of the body can suppress pain signals from elsewhere. Sleep loss can weaken or switch off this reflex.",
    href: "/understanding-pain/pain-and-sleep",
  },
  {
    term: "CYP2D6",
    definition:
      "A liver enzyme, and the gene that builds it, that determines how quickly a person converts certain painkillers such as codeine into their active form — a cornerstone of pharmacogenomics.",
    href: "/future-of-pain-medicine/precision-pain-medicine",
  },
  {
    term: "DMARD (disease-modifying antirheumatic drug)",
    definition:
      "A medication that treats inflammatory arthritis at its source — suppressing the immune attack itself rather than only the pain. Started early, DMARDs prevent most of the joint destruction that once defined rheumatoid arthritis.",
    href: "/conditions/arthritis-pain",
  },
  {
    term: "Descending modulation",
    definition:
      "The brain's own volume control for pain: circuits running from the brain down to the spinal cord that can amplify or dampen pain signals. Emotion, attention, stress, and expectation all feed into it.",
    href: "/understanding-pain/pain-and-emotion",
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
    term: "Endogenous opioids",
    definition:
      "Pain-relieving chemicals the body makes itself, such as endorphins, acting on the same receptors as opioid drugs. They are part of how the brain's own pain-relief system — including placebo analgesia — works.",
    href: "/understanding-pain/the-placebo-effect",
  },
  {
    term: "Fear-avoidance model",
    definition:
      "A well-supported map of how chronic pain can grow: fear of pain leads to avoiding movement, avoidance leads to deconditioning and a smaller life, and both feed more pain. The evidence-backed exit is a gradual, supported return to activity.",
    href: "/understanding-pain/pain-and-emotion",
  },
  {
    term: "Fellowship",
    definition:
      "A year (or more) of concentrated subspecialty training a physician completes after residency. Pain medicine requires a 12-month fellowship accredited by the ACGME before board certification.",
    href: "/what-is-pain-medicine/how-pain-physicians-train",
  },
  {
    term: "Gate control theory",
    definition:
      "The idea, introduced by Melzack and Wall in 1965, that a 'gate' in the spinal cord can open or close to let more or fewer pain signals through.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    term: "Graded motor imagery",
    definition:
      "A staged rehabilitation approach for severe limb pain that begins below the threshold of movement — recognizing left from right in photos, imagining movement, then mirror therapy — to redraw the brain's map of the limb before loading it.",
    href: "/conditions/crps",
  },
  {
    term: "Hyperalgesia",
    definition:
      "An exaggerated response to something that is genuinely painful — more pain than the stimulus would normally produce.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    term: "Interdisciplinary pain care",
    definition:
      "The aspirational standard beyond multidisciplinary: the disciplines meet regularly, share one biopsychosocial assessment and one set of goals, and include the patient in decisions.",
    href: "/what-is-pain-medicine/the-pain-team",
  },
  {
    term: "Interventional pain procedure",
    definition:
      "An image-guided procedure — such as a nerve block, injection, or radiofrequency treatment — used to diagnose or treat pain.",
  },
  {
    term: "Medication-overuse headache",
    definition:
      "A near-daily headache caused by using acute pain relievers on too many days per month, over months — it can convert episodic migraine into constant headache that the same medications no longer help. Recognized, it is treatable.",
    href: "/conditions/migraine",
  },
  {
    term: "Mirror therapy",
    definition:
      "A rehabilitation technique in which the painful limb rests hidden behind a mirror while the healthy limb moves in front of it — the brain watches what looks like two healthy limbs, and its blurred map of the painful one begins to redraw.",
    href: "/conditions/crps",
  },
  {
    term: "Multidisciplinary pain care",
    definition:
      "Pain treatment that combines medical, physical, and psychological approaches, reflecting that chronic pain has many contributors.",
    href: "/what-is-pain-medicine/the-pain-team",
  },
  {
    term: "Naloxone",
    definition:
      "A drug that blocks opioid receptors. It reverses opioid overdoses — and in research, its ability to blunt placebo pain relief showed that placebo analgesia runs on the body's own opioid chemistry.",
    href: "/understanding-pain/the-placebo-effect",
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
    term: "Nocebo effect",
    definition:
      "The placebo effect's evil twin: expecting harm produces real symptoms. In vaccine trials, about a third of people receiving only saline reported 'side effects' like headache and fatigue.",
    href: "/understanding-pain/the-placebo-effect",
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
    term: "Open-label placebo",
    definition:
      "A placebo given with full honesty — the patient knows it is inert. In small randomized trials it still improved symptoms such as chronic low back pain, suggesting the ritual and expectation of care carry real weight.",
    href: "/understanding-pain/the-placebo-effect",
  },
  {
    term: "Opioid",
    definition:
      "A class of strong pain-relieving drugs that act on the body's opioid receptors. Effective but carrying risks of dependence and overdose, so used with careful stewardship.",
  },
  {
    term: "Pacing",
    definition:
      "The activity skill at the center of chronic pain rehabilitation: find the amount you can do even on a bad day, do it consistently, and increase by plan rather than by how you feel — progress by schedule, not by symptoms.",
    href: "/treatments/physical-and-behavioral-therapies",
  },
  {
    term: "Pain catastrophizing",
    definition:
      "An automatic habit of worst-case thinking about pain ('this will never end'). It predicts worse pain and disability — and because it is a learned appraisal habit, not a character flaw, it can be retrained.",
    href: "/understanding-pain/pain-and-emotion",
  },
  {
    term: "Pain reprocessing therapy (PRT)",
    definition:
      "A psychological treatment that helps the brain unlearn chronic pain when that pain has become a kind of false alarm.",
    href: "/future-of-pain-medicine/mind-and-brain",
  },
  {
    term: "Paresthesia",
    definition:
      "A tingling, 'pins and needles' sensation. Older spinal cord stimulators created it deliberately to mask pain; newer ones can work without it.",
    href: "/future-of-pain-medicine/neuromodulation",
  },
  {
    term: "PDMP (prescription drug monitoring program)",
    definition:
      "A state database of controlled-substance prescriptions. The CDC recommends clinicians review it before and during prescribing — a routine safety habit at careful practices, not an accusation.",
    href: "/what-is-pain-medicine/your-first-visit",
  },
  {
    term: "Pharmacogenomics",
    definition:
      "The study of how a person's genes affect their response to medicines — used to make pain prescribing safer and more effective.",
    href: "/future-of-pain-medicine/precision-pain-medicine",
  },
  {
    term: "Placebo effect",
    definition:
      "Real, measurable symptom relief produced by expectation and the context of care — in pain, it works through the brain's own opioid chemistry and descending pain control. It eases symptoms; it does not treat the underlying disease.",
    href: "/understanding-pain/the-placebo-effect",
  },
  {
    term: "Quantitative sensory testing (QST)",
    definition:
      "A structured way of measuring how a person responds to controlled sensations, used to help characterize their pain mechanism.",
    href: "/future-of-pain-medicine/precision-pain-medicine",
  },
  {
    term: "Radicular pain",
    definition:
      "Pain from an irritated or compressed nerve root at the spine, felt along that nerve's territory — a sharp, electric line down an arm or leg. Sciatica is the everyday name for its most common form.",
    href: "/conditions/sciatica",
  },
  {
    term: "Radiofrequency ablation",
    definition:
      "An interventional procedure that uses heat to interrupt specific nerves carrying pain signals.",
  },
  {
    term: "Slow-wave sleep",
    definition:
      "The deepest stage of sleep, when the body — including the pain system — does much of its restoration. Disrupting it, even without shortening sleep, lowers pain thresholds and produces widespread tenderness.",
    href: "/understanding-pain/pain-and-sleep",
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
