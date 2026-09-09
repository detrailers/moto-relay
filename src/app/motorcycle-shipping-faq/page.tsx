import type { Metadata } from "next";
import Link from "next/link";
import { FAQS } from "@/lib/faq";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Motorcycle & Powersports Shipping FAQ",
  description:
    "Answers about motorcycle, ATV, UTV and trike shipping costs, timing, door-to-door service, transport options, vehicle condition, preparation and insurance.",
  alternates: { canonical: "/motorcycle-shipping-faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <p className="text-xs font-bold uppercase tracking-widest text-accent">Support</p>
      <h1 className="mt-2 font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
        Motorcycle &amp; Powersports Shipping FAQ
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Clear answers about pricing, timing, pickup, transport equipment, vehicle condition, preparation, and coverage.
      </p>
      <div className="mt-8">
        <FaqAccordion items={FAQS} />
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
          Detailed shipping guides
        </h2>
        <p className="text-muted-foreground">
          Use the guide that matches your vehicle for measurements, condition details, and preparation requirements.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            ["Motorcycle shipping", "/motorcycle-shipping"],
            ["ATV shipping", "/atv-shipping"],
            ["UTV and side-by-side shipping", "/utv-shipping"],
            ["Trike shipping", "/trike-shipping"],
            ["Motorcycle shipping costs", "/motorcycle-shipping-cost"],
            ["Prepare a motorcycle for shipping", "/prepare-motorcycle-for-shipping"],
            ["Door-to-door transport", "/door-to-door-vs-depot-motorcycle-transport"],
            ["Open versus enclosed", "/open-vs-enclosed-motorcycle-transport"],
            ["How Moto Relay shipping works", "/how-it-works"],
            ["Motorcycle shipping buyer's guide", "/motorcycle-shipping-buyers-guide"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="font-semibold text-accent hover:underline">
                {label} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
