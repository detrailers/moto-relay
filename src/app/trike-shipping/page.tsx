import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trike Shipping: Door-to-Door Transport",
  description:
    "Door-to-door shipping for factory trikes and motorcycle trike conversions across the lower 48. Open or enclosed transport for trikes that roll.",
  alternates: { canonical: "/trike-shipping" },
};

const DETAILS = [
  "Pickup and delivery ZIP codes or cities",
  "Year, make, model, and whether it is a factory trike or conversion",
  "Overall length, width, and height as it will be shipped",
  "Approximate weight and ground clearance",
  "Whether it runs, steers, brakes, rolls freely, and has working reverse",
  "Windshield, trunk, tour pack, running boards, exhaust, or other modifications",
  "Open, enclosed, or both transport preferences",
];

const FAQS = [
  {
    question: "Can Moto Relay ship both factory trikes and trike conversions?",
    answer:
      "Yes. Moto Relay can arrange transport for factory-built three-wheel motorcycles and motorcycle trike conversions. Provide the exact finished dimensions, weight, ground clearance, condition, and modification details.",
  },
  {
    question: "Why do trike dimensions matter for shipping?",
    answer:
      "A trike's rear width, overall length, height, and ground clearance affect trailer fit and loading approach. Conversion kits and accessories can make published base-model specifications inaccurate.",
  },
  {
    question: "Can Moto Relay ship a non-running trike?",
    answer:
      "Yes, when the trike still rolls freely. Tell us whether it steers, brakes, rolls, and has working reverse so the correct loading needs can be considered. Trikes that cannot roll are not currently accepted.",
  },
  {
    question: "Can a trike be shipped in an enclosed trailer?",
    answer:
      "Enclosed transport may be available when the trike's exact width, height, length, weight, and ground clearance fit suitable equipment. Those measurements must be confirmed before enclosed service can be matched.",
  },
  {
    question: "Does Moto Relay use depots or crates for trike shipping?",
    answer:
      "No. Moto Relay arranges door-to-door trike transport and does not offer depot-to-depot or crated freight shipping.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": site.url + "/trike-shipping#service",
    name: "Trike Shipping",
    description:
      "Door-to-door open and enclosed shipping for factory trikes and motorcycle trike conversions across the lower 48 United States.",
    url: site.url + "/trike-shipping",
    areaServed: "Lower 48 United States",
    provider: { "@id": site.url + "/#organization" },
    serviceType: "Trike shipping",
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
      title="Factory Trike and Trike Conversion Shipping"
      intro="Door-to-door three-wheel motorcycle transport across the lower 48 United States, quoted for the actual route and trike."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Trikes need a different loading plan than two-wheel motorcycles
        </h2>
        <p>
          Moto Relay arranges shipping for factory-built trikes and motorcycle trike conversions across the lower 48
          states. A trike is wider, occupies a different trailer footprint, and does not load or position exactly like
          a two-wheel motorcycle. The carrier needs accurate information before accepting the shipment.
        </p>
        <p>
          Rear width, ground clearance, overall length, weight, and installed accessories all matter. Conversion kits
          can also make base motorcycle specifications unreliable, so measure the finished trike exactly as it will be
          handed to the carrier.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Factory trikes and motorcycle conversions
        </h2>
        <p>
          Tell Moto Relay whether the machine was built as a trike or converted from a two-wheel motorcycle. Include
          the manufacturer or conversion-kit information when known. Trunks, tour packs, running boards, wide rear
          bodywork, custom exhaust, windshields, and other additions can affect clearance and trailer space.
        </p>
        <p>
          Shipping a two-wheel bike instead? See our{" "}
          <Link href="/motorcycle-shipping" className="font-semibold text-accent hover:underline">
            door-to-door motorcycle shipping service
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Loading clearance and securement
        </h2>
        <p>
          A long wheelbase or low frame, exhaust, bodywork, and running boards can affect the loading angle. Exact
          ground-clearance details help the carrier determine whether the available ramp and trailer configuration are
          appropriate. The three-wheel footprint also requires securement suited to the actual trike rather than an
          assumption based on a standard motorcycle.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open and enclosed trike transport
        </h2>
        <p>
          Open transport is practical for many trikes. Enclosed transport shields the vehicle from weather and road
          debris, but a wide or tall trike may not fit every enclosed trailer. Exact dimensions, weight, and ground
          clearance must be provided before enclosed equipment can be confirmed.
        </p>
        <p>
          If either option could work, ask Moto Relay to quote open transport, enclosed transport, or both. Our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed transport guide
          </Link>{" "}
          explains the basic tradeoffs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What we need for an accurate trike shipping quote
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          {DETAILS.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <p>
          Moto Relay prices the actual route, machine, equipment, timing, and carrier availability. A generic national
          average cannot reliably describe what a specific trike shipment will cost.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Running and non-running trikes
        </h2>
        <p>
          Running trikes should start reliably and be ready to load. Non-running trikes are accepted when they roll
          freely. Tell us whether the steering, brakes, and reverse function and whether anything prevents the wheels
          from turning. Trikes that cannot roll are not currently accepted.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Door-to-door service without depots or crates
        </h2>
        <p>
          Moto Relay arranges door-to-door trike shipping rather than depot-to-depot service. We do not crate trikes
          or treat them as warehouse freight for forklift handling. Pickup and delivery are coordinated as close to
          the requested addresses as the carrier can safely and legally access.
        </p>
        <p>
          Read our{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door transport guide
          </Link>{" "}
          for information about direct handoff and accessible meeting points.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Prepare your trike for pickup
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Remove personal property and secure loose accessories.</li>
          <li>Disclose low bodywork, exhaust, running boards, and other clearance concerns.</li>
          <li>Check that the trike rolls, steers, and brakes as described.</li>
          <li>Photograph the trike and its installed accessories before pickup.</li>
          <li>Have keys available and explain starting, parking-brake, and reverse procedures.</li>
          <li>Confirm safe access at the pickup and delivery meeting points.</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Trike shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Send the route, finished dimensions, condition, and transport preference for a shipment-specific quote.</p>
        <Button href="/quote">Request My Trike Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
