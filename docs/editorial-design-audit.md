# Editorial design audit

Baseline is the repository after PR #86. Findings are from source inspection. Field Core Web Vitals and full WCAG conformance require separate measurement.

## Strengths

- Newsreader and Source Sans 3 already establish an editorial voice. Next self-hosts the fonts. Article text has a constrained measure, and the site supports dark mode and reduced motion.
- Review gating uses a real reviewer record. Primary references, review notices, dates, medical disclaimers, canonical metadata, and structured data are already present.
- Static guides and a static search index support fast delivery. Search loads the index on demand. The mobile contents disclosure and desktop section rail give readers a direct way into long articles.

## Findings ranked by impact

| Priority | Finding | Change |
| --- | --- | --- |
| High | Readers need review status, dates, and evidence links early. Reviewed and sourced notices use unrelated treatments. References are in the contents menu, but sit deep in its list on long articles. | Give review notices a consistent structure with explicit states, use semantic dates, and link directly to references from the sourcing notice. |
| High | The Larger text preference leaves explicitly sized article copy unchanged. Keyboard users tab through the shared header before reaching the main content, and the sticky header can obscure focused destinations. | Apply the preference to the reading column and add a keyboard skip link and scroll clearance. Check at narrow widths and in both themes. |
| Medium | Hero gradients, decorative blur, moving cards, and repeated rounded containers compete with the editorial hierarchy. Title sizes and vertical spacing vary between templates. | Use a ruled editorial header, a shared title and spacing scale, quiet surfaces, and restrained interaction feedback. Keep existing figure assets. |
| Medium | Reference entries and large guide directories are visually dense. | Use separated citation rows and a compact, ruled guide index with larger titles and clear link affordance. |
| Medium | The homepage emits two copies of the interactive SVG hero at every breakpoint and preloads a font used mainly for metadata. Neither is necessary for the layout. | Use one responsive SVG and defer optional font preload. Confirm layout, hydration, and resource behavior locally. |

## Optimization checks

- **LCP and CLS** — Inspect the hero and heading at mobile and desktop widths, the image and font request priorities, and layout-shift entries on local production builds. Use deployed p75 LCP and CLS to establish a real baseline.
- **INP and JavaScript** — Exercise search, contents, and reading controls. Existing client-side search ranking and section navigation are small interactive surfaces. Use field INP to decide whether further work is warranted.
- **Caching and images** — Keep static rendering and the current cacheable search endpoint. The homepage uses an inline vector illustration. Check production cache headers separately before changing caching policy.
- **SEO and accessibility** — Preserve URLs, metadata, schema, and clinical language. Check one H1 per sampled template, accessible landmark names, focus, text scaling, contrast, and reduced motion.
