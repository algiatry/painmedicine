import Link from "next/link";
import { JournalSequence } from "@/components/science/JournalFigure";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import TreatmentPathwayInteractive from "../science/TreatmentPathwayInteractive";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

function MapFigure() {
  return (
    <JournalSequence
      title="Where pain medications act"
      description="Examples by site and mechanism along the pain pathway: anti-inflammatory medications at tissue, signal blockers at the nerve, medications affecting spinal signaling, and centrally acting medications."
      caption="Where pain medications act along the pathway from tissue to brain. Each family intervenes at a different point, which is why no single 'painkiller' covers every pain."
      stages={[
        { name: "Tissue", lines: ["NSAIDs reduce inflammatory signaling."] },
        { name: "Nerve", lines: ["Suzetrigine blocks signal transmission.", "Topicals include lidocaine and capsaicin."] },
        { name: "Spinal cord", lines: ["Gabapentinoids calm sensitized signaling.", "SNRIs and tricyclics affect pain control."] },
        { name: "Brain", lines: ["Opioids act centrally.", "Acetaminophen: mechanism debated."] },
      ]}
    />
  );
}

/**
 * Figure 2 – match the mechanism: which families fit which pain type,
 * including the notable poor fit in each column.
 */
function MatchFigure() {
  const cols = [
    {
      x: 24,
      title: "Nociceptive",
      sub: "tissue & inflammation",
      fits: ["NSAIDs", "Acetaminophen", "Topical NSAIDs"],
      miss: "Nerve-pain drugs",
    },
    {
      x: 244,
      title: "Neuropathic",
      sub: "nerve damage",
      fits: ["Gabapentinoids", "SNRIs · tricyclics", "Topical lidocaine"],
      miss: "NSAIDs",
    },
    {
      x: 464,
      title: "Nociplastic",
      sub: "sensitized pain system",
      fits: ["Exercise & brain-targeted care", "Duloxetine (modest)"],
      miss: "Opioids",
    },
  ];
  return (
    <Figure caption="Match the mechanism: what tends to help each pain type, and the famous poor fit in each column. Mixed pain is common, which is why real regimens are often combinations (Finnerup 2015; ACP; CDC 2022).">
      <svg
        role="img"
        aria-labelledby="match-title match-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="match-title">Which medications fit which pain type</title>
        <desc id="match-desc">
          Three columns for nociceptive, neuropathic, and nociplastic pain.
          Each lists the medication families with evidence for that type,
          marked with teal dots, and one notable poor fit marked with a cross:
          nerve-pain drugs for nociceptive pain, NSAIDs for neuropathic pain,
          opioids for nociplastic pain.
        </desc>

        {cols.map((c) => (
          <g key={c.title}>
            <rect x={c.x} y="20" width="192" height="264" rx="14" fill={FIG.paper} stroke={FIG.soft} strokeWidth="1.5" />
            <text x={c.x + 96} y="52" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
              {c.title}
            </text>
            <text x={c.x + 96} y="71" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
              {c.sub}
            </text>
            <line x1={c.x + 20} y1="84" x2={c.x + 172} y2="84" stroke={FIG.soft} strokeWidth="1.5" />
            {c.fits.map((f, i) => (
              <g key={f}>
                <circle cx={c.x + 30} cy={108 + i * 36} r="5" fill={FIG.nerve} />
                <text x={c.x + 44} y={112 + i * 36} fontSize="12.5" fontWeight="600" fill={FIG.text}>
                  {f}
                </text>
              </g>
            ))}
            <g stroke={FIG.faint} strokeWidth="2.4" strokeLinecap="round">
              <line x1={c.x + 25} y1="239" x2={c.x + 35} y2="249" />
              <line x1={c.x + 35} y1="239" x2={c.x + 25} y2="249" />
            </g>
            <text x={c.x + 44} y="248" fontSize="12.5" fill={FIG.muted}>
              {c.miss} – poor fit
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function MedicationsForPain() {
  return (
    <div>
      <P>
        Walk down any pharmacy aisle and the shelf says &ldquo;pain
        relievers,&rdquo; as if pain were one thing and relief were one
        substance. It isn&rsquo;t, and this is the single most useful idea on
        this page: painkillers are not a ladder from weak to strong.
        They are <strong>different tools that act at different points</strong>{" "}
        on the pathway between an injured tissue and the brain that feels it.
        A medication that transforms one person&rsquo;s arthritis can do
        nothing for another person&rsquo;s nerve pain. Neither pain is less real.
        The mechanisms differ. Match the tool
        to the mechanism and modest drugs work well; mismatch them and even
        potent ones fail.
      </P>

      <TreatmentPathwayInteractive />

      <KeyTakeaways
        items={[
          <>
            Painkillers are not a ladder from weak to strong; they are <strong>different tools that act at different points</strong> on the pain pathway.
          </>,
          <>
            Relief comes from <strong>mechanism match</strong>, not potency: a modest drug that fits beats a powerful one that does not.
          </>,
          <>
            Pain medications treat the <strong>symptom, not the cause</strong>, so they work best as one part of a plan that also addresses what set the pain off.
          </>,
          <>
            A good pain reliever is used <strong>for a defined purpose and period</strong>, with a plan for what &ldquo;working&rdquo; looks like and when to stop.
          </>,
        ]}
      />

      <H2 id="what-are-pain-medications">What are pain medications?</H2>
      <P>
        Pain medications – pain relievers, or <em>analgesics</em> in the
        clinic – are drugs that reduce pain by acting at some point on the
        pathway that carries a pain signal from injured tissue, through the
        nerves and spinal cord, to the brain. Some are sold over the counter:
        acetaminophen, the anti-inflammatory NSAIDs such as ibuprofen and
        naproxen, aspirin, and the gels and patches applied to the skin. Others
        require a prescription: the nerve-pain medications, muscle relaxants,
        opioids, and the new sodium-channel blocker approved in 2025. What
        every one of them has in common is that it treats the{" "}
        <em>symptom</em>. A pain reliever turns the alarm down; it does not
        repair what set the alarm off. That is why medications work best as
        one part of a plan that also addresses the cause, and why{" "}
        <Link href="/treatments/comparing-your-options" className={link}>
          almost every pain treatment, drugs included, helps &ldquo;modestly&rdquo; on its own
        </Link>
        .
      </P>

      <H2 id="types">The different types of pain relievers, at a glance</H2>
      <P>Seven groups cover nearly everything on the shelf and the prescription pad:</P>
      <ul className="mt-4 mb-6 space-y-3 text-body">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>Acetaminophen</strong> (Tylenol, paracetamol) – works mostly
          centrally; little effect on inflammation; the liver is its safety
          boundary.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>NSAIDs</strong> (ibuprofen, naproxen, aspirin, prescription
          relatives) – damp the inflammatory chemistry at the site of injury;
          stomach, kidney, and heart cautions with longer use.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>Topicals</strong> (NSAID gels, lidocaine, capsaicin) – act
          where they are applied with little reaching the bloodstream.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>Nerve-pain medications</strong> (gabapentin, pregabalin,
          duloxetine, the tricyclics) – calm sensitized nerves or strengthen
          the body&rsquo;s own pain brakes; first-line for nerve pain.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>Muscle relaxants</strong>: a short bridge through painful
          spasm; drowsiness is the common tax.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>Opioids</strong>: turn the alarm down at the spinal cord and
          brain; essential for severe acute, surgical, and cancer pain; late
          in modern guidelines for long-term non-cancer pain.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>Suzetrigine</strong>: the first drug of a new non-opioid
          class (2025); blocks a sodium channel on pain-sensing nerves.
          </span>
        </li>
      </ul>
      <P>
        Each group is covered in its own section below. First, the picture
        that makes the list make sense.
      </P>

      <H2 id="the-map">The map: where each family acts</H2>
      <MapFigure />
      <P>
        Reading the map from top to bottom: at the <strong>tissue</strong>,
        anti-inflammatory drugs blunt the chemical alarm of injury. At the{" "}
        <strong>nerve</strong>, local anesthetics, and now a new drug class,
        quiet the signal in transit. At the <strong>spinal cord</strong>, some
        medications calm sensitized signaling while others strengthen the
        body&rsquo;s own descending &ldquo;brakes.&rdquo; And in the{" "}
        <strong>brain</strong>, opioids and acetaminophen work on how loudly
        the alarm is experienced. The stations are the same ones described in{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          how pain works
        </Link>{" "}
        – every pain medication ever made is an intervention somewhere on that
        pathway.
      </P>

      <H2 id="everyday">The everyday two: acetaminophen and the NSAIDs</H2>
      <P>
        The{" "}
        <Link href="/treatments/acetaminophen-and-nsaids" className={link}>
          acetaminophen and NSAIDs
        </Link>{" "}
        page covers how they differ (central versus tissue), the stacking
        trap in combination cold medicines, and why stomach, kidney, and
        heart history decide whether ibuprofen is ordinary or unwise. The{" "}
        <Link href="/treatments/medication-organ-safety" className={link}>
          organ-safety
        </Link>{" "}
        page is the health-history half.
      </P>

      <H2 id="topicals">Topicals: relief without the body-wide dose</H2>
      <P>
        Some of the most quietly useful pain medications never have to
        travel through the stomach. The{" "}
        <Link href="/treatments/topicals-for-pain" className={link}>
          topical treatments
        </Link>{" "}
        page covers diclofenac gel, lidocaine, and capsaicin in depth:
        which joints they can reach, what the osteoarthritis trials add
        over rubbing, and why a hip is not a knee.
      </P>

      <H2 id="nerve-pain">The nerve-pain medications, and their confusing names</H2>
      <P>
        If your physician offers an &ldquo;antidepressant&rdquo; or a
        &ldquo;seizure medication&rdquo; for pain, nothing is being implied
        about your mind. These drugs earned their names from their first
        jobs, but they have a second, independent pharmacology. The{" "}
        <Link href="/treatments/antidepressants-and-anticonvulsants" className={link}>
          antidepressants and anticonvulsants for pain
        </Link>{" "}
        page covers duloxetine, the tricyclics, gabapentin, and pregabalin
        in depth: where the evidence holds, where a sciatica trial found
        nothing, and the breathing warning when gabapentinoids sit next to
        sedating drugs.
      </P>

      <H2 id="muscle-relaxants">Muscle relaxants, briefly</H2>
      <P>
        For painful muscle spasm (the seized-up back, the wry neck)
        clinicians sometimes add a short course. The{" "}
        <Link href="/treatments/muscle-relaxants-for-pain" className={link}>
          muscle relaxants
        </Link>{" "}
        page covers what the name hides: most of these pills sedate the
        nervous system, the evidence is days not months, and adding
        cyclobenzaprine to naproxen did not improve function at one week
        in an emergency-department trial.
      </P>

      <H2 id="opioids">Opioids: the picture</H2>
      <P>
        Morphine-class drugs remain essential for severe acute pain,
        surgery, cancer pain, and comfort at the end of life. For
        long-term non-cancer pain the picture is more sobering. The{" "}
        <Link href="/treatments/opioid-stewardship" className={link}>
          stewardship
        </Link>
        ,{" "}
        <Link href="/treatments/opioids-for-acute-pain" className={link}>
          acute-pain evidence
        </Link>
        , and{" "}
        <Link href="/treatments/tapering-opioids" className={link}>
          tapering
        </Link>{" "}
        pages carry that depth. If use has become hard to control, the
        SAMHSA helpline is 1-800-662-4357.
      </P>

      <H2 id="new-class">The first new class in decades</H2>
      <P>
        In January 2025 the FDA approved{" "}
        <Link href="/treatments/suzetrigine" className={link}>
          suzetrigine (Journavx)
        </Link>
        , a NaV1.8 blocker for moderate-to-severe acute pain. The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pipeline
        </Link>{" "}
        tracks what comes after it.
      </P>

      <H2 id="good-pain-reliever">What is a good pain reliever?</H2>
      <P>
        A good pain reliever is defined by three things, and none of them is
        potency. It <strong>matches the mechanism</strong> of your pain: for a
        sprain, a sore joint, a dental ache, or a back strain, that is usually
        acetaminophen or an NSAID – the American College of Physicians lists
        them first among medications for low back pain, and nothing stronger
        does that job better. For burning, shooting, or electric nerve pain it
        is usually a nerve-pain medication, and the everyday painkillers
        underperform. It carries the <strong>lowest risk for your body</strong>{" "}
        – which depends on your liver, kidneys, heart, stomach, and the other
        medicines you take, not on the drug alone. And it is used{" "}
        <strong>for a defined purpose and period</strong>, with a plan for
        what &ldquo;working&rdquo; looks like and when to stop. A modest drug
        that fits all three beats a powerful one that fits none.
      </P>

      <H2 id="right-for-you">Which pain reliever is right for you?</H2>
      <P>
        This page can describe the match; only a clinician or pharmacist who
        knows your history can make it. But the questions they will ask are
        knowable in advance, and arriving with the answers makes the
        conversation better.
      </P>
      <ul className="mt-4 mb-6 space-y-3 text-body">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>What kind of pain is it?</strong> Aching, throbbing,
          swollen, worse with use – that points to tissue and inflammation,
          where acetaminophen and the NSAIDs fit. Burning, shooting, electric,
          with numbness or tingling – that points to{" "}
          <Link href="/conditions/neuropathic-pain" className={link}>
            nerve pain
          </Link>
          , where the nerve-pain medications fit. Widespread, exhausting,
          worse with poor sleep – that points to a{" "}
          <Link href="/understanding-pain/types-of-pain" className={link}>
            sensitized pain system
          </Link>
          , where movement and brain-targeted care outperform any pill.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>What does your health history rule out?</strong> Liver
          disease or regular alcohol use argues for caution with
          acetaminophen. Kidney disease, heart disease, high blood pressure,
          a history of ulcers or stomach bleeding, or a blood thinner argues
          for caution with NSAIDs. Age past the mid-sixties raises both sets of
          cautions. The organ-by-organ detail is on our{" "}
          <Link href="/treatments/medication-organ-safety" className={link}>
            medication safety page
          </Link>
          .
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>Where is the pain?</strong> One findable place (a knee, a
          patch of post-shingles skin) may suit a topical, which keeps the
          risk local. Pain that is everywhere does not.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>What else are you taking?</strong> Acetaminophen hides in
          hundreds of combination products; NSAIDs interact with blood
          pressure medicines, blood thinners, and each other. A pharmacist
          can check this in minutes.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>
          <strong>How long has it hurt?</strong> A short course for a new
          injury and a plan for a problem that has lasted months are different
          decisions. Pain that persists past three months deserves a
          mechanism-based look, not a longer prescription of the same thing.
          </span>
        </li>
      </ul>
      <P>
        If the answers point in different directions (nerve-type pain in
        someone who cannot use NSAIDs and has not responded to a first
        nerve-pain drug, for example) that is not a dead end. It is the
        situation a{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain physician
        </Link>{" "}
        exists to work through.
      </P>

      <H2 id="strongest">&ldquo;Strongest&rdquo; is the wrong question</H2>
      <MatchFigure />
      <P>
        The most searched question about pain relievers is which one is
        strongest, and the figure above is the answer the question deserves.
        Potency measures grip on one receptor; relief comes from{" "}
        <strong>mechanism match</strong>. Nerve-pain drugs underwhelm for a
        sprained ankle. NSAIDs underwhelm for neuropathy. Opioids underwhelm
        for the sensitized-system pain of fibromyalgia, where movement and
        brain-targeted care outperform them. And because long-lasting pain is
        so often{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          mixed-mechanism
        </Link>
        , real-world regimens are often thoughtful combinations of modest
        tools rather than one powerful one. That is not settling
        for less; it is how the pharmacology works.
      </P>

      <H2 id="ask">Questions worth bringing to your clinician</H2>
      <P>
        This page describes; your clinician prescribes. The conversation goes
        further if you arrive with the right questions: <em>Which mechanism
        do you think is driving my pain, and does this medication target
        it? What should improve, by when, and how will we decide whether
        it&rsquo;s working? What are the risks with my other medications and
        my health history? Is a topical option worth trying first? What is
        the plan for stopping?</em> A medication trial with a defined goal
        and an exit plan is modern pain medicine working as designed, and if
        your current regimen has grown without ever being re-examined, that
        review is exactly what{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          a pain specialist
        </Link>{" "}
        is for.
      </P>
    </div>
  );
}
