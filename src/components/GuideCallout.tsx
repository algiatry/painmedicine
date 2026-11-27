import Link from "next/link";

type Guide = {
  href: string;
  title: string;
  description: string;
};

export default function GuideCallout({
  id,
  title,
  tocLabel,
  guides,
}: {
  id: string;
  title: string;
  tocLabel: string;
  guides: Guide[];
}) {
  return (
    <section
      aria-labelledby={id}
      className="my-8 rounded-xl border border-line border-s-4 border-s-brand bg-brand/5 px-4 py-4 sm:px-6"
    >
      <h2
        id={id}
        data-toc-label={tocLabel}
        className="scroll-mt-24 text-lg font-semibold tracking-tight text-ink"
      >
        {title}
      </h2>
      <ul className="mt-2 divide-y divide-line" role="list">
        {guides.map(({ href, title, description }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex items-start justify-between gap-3 rounded py-3"
            >
              <span>
                <span className="block font-semibold text-brand-strong underline decoration-brand/40 underline-offset-4 group-hover:decoration-current">
                  {title}
                </span>
                <span className="mt-1 block text-sm text-body">{description}</span>
              </span>
              <span aria-hidden="true" className="text-brand-strong">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
