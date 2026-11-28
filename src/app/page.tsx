import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { NAV } from "@/lib/site";

// Title and description inherit the root layout defaults; this adds the
// homepage canonical (/) and og:url, the one route that otherwise had none.
export const metadata = pageMetadata({ path: "/" });
import { ALL_ARTICLES } from "@/lib/articles";
import HeroFigure from "@/components/HeroFigure";
import TrustBadge from "@/components/TrustBadge";
import HubIcon from "@/components/HubIcon";

/** Curated flagship reads – keeps the site's strongest pages one click deep. */
const FEATURED = [
  {
    eyebrow: "Conditions",
    title: "Low back pain",
    blurb:
      "The world's leading cause of disability: what can hurt, why most cases are “non-specific,” and what an MRI can and can't show.",
    href: "/conditions/low-back-pain",
  },
  {
    eyebrow: "Conditions",
    title: "Migraine",
    blurb:
      "An inherited neurological disease with a four-phase attack, and the purpose-built drugs that changed its treatment.",
    href: "/conditions/migraine",
  },
  {
    eyebrow: "Treatments",
    title: "Medications for pain",
    blurb:
      "The main types of pain reliever, compared by how they work instead of by “strength.”",
    href: "/treatments/medications-for-pain",
  },
  {
    eyebrow: "Understanding pain",
    title: "How pain works",
    blurb:
      "Nociceptors, the spinal “gate,” and why the brain has the final say on how much an injury hurts.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    eyebrow: "Understanding pain",
    title: "The placebo effect",
    blurb:
      "Measurable relief from an inert pill, which an opioid blocker can switch off. Plus its mirror image, the nocebo effect.",
    href: "/understanding-pain/the-placebo-effect",
  },
  {
    eyebrow: "The future",
    title: "The pipeline",
    blurb:
      "A source-cited tracker of the pain drugs and devices in development right now.",
    href: "/future-of-pain-medicine/pipeline",
  },
];

/** The editorial principles, shown as a trust panel beside the mission copy. */
const PRINCIPLES = [
  {
    title: "Written from primary sources",
    body: "Every page is built from the research and guidelines themselves, and cites them.",
  },
  {
    title: "Clinician review, shown openly",
    body: "Independent medical review is in progress. Each page states whether it has been reviewed, and by whom.",
  },
  {
    title: "No ads, no sponsorships",
    body: "Nothing here is for sale. No products, no affiliates, no influence on what we say.",
  },
  {
    title: "We are not your doctor",
    body: "This is education to make your appointments more useful. It does not replace your own care team.",
  },
];

const TRUST = [
  "Primary sources",
  "Clinician review in progress",
  "No ads, ever",
];

const START = NAV[0];
const MORE_HUBS = NAV.slice(1);
const GUIDE_COUNT = ALL_ARTICLES.length;

export default function Home() {
  return (
    <div>
      <section className="border-b border-line bg-paper">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-8 pt-14 pb-10 sm:pt-20 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-12 lg:pb-20">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-surface/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand shadow-sm backdrop-blur">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-brand"
                />
                Patient-first pain education
              </p>
              <h1 className="mt-5 editorial-title">
                Pain is real.
                <br className="hidden sm:block" />{" "}
                <span className="text-brand">So are your options.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Plain-language guides to why pain happens, what treats it
                today, and what is in development. Every claim is cited, and
                nothing here is for sale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/conditions"
                  className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-800 hover:shadow-md motion-reduce:transition-none"
                >
                  Find your condition
                </Link>
                <Link
                  href="/treatments"
                  className="rounded-md border border-faint bg-surface/80 px-5 py-3 text-sm font-semibold text-body shadow-sm backdrop-blur transition-all hover:border-brand hover:text-brand motion-reduce:transition-none"
                >
                  See treatment options
                </Link>
                <Link
                  href="/what-is-pain-medicine/your-first-visit"
                  className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-brand-strong underline underline-offset-4"
                >
                  What to ask your clinician
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-subtle">
                {TRUST.map((t) => (
                  t === "Clinician review in progress" ? (
                    <li key={t}><TrustBadge>{t}</TrustBadge></li>
                  ) : <li key={t} className="inline-flex items-center gap-1.5">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="size-4 text-brand"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="figure-plate rounded-md border p-4 sm:p-5">
              <HeroFigure className="mx-auto block h-auto w-full max-w-md" />
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="explore-heading" className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            {NAV.length} sections · {GUIDE_COUNT} guides
          </p>
          <h2
            id="explore-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink"
          >
            Start where you are
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Link
              href={START.href}
              className="card-lift group relative lg:col-span-5 rounded-md border border-line bg-paper p-7 sm:p-8"
            >
              <span className="relative inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-strong">
                <HubIcon href={START.href} className="size-3.5" />
                The specialty
              </span>
              <h3 className="relative mt-5 text-2xl font-semibold tracking-tight text-ink group-hover:text-brand">
                {START.label}
              </h3>
              <p className="relative mt-3 text-muted">{START.description}</p>
              <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Read the specialty
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>

            <ul className="lg:col-span-7 flex flex-col gap-2">
              {MORE_HUBS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-start gap-4 rounded-md border border-line bg-surface px-3 py-4 transition-colors hover:border-brand/50 hover:bg-paper/70 sm:px-4"
                  >
                    <span className="section-symbol">
                      <HubIcon href={item.href} className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink group-hover:text-brand">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm text-muted">
                        {item.description}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-heading"
        className="border-t border-line/70 bg-paper/70 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              About this site
            </p>
            <h2
              id="about-heading"
              className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink"
            >
              Why this site exists
            </h2>
            <div className="mt-6 space-y-5 text-muted">
              <p>
                Pain medicine is a board-certified medical specialty focused
                on diagnosing and treating pain. Most people living with pain
                have never been told that it exists, what a pain specialist
                does, or how to get referred to one. That is where this site
                begins:{" "}
                <Link
                  href="/what-is-pain-medicine"
                  className="font-semibold text-brand hover:underline"
                >
                  what pain medicine is
                </Link>{" "}
                and how the specialty thinks.
              </p>
              <p>
                We are not your doctor. The goal is that you walk into your
                next appointment knowing what to ask and what to expect from
                your care. When a term gets in the way, the{" "}
                <Link
                  href="/glossary"
                  className="font-semibold text-brand hover:underline"
                >
                  glossary
                </Link>{" "}
                explains it in a sentence or two.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand">
              How we work
            </h3>
            <ol role="list" className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRINCIPLES.map((p, idx) => (
                <li
                  key={p.title}
                  className="border-t border-line pt-4"
                >
                  <span aria-hidden="true" className="section-symbol font-mono text-xs font-semibold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-semibold text-ink">{p.title}</p>
                  <p className="mt-1 text-sm text-muted">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="featured-heading"
        className="border-t border-line/70 bg-background py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Editor&rsquo;s picks
          </p>
          <h2
            id="featured-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink"
          >
            Good first reads
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            {FEATURED.length} pages that show what the site aims for. Pick
            whichever is closest to what you&rsquo;re living with.
          </p>
          <ol className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {FEATURED.map((item) => (
              <li
                key={item.href}
                className="border-t border-line"
              >
                <Link
                  href={item.href}
                  className="group flex items-start gap-3 py-4 transition-colors"
                >
                  <span className="section-symbol"><HubIcon href={`/${item.href.split("/")[1]}`} /></span>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {item.eyebrow}
                    </span>
                    <span className="mt-1 block font-semibold text-ink group-hover:text-brand">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {item.blurb}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-sm text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
