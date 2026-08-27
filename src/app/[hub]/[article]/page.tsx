import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ReviewByline from "@/components/ReviewByline";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  medicalWebPageJsonLd,
} from "@/lib/schema";
import { getHub } from "@/lib/hubs";
import { ALL_ARTICLES, getArticle } from "@/lib/articles";
import { ARTICLE_BODIES } from "@/components/bodies";
import { SITE } from "@/lib/site";
import PageKicker from "@/components/PageKicker";
import ArticleEmblem from "@/components/ArticleEmblem";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_ARTICLES.map((a) => ({ hub: a.hub, article: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string; article: string }>;
}): Promise<Metadata> {
  const { hub, article } = await params;
  const a = getArticle(hub, article);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/${a.hub}/${a.slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ hub: string; article: string }>;
}) {
  const { hub, article } = await params;
  const a = getArticle(hub, article);
  if (!a) notFound();

  const parentHub = getHub(a.hub);
  const parentTitle = parentHub?.title ?? "Understanding Pain";
  const Body = ARTICLE_BODIES[a.slug];

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <JsonLd
        data={medicalWebPageJsonLd({
          title: a.title,
          description: a.description,
          path: `/${a.hub}/${a.slug}`,
          lastUpdated: a.lastUpdated,
          reviewer: a.reviewer,
        })}
      />
      <JsonLd data={faqJsonLd(a.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: parentTitle, path: `/${a.hub}` },
          { name: a.title, path: `/${a.hub}/${a.slug}` },
        ])}
      />

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
          <li>
            <Link href={`/${a.hub}`} className="hover:text-teal-700">
              {parentTitle}
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">
            /
          </li>
          <li className="text-slate-700">{a.title}</li>
        </ol>
      </nav>

      <header className="mt-6 space-y-4">
        <PageKicker href={`/${a.hub}`} iconHref={`/${a.hub}`}>
          {parentTitle}
        </PageKicker>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          {a.title}
        </h1>
        <p className="text-lg text-slate-700">{a.answer}</p>
        <ReviewByline
          status={a.status}
          reviewer={a.reviewer}
          lastUpdated={a.lastUpdated}
        />
      </header>

      {Body && (
        <div className="mt-10">
          <Body />
        </div>
      )}

      <section
        aria-labelledby="faq-heading"
        className="mt-14 border-t border-slate-200 pt-10"
      >
        <h2
          id="faq-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-6">
          {a.faqs.map((f) => (
            <div key={f.question}>
              <dt className="font-semibold text-slate-900">{f.question}</dt>
              <dd className="mt-1.5 text-slate-700">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="refs-heading" className="mt-12">
        <h2
          id="refs-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          References
        </h2>
        <ol className="mt-6 space-y-3 text-sm">
          {a.references.map((ref, i) => (
            <li key={ref.url} className="flex gap-3">
              <span className="text-slate-400 tabular-nums">{i + 1}.</span>
              <span>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
                >
                  {ref.title}
                </a>
                <span className="text-slate-500"> — {ref.source}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {a.related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-12">
          <h2
            id="related-heading"
            className="text-2xl font-semibold text-slate-900"
          >
            Keep reading
          </h2>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {a.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex gap-4 py-4 sm:py-5"
              >
                <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-200/70 bg-paper/70">
                  <ArticleEmblem
                    slug={r.href.split("/").filter(Boolean).pop() ?? ""}
                    className="size-7"
                  />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-900 group-hover:text-teal-700">
                    {r.title}
                  </span>
                  <span className="text-sm text-slate-600">{r.blurb}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        This page is educational and is not a substitute for professional
        medical advice. Talk with a qualified clinician about your own
        situation. {SITE.shortName} does not provide treatment or dosing
        guidance.
      </p>
    </article>
  );
}
