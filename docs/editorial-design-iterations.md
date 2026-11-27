# Editorial design iteration log

## First pass

Applied a shared title and rule to the key templates, used a quieter guide index, and aligned review notices by state. Reviewed, sourced, and in-review text and gating still come from the original component. The references list retains its source titles and links with more separation between entries.

Source review found three remaining priorities from the audit. The text preference still needed to affect the explicit article font size, references still needed a direct link at the point where readers see the sourcing notice, and the homepage still emitted two SVG trees.

## Second pass

Linked the sourcing notice to references, made the desktop contents rail scroll on short viewports, and connected Larger text to the actual reading column. Added a shared skip target. Consolidated the home illustration to one SVG and removed the metadata font from the preload set. Browser review also caught a low-contrast home label, a mismatch between the figure's visible and accessible link names, and an extra Escape keystroke in search. All three were corrected and rechecked.

## Verification and remaining work

- Production build, lint, 19 unit tests, and dependency audit passed.
- Chromium checks at 320px in light mode and 1440px in dark mode covered the home page, condition and treatment hubs, Interventional Procedures, About, and Reviewers. Sampled pages had one H1, no horizontal page overflow, and no axe violations under the selected WCAG A and AA rules. Keyboard skip, search results and Escape, reference jumps, and text scaling passed.
- One unthrottled local run per viewport observed homepage LCP of about 488 ms on mobile and 404 ms on desktop, with no layout shift recorded at the sampling point. These are local observations. Field p75 LCP, INP, and CLS and a full manual WCAG 2.2 AA review remain open.
- Local production returned a static Next cache hit for the search index. Verify production edge headers after release.
