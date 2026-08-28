import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the four Budapest sign categories: what makes CRPS visible.
 */
function SignsFigure() {
  const cards = [
    {
      x: 14,
      y: 44,
      title: "Sensory",
      lines: ["pain far out of proportion;", "light touch can be intensely painful"],
    },
    {
      x: 346,
      y: 44,
      title: "Color & temperature",
      lines: ["the limb runs redder, bluer, warmer,", "or colder than its partner"],
    },
    {
      x: 14,
      y: 172,
      title: "Swelling & sweating",
      lines: ["visible swelling; sweating that is", "asymmetric or simply wrong"],
    },
    {
      x: 346,
      y: 172,
      title: "Movement & tissue",
      lines: ["weakness, tremor, guarded motion;", "skin, hair, and nail changes over time"],
    },
  ];
  return (
    <Figure caption="The four sign categories of the Budapest diagnostic criteria. CRPS is pain out of proportion plus a limb that visibly changes — the diagnosis is made from the pattern, not from any single test.">
      <svg
        role="img"
        aria-labelledby="signs-title signs-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="signs-title">The four sign categories of CRPS</title>
        <desc id="signs-desc">
          Four panels: sensory signs such as pain from light touch; color and
          temperature asymmetry; swelling and abnormal sweating; and motor and
          tissue changes including weakness, tremor, and skin, hair, and nail
          changes.
        </desc>

        <text x="340" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.textMid}>
          Pain out of proportion — plus signs from these four families
        </text>

        {cards.map((c) => (
          <g key={c.title}>
            <rect x={c.x} y={c.y} width="320" height="112" rx="14" fill={FIG.paper} stroke={FIG.soft} strokeWidth="1.5" />
            <circle cx={c.x + 30} cy={c.y + 32} r="5" fill={FIG.signal} />
            <text x={c.x + 46} y={c.y + 37} fontSize="14" fontWeight="700" fill={FIG.ink}>
              {c.title}
            </text>
            {c.lines.map((l, i) => (
              <text key={l} x={c.x + 30} y={c.y + 64 + i * 18} fontSize="12" fill={FIG.textMid}>
                {l}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — mirror therapy: showing the brain two healthy hands to redraw
 * the limb's shrunken map.
 */
function MirrorFigure() {
  return (
    <Figure caption="Mirror therapy, from above: the painful hand rests hidden behind a mirror while the healthy hand moves in front of it. The brain watches what looks like two healthy hands moving — and the limb's blurred, shrunken cortical map begins to redraw.">
      <svg
        role="img"
        aria-labelledby="mir-title mir-desc"
        viewBox="0 0 680 320"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="mir-title">How mirror therapy works</title>
        <desc id="mir-desc">
          A top-down schematic. A vertical mirror stands between the hands.
          The healthy hand, drawn solid, moves on the right side of the
          mirror; its dashed reflection appears on the left, in the place of
          the painful hand, which rests hidden behind the mirror. The brain
          sees two healthy hands.
        </desc>

        {/* mirror */}
        <line x1="340" y1="56" x2="340" y2="252" stroke={FIG.faint} strokeWidth="6" strokeLinecap="round" />
        <line x1="340" y1="56" x2="340" y2="252" stroke={FIG.white} strokeWidth="2" strokeDasharray="6 8" />
        <text x="340" y="40" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.muted}>
          the mirror
        </text>

        {/* healthy hand (right of mirror): forearm + palm + fingers */}
        <g fill={FIG.nerveGround} stroke={FIG.nerveDark} strokeWidth="2.5">
          <rect x="430" y="180" width="46" height="82" rx="18" />
          <ellipse cx="453" cy="152" rx="30" ry="26" />
          <g strokeLinecap="round" fill="none">
            <line x1="437" y1="132" x2="433" y2="112" />
            <line x1="449" y1="128" x2="447" y2="106" />
            <line x1="461" y1="128" x2="463" y2="106" />
            <line x1="472" y1="134" x2="477" y2="115" />
          </g>
        </g>
        <text x="453" y="292" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.nerveDark}>
          the healthy hand moves
        </text>

        {/* its reflection (left of mirror, dashed) */}
        <g fill="none" stroke={FIG.nerve} strokeWidth="2.5" strokeDasharray="5 5">
          <rect x="204" y="180" width="46" height="82" rx="18" />
          <ellipse cx="227" cy="152" rx="30" ry="26" />
          <g strokeLinecap="round">
            <line x1="243" y1="132" x2="247" y2="112" />
            <line x1="231" y1="128" x2="233" y2="106" />
            <line x1="219" y1="128" x2="217" y2="106" />
            <line x1="208" y1="134" x2="203" y2="115" />
          </g>
        </g>
        <text x="227" y="292" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.nerveDark}>
          what the brain sees — its reflection
        </text>

        {/* the hidden painful hand, tucked just behind the mirror */}
        <g fill={FIG.ground} stroke={FIG.faint} strokeWidth="2" opacity="0.65">
          <rect x="296" y="196" width="38" height="66" rx="15" />
          <ellipse cx="315" cy="174" rx="23" ry="20" />
        </g>
        <text x="300" y="96" textAnchor="end" fontSize="11.5" fill={FIG.muted}>
          the painful hand rests
        </text>
        <text x="300" y="112" textAnchor="end" fontSize="11.5" fill={FIG.muted}>
          hidden behind the mirror
        </text>
        <path d="M303 118 Q312 140 313 160" fill="none" stroke={FIG.line} strokeWidth="1.5" />
      </svg>
    </Figure>
  );
}

export default function Crps() {
  return (
    <div>
      <P>
        Complex regional pain syndrome is the rarest condition in this hub —
        population studies find roughly 26 new cases per 100,000 people each
        year, most often in women, most often after a wrist fracture — and
        the one where early recognition changes the most. It used to go by
        two older names, reflex sympathetic dystrophy and causalgia, and it
        still comes in two types: <strong>type I</strong>, after an injury
        with no identifiable nerve damage (the large majority), and{" "}
        <strong>type II</strong>, after a documented nerve injury. Both
        share the same signature, and this page&rsquo;s one job is to make
        that signature recognizable — because CRPS caught in its first
        months is a very different disease from CRPS found late.
      </P>

      <H2 id="signature">What it looks like</H2>
      <SignsFigure />
      <P>
        Two features define the picture. First,{" "}
        <strong>pain out of proportion</strong>: a healed fracture or
        routine surgery whose pain does not fade on schedule but deepens,
        spreads beyond the injury, turns burning or squeezing, and makes
        light touch — a sleeve, a bedsheet — genuinely painful. Second,{" "}
        <strong>a limb that visibly changes</strong>: color and temperature
        that differ from the other side, swelling, sweating that is simply
        wrong, and over time changes in skin, hair, nails, and movement.
        That visibility matters. If a limb weeks after injury is hurting
        far more than it should <em>and</em> looks different from its
        partner, say the letters C-R-P-S to your clinician out loud. The
        diagnosis is clinical — the Budapest criteria above — and asking
        the question early is the single highest-value move available.
      </P>

      <H2 id="mechanism">What&rsquo;s going on</H2>
      <P>
        CRPS is best understood as several systems misfiring together
        after an injury. The <strong>inflammatory response</strong> that
        should stand down after healing keeps running, driven partly by
        nerve endings themselves releasing inflammatory signals into the
        limb. The <strong>small-nerve regulation</strong> of blood vessels
        and sweat glands goes haywire — hence the color, temperature, and
        sweating changes. And upstream, the <strong>brain
        reorganizes</strong>: imaging studies show the affected
        limb&rsquo;s territory in the brain&rsquo;s sensory map shrinking
        and blurring, which tracks with the strange feelings patients
        report — a hand that feels foreign, swollen beyond its true size,
        hard to locate with eyes closed. None of this is psychological in
        origin, and none of it is the patient&rsquo;s doing. It is{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          the nervous system&rsquo;s plasticity
        </Link>{" "}
        turned against a limb — which is exactly why treatment aims to
        turn that same plasticity back.
      </P>

      <H2 id="window">Why the first months matter</H2>
      <P>
        CRPS feeds on protection. Guarding the limb is the natural
        response to pain this severe — and it is the disease&rsquo;s best
        friend: disuse worsens the swelling and bone loss, and a limb that
        stops moving fades further from the brain&rsquo;s map, which
        deepens the pain, which invites more guarding. Breaking that
        spiral early is why time-to-treatment matters more here than in
        almost any pain condition: treated actively in the first months,
        many cases improve substantially within the first year, while late
        diagnoses fight the entrenched version. The message patients most
        need to hear, and most doubt, is this one: in CRPS,{" "}
        <strong>hurt does not equal harm — guarding is the riskier
        path</strong>.
      </P>

      <H2 id="treatment">How CRPS is treated today</H2>
      <MirrorFigure />
      <P>
        The cornerstone is <strong>rehabilitation that restores movement
        in graded steps</strong>, run by therapists who know this
        condition. It often begins below the threshold of movement
        entirely: desensitization to touch, then{" "}
        <strong>graded motor imagery</strong> — first recognizing left
        from right hands in photos, then imagining movement — and then{" "}
        <strong>mirror therapy</strong>, the elegant trick in the figure:
        the brain watches two healthy hands move, and the shrunken map
        begins to redraw. Only then does progressive loading of the real
        limb follow. Everything else supports that arc. Medications are
        used case by case —{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          nerve-pain agents
        </Link>
        , short early anti-inflammatory strategies, bone-targeted drugs
        with promising trial results — with honesty that no single pill
        has proven itself the answer. Sympathetic nerve blocks can help
        selected patients, with mixed trial evidence. And for CRPS that
        resists all of it, neuromodulation has real receipts:{" "}
        <strong>spinal cord stimulation</strong> proved itself in CRPS in
        a randomized trial back in 2000, and{" "}
        <strong>dorsal root ganglion stimulation</strong> — pinpoint
        stimulation of the nerve cluster serving the painful territory —
        beat conventional stimulation head-to-head in the ACCURATE trial,
        making CRPS the condition where{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          next-generation neuromodulation
        </Link>{" "}
        earned its reputation. Psychological support belongs in the plan
        too — not because CRPS is psychological, but because pain this
        severe deserves every ally, and fear of movement is a treatment
        target in its own right.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        CRPS research now runs along the neuroimmune frontier — the
        crosstalk between nerves and immune cells that keeps the limb
        inflamed — alongside refinements in brain-retraining rehabilitation
        and stimulation. The{" "}
        <Link href="/future-of-pain-medicine/mind-and-brain" className={link}>
          mind-and-brain frontier
        </Link>{" "}
        and the{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pipeline tracker
        </Link>{" "}
        cover the science as it moves.
      </P>

      <H2 id="specialist">When to bring in a specialist</H2>
      <P>
        Immediately, by this hub&rsquo;s standards. Suspected CRPS is a
        reason to reach{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>{" "}
        early — for diagnosis by the Budapest criteria, coordinated
        rehabilitation, and timely escalation if first-line care stalls —
        rather than after months of watch-and-wait.{" "}
        <Link href="/find-help" className={link}>
          Finding pain care near you
        </Link>{" "}
        explains how; if a recent injury has left you with pain that is
        out of proportion in a limb that looks wrong, bring this
        page&rsquo;s question to an appointment this month, not this year.
      </P>
    </div>
  );
}
