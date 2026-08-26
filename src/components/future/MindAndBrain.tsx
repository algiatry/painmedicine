import Link from "next/link";
import { Figure, H2, P } from "@/components/science/Figure";

const APPROACHES = [
  {
    x: 30,
    cx: 140,
    accent: "#0d9488",
    tint: "#ccfbf1",
    title: "Pain reprocessing",
    l1: "Teaches the brain that safe",
    l2: "signals aren't danger.",
    tag: "Landmark trial",
  },
  {
    x: 270,
    cx: 380,
    accent: "#0891b2",
    tint: "#cffafe",
    title: "Virtual reality",
    l1: "Immersive at-home skills:",
    l2: "breathing, mindfulness.",
    tag: "FDA-authorized 2021",
  },
  {
    x: 510,
    cx: 620,
    accent: "#7c3aed",
    tint: "#ede9fe",
    title: "Psychedelics",
    l1: "Testing whether plasticity",
    l2: "can reset chronic pain.",
    tag: "Early research",
  },
];

function BrainFigure() {
  return (
    <Figure caption="Because the brain builds the experience of pain, treatments that retrain the brain are being taken seriously as medicine.">
      <svg
        role="img"
        aria-labelledby="mb-title mb-desc"
        viewBox="0 0 760 330"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="mb-title">Retraining the brain that builds pain</title>
        <desc id="mb-desc">
          A brain at the top with three approaches below — pain reprocessing
          therapy, virtual reality, and psychedelics research — each connected
          upward to it.
        </desc>

        {/* the brain */}
        <g>
          <ellipse cx="380" cy="66" rx="58" ry="42" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" />
          <path
            d="M340 52 c 14 -10, 26 6, 40 -3 c 12 -7, 28 2, 34 10 M336 74 c 16 8, 30 -5, 46 3 c 12 6, 26 0, 34 -4 M380 30 c 6 12, 2 24, 6 36"
            fill="none"
            stroke="#0f766e"
            strokeWidth="1.5"
          />
        </g>
        <text x="380" y="122" textAnchor="middle" fontSize="12.5" fill="#64748b">
          the brain that constructs pain
        </text>

        <defs>
          <marker id="mb-arrow" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill="#cbd5e1" />
          </marker>
        </defs>

        {APPROACHES.map((a) => (
          <g key={a.title}>
            {/* connector up to the brain */}
            <line x1={a.cx} y1="150" x2={380} y2="112" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#mb-arrow)" />
            <rect x={a.x} y="150" width="220" height="162" rx="14" fill="#ffffff" stroke="#e2e8f0" />
            <circle cx={a.cx} cy="188" r="20" fill={a.tint} />
            <circle cx={a.cx} cy="188" r="6" fill={a.accent} />
            <text x={a.cx} y="238" textAnchor="middle" fontSize="15.5" fontWeight="700" fill="#0f172a">
              {a.title}
            </text>
            <text x={a.cx} y="260" textAnchor="middle" fontSize="12.5" fill="#475569">
              {a.l1}
            </text>
            <text x={a.cx} y="277" textAnchor="middle" fontSize="12.5" fill="#475569">
              {a.l2}
            </text>
            <rect x={a.cx - 68} y="290" width="136" height="20" rx="10" fill={a.tint} />
            <text x={a.cx} y="304" textAnchor="middle" fontSize="11.5" fontWeight="600" fill={a.accent}>
              {a.tag}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function MindAndBrain() {
  return (
    <div>
      <BrainFigure />

      <P>
        The single most important idea in modern pain science is that the brain{" "}
        <em>builds</em> the experience of pain — it is not a simple readout from
        the body, as{" "}
        <Link
          href="/understanding-pain/how-pain-works"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          how pain works
        </Link>{" "}
        explains. That idea has a hopeful corollary: if the brain builds pain,
        the brain can be part of the cure. This is some of the most promising —
        and most misunderstood — territory in the field.
      </P>

      <H2 id="unlearn">Unlearning pain</H2>
      <P>
        <strong>Pain reprocessing therapy</strong> is built on a simple premise:
        chronic pain can persist as a kind of false alarm — the brain keeps
        signaling danger after the body is safe — and that alarm can be unlearned.
        In a landmark 2021 randomized trial, about{" "}
        <strong>two-thirds of people with chronic back pain became pain-free or
        nearly pain-free</strong> after four weeks, and most held onto that
        relief a year later. Brain imaging showed the changes were real. It does
        not work for every kind of pain, but for a sensitized, alarm-driven
        system it was a striking result.
      </P>

      <H2 id="vr">A prescription you wear</H2>
      <P>
        In 2021 the FDA authorized the first{" "}
        <strong>virtual-reality program</strong> for chronic low back pain — a
        prescription device, not a game. Over eight weeks at home, a headset
        guides users through pain-science education, breathing training,
        mindfulness, and relaxation, essentially delivering cognitive behavioral
        skills in an immersive form. Virtual reality is also used to blunt acute
        pain during procedures, where its power to absorb attention gives the
        brain less room to build pain in the first place.
      </P>

      <H2 id="psychedelics">The psychedelic question</H2>
      <P>
        The most speculative frontier is <strong>psychedelics</strong>. Small
        early trials are testing whether a supervised dose of psilocybin,
        paired with therapy, can help conditions like fibromyalgia and
        phantom-limb pain — the idea being that a temporary surge of brain
        plasticity might let a stuck, sensitized pain system be reset. The
        rationale is serious and the early safety signals are encouraging, but
        the honest summary is: this is <em>investigational</em>. The studies are
        tiny, it is not an available treatment, and enthusiasm has run well ahead
        of the evidence.
      </P>

      <H2 id="not-imaginary">Why this is not &ldquo;all in your head&rdquo;</H2>
      <P>
        It is worth being blunt about this, because the phrase has been used to
        dismiss people in pain for generations. Brain-based treatments are{" "}
        <strong>not</strong> a claim that pain is imaginary. All pain is produced
        by the nervous system, so treatments aimed at the brain are aimed at the
        real machinery that generates it. Retraining that machinery is no more
        &ldquo;imaginary&rdquo; than physical therapy is imaginary for a muscle.
        The mind is not separate from the medicine — it is part of it.
      </P>
    </div>
  );
}
