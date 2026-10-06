import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import HeroSignal from "@/components/HeroSignal";
import HeroFigure from "@/components/HeroFigure";
import HubIcon from "@/components/HubIcon";
import ArticleEmblem from "@/components/ArticleEmblem";

/** Curated flagship reads – keeps the site's strongest pages one click deep. */
const FEATURED = [
  {
    eyebrow: "Conditions",
    title: "Low back pain",
    blurb:
      "The world's leading cause of disability: what can actually hurt, why most cases are 'non-specific,' and what an MRI really shows.",
    href: "/conditions/low-back-pain",
  },
  {
    eyebrow: "Conditions",
    title: "Migraine",
    blurb:
      "An inherited neurological disease, not a bad headache – the four-phase attack, and the designed drugs that changed everything.",
    href: "/conditions/migraine",
  },
  {
    eyebrow: "Treatments",
    title: "Medications for pain",
    blurb:
      "The different types of pain relievers, what makes one 'good,' and how to tell which is right for you – by mechanism, not 'strength.'",
    href: "/treatments/medications-for-pain",
  },
  {
    eyebrow: "Understanding pain",
    title: "How pain works",
    blurb:
      "Nociceptors, the spinal 'gate,' and why the brain – not the injury alone – decides how much it hurts.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    eyebrow: "Understanding pain",
    title: "The placebo effect",
    blurb:
      "Real relief from an inert pill, blockable by an opioid antagonist – and its mirror image, the nocebo effect.",
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
    body: "Every page is built from the research and guidelines themselves – not from other websites.",
  },
  {
    title: "Reviewed by clinicians",
    body: "Checked against current clinical practice before it earns a reviewed byline.",
  },
  {
    title: "No ads, no sponsorships",
    body: "Nothing here is for sale. No products, no affiliates, no influence on what we say.",
  },
  {
    title: "We are not your doctor",
    body: "This is education to make your appointments sharper – never a substitute for your own care team.",
  },
];

const TRUST = [
  "Primary sources",
  "Clinician-reviewed",
  "No ads, ever",
];

const START = NAV[0];
const MORE_HUBS = NAV.slice(1);

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-paper via-paper/40 to-white">
        <div className="hero-aura absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-8 pt-14 pb-10 sm:pt-20 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-12 lg:pb-20">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-700 shadow-sm backdrop-blur">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-teal-600"
                />
                Patient-first pain education
              </p>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.05] tracking-tight text-slate-900">
                Pain is real.
                <br className="hidden sm:block" />{" "}
                <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                  So are your options.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {SITE.shortName} exists to answer two questions clearly and
                honestly: what can pain medicine do for you <em>today</em>, and
                what is medical science building for <em>tomorrow</em>? No hype,
                no sales – just evidence-grounded education to help you have
                better conversations with your care team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/what-is-pain-medicine"
                  className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-800 hover:shadow-md hover:-translate-y-0.5"
                >
                  What is pain medicine?
                </Link>
                <Link
                  href="/future-of-pain-medicine"
                  className="rounded-md border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all hover:border-teal-700 hover:text-teal-700 hover:-translate-y-0.5"
                >
                  The future of pain relief
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                {TRUST.map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="size-4 text-teal-600"
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
            <figure className="hidden lg:block">
              <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-card ring-1 ring-slate-900/[0.02] backdrop-blur">
                <HeroFigure className="block h-auto w-full" />
              </div>
            </figure>
          </div>
        </div>
        <div className="lg:hidden overflow-hidden" aria-hidden="true">
          <HeroSignal variant="strip" className="block h-24 w-full sm:h-28" />
        </div>
      </section>

      <section aria-labelledby="explore-heading" className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Five ways in
          </p>
          <h2
            id="explore-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-slate-900"
          >
            Start where you are
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Link
              href={START.href}
              className="card-lift group relative overflow-hidden lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-paper to-white p-7 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-teal-500/5 blur-2xl"
              />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-teal-700/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-700">
                <HubIcon href={START.href} className="size-3.5" />
                Start here
              </span>
              <h3 className="relative mt-5 text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-teal-700">
                {START.label}
              </h3>
              <p className="relative mt-3 text-slate-600">{START.description}</p>
              <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
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
                    className="group flex items-start gap-4 rounded-xl border border-transparent px-3 py-4 transition-colors hover:border-slate-200 hover:bg-paper/70 sm:px-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-200/70 bg-paper/70 text-teal-700 transition-colors group-hover:border-teal-300 group-hover:bg-white">
                      <HubIcon href={item.href} className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-slate-900 group-hover:text-teal-700">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm text-slate-600">
                        {item.description}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-teal-700"
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
        className="border-t border-slate-200/70 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Why this site exists
              </p>
              <h2
                id="map-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-slate-900"
              >
                The territory, briefly
              </h2>
              <div className="mt-6 space-y-5 text-slate-600">
                <p>
                  Pain medicine is a real medical specialty – physicians who
                  train for years in exactly one problem, yours. Most people
                  living with pain have never been told that it exists, what a
                  pain specialist actually does, or how to get referred to one.
                  That is where this site begins:{" "}
                  <Link
                    href="/what-is-pain-medicine"
                    className="font-semibold text-teal-700 hover:underline"
                  >
                    what pain medicine is
                  </Link>{" "}
                  and how the specialty thinks.
                </p>
                <p>
                  Everything here is written from primary sources, reviewed
                  against current clinical guidelines, and kept free of ads,
                  sponsorships, and product sales. We are not your doctor, and
                  we say so plainly – the goal is that you walk into your next
                  appointment knowing the terrain, asking sharper questions, and
                  expecting more from your care. Start with{" "}
                  <Link
                    href="/what-is-pain-medicine"
                    className="font-semibold text-teal-700 hover:underline"
                  >
                    the specialty itself
                  </Link>
                  , or jump straight to the{" "}
                  <Link
                    href="/glossary"
                    className="font-semibold text-teal-700 hover:underline"
                  >
                    glossary
                  </Link>{" "}
                  whenever a term gets in the way.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-teal-600/15 bg-gradient-to-b from-paper to-white p-6 shadow-card sm:p-7">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-teal-700">
                  How we work
                </h3>
                <ul className="mt-5 space-y-5">
                  {PRINCIPLES.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="mt-0.5 size-5 shrink-0 text-teal-600"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {p.title}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-600">
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
        className="border-t border-slate-200/70 bg-paper/50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            A fair sample
          </p>
          <h2
            id="featured-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-slate-900"
          >
            Good first reads
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Written from primary sources, cited, and illustrated – a fair
            sample of the standard the whole site holds itself to.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="card-lift group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg border border-slate-200/80 bg-paper/60 transition-colors group-hover:border-teal-300 group-hover:bg-white">
                    <ArticleEmblem
                      slug={item.href.split("/").filter(Boolean).pop() ?? ""}
                      className="size-7"
                    />
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-teal-700">
                    {item.eyebrow}
                  </span>
                  <span className="mt-1 block font-semibold text-slate-900 group-hover:text-teal-700">
                    {item.title}
                  </span>
                  <span className="mt-1.5 block text-sm text-slate-600">
                    {item.blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          alternateName: SITE.shortName,
          url: SITE.url,
          description: SITE.description,
        }}
      />
    </div>
  );
}
