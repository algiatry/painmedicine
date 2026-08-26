import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { GLOSSARY, glossaryByLetter, termSlug } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glossary of Pain Terms",
  description:
    "Plain-language definitions of the pain terms used across PainMedicine.com — from nociceptive and nociplastic pain to central sensitization, neuromodulation, and pharmacogenomics.",
  alternates: { canonical: "/glossary" },
};

function definedTermSetJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Pain Medicine Glossary",
    url: `${SITE.url}/glossary`,
    hasDefinedTerm: GLOSSARY.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `${SITE.url}/glossary#${termSlug(t.term)}`,
    })),
  };
}

export default function GlossaryPage() {
  const groups = glossaryByLetter();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <JsonLd data={definedTermSetJsonLd()} />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="hover:text-teal-700">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">
            /
          </li>
          <li className="text-slate-700">Glossary</li>
        </ol>
      </nav>

      <header className="mt-6 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Glossary of pain terms
        </h1>
        <p className="text-lg text-slate-700">
          Pain has a language of its own, and it can get in the way of
          understanding your options. Here are the terms used across this site,
          in plain English — each linked to the page where it is explained in
          more depth.
        </p>
      </header>

      {/* A–Z index */}
      <nav
        aria-label="Jump to letter"
        className="mt-8 flex flex-wrap gap-2 border-y border-slate-200 py-4"
      >
        {groups.map((g) => (
          <a
            key={g.letter}
            href={`#letter-${g.letter}`}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-sm font-semibold text-teal-700 hover:border-teal-600 hover:bg-teal-50"
          >
            {g.letter}
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-10">
        {groups.map((g) => (
          <section key={g.letter} aria-labelledby={`letter-${g.letter}`}>
            <h2
              id={`letter-${g.letter}`}
              className="scroll-mt-24 text-sm font-bold uppercase tracking-widest text-teal-700"
            >
              {g.letter}
            </h2>
            <dl className="mt-4 space-y-6">
              {g.terms.map((t) => (
                <div key={t.term} id={termSlug(t.term)} className="scroll-mt-24">
                  <dt className="font-semibold text-slate-900">{t.term}</dt>
                  <dd className="mt-1 text-slate-700">
                    {t.definition}
                    {t.href && (
                      <>
                        {" "}
                        <Link
                          href={t.href}
                          className="whitespace-nowrap text-sm font-medium text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
                        >
                          Learn more →
                        </Link>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        Definitions here are educational and simplified. They are not a
        substitute for a conversation with a qualified clinician about your own
        situation.
      </p>
    </article>
  );
}
