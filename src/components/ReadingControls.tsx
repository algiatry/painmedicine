"use client";

import { useEffect, useSyncExternalStore } from "react";

const KEY = "painmedicine-reading-preferences";
const CHANGE = "painmedicine:reading-preferences";
let fallback = "";

function readPreferences() {
  try {
    return localStorage.getItem(KEY) ?? fallback;
  } catch {
    return fallback;
  }
}

function subscribe(listener: () => void) {
  window.addEventListener(CHANGE, listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener(CHANGE, listener);
    window.removeEventListener("storage", listener);
  };
}

export default function ReadingControls() {
  const preferences = useSyncExternalStore(subscribe, readPreferences, () => "");
  const largeText = preferences[0] === "1";
  const lowGlare = preferences[1] === "1";

  function update(text: boolean, glare: boolean) {
    fallback = `${Number(text)}${Number(glare)}`;
    try {
      localStorage.setItem(KEY, fallback);
    } catch {
      // The controls still work for the current session with storage disabled.
    }
    window.dispatchEvent(new Event(CHANGE));
  }

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
        onClick={() => update(!largeText, lowGlare)}
        aria-pressed={largeText}
        className={`min-h-11 rounded-md border px-3 py-2 font-mono transition-colors ${
          largeText
            ? "border-brand bg-note text-note-ink"
            : "border-line bg-background text-muted hover:border-brand/50 hover:text-ink"
        }`}
      >
        {largeText ? "A− Default text" : "A+ Larger text"}
      </button>
      <button
        type="button"
        onClick={() => update(largeText, !lowGlare)}
        aria-pressed={lowGlare}
        className={`min-h-11 rounded-md border px-3 py-2 font-mono transition-colors ${
          lowGlare
            ? "border-brand bg-note text-note-ink"
            : "border-line bg-background text-muted hover:border-brand/50 hover:text-ink"
        }`}
      >
        {lowGlare ? "Low glare: On" : "Low glare"}
      </button>
    </div>
  );
}
