## What this changes

<!-- One or two sentences. Link the issue if there is one. -->

## Content checklist

Skip this section for code-only changes.

- [ ] **Pages whose status changed** (e.g. `sourced` → `reviewed`) are listed here, or none did:
- [ ] **New or edited references were verified**: `npm run check:refs -- --only=<hub>/<slug>` reports no dead or mismatched citations.
- [ ] Every number on the page was taken from the cited source, not from memory.
- [ ] No dosing instructions; opioid content carries the SAMHSA line inline.
- [ ] New pages link to the other hubs and have at least one link in from an existing page.
- [ ] `lastUpdated` was bumped only for a substantive content change (it resets the re-review clock).

## Verification

- [ ] `npm run lint` — 0 errors
- [ ] `npm run build`
- [ ] `npm audit --audit-level=high`

## Worth a reviewer's eye

<!-- Anything uncertain, sensitive, or that you could not verify. Say "nothing" if so. -->
