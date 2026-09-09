import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "How to Choose a Motorcycle Shipping Company",
  description:
    "A motorcycle shipping buyer's guide covering brokers and carriers, FMCSA records, insurance, quotes, deposits, door-to-door service, crating, and warning signs.",
  alternates: { canonical: "/motorcycle-shipping-buyers-guide" },
};

const FAQS = [
  {
    question: "What is the difference between a motorcycle shipping broker and a carrier?",
    answer:
      "A broker arranges transportation using an authorized motor carrier. The carrier operates the transport equipment and physically moves the vehicle. Ask which company is arranging the shipment and which carrier will perform it.",
  },
  {
    question: "How can I verify a motorcycle transporter?",
    answer:
      "Ask for the company's legal name and USDOT or MC number, then review its free FMCSA SAFER Company Snapshot. Check the entity type, USDOT status, operating authority status, identifying information, and available safety data.",
  },
  {
    question: "Should I choose the lowest motorcycle shipping quote?",
    answer:
      "Not automatically. Compare whether each quote reflects the actual route, vehicle, condition, timing, equipment, and access. An unusually low teaser price may not represent what is required to dispatch the shipment.",
  },
  {
    question: "What insurance questions should I ask before motorcycle pickup?",
    answer:
      "Ask what carrier coverage applies, request the specific coverage information in writing, review exclusions or limitations, and understand the condition-documentation and claim procedures before pickup.",
  },
  {
    question: "When should a motorcycle shipping deposit be due?",
    answer:
      "Payment practices vary, so ask exactly when a deposit becomes due and what event triggers it. Moto Relay's deposit becomes due after the shipment has been dispatched, not merely to request or receive a quote.",
  },
];

const CHECKLIST = [
  "Legal company name and role are clear",
  "USDOT or MC information can be reviewed through FMCSA",
  "The quote uses the actual route and vehicle details",
  "Open or enclosed equipment is specified",
  "Running, rolling, dimensions, and modifications are disclosed",
  "Pickup and delivery access expectations are understood",
  "Insurance information is available for review",
  "Deposit timing and dispatch are explained",
  "Pickup condition documentation is planned",
  "Communication and contact details are in writing",
];

