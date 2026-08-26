import Link from "next/link";
import { Figure, H2, P } from "@/components/science/Figure";

const LEVELS = [
  {
    anat: "Brain",
    yc: 70,
    title: "Non-invasive brain stimulation",
    detail: "rTMS & tDCS — magnetic or electrical pulses through the scalp",
  },
  {
    anat: "Spinal cord",
    yc: 150,
    title: "Spinal cord stimulation (SCS)",
    detail: "High-frequency 10 kHz (no tingling) · closed-loop, self-adjusting",
  },
  {
    anat: "DRG",
    yc: 230,
    title: "Dorsal root ganglion stimulation",
    detail: "Targets one nerve cluster for focal pain such as CRPS",
  },
  {
    anat: "Nerve",
    yc: 310,
    title: "Peripheral nerve stimulation",
    detail: "Stimulates a specific nerve close to the pain's source",
  },
];

function LevelsFigure() {
  return (
    <Figure caption="Neuromodulation now acts at every level of the pain pathway — from the brain down to a single peripheral nerve.">
      <svg
        role="img"
        aria-labelledby="nm-title nm-desc"
        viewBox="0 0 720 360"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="nm-title">Where neuromodulation acts</title>
        <desc id="nm-desc">
          A vertical map of the nervous system — brain, spinal cord, dorsal root
          ganglion, and peripheral nerve — each paired with the stimulation
          technique that targets it.
        </desc>

        {/* neuraxis */}
        <line x1="160" y1="52" x2="160" y2="328" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#nm-arrow)" />
        <defs>
          <marker id="nm-arrow" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill="#cbd5e1" />
          </marker>
        </defs>

        {LEVELS.map((l) => (
          <g key={l.anat}>
            <text x="138" y={l.yc + 4} textAnchor="end" fontSize="13" fontWeight="600" fill="#475569">
              {l.anat}
            </text>
            <line x1="170" y1={l.yc} x2="208" y2={l.yc} stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="160" cy={l.yc} r="9" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
            <rect x="208" y={l.yc - 30} width="490" height="60" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="226" y={l.yc - 6} fontSize="15" fontWeight="600" fill="#0f172a">
              {l.title}
            </text>
            <text x="226" y={l.yc + 16} fontSize="13" fill="#64748b">
              {l.detail}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function Neuromodulation() {
  return (
    <div>
      <LevelsFigure />

      <P>
        Some of the biggest advances in pain treatment are not drugs at all.
        Neuromodulation uses precisely placed electricity to change how pain
        signals travel — and over the past decade it has gone from a blunt
        instrument to something closer to a tuned one.
      </P>

      <H2 id="old-idea">The old idea: cover the pain</H2>
      <P>
        Classic spinal cord stimulation puts a thin lead near the spinal cord
        and delivers pulses that create a gentle tingling, called{" "}
        <em>paresthesia</em>, over the painful area. It works partly through the
        spinal &ldquo;gate&rdquo; described in{" "}
        <Link
          href="/understanding-pain/how-pain-works"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          how pain works
        </Link>
        : activity on large nerve fibers helps close the gate on pain signals.
        It helps many people — but the tingling is a constant reminder, and the
        setting never changes as you move.
      </P>

      <H2 id="cant-feel">Stimulation you can&rsquo;t feel</H2>
      <P>
        Newer <strong>high-frequency (10 kHz)</strong> stimulation relieves pain
        without producing any tingling at all. In 2021 the FDA approved a 10 kHz
        system specifically for <strong>painful diabetic neuropathy</strong> —
        the first spinal cord stimulator cleared for that condition — after a
        trial showed substantial, durable relief where medication had fallen
        short. Taking the paresthesia away also removed one of the therapy&rsquo;s
        least comfortable features.
      </P>

      <H2 id="listen">Stimulators that listen</H2>
      <P>
        The bigger leap is <strong>closed-loop</strong> stimulation. An
        FDA-approved system now measures the spinal cord&rsquo;s own electrical
        response to each pulse — a signal called an ECAP — and adjusts the next
        pulse more than a hundred times a second. Instead of a fixed dose of
        electricity, the device keeps the stimulation on target as you move,
        cough, or shift position, and it outperformed conventional open-loop
        stimulation in testing. It is the difference between a thermostat and a
        stuck dial.
      </P>

      <H2 id="precise">Aiming more precisely</H2>
      <P>
        Stimulation can also be pointed at exactly the right spot.{" "}
        <strong>Dorsal root ganglion (DRG) stimulation</strong>, FDA-approved in
        2016, targets the small bundle of nerve cell bodies that serves one
        region of the body — which makes it valuable for focal, hard-to-treat
        pain such as complex regional pain syndrome, where it outperformed
        standard stimulation in the pivotal ACCURATE trial. Peripheral nerve
        stimulation goes further still, treating a single nerve near the source
        of the pain.
      </P>

      <H2 id="no-surgery">No surgery required</H2>
      <P>
        Not every approach needs an implant. <strong>Non-invasive brain
        stimulation</strong> — repetitive transcranial magnetic stimulation
        (rTMS) and transcranial direct-current stimulation (tDCS) — sends
        magnetic or electrical pulses through the scalp to the brain&rsquo;s
        motor cortex. Studies suggest it can ease some drug-resistant nerve pain
        and fibromyalgia, though the evidence is still mixed and the technique is
        not yet a settled part of routine care. It is a frontier worth watching
        honestly, neither dismissed nor oversold.
      </P>

      <H2 id="arc">The through-line</H2>
      <P>
        Across all of these, the direction is the same: away from one fixed
        setting for everyone, toward stimulation that is precise, sometimes
        invisible, and increasingly able to adjust itself to the person wearing
        it. See where each device sits among everything in development in the{" "}
        <Link
          href="/future-of-pain-medicine/pipeline"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain treatment pipeline
        </Link>
        .
      </P>
    </div>
  );
}
