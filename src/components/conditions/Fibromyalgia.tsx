import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { BodyFront } from "../anatomy/BodyOutline";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — pain without a postcode: the widespread pattern, both sides,
 * above and below the waist. BodyFront's intended fibromyalgia use.
 */
function WidespreadFigure() {
  return (
    <Figure caption="The fibromyalgia map: pain on both sides of the body, above and below the waist — and the sites shift over weeks. The distribution itself is the diagnostic clue: no injury produces this pattern, but a sensitized pain system does.">
      <svg
        role="img"
        aria-labelledby="wide-title wide-desc"
        viewBox="0 0 680 360"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="wide-title">The widespread pain pattern of fibromyalgia</title>
        <desc id="wide-desc">
          A schematic figure seen from the front with small amber pain
          markers scattered across neck, shoulders, chest, elbows, hips, and
          knees on both sides of the body.
        </desc>

        <g transform="translate(70 8) scale(0.72)">
          <BodyFront
            marks={[
              { at: "neck", size: "sm" },
              { at: "shoulderL", size: "sm" },
              { at: "shoulderR", size: "sm" },
              { at: "chest", size: "sm" },
              { at: "elbowL", size: "sm" },
              { at: "elbowR", size: "sm" },
              { at: "hipL", size: "sm" },
              { at: "hipR", size: "sm" },
              { at: "kneeL", size: "sm" },
              { at: "kneeR", size: "sm" },
            ]}
          />
        </g>

        <g fontSize="15" fontWeight="700" fill={FIG.ink}>
          <text x="330" y="120">Widespread, by definition</text>
        </g>
        <g fontSize="12.5" fill={FIG.textMid}>
          <text x="330" y="142">both sides of the body,</text>
          <text x="330" y="159">above and below the waist</text>
        </g>
        <g fontSize="15" fontWeight="700" fill={FIG.ink}>
          <text x="330" y="230">And it moves</text>
        </g>
        <g fontSize="12.5" fill={FIG.textMid}>
          <text x="330" y="252">today the shoulders, next month the</text>
          <text x="330" y="269">hips — the shifting map is the symptom,</text>
          <text x="330" y="286">not a credibility problem</text>
        </g>
        <path d="M322 136 Q260 140 200 150" fill="none" stroke={FIG.line} strokeWidth="1.5" />
        <path d="M322 246 Q250 250 172 248" fill="none" stroke={FIG.line} strokeWidth="1.5" />
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the receipts: three measured findings that locate fibromyalgia
 * in the pain system's biology (all reviewed in Clauw 2014).
 */
function ReceiptsFigure() {
  return (
    <Figure caption="Three measurable findings behind fibromyalgia: brain imaging shows the same pain activation at roughly half the pressure; spinal fluid carries about three times the pain-transmitting substance P; and the body's pain-inhibits-pain reflex underperforms on testing (reviewed in Clauw 2014).">
      <svg
        role="img"
        aria-labelledby="rec-title rec-desc"
        viewBox="0 0 680 280"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="rec-title">The measurable evidence in fibromyalgia</title>
        <desc id="rec-desc">
          Three panels. One: paired bars showing the same brain pain response
          occurs at about half the pressure in fibromyalgia. Two: paired bars
          showing spinal-fluid substance P about three times higher. Three: a
          mostly empty meter showing the built-in pain-inhibition reflex
          underperforming.
        </desc>

        {[14, 238, 462].map((x) => (
          <rect key={x} x={x} y="36" width="204" height="212" rx="14" fill={FIG.paper} stroke={FIG.soft} strokeWidth="1.5" />
        ))}

        {/* 1 — brain imaging */}
        <text x="116" y="66" textAnchor="middle" fontSize="13.5" fontWeight="700" fill={FIG.ink}>
          Brain imaging
        </text>
        <rect x="52" y="100" width="42" height="70" rx="5" fill={FIG.soft} />
        <rect x="126" y="135" width="42" height="35" rx="5" fill={FIG.signal} />
        <line x1="44" y1="170" x2="188" y2="170" stroke={FIG.faint} strokeWidth="1.5" />
        <g fontSize="10.5" fill={FIG.muted} textAnchor="middle">
          <text x="73" y="186">others</text>
          <text x="147" y="186">fibromyalgia</text>
        </g>
        <g fontSize="11" fill={FIG.textMid} textAnchor="middle">
          <text x="116" y="212">same pain response</text>
          <text x="116" y="228">at ~half the pressure</text>
        </g>

        {/* 2 — spinal fluid */}
        <text x="340" y="66" textAnchor="middle" fontSize="13.5" fontWeight="700" fill={FIG.ink}>
          Spinal fluid
        </text>
        <rect x="276" y="146" width="42" height="24" rx="5" fill={FIG.soft} />
        <rect x="350" y="98" width="42" height="72" rx="5" fill={FIG.signal} />
        <line x1="268" y1="170" x2="412" y2="170" stroke={FIG.faint} strokeWidth="1.5" />
        <g fontSize="10.5" fill={FIG.muted} textAnchor="middle">
          <text x="297" y="186">others</text>
          <text x="371" y="186">fibromyalgia</text>
        </g>
        <g fontSize="11" fill={FIG.textMid} textAnchor="middle">
          <text x="340" y="212">pain-transmitting substance P</text>
          <text x="340" y="228">roughly three times higher</text>
        </g>

        {/* 3 — the brakes */}
        <text x="564" y="66" textAnchor="middle" fontSize="13.5" fontWeight="700" fill={FIG.ink}>
          The built-in brakes
        </text>
        <rect x="496" y="122" width="136" height="14" rx="7" fill={FIG.soft} />
        <rect x="496" y="122" width="34" height="14" rx="7" fill={FIG.signal} />
        <text x="564" y="158" textAnchor="middle" fontSize="10.5" fill={FIG.muted}>
          pain-inhibits-pain reflex
        </text>
        <g fontSize="11" fill={FIG.textMid} textAnchor="middle">
          <text x="564" y="212">the pain-dampening system</text>
          <text x="564" y="228">underperforms on testing</text>
        </g>
      </svg>
    </Figure>
  );
}

export default function Fibromyalgia() {
  return (
    <div>
      <P>
        No pain condition has been dismissed longer or harder than
        fibromyalgia — and few have been more thoroughly vindicated by
        modern pain science. It affects roughly <strong>2 to 4% of
        people</strong>, most of those diagnosed are women, and it is now
        the signature example of the third kind of pain:{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          nociplastic pain
        </Link>
        , from a pain system that has become over-sensitive — the volume
        knob turned up and stuck there. If you have spent years being told
        your labs are fine and your scans are clean, this page&rsquo;s
        message is the site&rsquo;s founding one: you are not imagining your
        pain. The evidence agrees with you.
      </P>

      <H2 id="the-map">Pain without a postcode</H2>
      <WidespreadFigure />
      <P>
        Fibromyalgia&rsquo;s pain is defined by its geography: both sides of
        the body, above and below the waist, often deep and aching with
        burning edges — and mobile, favoring the shoulders one month and the
        hips the next. Touch that should not hurt sometimes does. And pain
        never travels alone here: profound <strong>fatigue</strong>, sleep
        that fails to refresh no matter its length, the cognitive haze
        patients named <strong>fibro fog</strong>, and a nervous system that
        finds lights brighter and sounds louder than they should be. It also
        keeps company — irritable bowel, jaw pain, and frequent headaches
        overlap so often that researchers group them as related conditions
        of a sensitized system. If that reads like your chart, the pattern
        is the point: this is what a pain <em>system</em> problem looks
        like, as opposed to a pain <em>site</em> problem.
      </P>

      <H2 id="receipts">The receipts</H2>
      <ReceiptsFigure />
      <P>
        The old accusation was that nothing measurable was wrong. That era
        is over. In a landmark brain-imaging study, people with fibromyalgia
        showed the <strong>same pain-processing activation as controls at
        roughly half the pressure</strong> — their brains were doing exactly
        what they reported: hurting more with less. Spinal-fluid studies
        found <strong>pain-transmitting substance P about three times
        higher</strong>. And the body&rsquo;s{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          built-in pain-dampening reflex
        </Link>{" "}
        reliably underperforms on testing. Amplifier up, brakes down —
        measured, replicated, reviewed. In 2017 the international
        pain-science community formalized the category this evidence had
        been demanding. None of this makes fibromyalgia &ldquo;in your
        head&rdquo; in the dismissive sense; it makes it in your nervous
        system, which is where all pain lives.
      </P>

      <H2 id="origins">Where it comes from</H2>
      <P>
        No single cause has been found, and the honest model is a
        combination: an inherited tendency toward a sensitive pain system —
        fibromyalgia runs in families — often switched on by stressors such
        as an infection, an injury, trauma, or a long siege of stress and
        broken sleep. Sleep deserves special mention because the arrow runs
        both ways: unrefreshing sleep is a core symptom, and{" "}
        <Link href="/understanding-pain/pain-and-sleep" className={link}>
          experimentally disrupting deep sleep
        </Link>{" "}
        in healthy volunteers produced exactly the widespread tenderness
        fibromyalgia is known for. A sensitized system, in other words, is
        something a body can be talked into — and, the treatment evidence
        suggests, partially talked out of.
      </P>

      <H2 id="diagnosis">How it&rsquo;s diagnosed</H2>
      <P>
        The tender-point exam — eleven of eighteen points — belongs to
        history; the criteria retired it. Today&rsquo;s diagnosis rests on
        the pattern: how widespread the pain is, how severe the fatigue,
        sleep, and cognitive symptoms are, and whether the picture has held
        for at least three months, alongside basic blood work to check the
        mimics — thyroid disease, inflammatory arthritis, vitamin
        deficiency. There is no biomarker yet, but fibromyalgia is a
        diagnosis made on positive grounds, not a consolation prize after
        every other test — and current criteria explicitly allow it to
        coexist with other conditions, because it often does.
      </P>

      <H2 id="treatment">How fibromyalgia is treated today</H2>
      <P>
        Treatment starts with something unusual: <strong>understanding the
        condition is itself a treatment</strong>. Knowing that hurt does not
        equal harm — that a flare is a sensitized system misfiring, not
        tissue tearing — is what makes the rest possible. The strongest
        evidence then belongs to <strong>movement</strong>, started
        absurdly gently and built gradually, because a sensitized system
        punishes ambushes but adapts to patience. In a randomized trial,{" "}
        <strong>tai chi performed as well as or better than aerobic
        exercise</strong> — gentleness is not a compromise here, it is a
        mechanism. Sleep care and cognitive behavioral approaches work the
        same territory from other angles.
      </P>
      <P>
        Medication deserves honest framing. Three drugs are approved for
        fibromyalgia — two calm overexcited nerve signaling, one
        strengthens the pain-dampening pathways — and each meaningfully
        helps a minority of those who try it, usually as a supporting
        actor rather than the lead.{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          Ordinary painkillers
        </Link>{" "}
        underperform because there is no inflamed tissue to treat, and
        opioids are a specific poor fit — they can deepen the
        system&rsquo;s sensitivity over time. Nobody fails at fibromyalgia
        by failing a pill; the pills were always the smaller half of the
        plan.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        Fibromyalgia sits at the center of pain science&rsquo;s newest
        frontier — therapies aimed at retraining a sensitized system rather
        than numbing it, from pain-reprocessing approaches to non-invasive
        brain stimulation, covered honestly in{" "}
        <Link href="/future-of-pain-medicine/mind-and-brain" className={link}>
          mind, brain, and new frontiers
        </Link>
        . A condition once defined by dismissal is now defining where the
        field goes next.
      </P>

      <H2 id="specialist">When to bring in a specialist</H2>
      <P>
        Diagnosis often starts with rheumatology — the mimics live there —
        but long-term care is where{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>{" "}
        and multidisciplinary programs shine: graded movement, sleep,
        psychology, and medication sequenced as one plan instead of five
        referrals. If your care so far has been a pill and a shrug,{" "}
        <Link href="/find-help" className={link}>
          finding pain care near you
        </Link>{" "}
        explains how to reach the coordinated version.
      </P>
    </div>
  );
}
