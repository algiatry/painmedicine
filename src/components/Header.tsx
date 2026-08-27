import Link from "next/link";
import { SITE, NAV } from "@/lib/site";
import BrandMark from "@/components/BrandMark";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3.5">
          <Link
            href="/"
            className="flex items-center gap-2.5 min-h-11"
            aria-label={`${SITE.shortName} home`}
          >
            <BrandMark size={32} className="h-8 w-8 shrink-0" />
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              {SITE.shortName}
            </span>
            <span className="hidden sm:inline text-xs font-medium uppercase tracking-widest text-teal-700">
              .com
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Mobile nav: simple horizontal scroll, no JS */}
        <nav
          aria-label="Primary mobile"
          className="lg:hidden -mx-4 px-4 pb-3 overflow-x-auto"
        >
          <ul className="flex gap-4 whitespace-nowrap">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-teal-700"
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
