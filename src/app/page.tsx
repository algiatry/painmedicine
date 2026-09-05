import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import HeroSignal from "@/components/HeroSignal";
import HeroFigure from "@/components/HeroFigure";
import HubIcon from "@/components/HubIcon";
import ArticleEmblem from "@/components/ArticleEmblem";

/** Curated flagship reads — keeps the site's strongest pages one click deep. */
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
      "An inherited neurological disease, not a bad headache — the four-phase attack, and the designed drugs that changed everything.",
    href: "/conditions/migraine",
  },
  {
    eyebrow: "Treatments",
    title: "Comparing your options",
    blurb:
      "The honest evidence map: why almost everything helps 'modestly,' and why modest wins stack.",
    href: "/treatments/comparing-your-options",
  },
  {
    eyebrow: "Understanding pain",
    title: "How pain works",
    blurb:
      "Nociceptors, the spinal 'gate,' and why the brain — not the injury alone — decides how much it hurts.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    eyebrow: "Understanding pain",
    title: "Pain and sleep",
    blurb:
      "The cycle runs both ways — but a bad night drives pain harder than pain drives bad nights.",
    href: "/understanding-pain/pain-and-sleep",
  },
  {
    eyebrow: "The future",
    title: "The pipeline",
    blurb:
      "A source-cited tracker of the pain drugs and devices in development right now.",
    href: "/future-of-pain-medicine/pipeline",
  },
];

const START = NAV[0];
const MORE_HUBS = NAV.slice(1);

export default function Home() {
  return (
    <div>
      <section className="border-b border-slate-200/70 bg-gradient-to-b from-paper via-paper/50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-8 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-12 lg:pb-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
                Patient-first pain education
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
                Pain is real. So are your options.
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                {SITE.shortName} exists to answer two questions clearly and
                honestly: what can pain medicine do for you <em>today</em>, and
                what is medical science building for <em>tomorrow</em>? No hype,
                no sales — just evidence-grounded education to help you have
                better conversations with your care team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/what-is-pain-medicine"
                  className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
                >
                  What is pain medicine?
                </Link>
                <Link
                  href="/future-of-pain-medicine"
                  className="rounded-md border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-teal-700 hover:text-teal-700"
                >
                  The future of pain relief
                </Link>
              </div>
            </div>
            <figure className="hidden lg:block">
              <HeroFigure className="block h-auto w-full" />
            </figure>
          </div>
        </div>
        <div className="lg:hidden overflow-hidden" aria-hidden="true">
          <HeroSignal variant="strip" className="block h-24 w-full sm:h-28" />
        </div>
      </section>

      <section aria-labelledby="explore-heading" className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="explore-heading"
            className="text-2xl font-semibold text-slate-900"
          >
            Start where you are
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Link
              href={START.href}
              className="group lg:col-span-5 rounded-xl border border-slate-200 bg-paper/70 p-7 transition-colors hover:border-teal-300 hover:bg-paper sm:p-8"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-700">
                <HubIcon href={START.href} className="size-3.5" />
                Start here
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-teal-700">
                {START.label}
              </h3>
              <p className="mt-3 text-slate-600">{START.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                Read the specialty
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>

            <ul className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
              {MORE_HUBS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-start gap-4 py-4 sm:py-5"
                  >
                    <span className="mt-0.5 text-teal-700">
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
          <div className="max-w-3xl">
            <h2 id="map-heading" className="text-2xl font-semibold text-slate-900">
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
        </div>
      </section>

      <section
        aria-labelledby="featured-heading"
        className="border-t border-slate-200/70 bg-paper/50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="featured-heading"
            className="text-2xl font-semibold text-slate-900"
          >
            Good first reads
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Written from primary sources, cited, and illustrated — a fair
            sample of the standard the whole site holds itself to.
          </p>
          <ol className="mt-8 grid gap-x-12 sm:grid-cols-2">
            {FEATURED.map((item) => (
              <li
                key={item.href}
                className="border-t border-slate-200 py-5 first:border-t-0 sm:first:border-t sm:[&:nth-child(-n+2)]:border-t-0"
              >
                <Link href={item.href} className="group flex gap-4">
                  <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-white transition-colors group-hover:border-teal-300">
                    <ArticleEmblem
                      slug={item.href.split("/").filter(Boolean).pop() ?? ""}
                      className="size-7"
                    />
                  </span>
                  <span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                      {item.eyebrow}
                    </span>
                    <span className="mt-1 block font-semibold text-slate-900 group-hover:text-teal-700">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">
                      {item.blurb}
                    </span>
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
