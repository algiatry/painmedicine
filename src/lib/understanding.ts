import type { PageMeta } from "./schema";

/**
 * "Understanding Pain" science explainers — spoke pages under the
 * /understanding-pain hub.
 *
 * These are EDUCATIONAL science pages built from cited primary sources
 * (IASP, WHO ICD-11, NIH/NINDS, peer-reviewed literature). They describe how
 * pain works; they make no individualized clinical recommendation, give no
 * dosing, and name no "best" treatment. Per the review model they ship as
 * `status: "sourced"` with an honest byline — not a fabricated review credit,
 * and not the orientation-only hold used for clinical guidance pages.
 *
 * The prose + figures for each article live in a matching component under
 * src/components/science/. The typed record here owns everything the review
 * model, schema, and byline depend on: status, dates, the AEO answer, the FAQ
 * block, and the reference list.
 */

export type Reference = {
  /** Human label, e.g. "IASP — Terminology" */
  source: string;
  /** Title of the specific document/page */
  title: string;
  url: string;
};

export type Article = PageMeta & {
  hub: "understanding-pain";
  /** ~50-60 word plain-English answer to the page's core question (AEO). */
  answer: string;
  faqs: { question: string; answer: string }[];
  references: Reference[];
  /** Cross-links to sibling pages (the science → science/treatment triangle). */
  related: { title: string; href: string; blurb: string }[];
};

const HUB = "understanding-pain" as const;
const LAST_UPDATED = "2026-08-26";

