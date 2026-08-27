import { getArticle, ALL_ARTICLES } from "@/lib/articles";
import { getHub } from "@/lib/hubs";
import { SITE } from "@/lib/site";
import { brandCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = SITE.tagline;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return ALL_ARTICLES.map((a) => ({ hub: a.hub, article: a.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ hub: string; article: string }>;
}) {
  const { hub, article } = await params;
  const a = getArticle(hub, article);
  const parentHub = getHub(hub);
  return brandCard({
    eyebrow: parentHub?.title ?? "Patient-first pain education",
    title: a?.title ?? SITE.tagline,
    subline: a?.description,
  });
}
