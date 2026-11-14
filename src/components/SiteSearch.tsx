"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { prepare, search, type PreparedEntry, type SearchEntry } from "@/lib/search";

/** Starting points shown before anything is typed. */
const SUGGESTIONS = ["Low back pain", "Sciatica", "Nerve pain", "Opioids", "Nociplastic"];

/**
 * Header search: a button that opens a native <dialog> (focus trap, Escape,
 * and backdrop come from the platform). The index is fetched the first time
 * the dialog opens and ranked in the browser – queries never leave the device.
 */
export default function SiteSearch() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [index, setIndex] = useState<PreparedEntry[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => (index ? search(index, query) : []), [index, query]);

  function open() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    inputRef.current?.select();
    if (!index) {
      setFailed(false);
      fetch("/search-index.json")
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
        .then((entries: SearchEntry[]) => setIndex(prepare(entries)))
        .catch(() => setFailed(true));
    }
  }

  const close = () => dialogRef.current?.close();

  function go(href: string) {
    close();
    router.push(href);
  }

  // ⌘K / Ctrl+K anywhere; "/" when not already typing in a field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target?.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function onInputKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active].href);
    }
  }

  const trimmed = query.trim();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Search the site"
        className="inline-flex size-11 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-400"
      >
        <SearchIcon className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Search the site"
        onClose={() => {
          setQuery("");
          setActive(0);
        }}
        // A click on the backdrop lands on the dialog element itself.
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 mx-auto mt-[8vh] w-[calc(100%-1.5rem)] max-w-xl rounded-2xl border border-slate-200 bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 focus-within:shadow-[inset_0_-2px_0_var(--brand)] dark:border-slate-700">
          <SearchIcon className="size-5 shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="site-search-results"
            aria-activedescendant={results[active] ? `site-search-option-${active}` : undefined}
            aria-autocomplete="list"
            aria-label="Search conditions, treatments, and terms"
            placeholder="Search the site…"
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            className="min-w-0 flex-1 bg-transparent py-4 text-base text-slate-900 outline-none! placeholder:text-slate-400 dark:text-slate-100 [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="button"
            onClick={close}
            className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
          >
            Close
          </button>
        </div>

        <div className="max-h-[min(60vh,28rem)] overflow-y-auto overscroll-contain p-2">
          <ul id="site-search-results" role="listbox" aria-label="Results">
            {results.map((r, i) => (
              <li
                key={r.href}
                id={`site-search-option-${i}`}
                role="option"
                aria-selected={i === active}
                onMouseMove={() => setActive(i)}
                onClick={() => go(r.href)}
                className={`cursor-pointer rounded-xl px-3 py-2.5 ${
                  i === active ? "bg-teal-50 dark:bg-teal-950/50" : ""
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className={`font-semibold ${
                      i === active
                        ? "text-teal-800 dark:text-teal-300"
                        : "text-slate-900 dark:text-slate-100"
                    }`}
                  >
                    {r.title}
                  </span>
                  <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {r.section}
                  </span>
                </div>
                <p className="mt-0.5 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                  {r.summary}
                </p>
              </li>
            ))}
          </ul>

          <div aria-live="polite" className="px-3 text-sm text-slate-600 dark:text-slate-400">
            {failed ? (
              <p className="py-6">
                Search could not load. Check your connection and{" "}
                <button
                  type="button"
                  className="font-medium text-teal-700 underline dark:text-teal-400"
                  onClick={() => {
                    close();
                    open();
                  }}
                >
                  try again
                </button>
                .
              </p>
            ) : !index ? (
              <p className="py-6">Loading…</p>
            ) : trimmed && results.length === 0 ? (
              <p className="py-6">
                Nothing matches &ldquo;{trimmed}&rdquo;. Try a condition, a treatment, or a
                term from a report – or browse the{" "}
                <button
                  type="button"
                  className="font-medium text-teal-700 underline dark:text-teal-400"
                  onClick={() => go("/glossary")}
                >
                  glossary
                </button>
                .
              </p>
            ) : !trimmed ? (
              <div className="py-4">
                <p>Try one of these:</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => {
                          setQuery(s);
                          setActive(0);
                          inputRef.current?.focus();
                        }}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-300"
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