export const ARTICLES: Article[] = [
  {
    hub: HUB,
    slug: "how-pain-works",
    title: "How Pain Works",
    description:
      "How the body makes pain: the nerve endings that detect a threat, the spinal 'gate' that filters the signal, and why the brain — not the injury alone — decides how much it hurts.",
    status: "sourced",
    lastUpdated: LAST_UPDATED,
    answer:
      "Pain begins when specialized nerve endings called nociceptors detect a threat — heat, pressure, or tissue damage — and send a signal up your nerves to the spinal cord and brain. But pain is not a simple readout of that signal. The spinal cord can turn the volume up or down, and the brain builds the final experience of hurting.",
    faqs: [
      {
        question: "Does more pain always mean more damage?",
        answer:
          "No. Pain is the nervous system's protective response, not a direct meter of tissue damage. Serious injuries can hurt little at first, and very real pain can persist long after tissue has healed. How much you hurt reflects how much threat your nervous system perceives — which many things can influence.",
      },
      {
        question: "If the brain makes pain, is it 'all in my head'?",
        answer:
          "No. All pain is produced by the nervous system, and it is completely real. 'Made by the brain' is not the same as 'imagined.' The brain constructs pain from real signals and real biology — describing that process explains how pain works, it does not mean the pain is fake.",
      },
      {
        question: "Why does rubbing a sore spot make it feel better?",
        answer:
          "Rubbing activates large, fast touch nerves that can partly 'close the gate' in the spinal cord, so fewer pain signals reach the brain. This everyday effect is the gate control theory in action, and it is part of why devices like TENS units are used for some kinds of pain.",
      },
    ],
    references: [
      {
        source: "IASP",
        title: "IASP Announces Revised Definition of Pain (2020)",
        url: "https://www.iasp-pain.org/publications/iasp-news/iasp-announces-revised-definition-of-pain/",
      },
      {
        source: "Science / PMC",
        title:
          "Melzack & Wall, gate control theory of pain — 50th-anniversary review",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4676495/",
      },
      {
        source: "NCBI StatPearls",
        title: "Pain Theory",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK545194/",
      },
      {
        source: "IASP",
        title: "Everything you wanted to know about central sensitisation",
        url: "https://www.iasp-pain.org/publications/relief-news/article/central-sensitisation/",
      },
      {
        source: "NIH / NINDS",
        title: "Pain — patient information",
        url: "https://www.ninds.nih.gov/health-information/disorders/pain",
      },
    ],
    related: [
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb: "How the same machinery produces very different kinds of pain.",
      },
      {
        title: "Acute vs. chronic pain",
        href: "/understanding-pain/acute-vs-chronic-pain",
        blurb: "What happens when the alarm system won't switch off.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "types-of-pain",
    title: "The Three Types of Pain",
    description:
      "Nociceptive, neuropathic, and nociplastic pain — the modern, mechanism-based way clinicians classify pain, and why the type you have shapes which treatments tend to help.",
    status: "sourced",
    lastUpdated: LAST_UPDATED,
    answer:
      "Clinicians group pain into three mechanism-based types. Nociceptive pain comes from actual or threatened tissue damage, like a sprain or arthritis. Neuropathic pain comes from damage or disease in the nervous system itself, like sciatica or diabetic neuropathy. Nociplastic pain — recognized by the IASP in 2017 — comes from a changed, over-sensitive pain system, as in fibromyalgia.",
    faqs: [
      {
        question: "What is nociplastic pain in simple terms?",
        answer:
          "Nociplastic pain is real pain that comes from a pain system that has become over-sensitive, rather than from ongoing tissue damage or a nerve injury. Fibromyalgia is the classic example. The IASP added the term in 2017 to describe a large group of patients whose pain fit neither of the older categories.",
      },
      {
        question: "Can you have more than one type of pain at once?",
        answer:
          "Yes. 'Mixed pain' is common. Chronic low back pain, for example, can have nociceptive, neuropathic, and nociplastic features together. That overlap is one reason some pain is complex to treat and benefits from a specialist's assessment.",
      },
      {
        question: "How do clinicians tell which type of pain I have?",
        answer:
          "Mostly from your story and an exam. Burning, shooting, or electric pain with numbness points toward neuropathic; aching or throbbing that tracks an injury points toward nociceptive; widespread pain with heightened sensitivity points toward nociplastic. There is no single blood test that sorts them.",
      },
    ],
    references: [
      {
        source: "IASP",
        title: "IASP Terminology — pain definitions (nociceptive / neuropathic / nociplastic)",
        url: "https://www.iasp-pain.org/resources/terminology/",
      },
      {
        source: "NCBI / PMC",
        title:
          "Nociplastic Pain: A Critical Paradigm for Multidisciplinary Recognition and Management",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11476668/",
      },
      {
        source: "UCSF Pain Management",
        title: "Types of Pain",
        url: "https://pain.ucsf.edu/understanding-pain-pain-basics/types-pain",
      },
      {
        source: "NIH / NINDS",
        title: "Peripheral Neuropathy",
        url: "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy",
      },
    ],
    related: [
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "The signal path behind all three types.",
      },
      {
        title: "Acute vs. chronic pain",
        href: "/understanding-pain/acute-vs-chronic-pain",
        blurb: "Why some pain outlasts the injury that started it.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "acute-vs-chronic-pain",
    title: "Acute vs. Chronic Pain",
    description:
      "Acute pain protects you and fades as you heal. Chronic pain lasts beyond three months and can become a condition in its own right. Why that line matters for how pain is understood and treated.",
    status: "sourced",
    lastUpdated: LAST_UPDATED,
    answer:
      "Acute pain is short-term pain that warns you of injury or illness and usually fades as your body heals. Chronic pain is pain that lasts or keeps returning for more than three months — often past the point where tissue has healed. In 2019 the World Health Organization's ICD-11 recognized chronic pain as a health condition in its own right.",
    faqs: [
      {
        question: "When does pain officially become 'chronic'?",
        answer:
          "The widely used line is three months of pain that persists or keeps returning, the threshold adopted by the WHO's ICD-11. It is a practical marker, not a magic switch — the point is that pain lasting this long often behaves differently from fresh injury pain and deserves its own assessment.",
      },
      {
        question: "Does chronic pain mean something is still damaged?",
        answer:
          "Not necessarily. Chronic pain can continue after tissue has healed because the nervous system's alarm has become sensitized and keeps signaling. The pain is real; the mechanism has simply shifted from injury toward a change in how the pain system itself is working.",
      },
      {
        question: "Can chronic pain actually be treated?",
        answer:
          "Yes. A complete cure is not always possible, but many people meaningfully reduce their pain and regain function using a combination of approaches — physical, medical, and psychological. A pain specialist can help build a plan. Discuss the options that fit your situation with your own clinician.",
      },
    ],
    references: [
      {
        source: "European Pain Federation (EFIC)",
        title: "ICD-11 and Chronic Pain",
        url: "https://europeanpainfederation.eu/icd-11-and-chronic-pain/",
      },
      {
        source: "PAIN (journal)",
        title:
          "Classification of chronic pain for the ICD-11 (WHO field testing)",
        url: "https://journals.lww.com/pain/fulltext/2022/02000/classification_of_chronic_pain_for_the.29.aspx",
      },
      {
        source: "IASP",
        title: "Everything you wanted to know about central sensitisation",
        url: "https://www.iasp-pain.org/publications/relief-news/article/central-sensitisation/",
      },
      {
        source: "NIH / NINDS",
        title: "Pain — patient information",
        url: "https://www.ninds.nih.gov/health-information/disorders/pain",
      },
    ],
    related: [
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "Central sensitization — how the alarm gets stuck on.",
      },
      {
        title: "What is pain medicine?",
        href: "/what-is-pain-medicine",
        blurb: "The specialty built to treat pain that persists.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "measuring-pain",
    title: "Measuring Pain",
    description:
      "Why pain is so hard to measure, what the 0-to-10 scale can and can't capture, and how to describe your pain so your care team truly understands it.",
    status: "sourced",
    lastUpdated: LAST_UPDATED,
    answer:
      "Pain is subjective — there is no blood test or scanner that measures it. Clinicians use rating tools like the 0-to-10 numeric scale, the faces scale, and questionnaires to track it over time. A single number is useful shorthand, but describing your pain's quality, timing, and effect on your life tells your care team far more.",
    faqs: [
      {
        question: "Is a higher pain number always worse?",
        answer:
          "The number reflects your own experience, not a comparison with anyone else — your '6' and another person's '6' are not the same thing. What is most useful is the trend over time for you: whether your own numbers, and what you can do, are improving or getting worse.",
      },
      {
        question: "What's a better way to describe my pain than a number?",
        answer:
          "Describe the quality (burning, aching, stabbing, electric), the pattern (constant or in flares), what makes it better or worse, and — most tellingly — what it stops you from doing. Concrete examples from daily life give your clinician far more to work with than a single score.",
      },
      {
        question: "Why does my clinician ask about mood and sleep?",
        answer:
          "Pain, mood, and sleep strongly influence one another. Poor sleep and low mood can amplify pain, and pain disrupts both in return. Good pain care looks at the whole picture, not intensity alone, because addressing these together often helps more than treating pain by itself.",
      },
    ],
    references: [
      {
        source: "IASP",
        title: "IASP Announces Revised Definition of Pain — notes on personal report",
        url: "https://www.iasp-pain.org/publications/iasp-news/iasp-announces-revised-definition-of-pain/",
      },
      {
        source: "Wong-Baker FACES Foundation",
        title: "Wong-Baker FACES Pain Rating Scale",
        url: "https://wongbakerfaces.org/",
      },
      {
        source: "NCBI StatPearls",
        title: "Pain Assessment",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK556098/",
      },
      {
        source: "NIH / NINDS",
        title: "Pain — patient information",
        url: "https://www.ninds.nih.gov/health-information/disorders/pain",
      },
    ],
    related: [
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "Why the same injury produces different numbers in different people.",
      },
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb: "Describing quality helps identify the mechanism.",
      },
    ],
  },
];

export function getArticle(hub: string, slug: string): Article | undefined {
  return ARTICLES.find((a) => a.hub === hub && a.slug === slug);
}
