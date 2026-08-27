import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import HeroSignal from "@/components/HeroSignal";
import HubIcon from "@/components/HubIcon";

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
    <div>
      {/* Hero — soft paper wash settling into white, like the signal itself */}
      <section className="border-b border-slate-200/70 bg-gradient-to-b from-paper via-paper/60 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 pt-12 pb-14 sm:pt-16 sm:pb-18 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-14">
            <div className="max-w-2xl">
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
                  className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-teal-800"
                >
                  What is pain medicine?
                </Link>
                <Link
                  href="/future-of-pain-medicine"
                  className="rounded-md border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-700 hover:text-teal-700"
                >
                  The future of pain relief
                </Link>
              </div>
            </div>
            <figure className="hidden lg:block" aria-hidden="true">
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-card">
                <HeroSignal className="block h-auto w-full" />
              </div>
              <figcaption className="mt-3 text-center text-xs font-medium uppercase tracking-widest text-slate-400">
                A signal, settling — that is the goal
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Hubs */}
      <section aria-labelledby="explore-heading" className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="explore-heading" className="text-2xl font-semibold text-slate-900">
            Start where you are
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-teal-600/60 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <HubIcon href={item.href} className="size-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-teal-700">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship reads */}
      <section
        aria-labelledby="featured-heading"
        className="border-t border-slate-200/70 bg-paper/60 py-14 sm:py-18"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="featured-heading" className="text-2xl font-semibold text-slate-900">
            Good first reads
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Every page below is written from primary sources, cited, and
            illustrated — a fair sample of the standard the whole site holds
            itself to.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-teal-600/60 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
        </div>
      </section>
    </div>
  );
}
