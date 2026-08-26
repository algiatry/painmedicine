import type { Article } from "./understanding";
import { LAST_REVIEWED } from "./pipeline";

/**
 * "Future of Pain Medicine" spoke pages. Same Article shape as the
 * Understanding Pain explainers (see understanding.ts): status "sourced",
 * honest byline, cited references. These are forward-looking FACTUAL REPORTING
 * on the research pipeline — not clinical advice and not endorsement of any
 * investigational therapy.
 */
export const FUTURE_ARTICLES: Article[] = [
  {
    hub: "future-of-pain-medicine",
    slug: "pipeline",
    title: "The Pain Treatment Pipeline",
    description:
      "A running tracker of the drugs and devices in development to treat pain — mechanism, trial phase, and what each one means — from the first new non-opioid class in decades to first-in-human gene therapy.",
    status: "sourced",
    lastUpdated: LAST_REVIEWED,
    answer:
      "After decades with few genuinely new options, pain treatment is moving again. This tracker follows the notable drugs and devices in development — what each one is, how it works, and how far along it is — from suzetrigine, the first non-opioid painkiller of a new class in decades, to gene therapies just entering human trials. It is reporting on the science, updated as it moves; it is not medical advice.",
    faqs: [
      {
        question: "Does a drug being 'in the pipeline' mean I can get it?",
        answer:
          "Usually no. Most entries here are still in clinical trials and are not available as prescription treatments — and most investigational drugs never reach the market at all. Only entries marked 'Approved' are cleared for use, and even then only for the specific condition on their label. Ask your clinician what is actually available for your situation.",
      },
      {
        question: "What do the trial phases mean?",
        answer:
          "Phase 1 tests safety in a small group. Phase 2 looks for early signs the treatment works and refines the dose. Phase 3 is the large, pivotal test against placebo or standard care that regulators weigh for approval. 'Approved' means the FDA has cleared it. Each phase is a filter — many candidates stop here.",
      },
      {
        question: "Why include treatments that failed?",
        answer:
          "Because an honest pipeline includes its setbacks. Failures like tanezumab and the halted acute-pain arm of VX-993 shaped the field and explain why today's candidates are designed the way they are. Showing only the wins would misrepresent how slow and uncertain drug development really is.",
      },
    ],
    references: [
      {
        source: "U.S. FDA",
        title:
          "FDA guidance — Development of Non-Opioid Analgesics for Chronic Pain",
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/development-non-opioid-analgesics-chronic-pain",
      },
      {
        source: "NIH",
        title: "ClinicalTrials.gov — registry of clinical studies",
        url: "https://clinicaltrials.gov/",
      },
      {
        source: "IASP",
        title:
          "FDA Approves Non-Opioid Treatment for Moderate-to-Severe Acute Pain",
        url: "https://www.iasp-pain.org/publications/iasp-news/fda-approves-non-opioid-treatment-for-moderate-to-severe-acute-pain/",
      },
    ],
    related: [
      {
        title: "The future of pain medicine",
        href: "/future-of-pain-medicine",
        blurb: "How the whole field is changing — the hub this tracker sits in.",
      },
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb: "Why new drugs target specific pain mechanisms.",
      },
    ],
  },
];
