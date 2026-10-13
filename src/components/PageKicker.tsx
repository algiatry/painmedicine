import type { ReactNode } from "react";
import Link from "next/link";
import HubIcon from "@/components/HubIcon";

/**
 * Section identity line for hub and article templates.
 * Icon sits on the type baseline – not a floating rounded-square topper.
 */
export default function PageKicker({
  href,
  iconHref,
  children,
}: {
  href?: string;
  iconHref?: string;
  children: ReactNode;
}) {
  const icon = iconHref ? (
    <HubIcon href={iconHref} className="size-3.5" />
  ) : null;
  const className =
    "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400";

  if (href) {
    return (
      <Link href={href} className={`${className} hover:text-teal-800 dark:hover:text-teal-300`}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <p className={className}>
      {icon}
      {children}
    </p>
  );
}
