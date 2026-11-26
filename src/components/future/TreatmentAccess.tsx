import Link from "next/link";
import ArticleEmblem from "@/components/ArticleEmblem";

const questions = [
  {
    question: "Who was studied?",
    detail: "Look for people with your condition, age, or health history.",
    emblem: "precision-pain-medicine",
  },
  {
    question: "Is it available?",
    detail: "Check whether the treatment is approved for your condition or is still being studied.",
    emblem: "pipeline",
  },
  {
    question: "What will it take to get care?",
    detail: "Ask about insurance, out-of-pocket costs, referrals, travel, and follow-up. You can also ask about interpreters, disability accommodations, or visits by phone or video.",
    emblem: "your-first-visit",
  },
];

export default function TreatmentAccess() {
  return (
    <section aria-labelledby="treatment-access" className="mt-12">
      <h2 id="treatment-access" className="text-2xl font-bold tracking-tight text-ink">
        Who can access new pain treatments?
      </h2>
      <ul className="mt-5 divide-y divide-line rounded-xl border border-line bg-surface px-4 shadow-card sm:px-6">
        {questions.map(({ question, detail, emblem }) => (
          <li key={question} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 py-4">
            <span className="flex size-11 items-center justify-center rounded-lg border border-edge bg-plate">
              <ArticleEmblem slug={emblem} className="size-8" />
            </span>
            <div>
              <h3 className="font-semibold text-ink">{question}</h3>
              <p className="mt-1 text-base text-body">{detail}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-body">
        See study populations and access details for selected entries in the{" "}
        <Link href="/future-of-pain-medicine/pipeline" className="text-brand underline underline-offset-2">
          pain treatment pipeline tracker
        </Link>.
      </p>
    </section>
  );
}
