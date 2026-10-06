"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, NAV, SUPPORT_LINKS } from "@/lib/site";
import BrandMark from "@/components/BrandMark";
import NavLinks from "@/components/NavLinks";

/** Quick links surfaced in the mobile menu footer. */
const MOBILE_UTILITY = SUPPORT_LINKS.filter((l) =>
  ["/find-help", "/glossary", "/about"].includes(l.href),
);

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Deepen the header's edge once the page has scrolled past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur transition-shadow ${
        scrolled
          ? "border-slate-200 shadow-[0_1px_12px_-4px_rgb(15_23_42/0.12)]"
          : "border-slate-200/70"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 min-h-11"
            aria-label={`${SITE.shortName} home`}
          >
            <BrandMark
              variant="signal"
              size={22}
              className="shrink-0 text-teal-700"
            />
            <span className="flex items-baseline gap-1.5">
              <span className="text-xl font-semibold tracking-tight text-slate-900">
                {SITE.shortName}
              </span>
              <span className="hidden sm:inline text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                .com
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5">
              <NavLinks />
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-1 inline-flex size-11 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 hover:text-teal-700 lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-slate-200 bg-white"
        >
          <nav
            aria-label="Primary mobile"
            className="mx-auto max-w-6xl px-4 sm:px-6 py-3"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-lg px-3 py-3 text-[15px] transition-colors ${
                        active
                          ? "bg-teal-50 font-semibold text-teal-800"
                          : "font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                      }`}
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-slate-300">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 px-3 pt-3">
              {MOBILE_UTILITY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-500 hover:text-teal-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
