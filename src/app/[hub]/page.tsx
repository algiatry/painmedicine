import ReadingControls from "@/components/ReadingControls";
import HubIcon from "@/components/HubIcon";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ReviewByline from "@/components/ReviewByline";
import { breadcrumbJsonLd, faqJsonLd, medicalWebPageJsonLd } from "@/lib/schema";
import { HUBS, getHub } from "@/lib/hubs";
import { pageMetadata } from "@/lib/metadata";
import ArticleEmblem from "@/components/ArticleEmblem";
import TreatmentAccess from "@/components/future/TreatmentAccess";

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
  return pageMetadata({
    title: hub.title,
    description: hub.description,
    path: `/${hub.slug}`,
  });
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();
  const isConditions = hub.slug === "conditions";
  const groups = new Map<string, typeof hub.planned>();
  if (isConditions) {
    for (const item of [...hub.planned].sort((a, b) => a.title.localeCompare(b.title, "en"))) {
      const letter = item.title[0].toUpperCase();
      const group = groups.get(letter) ?? [];
      group.push(item);
      groups.set(letter, group);
    }
  }
  const directory = isConditions ? [...groups] : [["", hub.planned] as const];
  const isFutureHub = hub.slug === "future-of-pain-medicine";

  return (
    <article className="editorial-shell">
      <JsonLd
        data={medicalWebPageJsonLd({
          title: hub.title,
          description: hub.description,
          path: `/${hub.slug}`,
          lastUpdated: hub.lastUpdated,
          publishedAt: hub.publishedAt,
          review: hub.review,
          status: hub.status,
        })}
      />
      {hub.faqs && hub.faqs.length > 0 && <JsonLd data={faqJsonLd(hub.faqs)} />}

      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: hub.title, path: `/${hub.slug}` }])} />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-subtle">
        <Link href="/" className="underline underline-offset-2">Home</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{hub.title}</span>
      </nav>
      <header className="editorial-header space-y-4">
        <span className="section-symbol"><HubIcon href={`/${hub.slug}`} /></span>
        <h1 className="editorial-title">
          {hub.heading}
        </h1>
        <ReviewByline
          status={hub.status}
          review={hub.review}
          lastUpdated={hub.lastUpdated}
          hub={hub.slug}
        />
      </header>

      <div className="mt-4"><ReadingControls /></div>

      <div className="editorial-reading mt-6 space-y-5">
        {hub.intro.map((p, i) => (
          <p key={i} className="text-body">
            {p}
          </p>
        ))}
      </div>

      {isFutureHub && (
        <>
          <section aria-labelledby="treatment-availability" className="mt-8">
            <h2 id="treatment-availability" className="text-2xl font-bold tracking-tight text-ink">
              What’s available now, and what’s still in trials?
            </h2>
            <ul className="mt-4 space-y-3 text-body">
              <li>
                <Link href="/treatments" className="font-medium text-brand underline underline-offset-2">
                  Explore pain treatments available today
                </Link>
                {" "}for an overview of medicines, procedures, and physical and behavioral therapies.
              </li>
              <li>
                <Link href="/future-of-pain-medicine/pipeline" className="font-medium text-brand underline underline-offset-2">
                  See treatments in development
                </Link>
                {" "}and check the status of selected drugs and devices. For approved treatments,
                check which conditions the approval covers.
              </li>
            </ul>
          </section>
          <TreatmentAccess />
        </>
      )}

      <section aria-labelledby={`${hub.slug}-coverage`} className="mt-12">
        <h2
          id={`${hub.slug}-coverage`}
          className="text-2xl font-bold tracking-tight text-ink"
        >
          {isConditions ? "Conditions A–Z" : isFutureHub
            ? "New and emerging approaches to pain treatment"
            : hub.planned.some((p) => p.href)
              ? "Explore this section"
              : "What this section will cover"}
        </h2>
        {isConditions && (
          <nav aria-label="Jump to conditions by letter" className="mt-4 flex flex-wrap gap-2">
            {[...groups.keys()].map((letter) => (
              <a key={letter} href={`#conditions-${letter}`} aria-label={`Conditions starting with ${letter}`} className="inline-grid size-11 place-items-center rounded-md border border-line bg-paper font-semibold text-brand-strong underline underline-offset-2 hover:border-brand">
                {letter}
              </a>
            ))}
          </nav>
        )}
        {directory.map(([letter, items]) => (
          <div key={letter} className="mt-5">
            {letter && <h3 id={`conditions-${letter}`} tabIndex={-1} className="scroll-mt-24 text-lg font-semibold text-ink">{letter}</h3>}
            <ul className="border-t border-line">
              {items.map((item) =>
                item.href ? (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="editorial-index-link group flex items-start gap-3 px-2 py-4 sm:gap-4 sm:px-3"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-edge bg-plate">
                        <ArticleEmblem
                          slug={item.href.split("/").filter(Boolean).pop() ?? ""}
                          className="size-8"
                        />
                      </span>
                      <span className="flex-1">
                        <span className="block text-lg font-semibold text-ink group-hover:text-brand group-hover:underline">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm text-muted">
                          {item.blurb}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-faint transition-colors group-hover:text-brand"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li
                    key={item.title}
                    className="rounded-xl border border-dashed border-edge bg-well/60 p-5"
                  >
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.blurb}</p>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </section>

      {hub.faqs && hub.faqs.length > 0 && (
        <section aria-labelledby={`${hub.slug}-faq`} className="mt-12">
          <h2
            id={`${hub.slug}-faq`}
            className="text-2xl font-bold tracking-tight text-ink"
          >
            Frequently asked questions
          </h2>
          <dl className="mt-5 space-y-6">
            {hub.faqs.map((f) => (
              <div key={f.question}>
                <dt className="font-semibold text-ink">{f.question}</dt>
                <dd className="mt-1 text-body">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </article>
  );
}
