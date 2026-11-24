"use client";

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
    <div className="my-8 rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
            Clinical matrix
          </p>
          <p className="mt-1 text-sm text-muted">
            Filter by phase or modality, or click a column header to sort.
          </p>
        </div>
        <span className="font-mono text-xs text-subtle">
          {rows.length} of {CANDIDATES.length} candidates
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <label className="flex items-center gap-2 text-xs font-medium text-muted">
          Phase
          <select
            value={phaseFilter}
            onChange={(e) => setPhaseFilter(e.target.value as "All" | Phase)}
            className="rounded-lg border border-line bg-background px-2.5 py-1.5 text-xs text-ink focus:border-brand focus:outline-none"
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
            onChange={(e) => setModalityFilter(e.target.value as "All" | Modality)}
            className="rounded-lg border border-line bg-background px-2.5 py-1.5 text-xs text-ink focus:border-brand focus:outline-none"
          >
            {MODALITIES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 overflow-x-auto">
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
                  <span className="inline-block rounded-full border border-line bg-paper px-2.5 py-0.5 font-mono text-xs font-medium text-ink">
                    {c.phase}
                  </span>
                </td>
                <td className="py-3 pr-4 text-body">{c.indication}</td>
                <td className="py-3 pr-4 font-mono text-xs text-subtle">{c.updated}</td>
                <td className="py-3">
                  <a
                    href={c.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
                  >
                    {c.source.label}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
