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
import { SITE, correctionHref } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import ArticleEmblem from "@/components/ArticleEmblem";
import ArticleToc from "@/components/ArticleToc";

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
  return pageMetadata({
    title: a.seoTitle ?? a.title,
    description: a.description,
    path: `/${a.hub}/${a.slug}`,
  });
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
  const parentTitle = parentHub?.title ?? "Understanding pain";
  const Body = ARTICLE_BODIES[a.slug];
  const correction = correctionHref(`/${a.hub}/${a.slug}`);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14 xl:grid xl:grid-cols-[minmax(0,42rem)_15rem] xl:justify-center xl:gap-16">
      <article data-toc-root className="mx-auto max-w-[42rem] lg:text-[1.1875rem] xl:mx-0">
      <JsonLd
        data={medicalWebPageJsonLd({
          title: a.title,
          description: a.description,
          path: `/${a.hub}/${a.slug}`,
          lastUpdated: a.lastUpdated,
          publishedAt: a.publishedAt,
          review: a.review,
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

      <nav aria-label="Breadcrumb" className="text-sm text-subtle">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-faint">
            /
          </li>
          <li>
            <Link href={`/${a.hub}`} className="hover:text-brand">
              {parentTitle}
            </Link>
          </li>
          <li aria-hidden="true" className="text-faint">
            /
          </li>
          <li className="text-body">{a.title}</li>
        </ol>
      </nav>

      <header className="mt-6 space-y-4">
        <h1 className="text-4xl sm:text-[2.75rem] sm:leading-[1.1] font-bold tracking-tight text-ink">
          {a.title}
        </h1>
        <p className="text-lg lg:text-xl text-body">{a.answer}</p>
        <ReviewByline
          status={a.status}
          review={a.review}
          lastUpdated={a.lastUpdated}
          hub={a.hub}
        />
      </header>

      <ArticleToc variant="inline" />

      {hub === "conditions" && (
        <aside
          aria-label="Red flags: when to seek urgent care"
          className="mt-8 max-w-[65ch] rounded-xl border border-caution-line bg-caution px-5 py-4 text-sm text-caution-ink"
        >
          <p className="font-semibold">Red flags: when to seek urgent care</p>
          <p className="mt-1 leading-relaxed">
            Seek immediate medical evaluation for sudden severe pain, new
            weakness or numbness in a limb, loss of bowel or bladder control,
            fever with back or neck pain, or pain after major trauma.
          </p>
        </aside>
      )}

      {Body && (
        <div className="mt-10 max-w-[65ch] text-[17px] leading-[1.7]">
          <Body />
        </div>
      )}

      {hub === "conditions" && (
        <section
          aria-labelledby="appointment-heading"
          className="mt-12 max-w-[65ch] rounded-xl border border-line bg-paper/70 px-5 py-5"
        >
          <h2
            id="appointment-heading"
            className="text-xl font-bold tracking-tight text-ink"
          >
            What an appointment looks like
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            A pain-medicine evaluation typically starts with a focused history
            of how your symptoms began, what makes them better or worse, a
            targeted physical exam, and a review of prior imaging or treatments.{" "}
            <Link
              href="/what-is-pain-medicine/your-first-visit"
              className="font-semibold text-brand hover:underline"
            >
              Read what to expect at your first visit →
            </Link>
          </p>
        </section>
      )}

      <section
        aria-labelledby="faq-heading"
        className="mt-14 border-t border-line pt-10"
      >
        <h2
          id="faq-heading"
          className="text-2xl sm:text-[1.75rem] font-bold tracking-tight text-ink"
        >
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-6">
          {a.faqs.map((f) => (
            <div key={f.question}>
              <dt className="font-semibold text-ink">{f.question}</dt>
              <dd className="mt-1.5 text-body">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="refs-heading" className="mt-12">
        <h2
          id="refs-heading"
          className="text-2xl sm:text-[1.75rem] font-bold tracking-tight text-ink"
        >
          References
        </h2>
        <ol className="mt-6 space-y-3 text-sm">
          {a.references.map((ref, i) => (
            <li key={ref.url} className="flex gap-3">
              <span className="text-subtle tabular-nums">{i + 1}.</span>
              <span>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
                >
                  {ref.title}
                </a>
                <span className="text-subtle"> – {ref.source}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {a.related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-12">
          <h2
            id="related-heading"
            className="text-2xl sm:text-[1.75rem] font-bold tracking-tight text-ink"
          >
            Keep reading
          </h2>
          <div className="mt-6 flex flex-col gap-2">
            {a.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex gap-4 rounded-xl border border-transparent px-3 py-4 transition-colors hover:border-line hover:bg-paper/70 sm:px-4"
              >
                <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-lg border border-edge bg-plate transition-colors group-hover:border-brand/50 group-hover:bg-white">
                  <ArticleEmblem
                    slug={r.href.split("/").filter(Boolean).pop() ?? ""}
                    className="size-7"
                  />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-semibold text-ink group-hover:text-brand">
                    {r.title}
                  </span>
                  <span className="text-sm text-muted">{r.blurb}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-12 border-t border-line pt-6 text-sm text-subtle">
        This page is educational and is not a substitute for professional
        medical advice. Talk with a qualified clinician about your own
        situation. {SITE.shortName} does not provide treatment or dosing
        guidance.
        {correction && (
          <>
            {" "}
            Spotted something inaccurate or out of date?{" "}
            <a
              href={correction}
              className="font-medium text-brand underline underline-offset-2"
            >
              Report a correction
            </a>
            .
          </>
        )}
      </p>
      </article>

      <aside className="hidden xl:block">
        <ArticleToc variant="rail" />
      </aside>
    </div>
  );
}
