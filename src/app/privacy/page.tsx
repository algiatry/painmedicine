import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PainMedicine.com has no accounts, no forms, no ad tracking, and no data to sell. What little the site sees, and what it never collects.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "August 30, 2026";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Privacy policy
        </h1>
        <p className="text-sm text-slate-500">Last updated {LAST_UPDATED}</p>
      </header>

      <section className="space-y-4 text-slate-700">
        <p className="text-lg">
          {SITE.name} is a reading site. There are no accounts, no logins, no
          comment sections, no newsletters, and no forms. You cannot type
          anything into this site, which means you cannot give it personal
          information – and it never asks for any.
        </p>
        <p>
          That is a deliberate design choice, not an oversight. Health reading
          is sensitive. What you look up about your own pain is your business,
          and the site is built so that it stays that way.
        </p>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          What the site does see
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Aggregate page analytics.</strong> The site uses Vercel
            Analytics, a cookieless measurement tool. It counts page views and
            general traffic patterns (page visited, country, device type,
            referrer) without cookies, without cross-site tracking, and without
            building a profile of you. Visitors are not identifiable, and the
            data cannot be traced back to any individual.
          </li>
          <li>
            <strong>Standard server logs.</strong> The site is hosted on
            Vercel, whose infrastructure keeps routine, short-lived request
            logs (IP address, requested page, timestamp) for security and
            operations, as virtually every website&apos;s host does. Vercel&apos;s
            handling of that data is described in the{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="underline hover:text-teal-700"
              rel="noopener noreferrer"
            >
              Vercel privacy policy
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          What the site never does
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No tracking cookies, and no cookie banner because none is needed.</li>
          <li>No advertising, ad networks, or ad-tech scripts of any kind.</li>
          <li>No sale, sharing, or rental of data to anyone – there is nothing to sell.</li>
          <li>
            No collection of health information. The site never knows who you
            are, what condition you have, or why you are reading.
          </li>
          <li>No social-media pixels, fingerprinting, or cross-site identifiers.</li>
          <li>No email capture and no marketing lists.</li>
        </ul>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          External links
        </h2>
        <p>
          Articles cite primary sources – government agencies, medical
          societies, and peer-reviewed journals. Following one of those links
          takes you to a site with its own privacy practices, which this
          policy does not cover. The site links out for evidence, never for
          advertising, and receives nothing when you click.
        </p>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Not a covered health entity
        </h2>
        <p>
          {SITE.name} is an educational publication, not a healthcare
          provider, and reading it creates no patient relationship. It is not
          subject to HIPAA because it never handles protected health
          information – by design, it has none to handle. For what the
          content is and is not, see the{" "}
          <Link href="/medical-disclaimer" className="underline hover:text-teal-700">
            medical disclaimer
          </Link>{" "}
          and the{" "}
          <Link href="/about" className="underline hover:text-teal-700">
            editorial policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4 text-slate-700">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Changes to this policy
        </h2>
        <p>
          If the site&apos;s practices ever change – for example, if a search
          feature or newsletter is added – this page will be updated first,
          with the date above revised to match. The commitment that will not
          change: no ad tracking, and no sale of data.
        </p>
      </section>
    </article>
  );
}
