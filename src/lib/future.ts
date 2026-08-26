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

  {
    hub: "future-of-pain-medicine",
    slug: "neuromodulation",
    title: "Next-Generation Neuromodulation",
    description:
      "Treating pain with electricity is becoming a precision tool: paresthesia-free high-frequency stimulation, closed-loop devices that read the spinal cord and self-adjust, dorsal-root-ganglion targeting, and non-invasive brain stimulation.",
    status: "sourced",
    lastUpdated: LAST_REVIEWED,
    answer:
      "Neuromodulation treats pain with carefully placed electricity instead of drugs — and it is getting far more precise. Newer systems can stimulate without the old tingling sensation, read the spinal cord's own signals and adjust themselves in real time, target a single cluster of nerves, or work entirely from outside the skull. The shared idea is stimulation matched to the person, not a fixed setting.",
    faqs: [
      {
        question: "What is spinal cord stimulation?",
        answer:
          "An implanted device delivers mild electrical pulses near the spinal cord to interrupt pain signals before they reach the brain. It is used mainly for chronic back and leg pain and some nerve pain when other treatments have not worked well enough.",
      },
      {
        question: "What makes the newer stimulators different?",
        answer:
          "Older stimulators masked pain with a constant tingling (paresthesia) at a fixed setting. Newer approaches can be paresthesia-free (high-frequency 10 kHz stimulation), closed-loop — measuring the spinal cord's response and adjusting more than 100 times a second — or aimed at the dorsal root ganglion for focal, hard-to-reach pain.",
      },
      {
        question: "Can pain be treated without surgery or an implant?",
        answer:
          "Sometimes. Non-invasive brain stimulation such as rTMS (magnetic pulses over the scalp) is being studied for drug-resistant nerve pain and fibromyalgia. The evidence is growing but still mixed, so it is a promising option under investigation rather than a settled standard of care.",
      },
    ],
    references: [
      {
        source: "NeurologyLive",
        title:
          "FDA Approves Nevro Senza (10 kHz SCS) for Painful Diabetic Neuropathy",
        url: "https://www.neurologylive.com/view/fda-approves-senza-system-chronic-pain-diabetic-neuropathy",
      },
      {
        source: "Abbott",
        title:
          "ACCURATE trial — dorsal root ganglion stimulation vs. traditional SCS for CRPS",
        url: "https://abbott.mediaroom.com/2017-01-17-New-Data-Confirms-Abbotts-Dorsal-Root-Ganglion-Stimulation-Offers-Greater-Treatment-Success-over-Traditional-Spinal-Cord-Stimulation",
      },
      {
        source: "Saluda Medical",
        title: "FDA approval of the Evoke closed-loop (ECAP) SCS system",
        url: "https://www.saludamedical.com/press-releases/saluda-medical-receives-fda-approval-for-the-evoke-spinal-cord-stimulation-system-to-treat-chronic-intractable/",
      },
      {
        source: "NCBI / PMC",
        title:
          "rTMS for neuropathic pain — mechanisms and clinical evidence (review)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10167032/",
      },
    ],
    related: [
      {
        title: "The pain treatment pipeline",
        href: "/future-of-pain-medicine/pipeline",
        blurb: "Where these devices sit among everything in development.",
      },
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "The spinal 'gate' these devices act on.",
      },
    ],
  },

  {
    hub: "future-of-pain-medicine",
    slug: "biologics-and-gene-therapy",
    title: "Biologics & Gene-Targeted Therapy",
    description:
      "The most precise pain treatments yet: antibodies that block a single pain molecule — as CGRP drugs did for migraine — and gene therapies that turn down the body's pain genes at their source.",
    status: "sourced",
    lastUpdated: LAST_REVIEWED,
    answer:
      "Instead of broadly dialing down the nervous system, a new generation of treatments targets single, specific molecules in the pain pathway. Antibodies against the CGRP protein transformed migraine prevention — proof that blocking one pain signal can work. Now that precision is reaching further: drugs aimed at nerve-growth factors, and gene therapies designed to quiet the master pain gene, NaV1.7, at its source.",
    faqs: [
      {
        question: "What is a biologic, and how is it different from a normal drug?",
        answer:
          "A biologic is a large, precisely-engineered molecule — often an antibody — built to block one specific target, whereas familiar small-molecule drugs act more broadly. The CGRP antibodies for migraine are the pain field's landmark example of how targeting a single molecule can prevent pain.",
      },
      {
        question: "Did the CGRP migraine drugs really change things?",
        answer:
          "Yes. Erenumab, approved in 2018, was the first antibody designed to prevent migraine by blocking the CGRP pathway — and the first approved antibody against this kind of receptor. It proved a precisely-targeted biologic can prevent pain, and a whole class of migraine drugs followed.",
      },
      {
        question: "Is gene therapy for pain real?",
        answer:
          "It is at the earliest stage. Experimental therapies that turn down the SCN9A / NaV1.7 pain gene have produced durable relief in animals and are only now entering first-in-human trials. The idea is powerful — a one-time treatment at the genetic source — but it is unproven in people and years from routine use.",
      },
    ],
    references: [
      {
        source: "NCBI / PMC",
        title:
          "Discovery of Aimovig (erenumab), the first FDA-approved anti-CGRP antibody",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7088995/",
      },
      {
        source: "FierceBiotech",
        title: "Lilly & Pfizer halt tanezumab (anti-NGF) after FDA rejection",
        url: "https://www.fiercebiotech.com/biotech/lilly-pfizer-stop-development-osteoarthritis-drug-after-fda-rejection-extending-bleak-run",
      },
      {
        source: "The Lancet",
        title:
          "LEVI-04 (NT-3 inhibitor) Phase 2 trial in knee osteoarthritis",
        url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00131-5/fulltext",
      },
      {
        source: "ClinicalTrials.gov",
        title: "ST-503 — NaV1.7 gene-therapy Phase 1 (NCT06980948)",
        url: "https://clinicaltrials.gov/study/NCT06980948",
      },
    ],
    related: [
      {
        title: "The pain treatment pipeline",
        href: "/future-of-pain-medicine/pipeline",
        blurb: "Track these biologics and gene therapies by phase.",
      },
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb: "Why matching the target to the mechanism matters.",
      },
    ],
  },

  {
    hub: "future-of-pain-medicine",
    slug: "precision-pain-medicine",
    title: "Precision Pain Medicine",
    description:
      "Matching the treatment to the patient: pharmacogenomics (why codeine is dangerous for some people and useless for others), mechanism-based treatment, biomarkers, and the end of one-size-fits-all pain care.",
    status: "sourced",
    lastUpdated: LAST_REVIEWED,
    answer:
      "Two people with the same pain can need completely different treatments — and get very different results from the same drug. Precision pain medicine uses your biology to guide care: genetic testing that flags who will be harmed or unhelped by a drug like codeine, matching medicines to your specific pain mechanism, and emerging biomarkers — replacing trial-and-error with something closer to a fit.",
    faqs: [
      {
        question: "How can the same painkiller help one person and harm another?",
        answer:
          "Genetics. The CYP2D6 gene controls how fast your body turns codeine into morphine. 'Ultrarapid metabolizers' can produce a dangerous amount very quickly, while 'poor metabolizers' get little pain relief at all. The FDA carries a boxed warning about this, and prescribing guidelines advise avoiding codeine and tramadol in those groups.",
      },
      {
        question: "Can I get my 'pain genetics' tested?",
        answer:
          "Pharmacogenomic testing — for genes like CYP2D6 — already exists, and expert guidelines (from the group called CPIC) translate the results into concrete prescribing advice. It is not yet routine for everyone, but it is a real, actionable piece of precision pain care available today.",
      },
      {
        question: "What does 'mechanism-based' treatment mean?",
        answer:
          "Choosing the treatment to fit the kind of pain you have — nociceptive, neuropathic, or nociplastic — rather than guessing and adjusting. Working out the underlying mechanism points toward what is most likely to help and away from what usually will not.",
      },
    ],
    references: [
      {
        source: "NCBI Bookshelf",
        title: "Codeine Therapy and the CYP2D6 Genotype (Medical Genetics Summaries)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK100662/",
      },
      {
        source: "CPIC",
        title:
          "CPIC Guideline for CYP2D6, OPRM1, COMT and opioid therapy (codeine, tramadol)",
        url: "https://files.cpicpgx.org/data/guideline/publication/opioids/2020/33387367.pdf",
      },
      {
        source: "NCBI Bookshelf",
        title:
          "Tramadol Therapy and the CYP2D6 Genotype (Medical Genetics Summaries)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK315950/",
      },
    ],
    related: [
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb: "The mechanisms precision medicine matches treatment to.",
      },
      {
        title: "The pain treatment pipeline",
        href: "/future-of-pain-medicine/pipeline",
        blurb: "Many new drugs are built for specific patient groups.",
      },
    ],
  },

  {
    hub: "future-of-pain-medicine",
    slug: "mind-and-brain",
    title: "Mind, Brain & New Frontiers",
    description:
      "Because the brain constructs pain, treatments that retrain the brain are real medicine: pain reprocessing therapy, an FDA-authorized virtual-reality program, and the early, honest science of psychedelics for chronic pain.",
    status: "sourced",
    lastUpdated: LAST_REVIEWED,
    answer:
      "If the brain builds the experience of pain, then the brain can be part of the treatment — and that is no longer just a metaphor. Pain reprocessing therapy helped most patients in a landmark trial become pain-free by unlearning a false alarm. An FDA-authorized virtual-reality program treats chronic back pain at home. And early research is testing whether psychedelics can help reset a sensitized pain system.",
    faqs: [
      {
        question: "Isn't a 'mind-based' treatment just saying my pain is imaginary?",
        answer:
          "No. Because all pain is produced by the nervous system, brain-focused treatments act on the real machinery that generates pain. In a landmark trial, pain reprocessing therapy produced large, lasting relief in people with genuine chronic back pain — the opposite of dismissing it.",
      },
      {
        question: "Is virtual reality for pain a real medical treatment?",
        answer:
          "Yes. In 2021 the FDA authorized a prescription virtual-reality program (RelieVRx) for chronic low back pain — an eight-week, at-home course of pain education, breathing, and mindfulness delivered through a VR headset.",
      },
      {
        question: "Are psychedelics used to treat pain?",
        answer:
          "Not yet in everyday practice. Small early trials are testing psilocybin for conditions like fibromyalgia and phantom-limb pain. The results are preliminary and it remains investigational, but the idea — that a burst of brain plasticity could help reset chronic pain — is drawing serious research.",
      },
    ],
    references: [
      {
        source: "University of Colorado Boulder",
        title:
          "Pain reprocessing therapy trial (Ashar et al., JAMA Psychiatry, 2021)",
        url: "https://www.colorado.edu/today/2021/09/29/how-therapy-not-pills-can-nix-chronic-pain-and-change-brain",
      },
      {
        source: "AppliedVR / FDA",
        title:
          "FDA authorizes RelieVRx — first VR therapeutic for chronic low back pain",
        url: "https://www.prnewswire.com/news-releases/fda-grants-appliedvr-approval-for-first-virtual-reality-therapeutic-to-treat-chronic-low-back-pain-301426221.html",
      },
      {
        source: "Frontiers in Pain Research",
        title:
          "Psilocybin-assisted therapy in fibromyalgia — open-label pilot (2025)",
        url: "https://www.frontiersin.org/journals/pain-research/articles/10.3389/fpain.2025.1527783/full",
      },
    ],
    related: [
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "Why the brain — not the injury alone — builds pain.",
      },
      {
        title: "Acute vs. chronic pain",
        href: "/understanding-pain/acute-vs-chronic-pain",
        blurb: "The sensitized alarm these treatments aim to calm.",
      },
    ],
  },
];
