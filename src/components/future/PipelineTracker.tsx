import JsonLd from "@/components/JsonLd";
import { Figure, H2, P } from "@/components/science/Figure";
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

const MODALITY_TINT: Record<Modality, { fill: string; text: string }> = {
  "Small molecule": { fill: "#ccfbf1", text: "#0f766e" },
  Biologic: { fill: "#e0e7ff", text: "#3730a3" },
  Device: { fill: "#cffafe", text: "#155e75" },
  "Gene therapy": { fill: "#ede9fe", text: "#5b21b6" },
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

/** Data-driven landscape: candidates arranged by development stage, colored by modality. */
function LandscapeFigure() {
  const STAGES: Phase[] = ["Phase 1", "Phase 2", "Phase 3", "Approved"];
  const colX: Record<string, number> = {
    "Phase 1": 110,
    "Phase 2": 300,
    "Phase 3": 490,
    Approved: 680,
  };
  const modalities = Object.keys(MODALITY_COLOR) as Modality[];

  return (
    <Figure caption="Every tracked candidate by development stage and mechanism type. Further right = closer to patients. (Halted candidates are listed below, not shown here.)">
      <svg
        role="img"
        aria-labelledby="landscape-title landscape-desc"
        viewBox="0 0 790 300"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="landscape-title">Pain treatment pipeline landscape</title>
        <desc id="landscape-desc">
          Candidates grouped into four columns — Phase 1, Phase 2, Phase 3, and
          Approved — with each candidate shown as a chip colored by whether it is
          a small molecule, biologic, device, or gene therapy.
        </desc>

        {/* progression arrow */}
        <line x1="40" y1="30" x2="748" y2="30" stroke="#e2e8f0" strokeWidth="2" markerEnd="url(#pl-arrow)" />
        <defs>
          <marker id="pl-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill="#cbd5e1" />
          </marker>
        </defs>
        <text x="748" y="22" textAnchor="end" fontSize="12" fill="#94a3b8">
          further along →
        </text>

        {STAGES.map((stage) => {
          const x = colX[stage];
          const list = candidatesByPhase(stage);
          return (
            <g key={stage}>
              <rect x={x - 86} y="66" width="172" height="180" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
              <text x={x} y="54" textAnchor="middle" fontSize="14" fontWeight="700" fill="#334155">
                {stage}
                <tspan fill="#94a3b8" fontWeight="400">{`  (${list.length})`}</tspan>
              </text>
              {list.map((c, i) => {
                const cy = 86 + i * 44;
                const tint = MODALITY_TINT[c.modality];
                return (
                  <g key={c.name}>
                    <rect x={x - 80} y={cy} width="160" height="34" rx="8" fill={tint.fill} stroke={MODALITY_COLOR[c.modality]} strokeOpacity="0.35" />
                    <circle cx={x - 64} cy={cy + 17} r="4" fill={MODALITY_COLOR[c.modality]} />
                    <text x={x - 50} y={cy + 21} fontSize="12.5" fontWeight="600" fill={tint.text}>
                      {chipLabel(c.name)}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* modality legend */}
        <g fontSize="12.5" fill="#475569">
          {modalities.map((m, i) => {
            const x = 44 + i * 185;
            return (
              <g key={m}>
                <rect x={x} y="270" width="13" height="13" rx="3" fill={MODALITY_TINT[m].fill} stroke={MODALITY_COLOR[m]} />
                <text x={x + 20} y="281">{m}</text>
              </g>
            );
          })}
        </g>
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
