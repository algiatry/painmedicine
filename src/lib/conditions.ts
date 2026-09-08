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

  {
    hub: HUB,
    slug: "fibromyalgia",
    title: "Fibromyalgia",
    description:
      "What fibromyalgia actually is — the signature disease of a sensitized pain system: the measurable evidence that it is real, how it is diagnosed today, why exercise and sleep outperform most pills, and honest expectations for the three approved medications.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Fibromyalgia is chronic widespread pain — both sides of the body, above and below the waist — traveling with fatigue, unrefreshing sleep, and thinking difficulties. It affects roughly 2–4% of people, and modern research locates the problem in a sensitized pain system: the nervous system's volume control turned up. That is measurable biology, not imagination — and it points to treatments that retrain the system rather than mask it.",
    faqs: [
      {
        question: "Is fibromyalgia a real disease or is it in my head?",
        answer:
          "It is real, and the evidence is measurable. Brain imaging shows people with fibromyalgia producing the same pain-processing activation as controls at roughly half the pressure. Spinal fluid carries elevated levels of pain-transmitting chemicals. And the body's own pain-dampening reflexes underperform on testing. Fibromyalgia is the signature example of nociplastic pain — pain from a sensitized pain system — recognized by the international pain-science community. Being brain-involved does not make it imaginary; all pain is made by the nervous system.",
      },
      {
        question: "What causes fibromyalgia?",
        answer:
          "No single cause is known. The picture the evidence supports: an inherited tendency toward a sensitive pain system, often switched on or worsened by stressors — an illness, an injury, trauma, or a long stretch of poor sleep and stress. Once sensitized, the system amplifies signals that would not normally register as pain. Disrupted deep sleep appears to be both a symptom and a driver, which is one reason sleep is treated as a core target rather than a side issue.",
      },
      {
        question: "How is fibromyalgia diagnosed?",
        answer:
          "By modern criteria, not by pressing tender points — that method was retired. Clinicians assess how widespread the pain is and how severe the accompanying symptoms are (fatigue, unrefreshing sleep, cognitive difficulty) over at least three months, and run basic blood work to check for mimics like thyroid disease or inflammatory arthritis. There is no blood test for fibromyalgia itself, but it is a recognized diagnosis made on positive grounds — not a label of last resort, and a diagnosis you are allowed to have alongside other conditions.",
      },
      {
        question: "What is fibro fog?",
        answer:
          "The cognitive side of fibromyalgia: trouble concentrating, finding words, and holding a thread — often as disabling as the pain. It appears to arise from the same sources as the rest of the condition: a nervous system spending resources on amplified pain traffic, plus unrefreshing sleep compounding everything. It is not dementia and does not progress like one. The treatments that calm the overall condition — sleep, graded activity, pacing — are the ones that thin the fog.",
      },
      {
        question: "What actually helps fibromyalgia?",
        answer:
          "The strongest evidence belongs to things that retrain the system: graded exercise — with tai chi performing as well as or better than aerobic exercise in a randomized trial — good sleep care, education about how the condition works, and cognitive behavioral approaches. Three medications are approved for fibromyalgia; honestly framed, each meaningfully helps a minority of the people who try it. Opioids are a specific poor fit and can worsen the underlying sensitivity. The realistic goal is a system turned down and a life built back up — most people can improve.",
      },
    ],
    references: [
      {
        source: "JAMA / PubMed",
        title: "Clauw — Fibromyalgia: a clinical review",
        url: "https://pubmed.ncbi.nlm.nih.gov/24737367/",
      },
      {
        source: "Semin Arthritis Rheum / PubMed",
        title:
          "Wolfe et al. — 2016 revisions to the 2010/2011 fibromyalgia diagnostic criteria",
        url: "https://pubmed.ncbi.nlm.nih.gov/27916278/",
      },
      {
        source: "Arthritis Rheum / PubMed",
        title:
          "Gracely et al. — Functional magnetic resonance imaging evidence of augmented pain processing in fibromyalgia",
        url: "https://pubmed.ncbi.nlm.nih.gov/12115241/",
      },
      {
        source: "BMJ / PubMed",
        title:
          "Wang et al. — Effect of tai chi versus aerobic exercise for fibromyalgia: comparative effectiveness randomized controlled trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/29563100/",
      },
      {
        source: "NIH / NIAMS",
        title: "Fibromyalgia — patient information",
        url: "https://www.niams.nih.gov/health-topics/fibromyalgia",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Fibromyalgia — patient information",
        url: "https://medlineplus.gov/fibromyalgia.html",
      },
    ],
    related: [
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb:
          "Fibromyalgia is the signature nociplastic condition — the third type, explained.",
      },
      {
        title: "Pain and sleep",
        href: "/understanding-pain/pain-and-sleep",
        blurb:
          "The experiment that produced fibromyalgia-like tenderness by disrupting deep sleep.",
      },
      {
        title: "Mind, brain, and new frontiers",
        href: "/future-of-pain-medicine/mind-and-brain",
        blurb:
          "The retraining therapies being built for exactly this kind of pain.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "cancer-pain",
    title: "Cancer Pain",
    description:
      "Cancer pain is one of the most treatable parts of cancer — where it comes from (the disease, the treatment, and the years after), why opioids are a different conversation here, what palliative care actually is, and the full toolbox beyond the pill bottle.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Pain affects roughly half of people during cancer treatment and about two-thirds of those with advanced disease — and it is among the most treatable parts of cancer. With today's tools, most cancer pain can be brought under control. Treating it is part of cancer care, not an afterthought, and reporting it early is the step that makes everything else work.",
    faqs: [
      {
        question: "Is pain an inevitable part of cancer?",
        answer:
          "No. Pain is common in cancer — studies find it in about 55% of people during treatment and 66% with advanced disease — but common is not the same as untreatable. With the modern toolbox, most cancer pain can be controlled well. The biggest obstacle is silence: pain that goes unreported goes untreated, and studies have long found a substantial minority of patients undertreated. Reporting pain early and specifically is not complaining — it is giving your team the information treatment runs on.",
      },
      {
        question: "Will I get addicted to pain medicine during cancer treatment?",
        answer:
          "For people taking opioids as prescribed for cancer pain, with a team monitoring, addiction is uncommon — and fear of it is one of the best-documented reasons cancer pain goes undertreated. Physical dependence (the body adapting, needing a taper to stop) and tolerance (needing adjustment over time) are expected biology, not addiction. Your team plans for both. If use ever feels like it is escaping the plan — yours or a loved one's — say so early; confidential help exists, including the SAMHSA helpline at 1-800-662-4357.",
      },
      {
        question: "What is “breakthrough” pain?",
        answer:
          "Pain that spikes through otherwise controlled background pain — typically fast-rising, severe, and short-lived, sometimes triggered by movement or an activity, sometimes arriving unprovoked. It is common in cancer and it is planned for: alongside regular, scheduled pain control, your team can provide a separate fast-acting rescue plan. Tracking when breakthrough episodes happen, what triggers them, and how long they last helps your team tune both halves of the plan.",
      },
      {
        question: "Is palliative care the same as giving up?",
        answer:
          "No — this is one of medicine's most costly misunderstandings. Palliative care is specialist care for symptoms and quality of life, delivered alongside cancer treatment, at any stage. In a landmark randomized trial in metastatic lung cancer, people who received palliative care from diagnosis had better quality of life, less depression — and lived longer than those receiving standard care alone. Asking for palliative care early is not surrender; it is choosing the version of treatment with more support in it.",
      },
      {
        question: "Why do I still have pain years after beating cancer?",
        answer:
          "Because treatment itself can leave durable marks: chemotherapy-induced nerve damage in the hands and feet, pain around surgical sites, joint pain from hormone-blocking therapy, and radiation's late effects. Millions of survivors live with pain after successful treatment — enough that oncology has its own guideline for it. Survivor pain is real, common, and treatable, usually with the same approaches used for other chronic pain. It deserves care, not gratitude-guilt about mentioning it.",
      },
    ],
    references: [
      {
        source: "J Pain Symptom Manage / PubMed",
        title:
          "van den Beuken-van Everdingen et al. — Update on prevalence of pain in patients with cancer: systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/27112310/",
      },
      {
        source: "NEJM / PubMed",
        title:
          "Temel et al. — Early palliative care for patients with metastatic non-small-cell lung cancer",
        url: "https://pubmed.ncbi.nlm.nih.gov/20818875/",
      },
      {
        source: "J Clin Oncol / PubMed",
        title: "Kwon — Overcoming barriers in cancer pain management",
        url: "https://pubmed.ncbi.nlm.nih.gov/24799490/",
      },
      {
        source: "J Clin Oncol / PubMed",
        title:
          "Paice et al. — Management of chronic pain in survivors of adult cancers: ASCO clinical practice guideline",
        url: "https://pubmed.ncbi.nlm.nih.gov/27458286/",
      },
      {
        source: "WHO",
        title:
          "WHO guidelines for the pharmacological and radiotherapeutic management of cancer pain in adults and adolescents (2018)",
        url: "https://www.who.int/publications/i/item/9789241550390",
      },
      {
        source: "NIH / NCI",
        title: "Cancer pain — patient information",
        url: "https://www.cancer.gov/about-cancer/treatment/side-effects/pain",
      },
    ],
    related: [
      {
        title: "Neuropathic pain",
        href: "/conditions/neuropathic-pain",
        blurb:
          "Chemotherapy-induced neuropathy is nerve pain — and it is treated as such.",
      },
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "The full drug-class map — including where opioids genuinely belong.",
      },
      {
        title: "Measuring pain",
        href: "/understanding-pain/measuring-pain",
        blurb:
          "How to report pain so your team can actually act on it.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "persistent-postsurgical-pain",
    title: "Persistent Postsurgical Pain",
    description:
      "Why pain can continue after an operation has healed: the three-month definition, nerve injury and sensitization, who is at higher risk, what must be ruled out, and how transitional pain care can prevent a difficult recovery from becoming a permanent handoff.",
    status: "sourced",
    lastUpdated: "2026-09-05",
    answer:
      "Persistent postsurgical pain is new pain, or pain made worse by an operation, that continues for at least three months and is localized to the surgical area or a related nerve territory. It is not automatically evidence that the operation failed. Infection, recurrence, mechanical complications, and other causes must be excluded; then treatment is matched to tissue, nerve, and sensitization mechanisms.",
    faqs: [
      {
        question: "How long is pain normal after surgery?",
        answer:
          "Recovery time depends on the operation, but pain should generally trend toward less intensity and less interference as healing progresses. Persistent postsurgical pain is formally considered when new or increased pain lasts at least three months and other causes have been excluded. Severe pain, worsening pain, or pain accompanied by fever, drainage, swelling, chest symptoms, or new weakness should be assessed sooner rather than waiting for that threshold.",
      },
      {
        question: "Does pain after surgery mean something went wrong?",
        answer:
          "Not necessarily. An operation can be technically successful while injured small nerves, scar sensitivity, altered movement, or nervous-system amplification continue to generate pain. But persistent or worsening pain still deserves evaluation for infection, poor healing, recurrence, implant or structural problems, and a new condition. Chronic pain should be diagnosed after those alternatives are considered, not instead of considering them.",
      },
      {
        question: "What does nerve pain after surgery feel like?",
        answer:
          "Neuropathic postsurgical pain may feel burning, electric, shooting, stabbing, numb yet painful, or intensely sensitive to light touch around a scar or along a nerve territory. A patch of numbness alone can be expected after some incisions; expanding numbness, new weakness, or severe electric pain deserves clinical assessment.",
      },
      {
        question: "Who is more likely to develop persistent postsurgical pain?",
        answer:
          "Risk is higher with pain already present before surgery, severe or prolonged acute postoperative pain, prior chronic pain, repeated operations, nerve injury, and some psychological and social stressors. Certain procedures carry higher risk because major nerves or sensitive tissues are involved. Risk factors are not destiny or blame; they identify people who may benefit from earlier, better-coordinated pain care.",
      },
      {
        question: "How is persistent pain after surgery treated?",
        answer:
          "Treatment begins by identifying the dominant mechanism. Options may include graded rehabilitation, scar and sensory desensitization, treatment for neuropathic pain, psychological pain therapies, sleep support, and selected diagnostic or therapeutic procedures. A transitional or multidisciplinary pain service can coordinate these pieces and manage medication safely while function returns.",
      },
      {
        question: "When should postoperative pain be evaluated urgently?",
        answer:
          "Seek urgent care for trouble breathing, chest pain, fainting, sudden confusion, uncontrolled bleeding, new one-sided leg swelling, rapidly worsening pain, fever with spreading redness or drainage, a cold or pale limb, new loss of strength or sensation, or loss of bladder or bowel control. Follow the operation-specific emergency instructions from the surgical team.",
      },
    ],
    references: [
      {
        source: "PAIN / PubMed",
        title: "Schug et al. — The IASP classification of chronic pain for ICD-11: chronic postsurgical or posttraumatic pain",
        url: "https://pubmed.ncbi.nlm.nih.gov/30586070/",
      },
      {
        source: "The Lancet / PubMed",
        title: "Glare, Aubrey & Myles — Transition from acute to chronic pain after surgery",
        url: "https://pubmed.ncbi.nlm.nih.gov/30983589/",
      },
      {
        source: "BJA Education / PMC",
        title: "Chronic post-surgical pain — update on incidence, risk factors and preventive treatment options",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9039436/",
      },
      {
        source: "International Association for the Study of Pain",
        title: "Prevention of chronic post-surgical pain",
        url: "https://www.iasp-pain.org/resources/fact-sheets/prevention-of-chronic-post-surgical-pain/",
      },
      {
        source: "PAIN / PubMed",
        title: "Haroutiunian et al. — The neuropathic component in persistent postsurgical pain: systematic review",
        url: "https://pubmed.ncbi.nlm.nih.gov/23273105/",
      },
      {
        source: "J Pain Research / PMC",
        title: "Katz et al. — Toronto General Hospital Transitional Pain Service: development and implementation",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4670028/",
      },
    ],
    related: [
      {
        title: "Acute vs. chronic pain",
        href: "/understanding-pain/acute-vs-chronic-pain",
        blurb: "What changes when a protective postoperative signal persists beyond healing.",
      },
      {
        title: "Neuropathic pain",
        href: "/conditions/neuropathic-pain",
        blurb: "How injured nerves generate burning, electric, numb-yet-painful symptoms.",
      },
      {
        title: "Physical and behavioral therapies",
        href: "/treatments/physical-and-behavioral-therapies",
        blurb: "The rehabilitation and pain-skills side of postsurgical recovery.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "endometriosis",
    title: "Endometriosis",
    description:
      "What endometriosis is, why pain can spread beyond visible lesions, how diagnosis has moved beyond mandatory surgery, and how hormonal treatment, surgery, pelvic-floor care, and fertility goals shape an individualized plan.",
    status: "sourced",
    lastUpdated: "2026-09-05",
    answer:
      "Endometriosis is a chronic inflammatory disease in which tissue similar to the uterine lining grows outside the uterus. It can cause severe menstrual pain, persistent pelvic pain, pain with sex, bowel or bladder symptoms, and infertility. A normal scan does not exclude it, pain severity does not reliably reveal how much disease is visible, and surgery is no longer required before every clinical diagnosis or treatment plan.",
    faqs: [
      {
        question: "What does endometriosis pain feel like?",
        answer:
          "The pattern varies. Common clues include menstrual pain that disrupts normal life, pelvic pain between periods, deep pain during or after sex, and cyclical pain with bowel movements or urination. Pain may reach the back, hips, or legs. Symptoms can be severe with limited visible disease, mild with extensive disease, or absent altogether.",
      },
      {
        question: "Can an ultrasound or MRI rule out endometriosis?",
        answer:
          "No. Expert ultrasound and MRI can identify ovarian endometriomas and many forms of deep endometriosis, but superficial disease may remain invisible. A normal scan therefore does not prove that endometriosis is absent. Imaging is still useful for finding other causes, mapping visible disease, and planning specialist surgery when needed.",
      },
      {
        question: "Do I need surgery to be diagnosed with endometriosis?",
        answer:
          "Not always. Current ACOG and ESHRE guidance supports clinical diagnosis and shared decision-making: some patients choose treatment based on symptoms and imaging, while others choose laparoscopy for diagnosis and possible treatment. Surgery remains important in selected cases, but it is no longer the mandatory first gate to having symptoms taken seriously.",
      },
      {
        question: "How is endometriosis pain treated?",
        answer:
          "Options include analgesics, hormonal suppression, and surgery, chosen around symptoms, side effects, pregnancy goals, prior response, cost, and preference. Pelvic-floor physical therapy and broader multidisciplinary pain care may help when muscle guarding or persistent pain mechanisms coexist. Treatment controls disease activity and pain; no option guarantees that symptoms will never return.",
      },
      {
        question: "Does a hysterectomy eliminate endometriosis?",
        answer:
          "Not necessarily. A hysterectomy removes the uterus, not every endometriosis lesion outside it, and persistent pain may also involve pelvic-floor muscles or a sensitized nervous system. It can fit selected situations, especially when uterine conditions also contribute and pregnancy is no longer desired, but guidelines require counseling that it may not eliminate symptoms or disease.",
      },
      {
        question: "When should pelvic pain be evaluated urgently?",
        answer:
          "Seek urgent care for sudden severe pelvic pain, fainting, heavy bleeding, fever, persistent vomiting, a rigid or rapidly swelling abdomen, or pain with a possible pregnancy. These can signal ectopic pregnancy, ovarian torsion, a ruptured cyst, infection, appendicitis, or another acute condition rather than an ordinary endometriosis flare.",
      },
    ],
    references: [
      {
        source: "American College of Obstetricians and Gynecologists",
        title: "ACOG Clinical Practice Guideline No. 11 — Evaluation and Diagnosis of Endometriosis",
        url: "https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2026/03/diagnosis-of-endometriosis",
      },
      {
        source: "Human Reproduction Open / PMC",
        title: "ESHRE guideline: endometriosis",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8951218/",
      },
      {
        source: "American College of Obstetricians and Gynecologists",
        title: "Chronic Pelvic Pain — Practice Bulletin No. 218, reaffirmed 2026",
        url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/03/chronic-pelvic-pain",
      },
      {
        source: "NEJM / PubMed",
        title: "Taylor et al. — Treatment of endometriosis-associated pain with elagolix",
        url: "https://pubmed.ncbi.nlm.nih.gov/28525302/",
      },
      {
        source: "NIH / NICHD",
        title: "Endometriosis — condition information",
        url: "https://www.nichd.nih.gov/health/topics/endometri",
      },
      {
        source: "WHO",
        title: "Endometriosis — fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/endometriosis",
      },
    ],
    related: [
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb: "Why inflammation, nerve signaling, muscle guarding, and sensitization can overlap.",
      },
      {
        title: "Physical and behavioral therapies",
        href: "/treatments/physical-and-behavioral-therapies",
        blurb: "Where pelvic-floor rehabilitation and broader pain skills fit.",
      },
      {
        title: "Pain and emotion",
        href: "/understanding-pain/pain-and-emotion",
        blurb: "Why distress changes pain without making it psychological or imagined.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "diabetic-neuropathy",
    title: "Diabetic Neuropathy",
    description:
      "How diabetes damages nerves: why symptoms begin in the toes, how feet can be numb and painful at once, why daily foot checks matter, and what current guidelines say about preventing damage and treating neuropathic pain.",
    status: "sourced",
    lastUpdated: "2026-09-05",
    answer:
      "Diabetic peripheral neuropathy is nerve damage caused by diabetes, usually beginning in the toes and moving upward in a symmetrical stocking pattern. It can cause burning, shocks, tingling, numbness, or all of them at once. Pain treatment matters, but loss of protective sensation matters just as much: an unnoticed blister or wound can become the more dangerous part of the disease.",
    faqs: [
      {
        question: "What does diabetic neuropathy feel like?",
        answer:
          "Common symptoms include burning, electric shocks, stabbing pain, pins and needles, unusual sensitivity to light touch, or numbness. They usually begin in both toes or feet and spread upward over time; the hands may become involved later. Some people feel no warning symptoms even while protective sensation is fading, which is why screening matters.",
      },
      {
        question: "Why is diabetic neuropathy worse at night?",
        answer:
          "Neuropathic pain often becomes more noticeable when the day is quiet and there are fewer competing sensations. Bed sheets may also trigger pain in sensitized skin, while sleep disruption and pain reinforce each other. Night pain is common, but a hot, swollen, discolored foot or an open wound needs examination rather than being assumed to be ordinary neuropathy.",
      },
      {
        question: "Can diabetic neuropathy be reversed?",
        answer:
          "Established nerve loss is often not fully reversible, but progression is not inevitable. Managing glucose and other metabolic and cardiovascular risks can reduce future nerve damage, especially when started early. A clinician should also look for treatable contributors such as vitamin B12 deficiency, thyroid disease, kidney disease, alcohol exposure, or a medication effect instead of assuming every neuropathy in a person with diabetes comes only from diabetes.",
      },
      {
        question: "What treatments help painful diabetic neuropathy?",
        answer:
          "Guidelines support several medication classes rather than one universal winner: serotonin-norepinephrine reuptake inhibitors, gabapentinoids, tricyclic antidepressants, and sodium-channel blockers, plus selected topical options. Choice depends on side effects, other conditions, sleep, mood, cost, and prior response. Switching classes is reasonable when one fails; opioid pain medicines are not recommended for this condition. If opioid use is becoming hard to control, confidential help is available from the SAMHSA National Helpline at 1-800-662-HELP (4357).",
      },
      {
        question: "Why should I check my feet if they do not hurt?",
        answer:
          "Because numbness removes the alarm. A blister, cut, burn, pressure spot, or object in a shoe can worsen without being felt, particularly when diabetes also impairs circulation and healing. Daily visual checks and regular professional foot examinations are prevention, not housekeeping. Broken skin, drainage, spreading redness, swelling, black tissue, or a hot foot needs prompt medical attention.",
      },
      {
        question: "How is diabetic neuropathy diagnosed?",
        answer:
          "Diagnosis usually starts with the symptom pattern and a bedside examination of pinprick or temperature, vibration, reflexes, and pressure sensation using a 10-gram monofilament. The ADA recommends assessment beginning at type 2 diabetes diagnosis and five years after type 1 diagnosis, then at least annually. Nerve-conduction or specialist testing is usually reserved for rapid, asymmetric, motor-predominant, or otherwise atypical cases.",
      },
    ],
    references: [
      {
        source: "American Diabetes Association / Diabetes Care",
        title: "Standards of Care in Diabetes—2026: Retinopathy, Neuropathy, and Foot Care",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12690177/",
      },
      {
        source: "American Academy of Neurology / PubMed",
        title: "Price et al. — Oral and topical treatment of painful diabetic polyneuropathy: practice guideline update",
        url: "https://pubmed.ncbi.nlm.nih.gov/34965987/",
      },
      {
        source: "NIH / NIDDK",
        title: "Peripheral neuropathy in diabetes — symptoms, diagnosis, and foot protection",
        url: "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/nerve-damage-diabetic-neuropathies/peripheral-neuropathy",
      },
      {
        source: "Nature Reviews Disease Primers / PMC",
        title: "Feldman et al. — Diabetic neuropathy",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7096070/",
      },
      {
        source: "JAMA Neurology / PubMed",
        title: "Petersen et al. — High-frequency spinal cord stimulation for painful diabetic neuropathy: randomized clinical trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/33818600/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Diabetic nerve problems — patient information",
        url: "https://medlineplus.gov/diabeticnerveproblems.html",
      },
    ],
    related: [
      {
        title: "Neuropathic pain",
        href: "/conditions/neuropathic-pain",
        blurb: "The larger nerve-pain map — and why numbness and burning can coexist.",
      },
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb: "How the major nerve-pain medication classes work and where their limits lie.",
      },
      {
        title: "Next-generation neuromodulation",
        href: "/future-of-pain-medicine/neuromodulation",
        blurb: "The device evidence for carefully selected refractory diabetic nerve pain.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "spinal-stenosis",
    title: "Lumbar Spinal Stenosis",
    description:
      "Why spinal stenosis makes standing and walking hurt: the shopping-cart sign, why a narrow MRI is not a diagnosis by itself, what improves walking, the limited evidence for injections, and when decompression surgery enters the conversation.",
    status: "sourced",
    lastUpdated: "2026-09-05",
    answer:
      "Lumbar spinal stenosis is narrowing around the nerves in the lower spine. It becomes a clinical condition when that narrowing produces neurogenic claudication: pain, heaviness, tingling, or weakness in the buttocks or legs brought on by standing or walking and eased by sitting or bending forward. A narrow-looking scan alone is not the disease; the symptoms and image must match.",
    faqs: [
      {
        question: "What does spinal stenosis feel like?",
        answer:
          "The classic pattern is neurogenic claudication: aching, burning, heaviness, tingling, numbness, or weakness in one or both buttocks and legs that builds while standing or walking. Sitting or bending forward usually settles it, which is why leaning over a shopping cart can extend walking distance. Back pain may be present, but the walking-limited leg pattern is the stronger clue.",
      },
      {
        question: "Is spinal stenosis the same as a pinched nerve?",
        answer:
          "They overlap but are not identical. Stenosis means space around nerves has narrowed, often at several levels. It can produce neurogenic claudication affecting both legs, or it can narrow one nerve exit and cause sciatica-like radicular pain. A person can also have substantial narrowing on MRI without symptoms, so the clinical pattern matters more than the word on the report.",
      },
      {
        question: "Why does leaning forward help spinal stenosis?",
        answer:
          "Bending forward slightly increases space in parts of the lumbar canal and takes the spine out of the extended position that commonly provokes symptoms. Sitting, cycling, or leaning on a cart can therefore quiet leg symptoms faster than simply standing still. This posture-response is useful diagnostic evidence, but it does not by itself prove the diagnosis.",
      },
      {
        question: "Can exercise help lumbar spinal stenosis?",
        answer:
          "Yes. The better-supported nonsurgical approach combines education with supervised exercise and rehabilitation, sometimes alongside manual therapy and psychologically informed care. The target is practical: greater walking capacity, leg and trunk strength, balance, and confidence. Exercise does not need to make the MRI look wider to improve what a person can do.",
      },
      {
        question: "Do epidural steroid injections work for spinal stenosis?",
        answer:
          "High-quality reviews have not found clinically important, durable benefit from adding steroid for neurogenic claudication, and a 2021 multidisciplinary guideline recommended against epidural steroid injections for this specific condition. That is different from some cases of acute disc-related radicular pain. Whether an injection fits a different pain mechanism is a discussion for a clinician.",
      },
      {
        question: "When is surgery considered for spinal stenosis?",
        answer:
          "Decompression surgery is generally discussed when leg symptoms and walking limits remain disabling despite a well-run nonsurgical plan, and imaging matches the clinical level. Progressive weakness or cauda equina symptoms make evaluation more urgent. Fusion is a separate decision usually tied to instability or another specific reason; it is not an automatic companion to decompression.",
      },
    ],
    references: [
      {
        source: "J Pain / PubMed",
        title: "Bussières et al. — Non-surgical interventions for lumbar spinal stenosis leading to neurogenic claudication: clinical practice guideline",
        url: "https://pubmed.ncbi.nlm.nih.gov/33857615/",
      },
      {
        source: "BMJ Open / PMC",
        title: "Ammendolia et al. — Non-operative treatment for lumbar spinal stenosis with neurogenic claudication: updated systematic review",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8772406/",
      },
      {
        source: "Spine Surgery and Related Research / PMC",
        title: "The Essence of Clinical Practice Guidelines for Lumbar Spinal Stenosis, 2021: Diagnosis and Evaluation",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10447202/",
      },
      {
        source: "JAMA / PMC",
        title: "Suri et al. — Does this older adult with lower-extremity pain have lumbar spinal stenosis?",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3260477/",
      },
      {
        source: "Annals of Internal Medicine / PMC",
        title: "Delitto et al. — Surgery versus nonsurgical treatment of lumbar spinal stenosis: randomized trial",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6252248/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Spinal stenosis — patient information",
        url: "https://medlineplus.gov/spinalstenosis.html",
      },
    ],
    related: [
      {
        title: "Low back pain",
        href: "/conditions/low-back-pain",
        blurb: "The larger territory — and why scan findings do not always identify the pain source.",
      },
      {
        title: "Sciatica",
        href: "/conditions/sciatica",
        blurb: "How single-root leg pain differs from the walking-limited stenosis pattern.",
      },
      {
        title: "Interventional procedures",
        href: "/treatments/interventional-procedures",
        blurb: "The evidence and limits behind injections and spine procedures.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "neck-pain",
    title: "Neck Pain",
    description:
      "What neck pain means: why most cases are mechanical rather than dangerous, what arm symptoms can reveal about a nerve or spinal cord problem, when imaging helps, and the treatment options supported by current guidelines.",
    status: "sourced",
    lastUpdated: "2026-09-05",
    answer:
      "Neck pain usually comes from the muscles, joints, discs, and other tissues that support and move the cervical spine, without one structure that can be named with certainty. Most cases are not dangerous. The important divide is between local neck pain, pain from an irritated nerve running into an arm, and rare warning signs of spinal cord, vascular, infectious, cancerous, or traumatic disease.",
    faqs: [
      {
        question: "What causes neck pain?",
        answer:
          "Most neck pain is non-specific or mechanical: several nearby muscles, joints, discs, and ligaments can contribute, but no single structure can be proved to be the source. A smaller group has cervical radiculopathy, where an irritated nerve root causes arm-dominant pain, tingling, numbness, or weakness. Serious causes such as fracture, infection, cancer, arterial disease, or spinal cord compression are uncommon but matter because they change the urgency of care.",
      },
      {
        question: "Is neck pain from bad posture or looking down at a phone?",
        answer:
          "A sustained position can make a sensitive neck ache, but posture is not a simple verdict on tissue damage. There is no single perfect posture that prevents neck pain. More useful targets are changing position, taking movement breaks, building strength and tolerance, and adjusting a task when it repeatedly aggravates symptoms. Your posture can be one contributor without being the whole diagnosis.",
      },
      {
        question: "When is neck pain an emergency?",
        answer:
          "Seek emergency care after major trauma, or for neck pain with sudden one-sided weakness, facial droop, trouble speaking, severe imbalance, loss of consciousness, or a sudden severe unfamiliar headache. Prompt assessment is also important for new clumsy hands, trouble walking, weakness in more than one limb, or loss of bladder or bowel control, which can signal spinal cord involvement. Fever, cancer history, immune suppression, unexplained weight loss, or steadily worsening night pain also deserve timely clinical evaluation.",
      },
      {
        question: "Do I need an X-ray or MRI for neck pain?",
        answer:
          "Not automatically. Imaging is most useful when the history or examination suggests trauma, infection, cancer, progressive neurological loss, or another result that would change care. MRI is usually the most useful scan for new or worsening nerve-root symptoms because it shows nerves and other soft tissues. Scans also find age-related changes in people without symptoms, so an image must be interpreted alongside the clinical story.",
      },
      {
        question: "What does a pinched nerve in the neck feel like?",
        answer:
          "Cervical radiculopathy usually produces arm-dominant symptoms: sharp, electric, burning, or shooting pain from the neck or shoulder into an arm, often with tingling, numbness, altered reflexes, or weakness in a pattern linked to one nerve root. Neck pain alone does not prove a pinched nerve. New or worsening weakness deserves prompt assessment.",
      },
      {
        question: "What treatments help neck pain?",
        answer:
          "Guidelines converge on education, continued activity, and exercise-based rehabilitation, with manual therapy sometimes used as one part of a broader plan. Medication may offer short-term symptom relief for selected people, but it does not replace rebuilding movement and capacity. Injections or surgery are reserved for narrower situations, especially confirmed nerve or spinal cord compression. The right mix depends on the pattern and should be discussed with a clinician.",
      },
    ],
    references: [
      {
        source: "J Orthop Sports Phys Ther",
        title: "Blanpied et al. — Neck Pain: Revision 2017 Clinical Practice Guidelines",
        url: "https://www.jospt.org/doi/10.2519/jospt.2017.0302",
      },
      {
        source: "European Journal of Pain / PMC",
        title: "Corp et al. — Evidence-based treatment recommendations for neck and low back pain across Europe",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7839780/",
      },
      {
        source: "Archives of Physiotherapy / PMC",
        title: "Feller et al. — Red flags for potential serious pathologies in people with neck pain",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11618059/",
      },
      {
        source: "American College of Radiology / PubMed",
        title: "ACR Appropriateness Criteria: Cervical Neck Pain or Cervical Radiculopathy",
        url: "https://pubmed.ncbi.nlm.nih.gov/31054759/",
      },
      {
        source: "Mayo Clinic Proceedings / PubMed",
        title: "Cohen & Hooten — Advances in the diagnosis and management of neck pain",
        url: "https://pubmed.ncbi.nlm.nih.gov/28645549/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Neck injuries and disorders — patient information",
        url: "https://medlineplus.gov/neckinjuriesanddisorders.html",
      },
    ],
    related: [
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb: "Why a hurting neck can mix tissue, nerve, and sensitization mechanisms.",
      },
      {
        title: "Physical and behavioral therapies",
        href: "/treatments/physical-and-behavioral-therapies",
        blurb: "How movement, graded loading, and pain skills fit into recovery.",
      },
      {
        title: "Your first visit to a pain physician",
        href: "/what-is-pain-medicine/your-first-visit",
        blurb: "What happens when persistent neck or arm pain reaches a specialist.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "crps",
    title: "Complex Regional Pain Syndrome",
    description:
      "CRPS explained: pain out of proportion after an injury, a limb that visibly changes, and why the first months matter most — the Budapest criteria, the brain-map science behind mirror therapy, and the treatments with real evidence, movement first.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Complex regional pain syndrome (CRPS) is severe, persistent limb pain out of proportion to the injury that started it — usually a fracture, surgery, or sprain — in a limb that visibly changes: color, temperature, swelling, sweating, movement. It is rare, real, and time-sensitive: recognized and treated early, with movement at the center, most people improve substantially.",
    faqs: [
      {
        question: "What is CRPS and what does it feel like?",
        answer:
          "CRPS is a regional pain syndrome that usually follows an injury — most often a wrist fracture, surgery, or sprain — in which the pain outlives and outgrows the injury itself. It is typically burning or squeezing, spread beyond the original injury site, and severe out of proportion to what started it; light touch can be intensely painful. What sets CRPS apart is that the limb visibly changes too: color and temperature shifts, swelling, abnormal sweating, and over time changes in skin, hair, nails, and movement.",
      },
      {
        question: "What causes CRPS?",
        answer:
          "An injury sets it off, and then several systems misbehave together: an exaggerated, lingering inflammatory response in the limb; disturbed small-nerve and blood-vessel regulation (the color, temperature, and sweating changes); and reorganization in the brain, where the affected limb's map measurably shrinks and blurs. It is not a psychological condition and not something patients cause. Why some people develop it after a routine injury and most do not remains one of pain medicine's open questions.",
      },
      {
        question: "How is CRPS diagnosed?",
        answer:
          "Clinically, using the Budapest criteria: continuing pain out of proportion to the injury, plus a required mix of symptoms and examination signs across four categories — sensory (like pain from light touch), vasomotor (color or temperature asymmetry), sweating and swelling, and motor or trophic changes (weakness, tremor, skin, hair, and nail changes). No blood test or scan makes the diagnosis, though tests are sometimes used to rule out mimics. If your limb pain fits this picture, ask the question directly — early recognition is the whole game.",
      },
      {
        question: "Does CRPS go away?",
        answer:
          "Often, substantially — especially when it is caught and treated in the first months. Many cases improve significantly within the first year with active rehabilitation; a minority persist and need long-term specialist care, and honest medicine holds both facts at once. The variable most within reach is time-to-treatment: the earlier the diagnosis is made and movement-based rehabilitation begins, the better the odds. CRPS caught early is a very different disease from CRPS found late.",
      },
      {
        question: "Is it safe to move a limb with CRPS?",
        answer:
          "Not only safe — movement is the cornerstone of treatment. The instinct to guard and immobilize the limb is understandable and counterproductive: disuse feeds the swelling, the bone loss, and the brain's shrinking map of the limb. Rehabilitation is built to make movement possible again in graded steps — desensitization, graded motor imagery, mirror therapy, then progressive loading — with pain control supporting the movement, not replacing it. In CRPS, hurt does not equal harm; guarding is the riskier path.",
      },
    ],
    references: [
      {
        source: "PAIN / PubMed",
        title:
          "Harden et al. — Validation of proposed diagnostic criteria (the 'Budapest criteria') for complex regional pain syndrome",
        url: "https://pubmed.ncbi.nlm.nih.gov/20493633/",
      },
      {
        source: "PAIN / PubMed",
        title:
          "de Mos et al. — The incidence of complex regional pain syndrome: a population-based study",
        url: "https://pubmed.ncbi.nlm.nih.gov/17084977/",
      },
      {
        source: "NEJM / PubMed",
        title:
          "Kemler et al. — Spinal cord stimulation in patients with chronic reflex sympathetic dystrophy",
        url: "https://pubmed.ncbi.nlm.nih.gov/10965008/",
      },
      {
        source: "PAIN / PubMed",
        title:
          "Deer et al. — Dorsal root ganglion stimulation yielded higher treatment success rate for complex regional pain syndrome and causalgia at 3 and 12 months (ACCURATE trial)",
        url: "https://pubmed.ncbi.nlm.nih.gov/28030470/",
      },
      {
        source: "NCBI StatPearls",
        title: "Complex Regional Pain Syndrome",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK430719/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Complex regional pain syndrome — patient information",
        url: "https://medlineplus.gov/complexregionalpainsyndrome.html",
      },
    ],
    related: [
      {
        title: "Neuropathic pain",
        href: "/conditions/neuropathic-pain",
        blurb:
          "CRPS type II begins with a documented nerve injury — the family resemblance explained.",
      },
      {
        title: "Next-generation neuromodulation",
        href: "/future-of-pain-medicine/neuromodulation",
        blurb:
          "DRG stimulation — the device therapy that proved itself in CRPS first.",
      },
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb:
          "The nervous-system plasticity that CRPS turns against a limb — and rehab turns back.",
      },
    ],
  },
  {
    hub: HUB,
    slug: "tmj-disorders",
    title: "TMJ Pain and Jaw Disorders (TMD)",
    description:
      "What temporomandibular disorders are: the three places jaw pain lives, why a clicking jaw is usually harmless, what the OPPERA studies found predicts TMD, and why conservative, reversible care comes first.",
    status: "sourced",
    lastUpdated: "2026-09-08",
    answer:
      "TMJ is the jaw joint in front of each ear; temporomandibular disorders (TMD) are the pain and movement problems involving that joint, the chewing muscles, or both. About 1 in 20 US adults have it. Muscle pain is the most common form, a clicking jaw by itself is usually harmless, and nearly every authority recommends starting with self-care, physical therapy, and reversible treatments rather than surgery or bite changes.",
    faqs: [
      {
        question: "What does TMJ pain feel like?",
        answer:
          "Most often a dull ache in the cheek or temple that worsens with chewing, yawning, or after a night of clenching, sometimes radiating to the ear. Joint-centered TMD is sharper and sits right in front of the ear, sometimes with limited opening or catching. A temple headache reproduced by pressing the jaw muscles is the third recognized form.",
      },
      {
        question: "Is a clicking jaw serious?",
        answer:
          "Usually not. Clicking generally means the joint's cushioning disc slips forward and pops back on opening, a common and often lifelong finding that by itself is usually painless. A painless click does not need treatment. Locking, inability to open enough to eat, or pain that is steadily worsening are the signs that deserve evaluation.",
      },
      {
        question: "What causes TMD?",
        answer:
          "Mostly overworked chewing muscles combined with a pain system that is turned up. The OPPERA studies found that new TMD was predicted by prior pain elsewhere, worsening sleep, and psychological distress far more than by jaw anatomy. True joint arthritis occurs but is the minority, and imaging findings correlate poorly with pain.",
      },
      {
        question: "How is TMD treated?",
        answer:
          "Least invasive first: softer foods during flares, heat, gentle jaw exercises, and releasing daytime clenching; then physical therapy and behavioral care for sleep and stress; a night-time stabilization splint for muscle pain in some people; short medication courses for flares. Joint procedures are reserved for locked or arthritic joints, and the National Academies specifically warned against irreversible surgery and bite adjustment as routine care.",
      },
      {
        question: "What kind of doctor treats TMJ disorders?",
        answer:
          "Many people start with a dentist or an ear specialist. For persistent pain, an orofacial pain specialist, a recognized dental specialty, or a pain medicine physician is appropriate, often working with a physical therapist. If a proposed treatment is irreversible, ask what reversible options come first.",
      },
    ],
    references: [
      {
        source: "National Academies of Sciences, Engineering, and Medicine (2020)",
        title: "Temporomandibular Disorders: Priorities for Research and Care",
        url: "https://nap.nationalacademies.org/catalog/25652/temporomandibular-disorders-priorities-for-research-and-care",
      },
      {
        source: "NIH / NIDCR",
        title: "TMD (Temporomandibular Disorders) — patient information",
        url: "https://www.nidcr.nih.gov/health-info/tmd",
      },
      {
        source: "J Oral Facial Pain Headache / PubMed",
        title:
          "Schiffman et al. — Diagnostic Criteria for Temporomandibular Disorders (DC/TMD) for clinical and research applications (2014)",
        url: "https://pubmed.ncbi.nlm.nih.gov/24482784/",
      },
      {
        source: "J Dent Res / PubMed",
        title: "Slade et al. — Painful temporomandibular disorder: decade of discovery from OPPERA studies (2016)",
        url: "https://pubmed.ncbi.nlm.nih.gov/27339423/",
      },
      {
        source: "J Dent Res / PubMed",
        title: "Harper, Schrepf & Clauw — Pain mechanisms and centralized pain in temporomandibular disorders (2016)",
        url: "https://pubmed.ncbi.nlm.nih.gov/27422858/",
      },
      {
        source: "J Dent Res / PubMed",
        title: "Ohrbach & Dworkin — The evolution of TMD diagnosis: past, present, future (2016)",
        url: "https://pubmed.ncbi.nlm.nih.gov/27313164/",
      },
    ],
    related: [
      {
        title: "Migraine",
        href: "/conditions/migraine",
        blurb: "The most common co-traveler; the trigeminal system links them.",
      },
      {
        title: "Fibromyalgia",
        href: "/conditions/fibromyalgia",
        blurb: "The sensitized-system pattern TMD often belongs to.",
      },
      {
        title: "Physical and behavioral therapies",
        href: "/treatments/physical-and-behavioral-therapies",
        blurb: "The evidence-supported foundation for muscle-predominant TMD.",
      },
    ],
  },
  {
    hub: HUB,
    slug: "chronic-pelvic-pain",
    title: "Chronic Pelvic Pain",
    description:
      "Why pelvic pain rarely has one source: the shared nerve supply, the pelvic floor muscles found in most cases, the six-domain approach used in men and women, and why a normal scan does not mean nothing is wrong.",
    status: "sourced",
    lastUpdated: "2026-09-08",
    answer:
      "Chronic pelvic pain is pain below the navel lasting six months or more, in any sex. The pelvis packs bladder, bowel, reproductive organs, and a muscular floor into a small space with shared nerves, so pain usually has more than one source. In women the origin is not gynecologic in about 80% of cases, and pelvic floor muscle pain is found in most. Evaluation sorts contributors by system; treatment addresses each active one, with pelvic floor physical therapy often central.",
    faqs: [
      {
        question: "What causes chronic pelvic pain?",
        answer:
          "Usually several things at once: pelvic floor muscle pain, endometriosis, bladder pain syndrome, irritable bowel syndrome, nerve entrapment or post-surgical pain, and in men chronic prostatitis / chronic pelvic pain syndrome, which is rarely a true infection. Because these structures share nerve supply, one source sensitizes the neighbors, and long-standing pain often has two or three active contributors.",
      },
      {
        question: "My tests are all normal. Why do I still have pelvic pain?",
        answer:
          "Because the most common source, the pelvic floor muscles, does not show on scans or scopes. A 2021 JAMA review found musculoskeletal pain and dysfunction in 50% to 90% of women with chronic pelvic pain, and a non-gynecologic origin in about 80%. A clinician who examines the pelvic floor for tender trigger points can find in minutes what imaging cannot.",
      },
      {
        question: "Does pelvic floor physical therapy work?",
        answer:
          "For the muscle component, it has the strongest single trial in the field: in women with bladder pain syndrome and pelvic floor tenderness, targeted myofascial physical therapy produced a moderate-or-better response in 59% versus 26% with general massage. It is specific hands-on work by a trained therapist, not a Kegel handout. For a tight, painful pelvic floor, strengthening exercises can make pain worse.",
      },
      {
        question: "Do men get chronic pelvic pain?",
        answer:
          "Yes. In men it usually carries the label chronic prostatitis / chronic pelvic pain syndrome. The NIH classification reserves a true bacterial cause for a small minority; most men have the pain syndrome without infection, and repeated antibiotic courses for a culture that was never positive do not help. The UPOINT six-domain approach was developed for exactly this group.",
      },
      {
        question: "When should I see a specialist for pelvic pain?",
        answer:
          "Promptly for fever, unexplained bleeding, blood in urine or stool, a new mass, weight loss, or sudden severe pain. For pain lasting months with a normal workup, the right next step is usually a clinician who examines the pelvic floor and thinks in domains, working with a pelvic floor physical therapist, rather than another scope or surgery.",
      },
    ],
    references: [
      {
        source: "Obstet Gynecol / PubMed",
        title: "ACOG Practice Bulletin No. 218 — Chronic Pelvic Pain (2020)",
        url: "https://pubmed.ncbi.nlm.nih.gov/32080051/",
      },
      {
        source: "JAMA / PubMed",
        title: "Lamvu, Carrillo, Ouyang & Rapkin — Chronic pelvic pain in women: a review (2021)",
        url: "https://pubmed.ncbi.nlm.nih.gov/34128995/",
      },
      {
        source: "Pain Physician / PubMed",
        title: "Ahangari — Prevalence of chronic pelvic pain among women: an updated review (2014)",
        url: "https://pubmed.ncbi.nlm.nih.gov/24658485/",
      },
      {
        source: "J Urol / PubMed",
        title:
          "FitzGerald et al. — Randomized multicenter clinical trial of myofascial physical therapy in women with interstitial cystitis/painful bladder syndrome (2012)",
        url: "https://pubmed.ncbi.nlm.nih.gov/22503015/",
      },
      {
        source: "JAMA / PubMed",
        title: "Krieger, Nyberg & Nickel — NIH consensus definition and classification of prostatitis (1999)",
        url: "https://pubmed.ncbi.nlm.nih.gov/10422990/",
      },
      {
        source: "Urology / PubMed",
        title:
          "Shoskes et al. — Clinical phenotyping of patients with chronic prostatitis/chronic pelvic pain syndrome (UPOINT) and correlation with symptom severity (2009)",
        url: "https://pubmed.ncbi.nlm.nih.gov/19118880/",
      },
      {
        source: "NIH / NIDDK",
        title: "Prostatitis: inflammation of the prostate — patient information",
        url: "https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/prostatitis-inflammation-prostate",
      },
      {
        source: "ACOG",
        title: "Chronic Pelvic Pain — patient FAQ",
        url: "https://www.acog.org/womens-health/faqs/chronic-pelvic-pain",
      },
    ],
    related: [
      {
        title: "Endometriosis",
        href: "/conditions/endometriosis",
        blurb: "The best-known gynecologic contributor, and why it rarely travels alone.",
      },
      {
        title: "Persistent postsurgical pain",
        href: "/conditions/persistent-postsurgical-pain",
        blurb: "Nerve injury after pelvic and abdominal surgery.",
      },
      {
        title: "Physical and behavioral therapies",
        href: "/treatments/physical-and-behavioral-therapies",
        blurb: "Where pelvic floor physical therapy fits in the broader toolkit.",
      },
    ],
  },
  {
    hub: HUB,
    slug: "central-post-stroke-pain",
    title: "Central Post-Stroke Pain",
    description:
      "Pain generated by the stroke's damage to the brain's own pain pathways: what it feels like, why it starts months later and is often missed, the thalamic lesion science, and the honest state of treatment.",
    status: "sourced",
    lastUpdated: "2026-09-08",
    answer:
      "Central post-stroke pain is burning, aching, or cold-sensitive pain on the side of the body a stroke affected, caused by damage inside the brain's pain pathway itself, classically the thalamus. It affects roughly 1 in 10 stroke survivors, usually begins weeks to months after the stroke, and follows the map of sensory change rather than a joint or muscle. It is treated with nerve-pain medications and, when refractory, brain stimulation.",
    faqs: [
      {
        question: "What does central post-stroke pain feel like?",
        answer:
          "A constant burning, aching, or pricking, sometimes with lancing jolts, in the arm, leg, face, or whole side of the body opposite the stroke, in the same territory where sensation changed. Sensitivity to cold is characteristic, and in most people ordinary touch or temperature is painful, a sign called allodynia.",
      },
      {
        question: "How common is pain after a stroke?",
        answer:
          "Pain of some kind after stroke is very common, mostly from stiff shoulders, spasticity, and altered movement. Central post-stroke pain specifically affects about 8% to 11% of survivors in studies, rising above 50% in those whose strokes caused sensory loss or involved the thalamus.",
      },
      {
        question: "Why did my pain start months after the stroke?",
        answer:
          "Delayed onset is typical. A 2020 meta-analysis found only about a third of cases begin in the first month; most start between one month and a year, and some later. The delay is a major reason the condition is missed, because by then follow-up is sparse and a new pain gets attributed to a joint or to the stroke in general.",
      },
      {
        question: "What treatments help central post-stroke pain?",
        answer:
          "Nerve-pain medications, honestly described as partially effective: amitriptyline (the first drug shown to help), lamotrigine (44% responders in a 2001 trial), gabapentinoids (pregabalin missed its main endpoint in 2011 but improved sleep and anxiety), and SNRIs by extrapolation from other neuropathic pain. For refractory cases, repetitive transcranial magnetic stimulation and implanted motor cortex stimulation are used in specialist centers. Opioids are not recommended as ongoing treatment.",
      },
      {
        question: "Who should I see for pain after a stroke?",
        answer:
          "First the stroke team, to rule out a new event. Then a neurologist, physiatrist, or pain medicine physician with neuropathic pain experience. Bring three facts: where the pain is, where sensation changed, and when the pain started relative to the stroke. Those make the diagnosis.",
      },
    ],
    references: [
      {
        source: "Lancet Neurol / PubMed",
        title: "Klit, Finnerup & Jensen — Central post-stroke pain: clinical characteristics, pathophysiology, and management (2009)",
        url: "https://pubmed.ncbi.nlm.nih.gov/19679277/",
      },
      {
        source: "Adv Ther / PubMed",
        title:
          "Liampas et al. — Prevalence and management challenges in central post-stroke neuropathic pain: systematic review and meta-analysis (2020)",
        url: "https://pubmed.ncbi.nlm.nih.gov/32451951/",
      },
      {
        source: "Pain / PubMed",
        title: "Andersen et al. — Incidence of central post-stroke pain (1995)",
        url: "https://pubmed.ncbi.nlm.nih.gov/7659428/",
      },
      {
        source: "Brain / PubMed",
        title: "Sprenger et al. — Assessing the risk of central post-stroke pain of thalamic origin by lesion mapping (2012)",
        url: "https://pubmed.ncbi.nlm.nih.gov/22719000/",
      },
      {
        source: "Pain / PubMed",
        title: "Leijon & Boivie — Central post-stroke pain: a controlled trial of amitriptyline and carbamazepine (1989)",
        url: "https://pubmed.ncbi.nlm.nih.gov/2465530/",
      },
      {
        source: "Neurology / PubMed",
        title: "Vestergaard et al. — Lamotrigine for central poststroke pain: a randomized controlled trial (2001)",
        url: "https://pubmed.ncbi.nlm.nih.gov/11160953/",
      },
      {
        source: "Pain / PubMed",
        title: "Kim et al. — Safety and efficacy of pregabalin in patients with central post-stroke pain (2011)",
        url: "https://pubmed.ncbi.nlm.nih.gov/21316855/",
      },
      {
        source: "Lancet Neurol / PubMed",
        title: "Finnerup et al. — Pharmacotherapy for neuropathic pain in adults: systematic review and meta-analysis (NeuPSIG, 2015)",
        url: "https://pubmed.ncbi.nlm.nih.gov/25575710/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Stroke — patient information",
        url: "https://medlineplus.gov/stroke.html",
      },
    ],
    related: [
      {
        title: "Neuropathic pain",
        href: "/conditions/neuropathic-pain",
        blurb: "The wider nerve-pain family this condition belongs to.",
      },
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb: "The pathway the stroke damages, and the descending controls it removes.",
      },
      {
        title: "Next-generation neuromodulation",
        href: "/future-of-pain-medicine/neuromodulation",
        blurb: "Motor cortex and magnetic stimulation for refractory central pain.",
      },
    ],
  },
];
