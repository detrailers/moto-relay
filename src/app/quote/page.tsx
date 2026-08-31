import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { TextQuoteCta } from "@/components/text-quote-cta";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a free motorcycle, ATV, UTV or trike shipping quote.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
        Get Your Free Shipping Quote
      </h1>
      <p className="mt-4 text-center text-muted-foreground">
        Tell us about your vehicle and route, and we&apos;ll get your quote started.
      </p>
      <div className="mt-8">
        <QuoteForm />
      </div>
      <div className="mt-10">
        <TextQuoteCta />
      </div>
    </article>
  );
}
