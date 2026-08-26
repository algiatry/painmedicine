import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.shortName} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand constants (mirror globals.css / Tailwind teal & slate tokens —
// ImageResponse cannot read external CSS).
const TEAL_700 = "#0f766e";
const TEAL_400 = "#2dd4bf";
const SLATE_900 = "#0f172a";
const SLATE_300 = "#cbd5e1";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: `linear-gradient(135deg, ${SLATE_900} 0%, ${TEAL_700} 130%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Settling-signal mark */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          style={{ marginBottom: 40 }}
        >
          <rect width="32" height="32" rx="7" fill={TEAL_700} />
          <path
            d="M4 20 L9 20 L12 8 L16 26 L19 17 L22 21 L28 21"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-1px",
          }}
        >
          {SITE.shortName}
        </div>
        <div
          style={{
            fontSize: 36,
            color: TEAL_400,
            marginTop: 16,
            fontWeight: 600,
          }}
        >
          {SITE.tagline}
        </div>
        <div style={{ fontSize: 26, color: SLATE_300, marginTop: 28 }}>
          painmedicine.com
        </div>
      </div>
    ),
    size,
  );
}
