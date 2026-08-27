# Pain Medicine brand kit

The mark is a **settling signal**: a damped waveform that starts agitated and comes to rest. It is not a heartbeat, not a QRS complex, not a vital-signs glyph.

```
large oscillation  →  smaller oscillation  →  rest
pain               →  understanding        →  options
```

## Tokens

| Token | Value | Use |
|---|---|---|
| Teal | `#0f766e` | tile, links, buttons, theme-color |
| Ink | `#0f172a` | headlines |
| Muted | `#475569` | secondary type |
| Paper | `#f4f8f7` | share cards |
| Type | Source Sans 3 | site + wordmark |

Canonical path lives in `src/lib/brand.ts`. Raster pipeline: `npm run brand` (`scripts/render-brand-assets.py`). Keep those two in sync.

## Files

| File | Role |
|---|---|
| `src/app/icon.svg` | Favicon (vector) |
| `src/app/favicon.ico` | 16/32/48 fallback |
| `src/app/apple-icon.png` | iOS home screen (180, square — iOS masks) |
| `public/icon-192.png` | PWA |
| `public/icon-512.png` | PWA + schema.org logo |
| `public/icon-512-maskable.png` | Android adaptive (safe zone) |
| `public/brand/mark.svg` | Stable logo URL |
| `public/brand/social.png` | Circle-cropped avatars (X, GitHub, LinkedIn) |
| `src/app/opengraph-image.tsx` | 1200×630 share card |
| `src/app/twitter-image.tsx` | Same card, `summary_large_image` |
| `src/components/BrandMark.tsx` | `variant="tile"` for icons; `variant="signal"` for header/footer lockup |

## Rules

1. **Do not** redraw it as a stock ECG / heartbeat. The rest line on the right is the whole point.
2. **Do not** recolor to alarm red, clinical blue, or a gradient.
3. **Do not** drop the rounded tile in the header and use a free-floating stroke on white — too thin, too medical-device.
4. On dark, invert: teal tile stays teal; free-floating signal (rare) goes white.
5. Minimum digital size: 16px tile. Below that, use the wordmark only.
6. Regenerate rasters from the script. Do not hand-edit PNGs.

Open `brand/board.html` for the visual system.
