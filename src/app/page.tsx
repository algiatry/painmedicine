import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

/** Curated flagship reads — keeps the site's strongest pages one click deep. */
const FEATURED = [
  {
    eyebrow: "Understanding pain",
    title: "How pain works",
    blurb: "Nociceptors, the spinal 'gate,' and why the brain — not the injury alone — decides how much it hurts.",
    href: "/understanding-pain/how-pain-works",
  },
  {
    eyebrow: "Understanding pain",
    title: "Pain and sleep",
    blurb: "The cycle runs both ways — but a bad night drives pain harder than pain drives bad nights.",
    href: "/understanding-pain/pain-and-sleep",
  },
  {
    eyebrow: "Understanding pain",
    title: "The placebo effect",
    blurb: "Real, blockable-with-a-drug biology — and what responding to it actually proves about your pain.",
    href: "/understanding-pain/the-placebo-effect",
  },
  {
    eyebrow: "Understanding pain",
    title: "Pain and emotion",
    blurb: "Emotion is written into the definition of pain itself. The shared circuitry, explained.",
    href: "/understanding-pain/pain-and-emotion",
  },
  {
    eyebrow: "The future",
    title: "The pipeline",
    blurb: "A source-cited tracker of the pain drugs and devices in development right now.",
    href: "/future-of-pain-medicine/pipeline",
  },
  {
    eyebrow: "The specialty",
    title: "Your first visit",
    blurb: "What a first pain-medicine evaluation involves, what to bring, and how long it takes.",
    href: "/what-is-pain-medicine/your-first-visit",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
          Patient-first pain education
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
          Pain is real. So are your options.
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          {SITE.shortName} exists to answer two questions clearly and honestly:
          what can pain medicine do for you <em>today</em>, and what is medical
          science building for <em>tomorrow</em>? No hype, no sales — just
          evidence-grounded education to help you have better conversations
          with your care team.
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
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-teal-700 hover:text-teal-700"
          >
            The future of pain relief
          </Link>
        </div>
      </section>

      {/* Hubs */}
      <section aria-labelledby="explore-heading" className="pb-16 sm:pb-20">
        <h2 id="explore-heading" className="text-2xl font-semibold text-slate-900">
          Start where you are
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border border-slate-200 p-6 transition-colors hover:border-teal-600"
            >
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-teal-700">
                {item.label}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Flagship reads */}
      <section aria-labelledby="featured-heading" className="pb-16 sm:pb-20">
        <h2 id="featured-heading" className="text-2xl font-semibold text-slate-900">
          Good first reads
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Every page below is written from primary sources, cited, and
          illustrated — a fair sample of the standard the whole site holds
          itself to.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border border-slate-200 p-6 transition-colors hover:border-teal-600"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                {item.eyebrow}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-teal-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
