import type { Metadata } from "next";
import { HELP_LINES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "PainMedicine.com provides educational content only. It is not medical advice and is not a substitute for care from a licensed clinician.",
  alternates: { canonical: "/medical-disclaimer" },
};

export default function MedicalDisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
        Medical disclaimer
      </h1>

      <section className="space-y-4 text-slate-700">
        <p className="text-lg">
          All content on {SITE.name} is provided for general educational and
          informational purposes only. It is <strong>not medical advice</strong>,
          and it is not a substitute for professional diagnosis, treatment, or
          guidance from a licensed physician or other qualified health
          provider.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Never disregard professional medical advice, or delay seeking it,
            because of something you have read on this site.
          </li>
          <li>
            Never start, stop, or change any medication or treatment without
            talking to your physician or pharmacist first. Stopping some
            medications abruptly can be dangerous.
          </li>
          <li>
            Reading this site does not create a physician–patient relationship
            with anyone involved in producing it.
          </li>
          <li>
            Descriptions of treatments, procedures, and research are
            educational summaries — they are not recommendations for any
            individual, and they may not reflect the most recent findings at
            the moment you read them.
          </li>
        </ul>
      </section>

      <section className="rounded-lg border border-teal-200 bg-teal-50 p-5 space-y-2">
        <h2 className="text-base font-semibold text-teal-900">
          If you need help now
        </h2>
        <p className="text-sm text-teal-900">
          If you are experiencing a medical emergency, call 911 immediately.
        </p>
        <ul className="space-y-1 text-sm text-teal-900">
          {HELP_LINES.map((line) => (
            <li key={line.name}>
              <span className="font-medium">{line.name}:</span> {line.detail}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
