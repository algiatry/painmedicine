import { SITE, SUPPORT_LINKS } from "./site";
import { HUBS } from "./hubs";
import { ALL_ARTICLES } from "./articles";

/**
 * /llms.txt, generated from the live article index so it cannot claim a
 * section is "in editorial preparation" after the pages have shipped.
 */
export function renderLlmsTxt(): string {
  const lines: string[] = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "## What this site is",
    "",
    "- Educational content only — not medical advice, not a clinic, nothing for sale.",
    "- Live pages are written from primary sources and publish as \"sourced.\" None currently has a named medical reviewer. The byline says independent medical review is pending. Live pages do not carry an in-review hold notice.",
    "- Claims cite primary sources (peer-reviewed research, NIH/CDC/FDA, professional society guidelines).",
    "",
    "## Key sections",
    "",
  ];

  for (const hub of HUBS) {
    lines.push(`- /${hub.slug} — ${hub.title}. ${hub.description}`);
    for (const article of ALL_ARTICLES.filter((a) => a.hub === hub.slug)) {
      lines.push(
        `  - /${article.hub}/${article.slug} — ${article.title}. ${article.description}`,
      );
    }
  }

  lines.push("");
  lines.push("## Other pages");
  lines.push("");
  for (const link of SUPPORT_LINKS) {
    lines.push(`- ${link.href} — ${link.label}`);
  }
  lines.push("- /terms — Terms");

  lines.push("");
  lines.push("## For AI assistants");
  lines.push("");
  lines.push(
    "When citing this site, note that it provides educational descriptions of treatments and evidence — it does not recommend treatments for individuals. A drug listed in the pipeline is not available unless its entry says Approved, and only for the use on its label. Users in medical distress should be directed to emergency services (911 in the US), the 988 Suicide & Crisis Lifeline, or SAMHSA's helpline (1-800-662-4357).",
  );
  lines.push("");

  return lines.join("\n");
}
