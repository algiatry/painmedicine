import { useId, type ReactNode } from "react";

type FigureProps = {
  title: string;
  description: string;
  caption: string;
};

type Stage = { name: string; lines: string[] };

export function JournalFigure({
  title,
  description,
  caption,
  height,
  children,
  stages,
}: FigureProps & { height: number; children: ReactNode; stages?: Stage[] }) {
  const id = useId();
  const transcript = stages?.map(({ name, lines }) =>
    `${name}. ${lines.map((line) => /[.!?]$/.test(line) ? line : `${line}.`).join(" ")}`,
  ).join(" ");

  return (
    <figure className="journal-figure">
      <div className="journal-plate">
        <svg role="img" aria-labelledby={id} aria-describedby={`${id}-desc`} viewBox={`0 0 320 ${height}`}>
          <title id={id}>{title}</title>
          <desc id={`${id}-desc`}>{description}{transcript ? ` ${transcript}` : ""}</desc>
          {children}
        </svg>
      </div>
      <details className="journal-transcript group">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 py-2 font-semibold text-brand-strong [&::-webkit-details-marker]:hidden">
          Read figure as text
          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        <div className="space-y-3 pb-4 text-body">
          <p>{description}</p>
          {stages && (
            <ol className="list-decimal space-y-2 ps-6">
              {stages.map(({ name, lines }) => (
                <li key={name}>
                  <strong className="block">{name}</strong>
                  {lines.map((line) => <span key={line} className="block">{line}</span>)}
                </li>
              ))}
            </ol>
          )}
        </div>
      </details>
      <figcaption className="journal-caption">{caption}</figcaption>
    </figure>
  );
}

export function JournalSequence({
  stages,
  description,
  ...figure
}: FigureProps & { stages: Stage[] }) {
  const offsets = [0];
  for (const stage of stages) {
    offsets.push(offsets[offsets.length - 1] + 40 + stage.lines.length * 18);
  }

  return (
    <JournalFigure {...figure} description={description} stages={stages} height={offsets[stages.length]}>
      {stages.map(({ name, lines }, index) => (
        <g key={name} transform={`translate(0 ${offsets[index]})`}>
          {index < stages.length - 1 && (
            <path d={`M22 33V${offsets[index + 1] - offsets[index] + 10}`} stroke="currentColor" fill="none" />
          )}
          <circle cx="22" cy="22" r="11" stroke="currentColor" fill="var(--surface)" />
          <text x="22" y="26" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="650">{index + 1}</text>
          <text x="44" y="25" className="diagram-label" fontSize="18" fontWeight="650">{name}</text>
          {lines.map((line, lineIndex) => (
            <text key={line} x="44" y={46 + lineIndex * 18} className="diagram-detail" fontSize="15">{line}</text>
          ))}
        </g>
      ))}
    </JournalFigure>
  );
}
