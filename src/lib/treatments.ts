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
      "What kratom is, how mitragynine acts on opioid receptors, what the evidence says about pain relief, the real risks – dependence, interactions, unregulated products – and where the law stands on concentrated 7-OH.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Kratom is a Southeast Asian tree whose leaves contain mitragynine, a compound that acts on the same opioid receptors as prescription painkillers – though not in the same way. Roughly 1.7 million Americans use it each year, many for pain. It is not FDA-approved, the products are largely unregulated, and the evidence for pain relief, while real, is early and thin.",
    faqs: [
      {
        question: "Is kratom an opioid?",
        answer:
          "Not botanically – the kratom tree is in the coffee family. But its main active compound, mitragynine, is a partial agonist at mu-opioid receptors, the same receptors morphine acts on. Scientists often call it an 'atypical opioid': opioid-receptor activity is central to how it works, which is also why dependence and withdrawal are real risks.",
      },
      {
        question: "Does kratom actually work for chronic pain?",
        answer:
          "Nobody knows yet with the kind of evidence pain medicine relies on. Millions of users report relief in surveys, and one small placebo-controlled trial found kratom significantly increased pain tolerance. But no large randomized trial has ever tested kratom in people with chronic pain, so its true benefit – and how it compares to proven treatments – remains unmeasured.",
      },
      {
        question: "Is kratom legal in the United States?",
        answer:
          "Leaf kratom is not a federally controlled substance, but it is not FDA-approved for any use, and a handful of states ban it while others regulate it under Kratom Consumer Protection Acts. In 2026 the DEA began temporarily scheduling the concentrated-7-OH corner of the market: three synthetic 7-OH-related compounds entered Schedule I on August 26, 2026, and an order covering concentrated 7-hydroxymitragynine itself is still pending – moves aimed at potent extracts and tablets, not the traditional leaf.",
      },
      {
        question: "Is kratom addictive?",
        answer:
          "It can be. Regular use can produce physical dependence, and stopping can cause an opioid-like withdrawal – irritability, muscle aches, insomnia, runny nose, low mood. Risk appears higher with frequent use and with concentrated extracts. If stopping feels hard, treatment approaches used for opioid dependence can help; the SAMHSA helpline (1-800-662-4357) is a free, confidential place to start.",
      },
      {
        question: "What is 7-OH, and why is it treated differently?",
        answer:
          "7-hydroxymitragynine (7-OH) is a minor alkaloid in kratom leaf – present only in traces, but far more potent at opioid receptors than mitragynine. Manufacturers began selling concentrated or synthetic 7-OH tablets that the FDA says are 'not kratom' but effectively novel opioid products, and in 2026 the DEA moved against them: three synthetic 7-OH relatives entered Schedule I on August 26, 2026, and a temporary order for high-concentration 7-OH itself is still pending.",
      },
      {
        question: "Can I use kratom alongside my pain medications?",
        answer:
          "Talk with your physician before combining kratom with anything – and tell them if you already use it. Kratom is processed by the same liver enzymes as many common drugs, and nearly all kratom-involved deaths involved other substances, most often opioids or sedatives. It also matters before surgery or anesthesia. This is a conversation worth having openly; a good clinician will not dismiss it.",
      },
    ],
    references: [
      {
        source: "NIH / NIDA",
        title: "Kratom – research topic overview",
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
          "Vicknasingam et al. – Kratom and Pain Tolerance: A Randomized, Placebo-Controlled, Double-Blind Study (2020)",
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
          "The regulated route to new non-opioid relief – every notable candidate by phase.",
      },
      {
        title: "How pain works",
        href: "/understanding-pain/how-pain-works",
        blurb:
          "The receptors and pathways any analgesic – plant or pharmaceutical – has to work through.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "medications-for-pain",
    title: "Medications for Pain",
    seoTitle: "Pain Medications: Types of Pain Relievers and Which Is Right for You",
    description:
      "What pain medications are, the different types of pain relievers – acetaminophen, NSAIDs, topicals, the nerve-pain medications, muscle relaxants, opioids, and the first new class in decades – what makes a pain reliever 'good,' and how to tell which one is right for you by matching the drug to the pain type rather than its 'strength.'",
    status: "sourced",
    lastUpdated: "2026-10-04",
    answer:
      "Pain medications (pain relievers, or analgesics) are drugs that reduce pain by acting somewhere on the pathway between an injured tissue and the brain. They are not one ladder from weak to strong but different tools for different mechanisms: acetaminophen and anti-inflammatory NSAIDs for everyday tissue-driven pain, a separate group of nerve-pain medications for damaged nerves, opioids for severe acute and cancer pain, and a new non-opioid class approved in 2025. The right pain reliever is the one that matches your pain's mechanism and your health history – a decision to make with your clinician.",
    faqs: [
      {
        question: "What are pain medications?",
        answer:
          "Pain medications – also called pain relievers or analgesics – are drugs that reduce pain by acting at some point on the pathway that carries a pain signal from injured tissue, through the nerves and spinal cord, to the brain. Some are sold over the counter (acetaminophen, ibuprofen, naproxen, aspirin, and topical gels and patches); others require a prescription (the nerve-pain medications, muscle relaxants, opioids, and the new sodium-channel blocker suzetrigine). They treat the symptom of pain, not its cause, which is why they work alongside – not instead of – treating what is driving the pain.",
      },
      {
        question: "What are the different types of pain relievers?",
        answer:
          "Seven groups cover nearly everything: acetaminophen; NSAIDs (anti-inflammatory painkillers such as ibuprofen, naproxen, and aspirin); topical treatments applied to the skin (NSAID gels, lidocaine, capsaicin); the nerve-pain medications (gabapentinoids and certain antidepressants used for their pain effects); muscle relaxants for short-term spasm; opioids; and, since 2025, suzetrigine, the first drug of a new non-opioid class that quiets pain-signaling nerves directly. Each acts at a different point on the pain pathway, which is why no single type fits every pain.",
      },
      {
        question: "What is a good pain reliever?",
        answer:
          "A good pain reliever is the one whose mechanism matches your pain's mechanism, carries the lowest risk for your particular body, and is used for a defined purpose and period. For a sprain, a sore joint, or a dental ache, that is usually acetaminophen or an NSAID – guidelines list them first-line, and they are as effective as anything for that kind of pain. For burning or shooting nerve pain, it is usually a nerve-pain medication, and the everyday painkillers underperform. 'Good' is defined by the fit, not by potency: a modest drug that matches the pain beats a powerful one that does not.",
      },
      {
        question: "Which pain reliever is right for you?",
        answer:
          "It depends on three things your clinician or pharmacist can help you work through. First, the type of pain: tissue and inflammation point toward acetaminophen or an NSAID; nerve damage points toward the nerve-pain medications; a sensitized pain system such as fibromyalgia responds better to movement and brain-targeted care than to any painkiller. Second, your health history: liver disease and regular alcohol use argue for caution with acetaminophen, while kidney disease, heart disease, stomach ulcers, high blood pressure, and blood thinners argue for caution with NSAIDs. Third, the location: pain in one findable place may suit a topical, which keeps the risk local. No page can make that match for you – describe your pain and your other medications to a pharmacist or physician and let them do it.",
      },
      {
        question: "What is the strongest painkiller?",
        answer:
          "That is the question everyone asks, and it is quietly the wrong one. 'Strength' describes potency at one receptor, not effectiveness for your pain. The most potent opioid does little for nerve pain; an anti-inflammatory can outperform it for an inflamed joint; and for sensitized-pain-system conditions like fibromyalgia, most traditional painkillers underperform movement and brain-targeted care. Effectiveness comes from matching the medication's mechanism to the pain's mechanism – which is exactly what a pain physician is trained to do.",
      },
      {
        question: "Why was I prescribed an antidepressant or a seizure medication for pain?",
        answer:
          "Because those labels describe the drug's first job, not its only one. Duloxetine and the tricyclics strengthen the spinal cord's own pain-dampening pathways; gabapentin and pregabalin calm the excitable signaling of damaged nerves. Both effects are independent of mood – the doses and timelines differ from psychiatric use, and international guidelines rank these drugs as first-line treatments for nerve pain. It is mechanism-matching, not a comment on your mental health.",
      },
    ],
    references: [
      {
        source: "NIH / MedlinePlus",
        title: "Pain relievers – patient information",
        url: "https://medlineplus.gov/painrelievers.html",
      },
      {
        source: "NIH / MedlinePlus Medical Encyclopedia",
        title: "Over-the-counter pain relievers",
        url: "https://medlineplus.gov/ency/article/002123.htm",
      },
      {
        source: "FDA Consumer Update",
        title: "Don't Double Up on Acetaminophen",
        url: "https://www.fda.gov/consumers/consumer-updates/dont-double-acetaminophen",
      },
      {
        source: "Annals of Internal Medicine / PubMed",
        title:
          "Qaseem et al. – Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain: A Clinical Practice Guideline From the American College of Physicians (2017)",
        url: "https://pubmed.ncbi.nlm.nih.gov/28192789/",
      },
      {
        source: "NCBI StatPearls",
        title: "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK547742/",
      },
      {
        source: "NCBI StatPearls",
        title: "Acetaminophen",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK482369/",
      },
      {
        source: "Lancet Neurology / PMC",
        title:
          "Finnerup et al. – Pharmacotherapy for neuropathic pain in adults: systematic review, meta-analysis and updated NeuPSIG recommendations",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4493167/",
      },
      {
        source: "CDC MMWR",
        title:
          "CDC Clinical Practice Guideline for Prescribing Opioids for Pain – United States, 2022",
        url: "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm",
      },
      {
        source: "FDA",
        title:
          "FDA Approves Novel Non-Opioid Treatment for Moderate to Severe Acute Pain (suzetrigine, January 2025)",
        url: "https://www.fda.gov/news-events/press-announcements/fda-approves-novel-non-opioid-treatment-moderate-severe-acute-pain",
      },
    ],
    related: [
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb:
          "The mechanism map this whole page is built on – know your type, know your options.",
      },
      {
        title: "The pain treatment pipeline",
        href: "/future-of-pain-medicine/pipeline",
        blurb:
          "Every notable non-opioid drug and device in development, by phase.",
      },
      {
        title: "Pain medications & your organs",
        href: "/treatments/medication-organ-safety",
        blurb:
          "Liver, kidneys, heart, and gut – the health-history half of choosing a pain reliever.",
      },
      {
        title: "Low back pain",
        href: "/conditions/low-back-pain",
        blurb:
          "Where medications actually sit in the guideline playbook for the world's most common pain.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "interventional-procedures",
    title: "Interventional Procedures",
    description:
      "The image-guided middle layer between pills and surgery: epidural injections, nerve blocks, radiofrequency ablation, spinal cord and DRG stimulators, and pumps – what each one actually does, the honest evidence, and the window rule that makes them work.",
    status: "sourced",
    lastUpdated: "2026-10-04",
    answer:
      "Interventional pain procedures are the middle layer between medication and surgery: image-guided treatments delivered to the exact structure generating pain – an injection around an irritated nerve root, heat treatment of the tiny nerves serving an arthritic joint, or an implanted stimulator talking directly to the spinal cord. Their honest promise is not permanence: a well-chosen procedure buys a window of relief, and rehabilitation is what furnishes it.",
    faqs: [
      {
        question: "What are interventional pain procedures?",
        answer:
          "Targeted treatments delivered with imaging guidance to a specific pain generator. The main families: epidural steroid injections and nerve blocks; joint and trigger-point injections; radiofrequency ablation, which quiets the small nerves serving painful joints for months at a time; neuromodulation – spinal cord, dorsal root ganglion, and peripheral nerve stimulators; and implanted pumps that deliver medication directly to the spinal fluid. Each targets a different structure, which is why the diagnosis matters more than the menu.",
      },
      {
        question: "Do epidural steroid injections work?",
        answer:
          "Honestly: modestly, and mostly short-term. The best systematic review evidence shows epidural steroids provide real but modest relief for radiating nerve-root pain like sciatica, with benefits that fade over weeks to months, and little effect on ordinary back pain. That is not nothing – a rough stretch bridged, a rehab program made possible, sometimes surgery deferred while a disc resorbs on its own. The right frame is a bridge with a known span, not a repair.",
      },
      {
        question: "What is radiofrequency ablation and how long does it last?",
        answer:
          "A two-step, test-then-treat approach used most for facet-joint pain in the neck and back. First, a temporary numbing block of the small medial branch nerves answers a question: is this joint the pain source? If relief follows, radiofrequency ablation uses precisely placed heat to quiet those same nerves for longer – typically many months to a year. The nerves regrow and the procedure can be repeated. Its results live or die on that diagnostic step, which is why the block comes first.",
      },
      {
        question: "What is a spinal cord stimulator and who is it for?",
        answer:
          "An implanted device that delivers electrical pulses to the spinal cord, changing how pain signals are processed. Candidates are people with persistent nerve-related pain – painful diabetic neuropathy, complex regional pain syndrome, and pain persisting after spine surgery are the territories with the strongest trial evidence. Its most patient-friendly feature is unique in medicine: a temporary externally-worn trial lets you test-drive the therapy for about a week before deciding on the implant. Newer variants – high-frequency, closed-loop, and dorsal-root-ganglion stimulation – have strong randomized-trial results.",
      },
      {
        question: "What percentage of people get relief from a spinal cord stimulator, and does it wear off?",
        answer:
          "In trials, 'relief' usually means pain cut by at least half, and most well-selected candidates with nerve-type pain reach that during the temporary trial – which is why the trial comes first. Over years, benefit can fade for some people and a minority have the device removed. A 2026 meta-analysis of 669 patients found newer 'burst' stimulation beat conventional stimulation by about 1.3 points on a 10-point pain scale, with no clear difference in quality of life – a real but modest edge. The honest predictor of your result is your own trial week, not the brochure.",
      },
      {
        question: "Are procedures a substitute for physical therapy?",
        answer:
          "No – they are how physical therapy becomes possible. The pattern behind nearly every interventional success story is the same: the procedure lowers the pain enough to move, and the movement, strengthening, and retraining that follow are what hold the gains. A procedure that buys a window no one uses tends to wear off into disappointment. Arriving with the question 'what will we do with the relief?' is the difference between a cycle of injections and a trajectory.",
      },
    ],
    references: [
      {
        source: "Ann Intern Med / PubMed",
        title:
          "Chou et al. – Epidural corticosteroid injections for radiculopathy and spinal stenosis: a systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/26302454/",
      },
      {
        source: "NCBI StatPearls",
        title: "Radiofrequency Ablation",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK482387/",
      },
      {
        source: "NCBI StatPearls",
        title: "Spinal Cord Stimulator Implant",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK555994/",
      },
      {
        source: "NEJM / PubMed",
        title:
          "Kemler et al. – Spinal cord stimulation in patients with chronic reflex sympathetic dystrophy",
        url: "https://pubmed.ncbi.nlm.nih.gov/10965008/",
      },
      {
        source: "JAMA Neurology / PubMed",
        title:
          "Petersen et al. – Effect of high-frequency (10-kHz) spinal cord stimulation in patients with painful diabetic neuropathy: a randomized clinical trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/33818600/",
      },
      {
        source: "PAIN / PubMed",
        title:
          "Deer et al. – Dorsal root ganglion stimulation yielded higher treatment success rate for complex regional pain syndrome and causalgia (ACCURATE trial)",
        url: "https://pubmed.ncbi.nlm.nih.gov/28030470/",
      },
      {
        source: "Neuromodulation / PubMed",
        title:
          "Aldehri et al. – Burst vs Tonic Spinal Cord Stimulation for Chronic Neuropathic Pain: A Systematic Review and Meta-Analysis (2026)",
        url: "https://pubmed.ncbi.nlm.nih.gov/42742508/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Non-drug pain management – patient information",
        url: "https://medlineplus.gov/nondrugpainmanagement.html",
      },
    ],
    related: [
      {
        title: "Next-generation neuromodulation",
        href: "/future-of-pain-medicine/neuromodulation",
        blurb:
          "Closed-loop stimulation and where the device frontier goes next.",
      },
      {
        title: "Low back pain",
        href: "/conditions/low-back-pain",
        blurb:
          "Where injections and ablation sit in the guideline playbook for the back.",
      },
      {
        title: "Complex regional pain syndrome",
        href: "/conditions/crps",
        blurb:
          "The condition where stimulation earned its randomized-trial reputation.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "physical-and-behavioral-therapies",
    title: "Physical & Behavioral Therapies",
    description:
      "The treatments that retrain pain rather than mask it: why movement is medicine for a sensitized system, what CBT and mindfulness honestly deliver, the pacing skill that ends the boom-bust cycle, and what a good active-care program looks like.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Physical and behavioral therapies are the active half of pain medicine – graded movement that rebuilds the body's capacity, and brain-targeted approaches like CBT and mindfulness that turn down the pain system's amplification. Their effects are modest on average but durable, side-effect-free, and compounding – which is why they hold the strongest recommendations in most chronic pain guidelines.",
    faqs: [
      {
        question: "How can exercise reduce pain when moving is what hurts?",
        answer:
          "Because in most chronic pain, hurt does not equal harm – and movement treats the pain system itself. Exercise triggers the body's own pain-dampening chemistry, gradual loading rebuilds the strength that protects joints and spine, and each safe repetition teaches a sensitized nervous system that movement is not a threat, unwinding the fear-avoidance cycle that keeps pain loud. The craft is in the dose: started below the flare threshold and progressed gradually, movement is treatment; started with an ambush, it is a setback.",
      },
      {
        question: "Why would I see a psychologist for pain? My pain isn't in my head.",
        answer:
          "Correct – and that is not what the referral means. Pain-processing and emotion-processing circuits overlap in the brain, so therapies that work those circuits can genuinely turn pain's volume down. Across dozens of randomized trials, cognitive behavioral therapy produces reliable, usually modest reductions in pain and disability – by changing how the nervous system handles the signal, not by talking you out of a real experience. Seeing a pain psychologist is using every lever on real biology.",
      },
      {
        question: "What is pacing – and why do I crash after every good day?",
        answer:
          "The crash has a name: the boom-bust cycle. On a good day you do everything, the sensitized system flares, and the next days are lost to recovery – teaching the nervous system that activity is dangerous. Pacing replaces it: find the amount you can do even on a bad day, do that amount consistently, and increase by plan rather than by how you feel. Progress by schedule, not by symptoms. It feels slower and compounds much faster than the sawtooth it replaces.",
      },
      {
        question: "Does mindfulness actually help pain?",
        answer:
          "In good trials, yes – modestly and honestly. In a randomized trial for chronic low back pain, mindfulness-based stress reduction improved pain and function more than usual care and performed on par with cognitive behavioral therapy, with gains persisting at one year. Mindfulness does not make pain vanish; it changes the relationship between the signal and the suffering, and it trains the attention and threat systems that set pain's volume. As one tool in an active plan, it earns its place.",
      },
      {
        question: "What should good physical therapy for chronic pain look like?",
        answer:
          "Active, graded, and yours. A good program is built around things you do – progressive exercise, movement retraining, a home plan that advances – with passive treatments like heat or massage in supporting roles at most. It starts where you actually are, progresses by plan, treats flares as information rather than failure, and has a graduation goal: you, running your own program. Passive-only care that never changes and never ends is the pattern to walk away from.",
      },
    ],
    references: [
      {
        source: "Cochrane / PubMed",
        title:
          "Geneen et al. – Physical activity and exercise for chronic pain in adults: an overview of Cochrane Reviews",
        url: "https://pubmed.ncbi.nlm.nih.gov/28436583/",
      },
      {
        source: "Cochrane / PubMed",
        title:
          "Williams et al. – Psychological therapies for the management of chronic pain (excluding headache) in adults",
        url: "https://pubmed.ncbi.nlm.nih.gov/32794606/",
      },
      {
        source: "JAMA / PubMed",
        title:
          "Cherkin et al. – Effect of mindfulness-based stress reduction vs cognitive behavioral therapy or usual care on back pain and functional limitations",
        url: "https://pubmed.ncbi.nlm.nih.gov/27002445/",
      },
      {
        source: "BMJ / PubMed",
        title:
          "Kamper et al. – Multidisciplinary biopsychosocial rehabilitation for chronic low back pain: Cochrane systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/25694111/",
      },
      {
        source: "BMJ / PubMed",
        title:
          "Wang et al. – Effect of tai chi versus aerobic exercise for fibromyalgia: comparative effectiveness randomized controlled trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/29563100/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Non-drug pain management – patient information",
        url: "https://medlineplus.gov/nondrugpainmanagement.html",
      },
    ],
    related: [
      {
        title: "Pain and emotion",
        href: "/understanding-pain/pain-and-emotion",
        blurb:
          "The shared circuitry that makes brain-targeted therapy real biology.",
      },
      {
        title: "Pain and sleep",
        href: "/understanding-pain/pain-and-sleep",
        blurb:
          "The third active therapy: CBT-I and why sleep is a treatment target.",
      },
      {
        title: "Fibromyalgia",
        href: "/conditions/fibromyalgia",
        blurb:
          "The condition where gentleness proved itself a mechanism, not a compromise.",
      },
    ],
  },

  {

    hub: HUB,
    slug: "medication-organ-safety",
    title: "Pain Medications & Your Organs: Liver, Kidneys, Heart, and Gut",
    description:
      "The organ-by-organ safety map for the everyday pain medications: acetaminophen and the liver, NSAIDs and the kidneys, heart, blood pressure, and stomach – the established label limits printed as literacy, and the combinations that turn safe drugs into injuries.",
    status: "sourced",
    lastUpdated: "2026-09-05",
    answer:
      "The most common pain medications are safe for most adults at their established label limits – but each class concentrates its risk in a specific organ. Acetaminophen's boundary is the liver, and the danger is stacking it across combination cold and pain products. NSAIDs (ibuprofen, naproxen) stress the kidneys, raise blood pressure, carry a cardiovascular warning, and can injure the stomach. Knowing which organ each drug touches – and which combinations multiply the load – is the difference between safe use and the most common medication injuries in the country.",
    faqs: [
      {
        question: "How much acetaminophen is too much?",
        answer:
          "The established FDA adult ceiling is 4,000 milligrams in 24 hours – across every product combined. That total is the part people miss: acetaminophen hides inside prescription combination painkillers and dozens of cold, flu, sleep, and sinus products, so a person can exceed the ceiling without ever taking a tablet labeled 'Tylenol.' Regular alcohol use, fasting, and existing liver disease lower the safe amount well below the ceiling. Your own limit may be lower – confirm with your physician or pharmacist.",
      },
      {
        question: "Can ibuprofen damage my kidneys?",
        answer:
          "It can, with the risk concentrated in specific situations: dehydration, existing kidney disease, heart failure, older age, and especially the triple combination of an NSAID plus a blood-pressure medication from the ACE-inhibitor/ARB family plus a diuretic (water pill) – nephrologists call it the 'triple whammy.' The OTC self-care ceiling is 1,200 mg per day, and NSAIDs work by damping the prostaglandin chemistry your kidneys use to regulate their own blood flow. Short courses in a healthy, hydrated adult rarely cause problems; daily long-term use is a conversation for your physician.",
      },
      {
        question: "Do NSAIDs raise the risk of heart attack and stroke?",
        answer:
          "The FDA strengthened this warning in 2015: non-aspirin NSAIDs increase the chance of heart attack and stroke, the risk can begin within the first weeks of use, rises with longer use and higher doses, and is higher in people who already have heart disease or its risk factors. NSAIDs can also raise blood pressure and worsen heart failure. This does not mean a few days of ibuprofen for a sprain is dangerous – it means daily use, especially with cardiovascular risk factors, deserves a deliberate choice with your clinician.",
      },
      {
        question: "Which is safer for my stomach – acetaminophen or ibuprofen?",
        answer:
          "For the stomach specifically, acetaminophen. NSAIDs injure the stomach and intestinal lining directly – they block the prostaglandins that maintain its protective mucus – which is why they carry warnings about ulcers and GI bleeding, a risk that climbs with age, prior ulcers, blood thinners, corticosteroids, and alcohol. Acetaminophen does not share that mechanism; its boundary is the liver instead. Every class trades one organ's risk for another's, which is exactly the point of matching the drug to your health picture.",
      },
      {
        question: "What medication combinations are most dangerous for pain patients?",
        answer:
          "Three patterns dominate the injury statistics. First, hidden acetaminophen stacking – a prescription combination painkiller plus OTC cold medicine, silently doubling the liver load. Second, the kidney 'triple whammy': an NSAID layered onto an ACE-inhibitor/ARB and a diuretic. Third, opioids or sedatives combined with benzodiazepines, sleep medications, or alcohol – the combination behind most accidental overdose deaths, because each suppresses breathing through a shared pathway. A pharmacist can check your full list in minutes; bringing it to them is one of the highest-value safety steps available. And if opioids or sedative combinations are part of your life and worry is growing, the SAMHSA helpline (1-800-662-4357) is free and confidential.",
      },
    ],
    references: [
      {
        source: "FDA",
        title: "Don't Overuse Acetaminophen (consumer update)",
        url: "https://www.fda.gov/consumers/consumer-updates/dont-overuse-acetaminophen",
      },
      {
        source: "NIH / NIDDK – LiverTox",
        title: "Acetaminophen – LiverTox: Clinical and Research Information on Drug-Induced Liver Injury",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK548162/",
      },
      {
        source: "FDA",
        title:
          "Drug Safety Communication: FDA strengthens warning that non-aspirin NSAIDs can cause heart attacks or strokes (2015)",
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-strengthens-warning-non-aspirin-nonsteroidal-anti-inflammatory",
      },
      {
        source: "NCBI StatPearls",
        title: "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK547742/",
      },
      {
        source: "NIH / NIDDK",
        title: "Your Kidneys & How They Work – analgesic nephropathy and NSAID effects",
        url: "https://www.niddk.nih.gov/health-information/kidney-disease/analgesic-nephropathy",
      },
      {
        source: "Merck Manual",
        title:
          "Analgesic Nephropathy – including the NSAID + ACE inhibitor/ARB + diuretic combination",
        url: "https://www.merckmanuals.com/professional/genitourinary-disorders/tubulointerstitial-diseases/analgesic-nephropathy",
      },
    ],
    related: [
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "The class map this page zooms into – what each family does and which pain type it matches.",
      },
      {
        title: "Opioids, honestly",
        href: "/treatments/opioid-stewardship",
        blurb:
          "The mind-and-brain side of medication safety: dependence, tolerance, overdose prevention, and naloxone.",
      },
      {
        title: "The three types of pain",
        href: "/understanding-pain/types-of-pain",
        blurb:
          "Why the safest drug is the one matched to the mechanism – the foundation of every choice on this page.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "opioid-stewardship",
    title: "Opioids, Honestly: Dependence, Tolerance, and Staying Safe",
    description:
      "The mind-and-brain side of pain medication safety: how opioids actually work, the difference between dependence and addiction, tolerance and opioid-induced hyperalgesia, the overdose combinations that kill, naloxone, safe storage and disposal, and what the CDC guideline really says.",
    status: "sourced",
    lastUpdated: "2026-10-04",
    answer:
      "Opioids are powerful pain relievers that act on the brain's own opioid system – the same system that governs reward, breathing, and mood – which is why their benefits and their risks travel together. Physical dependence (the body adapts; stopping causes withdrawal) is normal physiology, not addiction; opioid use disorder is a separate, treatable medical condition. Modern guidelines place opioids late in the treatment ladder for chronic non-cancer pain, and the safety essentials are knowable: never combine with sedatives or alcohol, keep naloxone on hand, store securely, and taper rather than stop suddenly.",
    faqs: [
      {
        question: "What's the difference between dependence and addiction?",
        answer:
          "Dependence is physiology: anyone taking opioids regularly for weeks develops it, because the body adapts to the drug's presence – stopping suddenly then triggers withdrawal (aches, sweating, insomnia, anxiety, diarrhea). It is expected, not a moral failing. Opioid use disorder (addiction) is different: a medical condition marked by loss of control, craving, and continued use despite harm. Most people prescribed opioids for pain do not develop the disorder, and the distinction matters – withdrawal symptoms after a taper do not mean you are addicted, and having a use disorder does not mean you deserve anything less than treatment.",
      },
      {
        question: "What are the most dangerous opioid combinations?",
        answer:
          "One pattern kills more than any other: opioids plus another sedative. The FDA requires boxed warnings on combining opioids with benzodiazepines (alprazolam, lorazepam, diazepam) because each suppresses breathing and the effects multiply; alcohol, sleep medications, and gabapentinoids add to the same pile. CDC data show most opioid-involved overdose deaths involve more than one substance. This is also why tolerance loss is dangerous – after a break (detox, incarceration, a taper), the same previous dose can now stop breathing.",
      },
      {
        question: "What is naloxone, and should my household have it?",
        answer:
          "Naloxone (Narcan and generics) is an opioid antidote: it knocks opioids off their receptors and can restore breathing within minutes of an overdose. It is available without a prescription in all 50 states, safe for laypeople to use, and harmless if given to someone who turns out not to have opioids in their system. The CDC guideline says clinicians should offer it when prescribing opioids – especially with sedative combinations, higher doses, a history of substance use disorder, or sleep-disordered breathing – and recommends teaching household members how to use it. If anyone in your home takes opioids, having naloxone within reach is the single highest-value safety step.",
      },
      {
        question: "Can long-term opioids actually make pain worse?",
        answer:
          "Yes – a recognized phenomenon called opioid-induced hyperalgesia, where sustained opioid exposure sensitizes the pain system itself, so pain spreads, thresholds drop, and escalating doses chase diminishing returns. It is one reason the SPACE trial's finding mattered: in a year-long randomized trial for chronic back and arthritis pain, opioids performed no better than non-opioid medications on pain-related function, with more side effects. When pain keeps rising despite rising doses, that pattern itself is information worth bringing to your physician.",
      },
      {
        question: "How should opioid medications be stored and disposed of?",
        answer:
          "Locked, counted, and out of reach – most diverted prescription opioids come from friends' and relatives' medicine cabinets, not from strangers. Keep them in original containers, away from children, teens, and visitors; track how many remain. For disposal, DEA National Take Back Days and year-round pharmacy/police drop boxes are the safest route; the FDA's flush list covers the most dangerous medications (including fentanyl and oxycodone) when no take-back option exists. Never keep leftover opioids 'just in case' – the leftover supply is where much of the crisis began.",
      },
      {
        question: "If I've been on opioids for years, how do I stop safely?",
        answer:
          "Slowly, and with help – never abruptly. A medically supervised taper reduces the dose gradually so the nervous system readapts without severe withdrawal; guidelines warn that rapid or forced tapers can trigger uncontrolled pain, withdrawal, depression, and overdose if a person returns to a previous dose after losing tolerance. Successful long-term tapering usually pairs the dose reduction with non-opioid pain treatments and behavioral support. If stopping feels unmanageable, that is not failure – it is a signal that treatment works: the SAMHSA helpline (1-800-662-4357) is free, confidential, and open 24/7.",
      },
    ],
    references: [
      {
        source: "CDC MMWR",
        title:
          "CDC Clinical Practice Guideline for Prescribing Opioids for Pain – United States, 2022",
        url: "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm",
      },
      {
        source: "FDA",
        title:
          "Drug Safety Communication: FDA warns about serious risks and death when combining opioid pain or cough medicines with benzodiazepines",
        url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-warns-about-serious-risks-and-death-when-combining-opioid-pain-or-cough",
      },
      {
        source: "CDC Newsroom",
        title: "CDC Reports Nearly 24% Decline in U.S. Drug Overdose Deaths (provisional data, 2025)",
        url: "https://www.cdc.gov/media/releases/2025/2025-cdc-reports-decline-in-us-drug-overdose-deaths.html",
      },
      {
        source: "CDC National Center for Health Statistics",
        title: "Provisional Drug Overdose Death Counts (Vital Statistics Rapid Release)",
        url: "https://www.cdc.gov/nchs/nvss/vsrr/drug-overdose-data.htm",
      },
      {
        source: "SAMHSA",
        title: "National Helpline – 1-800-662-HELP (4357)",
        url: "https://www.samhsa.gov/find-help/national-helpline",
      },
      {
        source: "JAMA / PubMed",
        title:
          "Krebs et al. – Effect of opioid vs nonopioid medications on pain-related function (SPACE trial)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29509867/",
      },
      {
        source: "FDA",
        title: "Disposal of Unused Medicines: What You Should Know",
        url: "https://www.fda.gov/drugs/safe-disposal-medicines/disposal-unused-medicines-what-you-should-know",
      },
      {
        source: "NIH / NIDA",
        title: "Opioid Overdose Reversal Medications (Naloxone, Nalmefene)",
        url: "https://nida.nih.gov/research-topics/opioid-overdose-reversal-medications",
      },
    ],
    related: [
      {
        title: "Pain medications & your organs",
        href: "/treatments/medication-organ-safety",
        blurb:
          "The body side of medication safety: liver, kidneys, heart, and gut – and the combinations that multiply risk.",
      },
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "Where opioids sit in the modern class map – and the new non-opioid class that arrived in 2025.",
      },
      {
        title: "Kratom",
        href: "/treatments/kratom",
        blurb:
          "The unregulated opioid-reactor at the edge of the market – and the 2026 federal scheduling action.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "comparing-your-options",
    title: "Comparing Your Options",
    description:
      "An honest map of the pain-treatment evidence: what's well-proven, what's promising, what's weak – why almost everything helps 'modestly' on average, why modest effects stack, and how to read any treatment claim like the field does.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "No single pain treatment wins across the board – that is the evidence's clearest finding, not a failure of it. Nearly every option helps modestly on average; treatments differ in how certain the evidence is, how long benefits last, how safe they are, and which pain mechanism they fit. The winning strategy is not finding the one big fix – it is stacking well-matched, modest, durable wins.",
    faqs: [
      {
        question: "What is the most effective treatment for chronic pain?",
        answer:
          "The honest answer is a reframe: effectiveness lives in the match, not the treatment. Nerve-pain medications outperform everything else for neuropathic pain and underperform for arthritis; exercise holds the strongest recommendations across the most conditions; a stimulator can transform the right candidate and does nothing for the wrong one. Across trials, average effects are modest nearly everywhere – so the strongest plans combine several matched treatments rather than searching for a single dominant one.",
      },
      {
        question: "Why do all these treatments only work 'modestly'?",
        answer:
          "Because trial averages flatten very different individual stories. A 'modest average benefit' typically means some people improved substantially, many a little, and some not at all – blended into one number. That has two practical consequences: a modest average is not a prediction of your result, and finding your responders' treatments requires fair, sequential trials. It is also why combinations beat single agents: modest effects from different mechanisms add, and their side effects mostly don't.",
      },
      {
        question: "How can I tell whether a pain treatment claim is trustworthy?",
        answer:
          "Ask four questions of any claim: Compared with what – placebo, usual care, or nothing? In whom – people like you, or a different condition entirely? For how long – a two-week study says little about a ten-year problem? And who benefits from your yes? The red flags are consistent: one treatment claimed to work for every kind of pain, testimonials presented as data, secret mechanisms, and certainty language. Real evidence names its limits; marketing never does.",
      },
      {
        question: "Are acupuncture and supplements worth trying?",
        answer:
          "They sit in different bins. Acupuncture has been tested in an unusually rigorous individual-patient-data meta-analysis: real benefits beyond sham for several chronic pain conditions – small on average, persistent, and low-risk, which makes it a reasonable adjunct for people drawn to it. Supplements are a certainty problem: mostly unregulated products with mostly weak evidence and real interaction potential. If you use any – herbal products included – tell your clinician and pharmacist; interactions are the risk people most underestimate.",
      },
      {
        question: "How do I know if a treatment is actually working for me?",
        answer:
          "Run a fair trial on yourself: change one thing at a time; pick a functional target before you start – the walk, the workday, the sleep – rather than only a pain score; set a realistic time window with your clinician; keep a simple diary; and decide in advance what result will mean stop versus continue. This is how good pain physicians work through options, and it protects you from both quitting winners too early and riding losers too long.",
      },
    ],
    references: [
      {
        source: "Cochrane / PubMed",
        title:
          "Geneen et al. – Physical activity and exercise for chronic pain in adults: an overview of Cochrane Reviews",
        url: "https://pubmed.ncbi.nlm.nih.gov/28436583/",
      },
      {
        source: "Cochrane / PubMed",
        title:
          "Williams et al. – Psychological therapies for the management of chronic pain (excluding headache) in adults",
        url: "https://pubmed.ncbi.nlm.nih.gov/32794606/",
      },
      {
        source: "JAMA / PubMed",
        title:
          "Krebs et al. – Effect of opioid vs nonopioid medications on pain-related function in patients with chronic back pain or hip or knee osteoarthritis pain (SPACE trial)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29509867/",
      },
      {
        source: "J Pain / PubMed",
        title:
          "Vickers et al. – Acupuncture for chronic pain: update of an individual patient data meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/29198932/",
      },
      {
        source: "Ann Intern Med / PubMed",
        title:
          "Chou et al. – Epidural corticosteroid injections for radiculopathy and spinal stenosis: a systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/26302454/",
      },
      {
        source: "NIH / NCCIH",
        title: "Pain: considering complementary approaches – patient information",
        url: "https://www.nccih.nih.gov/health/pain",
      },
    ],
    related: [
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb: "The mechanism-match idea this whole map is built on.",
      },
      {
        title: "Physical & behavioral therapies",
        href: "/treatments/physical-and-behavioral-therapies",
        blurb: "The high-certainty, low-risk corner of the map, in full.",
      },
      {
        title: "Interventional procedures",
        href: "/treatments/interventional-procedures",
        blurb: "The selection-dependent corner – and the window rule.",
      },
    ],
  },
  {
    hub: HUB,
    slug: "piriformis-syndrome",
    title: "Piriformis Syndrome and the Deep Hip",
    description:
      "The sciatica that does not start at the spine: the small deep-hip muscle the sciatic nerve passes beneath, the four features that define piriformis syndrome, what the evidence honestly says, and what a physical therapy program for it is built to do.",
    status: "sourced",
    lastUpdated: "2026-09-10",
    answer:
      "Piriformis syndrome is buttock and leg pain caused when the piriformis – a small, deep hip muscle – presses on or irritates the sciatic nerve that passes beneath it. It is an uncommon but real cause of sciatica, recognized by a pattern of four features rather than any single test. First-line care is physical therapy aimed at the muscle, the hips around it, and the nerve; injections and, rarely, surgery are reserved for cases that do not settle.",
    faqs: [
      {
        question: "How is piriformis syndrome different from ordinary sciatica?",
        answer:
          "Ordinary sciatica starts at the spine, where a disc or narrowing presses on a nerve root. Piriformis syndrome starts lower and further out, in the buttock, where the piriformis muscle irritates the sciatic nerve as it leaves the pelvis. The felt pain overlaps – buttock and back of the thigh – but the pattern differs: piriformis pain is centered in the buttock rather than the back, is worse with sitting, and is reproduced by pressing over the greater sciatic notch or by positions that tension the muscle. Clinicians must rule out the spine, hip joint, and sacroiliac joint before settling on it.",
      },
      {
        question: "Is there a test that proves I have it?",
        answer:
          "No. There is no blood test or imaging finding that confirms piriformis syndrome, and the accuracy of the physical tests has not been established in properly designed studies. Clinicians diagnose it by the quartet of features found in two systematic reviews – buttock pain, worse with sitting, tenderness at the greater sciatic notch, and pain on maneuvers that tension the muscle – and by excluding other causes. A positive straight-leg raise does not rule it out.",
      },
      {
        question: "What does physical therapy for piriformis syndrome involve?",
        answer:
          "A program typically works on three fronts: easing and lengthening the piriformis and neighboring hip rotators, strengthening the hip muscles whose weakness let it overwork – especially the gluteal abductors and rotators – and gently mobilizing the sciatic nerve, alongside changes to the sitting habits that provoke it. Reviews recommend physical therapy as first-line care; the specific exercises are chosen by the therapist for the person in front of them and progressed by plan rather than by pain.",
      },
      {
        question: "Do I have the anatomical variant where the nerve goes through the muscle?",
        answer:
          "About one person in six does – a pooled analysis of more than six thousand cadavers found the variant in about 17%. But the same review found it no more common in people operated on for piriformis syndrome than in everyone else, so the variant is mostly not the cause. What the muscle is doing – spasm, thickening, shortening, irritation – matters more than the nerve's exact route.",
      },
      {
        question: "Will I need an injection or surgery?",
        answer:
          "Most people do not. In the largest published series, 79% of patients treated with an injection plus physical therapy improved by half or more, and only about one in fifteen went on to surgery. Injections into the muscle – anesthetic with steroid, or botulinum toxin – are used when a well-run program stalls, and the treatment trials suggest their benefit is modest. Surgical release is reserved for chronic cases that have exhausted everything else.",
      },
    ],
    references: [
      {
        source: "Eur Spine J / PubMed",
        title:
          "Hopayian et al. – The clinical features of the piriformis syndrome: a systematic review",
        url: "https://pubmed.ncbi.nlm.nih.gov/20596735/",
      },
      {
        source: "Eur J Orthop Surg Traumatol / PubMed",
        title:
          "Hopayian & Danielyan – Four symptoms define the piriformis syndrome: an updated systematic review of its clinical features",
        url: "https://pubmed.ncbi.nlm.nih.gov/28836092/",
      },
      {
        source: "J Bodyw Mov Ther / PubMed",
        title:
          "Hopayian et al. – A systematic review of conservative and surgical treatments for deep gluteal syndrome",
        url: "https://pubmed.ncbi.nlm.nih.gov/37949567/",
      },
      {
        source: "Arch Phys Med Rehabil / PubMed",
        title:
          "Fishman et al. – Piriformis syndrome: diagnosis, treatment, and outcome – a 10-year study",
        url: "https://pubmed.ncbi.nlm.nih.gov/11887107/",
      },
      {
        source: "Clin Anat / PubMed",
        title:
          "Smoll – Variations of the piriformis and sciatic nerve with clinical consequence: a review",
        url: "https://pubmed.ncbi.nlm.nih.gov/19998490/",
      },
      {
        source: "PM&R / PubMed",
        title:
          "Probst, Stout & Hunt – Piriformis syndrome: a narrative review of the anatomy, diagnosis, and treatment",
        url: "https://pubmed.ncbi.nlm.nih.gov/31102324/",
      },
      {
        source: "J Hip Preserv Surg / PubMed",
        title: "Martin, Reddy & Gómez-Hoyos – Deep gluteal syndrome",
        url: "https://pubmed.ncbi.nlm.nih.gov/27011826/",
      },
      {
        source: "DBCLS",
        title:
          "BodyParts3D 4.0 – anatomy geometry used for the deep-hip figure (CC BY 4.0)",
        url: "https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html",
      },
    ],
    related: [
      {
        title: "Sciatica",
        href: "/conditions/sciatica",
        blurb:
          "The nine-in-ten story – where sciatica usually starts, and why the spine is checked first.",
      },
      {
        title: "Physical & behavioral therapies",
        href: "/treatments/physical-and-behavioral-therapies",
        blurb:
          "The active-care principles every deep-hip program is built on: graded, paced, yours.",
      },
      {
        title: "Interventional procedures",
        href: "/treatments/interventional-procedures",
        blurb:
          "The guided-injection layer, for when a well-run program stalls.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "opioids-for-acute-pain",
    title: "Opioids for Acute Pain",
    seoTitle: "Do Opioids Work for Acute Pain? What the Largest Evidence Review Found",
    description:
      "What the 2026 University of Sydney overview of 59 systematic reviews actually found about opioids for short-term pain: real benefit after painful procedures and in acute abdominal pain, very small benefit for sprains and strains, none for acute back and neck pain – and why an ibuprofen-and-acetaminophen prescription is often the evidence working.",
    status: "sourced",
    lastUpdated: "2026-10-04",
    answer:
      "Sometimes, and less than most people expect. The largest overview of the evidence found opioids clearly reduce pain after painful procedures and in acute abdominal pain, but give only very small relief for sprains and strains – with about one extra person in ten getting side effects. For acute back and neck pain, a short course did no better than placebo. After surgery or major injury they remain essential.",
    faqs: [
      {
        question: "Do opioids work for acute pain?",
        answer:
          "For some kinds, yes. A 2026 overview of 59 systematic reviews found opioids lowered pain by roughly 15–20 points on a 100-point scale in the first hours after dental surgery, ear-tube surgery, and in acute abdominal pain. For acute musculoskeletal pain – sprains, strains, back and neck injuries – oral opioids gave only about 9 points of relief between six and 48 hours, which the authors called very small, and raised the risk of side effects. The honest summary is the authors' own: opioids are effective in some acute conditions, not all.",
      },
      {
        question: "Are opioids stronger than ibuprofen?",
        answer:
          "Not for most injury pain, when ibuprofen is paired with acetaminophen. In a 2017 randomized emergency-department trial of more than 400 adults with fractures, sprains, and other arm or leg injuries, a single dose of ibuprofen plus acetaminophen relieved pain as much at two hours as oxycodone, hydrocodone, or codeine combined with acetaminophen. Injury pain is largely inflammatory, and NSAIDs act on that inflammation at its source; opioids do not. Strength on paper and relief in practice are different things.",
      },
      {
        question: "Why did my doctor only give me ibuprofen after my injury?",
        answer:
          "Most likely because the evidence says it works as well for your kind of pain with fewer side effects. For sprains, strains, and non-specific back or neck pain, trials show an NSAID with acetaminophen matches opioid combinations, while opioids add nausea, drowsiness, constipation, and a small but real risk of longer-term use. If an NSAID is not safe for you – because of your stomach, kidneys, heart, or other medications – your clinician or pharmacist can explain the alternatives. If your pain is not controlled, say so; that is information they need.",
      },
      {
        question: "When are opioids appropriate for short-term pain?",
        answer:
          "When pain is severe and non-opioid options are not enough or not possible: after major surgery, serious trauma or burns, in acute abdominal emergencies, sickle-cell crises, and cancer pain. The CDC's 2022 guideline supports opioids in those settings and states its recommendations should never be used to deny needed relief. It asks prescribers to use non-opioid treatments first where they work at least as well, to prescribe the lowest effective dose for no longer than severe pain is expected to last, and to reassess rather than renew automatically.",
      },
      {
        question: "What are the risks of a short opioid prescription?",
        answer:
          "Common and usually mild: constipation, nausea, drowsiness, dizziness, itching, and impaired driving. Rare and serious: slowed breathing, especially combined with alcohol, benzodiazepines, sleep medications, or gabapentinoids, and a higher risk in older adults and people with sleep apnea or lung disease. A few days of use can also be where long-term use begins, and leftover tablets are the main source of misused prescription opioids. If opioid use has become a problem for you or someone close to you, the SAMHSA helpline (1-800-662-4357) is free and confidential, any hour.",
      },
    ],
    references: [
      {
        source: "Drugs (Mathieson, Zadro, et al., 2026)",
        title:
          "Efficacy and Harms of Opioid Analgesics for Acute Pain: Overview of Systematic Reviews and Meta-analyses",
        url: "https://pubmed.ncbi.nlm.nih.gov/41739420/",
      },
      {
        source: "The Lancet (Jones et al., 2023)",
        title:
          "Opioid analgesia for acute low back pain and neck pain (the OPAL trial): a randomised placebo-controlled trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/37392748/",
      },
      {
        source: "JAMA (Chang et al., 2017)",
        title:
          "Effect of a Single Dose of Oral Opioid and Nonopioid Analgesics on Acute Extremity Pain in the Emergency Department: A Randomized Clinical Trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/29114833/",
      },
      {
        source: "CDC MMWR",
        title:
          "CDC Clinical Practice Guideline for Prescribing Opioids for Pain – United States, 2022",
        url: "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm",
      },
      {
        source: "FDA",
        title: "Opioid Medications – information by drug class",
        url: "https://www.fda.gov/drugs/information-drug-class/opioid-medications",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Pain Relievers",
        url: "https://medlineplus.gov/painrelievers.html",
      },
      {
        source: "SAMHSA",
        title: "National Helpline – 1-800-662-HELP (4357)",
        url: "https://www.samhsa.gov/find-help/helplines/national-helpline",
      },
    ],
    related: [
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "The class map behind this page – why NSAIDs act on injury pain at its source and what each family is matched to.",
      },
      {
        title: "Opioids, honestly",
        href: "/treatments/opioid-stewardship",
        blurb:
          "Dependence versus addiction, the combinations that kill, naloxone, safe storage, and disposal – the safety side of any opioid prescription.",
      },
      {
        title: "Persistent postsurgical pain",
        href: "/conditions/persistent-postsurgical-pain",
        blurb:
          "Why pain can outlast an operation, and how a planned multimodal approach prevents a short prescription from becoming a long one.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "ketamine",
    title: "Ketamine",
    seoTitle:
      "Ketamine for Chronic Pain: What the Evidence Says and Why At-Home Use Is Different",
    description:
      "What ketamine is, how blocking the NMDA receptor turns down amplified pain signals, what the trials and the 2025 Cochrane review honestly show, why a monitored infusion differs from a mailed lozenge, and what the ASA and FDA are asking for.",
    status: "sourced",
    lastUpdated: "2026-10-04",
    answer:
      "Ketamine is a surgical anesthetic, approved since 1970, that blocks NMDA receptors – the docking sites that help pain signals grow louder in the spinal cord. Monitored IV infusions can bring short-term relief in some neuropathic and CRPS pain, but long-term evidence is weak and it is not FDA-approved for pain. At-home lozenges carry the same effects without anyone watching.",
    faqs: [
      {
        question: "Is ketamine used for chronic pain?",
        answer:
          "Yes, off-label. Pain specialists sometimes give ketamine as a monitored IV infusion for pain that has not responded to other treatments – most often complex regional pain syndrome (CRPS) and some nerve pain. The FDA has approved ketamine only as an anesthetic, so every use for chronic pain is outside its label, and professional guidelines describe it as a specialist option rather than a routine one.",
      },
      {
        question: "Does ketamine infusion work for pain?",
        answer:
          "Sometimes, for a while. A 2019 meta-analysis of seven small trials found a modest drop in pain – about 1.8 points on a 10-point scale – lasting up to two weeks after infusion. The 2025 Cochrane review was more cautious, finding no clear evidence of benefit and rating the studies low to very low certainty. Durable relief has not been shown, and responses vary a great deal between people.",
      },
      {
        question: "Is ketamine addictive?",
        answer:
          "It can be. Ketamine is a Schedule III controlled substance with recognized misuse potential; tolerance builds with repeated use, and some people come to seek its dissociative effects. Frequent use is also linked to bladder injury. A short, supervised course for pain is very different from daily use at home. If use has become hard to control, the SAMHSA helpline (1-800-662-4357) is free and confidential.",
      },
      {
        question: "Is at-home ketamine safe?",
        answer:
          "Regulators and anesthesiologists say the setting is the problem. Ketamine causes sedation, dissociation, and blood-pressure rises whether it arrives by IV or by mail; at home there is no monitor, no trained clinician, and no rescue equipment. The FDA warned in 2023 that compounded at-home ketamine carries added risk for exactly that reason, and in 2026 the ASA asked states to require in-person physician supervision.",
      },
      {
        question: "What conditions is ketamine infusion used for?",
        answer:
          "The 2018 consensus guidelines found the clearest support for complex regional pain syndrome (CRPS) and some neuropathic pain, with weaker evidence for fibromyalgia, headache, and spinal pain. Separately, a ketamine-derived nasal spray (esketamine) is FDA-approved for treatment-resistant depression under supervision in certified clinics – a different indication with its own rules.",
      },
    ],
    references: [
      {
        source: "American Society of Anesthesiologists",
        title:
          "Boom in Ketamine Clinics and At-Home Delivery Sparks Safety Concerns (news release, June 22, 2026)",
        url: "https://www.asahq.org/about-asa/newsroom/news-releases/2026/06/boom-in-ketamine-clinics-and-at-home-delivery-sparks-safety-concerns",
      },
      {
        source: "American Society of Anesthesiologists",
        title:
          "Guidance on the Safe Use of Ketamine Outside of Acute Pain Management and Procedural Sedation (updated June 2026)",
        url: "https://www.asahq.org/advocating-for-you/guidance/ketamine-safe-use",
      },
      {
        source: "Regional Anesthesia & Pain Medicine",
        title:
          "Cohen et al. – Consensus Guidelines on the Use of Intravenous Ketamine Infusions for Chronic Pain from ASRA, AAPM, and ASA (2018)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29870458/",
      },
      {
        source: "Anesthesia & Analgesia",
        title:
          "Orhurhu et al. – Ketamine Infusions for Chronic Pain: A Systematic Review and Meta-analysis of Randomized Controlled Trials (2019)",
        url: "https://pubmed.ncbi.nlm.nih.gov/31082965/",
      },
      {
        source: "Cochrane Database of Systematic Reviews",
        title:
          "Ferraro et al. – Ketamine and other NMDA receptor antagonists for chronic pain (2025)",
        url: "https://pubmed.ncbi.nlm.nih.gov/40819842/",
      },
      {
        source: "FDA",
        title:
          "Compounding Risk Alerts – including the October 10, 2023 warning on compounded ketamine products for psychiatric disorders",
        url: "https://www.fda.gov/drugs/human-drug-compounding/compounding-risk-alerts",
      },
      {
        source: "DEA Diversion Control Division",
        title: "Controlled Substances – Alphabetical Order (ketamine, Schedule III)",
        url: "https://www.deadiversion.usdoj.gov/schedules/orangebook/c_cs_alpha.pdf",
      },
      {
        source: "NIH / NIDA",
        title: "Ketamine – research topic overview",
        url: "https://nida.nih.gov/research-topics/ketamine",
      },
    ],
    related: [
      {
        title: "Complex regional pain syndrome",
        href: "/conditions/crps",
        blurb:
          "The condition with the clearest – still limited – evidence for ketamine infusion, and why catching it early matters more.",
      },
      {
        title: "Neuropathic pain",
        href: "/conditions/neuropathic-pain",
        blurb:
          "Nerve-damage pain and the amplified signaling that NMDA blockers aim at.",
      },
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "The first-line and nerve-pain medications ketamine is usually tried after.",
      },
    ],
  },

  {
    hub: HUB,
    slug: "buprenorphine-for-pain",
    title: "Buprenorphine for Chronic Pain",
    seoTitle:
      "Buprenorphine for Chronic Pain: What It Is and What the Trial Showed",
    description:
      "Buprenorphine is not only the addiction drug: a partial-agonist opioid with a ceiling on breathing suppression, approved for pain in its own products, and what the 2025 JAMA Internal Medicine trial of switching from high-dose opioids honestly showed – a large drop in opioid dose, a small gain in pain, and no difference between the groups.",
    status: "sourced",
    lastUpdated: "2026-10-04",
    answer:
      "Buprenorphine is an opioid that only partly switches on the mu-opioid receptor, so its effect on breathing reaches a ceiling that morphine and oxycodone lack. It is FDA-approved for pain in its own patch and buccal-film products, separate from the addiction formulations. In a 2025 randomized trial, people on high-dose opioids offered a switch cut their dose about 40 percent with slightly less pain – but so did those not offered it.",
    faqs: [
      {
        question: "Is buprenorphine only for addiction?",
        answer:
          "No. Buprenorphine is one of the three FDA-approved medications for opioid use disorder, and that is the role most people know. But the same molecule has been an approved pain medication in the United States for decades, in its own products: the Butrans seven-day skin patch and the Belbuca buccal film are both labeled for severe, persistent pain that needs an opioid and cannot be managed with other options. The 2022 CDC guideline also describes transitioning patients from high-dose full-agonist opioids to buprenorphine for pain. A physician who suggests it is thinking about your safety profile, not accusing you of anything.",
      },
      {
        question: "How is buprenorphine different from other opioids?",
        answer:
          "Morphine, oxycodone, and fentanyl are full agonists: they switch the opioid receptor fully on, and more drug means more effect without a natural limit. Buprenorphine is a partial agonist: it binds the receptor very tightly but activates it only part way. In controlled volunteer studies, its suppression of breathing leveled off past a certain amount – a ceiling – while fentanyl's kept rising. Its pain relief did not show the same plateau. That ceiling is the single biggest difference, though it can be overwhelmed by alcohol or sedatives, and buprenorphine still carries the full opioid class warnings.",
      },
      {
        question: "Does buprenorphine work for chronic pain?",
        answer:
          "It relieves pain – that is why it carries an FDA pain indication – but the evidence does not show it relieves chronic pain better than the opioids people are already taking. In the 2025 JAMA Internal Medicine trial, veterans on high-dose opioids who were offered a switch saw their Brief Pain Inventory score fall from 6.8 to 6.1 over a year while their opioid dose fell from about 157 to 94 morphine milligram equivalents. The group not offered buprenorphine improved almost identically. The encouraging part is that pain did not get worse as the full-agonist dose dropped substantially.",
      },
      {
        question: "What happens when you switch from oxycodone or morphine to buprenorphine?",
        answer:
          "Because buprenorphine grips the receptor so tightly, it can push a full agonist off and trigger sudden, unpleasant precipitated withdrawal if the previous opioid is still present in quantity. Clinicians avoid this in one of two general ways: a planned gap in which the old opioid wears off and mild withdrawal begins before buprenorphine starts, or a slow overlap in which very small amounts of buprenorphine are introduced while the old opioid is reduced. The right approach, timing, and amounts depend on which opioid you take and your health, so they belong with your prescriber. Expect close follow-up either way.",
      },
      {
        question: "Is buprenorphine safer than other opioids?",
        answer:
          "In one specific and important way, yes: its ceiling on breathing suppression lowers the risk that defines opioid overdose, and the CDC guideline notes it causes less respiratory depression than full agonists. But safer is not safe. Buprenorphine carries the same boxed warnings as other opioids, the ceiling does not protect against combinations with alcohol, benzodiazepines, or sleep medicines, it can affect heart rhythm, and naloxone may take more effort to reverse it. If anyone taking an opioid cannot be woken or is breathing slowly, call 911 and give naloxone. For worries about opioid use, the SAMHSA helpline, 1-800-662-4357, is free and answers around the clock.",
      },
    ],
    references: [
      {
        source: "JAMA Internal Medicine / PubMed",
        title:
          "Becker et al. – Buprenorphine, Pain, and Opioid Use in Patients Taking High-Dose Long-Term Opioids: A Randomized Clinical Trial (2025)",
        url: "https://pubmed.ncbi.nlm.nih.gov/39960730/",
      },
      {
        source: "CDC MMWR",
        title:
          "CDC Clinical Practice Guideline for Prescribing Opioids for Pain – United States, 2022 (transition to buprenorphine)",
        url: "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm",
      },
      {
        source: "FDA label via DailyMed",
        title: "Butrans (buprenorphine) transdermal system – prescribing information",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=794aa355-66de-41b8-aedf-f2c40f6bc664",
      },
      {
        source: "FDA label via DailyMed",
        title: "Belbuca (buprenorphine) buccal film – prescribing information",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bc2b7a3d-72cf-497c-95b0-ba2b71f63c64",
      },
      {
        source: "SAMHSA",
        title: "Buprenorphine – medications for opioid use disorder",
        url: "https://www.samhsa.gov/medications-substance-use-disorders/medications-counseling-related-conditions/buprenorphine",
      },
      {
        source: "British Journal of Anaesthesia / PubMed",
        title:
          "Dahan et al. – Buprenorphine induces ceiling in respiratory depression but not in analgesia (2006)",
        url: "https://pubmed.ncbi.nlm.nih.gov/16547090/",
      },
      {
        source: "British Journal of Anaesthesia / PubMed",
        title:
          "Dahan et al. – Comparison of the respiratory effects of intravenous buprenorphine and fentanyl in humans and rats (2005)",
        url: "https://pubmed.ncbi.nlm.nih.gov/15833777/",
      },
      {
        source: "Clinical Pharmacokinetics / PubMed",
        title:
          "Yassen et al. – Reversal of buprenorphine-induced respiratory depression by naloxone: a study in healthy volunteers (2007)",
        url: "https://pubmed.ncbi.nlm.nih.gov/17922561/",
      },
      {
        source: "DEA",
        title:
          "Dear Registrant letter – elimination of the DATA-Waiver (X-Waiver) program, January 12, 2023",
        url: "https://www.deadiversion.usdoj.gov/pubs/docs/A-23-0020-Dear-Registrant-Letter-Signed.pdf",
      },
      {
        source: "SAMHSA",
        title: "Waiver Elimination (MAT Act)",
        url: "https://www.samhsa.gov/substance-use/treatment/resources/mat-act",
      },
      {
        source: "SAMHSA",
        title: "National Helpline – 1-800-662-HELP (4357)",
        url: "https://www.samhsa.gov/find-help/national-helpline",
      },
    ],
    related: [
      {
        title: "Opioids, honestly",
        href: "/treatments/opioid-stewardship",
        blurb:
          "Dependence vs. addiction, tolerance and hyperalgesia, the combinations that kill, naloxone, and how tapers succeed – the context this page assumes.",
      },
      {
        title: "Medications for pain",
        href: "/treatments/medications-for-pain",
        blurb:
          "The full class map – where every long-term opioid, buprenorphine included, sits relative to the non-opioid classes that come first.",
      },
      {
        title: "Kratom",
        href: "/treatments/kratom",
        blurb:
          "Another partial agonist at the same receptor – but unregulated, untested in chronic pain, and the subject of a 2026 federal scheduling action.",
      },
    ],
  },
];
