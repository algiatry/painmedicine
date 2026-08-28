import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the evidence map: certainty of evidence (x) against typical
 * average benefit (y), one dot per treatment family. Schematic synthesis of
 * the reviews cited across the site — positions approximate by design.
 */
function EvidenceMapFigure() {
  return (
    <Figure caption="The evidence map, drawn honestly: how certain the evidence is (left to right) against the typical average benefit in trials (bottom to top). Positions are a schematic synthesis of the reviews cited on this page and across this site — approximate by design, and averages hide wide individual variation. Teal = low-risk active care; slate = drugs and procedures; the red ring marks a high-risk option whose long-term evidence came up short.">
      <svg
        role="img"
        aria-labelledby="map2-title map2-desc"
        viewBox="0 0 680 420"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="map2-title">Pain treatments by evidence certainty and typical benefit</title>
        <desc id="map2-desc">
          A scatter chart. High-certainty, modest-benefit region: exercise and
          active rehab, CBT and mindfulness, and short-term relievers.
          Moderate-certainty, larger-benefit-in-selected-patients region:
          stimulators and radiofrequency ablation, and nerve-pain drugs when
          matched to nerve pain. Long-term opioids sit at low benefit despite
          tested evidence, marked with a red ring. Most supplements sit at
          low certainty with unknown benefit.
        </desc>

        {/* axes */}
        <line x1="90" y1="360" x2="644" y2="360" stroke={FIG.faint} strokeWidth="2" />
        <line x1="90" y1="360" x2="90" y2="52" stroke={FIG.faint} strokeWidth="2" />
        <text x="644" y="382" textAnchor="end" fontSize="12" fill={FIG.muted}>
          how certain the evidence is →
        </text>
        <text x="90" y="40" fontSize="12" fill={FIG.muted}>
          ↑ typical average benefit
        </text>

        {/* teal: active, low-risk */}
        <circle cx="590" cy="230" r="10" fill={FIG.nerve} />
        <text x="575" y="222" textAnchor="end" fontSize="12" fontWeight="700" fill={FIG.nerveDark}>
          Exercise &amp; active rehab
        </text>
        <circle cx="555" cy="290" r="10" fill={FIG.nerve} />
        <text x="540" y="284" textAnchor="end" fontSize="12" fontWeight="700" fill={FIG.nerveDark}>
          CBT &amp; mindfulness
        </text>

        {/* slate: drugs & procedures */}
        <circle cx="390" cy="100" r="10" fill={FIG.muted} />
        <text x="390" y="78" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.text}>
          Stimulators — in selected patients
        </text>
        <circle cx="350" cy="185" r="10" fill={FIG.muted} />
        <text x="335" y="190" textAnchor="end" fontSize="12" fontWeight="700" fill={FIG.text}>
          RFA — after confirming blocks
        </text>
        <circle cx="525" cy="150" r="10" fill={FIG.muted} />
        <text x="525" y="128" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.text}>
          Nerve-pain drugs — for nerve pain
        </text>
        <circle cx="612" cy="315" r="10" fill={FIG.muted} />
        <text x="597" y="320" textAnchor="end" fontSize="12" fontWeight="700" fill={FIG.text}>
          Short-term relievers — real, brief
        </text>

        {/* caution: long-term opioids */}
        <circle cx="430" cy="322" r="10" fill={FIG.white} stroke={FIG.caution} strokeWidth="3.5" />
        <text x="430" y="348" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.cautionText}>
          Long-term opioids — no advantage in SPACE
        </text>

        {/* low certainty */}
        <circle cx="150" cy="330" r="10" fill={FIG.soft} stroke={FIG.faint} strokeWidth="2" />
        <text x="150" y="308" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.muted}>
          Most supplements — unproven
        </text>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the stacking strategy: serial single fixes each judged modest
 * and abandoned, versus matched modest wins stacked into a trajectory.
 */
