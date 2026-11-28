import Link from "next/link";
import { JournalSequence } from "@/components/science/JournalFigure";
import { Figure, H2, KeyTakeaways, P, anim } from "./Figure";
import { FIG } from "@/lib/fig";
import TreatmentPathwayInteractive from "./TreatmentPathwayInteractive";
import GlossaryTerm from "../GlossaryTerm";

function PathwayFigure() {
  return (
    <JournalSequence
      title="The pain signal pathway"
      description="A stimulus activates nociceptors. A nerve carries the signal to the spinal cord, where signaling is filtered. The brain processes the signal into the experience of pain."
      caption="The pain signal pathway: a stimulus becomes a signal, the spinal gate filters it, and the brain builds the experience of pain."
      stages={[
        { name: "Nociceptors", lines: ["Detect a possible threat."] },
        { name: "Peripheral nerve", lines: ["Carries the signal to the spinal cord."] },
        { name: "Spinal gate", lines: ["Filters the signal."] },
        { name: "Brain", lines: ["Builds the experience of pain."] },
      ]}
    />
  );
}

function SensitizationFigure() {
  return (
    <Figure
      animate
      caption="Central sensitization: the same small input, amplified. The nervous system can turn up its own gain, and leave it up."
    >
      <svg
        role="img"
        aria-labelledby="sensitize-title sensitize-desc"
        viewBox="0 0 720 220"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
      <title id="sensitize-title">Central sensitization turns up the gain</title>
      <desc id="sensitize-desc">
        The same small input signal passes through an amplifier turned to high,
        producing a much larger pain output, the idea behind central
        sensitization.
      </desc>

      {/* input: small wave */}
      <text x="112" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill={FIG.text}>
        Same input
      </text>
      <path
        d="M40 120 q 12 -20 24 0 t 24 0 t 24 0 t 24 0 t 24 0"
        fill="none"
        stroke={FIG.signal}
        strokeWidth="2.5"
        className="fig-draw"
        style={anim(0, 210)}
      />

      {/* amplifier */}
      <path d="M250 70 L 250 170 L 400 120 Z" fill={FIG.ground} stroke={FIG.faint} strokeWidth="2" />
      {/* the gain dial, turned up */}
      <circle cx="300" cy="120" r="24" fill={FIG.white} stroke={FIG.nerve} strokeWidth="2" />
      {/* the needle sweeps from low to high once the input arrives */}
      <line
        x1="300"
        y1="120"
        x2="317"
        y2="105"
        stroke={FIG.nerveDark}
        strokeWidth="3"
        strokeLinecap="round"
        className="fig-dial"
        style={{ ...anim(0.9), transformOrigin: "300px 120px" }}
      />
      <circle cx="300" cy="120" r="3" fill={FIG.nerveDark} />
      <text
        x="325"
        y="185"
        textAnchor="middle"
        fontSize="13"
        fill={FIG.muted}
        className="fig-fade"
        style={anim(1.3)}
      >
        gain turned up
      </text>

      {/* output: large wave */}
      <text x="600" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill={FIG.text}>
        Amplified pain
      </text>
      <path
        d="M440 120 q 15 -55 30 0 t 30 0 t 30 0 t 30 0 t 30 0"
        fill="none"
        stroke={FIG.signalDark}
        strokeWidth="3.5"
        className="fig-draw"
        style={anim(1.7, 380)}
      />

      {/* arrows */}
      <path
        d="M150 120 h 90"
        stroke={FIG.line}
        strokeWidth="2"
        markerEnd="url(#arrow-cs)"
        className="fig-fade"
        style={anim(0.55)}
      />
      <path
        d="M404 120 h 28"
        stroke={FIG.line}
        strokeWidth="2"
        markerEnd="url(#arrow-cs)"
        className="fig-fade"
        style={anim(1.5)}
      />
      <defs>
        <marker id="arrow-cs" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L 8 4 L 0 8 z" fill={FIG.line} />
        </marker>
      </defs>
      </svg>
    </Figure>
  );
}

