import Link from "next/link";
import { Figure, H2, P, anim } from "./Figure";
import { FIG } from "@/lib/fig";

function SharedCircuitryFigure() {
  return (
    <Figure caption="Pain and emotion are processed by overlapping brain regions. The anterior cingulate cortex and insula sit at the heart of both — which is why each can turn the other's volume up or down.">
      <svg
        role="img"
        aria-labelledby="venn-title venn-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="venn-title">Shared brain circuitry of pain and emotion</title>
        <desc id="venn-desc">
          Two overlapping circles labeled pain processing and emotion
          processing. The overlap lists the anterior cingulate cortex, the
          insula, and the prefrontal cortex, plus the brain&rsquo;s descending
          volume control.
        </desc>

        <circle cx="250" cy="150" r="125" fill={FIG.nerve} fillOpacity="0.12" stroke={FIG.nerve} strokeWidth="2" />
        <circle cx="430" cy="150" r="125" fill={FIG.signalDark} fillOpacity="0.12" stroke={FIG.signalDark} strokeWidth="2" />

        <text x="185" y="76" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.nerveDark}>
          Pain processing
        </text>
        <text x="152" y="140" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
          nociceptive input
        </text>
        <text x="152" y="160" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
          sensory cortex
        </text>
        <text x="152" y="180" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
          spinal pathways
        </text>

        <text x="497" y="76" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.signalText}>
          Emotion processing
        </text>
        <text x="530" y="140" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
          fear &amp; anxiety
        </text>
        <text x="530" y="160" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
          mood
        </text>
        <text x="530" y="180" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
          stress response
        </text>

        {/* overlap */}
        <text x="340" y="112" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.text} letterSpacing="0.08em">
          SHARED
        </text>
        <text x="340" y="138" textAnchor="middle" fontSize="12.5" fontWeight="600" fill={FIG.ink}>
          anterior cingulate
        </text>
        <text x="340" y="158" textAnchor="middle" fontSize="12.5" fontWeight="600" fill={FIG.ink}>
          insula
        </text>
        <text x="340" y="178" textAnchor="middle" fontSize="12.5" fontWeight="600" fill={FIG.ink}>
          prefrontal cortex
        </text>
        <text x="340" y="204" textAnchor="middle" fontSize="12" fill={FIG.muted}>
          + the descending
        </text>
        <text x="340" y="220" textAnchor="middle" fontSize="12" fill={FIG.muted}>
          &ldquo;volume control&rdquo;
        </text>
      </svg>
    </Figure>
  );
}

const LOOP = [
  { label: "Pain", x: 340, y: 52, accent: FIG.signalDark },
  { label: "“This will never end”", x: 552, y: 122, accent: FIG.muted },
  { label: "Fear of movement", x: 490, y: 220, accent: FIG.muted },
  { label: "Avoidance, deconditioning", x: 190, y: 220, accent: FIG.muted },
  { label: "More pain, smaller life", x: 128, y: 122, accent: FIG.caution },
];

