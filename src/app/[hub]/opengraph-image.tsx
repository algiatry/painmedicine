import { getHub, HUBS } from "@/lib/hubs";
import { SITE } from "@/lib/site";
import { brandCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = SITE.tagline;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return HUBS.map((h) => ({ hub: h.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: slug } = await params;
  const hub = getHub(slug);
  return brandCard({
    eyebrow: "Patient-first pain education",
    title: hub?.title ?? SITE.tagline,
    subline: hub?.description,
  });
}