export default function Page() {
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
      eyebrow="Buyer’s Guide"
      title="How to Choose a Motorcycle Shipping Company"
      intro="Verify who is arranging and transporting your motorcycle, understand the quote, and get the important details in writing before pickup."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Start with the company’s role
        </h2>
        <p>
          A transportation broker arranges the shipment with an authorized motor carrier. A carrier operates the
          truck or trailer and physically transports the vehicle. Those are different responsibilities, and a
          legitimate shipping process should make the roles clear.
        </p>
        <p>
          Ask for the legal name of the company arranging the shipment, its USDOT or MC information when applicable,
          and the identity of the assigned carrier once the shipment is dispatched. Do not assume the website taking
          the quote owns the equipment that will arrive for pickup.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Verify federal registration and authority
        </h2>
        <p>
          The Federal Motor Carrier Safety Administration provides a free{" "}
          <a
            href="https://safer.fmcsa.dot.gov/CompanySnapshot.aspx"
            className="font-semibold text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            SAFER Company Snapshot
          </a>{" "}
          search. It can show a company&apos;s entity type, USDOT status, operating authority status, identifying
          information, and available safety data.
        </p>
        <p>
          Confirm that the record matches the business you are dealing with. “Active” USDOT status and operating
          authority are separate fields, so read the complete snapshot rather than relying only on a number displayed
          on a website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Compare real quotes—not teaser prices
        </h2>
        <p>
          A meaningful motorcycle shipping quote should reflect the pickup and delivery locations, vehicle, running
          and rolling condition, open or enclosed preference, timing, access, and current carrier availability.
          Dimensions and modifications also matter for ATVs, UTVs, trikes, and custom motorcycles.
        </p>
        <p>
          Be cautious when a price is presented before the company knows the route or vehicle, or when an unusually low
          figure is promoted without explaining what it includes. Ask whether the price is an estimate, whether it
          reflects current carrier availability, and what circumstances could change it.
        </p>
        <p>
          Moto Relay quotes the actual shipment instead of publishing a generic national average. See our{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Review insurance information before pickup
        </h2>
        <p>
          Ask what carrier insurance applies to the shipment and request the specific information in writing. Review
          any exclusions, limitations, deductibles, valuation terms, and claim procedures that apply to your vehicle.
          Do not rely only on a broad statement that a shipment is “fully insured.”
        </p>
        <p>
          Photograph the vehicle from multiple angles before handoff and document existing damage. Keep the shipping
          documents and inspect the vehicle again at delivery.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Understand dispatch, deposits, and timing
        </h2>
        <p>
          Ask when payment becomes due and what event triggers it. “Dispatch” generally means a carrier has been
          assigned and pickup coordination is moving forward. Moto Relay does not require payment merely to request or
          receive a quote; its deposit becomes due after dispatch.
        </p>
        <p>
          Pickup and delivery windows should also be explained honestly. Routes, equipment, scheduling needs, traffic,
          weather, and carrier availability can affect timing, so be skeptical of an unsupported guarantee that does
          not account for the actual shipment.
        </p>
        <p>
          Review Moto Relay&apos;s complete{" "}
          <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
            quote-to-delivery process
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Choose open or enclosed equipment deliberately
        </h2>
        <p>
          Open transport is practical for many motorcycles but leaves the vehicle exposed to weather and road debris.
          Enclosed transport shields it during the trip, but the vehicle must fit the trailer opening, ramp, interior
          dimensions, and available equipment.
        </p>
        <p>
          Neither choice is automatically best for every shipment. Ask for both quotes when either could work, then
          compare the actual route-specific price and availability. Use our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed transport guide
          </Link>{" "}
          to evaluate the tradeoffs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Ask how pickup and delivery are handled
        </h2>
        <p>
          Door-to-door transport coordinates pickup and delivery as close to the requested addresses as a large
          transport vehicle can safely and legally reach. Narrow streets, low branches, tight turns, or local
          restrictions may require an accessible meeting point.
        </p>
        <p>
          Depot-to-depot shipping requires the customer to take the vehicle to a terminal and retrieve it from another.
          It may also add storage and handling by terminal staff. Moto Relay provides door-to-door service and does not
          use depot-to-depot shipping.
        </p>
        <p>
          Read the full{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door versus depot guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Avoid unnecessary crating and forklift handling
        </h2>
        <p>
          Some freight-style services crate vehicles so they can be stacked or moved through warehouses with
          forklifts. That adds handling steps during crating, lifting, storage, and unloading. Ask whether the company
          uses a crate or freight terminal and how the vehicle will be handled.
        </p>
        <p>
          Moto Relay does not crate motorcycles or powersports vehicles and does not use a depot-and-crate process.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Disclose condition, dimensions, and modifications
        </h2>
        <p>
          State whether the vehicle runs, rolls, steers, and brakes. Moto Relay can accept non-running vehicles when
          they still roll freely; vehicles that cannot roll are not currently accepted.
        </p>
        <p>
          Provide finished dimensions and relevant accessories for wide, tall, low, converted, or modified vehicles.
          Roofs, cabs, racks, winches, oversized tires, trike conversions, running boards, and other additions can
          change loading clearance and trailer fit.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Motorcycle shipping warning signs
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>The company will not clearly identify whether it is arranging or performing the transport.</li>
          <li>Legal name, registration information, or contact details cannot be verified.</li>
          <li>A price is promised before the actual route and vehicle details are known.</li>
          <li>Insurance claims are made without specific documentation being available.</li>
          <li>Deposit timing, cancellation terms, or the meaning of dispatch are unclear.</li>
          <li>Pickup access, vehicle condition, dimensions, or equipment fit are ignored.</li>
          <li>The company pressures you to proceed before important terms are provided in writing.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Before-you-book checklist
        </h2>
        <ul className="space-y-2">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="font-bold text-accent">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Motorcycle shipping company questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
        <p>
          Find more service answers in the{" "}
          <Link href="/motorcycle-shipping-faq" className="font-semibold text-accent hover:underline">
            motorcycle and powersports shipping FAQ
          </Link>.
        </p>
      </section>

      <div className="space-y-3 pt-2">
        <p>Ready for a shipment-specific review? Send Moto Relay the actual route and vehicle details.</p>
        <Button href="/quote">Request My Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
