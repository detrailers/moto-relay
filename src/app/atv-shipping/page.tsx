import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ATV Shipping: Door-to-Door Transport",
  description:
    "Door-to-door shipping for three-wheel and four-wheel ATVs across the lower 48. Open or enclosed transport for running and non-running ATVs that roll.",
  alternates: { canonical: "/atv-shipping" },
};

const DETAILS = [
  "Pickup and delivery ZIP codes or cities",
  "Year, make, model, and whether it has three or four wheels",
  "Overall length, width, and height as the ATV will be shipped",
  "Approximate weight",
  "Whether it runs, steers, brakes, and rolls freely",
  "Racks, winches, plows, oversized tires, lifts, cargo boxes, or other modifications",
  "Open, enclosed, or both transport preferences",
];

const FAQS = [
  {
    question: "Can Moto Relay ship both three-wheel and four-wheel ATVs?",
    answer:
      "Yes. Moto Relay can arrange transport for three-wheel and four-wheel ATVs. Tell us the exact model, wheel configuration, dimensions, condition, and modifications so suitable equipment can be confirmed.",
  },
  {
    question: "Can Moto Relay ship a non-running ATV?",
    answer:
      "Yes, when the ATV still rolls freely. Disclose whether it steers, brakes, and rolls and describe any problem that could affect loading. ATVs that cannot roll are not currently accepted.",
  },
  {
    question: "Do ATV accessories affect shipping?",
    answer:
      "They can. Racks, winches, plows, cargo boxes, oversized tires, suspension lifts, and other additions can change the ATV's dimensions, weight, clearance, and securement plan.",
  },
  {
    question: "Does Moto Relay crate ATVs or use shipping depots?",
    answer:
      "No. Moto Relay arranges door-to-door ATV transport and does not offer depot-to-depot or crated freight shipping.",
  },
  {
    question: "What is the difference between ATV and UTV shipping?",
    answer:
      "ATVs may have three or four wheels and commonly use a straddle seat and handlebars. UTVs are generally larger side-by-sides with side-by-side seating and may have roofs, windshields, doors, or enclosed cabs. Those differences affect dimensions and trailer fit.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": site.url + "/atv-shipping#service",
    name: "ATV Shipping",
    description:
      "Door-to-door open and enclosed shipping for three-wheel and four-wheel ATVs across the lower 48 United States.",
    url: site.url + "/atv-shipping",
    areaServed: "Lower 48 United States",
    provider: { "@id": site.url + "/#organization" },
    serviceType: "ATV shipping",
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
      title="Three-Wheel and Four-Wheel ATV Shipping"
      intro="Door-to-door ATV transport across the lower 48 United States, quoted for the actual route and machine."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Shipping an ATV requires the right vehicle details
        </h2>
        <p>
          Moto Relay arranges transport for three-wheel and four-wheel ATVs across the lower 48 states. ATVs are
          often more compact than side-by-sides, but wheel configuration, tire size, racks, winches, plows, and other
          modifications can change how a machine fits, loads, and must be secured.
        </p>
        <p>
          Give us the ATV&apos;s exact model and finished dimensions instead of relying only on a base-model
          specification. Accurate information helps match the machine with suitable transport equipment before
          dispatch.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          ATV or UTV: which page fits your vehicle?
        </h2>
        <p>
          An ATV may have three or four wheels and commonly has a straddle seat with handlebars. A UTV—also called a
          side-by-side—is generally larger, uses side-by-side seating, and may have a roof, windshield, doors, or a
          fully enclosed cab. The dimensions and trailer-clearance questions are different even though both are
          powersports vehicles.
        </p>
        <p>
          If your machine has side-by-side seating, use our{" "}
          <Link href="/utv-shipping" className="font-semibold text-accent hover:underline">
            UTV and side-by-side shipping guide
          </Link>{" "}
          when preparing the details for your quote.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Three-wheel and four-wheel ATV transport
        </h2>
        <p>
          Tell Moto Relay whether the ATV has three or four wheels. A three-wheel machine has a different footprint
          and balance than a four-wheel ATV, so the carrier needs the correct information for positioning and
          securement. Any unusual steering, braking, tire, or suspension condition should also be disclosed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open and enclosed ATV shipping
        </h2>
        <p>
          Open transport is practical for many ATVs. Enclosed transport shields the machine from weather and road
          debris, but overall width and height still determine equipment fit. Ask for open, enclosed, or both options
          when either could work for your ATV and route.
        </p>
        <p>
          Review the differences in our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What we need for an accurate ATV shipping quote
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          {DETAILS.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <p>
          Moto Relay quotes the actual route and machine. We do not rely on a generic national price that ignores
          equipment, timing, dimensions, and current carrier availability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Running and non-running ATVs
        </h2>
        <p>
          Running ATVs should start reliably and be ready to load. Non-running ATVs are accepted when they roll
          freely. Tell us whether the ATV steers and brakes and whether anything prevents the wheels from turning.
          ATVs that cannot roll are not currently accepted.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Door-to-door service without depots or crates
        </h2>
        <p>
          Moto Relay arranges door-to-door ATV shipping rather than depot-to-depot service. We do not crate ATVs or
          treat them as warehouse freight for forklift handling. Pickup and delivery are coordinated as close to the
          requested addresses as the carrier can safely and legally access.
        </p>
        <p>
          Learn about direct pickup, accessible meeting points, and fewer terminal handoffs in our{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Prepare your ATV for pickup
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Remove personal property and secure loose accessories.</li>
          <li>Disclose racks, winches, plows, cargo boxes, lifts, and oversized tires.</li>
          <li>Check that the ATV rolls, steers, and brakes as described.</li>
          <li>Photograph the ATV and installed accessories before pickup.</li>
          <li>Have keys available and explain any special starting procedure.</li>
          <li>Confirm safe access at the pickup and delivery meeting points.</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          ATV shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Send the route, wheel configuration, exact dimensions, condition, and transport preference.</p>
        <Button href="/quote">Request My ATV Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
