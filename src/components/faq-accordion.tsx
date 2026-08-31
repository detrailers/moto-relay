export type FaqItem = {
  question: string;
  answer: string;
};

// Built on native <details>/<summary> — keyboard accessible, no JS bundle
// cost, and each item works independently without shared open/close state.
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold uppercase tracking-wide text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="size-5 shrink-0 text-accent transition-transform group-open:rotate-180"
            >
              <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
