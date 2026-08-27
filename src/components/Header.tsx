import Link from "next/link";
import { SITE } from "@/lib/site";
import BrandMark from "@/components/BrandMark";
import NavLinks from "@/components/NavLinks";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-40">
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
        </div>
        <nav
          aria-label="Primary mobile"
          className="lg:hidden -mx-4 px-4 pb-2.5 overflow-x-auto"
        >
          <ul className="flex gap-4 whitespace-nowrap">
            <NavLinks />
          </ul>
        </nav>
      </div>
    </header>
  );
}
