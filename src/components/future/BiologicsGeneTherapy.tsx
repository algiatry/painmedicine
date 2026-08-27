import Link from "next/link";
import { Figure, H2, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const STEPS = [
  {
    x: 40,
    top: 230,
    cx: 135,
    fill: FIG.ground,
    stroke: FIG.line,
    title: "Small molecules",
    sub: "act broadly",
    ex: "opioids · gabapentinoids",
  },
  {
    x: 250,
    top: 160,
    cx: 345,
    fill: FIG.indigoTint,
    stroke: FIG.indigo,
    title: "Antibodies",
    sub: "block one molecule",
    ex: "CGRP · anti-NGF",
  },
  {
    x: 460,
    top: 90,
    cx: 555,
    fill: FIG.violetTint,
    stroke: FIG.violet,
    title: "Gene therapy",
    sub: "targets the gene itself",
    ex: "NaV1.7 / SCN9A",
  },
];

function PrecisionFigure() {
  const baseline = 310;
  return (
    <Figure caption="The trend in pain drugs: from broad-acting molecules, to antibodies that block a single target, to gene therapies aimed at the pain gene itself.">
      <svg
        role="img"
        aria-labelledby="bio-title bio-desc"
        viewBox="0 0 740 340"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="bio-title">The precision ladder of pain treatments</title>
        <desc id="bio-desc">
          A rising three-step staircase: broad small-molecule drugs, then
          single-target antibodies, then gene therapy — each step more precise
          than the last.
        </desc>

        {/* precision arrow along the tops */}
        <line x1="120" y1="235" x2="660" y2="80" stroke={FIG.nerve} strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#bio-arrow)" />
        <defs>
          <marker id="bio-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill={FIG.nerve} />
          </marker>
        </defs>
        <text x="664" y="70" textAnchor="end" fontSize="12.5" fontWeight="600" fill={FIG.nerveDark}>
          more precise →
        </text>

        {STEPS.map((s) => (
          <g key={s.title}>
            <rect x={s.x} y={s.top} width="190" height={baseline - s.top} rx="10" fill={s.fill} stroke={s.stroke} strokeOpacity="0.5" />
            <text x={s.cx} y={s.top + 28} textAnchor="middle" fontSize="16" fontWeight="700" fill={FIG.ink}>
              {s.title}
            </text>
            <text x={s.cx} y={s.top + 48} textAnchor="middle" fontSize="13" fill={FIG.textMid}>
              {s.sub}
            </text>
            <text x={s.cx} y={s.top + 68} textAnchor="middle" fontSize="12" fill={FIG.muted}>
              {s.ex}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function BiologicsGeneTherapy() {
  return (
    <div>
      <PrecisionFigure />

      <P>
        Most familiar painkillers are small molecules that act broadly across the
        nervous system — effective, but blunt. The frontier of pain treatment is
        moving the other way: toward therapies precise enough to block a single
        molecule, or to reach the gene that makes it.
      </P>

      <H2 id="migraine">The migraine breakthrough</H2>
      <P>
        The proof that precision works came from migraine. A protein called{" "}
        <strong>CGRP</strong> helps drive migraine attacks, and in{" "}
        <strong>2018</strong> the FDA approved erenumab — the first antibody
        designed to block the CGRP pathway and prevent migraine. It was the first
        approved antibody against its kind of receptor, and it worked: a whole
        class of CGRP antibodies and oral &ldquo;gepant&rdquo; drugs followed.
        Earlier attempts at small-molecule CGRP blockers had stumbled on liver
        safety; the precisely-targeted biologic route is what finally broke
        through. The lesson for all of pain medicine: block the right single
        molecule, and you can prevent pain.
      </P>

      <H2 id="ngf">Targeting the pain amplifiers</H2>
      <P>
        Some proteins act like fertilizer for pain signaling. The best-studied is{" "}
        <strong>nerve growth factor (NGF)</strong>. Antibodies that block it —
        led by tanezumab — clearly relieved osteoarthritis pain, but they also
        raised the risk of rapidly progressive joint damage, and in 2021 the
        program was halted after an FDA panel voted against it. The story
        isn&rsquo;t over: a newer biologic, LEVI-04, targets a related
        neurotrophin and, in a 2026 trial, improved pain and function{" "}
        <em>without</em> the joint-damage signal that sank its predecessor. It is
        a vivid example of how powerful — and how tricky — this target is.
      </P>

      <H2 id="gene">Editing the pain system itself</H2>
      <P>
        The most precise frontier is gene therapy. A gene called{" "}
        <strong>SCN9A</strong> builds the sodium channel <strong>NaV1.7</strong>,
        a master switch near the start of the pain pathway — people born without
        it feel almost no pain. Experimental therapies now use engineered
        proteins to <em>turn that gene down</em> in the sensory nerves, aiming
        for long-lasting relief from a single treatment. One such therapy,
        working through this exact mechanism, has entered its first human trial.
        It is the earliest of early days, but the ambition is remarkable:
        quieting pain at its genetic source.
      </P>

      <H2 id="hype">A word on regenerative hype</H2>
      <P>
        Not everything marketed as a &ldquo;biologic&rdquo; is on equally solid
        ground. Regenerative treatments such as platelet-rich plasma and stem-cell
        injections are widely advertised for joint pain, but the evidence that
        they meaningfully outperform simpler options remains mixed and
        contested. Genuine biologic breakthroughs and clinics selling hope are
        both part of this space — telling them apart is exactly what a page like
        this is for.
      </P>

      <H2 id="ladder">Climbing the precision ladder</H2>
      <P>
        From broad drugs, to antibodies against one molecule, to therapies that
        edit the pain gene — the direction is clear even where the science is
        young. Follow the specific candidates by trial phase in the{" "}
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