function StackingFigure() {
  const segs = [
    { label: "graded exercise", fill: FIG.nerve },
    { label: "sleep repaired", fill: FIG.nerveDark },
    { label: "matched medication", fill: FIG.cyan },
    { label: "a procedure's window", fill: FIG.indigo },
    { label: "pacing & skills", fill: FIG.nerveBright },
  ];
  return (
    <Figure caption="The strategy the evidence actually supports. Left: treatments tried one at a time, each judged 'only modest' and abandoned. Right: the same modest effects, matched to mechanism and kept, stacking — because benefits from different mechanisms add, and their side effects mostly don't.">
      <svg
        role="img"
        aria-labelledby="stk-title stk-desc"
        viewBox="0 0 680 320"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="stk-title">Serial single fixes versus stacked modest wins</title>
        <desc id="stk-desc">
          Two panels. Left: five short bars in a row, each with a small cross
          above it — treatments tried alone and abandoned. Right: the same
          five effects stacked into one tall column labeled a changed
          trajectory.
        </desc>

        <line x1="340" y1="40" x2="340" y2="280" stroke={FIG.soft} strokeWidth="1.5" />

        {/* left: serial and abandoned */}
        <text x="180" y="62" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
          Chasing the one big fix
        </text>
        {[0, 1, 2, 3, 4].map((i) => {
          const x = 62 + i * 50;
          return (
            <g key={i}>
              <rect x={x} y="205" width="32" height="45" rx="5" fill={FIG.soft} />
              <g stroke={FIG.faint} strokeWidth="2.4" strokeLinecap="round">
                <line x1={x + 9} y1="182" x2={x + 23} y2="196" />
                <line x1={x + 23} y1="182" x2={x + 9} y2="196" />
              </g>
            </g>
          );
        })}
        <line x1="52" y1="250" x2="316" y2="250" stroke={FIG.faint} strokeWidth="1.5" />
        <text x="180" y="274" textAnchor="middle" fontSize="11.5" fill={FIG.textMid}>
          one at a time — each &ldquo;only modest,&rdquo; each abandoned
        </text>

        {/* right: the stack */}
        <text x="510" y="62" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
          Stacking modest wins
        </text>
        {segs.map((s, i) => {
          const y = 250 - (i + 1) * 34;
          return (
            <g key={s.label}>
              <rect x="500" y={y} width="70" height="30" rx="5" fill={s.fill} />
              <text x="490" y={y + 20} textAnchor="end" fontSize="11.5" fill={FIG.textMid}>
                {s.label}
              </text>
            </g>
          );
        })}
        <line x1="380" y1="250" x2="640" y2="250" stroke={FIG.faint} strokeWidth="1.5" />
        <text x="582" y="122" fontSize="11.5" fontWeight="700" fill={FIG.nerveDark}>
          a changed
        </text>
        <text x="582" y="138" fontSize="11.5" fontWeight="700" fill={FIG.nerveDark}>
          trajectory
        </text>
        <text x="510" y="274" textAnchor="middle" fontSize="11.5" fill={FIG.textMid}>
          matched to mechanism, kept, combined
        </text>
      </svg>
    </Figure>
  );
}

