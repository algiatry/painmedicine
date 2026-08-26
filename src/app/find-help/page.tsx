import type { Metadata } from "next";
import Link from "next/link";
import { SITE, HELP_LINES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Finding Pain Care You Can Trust",
  description:
    "How to find and evaluate a qualified pain specialist: what board certification means, where to verify it, the questions worth asking at a first visit, and the red flags of an illegitimate pain clinic.",
  alternates: { canonical: "/find-help" },
};

const DIRECTORIES = [
  {
    name: "ABMS Certification Matters",
    url: "https://www.certificationmatters.org/",
    blurb:
      "The public tool from the American Board of Medical Specialties to check whether a doctor is board certified.",
  },
  {
    name: "ABMS — Verify Certification",
    url: "https://www.abms.org/board-certification/verify-certification/",
    blurb: "Confirm a physician's board certification directly with ABMS.",
  },
  {
    name: "ABPMR Physician Search",
    url: "https://www.abpmr.org/PhysicianSearch/Search",
    blurb:
      "Find physicians certified in physical medicine & rehabilitation, one common route into pain medicine.",
  },
  {
    name: "SAMHSA — FindTreatment.gov",
    url: "https://findtreatment.gov/",
    blurb:
      "A confidential federal locator for substance-use and mental-health treatment.",
  },
];

const QUESTIONS = [
  "Are you board-certified in pain medicine, and through which board?",
  "Beyond medication, what does your approach include — physical therapy, procedures, psychological support?",
  "How will we measure whether treatment is working — my function and daily life, not just a pain score?",
  "What is the plan if the first approach doesn't help enough?",
  "What are the risks, benefits, and alternatives for anything you recommend?",
];

const RED_FLAGS = [
  "Prescribes strong opioids on a first visit with no exam, records, or clear diagnosis.",
  "Operates cash-only, avoids insurance, and keeps few or no records.",
  "Guarantees a cure, or promises to eliminate your pain completely.",
  "Offers the same treatment to everyone, or skips a physical exam entirely.",
  "Discourages second opinions or talking to your other clinicians.",
  "Pushes hard toward a single expensive procedure, device, or product.",
];

export default function FindHelpPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
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
          <li className="text-slate-700">Find Help</li>
        </ol>
      </nav>

      <header className="mt-6 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Finding pain care you can trust
        </h1>
        <p className="text-lg text-slate-700">
          Good pain care exists — but so do clinics that are not what they seem.
          This page is about how to find a qualified specialist and how to tell
          the difference. It does not recommend individual providers; it gives
          you the tools to choose well.
        </p>
      </header>

      <section aria-labelledby="certified" className="mt-12">
        <h2 id="certified" className="text-2xl font-semibold text-slate-900">
          Start with board certification
        </h2>
        <p className="mt-4 text-slate-700">
          Pain medicine is a recognized subspecialty. The strongest signal of a
          qualified physician is <strong>board certification</strong> — completed
          fellowship training and a passed certifying exam, most often entered
          through anesthesiology, physical medicine &amp; rehabilitation,
          neurology, or psychiatry. You can verify any doctor&rsquo;s
          certification yourself, for free, at the sources below.
        </p>
        <ul className="mt-5 space-y-4">
          {DIRECTORIES.map((d) => (
            <li key={d.url} className="rounded-lg border border-slate-200 p-5">
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="font-semibold text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
              >
                {d.name} →
              </a>
              <p className="mt-1 text-sm text-slate-600">{d.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="questions" className="mt-12">
        <h2 id="questions" className="text-2xl font-semibold text-slate-900">
          Questions worth asking at a first visit
        </h2>
        <p className="mt-4 text-slate-700">
          A good pain clinician will welcome these. The answers tell you a lot
          about how they practice.
        </p>
        <ul className="mt-5 space-y-3">
          {QUESTIONS.map((q) => (
            <li key={q} className="flex gap-3 text-slate-700">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
              />
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="red-flags" className="mt-12">
        <h2 id="red-flags" className="text-2xl font-semibold text-slate-900">
          Red flags to watch for
        </h2>
        <p className="mt-4 text-slate-700">
          Most pain clinics are legitimate. But a few operate as &ldquo;pill
          mills&rdquo; or sell one-size-fits-all procedures. Be cautious if a
          practice does any of the following:
        </p>
        <ul className="mt-5 space-y-3 rounded-lg border border-amber-200 bg-amber-50 p-5">
          {RED_FLAGS.map((r) => (
            <li key={r} className="flex gap-3 text-amber-900">
              <span aria-hidden="true" className="shrink-0 font-semibold">
                !
              </span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          None of these alone proves wrongdoing, but several together are a
          reason to look elsewhere or get a second opinion.
        </p>
      </section>

      <section aria-labelledby="crisis" className="mt-12">
        <h2 id="crisis" className="text-2xl font-semibold text-slate-900">
          If opioids or substance use are a worry
        </h2>
        <p className="mt-4 text-slate-700">
          Pain and substance use can become tangled, and needing help with that
          is common and treatable — not a moral failing. Confidential help is
          available right now:
        </p>
        <ul className="mt-5 space-y-2">
          {HELP_LINES.map((line) => (
            <li key={line.name} className="text-slate-700">
              <span className="font-medium text-slate-900">{line.name}:</span>{" "}
              {line.detail}
            </li>
          ))}
          <li className="text-slate-700">
            <span className="font-medium text-slate-900">
              SAMHSA FindTreatment.gov:
            </span>{" "}
            <a
              href="https://findtreatment.gov/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
            >
              a confidential locator for treatment near you
            </a>
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          If you are in immediate danger, call 911.
        </p>
      </section>

      <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        {SITE.name} is an educational resource, not a clinic or a referral
        service. Use these tools to inform your own choices, and make care
        decisions together with a qualified clinician.
      </p>
    </article>
  );
}
