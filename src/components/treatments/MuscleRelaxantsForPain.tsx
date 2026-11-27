import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

function TwoJobsFigure() {
  return (
    <Figure caption="Most pills called muscle relaxants do not act on the muscle. They sedate the central nervous system. A smaller family, used for true spasticity after spinal-cord or brain injury, does act on spinal circuits. Mixing the two jobs is how a seized-up back gets treated as if it were a neurologic disease.">
      <svg
        role="img"
        aria-labelledby="mr-jobs-title mr-jobs-desc"
        viewBox="0 0 700 168"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="mr-jobs-title">Two jobs sharing one name</title>
        <desc id="mr-jobs-desc">
          Two panels: antispasmodics such as cyclobenzaprine that sedate the
          nervous system for acute back or neck spasm, and antispasticity
          drugs such as baclofen and tizanidine used for neurologic
          spasticity.
        </desc>
        <rect
          x="16"
          y="16"
          width="324"
          height="136"
          rx="12"
          fill={FIG.signalGround}
          stroke={FIG.signal}
          strokeOpacity="0.45"
        />
        <text
          x="178"
          y="44"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          Acute spasm
        </text>
        <text
          x="178"
          y="72"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          cyclobenzaprine, methocarbamol
        </text>
        <text
          x="178"
          y="94"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          tizanidine, metaxalone
        </text>
        <text
          x="178"
          y="124"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          mostly sedation, days not months
        </text>
        <rect
          x="360"
          y="16"
          width="324"
          height="136"
          rx="12"
          fill={FIG.nerveGround}
          stroke={FIG.nerveDark}
          strokeOpacity="0.45"
        />
        <text
          x="522"
          y="44"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          Neurologic spasticity
        </text>
        <text
          x="522"
          y="72"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          baclofen, tizanidine, dantrolene
        </text>
        <text
          x="522"
          y="94"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          spinal-cord and brain injury, MS
        </text>
        <text
          x="522"
          y="124"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          a different disease, a different job
        </text>
      </svg>
    </Figure>
  );
}

