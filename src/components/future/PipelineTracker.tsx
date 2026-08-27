import JsonLd from "@/components/JsonLd";
import { Figure, H2, P, anim } from "@/components/science/Figure";
import { SITE } from "@/lib/site";
import {
  CANDIDATES,
  LAST_REVIEWED,
  MODALITY_COLOR,
  PHASE_ORDER,
  candidatesByPhase,
  type Candidate,
  type Modality,
  type Phase,
} from "@/lib/pipeline";
import { FIG } from "@/lib/fig";

const MODALITY_TINT: Record<Modality, { fill: string; text: string }> = {
  "Small molecule": { fill: FIG.nerveTint, text: FIG.nerveDark },
  Biologic: { fill: FIG.indigoTint, text: FIG.indigoText },
  Device: { fill: FIG.cyanTint, text: FIG.cyanText },
  "Gene therapy": { fill: FIG.violetTint, text: FIG.violetText },
};

const PHASE_BADGE: Record<Phase, string> = {
  Approved: "bg-teal-600 text-white",
  "Phase 3": "bg-teal-100 text-teal-800",
  "Phase 2": "bg-amber-100 text-amber-800",
  "Phase 1": "bg-slate-100 text-slate-700",
  Discontinued: "bg-slate-100 text-slate-500 line-through decoration-slate-400",
};

const PHASE_GROUP_LABEL: Record<Phase, string> = {
  Approved: "Approved & available",
  "Phase 3": "In Phase 3 (pivotal trials)",
  "Phase 2": "In Phase 2",
  "Phase 1": "In Phase 1 (first-in-human)",
  Discontinued: "Halted",
};

function chipLabel(name: string) {
  return name === "Evoke closed-loop SCS" ? "Evoke SCS" : name;
}

/**
 * The pipeline board — a swimlane chart computed entirely from lib/pipeline.ts,
 * so the quarterly data refresh redraws the art for free. Modality lanes ×
 * phase columns; every candidate is a plotted node; the dashed teal line is
 * FDA approval; halted candidates fall to a hatched siding below the board.
 */
