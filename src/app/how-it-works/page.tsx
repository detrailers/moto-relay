import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Motorcycle Shipping Works",
  description:
    "See how Moto Relay motorcycle and powersports shipping works from a route-specific quote and carrier dispatch through door-to-door pickup and delivery.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    title: "Send the route and vehicle details",
    body:
      "Provide the pickup and delivery ZIP codes or cities, year, make and model, running and rolling condition, transport preference, preferred timing, and any dimensions or modifications that affect loading.",
  },
  {
    title: "Moto Relay reviews the actual shipment",
    body:
      "The route, vehicle, equipment needs, timing, access, and current carrier availability are considered before pricing. This produces a shipment-specific quote rather than a generic national estimate.",
  },
  {
    title: "Review the quote and estimated timing",
    body:
      "Moto Relay provides pricing and an estimated pickup and delivery window for the shipment. Open, enclosed, or both transport options can be considered when suitable equipment is available.",
  },
  {
    title: "Authorize Moto Relay to arrange transport",
    body:
      "When you are ready to proceed, confirm the shipment details so Moto Relay can begin matching the route and vehicle with a suitable DOT-authorized carrier.",
  },
  {
    title: "The shipment is dispatched",
    body:
      "Dispatch means a carrier has been assigned to the shipment and the transport is being coordinated. The deposit becomes due after dispatch—not merely for requesting or receiving a quote.",
  },
  {
    title: "Confirm door-to-door pickup",
    body:
      "Pickup is coordinated as close to the requested address as the carrier can safely and legally access. A nearby meeting point may be used when narrow streets, low branches, tight turns, or local restrictions limit access.",
  },
  {
    title: "Prepare and document the vehicle",
    body:
      "Remove personal property, secure loose accessories, provide keys, disclose operating instructions, and photograph the vehicle's condition before handoff. It must roll freely to be accepted.",
  },
  {
    title: "Complete delivery and handoff",
    body:
      "Delivery is coordinated near the requested destination, subject to safe truck access. The receiving contact should be available to inspect and accept the vehicle at handoff.",
  },
];

const FAQS = [
  {
    question: "What does dispatch mean in vehicle shipping?",
    answer:
      "Dispatch means a suitable carrier has been assigned to the shipment and pickup coordination is moving forward. Moto Relay's deposit becomes due after dispatch, not when a customer merely asks for or receives a quote.",
  },
  {
    question: "Are motorcycle pickup and delivery dates guaranteed?",
    answer:
      "Moto Relay provides estimated pickup and delivery windows based on the route, equipment, scheduling needs, and carrier availability. A general guaranteed timeframe would not accurately represent every shipment.",
  },
  {
    question: "Will the carrier reach the exact pickup and delivery addresses?",
    answer:
      "Pickup and delivery are arranged as close to the requested addresses as the carrier can safely and legally reach. Large transport vehicles may require a nearby accessible meeting point.",
  },
  {
    question: "What condition must a non-running vehicle be in?",
    answer:
      "A non-running motorcycle or powersports vehicle must still roll freely and be movable for loading. Tell Moto Relay whether it steers, brakes, and rolls and disclose any condition that could affect loading.",
  },
];

export default function Page() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Moto Relay Motorcycle and Powersports Shipping Works",
    description:
      "The Moto Relay process from requesting a route-specific quote through carrier dispatch, door-to-door pickup, and delivery.",
    url: site.url + "/how-it-works",
    step: STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
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
      eyebrow="Process"
      title="How Moto Relay Shipping Works"
      intro="A clear route from shipment-specific pricing to door-to-door pickup and delivery."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Before the process begins
        </h2>
        <p>
          Moto Relay arranges transportation for motorcycles, ATVs, UTVs and side-by-sides, and trikes across the
          lower 48 United States. Service is door-to-door rather than depot-to-depot, and vehicles are not crated for
          warehouse or forklift handling.
        </p>
        <p>
          Both open and enclosed transport may be available. Running vehicles and non-running vehicles that roll can
          be considered; vehicles that cannot roll are not currently accepted.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          From quote to delivery
        </h2>
        <ol className="space-y-5">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="font-heading text-2xl font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-base font-bold uppercase tracking-wide text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Why the quote is route-specific
        </h2>
        <p>
          Two shipments covering similar mileage may still require different equipment, timing, access, or carrier
          availability. Moto Relay therefore reviews the actual route and vehicle instead of advertising a flat price
          or a national average that may not apply.
        </p>
        <p>
          See the factors in our{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Choose the guide for your vehicle
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          <li><Link href="/motorcycle-shipping" className="font-semibold text-accent hover:underline">Motorcycle shipping →</Link></li>
          <li><Link href="/atv-shipping" className="font-semibold text-accent hover:underline">ATV shipping →</Link></li>
          <li><Link href="/utv-shipping" className="font-semibold text-accent hover:underline">UTV and side-by-side shipping →</Link></li>
          <li><Link href="/trike-shipping" className="font-semibold text-accent hover:underline">Trike shipping →</Link></li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Shipping process questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
        <p>
          Find more answers in the{" "}
          <Link href="/motorcycle-shipping-faq" className="font-semibold text-accent hover:underline">
            motorcycle and powersports shipping FAQ
          </Link>.
        </p>
      </section>

      <div className="space-y-3 pt-2">
        <p>Ready to begin? Send the actual route and vehicle details for review.</p>
        <Button href="/quote">Request My Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
