import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { REVIEWERS } from "@/lib/reviewers";
import { ALL_ARTICLES } from "@/lib/articles";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Editorial Board & Medical Reviewers",
  description:
    "The credentialed physicians who review the clinical pages on PainMedicine.com, the checklist every page is held to, and how to join the board.",
  alternates: { canonical: "/reviewers" },
};

/** The public version of the reviewer checklist (CONTENT-INTAKE.md §5). */
const CHECKLIST = [
  "Accurate and consistent with current guidelines and best evidence.",
  "Every clinical claim is supported by a cited primary source, represented without overstatement.",
  "No dosing instructions, no “best,” “cure,” “guaranteed,” or “miracle,” and nothing on how to obtain controlled substances.",
  "Opioid content carries the SAMHSA helpline inline and a stewardship framing.",
  "A safety net is present: when to seek specialist, urgent, or emergency care.",
  "Balanced. Benefits and limits both stated, with the strength of evidence given honestly.",
  "Plain English at roughly an eighth-grade reading level, compassionate and never dismissive.",
  "No promotional language, no conflict of interest, nothing that implies the site provides care.",
];

export default function ReviewersPage() {
  const reviewedCount = ALL_ARTICLES.filter((a) => a.status === "reviewed").length;

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Editorial board", path: "/reviewers" },
        ])}
      />
      {REVIEWERS.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${SITE.name} editorial board`,
            itemListElement: REVIEWERS.map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: personJsonLd(r),
            })),
          }}
        />
      )}

      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
          Editorial board
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          The people who check the pages
        </h1>
        <p className="text-lg text-slate-700">
          Every clinical page on {SITE.name} is written from primary sources.
          A credentialed physician then reviews it against the checklist below
          before it can carry a &ldquo;medically reviewed&rdquo; line. The
          reviewer&rsquo;s name, credentials, review date, and disclosures are
          public, and the page is re-reviewed on a set cadence.
        </p>
      </header>

      <section aria-labelledby="board-heading" className="space-y-5">
        <h2 id="board-heading" className="text-2xl font-semibold text-slate-900">
          Medical reviewers
        </h2>
        {REVIEWERS.length === 0 ? (
          <div className="rounded-md border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700">
            <p>
              The board is being formed. Until a reviewer has signed off, every
              page carries an honest &ldquo;written from primary sources,
              review pending&rdquo; line rather than a borrowed credential.
              Positions are open; see below.
            </p>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {REVIEWERS.map((r) => (
              <li
                key={r.slug}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-card"
              >
                <Link
                  href={`/reviewers/${r.slug}`}
                  className="text-lg font-semibold text-slate-900 hover:text-teal-700"
                >
                  {r.name}, {r.credentials}
                </Link>
                <p className="mt-1 text-sm text-slate-600">{r.headline}</p>
              </li>
            ))}
          </ul>
        )}
        {reviewedCount > 0 && (
          <p className="text-sm text-slate-500">
            {reviewedCount} of {ALL_ARTICLES.length} pages currently carry a
            reviewer sign-off.
          </p>
        )}
      </section>

      <section aria-labelledby="standard-heading" className="space-y-4">
        <h2 id="standard-heading" className="text-2xl font-semibold text-slate-900">
          What a review checks
        </h2>
        <p className="text-slate-700">
          Reviewers work from a written checklist, the same one for every page.
          A page passes only when every line holds.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          {CHECKLIST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="text-slate-700">
          After sign-off the page publishes with the reviewer&rsquo;s byline and
          a next-review date. Fast-moving pages in{" "}
          <Link
            href="/future-of-pain-medicine"
            className="text-teal-700 underline underline-offset-2"
          >
            the future of pain medicine
          </Link>{" "}
          are re-reviewed quarterly, everything else annually. A reviewer may
          withdraw their name from any page at any time, which returns it to
          &ldquo;review pending.&rdquo;
        </p>
      </section>

      <section aria-labelledby="join-heading" className="space-y-4">
        <h2 id="join-heading" className="text-2xl font-semibold text-slate-900">
          Join the board
        </h2>
        <p className="text-slate-700">
          We are recruiting board-certified physicians in pain medicine,
          anesthesiology, physical medicine and rehabilitation, neurology, and
          closely related specialties, plus clinical pharmacists for medication
          pages. The work is remote, asynchronous, flexible, and paid. You
          review pre-drafted, pre-cited educational content; you do not write
          from scratch and you never give individual medical advice.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>What you get.</strong> A public profile here with your
            credentials, affiliations, and verified identity links, and a
            byline on every page you approve.
          </li>
          <li>
            <strong>What we verify.</strong> Board certification and licensure
            through public registries before any name is published.
          </li>
          <li>
            <strong>What we publish.</strong> Your name, credential line
            exactly as you specify it, review dates, and any disclosures you
            make. Nothing else without your consent.
          </li>
        </ul>
        {SITE.editorialEmail ? (
          <p className="text-slate-700">
            Write to{" "}
            <a
              href={`mailto:${SITE.editorialEmail}`}
              className="text-teal-700 underline underline-offset-2"
            >
              {SITE.editorialEmail}
            </a>{" "}
            with your specialty and certifying board. We reply with the
            reviewer brief and a first page to look at.
          </p>
        ) : (
          <p className="text-slate-700">
            See{" "}
            <Link href="/about" className="text-teal-700 underline underline-offset-2">
              About &amp; editorial policy
            </Link>{" "}
            for the standard behind the site. A contact route for applications
            is being set up.
          </p>
        )}
      </section>
    </article>
  );
}
