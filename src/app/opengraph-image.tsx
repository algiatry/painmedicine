import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import { BRAND, SIGNAL_PATH } from "@/lib/brand";

export const alt = `${SITE.shortName} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${BRAND.teal}"/><path d="${SIGNAL_PATH}" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const MARK_URI = `data:image/svg+xml,${encodeURIComponent(MARK_SVG)}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: BRAND.paper,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 10,
            background: BRAND.teal,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 680,
            padding: "72px 0 68px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MARK_URI} width={52} height={52} alt="" />
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 700,
                color: BRAND.ink,
                letterSpacing: "-0.4px",
                marginLeft: 16,
              }}
            >
              {SITE.shortName}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 52,
                fontWeight: 700,
                color: BRAND.ink,
                letterSpacing: "-1px",
                lineHeight: 1.15,
              }}
            >
              Understand pain.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 52,
                fontWeight: 700,
                color: BRAND.ink,
                letterSpacing: "-1px",
                lineHeight: 1.15,
                marginTop: 4,
              }}
            >
              Understand your options.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: BRAND.muted,
                marginTop: 28,
              }}
            >
              painmedicine.com
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK_URI} width={320} height={320} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
