import type { ReactNode } from "react";

/**
 * One glyph per hub, drawn in the brand's stroke style (round caps, single
 * weight, currentColor). Metaphors stay calm on purpose — ripples, not
 * lightning bolts; a settling wave, not a flatline.
 */
const ICONS: Record<string, ReactNode> = {
  // The specialty: a credential plate, not a clinic plus.
  "/what-is-pain-medicine": (
    <>
      <rect x="4" y="5.5" width="16" height="13" rx="2" />
      <path d="M7 10h10M7 14h6.5" />
    </>
  ),
  // Understanding: the settling signal, contained — pain made legible.
  "/understanding-pain": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M6.8 12.6l1.9-3.4 2.4 5.2 2-4 1.4 2.2h2.7" />
    </>
  ),
  // Treatments: a capsule.
  "/treatments": (
    <>
      <rect
        x="8.7"
        y="4.4"
        width="6.6"
        height="15.2"
        rx="3.3"
        transform="rotate(45 12 12)"
      />
      <path d="M9.6 9.6l4.8 4.8" />
    </>
  ),
  // Conditions: concentric rings around a site — where it hurts.
  "/conditions": (
    <>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="8.7" />
    </>
  ),
  // The future: a rising trajectory.
  "/future-of-pain-medicine": (
    <>
      <path d="M4 18.5c4.5 0 6-2.5 8-6.5s3.5-6.5 8-6.5" />
      <path d="M16.2 5.5H20v3.8" />
    </>
  ),
};

export default function HubIcon({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  const glyph = ICONS[href];
  if (!glyph) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
