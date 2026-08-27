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
  /** Owning hub slug, e.g. "understanding-pain" or "future-of-pain-medicine". */
  hub: string;
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
  {
    hub: HUB,
    slug: "pain-and-sleep",
    title: "Pain and Sleep",
    description:
      "Pain and sleep wreck each other — but not equally. Why a bad night raises tomorrow's pain, how sleep loss switches off the body's own pain brakes, and what the evidence says helps.",
    status: "sourced",
    lastUpdated: "2026-08-27",
    answer:
      "Pain and sleep affect each other in both directions, but research shows the sleep-to-pain direction is stronger: poor sleep predicts new and worsening pain more reliably than pain predicts poor sleep. Even one night of bad sleep lowers pain thresholds and weakens the brain's built-in pain-dampening systems — which is why sleep is a core target in modern pain care.",
    faqs: [
      {
        question: "Does poor sleep cause pain, or does pain ruin sleep?",
        answer:
          "Both — it is a genuine cycle. But when researchers follow people over time, sleep problems predict future pain more strongly and consistently than pain predicts future sleep problems. That is actually hopeful news: it means sleep is not just a victim of pain. It is a lever you and your care team can work on.",
      },
      {
        question: "Can one bad night really make the next day's pain worse?",
        answer:
          "Yes. In diary studies, night-to-night dips in sleep quality predicted next-day increases in pain — and quality mattered more than the number of hours slept. In the lab, a single night of sleep deprivation measurably lowered healthy people's pain thresholds and changed how their brains processed pain.",
      },
      {
        question: "Is broken-up sleep as bad as short sleep?",
        answer:
          "For pain, it may be worse. In one experiment, sleep interrupted by repeated forced awakenings switched off the body's natural pain-inhibition response and increased spontaneous pain, while sleep that was merely shortened by the same amount did not. Deep, unbroken sleep seems to be what the pain system needs most.",
      },
      {
        question: "Will fixing my insomnia fix my pain?",
        answer:
          "Treating insomnia — for example with cognitive behavioral therapy for insomnia (CBT-I) — reliably improves sleep and mood in people with chronic pain. Its direct effect on pain intensity is modest on average, but better sleep restores the systems that regulate pain, and it improves the daily life pain has disrupted. Ask your clinician whether it fits your situation.",
      },
    ],
    references: [
      {
        source: "J Pain / PMC",
        title:
          "Finan, Goodin & Smith — The Association of Sleep and Pain: An Update and a Path Forward",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4046588/",
      },
      {
        source: "J Neurosci / PMC",
        title:
          "Krause et al. — The Pain of Sleep Loss: A Brain Characterization in Humans",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6433768/",
      },
      {
        source: "Sleep Med Rev / PubMed",
        title:
          "Sun et al. — Prevalence of sleep disturbances in patients with chronic non-cancer pain: systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/33827029/",
      },
      {
        source: "PLoS One / PMC",
        title:
          "Staffe et al. — Total sleep deprivation increases pain sensitivity, impairs conditioned pain modulation and facilitates temporal summation",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6892491/",
      },
      {
        source: "Sleep Med Rev / PubMed",
        title:
          "Selvanathan et al. — Cognitive behavioral therapy for insomnia in patients with chronic pain: systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/33610967/",
      },
      {
        source: "NIH / NHLBI",
        title: "Sleep Deprivation and Deficiency — patient information",
        url: "https://www.nhlbi.nih.gov/health/sleep-deprivation",
      },
    ],
    related: [
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "The pain-dampening systems that sleep loss switches off.",
      },
      {
        title: "Measuring pain",
        href: "/understanding-pain/measuring-pain",
        blurb: "Why your clinician asks about sleep — it is part of the picture.",
      },
    ],
  },
  {
    hub: HUB,
    slug: "pain-and-emotion",
    title: "Pain and Emotion",
    description:
      "Emotion is written into the definition of pain itself. How pain and feeling share brain circuitry, why stress and fear turn the volume up, and why therapy that helps is proof of biology — not proof it was in your head.",
    status: "sourced",
    lastUpdated: "2026-08-27",
    answer:
      "Pain is defined by the world's pain scientists as an unpleasant sensory and emotional experience — emotion is part of pain, not a contaminant of it. Brain regions that process pain overlap with those that process feeling, and the brain's own volume-control system can amplify or dampen pain signals. That is why stress worsens pain, and why brain-targeted therapies can genuinely help.",
    faqs: [
      {
        question: "Is my pain just depression in disguise?",
        answer:
          "No. Pain and depression are distinct conditions that share brain machinery and feed each other — around 65% of people with depression report pain, and depression affects roughly half of patients in pain clinics. Having both does not make either less real, and good care takes both seriously at the same time.",
      },
      {
        question: "Why does stress make my pain worse?",
        answer:
          "Your brain runs a volume-control system that can amplify or suppress pain signals on their way through the spinal cord. Emotional state, anxiety, attention, and expectation all feed into it. Under stress the system tips toward amplification — the same signal genuinely hurts more. It is physiology, not weakness.",
      },
      {
        question: "If therapy helps my pain, does that mean it was all in my head?",
        answer:
          "No. Psychological therapies like CBT produce measurable — usually modest — reductions in pain and disability across dozens of randomized trials. They work because pain-processing and emotion-processing circuits overlap, so treatments that calm one can quiet the other. Using the brain's own machinery is working with real biology, not imagining things.",
      },
    ],
    references: [
      {
        source: "IASP",
        title: "IASP Announces Revised Definition of Pain (2020)",
        url: "https://www.iasp-pain.org/publications/iasp-news/iasp-announces-revised-definition-of-pain/",
      },
      {
        source: "Arch Intern Med / JAMA",
        title: "Bair et al. — Depression and pain comorbidity: a literature review",
        url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/216320",
      },
      {
        source: "Nat Rev Neurosci / PMC",
        title:
          "Bushnell, Čeko & Low — Cognitive and emotional control of pain and its disruption in chronic pain",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4465351/",
      },
      {
        source: "J Clin Invest / PMC",
        title: "Ossipov, Dussor & Porreca — Central modulation of pain",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2964993/",
      },
      {
        source: "Curr Opin Psychol / PMC",
        title:
          "Zale & Ditre — Pain-related fear, disability, and the fear-avoidance model of chronic pain",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4383173/",
      },
      {
        source: "Expert Rev Neurother / PMC",
        title: "Quartana, Campbell & Edwards — Pain catastrophizing: a critical review",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2696024/",
      },
      {
        source: "Annu Rev Neurosci / PMC",
        title:
          "Atlas — How Instructions, Learning, and Expectations Shape Pain and Neurobiological Responses",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11793868/",
      },
      {
        source: "Psychosom Med / PMC",
        title:
          "Eisenberger — The neural bases of social pain: evidence for shared representations with physical pain",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3273616/",
      },
      {
        source: "Cochrane",
        title:
          "Williams et al. — Psychological therapies for the management of chronic pain in adults (plain-language summary)",
        url: "https://www.cochrane.org/CD007407/SYMPT_what-are-benefits-and-risks-psychological-therapies-adults-persistent-and-distressing-pain-neither",
      },
    ],
    related: [
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "The signal path the brain's volume control acts on.",
      },
      {
        title: "Pain and sleep",
        href: "/understanding-pain/pain-and-sleep",
        blurb: "The other everyday amplifier — and the same modulatory circuits.",
      },
      {
        title: "The mind and the brain",
        href: "/future-of-pain-medicine/mind-and-brain",
        blurb: "Treatments now being built on exactly this circuitry.",
      },
    ],
  },
  {
    hub: HUB,
    slug: "the-placebo-effect",
    title: "The Placebo Effect",
    description:
      "The placebo effect in pain is real, measurable biology: expectation switching on the brain's own pain-relief chemistry. What it proves about your pain — and what it can't do.",
    status: "sourced",
    lastUpdated: "2026-08-27",
    answer:
      "The placebo effect in pain is not imagination — it is expectation activating the brain's own pain-modulation system, including its natural opioid chemistry. Blocking that chemistry with a drug blocks placebo relief. Placebos can ease symptoms like pain and nausea, even when people know they're taking one, but they do not treat the underlying disease.",
    faqs: [
      {
        question: "If a placebo helped me, does that mean my pain wasn't real?",
        answer:
          "No — the opposite. Placebo pain relief can be blocked by naloxone, a drug that blocks opioids, which shows the relief runs on the body's own painkilling chemistry. Imaging even shows reduced pain signaling in the spinal cord. Responding to a placebo means your pain-relief system works, not that your pain was fake.",
      },
      {
        question: "Do placebos work if you know it's a placebo?",
        answer:
          "Often, for symptoms — in randomized trials, 'open-label' placebos given with full honesty still outperformed no treatment in irritable bowel syndrome and outperformed usual care alone in chronic low back pain. The trials are small and short, but they suggest the ritual and expectation of care matter, with no deception required.",
      },
      {
        question: "Can expecting side effects actually give me side effects?",
        answer:
          "Yes — that is the nocebo effect. In COVID-19 vaccine trials, about a third of people who received only saline placebo reported 'systemic side effects' like headache and fatigue. Researchers estimated nocebo responses accounted for around three-quarters of such side effects reported after a first real vaccine dose.",
      },
    ],
    references: [
      {
        source: "Lancet / PubMed",
        title: "Levine, Gordon & Fields — The mechanism of placebo analgesia (1978)",
        url: "https://pubmed.ncbi.nlm.nih.gov/80579/",
      },
      {
        source: "Nat Rev Neurosci / PMC",
        title:
          "Wager & Atlas — The neuroscience of placebo effects: connecting context, learning and health",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6013051/",
      },
      {
        source: "Science / PubMed",
        title:
          "Eippert et al. — Direct evidence for spinal cord involvement in placebo analgesia",
        url: "https://pubmed.ncbi.nlm.nih.gov/19833962/",
      },
      {
        source: "PLoS ONE",
        title:
          "Kaptchuk et al. — Placebos without deception: a randomized controlled trial in irritable bowel syndrome",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0015591",
      },
      {
        source: "PAIN / PMC",
        title:
          "Carvalho et al. — Open-label placebo treatment in chronic low back pain: a randomized controlled trial",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5113234/",
      },
      {
        source: "JAMA Netw Open",
        title:
          "Haas et al. — Frequency of adverse events in the placebo arms of COVID-19 vaccine trials: systematic review and meta-analysis",
        url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788172",
      },
      {
        source: "Cochrane / PMC",
        title:
          "Hróbjartsson & Gøtzsche — Placebo interventions for all clinical conditions",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7156905/",
      },
      {
        source: "PAIN / PubMed",
        title:
          "Tuttle et al. — Increasing placebo responses over time in U.S. clinical trials of neuropathic pain",
        url: "https://pubmed.ncbi.nlm.nih.gov/26307858/",
      },
      {
        source: "NIH / NCCIH",
        title: "Placebo Effect — patient information",
        url: "https://www.nccih.nih.gov/health/placebo-effect",
      },
      {
        source: "AMA",
        title:
          "AMA Code of Medical Ethics Opinion 2.1.4 — Use of Placebo in Clinical Practice",
        url: "https://code-medical-ethics.ama-assn.org/ethics-opinions/use-placebo-clinical-practice",
      },
    ],
    related: [
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "The descending pain-control system placebo relief runs on.",
      },
      {
        title: "Pain and emotion",
        href: "/understanding-pain/pain-and-emotion",
        blurb: "Expectation is one dial on the same volume control.",
      },
      {
        title: "Measuring pain",
        href: "/understanding-pain/measuring-pain",
        blurb: "Why self-reported relief is real data — and how to give better data.",
      },
    ],
  },
];

export function getArticle(hub: string, slug: string): Article | undefined {
  return ARTICLES.find((a) => a.hub === hub && a.slug === slug);
}
