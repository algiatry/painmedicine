"use client";

import { track } from "@vercel/analytics";
import { useMemo, useState } from "react";
import {
  CANDIDATES,
  PHASE_ORDER,
  type Candidate,
  type Modality,
  type Phase,
} from "@/lib/pipeline";

type SortKey = "name" | "sponsor" | "phase" | "updated";

const PHASES: ("All" | Phase)[] = ["All", "Approved", "Phase 3", "Phase 2", "Phase 1", "Discontinued"];
const MODALITIES: ("All" | Modality)[] = ["All", "Small molecule", "Biologic", "Device", "Gene therapy"];

function PhaseBadge({ phase }: { phase: Phase }) {
  return (
    <span className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium ${
      phase === "Approved"
        ? "border-brand/25 bg-brand/10 text-brand-strong"
        : "border-line bg-paper text-ink"
    }`}>
      {phase}
    </span>
  );
}

function CandidateSource({ source }: { source: Candidate["source"] }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-xs text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
    >
      {source.label}
    </a>
  );
}

export default function PipelineMatrix() {
  const [phaseFilter, setPhaseFilter] = useState<"All" | Phase>("All");
  const [modalityFilter, setModalityFilter] = useState<"All" | Modality>("All");
  const [sortKey, setSortKey] = useState<SortKey>("phase");
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const rows = useMemo(() => {
    const filtered = CANDIDATES.filter((c) => {
      if (phaseFilter !== "All" && c.phase !== phaseFilter) return false;
      if (modalityFilter !== "All" && c.modality !== modalityFilter) return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "phase") {
        cmp = PHASE_ORDER.indexOf(a.phase) - PHASE_ORDER.indexOf(b.phase);
      } else if (sortKey === "updated") {
        cmp = a.updated.localeCompare(b.updated);
      } else {
        cmp = a[sortKey].localeCompare(b[sortKey]);
      }
      return sortAsc ? cmp : -cmp;
    });
  }, [phaseFilter, modalityFilter, sortKey, sortAsc]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc((prev) => !prev);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-line bg-surface p-4 shadow-card sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
            Clinical matrix
          </p>
          <p className="mt-1 text-sm text-muted">
            Filter by phase or modality.
            <span className="hidden md:inline"> Select a column header to sort.</span>
          </p>
        </div>
        <span role="status" className="font-mono text-xs text-subtle">
          {rows.length} of {CANDIDATES.length} candidates
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <label className="flex items-center gap-2 text-xs font-medium text-muted">
          Phase
          <select
            value={phaseFilter}
            onChange={(e) => {
              const value = e.currentTarget.value as "All" | Phase;
              setPhaseFilter(value);
              track("pipeline_filter_change", { filter: "phase", value });
            }}
            className="min-h-11 rounded-lg border border-line bg-background px-2.5 text-base text-ink md:min-h-0 md:py-1.5 md:text-xs"
          >
            {PHASES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-xs font-medium text-muted">
          Modality
          <select
            value={modalityFilter}
            onChange={(e) => {
              const value = e.currentTarget.value as "All" | Modality;
              setModalityFilter(value);
              track("pipeline_filter_change", { filter: "modality", value });
            }}
            className="min-h-11 rounded-lg border border-line bg-background px-2.5 text-base text-ink md:min-h-0 md:py-1.5 md:text-xs"
          >
            {MODALITIES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
      </div>

      {rows.length === 0 && (
        <p className="mt-4 text-sm text-body">No candidates match these filters.</p>
      )}

      <div className="mt-4 divide-y divide-line md:hidden">
        {rows.map((c) => (
          <details
            key={c.name}
            className="group"
            onToggle={(e) => {
              if (e.currentTarget.open) {
                track("pipeline_candidate_expand", { candidate: c.name });
              }
            }}
          >
            <summary className="flex min-h-11 cursor-pointer list-none items-start gap-3 rounded py-3 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-ink">{c.name}</span>
                  <PhaseBadge phase={c.phase} />
                </span>
                <span className="mt-1 block text-sm text-body">{c.indication}</span>
              </span>
              <span aria-hidden="true" className="text-brand-strong">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <dl className="space-y-2 pb-4 text-sm text-body">
              {c.code && (
                <div><dt className="font-semibold text-ink">Also known as</dt><dd>{c.code}</dd></div>
              )}
              <div><dt className="font-semibold text-ink">Target / mechanism</dt><dd>{c.mechanism}</dd></div>
              <div><dt className="font-semibold text-ink">Sponsor</dt><dd>{c.sponsor}</dd></div>
              <div><dt className="font-semibold text-ink">Verified</dt><dd>{c.updated}</dd></div>
              <div><dt className="font-semibold text-ink">Source</dt><dd><CandidateSource source={c.source} /></dd></div>
            </dl>
          </details>
        ))}
      </div>

      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs font-semibold uppercase tracking-wider text-subtle">
              <th className="py-2.5 pr-4">
                <button
                  type="button"
                  onClick={() => toggleSort("name")}
                  className="hover:text-ink"
                >
                  Compound {sortKey === "name" ? (sortAsc ? "↑" : "↓") : ""}
                </button>
              </th>
              <th className="py-2.5 pr-4">Target / Mechanism</th>
              <th className="py-2.5 pr-4">
                <button
                  type="button"
                  onClick={() => toggleSort("sponsor")}
                  className="hover:text-ink"
                >
                  Sponsor {sortKey === "sponsor" ? (sortAsc ? "↑" : "↓") : ""}
                </button>
              </th>
              <th className="py-2.5 pr-4">
                <button
                  type="button"
                  onClick={() => toggleSort("phase")}
                  className="hover:text-ink"
                >
                  Phase {sortKey === "phase" ? (sortAsc ? "↑" : "↓") : ""}
                </button>
              </th>
              <th className="py-2.5 pr-4">Indication</th>
              <th className="py-2.5 pr-4">
                <button
                  type="button"
                  onClick={() => toggleSort("updated")}
                  className="hover:text-ink"
                >
                  Verified {sortKey === "updated" ? (sortAsc ? "↑" : "↓") : ""}
                </button>
              </th>
              <th className="py-2.5">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((c: Candidate) => (
              <tr key={c.name} className="align-top hover:bg-paper/50">
                <td className="py-3 pr-4 font-semibold text-ink">
                  {c.name}
                  {c.code && (
                    <span className="mt-0.5 block font-mono text-xs font-normal text-subtle">
                      {c.code}
                    </span>
                  )}
                </td>
                <td className="py-3 pr-4 text-body">{c.mechanism}</td>
                <td className="py-3 pr-4 text-body">{c.sponsor}</td>
                <td className="py-3 pr-4">
                  <PhaseBadge phase={c.phase} />
                </td>
                <td className="py-3 pr-4 text-body">{c.indication}</td>
                <td className="py-3 pr-4 font-mono text-xs text-subtle">{c.updated}</td>
                <td className="py-3">
                  <CandidateSource source={c.source} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
