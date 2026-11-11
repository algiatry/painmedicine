import JsonLd from "@/components/JsonLd";
import { Figure, H2, KeyTakeaways, P, anim } from "@/components/science/Figure";
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
  "Phase 3": "bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300",
  "Phase 2": "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300",
  "Phase 1": "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
  Discontinued: "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 line-through decoration-slate-400 dark:decoration-slate-500",
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
 * The pipeline board, computed from lib/pipeline.ts so a quarterly data
 * refresh redraws the art. HTML, not a scaled SVG, so the type stays at
 * reading size. Rows are mechanism types, columns are stages, and the teal
 * rule is FDA approval. Halted candidates sit off the board.
 */
function BoardChip({
  c,
  halted = false,
}: {
  c: Candidate;
  halted?: boolean;
}) {
  const label = chipLabel(c.name);
  const ink = MODALITY_TINT[c.modality].text;
  const rule = MODALITY_COLOR[c.modality];

  if (halted) {
    return (
      <span className="inline-flex items-baseline gap-1.5 rounded-md border border-dashed border-slate-300 bg-white px-2 py-1.5 text-[12.5px] font-semibold leading-none tracking-tight text-slate-500">
        {label}
        <span className="text-[11px] font-medium text-slate-400">
          {c.modality.toLowerCase()}
        </span>
      </span>
    );
  }

  if (c.phase === "Approved") {
    return (
      <span
        className="inline-flex rounded-md px-2 py-1.5 text-[12.5px] font-semibold leading-none tracking-tight text-white"
        style={{ backgroundColor: ink }}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-stretch overflow-hidden rounded-md bg-white"
      style={{ boxShadow: `inset 0 0 0 1px ${rule}66` }}
    >
      <span className="w-1 shrink-0" style={{ backgroundColor: rule }} aria-hidden="true" />
      <span
        className="px-2 py-1.5 text-[12.5px] font-semibold leading-none tracking-tight"
        style={{ color: ink }}
      >
        {label}
      </span>
    </span>
  );
}

function LandscapeFigure() {
  const STAGES: Phase[] = ["Phase 1", "Phase 2", "Phase 3", "Approved"];
  const MODALITIES = Object.keys(MODALITY_COLOR) as Modality[];
  const halted = candidatesByPhase("Discontinued");

  return (
    <Figure
      animate
      caption="The board, drawn live from the tracker data. Each row is a mechanism type and each column a development stage. Approved candidates sit past the teal rule. Halted candidates are set aside below – tanezumab fell at that line."
    >
      <div className="min-w-[43rem]">
        <p
          className="fig-fade mb-3 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
          style={anim(0.05)}
        >
          closer to patients <span aria-hidden="true">→</span>
        </p>
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Pain-treatment pipeline. Rows are mechanism types. Columns run from
            Phase 1 to Approved. The teal rule before Approved is FDA approval.
            Halted candidates are listed below the board.
          </caption>
          <thead>
            <tr className="fig-fade" style={anim(0.12)}>
              <th className="w-[7.25rem] pb-3" scope="col">
                <span className="sr-only">Mechanism type</span>
              </th>
              {STAGES.map((stage) => {
                const approved = stage === "Approved";
                const n = candidatesByPhase(stage).length;
                return (
                  <th
                    key={stage}
                    scope="col"
                    className="px-1.5 pb-3 text-center align-bottom"
                    style={
                      approved
                        ? {
                            borderLeft: `2px solid ${FIG.nerveDark}`,
                            backgroundColor: FIG.nerveGround,
                          }
                        : undefined
                    }
                  >
                    <span
                      className="block text-[11px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: approved ? FIG.nerveDark : FIG.textMid }}
                    >
                      {stage}
                    </span>
                    {approved && (
                      <span
                        className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: FIG.nerve }}
                      >
                        FDA approval
                      </span>
                    )}
                    <span
                      className="mt-1 block text-[11px] font-medium tabular-nums"
                      style={{ color: FIG.faint }}
                    >
                      {n}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {MODALITIES.map((m, li) => {
              const edge = `1px solid ${FIG.soft}`;
              const last = li === MODALITIES.length - 1;
              return (
                <tr key={m} className="fig-fade" style={anim(0.18 + li * 0.06)}>
                  <th
                    scope="row"
                    className="pr-3 text-right align-middle text-[12px] font-semibold leading-tight"
                    style={{
                      color: MODALITY_TINT[m].text,
                      borderTop: edge,
                      borderBottom: last ? edge : undefined,
                    }}
                  >
                    <span className="inline-flex items-center justify-end gap-2">
                      <span>{m}</span>
                      <span
                        className="size-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: MODALITY_COLOR[m] }}
                        aria-hidden="true"
                      />
                    </span>
                  </th>
                  {STAGES.map((stage) => {
                    const cell = CANDIDATES.filter(
                      (c) => c.modality === m && c.phase === stage,
                    );
                    const approved = stage === "Approved";
                    return (
                      <td
                        key={stage}
                        className="px-1.5 py-2.5 text-center align-middle"
                        style={{
                          borderTop: edge,
                          borderBottom: last ? edge : undefined,
                          borderLeft: approved
                            ? `2px solid ${FIG.nerveDark}`
                            : edge,
                          backgroundColor: approved ? FIG.nerveGround : undefined,
                        }}
                      >
                        {cell.length > 0 && (
                          <ul className="flex flex-col items-center gap-1.5">
                            {cell.map((c) => (
                              <li key={c.name}>
                                <BoardChip c={c} />
                              </li>
                            ))}
                          </ul>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {halted.length > 0 && (
            <tbody>
              <tr className="fig-fade" style={anim(0.55)}>
                <th
                  scope="row"
                  className="pt-5 pr-3 text-right align-middle text-[12px] font-semibold text-slate-400"
                >
                  Halted
                </th>
                <td colSpan={4} className="pt-5">
                  <div
                    className="flex flex-wrap items-center gap-2 border-t border-dashed pt-3"
                    style={{ borderColor: FIG.line }}
                  >
                    {halted.map((c) => (
                      <BoardChip key={c.name} c={c} halted />
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </Figure>
  );
}
function CandidateCard({ c }: { c: Candidate }) {
  return (
    <li className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="flex">
        <span
          aria-hidden="true"
          className="w-1 shrink-0"
          style={{
            backgroundColor:
              c.phase === "Discontinued" ? FIG.line : MODALITY_COLOR[c.modality],
          }}
        />
        <div className="min-w-0 flex-1 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{c.name}</h3>
          {c.code && (
            <p className="text-sm text-slate-500 dark:text-slate-400">{c.code}</p>
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
          <dt className="shrink-0 font-medium text-slate-500 dark:text-slate-400">Mechanism</dt>
          <dd className="text-slate-700 dark:text-slate-300">{c.mechanism}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 font-medium text-slate-500 dark:text-slate-400">Type</dt>
          <dd className="text-slate-700 dark:text-slate-300">{c.modality}</dd>
        </div>
        <div className="flex gap-2 sm:col-span-2">
          <dt className="shrink-0 font-medium text-slate-500 dark:text-slate-400">For</dt>
          <dd className="text-slate-700 dark:text-slate-300">{c.indication}</dd>
        </div>
        <div className="flex gap-2 sm:col-span-2">
          <dt className="shrink-0 font-medium text-slate-500 dark:text-slate-400">Sponsor</dt>
          <dd className="text-slate-700 dark:text-slate-300">{c.sponsor}</dd>
        </div>
      </dl>

      <p className="mt-3 text-slate-700 dark:text-slate-300">{c.why}</p>
      {c.note && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{c.note}</p>}

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <a
          href={c.source.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600"
        >
          {c.source.label}
        </a>
        <span className="text-slate-400 dark:text-slate-500">· status checked {c.updated}</span>
      </div>
        </div>
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
    license: `${SITE.url}/terms`,
    creator: { "@type": "Organization", name: SITE.name, url: SITE.url },
    keywords: [
      "VX-993",
      "cebranopadol",
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
        drug classes – opioids, anti-inflammatories, a handful of nerve-pain
        medicines borrowed from other fields. That has started to change. Below
        is what is actually moving through development now: what each candidate
        is, how it works, and how far along it is.
      </P>

      <KeyTakeaways
        items={[
          <>
            A candidate in a trial is <strong>not an available treatment</strong>.
          </>,
          <>
            Most investigational drugs <strong>never reach patients</strong>.
          </>,
          <>
            Only entries marked <strong>Approved</strong> are cleared for use,
            and only for the condition on their label.
          </>,
        ]}
      />
      <P>
        A word on how to read it, because this is a page where honesty matters
        more than hype. A candidate in a trial is <strong>not</strong> an
        available treatment, and most investigational drugs never reach patients
        at all. Only the entries marked <em>Approved</em> are cleared for use –
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
              <span className="ml-2 text-base font-normal text-slate-400 dark:text-slate-500">
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
        Every entry is dated and linked to a primary source – a regulator, a
        trial registry, a peer-reviewed journal, or the sponsor&rsquo;s own
        release. Development is fast-moving, so entries are re-checked
        quarterly. Each card is dated with the month its status was last
        checked. This page was last updated on{" "}
        <strong>{formatReviewed(LAST_REVIEWED)}</strong>. For anything you plan
        to act on, confirm the current status on{" "}
        <a
          href="https://clinicaltrials.gov/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600"
        >
          ClinicalTrials.gov
        </a>{" "}
        and with your care team.
      </P>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        This tracker covers {CANDIDATES.length} notable candidates and is not
        exhaustive – the full pain pipeline runs to hundreds of programs. It
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
