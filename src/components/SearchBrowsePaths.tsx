import Link from "next/link";

const paths = [
  { href: "/conditions#conditions-coverage", label: "Conditions A–Z" },
  { href: "/treatments", label: "Treatment options" },
  { href: "/glossary", label: "Glossary" },
];

export default function SearchBrowsePaths({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Browse guides" className="flex flex-wrap gap-x-4">
      {paths.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          prefetch={false}
          onNavigate={onNavigate}
          className="inline-flex min-h-11 items-center font-semibold text-brand-strong underline underline-offset-4"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