export default function ComparingYourOptions() {
  return (
    <div>
      <P>
        Every page in this hub ends at the same question, so this page
        faces it directly: <em>of all of it — the drugs, the needles, the
        devices, the therapies — what actually works?</em> The honest
        answer is better than the marketing answer, but it requires a
        reframe. Read the trial literature whole and its clearest finding
        is that <strong>no treatment wins across the board</strong>:
        nearly everything helps modestly on average, and the real
        differences between options lie elsewhere — in how{" "}
        <em>certain</em> the evidence is, how <em>long</em> benefits
        last, how <em>safe</em> the option is, and which{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          pain mechanism
        </Link>{" "}
        it fits. This page maps those differences the way the field sees
        them — and teaches the reading skills to weigh any option, or any
        claim, yourself.
      </P>

      <H2 id="the-map">The map</H2>
      <EvidenceMapFigure />
      <P>
        Two regions of the map deserve your attention. The{" "}
        <strong>high-certainty shore</strong> on the right holds{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          exercise, active rehabilitation, and the behavioral therapies
        </Link>{" "}
        — benefits that are modest on average but proven across the most
        trials, durable, and essentially risk-free, which is why
        guidelines start there. The{" "}
        <strong>selection-dependent heights</strong> in the upper middle
        hold the{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          stimulators and ablation
        </Link>{" "}
        and the{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          nerve-pain drugs
        </Link>
        : larger effects, but only in the right patient — a stimulator
        transforms a matched candidate and does nothing for anyone else.
        Everything about using this map well follows from one habit:
        never ask &ldquo;does it work?&rdquo; without adding{" "}
        <em>for which mechanism, in whom, for how long, at what
        risk</em>.
      </P>

      <H2 id="four-rules">Four rules for reading the evidence</H2>
      <P>
        <strong>One: averages hide responders.</strong> A modest mean
        effect usually blends people who improved substantially with
        people who didn&rsquo;t improve at all. The average is not your
        forecast — it is a reason to run fair trials and find your
        responders&rsquo; list. <strong>Two: certainty and size are
        different axes.</strong> Exercise is certain and modest; plenty
        of heavily marketed options are uncertain and loud. When forced
        to choose, the field chooses certainty — you can build on what
        you can trust. <strong>Three: mechanism fit beats potency</strong>
        — the lesson of the{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications map
        </Link>
        , and it generalizes to every row of the toolbox.{" "}
        <strong>Four: durability and safety multiply.</strong> A modest
        effect that is safe and lasts compounds year over year; a strong
        effect that is brief or costly to the body does not. This is the
        quiet math behind why guidelines keep putting the unglamorous
        options first.
      </P>

      <H2 id="stacking">The stacking strategy</H2>
      <StackingFigure />
      <P>
        Those four rules converge on the strategy this site keeps
        arriving at from every direction: <strong>stack modest
        wins</strong>. Chronic pain care fails most often not because
        options failed but because each was tried alone, judged
        &ldquo;only modest,&rdquo; and abandoned before the next
        audition. The alternative is additive: movement rebuilt with{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          pacing
        </Link>
        , sleep{" "}
        <Link href="/understanding-pain/pain-and-sleep" className={link}>
          repaired
        </Link>
        , a mechanism-matched medication kept because it earns its place,
        a{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          procedure&rsquo;s window
        </Link>{" "}
        spent on rehabilitation. Effects from different mechanisms add;
        their side effects mostly don&rsquo;t. No single layer looks
        dramatic. The stack changes trajectories.
      </P>

      <H2 id="space">Where the long-term opioid evidence landed</H2>
      <P>
        One comparison on the map deserves its own paragraph, because a
        rigorous trial finally ran it. The SPACE trial randomized
        veterans with chronic back pain or hip and knee arthritis to
        opioid or non-opioid medication strategies and followed them for
        a year: the opioid arm ended <strong>no better on
        function, slightly worse on pain</strong>, with more side
        effects. That is not a verdict on every use of these medicines —{" "}
        <Link href="/conditions/cancer-pain" className={link}>
          cancer pain
        </Link>{" "}
        is a different conversation, and people already on long-term
        therapy deserve careful individualized care, never abandonment.
        It is a verdict on the old assumption that the strongest
        painkiller must be the strongest treatment for chronic pain. For
        anyone whose use has come to feel like its own problem, the
        SAMHSA helpline — 1-800-662-4357 — is free, confidential, and
        always open.
      </P>

      <H2 id="complementary">The complementary aisle</H2>
      <P>
        Complementary options divide cleanly on the certainty axis.{" "}
        <strong>Acupuncture</strong> has been examined about as
        rigorously as a hands-on therapy can be — an individual-patient-
        data meta-analysis of dozens of trials — and shows real benefits
        beyond sham for several chronic pain conditions: small on
        average, persistent, low-risk. As an adjunct for someone drawn
        to it, that is a defensible bet. <strong>Supplements</strong> are
        mostly the opposite corner: unregulated products, thin trials,
        and genuine interaction potential — worth naming to your
        clinician and pharmacist rather than filing under harmless. For a
        full worked example of reading honest evidence on a gray-market
        substance, our{" "}
        <Link href="/treatments/kratom" className={link}>
          kratom guide
        </Link>{" "}
        is this page&rsquo;s method applied to one famous case.
      </P>

      <H2 id="fair-trial">Running a fair trial on yourself</H2>
      <P>
        The map narrows your options; personal trials decide them. The
        method is simple and rarely followed: change{" "}
        <strong>one thing at a time</strong>; define success as a{" "}
        <strong>functional target</strong> — the walk, the workday, the
        night&rsquo;s sleep — not only a{" "}
        <Link href="/understanding-pain/measuring-pain" className={link}>
          pain score
        </Link>
        ; agree on a <strong>time window</strong> with your clinician;
        keep a simple diary; and decide <strong>in advance</strong> what
        result means continue versus stop. Done this way, even a
        &ldquo;failed&rdquo; trial is a win — it retires an option with
        confidence and clears the stage for the next.
      </P>

      <H2 id="claims">Reading a claim like the field does</H2>
      <P>
        Finally, the skill that protects everything else. For any
        treatment claim, ask: compared with <em>what</em>? In{" "}
        <em>whom</em>? For <em>how long</em>? And <em>who profits from
        my yes</em>? The red flags repeat across every era of pain
        marketing: one remedy claimed to work for every kind of pain,
        testimonials doing the work of trials, mechanisms too secret to
        explain, and the language of certainty where medicine speaks in
        probabilities. The green flags are just as consistent — and they
        are this site&rsquo;s own standard: evidence named, limits
        volunteered, and a clear statement of who an option is for.
        Building your particular stack from this map is exactly the
        craft of{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>
        , and{" "}
        <Link href="/find-help" className={link}>
          finding pain care near you
        </Link>{" "}
        is where to take it.
      </P>
    </div>
  );
}
