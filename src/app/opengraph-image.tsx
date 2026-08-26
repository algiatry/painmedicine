import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.shortName} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand constants (mirror globals.css / Tailwind teal & slate tokens —
// ImageResponse cannot read external CSS).
const TEAL_700 = "#0f766e";
const SLATE_900 = "#0f172a";
const SLATE_600 = "#475569";
const LIGHT = "#f8fafc";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: LIGHT,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Teal brand bar */}
        <div
          style={{
            width: "100%",
            height: 14,
            background: TEAL_700,
            display: "flex",
          }}
        />
        {/* Hero settling-signal line */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M-20 330 L200 330 L290 130 L400 480 L490 260 L560 360 L1220 360"
            fill="none"
            stroke={TEAL_700}
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Type block */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 438,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: SLATE_900,
              letterSpacing: "-1px",
            }}
          >
            Pain Medicine
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: TEAL_700,
              marginTop: 10,
            }}
          >
            {SITE.tagline}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 52,
            fontSize: 26,
            color: SLATE_600,
            display: "flex",
          }}
        >
          painmedicine.com
        </div>
      </div>
    ),
    size,
  );
}
