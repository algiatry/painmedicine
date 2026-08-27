import { BRAND, MARK_RADIUS, MARK_STROKE, SIGNAL_PATH } from "@/lib/brand";

type BrandMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

/** Teal rounded tile with the settling-signal mark. */
export default function BrandMark({
  size = 32,
  className,
  title,
}: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <rect width="32" height="32" rx={MARK_RADIUS} fill={BRAND.teal} />
      <path
        d={SIGNAL_PATH}
        fill="none"
        stroke={BRAND.white}
        strokeWidth={MARK_STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
