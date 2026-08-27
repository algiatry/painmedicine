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
            height: 8,
            background: BRAND.teal,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 620,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
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
                  fontSize: 14,
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 36,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 48,
                  fontWeight: 700,
                  color: BRAND.ink,
                  letterSpacing: "-1px",
                  lineHeight: 1.12,
                }}
              >
                Understand pain.
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 48,
                  fontWeight: 700,
                  color: BRAND.ink,
                  letterSpacing: "-1px",
                  lineHeight: 1.12,
                  marginTop: 6,
                }}
              >
                Understand your options.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: BRAND.muted,
                marginTop: 22,
              }}
            >
              Patient-first pain education
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK_URI} width={280} height={280} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
