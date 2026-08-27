"""
Rasterize the Pain Medicine settling-signal mark into favicon, PWA, Apple,
and social sizes. Canonical path matches src/lib/brand.ts — keep in sync.

Usage (from repo root):
    python scripts/render-brand-assets.py
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]

TEAL = (15, 118, 110, 255)
WHITE = (255, 255, 255, 255)
PAPER = (244, 248, 247, 255)
INK = (15, 23, 42, 255)
MUTED = (71, 85, 105, 255)

# 32×32 tile space — identical to src/lib/brand.ts
POINTS = [
    (5.2, 17.0),
    (9.0, 7.0),
    (13.2, 24.6),
    (17.4, 12.2),
    (20.8, 19.6),
    (23.8, 17.0),
    (27.6, 17.0),
]
STROKE_32 = 2.6
RX_32 = 8.0
SIGNAL_PATH = " ".join(
    f"{'M' if i == 0 else 'L'}{x} {y}" for i, (x, y) in enumerate(POINTS)
)


def draw_signal(
    draw: ImageDraw.ImageDraw,
    size: int,
    stroke_color=WHITE,
    scale: float = 1.0,
    ox: float = 0.0,
    oy: float = 0.0,
) -> None:
    s = size / 32.0 * scale
    # Center the scaled tile-space path in the canvas
    pad_x = (size - 32 * s) / 2 + ox
    pad_y = (size - 32 * s) / 2 + oy
    pts = [(pad_x + x * s, pad_y + y * s) for x, y in POINTS]
    sw = max(1, round(STROKE_32 * s))
    draw.line(pts, fill=stroke_color, width=sw, joint="curve")
    r = sw / 2
    for x, y in (pts[0], pts[-1]):
        draw.ellipse((x - r, y - r, x + r, y + r), fill=stroke_color)


def tile(size: int, rounded: bool = True, scale: float = 1.0) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if rounded:
        rx = max(1, round(RX_32 / 32 * size))
        d.rounded_rectangle((0, 0, size - 1, size - 1), radius=rx, fill=TEAL)
    else:
        d.rectangle((0, 0, size - 1, size - 1), fill=TEAL)
    draw_signal(d, size, scale=scale)
    return img


def square_fill(size: int, scale: float) -> Image.Image:
    """Full-bleed teal square (Apple / maskable)."""
    img = Image.new("RGBA", (size, size), TEAL)
    d = ImageDraw.Draw(img)
    draw_signal(d, size, scale=scale)
    return img


def down(img: Image.Image, size: int) -> Image.Image:
    return img.resize((size, size), Image.Resampling.LANCZOS)


def write_svg(
    path: Path,
    rounded: bool = True,
    bg: str | None = "#0f766e",
    stroke: str | None = None,
) -> None:
    rx = f' rx="{int(RX_32)}"' if rounded and bg else ""
    bg_el = f'<rect width="32" height="32"{rx} fill="{bg}"/>' if bg else ""
    if stroke is None:
        stroke = (
            "#ffffff" if bg and bg not in ("#ffffff", "#f4f8f7") else "#0f766e"
        )
    path.write_text(
        (
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n'
            f"  {bg_el}\n"
            f'  <path d="{SIGNAL_PATH}" fill="none" stroke="{stroke}" '
            f'stroke-width="{STROKE_32}" stroke-linecap="round" '
            'stroke-linejoin="round"/>\n'
            "</svg>\n"
        ),
        encoding="utf-8",
    )


def write_lockup_svg(path: Path) -> None:
    # Wordmark is system-sans; production lockup is the React header.
    path.write_text(
        f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 40">
  <rect width="32" height="32" x="0" y="4" rx="8" fill="#0f766e"/>
  <path d="{SIGNAL_PATH}" transform="translate(0,4)" fill="none" stroke="#ffffff"
        stroke-width="{STROKE_32}" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="44" y="28" font-family="ui-sans-serif, system-ui, sans-serif"
        font-size="22" font-weight="600" fill="#0f172a">Pain Medicine</text>
</svg>
""",
        encoding="utf-8",
    )


def save_ico(path: Path, master: Image.Image) -> None:
    master.save(path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])


def render_og_preview(path: Path) -> None:
    """Static stand-in of the share card for the brand board (not production)."""
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), PAPER[:3])
    d = ImageDraw.Draw(img)
    d.rectangle((0, 0, W, 10), fill=TEAL[:3])
    small = tile(52)
    img.paste(small, (72, 72), small)
    large = tile(320)
    img.paste(large, (1200 - 72 - 320, (H - 320) // 2), large)
    try:
        from PIL import ImageFont

        font_name = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 30)
        font_hero = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 52)
        font_dom = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 22)
    except OSError:
        font_name = font_hero = font_dom = ImageFont.load_default()
    d.text((140, 80), "Pain Medicine", font=font_name, fill=INK[:3])
    d.text((72, 390), "Understand pain.", font=font_hero, fill=INK[:3])
    d.text((72, 454), "Understand your options.", font=font_hero, fill=INK[:3])
    d.text((72, 540), "painmedicine.com", font=font_dom, fill=MUTED[:3])
    img.save(path, "PNG", optimize=True)


def main() -> None:
    brand = ROOT / "brand"
    public = ROOT / "public"
    public_brand = public / "brand"
    app = ROOT / "src" / "app"
    brand.mkdir(exist_ok=True)
    public_brand.mkdir(parents=True, exist_ok=True)

    # Master rounded tile at 1024, then downscale — keeps 16px favicon honest
    master = tile(1024, rounded=True)
    # iOS squircles the corners; keep a little extra inset vs. the rounded tile.
    square_master = square_fill(1024, scale=0.90)
    # Maskable safe-zone is the center 80%. The path already carries ~16% inset;
    # 0.86 adds a little extra without looking lost on a teal field.
    maskable = square_fill(1024, scale=0.86)

    write_svg(app / "icon.svg", rounded=True)
    write_svg(brand / "mark.svg", rounded=True)
    write_svg(public_brand / "mark.svg", rounded=True)
    write_svg(brand / "mark-on-light.svg", rounded=False, bg="#f4f8f7")
    write_svg(brand / "mark-on-dark.svg", rounded=False, bg="#0f172a")
    write_svg(brand / "signal-only.svg", rounded=False, bg=None)
    write_svg(
        brand / "signal-on-teal.svg", rounded=False, bg=None, stroke="#ffffff"
    )
    write_lockup_svg(brand / "lockup.svg")

    down(master, 192).save(public / "icon-192.png", "PNG", optimize=True)
    down(master, 512).save(public / "icon-512.png", "PNG", optimize=True)
    down(maskable, 512).save(public / "icon-512-maskable.png", "PNG", optimize=True)
    down(square_master, 180).convert("RGB").save(
        app / "apple-icon.png", "PNG", optimize=True
    )
    down(maskable, 400).save(public_brand / "social.png", "PNG", optimize=True)
    down(master, 1024).save(brand / "mark-1024.png", "PNG", optimize=True)
    save_ico(app / "favicon.ico", master)
    render_og_preview(brand / "og-preview.png")

    print("rendered:")
    for p in [
        app / "icon.svg",
        app / "favicon.ico",
        app / "apple-icon.png",
        public / "icon-192.png",
        public / "icon-512.png",
        public / "icon-512-maskable.png",
        public_brand / "mark.svg",
        public_brand / "social.png",
        brand / "mark.svg",
        brand / "og-preview.png",
    ]:
        print(f"  {p.relative_to(ROOT)}  {p.stat().st_size} bytes")


if __name__ == "__main__":
    main()