function FearAvoidanceFigure() {
  return (
    <Figure
      animate
      caption="The fear-avoidance loop. Each step feels protective in the moment, and each one feeds the next. The green arrow is the evidence-backed way out: gradual, supported return to movement."
    >
      <svg
        role="img"
        aria-labelledby="loop-title loop-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="loop-title">The fear-avoidance loop</title>
        <desc id="loop-desc">
          Five stages in a circle: pain, catastrophic thoughts, fear of
          movement, avoidance and deconditioning, then more pain and a smaller
          life, looping back to pain. A green arrow exits the loop toward
          gradual return to activity.
        </desc>
        <defs>
          <marker
            id="loop-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={FIG.faint} />
          </marker>
          <marker
            id="exit-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={FIG.nerve} />
          </marker>
        </defs>

        {/* loop arrows between successive nodes */}
        <g fill="none" stroke={FIG.faint} strokeWidth="2" markerEnd="url(#loop-arrow)">
          <path d="M395 62 Q505 74 540 104" className="fig-draw fig-fade" style={anim(0.25, 190)} />
          <path d="M552 140 Q540 185 512 204" className="fig-draw fig-fade" style={anim(0.65, 110)} />
          <path d="M420 228 Q340 244 262 228" className="fig-draw fig-fade" style={anim(1.05, 180)} />
          <path d="M172 204 Q140 184 130 140" className="fig-draw fig-fade" style={anim(1.45, 110)} />
          <path d="M142 104 Q220 60 282 50" className="fig-draw fig-fade" style={anim(1.85, 170)} />
        </g>

        {/* exit arrow */}
        <path
          d="M262 236 Q340 285 500 278"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="3.5"
          strokeLinecap="round"
          markerEnd="url(#exit-arrow)"
          className="fig-draw fig-fade"
          style={anim(2.45, 300)}
        />
        <g className="fig-fade" style={anim(2.9)}>
          <text x="560" y="270" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.nerveDark}>
            gradual return
          </text>
          <text x="560" y="287" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.nerveDark}>
            to activity
          </text>
        </g>

        {/* nodes — rise in sequence around the loop */}
        {LOOP.map((n, i) => (
          <g key={n.label} className="fig-rise" style={anim(i * 0.4)}>
            <rect
              x={n.x - 92}
              y={n.y - 22}
              width="184"
              height="40"
              rx="12"
              fill={FIG.white}
              stroke={n.accent}
              strokeWidth="1.8"
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize="13"
              fontWeight="600"
              fill={FIG.ink}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function PainAndEmotion() {
  return (
    <div>
      <P>
        In 2020, the world&rsquo;s pain scientists revised their formal
        definition of pain for the first time in four decades. The words they
        kept are telling: pain is &ldquo;an unpleasant{" "}
        <strong>sensory and emotional</strong> experience.&rdquo; Emotion is not
        something that contaminates pain, or a sign you are handling it badly.
        It is half of what pain <em>is</em> — written into the definition
        itself. The same document adds a note every person in pain deserves to
        hear: a person&rsquo;s report of their pain{" "}
        <strong>should be respected</strong>.
      </P>

      <H2 id="wired-together">Wired together</H2>
      <SharedCircuitryFigure />
      <P>
        Brain imaging shows why pain and feeling are inseparable. The regions
        that light up when something hurts — especially the{" "}
        <strong>anterior cingulate cortex</strong> and the{" "}
        <strong>insula</strong> — are long-recognized parts of the
        brain&rsquo;s emotional machinery. They encode the{" "}
        <em>unpleasantness</em> of pain, the part that makes it matter, and
        they do double duty processing anxiety, sadness, and stress. The
        overlap runs deep enough that social wounds register there too: in
        imaging studies, the sting of rejection activates a pattern strikingly
        similar to physical pain. &ldquo;Hurt feelings&rdquo; is not a
        metaphor your brain recognizes as one.
      </P>

      <H2 id="volume-control">The brain&rsquo;s volume control</H2>
      <P>
        The traffic also flows downward. Your brain runs a descending
        volume-control system — from the cortex and amygdala through a
        brainstem hub called the periaqueductal grey, down to the spinal cord —
        that can amplify or suppress pain signals before they are ever fully
        felt. It is the system described in{" "}
        <Link
          href="/understanding-pain/how-pain-works"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          how pain works
        </Link>
        , and emotion has its hands on the dial. As one major review puts it,
        emotional state, anxiety, attention, and past experience &ldquo;can
        either enhance or diminish the pain experience.&rdquo; The effect is
        measurable: in controlled experiments, changing only what people{" "}
        <em>expected</em> changed how painful an identical heat stimulus felt
        by around 20%.
      </P>
      <P>
        This is the honest answer to why stress makes pain worse. It is not
        that you are exaggerating under pressure. It is that a stressed,
        threatened nervous system tips its own dial toward amplification — and
        the same signal genuinely hurts more.
      </P>

      <H2 id="the-loop">The loop that shrinks a life</H2>
      <FearAvoidanceFigure />
      <P>
        Pain psychology&rsquo;s most useful map is the{" "}
        <strong>fear-avoidance model</strong>. It starts with a reasonable
        instinct: pain feels like damage, so you protect the part that hurts.
        But when catastrophic interpretations take hold —{" "}
        <em>this will never end, something must be badly wrong</em> — protection
        hardens into fear of movement, fear into avoidance, and avoidance into
        deconditioning and a steadily smaller life. Each step feels sensible.
        Together they feed the pain they were meant to escape. Studies
        following patients over time find that this kind of catastrophic
        thinking is not a bystander: it{" "}
        <strong>predicts</strong> future pain intensity and disability, even
        predicting who will hurt more after surgery.
      </P>
      <P>
        Read that carefully, because it is good news wearing a stern
        expression. Catastrophizing is not a character flaw — it is a learned,
        automatic appraisal habit, and habits of the brain can be retrained.
        The loop has an exit, and it is the one the evidence supports: a
        gradual, supported return to movement and activity, ideally guided by a
        care team that understands the model.
      </P>

      <H2 id="depression">Depression and pain travel together</H2>
      <P>
        The overlap in circuitry has a clinical shadow: depression and chronic
        pain are frequent companions. In a landmark review, around{" "}
        <strong>65%</strong> of people with depression reported pain symptoms,
        and depression affected roughly <strong>half</strong> of patients in
        pain clinics — several times the rate in the general population. Each
        condition deepens the other, and each can hide the other from a
        clinician who is only looking for one. None of this makes either
        condition less real. It makes treating them <em>together</em> the
        scientifically sound move — and it is why a thorough pain evaluation
        asks about mood without any implication that your pain is &ldquo;just&rdquo;
        psychological.
      </P>

      <H2 id="not-an-insult">Why brain-targeted care is not an insult</H2>
      <P>
        Put the pieces together and something clicks into place. If pain and
        emotion share circuitry, then treatments that work through that
        circuitry — cognitive behavioral therapy, mindfulness-based approaches,
        the therapies described in{" "}
        <Link
          href="/future-of-pain-medicine/mind-and-brain"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          the mind and the brain
        </Link>{" "}
        — should be able to turn real dials on real pain. The trial evidence
        says they do: across dozens of randomized trials, psychological
        therapies produce measurable reductions in pain, disability, and
        distress. The honest caveat is that the average effects are modest —
        these are tools in a plan, not the whole plan. Whether they fit{" "}
        <em>your</em> plan is a conversation for you and your clinician.
      </P>
      <P>
        Being offered a psychological therapy for pain is not an accusation
        that you imagined anything. It is an application of the last forty
        years of pain science: your pain is real, it is being assembled by a
        nervous system that emotion genuinely modulates, and every dial that
        system offers is worth knowing about.
      </P>
    </div>
  );
}
