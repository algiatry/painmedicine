import {
  BRAND,
  MARK_RADIUS,
  MARK_STROKE,
  SIGNAL_PATH,
  SIGNAL_VIEWBOX,
} from "@/lib/brand";

type BrandMarkProps = {
  size?: number;
  className?: string;
  title?: string;
  /** `tile` = favicon-style app icon. `signal` = editorial lockup (no square). */
  variant?: "tile" | "signal";
};

export default function BrandMark({
  size = 32,
  className,
  title,
  variant = "tile",
}: BrandMarkProps) {
  const isSignal = variant === "signal";
  const width = isSignal ? Math.round(size * (25.6 / 21.2)) : size;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox={isSignal ? SIGNAL_VIEWBOX : "0 0 32 32"}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {isSignal ? null : (
        <rect width="32" height="32" rx={MARK_RADIUS} fill={BRAND.teal} />
      )}
      <path
        d={SIGNAL_PATH}
        fill="none"
        stroke={isSignal ? BRAND.teal : BRAND.white}
        strokeWidth={MARK_STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
