import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND, SIGNAL_PATH } from "@/lib/brand";
import { SITE } from "@/lib/site";

/**
 * Shared frame for every social share card: paper ground, teal rule, the
 * settling signal ghosted across the lower third, Source Sans 3 throughout
 * (the same face the site renders in — cards used to fall back to a stock
 * sans).
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const FONT_DIR = join(process.cwd(), "src", "assets", "og");

async function loadFonts() {
  const [regular, semibold, bold] = await Promise.all([
    readFile(join(FONT_DIR, "SourceSans3-Regular.ttf")),
    readFile(join(FONT_DIR, "SourceSans3-SemiBold.ttf")),
    readFile(join(FONT_DIR, "SourceSans3-Bold.ttf")),
  ]);
  return [
    { name: "Source Sans 3", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Source Sans 3", data: semibold, weight: 600 as const, style: "normal" as const },
    { name: "Source Sans 3", data: bold, weight: 700 as const, style: "normal" as const },
  ];
}

const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${BRAND.teal}"/><path d="${SIGNAL_PATH}" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
export const MARK_URI = `data:image/svg+xml,${encodeURIComponent(MARK_SVG)}`;

/** Wide damped sine, ghosted across the card's lower third. */
function waveUri(): string {
  const w = 1240;
  const h = 300;
  const mid = 170;
  const amp = 105;
  const pts: string[] = [];
  for (let x = 0; x <= w; x += 6) {
    const y = mid - amp * Math.exp(-x / 430) * Math.sin(x / 58);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><polyline points="${pts.join(" ")}" fill="none" stroke="${BRAND.teal}" stroke-opacity="0.13" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
const WAVE_URI = waveUri();

export async function brandCard({
  eyebrow,
  title,
  subline,
}: {
  eyebrow: string;
  title: string;
  subline?: string;
}) {
  const fonts = await loadFonts();
  const titleSize = title.length > 70 ? 52 : title.length > 40 ? 60 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BRAND.paper,
          fontFamily: "Source Sans 3",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 1200,
            height: 10,
            background: BRAND.teal,
            display: "flex",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={WAVE_URI}
          width={1240}
          height={300}
          alt=""
          style={{ position: "absolute", left: -20, bottom: -30 }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: "58px 72px 48px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              color: BRAND.teal,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 700,
              color: BRAND.ink,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              marginTop: 26,
              maxWidth: 980,
            }}
          >
            {title}
          </div>

          {subline ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 400,
                color: BRAND.muted,
                lineHeight: 1.4,
                marginTop: 24,
                maxWidth: 860,
              }}
            >
              {subline}
            </div>
          ) : null}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 30,
                  fontWeight: 700,
                  color: BRAND.ink,
                  letterSpacing: "-0.4px",
                }}
              >
                {SITE.shortName}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 16,
                  fontWeight: 700,
                  color: BRAND.teal,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginLeft: 10,
                }}
              >
                .com
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MARK_URI} width={92} height={92} alt="" />
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
