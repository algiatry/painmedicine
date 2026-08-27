import Link from "next/link";
import { SITE, NAV, SUPPORT_LINKS, HELP_LINES } from "@/lib/site";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 space-y-8">
        {/* Crisis / help lines */}
        <div className="rounded-lg border border-teal-200 bg-teal-50 p-5">
          <h2 className="text-sm font-semibold text-teal-900">
            If you need help now
          </h2>
          <ul className="mt-2 space-y-1">
            {HELP_LINES.map((line) => (
              <li key={line.name} className="text-sm text-teal-900">
                <span className="font-medium">{line.name}:</span>{" "}
                {line.detail}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-teal-900">
            If you are experiencing a medical emergency, call 911.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex items-start gap-2.5">
            <BrandMark
              variant="signal"
              size={20}
              className="shrink-0 mt-1 text-teal-700"
            />
            <div>
              <p className="text-base font-semibold tracking-tight text-slate-900">
                {SITE.shortName}
                <span className="ml-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                  .com
                </span>
              </p>
              <p className="mt-0.5 text-sm text-slate-600">{SITE.tagline}</p>
            </div>
          </div>
          <nav aria-label="Footer sections">
            <p className="text-sm font-semibold text-slate-900">Explore</p>
            <ul className="mt-2 space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-600 hover:text-teal-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer policies">
            <p className="text-sm font-semibold text-slate-900">Site</p>
            <ul className="mt-2 space-y-1">
              {SUPPORT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-600 hover:text-teal-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Medical disclaimer — required on every page */}
        <div className="border-t border-slate-200 pt-6">
          <p className="text-xs leading-relaxed text-slate-500">
            <strong>Medical disclaimer:</strong> The content on {SITE.name} is for
            educational purposes only. It is not medical advice, and it is not a
            substitute for diagnosis, treatment, or guidance from a licensed
            clinician. Never disregard professional medical advice or delay
            seeking it because of something you read here. Always talk to your
            physician before starting, stopping, or changing any treatment.{" "}
            <Link href="/medical-disclaimer" className="underline hover:text-teal-700">
              Read the full disclaimer
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-slate-400">
            © {new Date().getFullYear()} {SITE.name}. Educational content only.
          </p>
        </div>
      </div>
    </footer>
  );
}
