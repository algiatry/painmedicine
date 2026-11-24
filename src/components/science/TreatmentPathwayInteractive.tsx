"use client";

import { useState } from "react";
import { FIG } from "@/lib/fig";

type TargetId = "periphery" | "gate" | "brain";

interface TreatmentOption {
  id: string;
  label: string;
  target: TargetId;
  summary: string;
}

const OPTIONS: TreatmentOption[] = [
  {
    id: "nsaids-topicals",
    label: "NSAIDs & topicals",
    target: "periphery",
    summary:
      "Act at the tissue site: NSAIDs reduce inflammatory prostaglandins, while topical lidocaine dampens local nerve-ending firing.",
  },
  {
    id: "nerve-meds",
    label: "Gabapentinoids & nerve blocks",
    target: "gate",
    summary:
      "Quiet signal transmission at the spinal dorsal horn or along the nerve root before the message reaches the brain.",
  },
  {
    id: "descending",
    label: "SNRIs, opioids & CBT",
    target: "brain",
    summary:
      "Act in the brain and descending pathways: SNRIs boost serotonin/norepinephrine braking, opioids bind central receptors, and CBT/reprocessing shifts threat appraisal.",
  },
];

export default function TreatmentPathwayInteractive() {
  const [selectedId, setSelectedId] = useState<string>(OPTIONS[0].id);
  const active = OPTIONS.find((o) => o.id === selectedId) ?? OPTIONS[0];

  const isTarget = (t: TargetId) => active.target === t;

  return (
    <figure className="my-8 rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
          Interactive pathway
        </p>
        <p className="text-xs text-muted">Select a treatment class to highlight its target</p>
      </div>

      <div
        role="tablist"
        aria-label="Treatment classes on the pain pathway"
        className="mt-4 flex flex-wrap gap-2"
      >
        {OPTIONS.map((opt) => {
          const selected = opt.id === active.id;
          return (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setSelectedId(opt.id)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                selected
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-background text-body hover:border-brand/50 hover:text-ink"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-edge bg-plate p-4">
        <svg
          viewBox="0 0 540 120"
          className="block h-auto w-full"
          role="img"
          aria-label={`Pain pathway highlighting ${active.label} acting at ${active.target}`}
        >
          {/* connecting line */}
          <line
            x1="80"
            y1="52"
            x2="460"
            y2="52"
            stroke={FIG.faint}
            strokeWidth="2.5"
            strokeDasharray="4 6"
          />

          {/* Periphery */}
          <g className="motion-safe:transition-opacity" opacity={isTarget("periphery") ? 1 : 0.35}>
            <circle
              cx="80"
              cy="52"
              r={isTarget("periphery") ? 22 : 16}
              fill={isTarget("periphery") ? FIG.signal : FIG.nerveTint}
              fillOpacity={isTarget("periphery") ? 0.18 : 1}
              stroke={FIG.signal}
              strokeWidth={isTarget("periphery") ? 2.5 : 1.5}
            />
            <circle cx="80" cy="52" r="6" fill={FIG.signal} />
            <text x="80" y="96" textAnchor="middle" fontSize="13" fontWeight="600" fill={FIG.ink}>
              1. Tissue &amp; nerve
            </text>
          </g>

          {/* Spinal gate */}
          <g className="motion-safe:transition-opacity" opacity={isTarget("gate") ? 1 : 0.35}>
            <rect
              x="252"
              y="32"
              width="36"
              height="40"
              rx="8"
              fill={FIG.nerveTint}
              stroke={FIG.nerve}
              strokeWidth={isTarget("gate") ? 2.5 : 1.5}
            />
            <line x1="270" y1="32" x2="270" y2="72" stroke={FIG.nerve} strokeWidth="2" />
            <text x="270" y="96" textAnchor="middle" fontSize="13" fontWeight="600" fill={FIG.ink}>
              2. Spinal gate
            </text>
          </g>

          {/* Brain */}
          <g className="motion-safe:transition-opacity" opacity={isTarget("brain") ? 1 : 0.35}>
            <circle
              cx="460"
              cy="52"
              r={isTarget("brain") ? 22 : 16}
              fill={FIG.nerveTint}
              stroke={FIG.nerveDark}
              strokeWidth={isTarget("brain") ? 2.5 : 1.5}
            />
            <circle cx="460" cy="52" r="6" fill={FIG.nerveDark} />
            <text x="460" y="96" textAnchor="middle" fontSize="13" fontWeight="600" fill={FIG.ink}>
              3. Brain &amp; descending control
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-4 text-sm leading-relaxed text-body">
        <strong className="font-semibold text-ink">{active.label}:</strong> {active.summary}
      </figcaption>
    </figure>
  );
}