function LandscapeFigure() {
  const STAGES: Phase[] = ["Phase 1", "Phase 2", "Phase 3", "Approved"];
  const MODALITIES = Object.keys(MODALITY_COLOR) as Modality[];
  const halted = candidatesByPhase("Discontinued");

  // geometry
  const GUTTER = 122; // lane labels
  const COL_W = 156;
  const COL_GAP = 8;
  const colX0 = (i: number) => GUTTER + 6 + i * (COL_W + COL_GAP);
  const LANE_Y0 = 68;
  const LANE_H = 64;
  const boardBottom = LANE_Y0 + MODALITIES.length * LANE_H;
  const approvalX = colX0(3) - COL_GAP / 2; // between Phase 3 and Approved
  const stripY = boardBottom + 28;
  const H = halted.length > 0 ? stripY + 52 + 14 : boardBottom + 20;
  const W = 800;
  const boardRight = colX0(3) + COL_W;

  // node stagger: columns light up left to right
  const colDelay = [0.9, 1.15, 1.4, 2.0];

  return (
    <Figure
      animate
      caption="The board, drawn live from the tracker data: each lane is a mechanism type, each column a development stage, and the dashed teal line is FDA approval. Halted candidates drop to the siding at the bottom — tanezumab fell at the line."
    >
      <svg
        role="img"
        aria-labelledby="landscape-title landscape-desc"
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="landscape-title">The pain-treatment pipeline board</title>
        <desc id="landscape-desc">
          A swimlane chart. Rows are mechanism types — small molecule, biologic,
          device, gene therapy. Columns run Phase 1, Phase 2, Phase 3, then
          Approved, separated by a dashed line marking FDA approval. Each
          candidate is a dot in its lane and stage; halted candidates appear in
          a separate siding at the bottom.
        </desc>

        <defs>
          <marker id="pl-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill={FIG.line} />
          </marker>
        </defs>

        {/* progression axis */}
        <line
          x1={GUTTER}
          y1="24"
          x2={boardRight - 8}
          y2="24"
          stroke={FIG.soft}
          strokeWidth="2"
          markerEnd="url(#pl-arrow)"
          className="fig-draw"
          style={anim(0.15, 670)}
        />
        <text x={boardRight - 14} y="16" textAnchor="end" fontSize="12" fill={FIG.faint} className="fig-fade" style={anim(0.5)}>
          closer to patients →
        </text>

        {/* modality lanes */}
        {MODALITIES.map((m, li) => {
          const y = LANE_Y0 + li * LANE_H;
          return (
            <g key={m} className="fig-fade" style={anim(0.1 + li * 0.12)}>
              <rect
                x={GUTTER}
                y={y}
                width={boardRight - GUTTER}
                height={LANE_H}
                fill={MODALITY_COLOR[m]}
                fillOpacity={0.055}
              />
              <line x1={GUTTER} y1={y} x2={boardRight} y2={y} stroke={FIG.soft} strokeWidth="1" />
              <text
                x={GUTTER - 12}
                y={y + LANE_H / 2 + 4}
                textAnchor="end"
                fontSize="12.5"
                fontWeight="600"
                fill={MODALITY_TINT[m].text}
              >
                {m}
              </text>
            </g>
          );
        })}
        <line x1={GUTTER} y1={boardBottom} x2={boardRight} y2={boardBottom} stroke={FIG.soft} strokeWidth="1" className="fig-fade" style={anim(0.5)} />

        {/* column headers */}
        {STAGES.map((stage, ci) => (
          <text
            key={stage}
            x={colX0(ci) + COL_W / 2}
            y="52"
            textAnchor="middle"
            fontSize="13.5"
            fontWeight="700"
            fill={stage === "Approved" ? FIG.nerveDark : FIG.text}
            className="fig-fade"
            style={anim(0.35 + ci * 0.12)}
          >
            {stage}
            <tspan dx="5" fill={FIG.faint} fontWeight="400">{`(${candidatesByPhase(stage).length})`}</tspan>
          </text>
        ))}

        {/* approved zone + the approval line */}
        <rect
          x={approvalX + COL_GAP / 2}
          y={LANE_Y0}
          width={COL_W}
          height={boardBottom - LANE_Y0}
          fill={FIG.nerveTint}
          fillOpacity="0.3"
          className="fig-fade"
          style={anim(1.7)}
        />
        <line
          x1={approvalX}
          y1={LANE_Y0 - 6}
          x2={approvalX}
          y2={boardBottom + 6}
          stroke={FIG.nerveDark}
          strokeWidth="2"
          strokeDasharray="6 5"
          strokeLinecap="round"
          className="fig-draw"
          style={anim(1.65, 290)}
        />
        <text
          x={approvalX}
          y={boardBottom + 20}
          textAnchor="middle"
          fontSize="11.5"
          fontWeight="700"
          fill={FIG.nerveDark}
          className="fig-fade"
          style={anim(1.85)}
        >
          FDA approval
        </text>

        {/* candidate nodes, stacked per (lane, column) cell */}
        {MODALITIES.map((m, li) =>
          STAGES.map((stage, ci) => {
            const cell = CANDIDATES.filter((c) => c.modality === m && c.phase === stage);
            return cell.map((c, i) => {
              const cx = colX0(ci) + 18;
              const cy = LANE_Y0 + li * LANE_H + LANE_H / 2 + (i - (cell.length - 1) / 2) * 26;
              const approved = stage === "Approved";
              return (
                <g key={c.name} className="fig-pop" style={anim(colDelay[ci] + i * 0.15)}>
                  {approved && (
                    <circle cx={cx} cy={cy} r="11" fill="none" stroke={MODALITY_COLOR[m]} strokeWidth="1.5" strokeOpacity="0.5" />
                  )}
                  <circle cx={cx} cy={cy} r={approved ? 7 : 6} fill={MODALITY_COLOR[m]} />
                  <text
                    x={cx + 15}
                    y={cy + 4}
                    fontSize="11.5"
                    fontWeight={approved ? 700 : 600}
                    fill={MODALITY_TINT[m].text}
                  >
                    {chipLabel(c.name)}
                  </text>
                </g>
              );
            });
          }),
        )}

        {/* the halted siding */}
        {halted.length > 0 && (
          <>
            <path
              d={`M${approvalX} ${LANE_Y0 + 1.5 * LANE_H} C ${approvalX} ${boardBottom + 10}, ${approvalX - 60} ${stripY - 6}, ${approvalX - 90} ${stripY + 24}`}
              fill="none"
              stroke={FIG.faint}
              strokeWidth="1.8"
              strokeDasharray="4 5"
              markerEnd="url(#pl-arrow)"
              className="fig-draw fig-fade"
              style={anim(2.5, 220)}
            />
            <g className="fig-fade" style={anim(2.7)}>
              <rect
                x={GUTTER}
                y={stripY}
                width={boardRight - GUTTER}
                height={48}
                rx={10}
                fill={FIG.paper}
                stroke={FIG.line}
                strokeDasharray="7 5"
              />
              <text x={GUTTER - 12} y={stripY + 28} textAnchor="end" fontSize="12.5" fontWeight="600" fill={FIG.faint}>
                Halted
              </text>
              {halted.map((c, i) => {
                const cx = approvalX - 74 + i * 190;
                const cy = stripY + 24;
                return (
                  <g key={c.name}>
                    <circle cx={cx} cy={cy} r="6" fill={FIG.white} stroke={FIG.faint} strokeWidth="1.8" strokeDasharray="3 3" />
                    <text x={cx + 14} y={cy + 4} fontSize="11.5" fontWeight="600" fill={FIG.muted}>
                      {chipLabel(c.name)}
                      <tspan dx="5" fill={FIG.faint} fontWeight="400">— {c.modality.toLowerCase()}</tspan>
                    </text>
                  </g>
                );
              })}
            </g>
          </>
        )}
      </svg>
    </Figure>
  );
}

