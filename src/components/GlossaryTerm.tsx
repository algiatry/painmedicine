"use client";

import { useState } from "react";
import Link from "next/link";

interface GlossaryTermProps {
  term: string;
  definition: string;
  href?: string;
}

export default function GlossaryTerm({
  term,
  definition,
  href = "/glossary",
}: GlossaryTermProps) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline cursor-help border-b border-dotted border-brand/70 text-ink transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        {term}
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 z-30 mb-2 w-72 -translate-x-1/2 rounded-xl border border-edge bg-surface p-3 text-left text-xs leading-relaxed text-body shadow-lg"
        >
          <span className="block font-semibold text-ink">{term}</span>
          <span className="mt-1 block">{definition}</span>
          <Link
            href={href}
            className="mt-1.5 inline-block font-mono text-[11px] text-brand hover:underline"
          >
            Full glossary →
          </Link>
        </span>
      )}
    </span>
  );
}
