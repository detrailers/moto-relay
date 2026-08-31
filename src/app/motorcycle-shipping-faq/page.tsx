import type { Metadata } from "next";
import { FAQS } from "@/lib/faq";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Motorcycle Shipping FAQ",
  description: "Answers to common motorcycle, ATV, UTV and trike shipping questions.",
  alternates: { canonical: "/motorcycle-shipping-faq" },
};

export default function FaqPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">Support</p>
      <h1 className="mt-2 font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
        Motorcycle Shipping FAQ
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Answers to common motorcycle, ATV, UTV and trike shipping questions.
      </p>
      <div className="mt-8">
        <FaqAccordion items={FAQS} />
      </div>
    </article>
  );
}
