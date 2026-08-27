import { SITE } from "@/lib/site";
import { brandCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = `${SITE.shortName} — ${SITE.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return brandCard({
    eyebrow: "Patient-first pain education",
    title: SITE.tagline,
    subline:
      "No hype, no sales — evidence-grounded answers about what pain medicine can do today, and what science is building for tomorrow.",
  });
}
