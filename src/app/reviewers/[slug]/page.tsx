import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { formatDate } from "@/components/ReviewByline";
import { SITE } from "@/lib/site";
import { REVIEWERS, getReviewer } from "@/lib/reviewers";
import { ALL_ARTICLES } from "@/lib/articles";
import { HUBS } from "@/lib/hubs";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return REVIEWERS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getReviewer(slug);
  if (!r) return {};
  return {
    title: `${r.name}, ${r.credentials} – Medical Reviewer`,
    description: `${r.headline}. ${r.bio[0]}`,
    alternates: { canonical: `/reviewers/${r.slug}` },
  };
}

export default async function ReviewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getReviewer(slug);
  if (!r) notFound();

  const reviewed = [
    ...ALL_ARTICLES.filter(
      (a) => a.status === "reviewed" && a.review?.reviewer === r.slug
    ).map((a) => ({
      title: a.title,
      href: `/${a.hub}/${a.slug}`,
      reviewedAt: a.review!.reviewedAt,
    })),
    ...HUBS.filter(
      (h) => h.status === "reviewed" && h.review?.reviewer === r.slug
    ).map((h) => ({
      title: h.title,
      href: `/${h.slug}`,
      reviewedAt: h.review!.reviewedAt,
    })),
  ].sort((a, b) => b.reviewedAt.localeCompare(a.reviewedAt));

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-10">
      <JsonLd data={{ "@context": "https://schema.org", ...personJsonLd(r) }} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Editorial board", path: "/reviewers" },
          { name: r.name, path: `/reviewers/${r.slug}` },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/reviewers" className="hover:text-teal-700">
          Editorial board
        </Link>
        <span aria-hidden="true" className="mx-2 text-slate-300">
          /
        </span>
        <span className="text-slate-700">{r.name}</span>
      </nav>

      <header className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {r.photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={r.photo}
            alt={`${r.name}, ${r.credentials}`}
            width={144}
            height={144}
            className="h-36 w-36 shrink-0 rounded-lg object-cover"
          />
        )}
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Medical reviewer
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            {r.name}, {r.credentials}
          </h1>
          <p className="text-lg text-slate-700">{r.headline}</p>
          <p className="text-sm text-slate-500">
            On the board since {formatDate(r.joinedAt)}
          </p>
        </div>
      </header>

      <section className="space-y-4">
        {r.bio.map((p) => (
          <p key={p} className="text-slate-700">
            {p}
          </p>
        ))}
      </section>

      <section className="grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Board certification
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
            {r.boards.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        {r.affiliations && r.affiliations.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Affiliations
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
              {r.affiliations.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Verified records
        </h2>
        <p className="text-sm text-slate-500">
          Public registries and profiles we checked before publishing this
          byline.{r.npi ? ` NPI ${r.npi}.` : ""}
        </p>
        <ul className="list-disc pl-5 space-y-1">
          {r.sameAs.map((u) => (
            <li key={u}>
              <a
                href={u}
                rel="noopener noreferrer me"
                target="_blank"
                className="break-all text-teal-700 underline underline-offset-2"
              >
                {u.replace(/^https?:\/\//, "")}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Disclosures</h2>
        <p className="text-slate-700">{r.disclosures}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">
          Pages reviewed ({reviewed.length})
        </h2>
        {reviewed.length === 0 ? (
          <p className="text-slate-700">
            No pages carry this reviewer&rsquo;s sign-off yet.
          </p>
        ) : (
          <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {reviewed.map((p) => (
              <li
                key={p.href}
                className="flex items-baseline justify-between gap-4 px-4 py-3"
              >
                <Link
                  href={p.href}
                  className="font-medium text-slate-800 hover:text-teal-700"
                >
                  {p.title}
                </Link>
                <span className="shrink-0 text-sm text-slate-500">
                  {formatDate(p.reviewedAt)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="text-sm text-slate-500">
        Reviewer profiles describe qualifications; they are not an offer of
        care. {SITE.name} does not provide medical advice.
      </p>
    </article>
  );
}
