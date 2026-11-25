import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

/**
 * Figure 1 — the trial-first pathway. Spinal cord stimulation is almost the
 * only therapy in pain medicine you test-drive before committing, so the
 * figure leads with that: evaluation, a temporary week-long trial, and a
 * branch that only reaches a permanent implant if the trial worked.
 */
function TrialPathwayFigure() {
  const steps: { n: string; title: string; body: string[]; x: number }[] = [
    {
      n: "1",
      title: "Evaluation",
      body: ["Is the pain nerve-type,", "and other options tried?"],
      x: 20,
    },
    {
      n: "2",
      title: "Temporary trial",
      body: ["Thin leads through the skin,", "worn about a week at home"],
      x: 250,
    },
    {
      n: "3",
      title: "Decision",
      body: ["About half or more relief:", "implant. If not: remove it."],
      x: 480,
    },
  ];
  return (
    <Figure caption="The pathway that sets this therapy apart. A temporary trial lets you test the effect in ordinary life before anything permanent is placed, and a weak trial is a reason not to implant. Adapted from the StatPearls overview of spinal cord stimulator implantation.">
      <svg
        role="img"
        aria-labelledby="scs-path-title scs-path-desc"
        viewBox="0 0 700 180"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="scs-path-title">The trial-first pathway</title>
        <desc id="scs-path-desc">
          Three stages left to right: evaluation, a temporary week-long trial
          worn at home, and a decision in which about half or more pain relief
          leads to a permanent implant while a weak result ends in removal.
        </desc>
        {steps.map((s, i) => (
          <g key={s.n}>
            {i > 0 && (
              <path
                d={`M${s.x - 26} 80 L${s.x - 6} 80`}
                stroke={FIG.textMid}
                strokeWidth="2"
                markerEnd="url(#scs-arrow)"
              />
            )}
            <rect
              x={s.x}
              y={30}
              width="200"
              height="100"
              rx="14"
              fill={FIG.nerveGround}
              stroke={FIG.nerveDark}
              strokeWidth="2"
            />
            <circle cx={s.x + 28} cy={60} r="13" fill={FIG.signal} />
            <text
              x={s.x + 28}
              y={65}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={FIG.white}
            >
              {s.n}
            </text>
            <text
              x={s.x + 50}
              y={58}
              fontSize="15"
              fontWeight="700"
              fill={FIG.ink}
            >
              {s.title}
            </text>
            <text x={s.x + 20} y={92} fontSize="11.5" fill={FIG.textMid}>
              {s.body[0]}
            </text>
            <text x={s.x + 20} y={110} fontSize="11.5" fill={FIG.textMid}>
              {s.body[1]}
            </text>
          </g>
        ))}
        <defs>
          <marker
            id="scs-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={FIG.textMid} />
          </marker>
        </defs>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — where the randomized evidence is strongest, each paired with the
 * trial it rests on. Keeps the page honest about which uses have the best
 * support rather than implying the device fits every kind of pain.
 */
function EvidenceFigure() {
  const cards: { title: string; body: [string, string]; x: number; y: number }[] =
    [
      {
        title: "Painful diabetic neuropathy",
        body: ["High-frequency (10 kHz)", "randomized trial, JAMA Neurology"],
        x: 20,
        y: 30,
      },
      {
        title: "Complex regional pain syndrome",
        body: ["Randomized evidence from", "Kemler (NEJM) and ACCURATE (DRG)"],
        x: 360,
        y: 30,
      },
      {
        title: "Pain after spine surgery",
        body: ["Closed-loop beat open-loop", "in the blinded EVOKE trial"],
        x: 20,
        y: 150,
      },
      {
        title: "Burst vs conventional",
        body: ["About 1.3 points better on 10,", "no clear quality-of-life gap (2026)"],
        x: 360,
        y: 150,
      },
    ];
  return (
    <Figure caption="Where the randomized evidence is strongest, and the trials behind it. The device has the best support in nerve-type pain; a 2026 meta-analysis found burst stimulation modestly ahead of conventional stimulation on pain, without a clear quality-of-life difference.">
      <svg
        role="img"
        aria-labelledby="scs-ev-title scs-ev-desc"
        viewBox="0 0 700 270"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="scs-ev-title">Where the evidence is strongest</title>
        <desc id="scs-ev-desc">
          Four cards: painful diabetic neuropathy supported by a 10 kHz
          randomized trial; complex regional pain syndrome supported by the
          Kemler and ACCURATE trials; pain after spine surgery, where
          closed-loop stimulation beat open-loop in the EVOKE trial; and a
          comparison showing burst stimulation about 1.3 points better than
          conventional on a 10-point scale, with no clear quality-of-life gap.
        </desc>
        {cards.map((c) => (
          <g key={c.title}>
            <rect
              x={c.x}
              y={c.y}
              width="320"
              height="96"
              rx="14"
              fill={FIG.signalGround}
              stroke={FIG.signalDark}
              strokeWidth="2"
            />
            <text
              x={c.x + 22}
              y={c.y + 34}
              fontSize="14.5"
              fontWeight="700"
              fill={FIG.ink}
            >
              {c.title}
            </text>
            <text x={c.x + 22} y={c.y + 58} fontSize="11.5" fill={FIG.textMid}>
              {c.body[0]}
            </text>
            <text x={c.x + 22} y={c.y + 74} fontSize="11.5" fill={FIG.textMid}>
              {c.body[1]}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function SpinalCordStimulation() {
  return (
    <div>
      <P>
        Most pain treatments are something you take or something that is done
        to you. A spinal cord stimulator is different: it is a small device,
        implanted under the skin, that sends mild electrical pulses to the
        spinal cord and changes how pain signals are handled on their way to
        the brain. It does not repair the injury underneath; it quiets a pain
        signal that has not switched off on its own. It belongs at the far end
        of the{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional ladder
        </Link>
        , after medication and less involved procedures have been tried.
      </P>

      <KeyTakeaways
        items={[
          <>
            You <strong>test-drive it before you commit</strong>: a temporary
            trial worn for about a week decides whether a permanent device goes
            in.
          </>,
          <>
            The evidence is strongest for <strong>nerve-type pain</strong>:
            painful diabetic neuropathy, complex regional pain syndrome, and
            pain that continues after spine surgery.
          </>,
          <>
            It is a <strong>pain-management tool, not a cure</strong>; benefit
            can fade over years, and a minority have the device removed.
          </>,
          <>
            Newer designs, including{" "}
            <strong>high-frequency, burst, DRG, and closed-loop</strong>{" "}
            stimulation, improve on the original in blinded trials.
          </>,
        ]}
      />

      <H2 id="how-it-works">What it is and how it works</H2>
      <P>
        The system has two parts. Thin wires called leads sit in the epidural
        space, the sliver of room just outside the spinal cord, positioned over
        the segments that carry the pain. The leads connect to a small
        pulse generator, a battery and computer about the size of a large coin,
        placed under the skin of the lower back or buttock. The generator sends
        patterned pulses to the cord, and the long-standing explanation is a
        version of the gate the{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          nervous system already uses
        </Link>{" "}
        to turn pain signals up or down. Patients control the therapy with a
        handheld remote or a phone app.
      </P>

      <H2 id="trial-first">The trial comes first</H2>
      <TrialPathwayFigure />
      <P>
        The feature that sets this therapy apart is the trial. Before anything
        permanent is placed, a clinician threads temporary leads through a
        needle, connects them to an external generator, and sends you home for
        roughly a week to live with the stimulation during ordinary activity.
        If your pain drops by about half or more, the permanent device is likely
        to help, and only then is it implanted in a short procedure. If the
        trial does not deliver, the leads come out and nothing permanent goes
        in. That week is the single best predictor of how you will do, which is
        why no reputable program skips it.
      </P>

      <H2 id="who-and-evidence">Who it helps, and what the trials show</H2>
      <EvidenceFigure />
      <P>
        Spinal cord stimulation is a treatment for persistent nerve-related
        pain, and it reads best against the conditions where randomized trials
        support it. In{" "}
        <Link href="/conditions/diabetic-neuropathy" className={link}>
          painful diabetic neuropathy
        </Link>
        , a randomized trial of high-frequency stimulation produced large,
        sustained relief that medication alone had not reached. In{" "}
        <Link href="/conditions/crps" className={link}>
          complex regional pain syndrome
        </Link>
        , the therapy earned its reputation through the Kemler trial and, later,
        dorsal root ganglion stimulation in the ACCURATE study. Pain that
        continues after spine surgery is the third established territory. Across
        these uses, most well-selected candidates reach at least a 50% reduction
        during the trial, and that result, not a brochure average, is the number
        that matters for you.
      </P>

      <H2 id="newer-devices">The newer devices</H2>
      <P>
        The original systems replaced pain with a buzzing or tingling
        sensation, and much of the recent engineering has aimed past that.
        High-frequency stimulation at 10 kHz and burst stimulation relieve pain
        without the tingling. Dorsal root ganglion stimulation targets a small,
        specific cluster of nerve cell bodies and does well for focal pain.
        The most recent shift is closed-loop stimulation: the device measures
        the spinal cord&rsquo;s own electrical response to each pulse and adjusts the
        next one in real time, keeping the dose in range as you move, cough, or
        lie down. In the blinded, randomized EVOKE trial, closed-loop
        stimulation beat older fixed-output systems, and the advantage held out
        to three years. A 2026 meta-analysis put burst stimulation about 1.3
        points ahead of conventional stimulation on a 10-point pain scale, a
        real but modest edge, with no clear difference in quality of life.
      </P>

      <H2 id="limits">The limits worth knowing</H2>
      <P>
        Because it is a surgical implant, the stimulator carries the risks of
        one: infection, bleeding, and leads that drift out of position and need
        a revision. Hardware can fail, and some people find the benefit slips
        over time and choose to have the device removed. The implant also shapes
        whether and how you can have an MRI afterward, so the model placed and
        its labeling are part of the conversation. None of this argues against
        the therapy for the right person; it argues for the careful workup and
        the trial that already sit at the front of the process, and for treating
        the relief it buys as room to keep moving rather than as the finish
        line.
      </P>

      <H2 id="specialist">When to ask about it</H2>
      <P>
        A stimulator is worth raising when nerve-type pain has outlasted a fair
        trial of medication and less involved{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          procedures
        </Link>
        , and when it is interfering with sleep, work, and movement. A pain
        physician can judge whether your pain is the kind these devices help,
        arrange the evaluation, and set up the temporary trial so the decision
        rests on evidence from your own body rather than on an average. For a
        sense of where the field is heading next, the{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          neuromodulation frontier
        </Link>{" "}
        covers closed-loop and non-invasive approaches in more depth.
      </P>
    </div>
  );
}
