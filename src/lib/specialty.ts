import type { Article } from "./understanding";

/**
 * "What Is Pain Medicine?" specialty explainers — spoke pages under the
 * /what-is-pain-medicine hub.
 *
 * These are NAVIGATIONAL/FACTUAL pages about the specialty itself — how
 * physicians train, how team-based care is organized, what a first visit
 * looks like, and how to recognize a credentialed practice. Like /find-help,
 * they contain no clinical guidance (no treatment recommendations, no
 * dosing), so per the review model they ship as `status: "sourced"` with the
 * honest byline rather than being held for clinical review.
 *
 * The prose + figures live in matching components under
 * src/components/specialty/.
 */

const HUB = "what-is-pain-medicine" as const;
const LAST_UPDATED = "2026-08-27";

export const SPECIALTY_ARTICLES: Article[] = [
  {
    hub: HUB,
    slug: "how-pain-physicians-train",
    title: "How Pain Physicians Train",
    description:
      "The nine-year road to pain medicine: medical school, a four-year residency through one of six specialties, a 12-month accredited fellowship, and a single shared board exam. How the credential works — and how to verify it.",
    status: "sourced",
    lastUpdated: LAST_UPDATED,
    answer:
      "A pain physician trains for about nine years after college: four years of medical school, a four-year residency — most often anesthesiology, physical medicine & rehabilitation, neurology, or psychiatry — then a 12-month ACGME-accredited pain medicine fellowship. Board certification runs through a single shared exam administered by the American Board of Anesthesiology since 1993, with six ABMS boards certifying to the same standard.",
    faqs: [
      {
        question: "How many years does a pain specialist train?",
        answer:
          "About nine years after college: four years of medical school, a four-year residency (anesthesiology, physical medicine & rehabilitation, neurology, and psychiatry all run four years), and then a 12-month fellowship accredited by the ACGME devoted entirely to pain medicine.",
      },
      {
        question: "How do I check whether a doctor is board-certified in pain medicine?",
        answer:
          "Use the ABMS's free 'Is My Doctor Certified?' lookup, reached from abms.org/verify-certification, to confirm the pain medicine subspecialty certificate — and your state medical board's site to confirm the license and check disciplinary history. Both take minutes and are exactly what the credential system is built for.",
      },
      {
        question: "Is 'board-certified in pain medicine' a single credential?",
        answer:
          "The ABMS-recognized version is one standard: a shared exam developed and administered by the American Board of Anesthesiology, with six ABMS member boards — anesthesiology, PM&R, psychiatry & neurology, emergency medicine, family medicine, and radiology — certifying their own physicians to the same passing bar. Other pain 'boards' exist outside the ABMS system; some institutions recognize them, some do not.",
      },
    ],
    references: [
      {
        source: "ACGME",
        title: "Program Requirements for Graduate Medical Education in Pain Medicine",
        url: "https://www.acgme.org/globalassets/pfassets/programrequirements/2025-reformatted-requirements/530_painmedicine_2025_reformatted.pdf",
      },
      {
        source: "ABMS",
        title:
          "ABMS Member Board Requirements for Initial Certification in a Subspecialty (2025)",
        url: "https://www.abms.org/wp-content/uploads/2025/06/Requirements-for-Initial-Certification-Subspecialty_V2_20250613.pdf",
      },
      {
        source: "American Board of Anesthesiology",
        title: "Pain Medicine Exam — certification since 1993",
        url: "https://www.theaba.org/subspecialty-exam-type/pain-medicine-exam/",
      },
      {
        source: "ABPMR",
        title: "Pain Medicine subspecialty certification",
        url: "https://www.abpmr.org/Subspecialties/Pain",
      },
      {
        source: "J Anesth Hist / PubMed",
        title:
          "Owens & Abram — The Genesis of Pain Medicine as a Subspecialty in Anesthesiology",
        url: "https://pubmed.ncbi.nlm.nih.gov/32473761/",
      },
      {
        source: "ACGME",
        title: "Data Resource Book, Academic Year 2023–2024 — program and fellow counts",
        url: "https://www.acgme.org/globalassets/pfassets/publicationsbooks/dataresourcebook2023-2024.pdf",
      },
      {
        source: "ABMS",
        title: "Verify Certification — Is My Doctor Certified?",
        url: "https://www.abms.org/verify-certification/",
      },
      {
        source: "NIH / NLM",
        title:
          "How to find out if a physician is licensed and board certified",
        url: "https://support.nlm.nih.gov/knowledgebase/article/KA-04429/en-us",
      },
    ],
    related: [
      {
        title: "The pain team",
        href: "/what-is-pain-medicine/the-pain-team",
        blurb: "What all that training leads: a multidisciplinary care model.",
      },
      {
        title: "Pain clinics vs. pain medicine",
        href: "/what-is-pain-medicine/pain-clinics-vs-pain-medicine",
        blurb: "Why the credential matters when anyone can hang a 'pain clinic' sign.",
      },
      {
        title: "Find help",
        href: "/find-help",
        blurb: "Step-by-step credential verification, with the lookup links.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "the-pain-team",
    title: "The Pain Team",
    description:
      "Why modern pain care is a team sport: the biopsychosocial model behind it, who sits on a pain team, the difference between multidisciplinary and interdisciplinary care, and what the evidence says team-based care delivers.",
    status: "sourced",
    lastUpdated: LAST_UPDATED,
    answer:
      "Modern pain care is built around a team — physician, nurse, physical therapist, pain psychologist, and often a pharmacist and social worker — because chronic pain involves biology, psychology, and life circumstances together. Randomized-trial evidence shows this coordinated, biopsychosocial approach improves pain and function more than usual care for chronic low back pain.",
    faqs: [
      {
        question: "Why does my pain clinic want me to see a psychologist?",
        answer:
          "Because pain is defined as a sensory and emotional experience, and pain-processing and emotion-processing brain circuits overlap. A pain psychologist works on that circuitry — sleep, stress, fear of movement, pacing — with evidence-based tools. It is a standard part of good pain care, not a suggestion that your pain is imaginary.",
      },
      {
        question: "Does team-based pain care actually work better?",
        answer:
          "For chronic low back pain, a large systematic review found moderate-quality evidence that multidisciplinary biopsychosocial rehabilitation improves pain and day-to-day function more than usual care, and roughly doubles the odds of being at work compared with physical treatment alone. The effects are meaningful but modest — a team is an advantage, not a magic wand.",
      },
      {
        question: "What is the difference between 'multidisciplinary' and 'interdisciplinary' care?",
        answer:
          "Same professions, different wiring. Multidisciplinary means several disciplines treat you, possibly separately. Interdisciplinary — the aspirational standard — means they meet regularly, share one biopsychosocial assessment and one set of goals, and include you in the decisions. When you're evaluating a program, it is fair to ask which one it really is.",
      },
    ],
    references: [
      {
        source: "Science / PubMed",
        title: "Engel — The need for a new medical model: a challenge for biomedicine (1977)",
        url: "https://pubmed.ncbi.nlm.nih.gov/847460/",
      },
      {
        source: "Psychol Bull / PubMed",
        title:
          "Gatchel et al. — The biopsychosocial approach to chronic pain: scientific advances and future directions",
        url: "https://pubmed.ncbi.nlm.nih.gov/17592957/",
      },
      {
        source: "BMJ / PMC",
        title:
          "Kamper et al. — Multidisciplinary biopsychosocial rehabilitation for chronic low back pain: Cochrane systematic review and meta-analysis",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4353283/",
      },
      {
        source: "CDC / PMC",
        title:
          "Dowell et al. — CDC Clinical Practice Guideline for Prescribing Opioids for Pain, 2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9639433/",
      },
      {
        source: "IASP",
        title: "IASP Terminology — multidisciplinary and interdisciplinary treatment",
        url: "https://www.iasp-pain.org/resources/terminology/",
      },
      {
        source: "IASP",
        title: "Pain Treatment Services — IASP guidelines",
        url: "https://www.iasp-pain.org/resources/guidelines/pain-treatment-services/",
      },
      {
        source: "Cleveland Clinic",
        title: "Pain Management — who is on a pain management team",
        url: "https://my.clevelandclinic.org/health/treatments/21514-pain-management",
      },
    ],
    related: [
      {
        title: "Your first visit",
        href: "/what-is-pain-medicine/your-first-visit",
        blurb: "What meeting this team for the first time actually looks like.",
      },
      {
        title: "Pain and emotion",
        href: "/understanding-pain/pain-and-emotion",
        blurb: "The shared circuitry that makes the psychologist part of pain care.",
      },
      {
        title: "Find help",
        href: "/find-help",
        blurb: "How to find and verify a credentialed pain specialist.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "your-first-visit",
    title: "Your First Visit",
    description:
      "What actually happens at a first pain-medicine appointment: how long it takes, what to bring, the questionnaires and exams to expect, and the safety practices that mark a careful clinic.",
    status: "sourced",
    lastUpdated: LAST_UPDATED,
    answer:
      "A first pain-medicine evaluation is longer and more thorough than a routine appointment — often one to three hours. Expect a detailed history, a physical and neurological exam, review of your records and imaging, and questions about sleep, mood, and daily function. It ends with a treatment plan built with you and shared with your primary care clinician.",
    faqs: [
      {
        question: "How long will my first pain appointment take?",
        answer:
          "Plan for substantially longer than a routine visit — often one to three hours. Major centers tell patients to expect two to three, especially if testing is involved. The length is the point: a thorough first evaluation is how a pain specialist works out which mechanisms are driving your pain.",
      },
      {
        question: "What should I bring to a pain clinic appointment?",
        answer:
          "A complete medication list with doses (including what you've already tried), records and imaging from other clinicians or contact details so they can be sent, your referring doctor's information, your insurance card, and any pain diary or notes on how pain affects your days. Many clinics also ask you to complete a detailed questionnaire before or at the visit.",
      },
      {
        question: "Why did they check a prescription database and ask about a urine test?",
        answer:
          "Those are safety practices recommended by the CDC's 2022 prescribing guideline — reviewing state prescription-monitoring data, discussing risks, offering naloxone, and sometimes toxicology testing. They are signs of a careful, guideline-following clinic and are applied as routine safety habits, not as accusations.",
      },
    ],
    references: [
      {
        source: "Cleveland Clinic",
        title: "Pain Management — what to expect at your appointment",
        url: "https://my.clevelandclinic.org/departments/anesthesiology/depts/pain-management/patient-education/what-to-expect",
      },
      {
        source: "Cleveland Clinic",
        title: "Pain Management — how pain is evaluated",
        url: "https://my.clevelandclinic.org/health/treatments/21514-pain-management",
      },
      {
        source: "Stanford Medicine",
        title: "Pain Management Center — planning your visit",
        url: "https://med.stanford.edu/pain/patients/planning-your-visit.html",
      },
      {
        source: "NCBI StatPearls",
        title: "Pain Assessment",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK556098/",
      },
      {
        source: "MD Anderson",
        title: "The Brief Pain Inventory — symptom assessment tool",
        url: "https://www.mdanderson.org/research/departments-labs-institutes/departments-divisions/symptom-research/symptom-assessment-tools/brief-pain-inventory.html",
      },
      {
        source: "CDC / PMC",
        title:
          "Dowell et al. — CDC Clinical Practice Guideline for Prescribing Opioids for Pain, 2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9639433/",
      },
    ],
    related: [
      {
        title: "The pain team",
        href: "/what-is-pain-medicine/the-pain-team",
        blurb: "The people you'll meet, and why each one is there.",
      },
      {
        title: "Measuring pain",
        href: "/understanding-pain/measuring-pain",
        blurb: "How to describe your pain so the evaluation really captures it.",
      },
      {
        title: "Find help",
        href: "/find-help",
        blurb: "Questions worth asking — and how to verify credentials first.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "pain-clinics-vs-pain-medicine",
    title: "Pain Clinics vs. Pain Medicine",
    description:
      "'Pain clinic' is a sign anyone can hang; pain medicine is a credentialed specialty. The five signals of the real thing — training, evaluation, team, safety habits, and coordination — and how to check each one.",
    status: "sourced",
    lastUpdated: LAST_UPDATED,
    answer:
      "'Pain clinic' is not a protected term — anyone can use it. Pain medicine is a board-certified specialty with verifiable credentials. The real thing shows five signals: fellowship-trained physicians you can verify through the ABMS, a thorough first evaluation, team-based multimodal care, guideline-following safety habits, and open coordination with your primary care clinician.",
    faqs: [
      {
        question: "Is every 'pain clinic' run by a pain specialist?",
        answer:
          "No. The phrase carries no licensing weight of its own, so it covers everything from academic interdisciplinary centers to storefronts. The fastest way through the ambiguity is to check the physician, not the sign: the ABMS's free lookup verifies pain medicine subspecialty certification in minutes.",
      },
      {
        question: "What credentials should I look for?",
        answer:
          "The ABMS-recognized standard: board certification in pain medicine through one of six ABMS member boards, all built on a 12-month ACGME-accredited fellowship and one shared exam. Other pain credentials exist outside the ABMS system; they are not equivalent to the ACGME/ABMS pathway, though some experienced clinicians hold them alongside their primary certification.",
      },
      {
        question: "What does careful prescribing look like at a good practice?",
        answer:
          "Openness plus safety habits: risks and benefits discussed plainly, the state prescription-monitoring database checked, naloxone offered where appropriate, sometimes toxicology testing — the practices in the CDC's 2022 guideline, applied routinely to everyone. A practice that pairs careful prescribing with non-drug options and coordinates with your primary care clinician is showing you its quality.",
      },
    ],
    references: [
      {
        source: "ABMS",
        title: "Verify Certification — Is My Doctor Certified?",
        url: "https://www.abms.org/verify-certification/",
      },
      {
        source: "ABMS",
        title: "The 24 Member Boards of the American Board of Medical Specialties",
        url: "https://www.abms.org/member-boards/",
      },
      {
        source: "CDC / PMC",
        title:
          "Dowell et al. — CDC Clinical Practice Guideline for Prescribing Opioids for Pain, 2022",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9639433/",
      },
      {
        source: "IASP",
        title: "Pain Treatment Services — IASP guidelines",
        url: "https://www.iasp-pain.org/resources/guidelines/pain-treatment-services/",
      },
      {
        source: "NIH / NLM",
        title: "How to find out if a physician is licensed and board certified",
        url: "https://support.nlm.nih.gov/knowledgebase/article/KA-04429/en-us",
      },
    ],
    related: [
      {
        title: "Find help",
        href: "/find-help",
        blurb: "The full verification walkthrough — and the red flags in detail.",
      },
      {
        title: "How pain physicians train",
        href: "/what-is-pain-medicine/how-pain-physicians-train",
        blurb: "What the credential you're verifying actually represents.",
      },
      {
        title: "Your first visit",
        href: "/what-is-pain-medicine/your-first-visit",
        blurb: "What a thorough evaluation looks like from the inside.",
      },
    ],
  },
];