function EvidenceFigure() {
  return (
    <Figure caption="ACP 2017 listed skeletal muscle relaxants as an option for acute low back pain if a drug is wanted. Cashin's 2021 review found the average pain drop may not clear a clinically important bar, with plenty of drowsiness. Friedman's emergency-department trial found adding cyclobenzaprine to naproxen did not improve function at one week.">
      <svg
        role="img"
        aria-labelledby="mr-ev-title mr-ev-desc"
        viewBox="0 0 700 150"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="mr-ev-title">Three evidence snapshots</title>
        <desc id="mr-ev-desc">
          Three panels: ACP lists them as an acute option, Cashin finds a
          small average effect with adverse effects, and Friedman found no
          add-on to naproxen in the emergency department.
        </desc>
        {[
          { x: 16, t: "ACP 2017", l: ["acute back option", "if a drug is wanted"] },
          { x: 242, t: "Cashin 2021", l: ["small average drop", "may not be meaningful"] },
          { x: 468, t: "Friedman 2015", l: ["naproxen already on", "add-on did not help"] },
        ].map((p) => (
          <g key={p.t}>
            <rect
              x={p.x}
              y={16}
              width="216"
              height="118"
              rx="12"
              fill={FIG.nerveGround}
              stroke={FIG.nerve}
              strokeOpacity="0.4"
            />
            <text
              x={p.x + 108}
              y={44}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={FIG.ink}
            >
              {p.t}
            </text>
            {p.l.map((line, i) => (
              <text
                key={line}
                x={p.x + 108}
                y={72 + i * 20}
                textAnchor="middle"
                fontSize="12"
                fill={FIG.textMid}
              >
                {line}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function MuscleRelaxantsForPain() {
  return (
    <div>
      <P>
        The name oversells the mechanism. Most drugs labeled muscle
        relaxants do not loosen a knotted muscle the way a massage does.
        They quiet the central nervous system. Drowsiness is not a side
        effect off to the side of the benefit; for many of these pills it
        is close to the benefit. They are a short course for a seized-up{" "}
        <Link href="/conditions/low-back-pain" className={link}>
          back
        </Link>{" "}
        or{" "}
        <Link href="/conditions/neck-pain" className={link}>
          neck
        </Link>
        , not a maintenance plan, and not a different, stronger
        painkiller.
      </P>

      <KeyTakeaways
        items={[
          <>
            Most of these pills are <strong>sedatives with a spasm
            label</strong>, not local muscle drugs.
          </>,
          <>
            ACP lists them as an option for{" "}
            <strong>acute low back pain</strong> if a medicine is wanted.
            Cashin&rsquo;s 2021 review found the average pain drop may
            not be clinically important.
          </>,
          <>
            Adding cyclobenzaprine to naproxen in an emergency-department
            trial <strong>did not improve function at one week</strong>.
          </>,
          <>
            They are a <strong>bridge of days</strong>. Little evidence
            supports staying on them. Carisoprodol is a controlled
            substance because of misuse.
          </>,
        ]}
      />

      <H2 id="name">Why the name misleads</H2>
      <TwoJobsFigure />
      <P>
        Cyclobenzaprine (Flexeril), methocarbamol (Robaxin), metaxalone
        (Skelaxin), and tizanidine (Zanaflex) are the names people meet
        after a seized-up back. They are antispasmodics: they act in the
        brain and spinal cord, not at the muscle fiber. Baclofen and
        dantrolene belong to a different conversation, true spasticity
        after spinal-cord injury, multiple sclerosis, or cerebral palsy.
        Tizanidine sits in both catalogs. A prescription written for a
        weekend of back spasm is not a diagnosis of a neurologic disease.
      </P>

      <H2 id="numbers">What the evidence measured</H2>
      <EvidenceFigure />
      <P>
        The American College of Physicians&rsquo; 2017 low-back guideline
        says that if a drug is wanted for acute or subacute pain,
        NSAIDs or skeletal muscle relaxants have moderate-quality
        evidence. That is a ranking of options, not a requirement to add
        a third pill. Cashin and colleagues&rsquo; 2021 systematic review
        in The BMJ looked across 49 trials: muscle relaxants might reduce
        pain in the first two weeks, but the average reduction may not
        reach a clinically important difference, and adverse events
        (mostly drowsiness, dizziness, and other central-nervous-system
        effects) were common. The two sentences can sit together. A
        guideline can list a class and a later review can shrink what
        that listing is worth.
      </P>
      <P>
        Friedman&rsquo;s 2015 randomized trial in JAMA enrolled people
        leaving an emergency department with acute, non-radicular back
        pain, all on naproxen. Adding cyclobenzaprine did not improve
        function or pain at one week compared with adding placebo. If
        the anti-inflammatory is already on board, the extra tablet is
        often extra sedation, not extra recovery.
      </P>

      <H2 id="risks">The tax, and the one that is controlled</H2>
      <P>
        Sleepiness, fog, and unsteadiness are the usual price, worse
        with alcohol or other sedating drugs, worse in older adults.
        Tizanidine can drop blood pressure. Cyclobenzaprine is
        chemically close to the old tricyclic antidepressants and
        carries some of the same cautions. Carisoprodol (Soma) is a
        U.S. Schedule IV controlled substance because it is metabolized
        to meprobamate and has a misuse history; it is a poor default
        for a weekend of spasm. None of these is a vitamin, and none
        should be stopped suddenly after weeks of daily use without
        asking the prescriber.
      </P>

      <H2 id="fit">How this sits with everything else</H2>
      <P>
        A short course is meant to make the next few nights tolerable
        so{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          movement
        </Link>{" "}
        can start, not to replace it. The{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications map
        </Link>{" "}
        is the wider landscape; muscle relaxants are one corner of it,
        next to acetaminophen and NSAIDs for tissue-driven pain, not
        next to the{" "}
        <Link href="/treatments/antidepressants-and-anticonvulsants" className={link}>
          nerve-pain tablets
        </Link>
        . Questions for the visit: is this a few days of spasm or a
        chronic plan, what else is already on board that sedates, and
        what happens when the course ends.
      </P>
    </div>
  );
}
