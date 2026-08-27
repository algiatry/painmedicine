import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ReviewByline from "@/components/ReviewByline";
import { faqJsonLd, medicalWebPageJsonLd } from "@/lib/schema";
import { HUBS, getHub } from "@/lib/hubs";
import PageKicker from "@/components/PageKicker";
import ArticleEmblem from "@/components/ArticleEmblem";

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

      <header className="space-y-4">
        <PageKicker iconHref={`/${hub.slug}`}>{hub.title}</PageKicker>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          {hub.heading}
        </h1>
        <ReviewByline
          status={hub.status}
          reviewer={hub.reviewer}
          lastUpdated={hub.lastUpdated}
        />
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
          {hub.planned.some((p) => p.href)
            ? "Explore this section"
            : "What this section will cover"}
        </h2>
        <ul className="mt-5 space-y-4">
          {hub.planned.map((item) =>
            item.href ? (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-teal-600/70"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-slate-200/70 bg-paper/70">
                    <ArticleEmblem
                      slug={item.href.split("/").filter(Boolean).pop() ?? ""}
                      className="size-8"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-slate-900 group-hover:text-teal-700">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">
                      {item.blurb}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-slate-300 transition-colors group-hover:text-teal-600"
                  >
                    →
                  </span>
                </Link>
              </li>
            ) : (
              <li
                key={item.title}
                className="rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-5"
              >
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.blurb}</p>
              </li>
            ),
          )}
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
