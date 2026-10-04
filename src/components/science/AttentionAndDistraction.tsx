import Link from "next/link";
import { Figure, H2, P } from "./Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure – the descending "dial". Attention in the cortex sets the
 * brainstem's pain-control hub (the periaqueductal grey), which in turn
 * sets how much of the amber signal the spinal cord's dorsal horn lets
 * through. Two columns show the same pathway with the dial turned down
 * (distraction) and turned up (hypervigilance). Static figure.
 */
function DialFigure() {
  const col = (
    x: number,
    label: string,
    sub: string,
    attnText: string,
    pagText: string,
    hornText: string,
    signalWidth: number,
    needleAngle: number,
  ) => (
    <g>
      <text x={x + 120} y="30" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
        {label}
      </text>
      <text x={x + 120} y="48" textAnchor="middle" fontSize="12" fill={FIG.muted}>
        {sub}
      </text>

      {/* brain – attention */}
      <rect x={x} y="64" width="240" height="50" rx="12" fill={FIG.nerveGround} stroke={FIG.nerve} strokeWidth="1.8" />
      <text x={x + 120} y="85" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>
        Cortex – attention
      </text>
      <text x={x + 120} y="103" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
        {attnText}
      </text>

      <line x1={x + 120} y1="118" x2={x + 120} y2="138" stroke={FIG.nerve} strokeWidth="3" markerEnd="url(#dial-arrow)" />

      {/* PAG – the dial */}
      <rect x={x} y="144" width="240" height="78" rx="12" fill={FIG.nerveGround} stroke={FIG.nerve} strokeWidth="1.8" />
      <text x={x + 150} y="170" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>
        Periaqueductal grey
      </text>
      <text x={x + 150} y="188" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
        the brainstem&rsquo;s pain-control hub
      </text>
      <text x={x + 150} y="206" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
        {pagText}
      </text>
      {/* the dial itself */}
      <g transform={`translate(${x + 38} 183)`}>
        <circle r="22" fill={FIG.white} stroke={FIG.nerveDark} strokeWidth="2" />
        <path d="M-15.5 15.5 A22 22 0 1 1 15.5 15.5" fill="none" stroke={FIG.line} strokeWidth="3" strokeLinecap="round" />
        <g transform={`rotate(${needleAngle})`}>
          <line x1="0" y1="0" x2="0" y2="-16" stroke={FIG.signalDark} strokeWidth="3" strokeLinecap="round" />
        </g>
        <circle r="3" fill={FIG.nerveDark} />
        <text x="-20" y="30" fontSize="9" fill={FIG.muted}>low</text>
        <text x="10" y="30" fontSize="9" fill={FIG.muted}>high</text>
      </g>

      <line x1={x + 120} y1="226" x2={x + 120} y2="246" stroke={FIG.nerve} strokeWidth="3" markerEnd="url(#dial-arrow)" />

      {/* dorsal horn – the gate */}
      <rect x={x} y="252" width="240" height="50" rx="12" fill={FIG.nerveGround} stroke={FIG.nerve} strokeWidth="1.8" />
      <text x={x + 120} y="273" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>
        Spinal cord – dorsal horn
      </text>
      <text x={x + 120} y="291" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
        {hornText}
      </text>

      {/* the signal that gets through */}
      <text x={x} y="330" fontSize="11.5" fill={FIG.signalText}>
        pain signal reaching the brain
      </text>
      <rect x={x} y="338" width="240" height="16" rx="8" fill={FIG.signalTint} />
      <rect x={x} y="338" width={signalWidth} height="16" rx="8" fill={FIG.signal} />
    </g>
  );

  return (
    <Figure caption="The same pathway, two settings. Attention in the cortex sets the periaqueductal grey – the brainstem's pain-control hub – which sets how much of the incoming signal the spinal cord passes upward. An absorbing task turns the dial down; watching for pain turns it up. Neither setting is imaginary; both are measured in brain scans.">
      <svg
        role="img"
        aria-labelledby="dial-title dial-desc"
        viewBox="0 0 680 370"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="dial-title">Attention as a dial on the descending pain-control pathway</title>
        <desc id="dial-desc">
          Two side-by-side columns show the same three-step pathway: cortex
          (attention), periaqueductal grey (the brainstem&rsquo;s pain-control
          hub, drawn as a dial), and the spinal cord&rsquo;s dorsal horn. In
          the left column, attention is absorbed elsewhere, the dial points
          low, and only a short amber bar of pain signal reaches the brain. In
          the right column, attention is fixed on the pain, the dial points
          high, and a long amber bar gets through.
        </desc>
        <defs>
          <marker
            id="dial-arrow"
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

        {col(
          40,
          "Attention elsewhere",
          "a cartoon, a game, a hard puzzle",
          "absorbed in the task",
          "turns the dial down",
          "less signal passes up",
          70,
          -50,
        )}
        {col(
          400,
          "Attention on the pain",
          "watching, bracing, checking",
          "fixed on the sensation",
          "turns the dial up",
          "more signal passes up",
          210,
          50,
        )}

        <line x1="340" y1="60" x2="340" y2="356" stroke={FIG.line} strokeWidth="1.5" strokeDasharray="4 5" />
      </svg>
    </Figure>
  );
}