function CandidateCard({ c }: { c: Candidate }) {
  return (
    <li className="rounded-xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{c.name}</h3>
          {c.code && (
            <p className="text-sm text-slate-500">{c.code}</p>
          )}
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${PHASE_BADGE[c.phase]}`}
        >
          {c.phase}
        </span>
      </div>

      <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
        <div className="flex gap-2">
          <dt className="shrink-0 font-medium text-slate-500">Mechanism</dt>
          <dd className="text-slate-700">{c.mechanism}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 font-medium text-slate-500">Type</dt>
          <dd className="text-slate-700">{c.modality}</dd>
        </div>
        <div className="flex gap-2 sm:col-span-2">
          <dt className="shrink-0 font-medium text-slate-500">For</dt>
          <dd className="text-slate-700">{c.indication}</dd>
        </div>
        <div className="flex gap-2 sm:col-span-2">
          <dt className="shrink-0 font-medium text-slate-500">Sponsor</dt>
          <dd className="text-slate-700">{c.sponsor}</dd>
        </div>
      </dl>

      <p className="mt-3 text-slate-700">{c.why}</p>
      {c.note && <p className="mt-2 text-sm text-slate-500">{c.note}</p>}

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <a
          href={c.source.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          {c.source.label}
        </a>
        <span className="text-slate-400">· status checked {c.updated}</span>
      </div>
    </li>
  );
}

function datasetJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Pain Treatment Pipeline Tracker",
    description:
      "A source-cited tracker of drugs and devices in development to treat pain, with mechanism, development phase, sponsor, and lead indication for each candidate.",
    url: `${SITE.url}/future-of-pain-medicine/pipeline`,
    dateModified: LAST_REVIEWED,
    isAccessibleForFree: true,
    creator: { "@type": "Organization", name: SITE.name, url: SITE.url },
    keywords: [
      "non-opioid analgesics",
      "pain drug pipeline",
      "NaV1.8 inhibitor",
      "neuromodulation",
      "gene therapy for pain",
      "clinical trials",
    ],
  };
}

export default function PipelineTracker() {
  const activePhases = PHASE_ORDER.filter(
    (p) => candidatesByPhase(p).length > 0,
  );

  return (
    <div>
      <JsonLd data={datasetJsonLd()} />

      <LandscapeFigure />

      <P>
        For most of the last forty years, treating pain meant choosing among old
        drug classes — opioids, anti-inflammatories, a handful of nerve-pain
        medicines borrowed from other fields. That has started to change. Below
        is what is actually moving through development now: what each candidate
        is, how it works, and how far along it is.
      </P>
      <P>
        A word on how to read it, because this is a page where honesty matters
        more than hype. A candidate in a trial is <strong>not</strong> an
        available treatment, and most investigational drugs never reach patients
        at all. Only the entries marked <em>Approved</em> are cleared for use —
        and even then only for the specific condition on their label. This is
        reporting on the science, not medical advice; decisions belong with your
        clinician.
      </P>
      <P>
        And because much of this pipeline exists to reduce reliance on opioids:
        if you or someone you love is struggling with opioid or other substance
        use, the SAMHSA National Helpline is free, confidential, and open 24/7
        at <strong>1-800-662-HELP (4357)</strong>.
      </P>

      {activePhases.map((phase) => {
        const list = candidatesByPhase(phase);
        return (
          <section key={phase} aria-labelledby={`grp-${phase}`}>
            <H2 id={`grp-${phase}`}>
              {PHASE_GROUP_LABEL[phase]}
              <span className="ml-2 text-base font-normal text-slate-400">
                {list.length}
              </span>
            </H2>
            <ul className="mt-5 space-y-4">
              {list.map((c) => (
                <CandidateCard key={c.name} c={c} />
              ))}
            </ul>
          </section>
        );
      })}

      <H2 id="method">How this tracker is maintained</H2>
      <P>
        Every entry is dated and linked to a primary source — a regulator, a
        trial registry, a peer-reviewed journal, or the sponsor&rsquo;s own
        release. Development is fast-moving, so this page is re-checked
        quarterly; the status shown was last reviewed on{" "}
        <strong>{formatReviewed(LAST_REVIEWED)}</strong>. For anything you plan
        to act on, confirm the current status on{" "}
        <a
          href="https://clinicaltrials.gov/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          ClinicalTrials.gov
        </a>{" "}
        and with your care team.
      </P>
      <p className="mt-4 text-sm text-slate-500">
        This tracker covers {CANDIDATES.length} notable candidates and is not
        exhaustive — the full pain pipeline runs to hundreds of programs. It
        favors candidates that are late-stage, first-in-class, or otherwise
        signal where the field is heading.
      </p>
    </div>
  );
}

function formatReviewed(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
