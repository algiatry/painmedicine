import { EMBLEMS, EMBLEM_VIEWBOX } from "@/lib/emblems";

/**
 * Inline renderer for an article's signature emblem (see lib/emblems.ts).
 * Decorative — always paired with the article title it stands for.
 */
export default function ArticleEmblem({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const inner = EMBLEMS[slug];
  if (!inner) return null;
  return (
    <svg
      viewBox={EMBLEM_VIEWBOX}
      className={className}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}
