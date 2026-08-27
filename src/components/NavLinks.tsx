"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

/**
 * Primary nav links with active-section highlighting. A hub link counts as
 * active on the hub page and on every article beneath it.
 */
export default function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <>
      {NAV.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "true" : undefined}
              className={`${className ?? ""} border-b-2 pb-1 text-sm transition-colors ${
                active
                  ? "border-teal-600 font-semibold text-teal-800"
                  : "border-transparent font-medium text-slate-600 hover:border-slate-300 hover:text-teal-700"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}
