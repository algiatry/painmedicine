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

const LAST_UPDATED = "2026-08-23";

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
    status: "pending-review",
    lastUpdated: LAST_UPDATED,
    heading: "What is pain medicine?",
    intro: [
      "Pain medicine is a recognized medical specialty — physicians who complete additional fellowship training focused specifically on diagnosing and treating pain, then earn board certification in the field.",
      "Modern pain medicine is multidisciplinary. A pain specialist typically works alongside physical therapists, psychologists, and pharmacists, because chronic pain involves far more than the site where it hurts.",
      "This hub explains the specialty in plain language: how pain physicians train, how a pain clinic differs from primary care, what happens at a first appointment, and when it makes sense to ask for a referral.",
    ],
    planned: [
      {
        title: "How pain physicians train and certify",
        blurb:
          "Fellowship pathways through anesthesiology, physical medicine & rehabilitation, neurology, and psychiatry — and what board certification means.",
      },
      {
        title: "The multidisciplinary pain team",
        blurb:
          "Why the best pain care combines medical, physical, and behavioral expertise — the biopsychosocial model explained.",
      },
      {
        title: "Your first visit to a pain specialist",
        blurb:
          "What to expect, what to bring, and the questions worth asking.",
      },
      {
        title: "Pain clinics vs. pain medicine",
        blurb:
          "How to recognize a legitimate, credentialed practice — and the red flags of clinics that aren't.",
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
    ],
  },
  {
    slug: "treatments",
    title: "Pain Treatments Today",
    description:
      "The full landscape of evidence-based pain treatment: medications, interventional procedures, and physical and behavioral therapies.",
    status: "pending-review",
    lastUpdated: LAST_UPDATED,
    heading: "Pain treatments today",
    intro: [
      "Pain medicine today offers far more than pills. Treatment spans medication classes with very different mechanisms, image-guided procedures, neuromodulation devices, and physical and psychological therapies with real evidence behind them.",
      "This hub maps the whole landscape so you can understand what each option is, what the evidence says, and what questions to bring to your physician. It describes — it does not prescribe. Treatment decisions belong with you and your care team.",
    ],
    planned: [
      {
        title: "Medications for pain",
        blurb:
          "Non-opioid analgesics, adjuvant medications, topicals, opioid stewardship, and the first new non-opioid class in decades.",
      },
      {
        title: "Interventional procedures",
        blurb:
          "Nerve blocks, radiofrequency ablation, spinal cord stimulation, and other image-guided options.",
      },
      {
        title: "Physical & behavioral therapies",
        blurb:
          "Physical therapy, cognitive behavioral therapy for pain, and other approaches with clinical evidence.",
      },
      {
        title: "Comparing your options",
        blurb:
          "An honest look at evidence quality across treatments — what's strong, what's promising, what's weak.",
      },
    ],
  },
  {
    slug: "conditions",
    title: "Pain Conditions",
    description:
      "Condition-by-condition guides to common pain conditions: why it hurts, today's treatment approaches, and when to see a specialist.",
    status: "pending-review",
    lastUpdated: LAST_UPDATED,
    heading: "Pain conditions",
    intro: [
      "Every pain condition has its own mechanism, its own treatment ladder, and its own research pipeline. These guides connect all three — what it is, what helps today, and what science is working on next.",
      "Condition guides publish after physician review. The launch set below is in editorial preparation now.",
    ],
    planned: [
      { title: "Chronic low back pain", blurb: "The most common chronic pain condition worldwide." },
      { title: "Neuropathic pain & peripheral neuropathy", blurb: "Pain from nerve damage — and why it needs different treatment." },
      { title: "Migraine", blurb: "A neurological disease — and pain medicine's biggest recent success story." },
      { title: "Arthritis pain", blurb: "Osteoarthritis and inflammatory arthritis." },
      { title: "Fibromyalgia", blurb: "The signature nociplastic pain condition." },
      { title: "Sciatica", blurb: "Radicular pain from the low back down the leg." },
      { title: "Cancer pain", blurb: "Managing pain through and after cancer treatment." },
      { title: "Complex regional pain syndrome (CRPS)", blurb: "Rare, severe, and important to catch early." },
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
