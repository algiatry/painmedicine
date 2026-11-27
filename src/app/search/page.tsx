import type { Metadata } from "next";
import Link from "next/link";
import { buildSearchIndex, prepare, search } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search PainMedicine.com — conditions, treatments, how pain works, and the glossary.",
  // An internal search-results page: keep the result listings out of the
  // index (they are thin and infinitely variable by query), but let crawlers
  // follow through to the pages they link. This is also the target of the
  // WebSite SearchAction in the site's structured data.
  robots: { index: false, follow: true },
};

// The index is built from static typed records, so prepare it once at module
// load rather than on every request.
const INDEX = prepare(buildSearchIndex());

const MAX_RESULTS = 20;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : (raw ?? "")).trim();
  const results = q ? search(INDEX, q, MAX_RESULTS) : [];

  return (
    <div className="mx-auto max-w-[42rem] px-4 sm:px-6 py-14">
      <h1 className="text-4xl sm:text-[2.75rem] sm:leading-[1.1] font-bold tracking-tight text-ink">
        Search
      </h1>

      <form
        role="search"
        action="/search"
        method="get"
        className="mt-8 flex gap-2"
      >
        <input
          type="search"
          name="q"
          defaultValue={q}
          autoFocus
          placeholder="Search conditions, treatments, terms…"
          aria-label="Search PainMedicine.com"
          enterKeyHint="search"
          className="min-w-0 flex-1 rounded-xl border border-edge bg-paper px-4 py-3 text-base text-ink outline-none placeholder:text-subtle focus:border-brand"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-brand px-5 py-3 font-semibold text-background transition-colors hover:bg-brand/90"
        >
          Search
        </button>
      </form>

      {q === "" ? (
        <p className="mt-8 text-body">
          Type a word or two — a condition, a treatment, or a term you saw —
          and press Search.
        </p>
      ) : results.length === 0 ? (
        <p className="mt-8 text-body">
          No results for{" "}
          <span className="font-semibold text-ink">“{q}”</span>. Try a
          different word, or browse from the{" "}
          <Link href="/" className="text-brand underline underline-offset-2">
            home page
          </Link>
          .
        </p>
      ) : (
        <>
          <p className="mt-8 text-sm text-subtle" aria-live="polite">
            {results.length} result{results.length === 1 ? "" : "s"} for{" "}
            <span className="font-semibold text-ink">“{q}”</span>
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {results.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group block rounded-xl border border-transparent px-3 py-4 transition-colors hover:border-line hover:bg-paper/70 sm:px-4"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-subtle">
                    {r.section}
                  </span>
                  <span className="mt-1 block font-semibold text-ink group-hover:text-brand">
                    {r.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {r.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
