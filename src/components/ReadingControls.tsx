"use client";

import { useEffect, useState } from "react";

export default function ReadingControls() {
  const [largeText, setLargeText] = useState(false);
  const [lowGlare, setLowGlare] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (largeText) root.dataset.textSize = "large";
    else delete root.dataset.textSize;
  }, [largeText]);

  useEffect(() => {
    const root = document.documentElement;
    if (lowGlare) root.dataset.lowGlare = "true";
    else delete root.dataset.lowGlare;
  }, [lowGlare]);

  return (
    <div
      className="no-print flex flex-wrap items-center gap-2 text-xs"
      role="group"
      aria-label="Reading preferences"
    >
      <button
        type="button"
        onClick={() => setLargeText((v) => !v)}
        aria-pressed={largeText}
        className={`rounded-full border px-2.5 py-1 font-mono transition-colors ${
          largeText
            ? "border-brand bg-brand/10 text-brand"
            : "border-line bg-background text-muted hover:border-brand/50 hover:text-ink"
        }`}
      >
        {largeText ? "A− Default text" : "A+ Larger text"}
      </button>
      <button
        type="button"
        onClick={() => setLowGlare((v) => !v)}
        aria-pressed={lowGlare}
        className={`rounded-full border px-2.5 py-1 font-mono transition-colors ${
          lowGlare
            ? "border-brand bg-brand/10 text-brand"
            : "border-line bg-background text-muted hover:border-brand/50 hover:text-ink"
        }`}
      >
        {lowGlare ? "Low glare: On" : "Low glare"}
      </button>
    </div>
  );
}
