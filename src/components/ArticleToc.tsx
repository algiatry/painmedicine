"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string };

/**
 * Auto-generated "On this page" table of contents. Scans the article's
 * in-page <h2 id> headings (the H2 helper in science/Figure already emits an
 * id + scroll-mt), so every article gets a TOC with no per-article wiring.
 *
 * Rendered in two places, each gated by CSS:
 *   - variant="rail"   → the sticky desktop side rail (hidden below xl)
 *   - variant="inline" → a collapsible <details> at the top of the article
 *                        for narrow screens (hidden at xl and up)
 *
 * The active section is tracked with an IntersectionObserver and highlighted
 * in the rail. With no JS (or before hydration) nothing renders, and the
 * article is fully readable on its own — this is pure enhancement.
 */
export default function ArticleToc({
  variant = "rail",
}: {
  variant?: "rail" | "inline";
}) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let io: IntersectionObserver | undefined;

    // Scan after a frame so the server-rendered article body is laid out, and
    // so the first setState lands outside the synchronous effect body.
    const raf = requestAnimationFrame(() => {
      const root = document.querySelector("[data-toc-root]");
      if (!root) return;
      const nodes = Array.from(root.querySelectorAll<HTMLElement>("h2[id]"));
      setHeadings(
        nodes.map((n) => ({ id: n.id, text: (n.textContent ?? "").trim() })),
      );
      if (nodes.length === 0) return;

      io = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
            );
          if (visible[0]) {
            setActiveId((visible[0].target as HTMLElement).id);
          }
        },
        { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
      );
      nodes.forEach((n) => io!.observe(n));
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, []);

  if (headings.length < 2) return null;

  const list = (
    <ol className="space-y-1 text-sm">
      {headings.map((h) => {
        const active = h.id === activeId;
        return (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active ? "location" : undefined}
              className={`block border-l-2 py-1 pl-3 transition-colors ${
                active
                  ? "border-teal-600 font-semibold text-teal-800"
                  : "border-slate-200 text-slate-500 hover:border-slate-400 hover:text-teal-700"
              }`}
            >
              {h.text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === "inline") {
    return (
      <details className="group mt-6 rounded-xl border border-slate-200 bg-paper/60 xl:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-slate-900">
          On this page
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="size-4 text-slate-400 transition-transform group-open:rotate-180"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z"
              clipRule="evenodd"
            />
          </svg>
        </summary>
        <div className="border-t border-slate-200 px-4 py-3">{list}</div>
      </details>
    );
  }

  return (
    <nav aria-label="On this page" className="sticky top-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
        On this page
      </p>
      {list}
    </nav>
  );
}
