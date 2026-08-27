import Link from "next/link";
import { Figure, H2, P, anim } from "./Figure";

/**
 * Figure 1 — the pain signal pathway, schematic. Skin → nerve → spinal
 * "gate" → brain, four numbered stages. Warm amber = the signal; teal = the
 * nervous system that interprets it; slate = anatomy. Alarm reds avoided.
 */
function PathwayFigure() {
  return (
    <Figure
      animate
      caption="The pain signal pathway: a stimulus becomes a signal, the spinal gate filters it, and the brain builds the experience of pain."
    >
      <svg
        role="img"
        aria-labelledby="pathway-title pathway-desc"
        viewBox="0 0 780 300"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
      <title id="pathway-title">The pain signal pathway</title>
      <desc id="pathway-desc">
        A stimulus at the skin activates nociceptors, which send a signal along
        a nerve to the spinal cord, where a gate filters it, and up to the
        brain, which builds the experience of pain.
      </desc>

      {/* signal path: skin -> spinal cord */}
      <line
        x1="118"
        y1="150"
        x2="366"
        y2="150"
        stroke="#f59e0b"
        strokeWidth="3"
        className="fig-draw"
        style={anim(0.25, 252)}
      />
      <circle cx="180" cy="150" r="4" fill="#f59e0b" className="fig-pop" style={anim(0.5)} />
      <circle cx="240" cy="150" r="4" fill="#f59e0b" className="fig-pop" style={anim(0.75)} />
      <circle cx="300" cy="150" r="4" fill="#f59e0b" className="fig-pop" style={anim(1.0)} />
      {/* path: spinal cord -> brain */}
      <path
        d="M441 116 C 520 70, 590 78, 628 104"
        fill="none"
        stroke="#0d9488"
        strokeWidth="3"
        className="fig-draw"
        style={anim(1.35, 215)}
      />

      {/* Stage 1 — skin + nociceptor */}
      <g>
        <rect x="34" y="132" width="84" height="40" rx="8" fill="#f1f5f9" stroke="#cbd5e1" />
        {/* stimulus spark */}
        <path
          d="M76 104 l-9 20 h11 l-8 20 22 -26 h-12 z"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1"
          className="fig-pop"
          style={anim(0)}
        />
        {/* free nerve endings */}
        <path d="M50 172 v14 M68 172 v18 M86 172 v14 M104 172 v18" stroke="#94a3b8" strokeWidth="2" fill="none" />
      </g>

      {/* Stage 3 — spinal cord cross-section with gate */}
      <g>
        <ellipse cx="404" cy="150" rx="40" ry="54" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        {/* butterfly gray matter */}
        <path
          d="M404 118 C 388 128, 386 150, 396 158 C 386 166, 388 188, 404 182 C 420 188, 422 166, 412 158 C 422 150, 420 128, 404 118 Z"
          fill="#e2e8f0"
          stroke="#cbd5e1"
        />
        {/* the gate */}
        <rect x="356" y="138" width="14" height="24" rx="3" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
        <line x1="363" y1="138" x2="363" y2="162" stroke="#0d9488" strokeWidth="1.5" />
      </g>

      {/* Stage 4 — brain */}
      <g>
        <path
          d="M636 104 C 628 84, 656 70, 676 78 C 692 68, 720 78, 718 98 C 732 104, 730 128, 712 132 C 706 148, 680 150, 672 138 C 652 146, 630 128, 636 104 Z"
          fill="#ccfbf1"
          stroke="#0f766e"
          strokeWidth="2"
        />
        <path
          d="M660 96 c 10 -6, 16 4, 26 -2 M654 112 c 12 6, 22 -4, 34 2 M690 90 c 6 8, 2 16, 8 22"
          fill="none"
          stroke="#0f766e"
          strokeWidth="1.5"
          className="fig-draw"
          style={anim(2.0, 130)}
        />
      </g>

      {/* numbered badges — each pops as its stage of the story arrives */}
      {[
        { n: "1", x: 76, y: 210, d: 0.1 },
        { n: "2", x: 242, y: 118, d: 0.7 },
        { n: "3", x: 404, y: 210, d: 1.4 },
        { n: "4", x: 678, y: 168, d: 2.15 },
      ].map((b) => (
        <g key={b.n} className="fig-pop" style={anim(b.d)}>
          <circle cx={b.x} cy={b.y} r="13" fill="#0f766e" />
          <text x={b.x} y={b.y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="#ffffff">
            {b.n}
          </text>
        </g>
      ))}

      {/* labels */}
      <g fontSize="14" fill="#334155" textAnchor="middle">
        <text x="76" y="248" fontWeight="600">Nociceptors</text>
        <text x="76" y="266" fill="#64748b">detect a threat</text>

        <text x="242" y="262" fontWeight="600">Signal travels</text>
        <text x="242" y="280" fill="#64748b">Aδ fast · C slow</text>

        <text x="404" y="248" fontWeight="600">The spinal gate</text>
        <text x="404" y="266" fill="#64748b">filters the signal</text>

        <text x="678" y="206" fontWeight="600">The brain</text>
        <text x="678" y="224" fill="#64748b">builds the pain</text>
      </g>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — central sensitization as a gain/volume metaphor. Same small
 * input, amplifier turned up, large output.
 */
function SensitizationFigure() {
  return (
    <Figure
      animate
      caption="Central sensitization: the same small input, amplified. The nervous system can turn up its own gain — and leave it up."
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
        producing a much larger pain output — the idea behind central
        sensitization.
      </desc>

      {/* input: small wave */}
      <text x="112" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill="#334155">
        Same input
      </text>
      <path
        d="M40 120 q 12 -20 24 0 t 24 0 t 24 0 t 24 0 t 24 0"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2.5"
        className="fig-draw"
        style={anim(0, 210)}
      />

      {/* amplifier */}
      <path d="M250 70 L 250 170 L 400 120 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
      {/* the gain dial, turned up */}
      <circle cx="300" cy="120" r="24" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
      {/* the needle sweeps from low to high once the input arrives */}
      <line
        x1="300"
        y1="120"
        x2="317"
        y2="105"
        stroke="#0f766e"
        strokeWidth="3"
        strokeLinecap="round"
        className="fig-dial"
        style={{ ...anim(0.9), transformOrigin: "300px 120px" }}
      />
      <circle cx="300" cy="120" r="3" fill="#0f766e" />
      <text
        x="325"
        y="185"
        textAnchor="middle"
        fontSize="13"
        fill="#64748b"
        className="fig-fade"
        style={anim(1.3)}
      >
        gain turned up
      </text>

      {/* output: large wave */}
      <text x="600" y="40" textAnchor="middle" fontSize="14" fontWeight="600" fill="#334155">
        Amplified pain
      </text>
      <path
        d="M440 120 q 15 -55 30 0 t 30 0 t 30 0 t 30 0 t 30 0"
        fill="none"
        stroke="#d97706"
        strokeWidth="3.5"
        className="fig-draw"
        style={anim(1.7, 380)}
      />

      {/* arrows */}
      <path
        d="M150 120 h 90"
        stroke="#cbd5e1"
        strokeWidth="2"
        markerEnd="url(#arrow-cs)"
        className="fig-fade"
        style={anim(0.55)}
      />
      <path
        d="M404 120 h 28"
        stroke="#cbd5e1"
        strokeWidth="2"
        markerEnd="url(#arrow-cs)"
        className="fig-fade"
        style={anim(1.5)}
      />
      <defs>
        <marker id="arrow-cs" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L 8 4 L 0 8 z" fill="#cbd5e1" />
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
        hurts — that a stubbed toe sends &ldquo;toe pain&rdquo; up to the brain
        like a phone call. The real path is more interesting, and understanding
        it changes what you can do about pain.
      </P>

      <H2 id="step-1">Step 1 — Nociceptors detect a threat</H2>
      <P>
        Scattered through your skin, muscles, joints, and organs are the free
        endings of specialized nerves called{" "}
        <strong>nociceptors</strong>. They are threat detectors. They fire when
        they sense something that could harm tissue: strong heat or cold, harsh
        pressure, or the chemicals released when cells are damaged. Firing a
        nociceptor is not yet pain — it is the first link in a chain.
      </P>

      <H2 id="step-2">Step 2 — The signal travels</H2>
      <P>
        Two kinds of nerve fibers carry the message toward the spinal cord.
        Fast, insulated <strong>A-delta fibers</strong>{" "}
        carry the sharp, immediate &ldquo;first pain&rdquo; that makes you pull
        your hand back before you have even thought about it. Slower{" "}
        <strong>C fibers</strong>{" "}
        carry the dull, aching, burning &ldquo;second pain&rdquo; that follows.
        It is why a burn stings instantly and then throbs a moment later.
      </P>

      <H2 id="step-3">Step 3 — The spinal gate</H2>
      <P>
        The signal does not travel straight through. At the spinal cord&rsquo;s{" "}
        <strong>dorsal horn</strong>{" "}
        it reaches a kind of checkpoint. In 1965, Ronald Melzack and Patrick
        Wall proposed the <strong>gate control theory</strong>: other nerve
        activity can open or close a &ldquo;gate&rdquo; that decides how much of
        the signal continues up to the brain.
      </P>
      <P>
        This is not just theory — you use it every day. When you rub a banged
        knee, you fire large, fast touch nerves that help{" "}
        <em>close</em> the gate, so fewer pain signals get through and the knee
        feels better. The same principle is behind TENS units and some other
        treatments. The signal is filtered and adjusted, not simply relayed.
      </P>

      <H2 id="step-4">Step 4 — The brain builds the pain</H2>
      <P>
        Only now does pain appear. The signal reaches the brain, which weighs it
        against everything else it knows — where you are, what you expect,
        whether you are afraid, what has hurt you before — and{" "}
        <em>constructs</em> the experience you feel. That is why the same injury
        can be agonizing on a bad day and barely register in the heat of a game.
      </P>
      <P>
        The world&rsquo;s pain scientists put this plainly. The International
        Association for the Study of Pain notes that pain and the raw nerve
        signal, called nociception, are different things — pain{" "}
        <strong>cannot be read off from nerve activity alone</strong>. This is
        also why &ldquo;the brain builds it&rdquo; never means &ldquo;you are
        imagining it.&rdquo; Constructed pain is real pain.
      </P>

      <H2 id="sensitization">When the volume gets stuck up</H2>
      <SensitizationFigure />
      <P>
        Here is the twist that matters most for lasting pain. A pain system that
        is asked to fire again and again can turn up its own gain — a process
        called <strong>central sensitization</strong>. Nerves in the spinal cord
        and brain become more responsive, so the same input produces a louder
        output.
      </P>
      <P>
        When that happens, light touch can hurt (<em>allodynia</em>) and painful
        things hurt more than expected (<em>hyperalgesia</em>). It is a normal
        property of the nervous system, but when it persists it becomes a
        driver of long-term pain — the bridge from a passing injury to{" "}
        <Link
          href="/understanding-pain/acute-vs-chronic-pain"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          chronic pain
        </Link>
        , and the core of the third pain type,{" "}
        <Link
          href="/understanding-pain/types-of-pain"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          nociplastic pain
        </Link>
        .
      </P>

      <H2 id="why-it-matters">Why this matters for you</H2>
      <P>
        If pain were only a damage readout, the only way to treat it would be to
        fix tissue. Because pain is a nervous-system process — detected, filtered
        at the gate, and built by the brain — there are many more points where it
        can be turned down: through the body, the nerves, and the brain
        together. That is the whole idea behind modern, multidisciplinary pain
        care, and it is the reason understanding pain is the first step toward
        changing it.
      </P>
    </div>
  );
}