export default function HowPainWorks() {
  return (
    <div>
      <PathwayFigure />

      <P>
        It feels obvious that pain comes straight from the part of you that
        hurts – that a stubbed toe sends &ldquo;toe pain&rdquo; up to the brain
        like a phone call. The real path is more interesting, and understanding
        it changes what you can do about pain.
      </P>

      <TreatmentPathwayInteractive />

      <KeyTakeaways
        items={[
          <>
            Pain is <strong>built by the brain</strong>, not read straight off
            nerve activity.
          </>,
          <>
            The <strong>spinal gate</strong> filters the signal before it
            reaches the brain.
          </>,
          <>
            <strong>Central sensitization</strong> can turn up the nervous
            system&rsquo;s gain, so the same input hurts more.
          </>,
          <>
            Because pain is a nervous-system process, there are{" "}
            <strong>many more points</strong> where it can be turned down.
          </>,
        ]}
      />

      <H2 id="step-1">Step 1 – Nociceptors detect a threat</H2>
      <P>
        Scattered through your skin, muscles, joints, and organs are the free
        endings of specialized nerves called{" "}
        <GlossaryTerm
          term="nociceptors"
          definition="Specialized peripheral nerve endings that detect potentially damaging heat, pressure, or chemical signals and send an alert toward the spinal cord."
        />
        . They are threat detectors. They fire when
        they sense something that could harm tissue: strong heat or cold, harsh
        pressure, or the chemicals released when cells are damaged. Firing a
        nociceptor is not yet pain – it is the first link in a chain.
      </P>

      <H2 id="step-2">Step 2 – The signal travels</H2>
      <P>
        Two kinds of nerve fibers carry the message toward the spinal cord.
        Fast, insulated <strong>A-delta fibers</strong>{" "}
        carry the sharp, immediate &ldquo;first pain&rdquo; that makes you pull
        your hand back before you have even thought about it. Slower{" "}
        <strong>C fibers</strong>{" "}
        carry the dull, aching, burning &ldquo;second pain&rdquo; that follows.
        It is why a burn stings instantly and then throbs a moment later.
      </P>

      <H2 id="step-3">Step 3 – The spinal gate</H2>
      <P>
        The signal does not travel straight through. At the spinal cord&rsquo;s{" "}
        <strong>dorsal horn</strong>{" "}
        it reaches a kind of checkpoint. In 1965, Ronald Melzack and Patrick
        Wall proposed the <strong>gate control theory</strong>: other nerve
        activity can open or close a &ldquo;gate&rdquo; that decides how much of
        the signal continues up to the brain.
      </P>
      <P>
        This is not just theory. You use it every day. When you rub a banged
        knee, you fire large, fast touch nerves that help{" "}
        <em>close</em> the gate, so fewer pain signals get through and the knee
        feels better. The same principle is behind TENS units and some other
        treatments. The signal is filtered and adjusted, not simply relayed.
      </P>

      <H2 id="step-4">Step 4 – The brain builds the pain</H2>
      <P>
        Only now does pain appear. The signal reaches the brain, which weighs it
        against everything else it knows, where you are, what you expect,
        whether you are afraid, what has hurt you before, and{" "}
        <em>constructs</em> the experience you feel. That is why the same injury
        can be agonizing on a bad day and barely register in the heat of a game.
      </P>
      <P>
        The world&rsquo;s pain scientists put this plainly. The International
        Association for the Study of Pain notes that pain and the raw nerve
        signal, called nociception, are different things – pain{" "}
        <strong>cannot be read off from nerve activity alone</strong>. This is
        also why &ldquo;the brain builds it&rdquo; never means &ldquo;you are
        imagining it.&rdquo; Constructed pain is real pain.
      </P>

      <H2 id="sensitization">When the volume gets stuck up</H2>
      <SensitizationFigure />
      <P>
        Here is the twist that matters most for lasting pain. A pain system that
        is asked to fire again and again can turn up its own gain – a process
        called <strong>central sensitization</strong>. Nerves in the spinal cord
        and brain become more responsive, so the same input produces a louder
        output.
      </P>
      <P>
        When that happens, light touch can hurt (<em>allodynia</em>) and painful
        things hurt more than expected (<em>hyperalgesia</em>). It is a normal
        property of the nervous system, but when it persists it becomes a
        driver of long-term pain – the bridge from a passing injury to{" "}
        <Link
          href="/understanding-pain/acute-vs-chronic-pain"
          className="text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
        >
          chronic pain
        </Link>
        , and the core of the third pain type,{" "}
        <Link
          href="/understanding-pain/types-of-pain"
          className="text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
        >
          nociplastic pain
        </Link>
        .
      </P>

      <H2 id="why-it-matters">Why this matters for you</H2>
      <P>
        If pain were only a damage readout, the only way to treat it would be to
        fix tissue. Because pain is a nervous-system process (detected, filtered
        at the gate, and built by the brain) there are many more points where it
        can be turned down: through the body, the nerves, and the brain
        together. That is the whole idea behind modern, multidisciplinary pain
        care, and it is the reason understanding pain is the first step toward
        changing it.
      </P>
    </div>
  );
}
