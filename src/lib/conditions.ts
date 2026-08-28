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

  {
    hub: HUB,
    slug: "sciatica",
    title: "Sciatica",
    description:
      "What sciatica is and what causes it: the pinched nerve root behind most cases, why inflammation matters as much as pressure, the surprising science of herniated discs that vanish on their own, and how sciatica is treated today — including what surgery does and doesn't change.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Sciatica is nerve pain that runs from the lower back or buttock down the leg, along the path of the sciatic nerve. In roughly nine cases in ten the cause is a herniated disc pressing on — and inflaming — a nerve root in the lower spine. It can be severe, but its natural story is hopeful: most cases improve within weeks to a few months, and herniated discs often shrink away on their own.",
    faqs: [
      {
        question: "What causes sciatica?",
        answer:
          "About 90% of sciatica comes from a herniated disc compressing and chemically irritating one of the nerve roots in the lower spine that merge to form the sciatic nerve. Less common causes include spinal stenosis (age-related narrowing of the nerve passages), spondylolisthesis (a slipped vertebra), and — rarely — irritation of the nerve further down its course. The pain is felt in the leg, but the problem almost always sits at the spine.",
      },
      {
        question: "How long does sciatica take to go away?",
        answer:
          "Most episodes improve substantially within four to six weeks, and the majority resolve within about three months without surgery. That said, recovery is not always linear, a minority of cases persist longer, and worsening weakness or numbness at any point deserves prompt medical attention rather than more waiting.",
      },
      {
        question: "Can a herniated disc heal on its own?",
        answer:
          "Yes — often. The immune system treats displaced disc material as debris to clear, and follow-up imaging shows herniations shrinking or vanishing over months. Counterintuitively, the dramatic-looking ones regress most: in a systematic review, free disc fragments resorbed in about 96% of cases and extrusions in about 70%, while mild bulges — the least alarming finding — changed least. A scary MRI report is not a life sentence.",
      },
      {
        question: "Do I need surgery for sciatica?",
        answer:
          "Usually not. In a landmark randomized trial, early surgery relieved leg pain faster than continued conservative care, but by one year both groups had recovered at essentially the same high rate. Surgery earns its place for specific situations: progressive or severe leg weakness, signs of cauda equina syndrome (an emergency), or disabling pain that has not responded to months of well-run non-surgical care. Whether faster relief is worth an operation's risks is a personal decision to make with your clinicians.",
      },
      {
        question: "How can I tell sciatica from ordinary back pain?",
        answer:
          "The signature of sciatica is leg-dominant pain: it radiates below the knee, often into the foot, and feels electric, burning, or shooting rather than achy. Numbness or tingling may trace the same line, and coughing or sneezing can fire it. Ordinary low back pain stays centered on the back. Clinicians confirm the picture with the story, a nerve exam, and tests like the straight-leg raise; imaging is reserved for red flags or when results would change the plan.",
      },
    ],
    references: [
      {
        source: "NCBI StatPearls",
        title: "Sciatica",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK507908/",
      },
      {
        source: "NEJM / PubMed",
        title: "Ropper & Zafonte — Sciatica (review)",
        url: "https://pubmed.ncbi.nlm.nih.gov/25806916/",
      },
      {
        source: "NEJM / PubMed",
        title:
          "Peul et al. — Surgery versus prolonged conservative treatment for sciatica",
        url: "https://pubmed.ncbi.nlm.nih.gov/17538084/",
      },
      {
        source: "Clinical Rehabilitation / PubMed",
        title:
          "Chiu et al. — The probability of spontaneous regression of lumbar herniated disc: a systematic review",
        url: "https://pubmed.ncbi.nlm.nih.gov/25009200/",
      },
      {
        source: "NEJM / PubMed",
        title: "Mathieson et al. — Trial of Pregabalin for Acute and Chronic Sciatica",
        url: "https://pubmed.ncbi.nlm.nih.gov/28328324/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Sciatica — patient information",
        url: "https://medlineplus.gov/sciatica.html",
      },
    ],
    related: [
      {
        title: "Low back pain",
        href: "/conditions/low-back-pain",
        blurb:
          "The parent territory — and where sciatica fits among the causes of a hurting back.",
      },
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb: "Sciatica is the everyday face of neuropathic pain.",
      },
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "Why nerve pain gets different drugs — and what the sciatica trials honestly showed.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "neuropathic-pain",
    title: "Neuropathic Pain",
    description:
      "What neuropathic pain is and what causes it: how damaged nerves become the source of pain rather than its messenger, why feet burn first, the numb-yet-painful paradox, and the honest map of treatments for nerve pain — from the first-line medications to spinal cord stimulation.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Neuropathic pain is pain caused by damage or disease in the nervous system itself — the wiring that normally reports pain becomes the thing generating it. It affects roughly 7–10% of adults, most often from diabetes, shingles, chemotherapy, or nerve injury. It feels different (burning, electric, shooting), behaves differently (numb yet painful), and responds to different treatments than ordinary pain.",
    faqs: [
      {
        question: "What does neuropathic pain feel like?",
        answer:
          "People reach for electrical and thermal words: burning, shooting, stabbing, electric shocks, pins and needles. Two signatures set it apart from ordinary pain. Allodynia — pain from things that should not hurt at all, like a bedsheet brushing the skin. And the numb-yet-painful paradox: the same territory can be both less sensitive to touch and the site of intense spontaneous pain, because the damaged wiring both loses signal and generates false ones.",
      },
      {
        question: "What causes neuropathic pain?",
        answer:
          "Anything that injures sensory nerves or their pathways. The most common causes are diabetes (the leading cause of peripheral neuropathy), shingles (postherpetic neuralgia), chemotherapy, nerve compression or injury — including sciatica — and alcohol-related and inherited neuropathies. Central causes include stroke, multiple sclerosis, and spinal cord injury. Sometimes no cause is found even after a careful workup; that is common and does not make the pain less real.",
      },
      {
        question: "Why do my feet burn at night?",
        answer:
          "Burning feet — often worst in bed — is the classic voice of peripheral neuropathy, and there is a reason it starts there: the nerves serving the feet are the longest in the body, and nerves that are struggling metabolically tend to fail from their farthest tips backward. That is why symptoms typically begin in the toes and spread upward in a 'stocking' pattern, with hands joining later in a 'glove' pattern. New or worsening burning feet deserve a clinical evaluation — diabetes screening included.",
      },
      {
        question: "Why don't normal painkillers work on nerve pain?",
        answer:
          "Because they aim at the wrong mechanism. Ordinary painkillers work mostly by calming inflammation around injured tissue. In neuropathic pain the tissue is often fine — the nerve itself is misfiring, driven by overactive sodium channels and sensitized spinal circuits. The medications with the best evidence target that machinery instead: gabapentinoids calm the overexcited signaling, and certain antidepressants strengthen the spinal cord's own pain-dampening pathways. Different fault, different tools.",
      },
      {
        question: "Can neuropathic pain be treated?",
        answer:
          "Yes, with honest expectations. Treating the underlying cause matters most where possible — blood sugar control, relieving a compression, changing an offending drug. For the pain itself, first-line medications meaningfully help a substantial minority of patients, and clinicians often combine approaches or move to options like high-concentration capsaicin patches, lidocaine patches, or spinal cord stimulation, which showed strong results for painful diabetic neuropathy in a randomized trial. A realistic win is major relief, not always zero pain — and function often improves ahead of the numbers.",
      },
    ],
    references: [
      {
        source: "NIH / NINDS",
        title: "Peripheral Neuropathy — patient information",
        url: "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy",
      },
      {
        source: "Nat Rev Dis Primers / PMC",
        title: "Colloca et al. — Neuropathic pain (primer)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5371025/",
      },
      {
        source: "PAIN / PubMed",
        title:
          "van Hecke et al. — Neuropathic pain in the general population: a systematic review of epidemiological studies",
        url: "https://pubmed.ncbi.nlm.nih.gov/24291734/",
      },
      {
        source: "Lancet Neurology / PMC",
        title:
          "Finnerup et al. — Pharmacotherapy for neuropathic pain in adults: systematic review, meta-analysis and updated NeuPSIG recommendations",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4493167/",
      },
      {
        source: "JAMA Neurology / PubMed",
        title:
          "Petersen et al. — Effect of high-frequency (10-kHz) spinal cord stimulation in patients with painful diabetic neuropathy: a randomized clinical trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/33818600/",
      },
      {
        source: "NCBI StatPearls",
        title: "Postherpetic Neuralgia",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK493198/",
      },
      {
        source: "IASP",
        title: "IASP Terminology — neuropathic pain definition",
        url: "https://www.iasp-pain.org/resources/terminology/",
      },
    ],
    related: [
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "The nerve-pain medications explained — and why their names confuse everyone.",
      },
      {
        title: "Sciatica",
        href: "/conditions/sciatica",
        blurb: "The most common face of nerve-root neuropathic pain.",
      },
      {
        title: "Next-generation neuromodulation",
        href: "/future-of-pain-medicine/neuromodulation",
        blurb:
          "Where spinal cord stimulation is headed for pain that medications miss.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "migraine",
    title: "Migraine",
    description:
      "What migraine actually is — an inherited neurological disease, not a bad headache: the four phases of an attack, the trigeminal-CGRP engine behind the pain, the medication-overuse trap, and the new generation of treatments designed for migraine's own biology.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Migraine is an inherited neurological disease, not a bad headache — the headache is one phase of a whole-brain attack that can begin a day before the pain and end a day after it. It affects roughly one person in seven, ranks second among the world's causes of disability — first among young women — and is now treatable with drugs designed for its specific biology.",
    faqs: [
      {
        question: "Is migraine just a bad headache?",
        answer:
          "No. Migraine is a neurological disease with a strong genetic basis, and the headache is only one phase of an attack that also brings sensory amplification (light, sound, and smell become painful), nausea, thinking changes, and often a day of 'hangover' afterward. The Global Burden of Disease studies rank migraine second among all causes of disability worldwide — and first among young women. Taking it seriously is not dramatizing; it is reading the data.",
      },
      {
        question: "What causes migraine?",
        answer:
          "An inherited tendency toward a hypersensitive brain, plus an attack mechanism science can now trace: the trigeminal nerve — the head's main sensory nerve — activates and releases CGRP, a peptide that inflames the brain's pain-sensitive coverings and drives the throbbing pain. Attacks often begin in deep brain regions like the hypothalamus hours before any pain, which is why warning symptoms such as yawning and cravings arrive first. Triggers matter, but they act on this underlying biology — they are sparks, not the engine.",
      },
      {
        question: "What is a migraine aura — and how do I know it isn't a stroke?",
        answer:
          "Aura is a slow electrical wave moving across the brain's surface, experienced by about one in three people with migraine — most often as shimmering zigzags or blind spots that gradually spread over twenty to sixty minutes, then fade. The gradual march is the signature: stroke symptoms typically arrive suddenly and all at once. Any first-ever aura, aura that includes weakness or trouble speaking, or a sudden thunderclap headache deserves emergency evaluation — this is one place not to self-diagnose.",
      },
      {
        question: "Can taking painkillers make migraine worse?",
        answer:
          "Yes — this is the medication-overuse trap, and it is one of the most important facts in headache medicine. Using acute pain relievers on too many days per month, over months, can convert episodic migraine into a near-daily headache that the same medications no longer help. It happens with ordinary painkillers as well as migraine-specific ones. If you are reaching for relief more days than not, that is not a willpower problem — it is a recognized, treatable condition to bring to a clinician.",
      },
      {
        question: "What are the new migraine treatments?",
        answer:
          "Migraine is pain medicine's biggest recent success story. The CGRP era began in 2018: monoclonal antibodies given monthly or quarterly to prevent attacks, followed by gepants — CGRP-blocking tablets, some usable both to treat an attack and to prevent the next ones — and lasmiditan, an acute option without triptans' vascular constraints. None is universal, but for many people these drugs — the first ever designed from migraine's own mechanism to prevent it — have changed what living with migraine means. Whether one fits you is a conversation for your clinician.",
      },
    ],
    references: [
      {
        source: "ICHD-3 (IHS)",
        title: "The International Classification of Headache Disorders, 3rd edition — migraine criteria",
        url: "https://ichd-3.org/",
      },
      {
        source: "J Headache Pain / PubMed",
        title:
          "Steiner et al. — Migraine remains second among the world's causes of disability, and first among young women: findings from GBD2019",
        url: "https://pubmed.ncbi.nlm.nih.gov/33267788/",
      },
      {
        source: "NEJM / PubMed",
        title: "Ashina — Migraine (review)",
        url: "https://pubmed.ncbi.nlm.nih.gov/33211930/",
      },
      {
        source: "Lancet Neurology / PubMed",
        title:
          "Charles — The pathophysiology of migraine: implications for clinical management",
        url: "https://pubmed.ncbi.nlm.nih.gov/29229375/",
      },
      {
        source: "NCBI StatPearls",
        title: "Medication-Overuse Headache",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK538150/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Migraine — patient information",
        url: "https://medlineplus.gov/migraine.html",
      },
    ],
    related: [
      {
        title: "Biologics & gene-targeted therapy",
        href: "/future-of-pain-medicine/biologics-and-gene-therapy",
        blurb:
          "The CGRP antibody story in full — migraine as proof that designed pain drugs work.",
      },
      {
        title: "The pain treatment pipeline",
        href: "/future-of-pain-medicine/pipeline",
        blurb: "What's in trials next, PACAP antibodies included.",
      },
      {
        title: "Pain and sleep",
        href: "/understanding-pain/pain-and-sleep",
        blurb:
          "Why sleep regularity is a migraine treatment, not a platitude.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "arthritis-pain",
    title: "Arthritis Pain",
    description:
      "What arthritis actually is — one word covering two very different diseases: osteoarthritis (a whole-joint disease, not 'wear and tear') and inflammatory arthritis (rheumatoid, psoriatic, gout). How to tell the patterns apart, why the X-ray rarely matches the pain, and how each is treated today.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Arthritis is an umbrella word for over a hundred joint conditions, but two families cover most of it. Osteoarthritis — the most common by far — is a whole-joint disease of cartilage, bone, and lining, not simple 'wear and tear.' Inflammatory arthritis — rheumatoid, psoriatic, gout — is the immune system attacking the joint. Telling them apart matters, because one is managed and the other is a race.",
    faqs: [
      {
        question: "What is the difference between osteoarthritis and rheumatoid arthritis?",
        answer:
          "Different diseases sharing a word. Osteoarthritis is a gradual disease of the joint's own tissues — cartilage thins, bone remodels, the lining grumbles — typically in knees, hips, hands, and spine, hurting more with use. Rheumatoid arthritis is autoimmune: the immune system attacks the joint lining itself, classically in the small joints of both hands and feet symmetrically, with long morning stiffness, warm swelling, and whole-body fatigue. The distinction drives everything — including how urgently treatment should start.",
      },
      {
        question: "Is osteoarthritis just wear and tear?",
        answer:
          "No — and retiring that phrase changes how people treat their joints. Osteoarthritis is an active disease process involving the whole joint: cartilage biology, bone remodeling, and low-grade inflammation of the lining. Joints are living tissue, not brake pads. That is why loading them sensibly through exercise strengthens rather than erodes them, and why guidelines put movement — not rest — at the center of treatment.",
      },
      {
        question: "Why doesn't my X-ray match how much I hurt?",
        answer:
          "Because imaging shows structure and pain is made by the nervous system. The mismatch is well documented in both directions: many people with significant joint changes on X-ray have little pain, and many with real, daily arthritis pain have modest films. Severity on a scan is one input, not a verdict — how your joint feels and functions matters more to treatment decisions than how it photographs.",
      },
      {
        question: "Does exercise make arthritis worse?",
        answer:
          "The evidence says the opposite — exercise is the most strongly recommended treatment for osteoarthritis in major guidelines. Strengthening the muscles around a joint cushions its load, and moving cartilage nourishes it; motion is closer to lotion than to wear. Soreness after starting is common and usually settles as the joint adapts. The practical approach is gradual and guided — a physical therapist can tailor loading to your joint, which is exactly what guidelines suggest.",
      },
      {
        question: "When should I see a rheumatologist quickly?",
        answer:
          "When the inflammatory pattern shows itself: joints that are swollen, warm, and stiff for an hour or more in the morning — especially the small joints of both hands or feet — plus fatigue or feeling generally unwell. Modern rheumatology treats early inflammatory arthritis as a window of opportunity: disease-modifying treatment started promptly can prevent the joint damage that once defined rheumatoid arthritis. Months of watchful waiting is the one move the evidence argues against.",
      },
    ],
    references: [
      {
        source: "Arthritis Care Res / PubMed",
        title:
          "Kolasinski et al. — 2019 American College of Rheumatology/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee",
        url: "https://pubmed.ncbi.nlm.nih.gov/31908163/",
      },
      {
        source: "The Lancet / PubMed",
        title: "Smolen et al. — Rheumatoid arthritis (seminar)",
        url: "https://pubmed.ncbi.nlm.nih.gov/27156434/",
      },
      {
        source: "BMC Musculoskelet Disord / PubMed",
        title:
          "Bedson & Croft — The discordance between clinical and radiographic knee osteoarthritis: a systematic search and summary of the literature",
        url: "https://pubmed.ncbi.nlm.nih.gov/18764949/",
      },
      {
        source: "NIH / NIAMS",
        title: "Osteoarthritis — patient information",
        url: "https://www.niams.nih.gov/health-topics/osteoarthritis",
      },
      {
        source: "NCBI StatPearls",
        title: "Gout",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK546606/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Arthritis — patient information",
        url: "https://medlineplus.gov/arthritis.html",
      },
    ],
    related: [
      {
        title: "Low back pain",
        href: "/conditions/low-back-pain",
        blurb:
          "The same imaging honesty applies to the spine's facet-joint arthritis.",
      },
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "Where NSAIDs and topicals genuinely earn their keep — inflamed, tissue-driven pain.",
      },
      {
        title: "The pain treatment pipeline",
        href: "/future-of-pain-medicine/pipeline",
        blurb:
          "The hunt for osteoarthritis drugs that modify the disease, not just the pain.",
      },
    ],
  },
];
