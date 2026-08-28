import type { Article } from "./understanding";

/**
 * "Pain Treatments Today" spoke pages under the /treatments hub.
 *
 * Same model as the understanding/future modules: EDUCATIONAL pages built
 * from cited primary sources (NIDA, FDA, DEA, CDC, peer-reviewed
 * literature). They describe what a treatment is and what the evidence
 * says; they make no individualized recommendation, give no dosing, and
 * include no "how to obtain" framing. Ship as `status: "sourced"` with the
 * honest byline. Substances with opioid-receptor activity must keep the
 * SAMHSA helpline inline in their body component (see CONTENT-TEMPLATE.md).
 */

const HUB = "treatments" as const;

export const TREATMENT_ARTICLES: Article[] = [
  {
    hub: HUB,
    slug: "kratom",
    title: "Kratom",
    description:
      "What kratom is, how mitragynine acts on opioid receptors, what the evidence says about pain relief, the real risks — dependence, interactions, unregulated products — and where the law stands on concentrated 7-OH.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Kratom is a Southeast Asian tree whose leaves contain mitragynine, a compound that acts on the same opioid receptors as prescription painkillers — though not in the same way. Roughly two million Americans use it each year, many for pain. It is not FDA-approved, the products are largely unregulated, and the evidence for pain relief, while real, is early and thin.",
    faqs: [
      {
        question: "Is kratom an opioid?",
        answer:
          "Not botanically — the kratom tree is in the coffee family. But its main active compound, mitragynine, is a partial agonist at mu-opioid receptors, the same receptors morphine acts on. Scientists often call it an 'atypical opioid': opioid-receptor activity is central to how it works, which is also why dependence and withdrawal are real risks.",
      },
      {
        question: "Does kratom actually work for chronic pain?",
        answer:
          "Nobody knows yet with the kind of evidence pain medicine relies on. Millions of users report relief in surveys, and one small placebo-controlled trial found kratom significantly increased pain tolerance. But no large randomized trial has ever tested kratom in people with chronic pain, so its true benefit — and how it compares to proven treatments — remains unmeasured.",
      },
      {
        question: "Is kratom legal in the United States?",
        answer:
          "Leaf kratom is not a federally controlled substance, but it is not FDA-approved for any use, and a handful of states ban it while others regulate it under Kratom Consumer Protection Acts. In 2026 the DEA began temporarily scheduling the concentrated-7-OH corner of the market: three synthetic 7-OH-related compounds entered Schedule I on August 26, 2026, and an order covering concentrated 7-hydroxymitragynine itself is still pending — moves aimed at potent extracts and tablets, not the traditional leaf.",
      },
      {
        question: "Is kratom addictive?",
        answer:
          "It can be. Regular use can produce physical dependence, and stopping can cause an opioid-like withdrawal — irritability, muscle aches, insomnia, runny nose, low mood. Risk appears higher with frequent use and with concentrated extracts. If stopping feels hard, treatment approaches used for opioid dependence can help; the SAMHSA helpline (1-800-662-4357) is a free, confidential place to start.",
      },
      {
        question: "What is 7-OH, and why is it treated differently?",
        answer:
          "7-hydroxymitragynine (7-OH) is a minor alkaloid in kratom leaf — present only in traces, but far more potent at opioid receptors than mitragynine. Manufacturers began selling concentrated or synthetic 7-OH tablets that the FDA says are 'not kratom' but effectively novel opioid products, and in 2026 the DEA moved against them: three synthetic 7-OH relatives entered Schedule I on August 26, 2026, and a temporary order for high-concentration 7-OH itself is still pending.",
      },
      {
        question: "Can I use kratom alongside my pain medications?",
        answer:
          "Talk with your physician before combining kratom with anything — and tell them if you already use it. Kratom is processed by the same liver enzymes as many common drugs, and nearly all kratom-involved deaths involved other substances, most often opioids or sedatives. It also matters before surgery or anesthesia. This is a conversation worth having openly; a good clinician will not dismiss it.",
      },
    ],
    references: [
      {
        source: "NIH / NIDA",
        title: "Kratom — research topic overview",
        url: "https://nida.nih.gov/research-topics/kratom",
      },
      {
        source: "FDA",
        title: "FDA and Kratom",
        url: "https://www.fda.gov/news-events/public-health-focus/fda-and-kratom",
      },
      {
        source: "FDA",
        title: "Hiding in Plain Sight: 7-OH Products",
        url: "https://www.fda.gov/news-events/public-health-focus/hiding-plain-sight-7-oh-products",
      },
      {
        source: "DEA",
        title:
          "DEA to Temporarily Schedule 7-OH and Related Substances to Protect Public Safety (July 1, 2026)",
        url: "https://www.dea.gov/press-releases/2026/07/01/dea-temporarily-schedule-7-oh-and-related-substances-protect-public",
      },
      {
        source: "Federal Register",
        title:
          "Temporary Placement of 7-Hydroxymitragynine Above a Specified Threshold in Schedule I (notice of intent, July 6, 2026)",
        url: "https://www.federalregister.gov/documents/2026/07/06/2026-13580/schedules-of-controlled-substance-temporary-placement-of-7-hydroxymitragynine-above-a-specified",
      },
      {
        source: "Federal Register",
        title:
          "Temporary Placement of Mitragynine Pseudoindoxyl, MGM-15, and MGM-16 in Schedule I (temporary order, effective August 26, 2026)",
        url: "https://www.federalregister.gov/documents/2026/08/26/2026-17429/schedules-of-controlled-substances-temporary-placement-of-mitragynine-pseudoindoxyl-mgm-15-and",
      },
      {
        source: "Yale Journal of Biology and Medicine",
        title:
          "Vicknasingam et al. — Kratom and Pain Tolerance: A Randomized, Placebo-Controlled, Double-Blind Study (2020)",
        url: "https://pubmed.ncbi.nlm.nih.gov/32607084/",
      },
      {
        source: "CDC MMWR",
        title: "Increases in Kratom-Related Reports to Poison Centers",
        url: "https://www.cdc.gov/mmwr/volumes/75/wr/mm7511a1.htm",
      },
      {
        source: "Frontiers in Pharmacology",
        title:
          "Kratom safety and toxicology in the public health context: research needs to better inform regulation (2024)",
        url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1403140/full",
      },
    ],
    related: [
      {
        title: "The pain treatment pipeline",
        href: "/future-of-pain-medicine/pipeline",
        blurb:
          "The regulated route to new non-opioid relief — every notable candidate by phase.",
      },
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb:
          "The receptors and pathways any analgesic — plant or pharmaceutical — has to work through.",
      },
    ],
  },
];
