import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern reading PainMedicine.com: educational content only, no medical advice, no warranties, and how the material may be used.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "August 30, 2026";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Terms of use
        </h1>
        <p className="text-sm text-slate-500">Last updated {LAST_UPDATED}</p>
      </header>

      <section className="space-y-4 text-slate-700">
        <p className="text-lg">
          By reading {SITE.name}, you agree to these terms. They are short
          because the site is simple: it publishes educational material about
          pain and pain medicine, and it asks nothing of you in return.
        </p>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Educational content only
        </h2>
        <p>
          Everything on this site is general educational information. It is not
          medical advice, it is not a diagnosis, and it is not a recommendation
          for any individual. Reading the site creates no physician–patient
          relationship with anyone involved in producing it. Decisions about
          your health belong with you and a licensed clinician who knows your
          situation. The{" "}
          <Link href="/medical-disclaimer" className="underline hover:text-teal-700">
            medical disclaimer
          </Link>{" "}
          sets this out in full and is part of these terms.
        </p>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Using the material
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You may read, print, and share links to any page freely – sharing
            an article with your clinician is exactly what the site is for.
          </li>
          <li>
            The original text, figures, and design of {SITE.name} are
            copyrighted. Brief quotation with attribution and a link is
            welcome; wholesale republication is not.
          </li>
          <li>
            Cited sources – government publications, journal articles, and
            society guidelines – belong to their respective publishers and are
            governed by their own terms.
          </li>
          <li>
            Automated scraping that burdens the service, or reuse of the
            content to present it as medical advice, is not permitted.
          </li>
        </ul>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Accuracy and currency
        </h2>
        <p>
          Articles are built from primary sources and carry a last-updated
          date, but medicine moves. A page may not reflect the most recent
          evidence, approval, or safety communication at the moment you read
          it. The site makes reasonable efforts to keep content current and
          corrects errors when found, but no guarantee of completeness,
          accuracy, or timeliness is made.
        </p>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          No warranties; limitation of liability
        </h2>
        <p>
          The site is provided &ldquo;as is&rdquo; and &ldquo;as
          available,&rdquo; without warranties of any kind, express or implied.
          To the fullest extent permitted by law, {SITE.name} and everyone
          involved in producing it are not liable for any damages arising from
          your use of the site or reliance on its content. If you act on
          something you read here without consulting a clinician, you do so at
          your own risk – and against the site&apos;s own repeated advice.
        </p>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          External links
        </h2>
        <p>
          Links to outside sources are provided as citations and starting
          points. The site does not control those destinations, does not
          endorse everything they say, and is not responsible for their
          content or practices.
        </p>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Governing law and changes
        </h2>
        <p>
          These terms are governed by the laws of the United States and the
          state in which the site&apos;s publisher resides, without regard to
          conflict-of-law rules. Terms may be revised from time to time; the
          date above reflects the current version, and continued use after a
          revision constitutes acceptance. See also the{" "}
          <Link href="/privacy" className="underline hover:text-teal-700">
            privacy policy
          </Link>
          , which describes the site&apos;s data practices and is part of these
          terms.
        </p>
      </section>
    </article>
  );
}
