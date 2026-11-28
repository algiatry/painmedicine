# Discovery and reading audit

| Priority | Existing behavior | Change |
| --- | --- | --- |
| High | Search already ranks aliases and excerpts, but results omit review state. | Show review status from the same records as article bylines in both search surfaces. Preserve ranking. |
| High | Conditions has a flat directory and preparation guidance sits late in articles. | Add server-rendered alphabet anchors and surface the existing first-visit guide near key entry points. |
| High | Article and FAQ schema and article breadcrumbs already exist. Reviewer metadata can be emitted without an explicit reviewed-state check. | Gate reviewer data, add breadcrumbs to hubs, and connect the publishing policy and reference graph. |
| Medium | Takeaways and urgent guidance already exist. Related links mix mechanisms, treatment, and research. | Refine shared callouts and group existing links by purpose. Keep clinical text intact. |
| Medium | Reading settings are article-only and reset on navigation. Long reference lists crowd the bottom of some guides. | Share and persist settings, keep urgent information visible, and progressively disclose sources while preserving direct access. |

Use server HTML for browsing and native disclosures. Search keeps its existing static index and ranking. Assess discovery by testing whether readers can reach a condition or appointment guide in fewer steps. Field LCP, INP, and CLS require deployed traffic.

## Patterns

- **Summary** — Use the shared KeyTakeaways component with short, sourced points near the start of the guide. Keep the review notice ahead of the body.
- **Urgent callout** — Keep existing emergency wording visible. The amber surface and labeled heading distinguish it from the teal educational summary. Never collapse urgent instructions.
- **Related guides** — Group curated links under mechanisms, current treatments, research, or more guides. Keep destinations as ordinary links and preserve their descriptions.
- **References** — Use a native disclosure that starts open so citations and deep links stay available. Diagram explanations use the existing journal disclosure.
- **Reading controls** — Local preferences are shared by hubs, articles, and editorial policy. They change presentation only and transmit no data.

## Verification

The 137-entry search index grew by 3,182 uncompressed bytes for review labels. Ranking still uses the existing index fields. The homepage offers a direct first-visit link, and the conditions directory can be browsed by letter with JavaScript disabled.

The production build, lint, and 19 tests passed. Local Chromium at 320 CSS pixels verified condition discovery, both search surfaces, reference disclosure, reading preference persistence, and the article schema. The sampled migraine page had no violations in the selected axe rules in either theme with low glare active. A manual screen-reader pass and deployed field performance measurements remain open.
