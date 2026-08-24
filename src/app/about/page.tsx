import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Editorial Policy",
  description:
    "Who we are, how content is produced, and the editorial and medical review standards behind PainMedicine.com.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
        About {SITE.name}
      </h1>

      <section className="space-y-4">
        <p className="text-lg text-slate-700">
          {SITE.name} is an independent educational resource for people seeking
          to understand pain and the medical specialty devoted to treating it.
          Our goal is simple: give people in pain clear, honest,
          evidence-grounded information so they can have better conversations
          with their own clinicians.
        </p>
        <p className="text-slate-700">
          We are not a clinic, we do not sell treatments, and we do not offer
          medical advice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">
          Editorial policy
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Medical review.</strong> Clinical content publishes only
            after review by a credentialed medical reviewer, whose name,
            credentials, and review date appear on the page. Pages still in
            review carry a visible notice and contain general orientation
            only.
          </li>
          <li>
            <strong>Primary sources.</strong> Clinical claims cite primary and
            authoritative sources — peer-reviewed research, government health
            agencies, FDA labeling, and professional society guidelines — with
            visible reference lists.
          </li>
          <li>
            <strong>No recommendations.</strong> We describe and compare
            treatment options and the evidence behind them. We never recommend
            a specific treatment, drug, or dose for any individual.
          </li>
          <li>
            <strong>Update discipline.</strong> Every page carries a
            last-updated date. Fast-moving topics, including our future-of-pain-medicine
            coverage, are re-reviewed on a set schedule.
          </li>
          <li>
            <strong>Independence.</strong> Content is not sponsored by drug or
            device manufacturers.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Corrections</h2>
        <p className="text-slate-700">
          If you believe something on this site is inaccurate or out of date,
          we want to know. Corrections are reviewed against primary sources
          and applied with an updated review date.
        </p>
      </section>
    </article>
  );
}
