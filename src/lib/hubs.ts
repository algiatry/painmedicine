import type { PageMeta } from "./schema";

export type Hub = PageMeta & {
  heading: string;
  intro: string[];
  /**
   * Spoke pages. A `href` marks a spoke that is live — the hub renders it as a
   * link; items without `href` render as a roadmap of what is still coming.
   */
  planned: { title: string; blurb: string; href?: string }[];
  faqs?: { question: string; answer: string }[];
};


/**
 * Hub landing pages. Status is "pending-review" — structural/orientational
 * copy only, no clinical claims, until council reviewer credentials are
 * confirmed (see CONTENT-TEMPLATE.md gating rules).
 */
export const HUBS: Hub[] = [
  {
    slug: "what-is-pain-medicine",
    title: "What Is Pain Medicine?",
    description:
      "Pain medicine is a board-certified medical specialty dedicated to diagnosing, treating, and managing pain. Learn who pain specialists are and how the specialty works.",
    status: "sourced",
    lastUpdated: "2026-08-27",
    heading: "What is pain medicine?",
    intro: [
      "Pain medicine is a recognized medical specialty — physicians who complete additional fellowship training focused specifically on diagnosing and treating pain, then earn board certification in the field.",
      "Modern pain medicine is multidisciplinary. A pain specialist typically works alongside physical therapists, psychologists, and pharmacists, because chronic pain involves far more than the site where it hurts.",
      "This hub explains the specialty in plain language: how pain physicians train, how a pain clinic differs from primary care, what happens at a first appointment, and when it makes sense to ask for a referral.",
    ],
    planned: [
      {
        title: "How pain physicians train",
        blurb:
          "The nine-year road: six residency doors, one 12-month accredited fellowship, one shared board exam — and how to verify the credential.",
        href: "/what-is-pain-medicine/how-pain-physicians-train",
      },
      {
        title: "The pain team",
        blurb:
          "Why good pain care combines medical, physical, and behavioral expertise — the biopsychosocial model, and the evidence for team-based care.",
        href: "/what-is-pain-medicine/the-pain-team",
      },
      {
        title: "Your first visit",
        blurb:
          "What to expect, what to bring, how long it takes, and the safety habits that mark a careful clinic.",
        href: "/what-is-pain-medicine/your-first-visit",
      },
      {
        title: "Pain clinics vs. pain medicine",
        blurb:
          "'Pain clinic' is a sign anyone can hang. The five checkable signals of a credentialed practice.",
        href: "/what-is-pain-medicine/pain-clinics-vs-pain-medicine",
      },
    ],
    faqs: [
      {
        question: "Is pain medicine a real medical specialty?",
        answer:
          "Yes. Pain medicine is a fellowship-trained subspecialty with formal board certification pathways in the United States, entered most commonly from anesthesiology, physical medicine and rehabilitation, neurology, or psychiatry.",
      },
      {
        question: "When should I see a pain specialist?",
        answer:
          "A common reason for referral is pain that persists beyond expected healing time or does not respond to initial treatment from your primary care clinician. Your primary care physician can help you decide whether a referral makes sense for your situation.",
      },
    ],
  },
  {
    slug: "understanding-pain",
    title: "Understanding Pain",
    description:
      "How pain actually works: acute vs. chronic pain, the three recognized types of pain, and why pain is more than tissue damage.",
    status: "sourced",
    lastUpdated: "2026-08-26",
    heading: "Understanding pain",
    intro: [
      "Pain is not a simple alarm wire from body to brain. It is an experience the nervous system constructs — which is why two people with the same injury can hurt very differently, and why pain can persist after tissue has healed.",
      "Understanding the kind of pain you have matters, because different kinds of pain respond to different treatments. These plain-language guides build that foundation, drawn from primary sources and cited on every page.",
    ],
    planned: [
      {
        title: "How pain works",
        blurb:
          "Nociceptors, the spinal 'gate,' and central sensitization — the science of hurting, made readable.",
        href: "/understanding-pain/how-pain-works",
      },
      {
        title: "The three types of pain",
        blurb:
          "Nociceptive, neuropathic, and nociplastic pain — the modern classification and why it guides treatment.",
        href: "/understanding-pain/types-of-pain",
      },
      {
        title: "Acute vs. chronic pain",
        blurb:
          "Why the 3-month line matters, and how pain that persists becomes its own condition.",
        href: "/understanding-pain/acute-vs-chronic-pain",
      },
      {
        title: "Measuring pain",
        blurb:
          "Why the 0-to-10 scale is imperfect, and better ways to describe pain to your clinician.",
        href: "/understanding-pain/measuring-pain",
      },
      {
        title: "Pain and sleep",
        blurb:
          "The cycle runs both ways — but sleep loss drives pain harder than pain drives sleep loss. What one bad night does, and what helps.",
        href: "/understanding-pain/pain-and-sleep",
      },
      {
        title: "Pain and emotion",
        blurb:
          "Emotion is in the definition of pain itself. The shared brain circuitry, the fear-avoidance loop, and why brain-targeted care is not an insult.",
        href: "/understanding-pain/pain-and-emotion",
      },
      {
        title: "The placebo effect",
        blurb:
          "Real, blockable-with-a-drug biology: expectation switching on the brain's own pain-relief chemistry — and the honest limits of what it can do.",
        href: "/understanding-pain/the-placebo-effect",
      },
    ],
  },
  {
    slug: "treatments",
    title: "Pain Treatments Today",
    description:
      "The full landscape of evidence-based pain treatment: medications, interventional procedures, and physical and behavioral therapies.",
    status: "pending-review",
    lastUpdated: "2026-08-28",
    heading: "Pain treatments today",
    intro: [
      "Pain medicine today offers far more than pills. Treatment spans medication classes with very different mechanisms, image-guided procedures, neuromodulation devices, and physical and psychological therapies with real evidence behind them.",
      "This hub maps the whole landscape so you can understand what each option is, what the evidence says, and what questions to bring to your physician. It describes — it does not prescribe. Treatment decisions belong with you and your care team.",
    ],
    planned: [
      {
        title: "Kratom",
        blurb:
          "The Southeast Asian leaf two million Americans use for pain: how mitragynine works, what the evidence shows, the honest risks, and the 2026 fight over 7-OH.",
        href: "/treatments/kratom",
      },
      {
        title: "Medications for pain",
        blurb:
          "The complete map: anti-inflammatories and acetaminophen, topicals, the nerve-pain medications, opioids honestly, and the first new class in decades — matched to the pain types they actually treat.",
        href: "/treatments/medications-for-pain",
      },
      {
        title: "Interventional procedures",
        blurb:
          "The image-guided middle layer between pills and surgery: blocks, radiofrequency ablation, stimulators you can test-drive — and the window rule that makes them all work.",
        href: "/treatments/interventional-procedures",
      },
      {
        title: "Physical & behavioral therapies",
        blurb:
          "The active half of pain medicine: movement as medicine, the pacing skill that ends the boom-bust cycle, and what CBT and mindfulness honestly deliver.",
        href: "/treatments/physical-and-behavioral-therapies",
      },
      {
        title: "Comparing your options",
        blurb:
          "The honest evidence map: why almost everything helps 'modestly,' why modest wins stack, and how to read any treatment claim like the field does.",
        href: "/treatments/comparing-your-options",
      },
    ],
  },
  {
    slug: "conditions",
    title: "Pain Conditions",
    description:
      "Condition-by-condition guides to common pain conditions: why it hurts, today's treatment approaches, and when to see a specialist.",
    status: "pending-review",
    lastUpdated: "2026-08-28",
    heading: "Pain conditions",
    intro: [
      "Every pain condition has its own mechanism, its own treatment ladder, and its own research pipeline. These guides connect all three — what it is, what helps today, and what science is working on next.",
      "Guides are written from cited primary sources (WHO, NIH, guideline bodies, peer-reviewed literature) and publish with an honest byline while independent physician review is arranged. The rest of the launch set below is in editorial preparation now.",
    ],
    planned: [
      {
        title: "Low back pain",
        blurb:
          "The world's leading cause of disability: what can actually hurt, why most cases are 'non-specific,' what an MRI really shows, the red flags, and today's treatment playbook.",
        href: "/conditions/low-back-pain",
      },
      {
        title: "Neuropathic pain",
        blurb:
          "When the wiring becomes the alarm: burning feet, the numb-yet-painful paradox, and the honest map of nerve-pain treatment from first-line drugs to stimulators.",
        href: "/conditions/neuropathic-pain",
      },
      {
        title: "Migraine",
        blurb:
          "An inherited neurological disease, not a bad headache: the four-phase attack, the trigeminal-CGRP engine, the medication-overuse trap, and the designed drugs that changed everything.",
        href: "/conditions/migraine",
      },
      {
        title: "Arthritis pain",
        blurb:
          "One word, two diseases: osteoarthritis (not 'wear and tear') vs. the immune-driven arthritides — the day-pattern that tells them apart, and why one of them is a race.",
        href: "/conditions/arthritis-pain",
      },
      {
        title: "Fibromyalgia",
        blurb:
          "The signature disease of a sensitized pain system: the measurable evidence it's real, and why gentleness — tai chi included — beats most pills.",
        href: "/conditions/fibromyalgia",
      },
      {
        title: "Sciatica",
        blurb:
          "The pinched nerve root behind nine cases in ten, the disappearing-disc science, and what surgery does and doesn't change.",
        href: "/conditions/sciatica",
      },
      {
        title: "Cancer pain",
        blurb:
          "One of the most treatable parts of cancer: the three sources, why opioids are a different conversation here, and the trial that proved palliative care is not giving up.",
        href: "/conditions/cancer-pain",
      },
      {
        title: "Complex regional pain syndrome (CRPS)",
        blurb:
          "Rare, severe, and time-sensitive: pain out of proportion in a limb that visibly changes — the Budapest signs, the mirror-therapy science, and why the first months decide so much.",
        href: "/conditions/crps",
      },
    ],
  },
  {
    slug: "future-of-pain-medicine",
    title: "The Future of Pain Medicine",
    description:
      "The next generation of pain relief: non-opioid drug pipelines, advanced neuromodulation, biologics, precision pain medicine, and the science reshaping the field.",
    status: "sourced",
    lastUpdated: "2026-08-26",
    heading: "The future of pain medicine",
    intro: [
      "Pain science is in the middle of its most productive era in decades. After years in which pain relief meant choosing among old drug classes, new mechanisms are reaching patients — and a deep pipeline sits behind them.",
      "This hub tracks where the field is going: new non-opioid drug classes, smarter neuromodulation, biologics, gene-targeted approaches, and precision medicine that matches treatment to your biology. Updated as the science moves.",
    ],
    planned: [
      {
        title: "The pain treatment pipeline — live tracker",
        blurb:
          "Every notable drug and device in development for pain — mechanism, phase, and what each one means. Updated quarterly.",
        href: "/future-of-pain-medicine/pipeline",
      },
      {
        title: "Next-generation neuromodulation",
        blurb:
          "Closed-loop spinal cord stimulation and non-invasive brain and nerve stimulation.",
        href: "/future-of-pain-medicine/neuromodulation",
      },
      {
        title: "Biologics & gene-targeted therapy",
        blurb:
          "What migraine's antibody drugs proved, and where gene therapy for pain is headed.",
        href: "/future-of-pain-medicine/biologics-and-gene-therapy",
      },
      {
        title: "Precision pain medicine",
        blurb:
          "Pharmacogenomics, biomarkers, and matching the treatment to the patient.",
        href: "/future-of-pain-medicine/precision-pain-medicine",
      },
      {
        title: "Mind, brain, and new frontiers",
        blurb:
          "Pain reprocessing science, virtual reality analgesia, and early-stage research — covered honestly.",
        href: "/future-of-pain-medicine/mind-and-brain",
      },
    ],
  },
];

export function getHub(slug: string): Hub | undefined {
  return HUBS.find((h) => h.slug === slug);
}
