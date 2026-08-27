# Anatomy base library

Reusable schematic anatomy for condition and treatment figures — built ahead
of the medical-reviewer unlock so those pages ship with mature art on day one.
Everything is deliberately schematic (not to scale, no realism claims); the
factual load stays in the article text and captions, which go through review.

## Legend (matches the site figure convention)

- **slate** — anatomy (outlines `#94a3b8`, fill `#f1f5f9`)
- **teal** — nervous system and healthy structure (nerve `#0d9488`, cartilage `#14b8a6`, highlight fill `#ccfbf1`)
- **amber** — the pain signal and pathology (`#f59e0b` / `#d97706`)
- **Pain sites** are concentric amber rings (`SiteMarker`), the same motif as
  the conditions hub icon and the article emblems.

Palette constants live in `marks.tsx` as `ANATOMY`.

## Components

All components render a `<g>` in a nominal coordinate space (exported as
`*_W` / `*_H` constants). Compose them inside your figure's `<svg>` with a
`transform`, and let the figure own `role="img"`, `<title>`, and `<desc>`.

| Component | Space | Props |
| --- | --- | --- |
| `BodyFront` / `BodyBack` (`BodyOutline.tsx`) | 220×460 | `marks` (named anchors, `sm`/`md`), `sciatic: "left"\|"right"` (back only), `children` overlay |
| `SpineSide` | 200×440 | `highlight: "cervical"\|"thoracic"\|"lumbar"\|"sacrum"`, `bulgeAt: 1–4` (disc below L1–L4), `labels` |
| `SynovialJoint` | 320×300 | `state: "healthy"\|"osteoarthritis"\|"inflamed"` |
| `HeadProfile` | 240×280 | `marks` (temple, orbit, crown, occiput, neckTop, jaw, sinus), `children` overlay |
| `SiteMarker` (`marks.tsx`) | — | `x`, `y`, `size: "sm"\|"md"` — for custom sites via `children` |

Anchor names are typed (`FrontAnchor`, `BackAnchor`, `HeadAnchor`), so a typo
is a build error.

## Example

```tsx
<svg role="img" aria-labelledby="fibro-title fibro-desc" viewBox="0 0 720 320">
  <title id="fibro-title">Widespread pain in fibromyalgia</title>
  <desc id="fibro-desc">…</desc>
  <g transform="translate(40 10) scale(0.65)">
    <BodyFront marks={[{ at: "neck", size: "sm" }, { at: "shoulderL", size: "sm" }]} />
  </g>
  {/* labels, callouts, a second variant for comparison… */}
</svg>
```

Side-by-side states (e.g. `SynovialJoint state="healthy"` next to
`state="osteoarthritis"`) are the intended pattern for "what changes"
figures. Animate with the `Figure animate` choreography (`fig-*` classes +
`anim()`) like the flagship diagrams.

## Intended first uses (launch queue)

fibromyalgia (front, widespread `sm` marks) · sciatica (back, `sciatic`
path + `lowBack`) · chronic low back (SpineSide `highlight="lumbar"`,
`bulgeAt`) · arthritis (SynovialJoint healthy vs OA) · migraine
(HeadProfile temple/orbit) · neuropathic pain (front, `handL/handR` +
`footL/footR` — the glove-and-stocking pattern).
