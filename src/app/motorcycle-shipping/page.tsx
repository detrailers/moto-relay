import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Motorcycle Shipping: Door-to-Door Transport",
  description:
    "Door-to-door motorcycle shipping across the lower 48 states. Open or enclosed transport for running and non-running motorcycles that roll.",
  alternates: { canonical: "/motorcycle-shipping" },
};

const FAQS = [
  {
    question: "Does Moto Relay provide door-to-door motorcycle shipping?",
    answer:
      "Yes. Pickup and delivery are arranged as close to the requested addresses as the carrier can safely and legally access. When a large transport vehicle cannot reach an address, the customer and carrier may use a nearby accessible meeting point.",
  },
  {
    question: "Can Moto Relay ship a motorcycle that does not run?",
    answer:
      "Yes, when the motorcycle still rolls freely and can be moved for loading. Moto Relay does not currently accept motorcycles that cannot roll.",
  },
  {
    question: "Should I choose open or enclosed motorcycle transport?",
    answer:
      "Open transport is practical for many motorcycles. Enclosed transport shields the motorcycle from weather and road debris during transit. Moto Relay can quote open, enclosed, or both for your route.",
  },
  {
    question: "How much does it cost to ship a motorcycle?",
    answer:
      "There is no dependable one-price-fits-all answer. Moto Relay quotes the actual route, motorcycle, transport type, timing, access, and current carrier availability instead of relying on a generic national average.",
  },
  {
    question: "Does Moto Relay use depot-to-depot or crated motorcycle shipping?",
    answer:
      "No. Moto Relay provides door-to-door motorcycle transport and does not offer depot-to-depot or crated shipping.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/motorcycle-shipping#service`,
    name: "Door-to-Door Motorcycle Shipping",
    description:
      "Open and enclosed door-to-door motorcycle shipping across the lower 48 United States for running and non-running motorcycles that roll.",
    url: `${site.url}/motorcycle-shipping`,
    areaServed: "Lower 48 United States",
    provider: { "@id": `${site.url}/#organization` },
    serviceType: "Motorcycle shipping",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="Door-to-Door Motorcycle Shipping"
      intro="Open and enclosed motorcycle transport across the lower 48 United States, quoted for your actual route and motorcycle."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Motorcycle transport built around the actual shipment
        </h2>
        <p>
          Moto Relay arranges specialized motorcycle shipping from pickup to delivery across the lower 48 states.
          Each quote is based on the actual route, motorcycle, timing, and transport equipment needed. We do not
          advertise a generic national average that may have little to do with your shipment.
        </p>
        <p>
          Service is available for standard motorcycles, cruisers, touring bikes, sport bikes, and custom motorcycles.
          We also have dedicated pages for{" "}
          <Link href="/trike-shipping" className="font-semibold text-accent hover:underline">trike shipping</Link>,{" "}
          <Link href="/atv-shipping" className="font-semibold text-accent hover:underline">ATV shipping</Link>, and{" "}
          <Link href="/utv-shipping" className="font-semibold text-accent hover:underline">UTV shipping</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Door-to-door—not depot-to-depot
        </h2>
        <p>
          Moto Relay does not offer depot-to-depot motorcycle shipping. Door-to-door service avoids making you take
          the motorcycle to a storage terminal and return to another terminal for delivery. Pickup and delivery are
          arranged as close to the requested addresses as a large transport vehicle can safely and legally reach.
        </p>
        <p>
          Narrow roads, low branches, tight turns, or local restrictions may require a nearby meeting point. Our{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door versus depot transport guide
          </Link>{" "}
          explains why Moto Relay favors direct service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open and enclosed motorcycle transport
        </h2>
        <p>
          Open transport carries the motorcycle on an open trailer and is practical for many shipments. Enclosed
          transport places it inside a covered trailer, shielding it from weather and road debris. It may be especially
          appealing for custom, collectible, restored, or high-value motorcycles, but the right choice depends on your
          priorities and route.
        </p>
        <p>
          Ask Moto Relay to price open transport, enclosed transport, or both. Compare the options in our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Running and non-running motorcycles
        </h2>
        <p>
          Moto Relay accepts running motorcycles and non-running motorcycles that still roll freely. Disclose a
          non-running motorcycle when requesting the quote so the correct loading needs can be considered. A motorcycle
          that cannot roll is not currently eligible for transport through Moto Relay. See the condition and loading
          details in our{" "}
          <Link href="/non-running-motorcycle-shipping" className="font-semibold text-accent hover:underline">
            non-running motorcycle shipping guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          No crating or forklift handling
        </h2>
        <p>
          Moto Relay does not crate motorcycles. Some freight models crate motorcycles so they can be stacked or moved
          with forklifts. That adds handling steps and creates more opportunities for contact during crating, lifting,
          and unloading. Moto Relay instead arranges transport without a depot-and-crate process.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What we need for an accurate quote
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Pickup and delivery ZIP codes or cities</li>
          <li>Motorcycle year, make, and model</li>
          <li>Whether the motorcycle runs and rolls</li>
          <li>Your preference for open, enclosed, or both</li>
          <li>Your preferred pickup timing and any access limitations</li>
        </ul>
        <p>
          Route, equipment, timing, motorcycle size, condition, and carrier availability can affect the quote. Our{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost guide
          </Link>{" "}
          explains why accurate pricing must be shipment-specific.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Prepare your motorcycle for pickup
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Make the motorcycle accessible to the carrier.</li>
          <li>Provide the keys when the motorcycle runs.</li>
          <li>Remove or secure loose personal items and accessories.</li>
          <li>Note and photograph its condition before pickup.</li>
          <li>Confirm the delivery contact and phone number.</li>
        </ul>
        <p>
          Follow the complete{" "}
          <Link href="/prepare-motorcycle-for-shipping" className="font-semibold text-accent hover:underline">
            motorcycle preparation checklist
          </Link>{" "}
          before pickup, then review our{" "}
          <Link href="/motorcycle-shipping-buyers-guide" className="font-semibold text-accent hover:underline">
            motorcycle shipping buyer&apos;s guide
          </Link>{" "}
          for carrier questions.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Motorcycle shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Send your actual route and motorcycle details for a shipment-specific quote.</p>
        <Button href="/quote">Request My Motorcycle Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
