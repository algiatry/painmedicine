import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { NAV } from "@/lib/site";

// Title and description inherit the root layout defaults; this adds the
// homepage canonical (/) and og:url, the one route that otherwise had none.
export const metadata = pageMetadata({ path: "/" });
import { ALL_ARTICLES } from "@/lib/articles";
import HeroFigure from "@/components/HeroFigure";
import HubIcon from "@/components/HubIcon";
import ArticleEmblem from "@/components/ArticleEmblem";

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
      <section className="relative overflow-hidden border-b border-line/70 bg-gradient-to-b from-paper via-paper/40 to-background">
        <div className="hero-aura absolute inset-0" aria-hidden="true" />
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
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.05] tracking-tight text-ink">
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
                  className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-800 hover:shadow-md hover:-translate-y-0.5"
                >
                  Find your condition
                </Link>
                <Link
                  href="/treatments"
                  className="rounded-md border border-faint bg-surface/80 px-5 py-3 text-sm font-semibold text-body shadow-sm backdrop-blur transition-all hover:border-brand hover:text-brand hover:-translate-y-0.5"
                >
                  See treatment options
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-subtle">
                {TRUST.map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5">
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
            {/* Mobile / tablet: the full hero figure on a light plate, below
                the copy. Replaces the thin decorative strip so small screens
                get a real illustration, not just a flourish. */}
            <figure
              aria-hidden="true"
              className="lg:hidden figure-plate rounded-2xl border p-4 shadow-card sm:p-5"
            >
              <HeroFigure className="mx-auto block h-auto w-full max-w-md" />
            </figure>

            {/* Desktop: figure in the right rail. */}
            <figure className="hidden lg:block">
              <div className="figure-plate rounded-2xl border p-5 shadow-card ring-1 ring-slate-900/[0.02] backdrop-blur">
                <HeroFigure className="block h-auto w-full" />
              </div>
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
              className="card-lift group relative overflow-hidden lg:col-span-5 rounded-2xl border border-line bg-gradient-to-br from-paper to-background p-7 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-teal-500/5 blur-2xl"
              />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
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
                    className="group flex items-start gap-4 rounded-xl border border-transparent px-3 py-4 transition-colors hover:border-line hover:bg-paper/70 sm:px-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-edge bg-paper/70 text-brand transition-colors group-hover:border-brand/50 group-hover:bg-surface">
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
        aria-labelledby="map-heading"
        className="border-t border-line/70 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                About this site
              </p>
              <h2
                id="map-heading"
                className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink"
              >
                Why this site exists
              </h2>
              <div className="mt-6 space-y-5 text-muted">
                <p>
                  Pain medicine is a board-certified medical specialty focused
                  on diagnosing and treating pain. Most people living with pain
                  have never been told that it exists, what a pain specialist
                  does, or how to get referred
                  to one. That is where this site begins:{" "}
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

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-brand/15 bg-gradient-to-b from-paper to-background p-6 shadow-card sm:p-7">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand">
                  How we work
                </h3>
                <ul className="mt-5 space-y-5">
                  {PRINCIPLES.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="mt-0.5 size-5 shrink-0 text-brand"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-ink">
                          {p.title}
                        </p>
                        <p className="mt-0.5 text-sm text-muted">
                          {p.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="featured-heading"
        className="border-t border-line/70 bg-paper/50 py-14 sm:py-16"
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
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="card-lift group flex h-full flex-col rounded-xl border border-line bg-surface p-5"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg border border-edge bg-plate transition-colors group-hover:border-brand/50 group-hover:bg-white">
                    <ArticleEmblem
                      slug={item.href.split("/").filter(Boolean).pop() ?? ""}
                      className="size-7"
                    />
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">
                    {item.eyebrow}
                  </span>
                  <span className="mt-1 block font-semibold text-ink group-hover:text-brand">
                    {item.title}
                  </span>
                  <span className="mt-1.5 block text-sm text-muted">
                    {item.blurb}
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
