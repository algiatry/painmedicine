import type { Article } from "./understanding";

/**
 * "Pain Conditions" spoke pages under the /conditions hub.
 *
 * Same model as the understanding/treatments modules: EDUCATIONAL pages
 * built from cited primary sources (WHO, NIH, IASP, guideline bodies,
 * peer-reviewed literature). A condition page explains what the condition
 * is, why it hurts, and how it is treated today — described, never
 * prescribed. No dosing, no individualized recommendation; every treatment
 * mention routes decisions to the reader's own clinician. Ship as
 * `status: "sourced"` with the honest byline per CONTENT-TEMPLATE.md.
 */

const HUB = "conditions" as const;

export const CONDITION_ARTICLES: Article[] = [
  {
    hub: HUB,
    slug: "low-back-pain",
    title: "Low Back Pain",
    description:
      "What causes pain in the lower back: the structures that can actually hurt, why most cases are 'non-specific,' what an MRI can and can't tell you, the red flags that need urgent care, and how low back pain is treated today.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Most low back pain — roughly nine cases in ten — is 'non-specific': it arises from the muscles, ligaments, discs, and joints of the back without one identifiable culprit, and it usually eases over days to weeks. Less often the pain comes from an irritated nerve root, and rarely from a serious underlying condition. It is also the world's leading cause of disability — if your back hurts, you are in vast company.",
    faqs: [
      {
        question: "What causes pain in the lower back?",
        answer:
          "The lower back is dense with structures that can generate pain: muscles and ligaments, the intervertebral discs, the small facet joints that link each vertebra, the sacroiliac joints, and the nerve roots that exit the spine. In roughly 90% of cases no single structure can be confidently blamed — clinicians call this non-specific low back pain. A minority of cases come from nerve-root irritation (such as sciatica), and a small fraction from serious causes like fracture, infection, inflammatory disease, or cancer.",
      },
      {
        question: "How do I know if my back pain is serious?",
        answer:
          "Most back pain is not dangerous, but seek care urgently for the red flags: new numbness in the groin or inner thighs, trouble controlling bladder or bowels, or worsening leg weakness (possible cauda equina syndrome — an emergency); fever alongside back pain; pain after significant trauma; or back pain with a history of cancer, osteoporosis, or unexplained weight loss. When none of these are present and the pain is recent, serious causes are rare.",
      },
      {
        question: "Should I get an MRI for low back pain?",
        answer:
          "Usually not right away. Major guidelines advise against early imaging for low back pain unless red flags or significant nerve symptoms are present, because scans rarely change early treatment and often surface findings that sound alarming but are normal for your age. In pain-free adults, disc degeneration appears in about 37% of 20-year-olds and 96% of 80-year-olds. Your clinician can tell you whether your situation is one where imaging genuinely helps.",
      },
      {
        question: "Why does my back still hurt if my scan looks normal?",
        answer:
          "Because pain is made by the nervous system, not by the scanner. Imaging shows structure, and structure correlates surprisingly loosely with pain in both directions: scans find 'damage' in people who feel fine, and find little in people who hurt badly. Persistent pain often involves a sensitized pain system layered on top of whatever started it. The pain is fully real — it is just not always visible.",
      },
      {
        question: "Is bed rest good for a bad back?",
        answer:
          "No — this is one of the clearest reversals in modern back care. Staying gently active leads to faster recovery than bed rest, which weakens the muscles the spine relies on and tends to prolong the episode. Guidelines now advise continuing ordinary movement as much as the pain reasonably allows. If pain is stopping you from moving at all, that is worth a conversation with your clinician rather than a week in bed.",
      },
    ],
    references: [
      {
        source: "WHO",
        title: "Low back pain — fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/low-back-pain",
      },
      {
        source: "The Lancet / PubMed",
        title:
          "Hartvigsen et al. — What low back pain is and why we need to pay attention (Lancet Low Back Pain Series)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29573870/",
      },
      {
        source: "AJNR / PMC",
        title:
          "Brinjikji et al. — Systematic literature review of imaging features of spinal degeneration in asymptomatic populations",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4464797/",
      },
      {
        source: "Annals of Internal Medicine",
        title:
          "Qaseem et al. — Noninvasive treatments for acute, subacute, and chronic low back pain: ACP clinical practice guideline",
        url: "https://www.acpjournals.org/doi/10.7326/M16-2367",
      },
      {
        source: "NIH / NINDS",
        title: "Back pain — patient information",
        url: "https://www.ninds.nih.gov/health-information/disorders/back-pain",
      },
      {
        source: "NCBI StatPearls",
        title: "Cauda Equina and Conus Medullaris Syndromes",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK537200/",
      },
    ],
    related: [
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb:
          "Chronic low back pain is the classic mixed-mechanism pain — often all three types at once.",
      },
      {
        title: "Acute vs. chronic pain",
        href: "/understanding-pain/acute-vs-chronic-pain",
        blurb: "Why the three-month line matters for a back that keeps hurting.",
      },
      {
        title: "Your first visit to a pain physician",
        href: "/what-is-pain-medicine/your-first-visit",
        blurb: "What actually happens when back pain reaches a specialist.",
      },
    ],
  },
];
