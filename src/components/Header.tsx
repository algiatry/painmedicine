"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HubIcon from "@/components/HubIcon";
import { usePathname } from "next/navigation";
import { SITE, NAV, SUPPORT_LINKS } from "@/lib/site";
import BrandMark from "@/components/BrandMark";
import NavLinks from "@/components/NavLinks";
import SiteSearch from "@/components/SiteSearch";

/** Quick links surfaced in the mobile menu footer. */
const MOBILE_UTILITY = [
  { label: "What to ask your clinician", href: "/what-is-pain-medicine/your-first-visit" },
  ...SUPPORT_LINKS.filter((link) => ["/find-help", "/glossary", "/about"].includes(link.href)),
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  // Deepen the header's edge once the page has scrolled past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      onKeyDown={(event) => {
        if (!open || event.key !== "Escape" || event.defaultPrevented) return;
        if (event.target instanceof Element && event.target.closest("dialog")) return;
        setOpen(false);
        menuButton.current?.focus();
      }}
      className={`sticky top-0 z-40 border-b bg-chrome/85 backdrop-blur transition-shadow ${
        scrolled
          ? "border-line shadow-[0_1px_12px_-4px_rgb(15_23_42/0.12)] dark:shadow-[0_1px_12px_-4px_rgb(0_0_0/0.5)]"
          : "border-line/70"
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
              className="shrink-0 text-brand"
            />
            <span className="text-xl font-semibold tracking-tight text-ink">
              {SITE.shortName}
            </span>
          </Link>

          <nav aria-label="Primary" className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-3 xl:gap-5">
              <NavLinks />
            </ul>
          </nav>

          <div className="ml-auto flex items-center lg:ml-0">
          <SiteSearch />
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-1 inline-flex size-11 items-center justify-center rounded-md text-body transition-colors hover:bg-sunken hover:text-brand lg:hidden"
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
      </div>

      {/* Mobile menu panel */}
      <div
          id="mobile-menu"
          hidden={!open}
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-line bg-chrome lg:hidden"
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
                      className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] transition-colors ${
                        active
                          ? "bg-note font-semibold text-brand-strong"
                          : "font-medium text-body hover:bg-sunken hover:text-brand"
                      }`}
                    >
                      <HubIcon href={item.href} className="size-4 shrink-0" />
                      {item.label}
                      <span aria-hidden="true" className="ml-auto text-faint">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 border-t border-line px-3 pt-3">
              {MOBILE_UTILITY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-subtle underline underline-offset-2 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </header>
  );
}