export default function AttentionAndDistraction() {
  return (
    <div>
      <P>
        A nurse hands a four-year-old a tablet playing cartoons, and the
        blood draw goes better. A burn patient wearing a virtual-reality
        headset gets through a dressing change that was unbearable the day
        before. An adult with a sore back forgets it for an hour while
        absorbed in a problem at work, then feels it come roaring back the
        moment the problem is solved. These are not stories about weak pain or
        strong willpower. They are the same piece of physiology seen from
        three angles: <strong>attention is a dial on the pain system</strong>,
        and the dial is wired into your brainstem and spinal cord.
      </P>

      <H2 id="dial">The dial is real: brain to brainstem to spinal cord</H2>
      <DialFigure />
      <P>
        The explainer on{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          how pain works
        </Link>{" "}
        describes the spinal &ldquo;gate&rdquo; – the idea, now more than
        sixty years old, that the spinal cord does not simply relay danger
        signals upward but filters them, and that the brain can adjust the
        filter. The wiring behind that adjustment is called the{" "}
        <strong>descending pain-modulation pathway</strong>. It runs from the
        cortex down to a small region deep in the brainstem, the{" "}
        <strong>periaqueductal grey</strong>, and from there to the spinal
        cord&rsquo;s dorsal horn, where incoming pain signals first arrive.
        Signals from the brainstem can quiet those dorsal-horn cells or
        sharpen them. The brain, in other words, has a hand on the volume
        control at the very first relay.
      </P>
      <P>
        Attention is one of the things that turns that control. In 2002, a
        team at Oxford put nine volunteers in a high-resolution MRI scanner,
        applied painful heat to the hand, and simply asked them to either
        focus on the heat or distract themselves from it. During distraction,
        people rated the same heat as less painful – and activity in the
        periaqueductal grey <em>rose</em>. The more it rose, the bigger the
        drop in reported pain. That is the dial being turned, caught on
        camera.
      </P>

      <H2 id="brain-scans">What distraction looks like in the brain</H2>
      <P>
        A companion study from the same group used a different distraction – a
        demanding counting task – while volunteers received bursts of painful
        heat. Again, pain ratings fell when the task was hard. Across the
        brain&rsquo;s pain-processing network – the thalamus, the insula, part
        of the cingulate cortex – activity dropped in step with the ratings.
        At the same time, regions involved in control and evaluation became
        <em> more</em> active. Distraction was not switching the pain off; it
        was recruiting one set of circuits to dampen another.
      </P>
      <P>
        This matters for the question that hangs over every page in this
        hub: <strong>is my pain real?</strong> If distraction only changed
        what people <em>said</em>, you could argue it was politeness or
        suggestion. It changes what the scanner measures, at the earliest
        stages of processing. You are not imagining your pain, and you are
        not imagining it easing when your mind is elsewhere. Both are the
        nervous system doing what it is built to do.
      </P>

      <H2 id="why-it-works">Why a cartoon works, and why a hard puzzle works better</H2>
      <P>
        Attention is a limited resource, and pain is designed to seize it –
        that is the point of an alarm. Distraction works by giving the alarm
        competition. The experiments are consistent on one detail: the{" "}
        <strong>more demanding</strong> the competing task, the larger the
        effect. A background television does little; a game that requires
        your hands, your eyes, and a decision every second does a lot. That
        is why immersive virtual reality has become a research tool in burn
        care, where daily dressing changes are among the most painful
        procedures in medicine. In the first published cases, two teenagers
        who had struggled through wound care on opioids alone reported steep
        drops in pain, anxiety, and &ldquo;time spent thinking about the
        pain&rdquo; when the same procedure was done inside a headset rather
        than with an ordinary video game. Later trials in children with large
        burns found the same pattern.
      </P>
      <P>
        A child&rsquo;s cartoon is the same principle at a child&rsquo;s
        scale. In a randomized trial published in <em>Pain Management
        Nursing</em> in 2026, 114 preschool children having blood drawn were
        given music, cartoons, or routine care, and distress during the draw
        was lower in the music and cartoon groups. A 2018 Cochrane review pooling 59 trials
        and more than 5,500 children found that distraction reduced
        self-reported pain and distress during needle procedures, with the
        honest caveat that most trials were small and the quality of evidence
        was low. Low-quality evidence pointing one way across thirty trials is
        still worth knowing about – and it is why children&rsquo;s hospitals
        now treat distraction as standard care for shots and blood draws.
      </P>

      <H2 id="music">Where music fits</H2>
      <P>
        Music is an unusual distractor because it works on two dials at once.
        It occupies attention – more so when you choose it, know it, and
        follow it closely – and it shifts mood. The two are separable. In a
        2009 McGill study, researchers used pleasant and unpleasant smells to
        change volunteers&rsquo; mood independently of where their attention
        was directed, and found that <strong>mood mainly changed how
        unpleasant</strong> pain felt, while <strong>attention mainly changed
        how intense</strong> it felt – through partly different brain
        circuits. Music that absorbs you and lifts you is pulling on both.
        That is also why the effect is personal: a track that bores you is
        barely a distraction at all. The research on mood&rsquo;s share of
        this is on the{" "}
        <Link href="/understanding-pain/pain-and-emotion" className={link}>
          pain and emotion
        </Link>{" "}
        page.
      </P>

      <H2 id="cuts-both-ways">The dial turns both ways</H2>
      <P>
        Everything above has a mirror image. If attention away from pain turns
        the dial down, attention <em>on</em> pain turns it up – and the Oxford
        volunteers who were asked to focus on the heat felt exactly that.
        Nobody chooses to do this on purpose, but persistent pain tends to
        train it. Pain that has lasted months teaches a person to scan for
        it, to brace before moving, to check whether it is worse today. That
        vigilance is a reasonable response to a real problem. It is also, by
        the physiology on this page, a hand holding the dial up.
      </P>
      <P>
        The same mechanism is why warnings and expectations can make pain
        worse. Being told a procedure &ldquo;will really hurt&rdquo; aims
        attention at the sensation before it arrives, and the{" "}
        <Link href="/understanding-pain/the-nocebo-effect" className={link}>
          nocebo effect
        </Link>{" "}
        describes the chemistry that follows. None of this means pain is
        caused by paying attention to it. It means the pain system has an
        amplifier, and attention is one of its inputs – in both directions.
      </P>

      <H2 id="limits">The honest limits</H2>
      <P>
        Distraction is strongest where the pain is <strong>brief and
        predictable</strong>: a needle, a dressing change, a few minutes of
        physical therapy. The task has to last as long as the pain does, and
        most people cannot stay absorbed in a game for a week. For pain that
        persists, distraction is a tool for the worst hours, not a plan. The
        evidence also comes with real caveats: many trials are small, people
        cannot be blinded to whether they were distracted, and the effect
        sizes in children&rsquo;s needle studies are moderate, not dramatic.
      </P>
      <P>
        For persistent pain, the more useful descendant of this science is{" "}
        <strong>attention retraining</strong> – structured ways of changing
        the relationship with pain rather than fleeing it, taught in
        cognitive-behavioral therapy, acceptance-based approaches, and
        mindfulness-based programs. Those live in the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral therapies
        </Link>{" "}
        guide. They are not distraction, and they are not a verdict on the
        reality of your pain. They are a way of working the same dial with
        more patience.
      </P>
      <P>
        One safety note: distraction changes how pain is <em>felt</em>, not
        what is causing it. New, severe, or rapidly worsening pain – chest
        pain, a sudden severe headache, pain with fever, weakness, numbness,
        or loss of bladder or bowel control – needs urgent medical attention,
        however well a headset or a playlist is handling it in the moment.
      </P>

      <H2 id="takeaway">What to take from this</H2>
      <P>
        When a cartoon helps a child through a blood draw, nothing has been
        faked and nothing has been overcome by willpower. A real pathway from
        the cortex to the brainstem to the spinal cord has been nudged, and
        the signal reaching the brain has shrunk. The same pathway can be
        nudged the other way by fear and vigilance, which is one reason
        persistent pain so often grows beyond its original cause. If you want
        to use this deliberately – for a procedure, a flare, or as part of a
        longer plan – it is worth raising with your clinician or a pain
        psychologist, who can match the approach to your pain rather than to
        a headline.
      </P>
    </div>
  );
}
