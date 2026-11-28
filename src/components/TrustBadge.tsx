import type { ReactNode } from "react";

export default function TrustBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "reviewed";
}) {
  return <span className="trust-badge" data-tone={tone}>{children}</span>;
}
