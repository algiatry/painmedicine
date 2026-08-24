import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ReviewByline from "@/components/ReviewByline";
import { faqJsonLd, medicalWebPageJsonLd } from "@/lib/schema";
import { HUBS, getHub } from "@/lib/hubs";

export const dynamicParams = false;

export function generateStaticParams() {
  return HUBS.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string }>;
}): Promise<Metadata> {
  const { hub: slug } = await params;
  const hub = getHub(slug);
  if (!hub) return {};
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: `/${hub.slug}` },
  };
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
      <JsonLd
        data={medicalWebPageJsonLd({
          title: hub.title,
          description: hub.description,
          path: `/${hub.slug}`,
          lastUpdated: hub.lastUpdated,
          reviewer: hub.reviewer,
        })}
      />
      {hub.faqs && hub.faqs.length > 0 && <JsonLd data={faqJsonLd(hub.faqs)} />}

      <header className="space-y-5">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          {hub.heading}
        </h1>
        <ReviewByline reviewer={hub.reviewer} lastUpdated={hub.lastUpdated} />
      </header>

      <div className="mt-8 space-y-5">
        {hub.intro.map((p, i) => (
          <p key={i} className="text-lg text-slate-700">
            {p}
          </p>
        ))}
      </div>

      <section aria-labelledby={`${hub.slug}-coverage`} className="mt-12">
        <h2
          id={`${hub.slug}-coverage`}
          className="text-xl font-semibold text-slate-900"
        >
          What this section will cover
        </h2>
        <ul className="mt-5 space-y-4">
          {hub.planned.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-slate-200 p-5"
            >
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      {hub.faqs && hub.faqs.length > 0 && (
        <section aria-labelledby={`${hub.slug}-faq`} className="mt-12">
          <h2
            id={`${hub.slug}-faq`}
            className="text-xl font-semibold text-slate-900"
          >
            Frequently asked questions
          </h2>
          <dl className="mt-5 space-y-6">
            {hub.faqs.map((f) => (
              <div key={f.question}>
                <dt className="font-semibold text-slate-900">{f.question}</dt>
                <dd className="mt-1 text-slate-700">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </article>
  );
}
