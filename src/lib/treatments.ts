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

  {
    hub: HUB,
    slug: "medications-for-pain",
    title: "Medications for Pain",
    description:
      "The complete map of pain medications: anti-inflammatory drugs and acetaminophen, topicals, the nerve-pain medications, muscle relaxants, opioids, and the first genuinely new class in decades — what each one actually does, and why matching the drug to the pain type matters more than 'strength.'",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Pain medications are not one ladder from weak to strong — they are different tools for different mechanisms. Anti-inflammatory drugs (NSAIDs) and acetaminophen treat everyday tissue-driven pain; a separate group of nerve-pain medications treats pain from damaged nerves; opioids act on the brain's own opioid system and now sit late in modern guidelines; and a new non-opioid class arrived in 2025. The right question is not which painkiller is strongest, but which one matches your pain's mechanism.",
    faqs: [
      {
        question: "What are the main types of pain medication?",
        answer:
          "Six groups cover nearly everything: acetaminophen; NSAIDs (anti-inflammatory painkillers such as ibuprofen and naproxen); topical treatments applied to the skin; the nerve-pain medications (gabapentinoids, certain antidepressants used for their pain effects); muscle relaxants for short-term use; and opioids. A seventh arrived in 2025: suzetrigine, the first drug of a new non-opioid class that quiets pain-signaling nerves directly. Which group fits a given pain depends on its mechanism — a conversation for you and your clinician.",
      },
      {
        question: "What is the strongest painkiller?",
        answer:
          "That is the question everyone asks, and it is quietly the wrong one. 'Strength' describes potency at one receptor, not effectiveness for your pain. The most potent opioid does little for nerve pain; an anti-inflammatory can outperform it for an inflamed joint; and for sensitized-pain-system conditions like fibromyalgia, most traditional painkillers underperform movement and brain-targeted care. Effectiveness comes from matching the medication's mechanism to the pain's mechanism — which is exactly what a pain physician is trained to do.",
      },
      {
        question: "Why was I prescribed an antidepressant or a seizure medication for pain?",
        answer:
          "Because those labels describe the drug's first job, not its only one. Duloxetine and the tricyclics strengthen the spinal cord's own pain-dampening pathways; gabapentin and pregabalin calm the excitable signaling of damaged nerves. Both effects are independent of mood — the doses and timelines differ from psychiatric use, and international guidelines rank these drugs as first-line treatments for nerve pain. It is mechanism-matching, not a comment on your mental health.",
      },
      {
        question: "What is the difference between acetaminophen and ibuprofen?",
        answer:
          "Acetaminophen (Tylenol) relieves pain and lowers fever but has little effect on inflammation, and its main safety boundary is the liver — especially because it hides inside many combination cold and pain products. Ibuprofen is an NSAID: it works by damping the body's inflammatory prostaglandin chemistry, which makes it useful for inflamed tissue but brings stomach, kidney, and cardiovascular cautions with longer use. Different mechanisms, different risks — which is why pharmacists ask what else you are taking.",
      },
      {
        question: "Are there new pain medications that are not opioids?",
        answer:
          "Yes — and this is the most hopeful development in years. In January 2025 the FDA approved suzetrigine (Journavx), the first drug of a genuinely new pain-medication class in more than two decades. It blocks a sodium channel found on pain-sensing nerves outside the brain, relieving moderate-to-severe acute pain without opioid receptors, euphoria, or dependence potential. Behind it sits a deep pipeline of non-opioid candidates — tracked on our pipeline page.",
      },
    ],
    references: [
      {
        source: "NIH / MedlinePlus",
        title: "Pain relievers — patient information",
        url: "https://medlineplus.gov/painrelievers.html",
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
          "Finnerup et al. — Pharmacotherapy for neuropathic pain in adults: systematic review, meta-analysis and updated NeuPSIG recommendations",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4493167/",
      },
      {
        source: "CDC MMWR",
        title:
          "CDC Clinical Practice Guideline for Prescribing Opioids for Pain — United States, 2022",
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
          "The mechanism map this whole page is built on — know your type, know your options.",
      },
      {
        title: "The pain treatment pipeline",
        href: "/future-of-pain-medicine/pipeline",
        blurb:
          "Every notable non-opioid drug and device in development, by phase.",
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
      "The image-guided middle layer between pills and surgery: epidural injections, nerve blocks, radiofrequency ablation, spinal cord and DRG stimulators, and pumps — what each one actually does, the honest evidence, and the window rule that makes them work.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "Interventional pain procedures are the middle layer between medication and surgery: image-guided treatments delivered to the exact structure generating pain — an injection around an irritated nerve root, heat treatment of the tiny nerves serving an arthritic joint, or an implanted stimulator talking directly to the spinal cord. Their honest promise is not permanence: a well-chosen procedure buys a window of relief, and rehabilitation is what furnishes it.",
    faqs: [
      {
        question: "What are interventional pain procedures?",
        answer:
          "Targeted treatments delivered with imaging guidance to a specific pain generator. The main families: epidural steroid injections and nerve blocks; joint and trigger-point injections; radiofrequency ablation, which quiets the small nerves serving painful joints for months at a time; neuromodulation — spinal cord, dorsal root ganglion, and peripheral nerve stimulators; and implanted pumps that deliver medication directly to the spinal fluid. Each targets a different structure, which is why the diagnosis matters more than the menu.",
      },
      {
        question: "Do epidural steroid injections work?",
        answer:
          "Honestly: modestly, and mostly short-term. The best systematic review evidence shows epidural steroids provide real but modest relief for radiating nerve-root pain like sciatica, with benefits that fade over weeks to months, and little effect on ordinary back pain. That is not nothing — a rough stretch bridged, a rehab program made possible, sometimes surgery deferred while a disc resorbs on its own. The right frame is a bridge with a known span, not a repair.",
      },
      {
        question: "What is radiofrequency ablation and how long does it last?",
        answer:
          "A two-step, test-then-treat approach used most for facet-joint pain in the neck and back. First, a temporary numbing block of the small medial branch nerves answers a question: is this joint the pain source? If relief follows, radiofrequency ablation uses precisely placed heat to quiet those same nerves for longer — typically many months to a year. The nerves regrow and the procedure can be repeated. Its results live or die on that diagnostic step, which is why the block comes first.",
      },
      {
        question: "What is a spinal cord stimulator and who is it for?",
        answer:
          "An implanted device that delivers electrical pulses to the spinal cord, changing how pain signals are processed. Candidates are people with persistent nerve-related pain — painful diabetic neuropathy, complex regional pain syndrome, and pain persisting after spine surgery are the proven territories. Its most patient-friendly feature is unique in medicine: a temporary externally-worn trial lets you test-drive the therapy for about a week before deciding on the implant. Newer variants — high-frequency, closed-loop, and dorsal-root-ganglion stimulation — have strong randomized-trial results.",
      },
      {
        question: "Are procedures a substitute for physical therapy?",
        answer:
          "No — they are how physical therapy becomes possible. The pattern behind nearly every interventional success story is the same: the procedure lowers the pain enough to move, and the movement, strengthening, and retraining that follow are what hold the gains. A procedure that buys a window no one uses tends to wear off into disappointment. Arriving with the question 'what will we do with the relief?' is the difference between a cycle of injections and a trajectory.",
      },
    ],
    references: [
      {
        source: "Ann Intern Med / PubMed",
        title:
          "Chou et al. — Epidural corticosteroid injections for radiculopathy and spinal stenosis: a systematic review and meta-analysis",
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
          "Kemler et al. — Spinal cord stimulation in patients with chronic reflex sympathetic dystrophy",
        url: "https://pubmed.ncbi.nlm.nih.gov/10965008/",
      },
      {
        source: "JAMA Neurology / PubMed",
        title:
          "Petersen et al. — Effect of high-frequency (10-kHz) spinal cord stimulation in patients with painful diabetic neuropathy: a randomized clinical trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/33818600/",
      },
      {
        source: "PAIN / PubMed",
        title:
          "Deer et al. — Dorsal root ganglion stimulation yielded higher treatment success rate for complex regional pain syndrome and causalgia (ACCURATE trial)",
        url: "https://pubmed.ncbi.nlm.nih.gov/28030470/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Non-drug pain management — patient information",
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
      "Physical and behavioral therapies are the active half of pain medicine — graded movement that rebuilds the body's capacity, and brain-targeted approaches like CBT and mindfulness that turn down the pain system's amplification. Their effects are modest on average but durable, side-effect-free, and compounding — which is why they hold the strongest recommendations in most chronic pain guidelines.",
    faqs: [
      {
        question: "How can exercise reduce pain when moving is what hurts?",
        answer:
          "Because in most chronic pain, hurt does not equal harm — and movement treats the pain system itself. Exercise triggers the body's own pain-dampening chemistry, gradual loading rebuilds the strength that protects joints and spine, and each safe repetition teaches a sensitized nervous system that movement is not a threat, unwinding the fear-avoidance cycle that keeps pain loud. The craft is in the dose: started below the flare threshold and progressed gradually, movement is treatment; started with an ambush, it is a setback.",
      },
      {
        question: "Why would I see a psychologist for pain? My pain isn't in my head.",
        answer:
          "Correct — and that is not what the referral means. Pain-processing and emotion-processing circuits overlap in the brain, so therapies that work those circuits can genuinely turn pain's volume down. Across dozens of randomized trials, cognitive behavioral therapy produces reliable, usually modest reductions in pain and disability — by changing how the nervous system handles the signal, not by talking you out of a real experience. Seeing a pain psychologist is using every lever on real biology.",
      },
      {
        question: "What is pacing — and why do I crash after every good day?",
        answer:
          "The crash has a name: the boom-bust cycle. On a good day you do everything, the sensitized system flares, and the next days are lost to recovery — teaching the nervous system that activity is dangerous. Pacing replaces it: find the amount you can do even on a bad day, do that amount consistently, and increase by plan rather than by how you feel. Progress by schedule, not by symptoms. It feels slower and compounds much faster than the sawtooth it replaces.",
      },
      {
        question: "Does mindfulness actually help pain?",
        answer:
          "In good trials, yes — modestly and honestly. In a randomized trial for chronic low back pain, mindfulness-based stress reduction improved pain and function more than usual care and performed on par with cognitive behavioral therapy, with gains persisting at one year. Mindfulness does not make pain vanish; it changes the relationship between the signal and the suffering, and it trains the attention and threat systems that set pain's volume. As one tool in an active plan, it earns its place.",
      },
      {
        question: "What should good physical therapy for chronic pain look like?",
        answer:
          "Active, graded, and yours. A good program is built around things you do — progressive exercise, movement retraining, a home plan that advances — with passive treatments like heat or massage in supporting roles at most. It starts where you actually are, progresses by plan, treats flares as information rather than failure, and has a graduation goal: you, running your own program. Passive-only care that never changes and never ends is the pattern to walk away from.",
      },
    ],
    references: [
      {
        source: "Cochrane / PubMed",
        title:
          "Geneen et al. — Physical activity and exercise for chronic pain in adults: an overview of Cochrane Reviews",
        url: "https://pubmed.ncbi.nlm.nih.gov/28436583/",
      },
      {
        source: "Cochrane / PubMed",
        title:
          "Williams et al. — Psychological therapies for the management of chronic pain (excluding headache) in adults",
        url: "https://pubmed.ncbi.nlm.nih.gov/32794606/",
      },
      {
        source: "JAMA / PubMed",
        title:
          "Cherkin et al. — Effect of mindfulness-based stress reduction vs cognitive behavioral therapy or usual care on back pain and functional limitations",
        url: "https://pubmed.ncbi.nlm.nih.gov/27002445/",
      },
      {
        source: "BMJ / PubMed",
        title:
          "Kamper et al. — Multidisciplinary biopsychosocial rehabilitation for chronic low back pain: Cochrane systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/25694111/",
      },
      {
        source: "BMJ / PubMed",
        title:
          "Wang et al. — Effect of tai chi versus aerobic exercise for fibromyalgia: comparative effectiveness randomized controlled trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/29563100/",
      },
      {
        source: "NIH / MedlinePlus",
        title: "Non-drug pain management — patient information",
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
    slug: "comparing-your-options",
    title: "Comparing Your Options",
    description:
      "An honest map of the pain-treatment evidence: what's well-proven, what's promising, what's weak — why almost everything helps 'modestly' on average, why modest effects stack, and how to read any treatment claim like the field does.",
    status: "sourced",
    lastUpdated: "2026-08-28",
    answer:
      "No single pain treatment wins across the board — that is the evidence's clearest finding, not a failure of it. Nearly every option helps modestly on average; treatments differ in how certain the evidence is, how long benefits last, how safe they are, and which pain mechanism they fit. The winning strategy is not finding the one big fix — it is stacking well-matched, modest, durable wins.",
    faqs: [
      {
        question: "What is the most effective treatment for chronic pain?",
        answer:
          "The honest answer is a reframe: effectiveness lives in the match, not the treatment. Nerve-pain medications outperform everything else for neuropathic pain and underperform for arthritis; exercise holds the strongest recommendations across the most conditions; a stimulator can transform the right candidate and does nothing for the wrong one. Across trials, average effects are modest nearly everywhere — so the strongest plans combine several matched treatments rather than searching for a single dominant one.",
      },
      {
        question: "Why do all these treatments only work 'modestly'?",
        answer:
          "Because trial averages flatten very different individual stories. A 'modest average benefit' typically means some people improved substantially, many a little, and some not at all — blended into one number. That has two practical consequences: a modest average is not a prediction of your result, and finding your responders' treatments requires fair, sequential trials. It is also why combinations beat single agents: modest effects from different mechanisms add, and their side effects mostly don't.",
      },
      {
        question: "How can I tell whether a pain treatment claim is trustworthy?",
        answer:
          "Ask four questions of any claim: Compared with what — placebo, usual care, or nothing? In whom — people like you, or a different condition entirely? For how long — a two-week study says little about a ten-year problem? And who benefits from your yes? The red flags are consistent: one treatment claimed to work for every kind of pain, testimonials presented as data, secret mechanisms, and certainty language. Real evidence names its limits; marketing never does.",
      },
      {
        question: "Are acupuncture and supplements worth trying?",
        answer:
          "They sit in different bins. Acupuncture has been tested in an unusually rigorous individual-patient-data meta-analysis: real benefits beyond sham for several chronic pain conditions — small on average, persistent, and low-risk, which makes it a reasonable adjunct for people drawn to it. Supplements are a certainty problem: mostly unregulated products with mostly weak evidence and real interaction potential. If you use any — herbal products included — tell your clinician and pharmacist; interactions are the risk people most underestimate.",
      },
      {
        question: "How do I know if a treatment is actually working for me?",
        answer:
          "Run a fair trial on yourself: change one thing at a time; pick a functional target before you start — the walk, the workday, the sleep — rather than only a pain score; set a realistic time window with your clinician; keep a simple diary; and decide in advance what result will mean stop versus continue. This is how good pain physicians work through options, and it protects you from both quitting winners too early and riding losers too long.",
      },
    ],
    references: [
      {
        source: "Cochrane / PubMed",
        title:
          "Geneen et al. — Physical activity and exercise for chronic pain in adults: an overview of Cochrane Reviews",
        url: "https://pubmed.ncbi.nlm.nih.gov/28436583/",
      },
      {
        source: "Cochrane / PubMed",
        title:
          "Williams et al. — Psychological therapies for the management of chronic pain (excluding headache) in adults",
        url: "https://pubmed.ncbi.nlm.nih.gov/32794606/",
      },
      {
        source: "JAMA / PubMed",
        title:
          "Krebs et al. — Effect of opioid vs nonopioid medications on pain-related function in patients with chronic back pain or hip or knee osteoarthritis pain (SPACE trial)",
        url: "https://pubmed.ncbi.nlm.nih.gov/29509867/",
      },
      {
        source: "J Pain / PubMed",
        title:
          "Vickers et al. — Acupuncture for chronic pain: update of an individual patient data meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/29198932/",
      },
      {
        source: "Ann Intern Med / PubMed",
        title:
          "Chou et al. — Epidural corticosteroid injections for radiculopathy and spinal stenosis: a systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/26302454/",
      },
      {
        source: "NIH / NCCIH",
        title: "Pain: considering complementary approaches — patient information",
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
        blurb: "The selection-dependent corner — and the window rule.",
      },
    ],
  },
];
