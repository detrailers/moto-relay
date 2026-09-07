import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Button } from "@/components/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "UTV Shipping: Door-to-Door Side-by-Side Transport",
  description:
    "Door-to-door UTV and side-by-side shipping across the lower 48. Open and enclosed transport for standard, enclosed-cab, running, and non-running UTVs that roll.",
  alternates: { canonical: "/utv-shipping" },
};

const DETAILS = [
  "Pickup and delivery ZIP codes or cities",
  "Year, make, model, and trim",
  "Overall length, width, and height as the UTV will be shipped",
  "Approximate weight",
  "Whether it runs, steers, brakes, and rolls freely",
  "Cab, roof, windshield, doors, racks, light bars, spare tires, or other accessories",
  "Open, enclosed, or both transport preferences",
];

const FAQS = [
  {
    question: "Can Moto Relay ship an enclosed-cab UTV?",
    answer:
      "Yes, enclosed-cab UTVs can be considered. Provide the exact overall height, width, length, weight, and details about the cab and accessories so suitable equipment can be confirmed.",
  },
  {
    question: "Can a UTV with a roof and windshield be shipped?",
    answer:
      "Yes, but the roof, windshield, doors, mirrors, racks, and other accessories must be included in the measurements and disclosed before dispatch.",
  },
  {
    question: "Can Moto Relay ship a non-running UTV?",
    answer:
      "Moto Relay accepts non-running UTVs when they still roll freely. Be clear about whether the UTV steers, brakes, and rolls so the correct loading plan can be arranged.",
  },
  {
    question: "Does Moto Relay crate UTVs or send them through depots?",
    answer:
      "No. Moto Relay arranges door-to-door transport and does not crate vehicles or offer depot-to-depot shipping.",
  },
  {
    question: "Is open or enclosed transport better for a UTV?",
    answer:
      "Open transport is practical for many UTVs. Enclosed transport adds protection from weather and road debris, but the UTV's dimensions and available equipment determine whether it is a fit.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": site.url + "/utv-shipping#service",
    name: "UTV and Side-by-Side Shipping",
    description:
      "Door-to-door open and enclosed UTV shipping across the lower 48 United States, including enclosed-cab, running, and non-running UTVs that roll.",
    url: site.url + "/utv-shipping",
    areaServed: "Lower 48 United States",
    provider: { "@id": site.url + "/#organization" },
    serviceType: "UTV and side-by-side shipping",
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
      title="UTV and Side-by-Side Shipping"
      intro="Door-to-door transport for standard and enclosed-cab UTVs across the lower 48 United States."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          UTVs need knowledgeable loading and securement
        </h2>
        <p>
          Have a UTV or side-by-side to ship? These vehicles can present loading and securement challenges that
          are very different from a standard motorcycle. They should be transported by a carrier who understands
          how to load and restrain the specific vehicle safely—not treated as ordinary freight.
        </p>
        <p>
          Side-by-sides vary widely in size, weight, and configuration. A compact two-seat UTV, a four-seat crew
          model, and a fully enclosed-cab machine do not occupy the same trailer space or require the same loading
          plan. Accurate dimensions and accessory details help Moto Relay match the vehicle with suitable
          equipment and a transporter prepared for that configuration.
        </p>
        <p>
          Moto Relay arranges door-to-door UTV transport. We do not send vehicles through depots and do not crate
          them for forklift handling.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Shipping an enclosed-cab UTV
        </h2>
        <p>
          Factory and aftermarket cabs can change a UTV&apos;s height, width, weight, and loading clearance.
          Windshields, hard doors, heaters, roofs, mirrors, and rear panels should all be disclosed when you request
          a quote.
        </p>
        <p>
          Measure the UTV exactly as it will be handed to the carrier—from the widest installed point and from the
          ground to the highest fixed point. Do not rely only on a base-model specification if tires, suspension,
          roof equipment, or accessories have changed the finished dimensions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open versus enclosed UTV transport
        </h2>
        <p>
          Open transport carries the UTV on an open trailer and is a practical option for many shipments. Enclosed
          transport shields it from weather and road debris, but tall or wide UTVs may not fit every enclosed
          trailer. Exact dimensions are essential before enclosed service can be confirmed.
        </p>
        <p>
          If either option could work, request pricing for both. Our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed transport guide
          </Link>{" "}
          explains the basic tradeoffs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What we need for an accurate UTV shipping quote
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          {DETAILS.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Running and non-running UTVs
        </h2>
        <p>
          Running UTVs should start reliably and be ready to load. Moto Relay also accepts non-running UTVs when
          they roll freely. Tell us whether the steering and brakes function and whether anything prevents the
          wheels from turning.
        </p>
        <p>
          A vehicle that does not roll requires a different type of handling and currently cannot be accepted.
          Accurate condition details prevent loading problems and last-minute changes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Preparing your side-by-side for pickup
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Remove personal property and anything not secured to the vehicle.</li>
          <li>Secure or remove loose doors, soft panels, covers, flags, and detachable accessories.</li>
          <li>Check tires and make sure the UTV rolls, steers, and brakes as disclosed.</li>
          <li>Photograph the UTV and its installed accessories before pickup.</li>
          <li>Have keys available and explain any starting or operating procedure.</li>
          <li>Confirm that the carrier can safely reach the pickup and delivery meeting points.</li>
        </ul>
        <p>
          Review our{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door transport guide
          </Link>{" "}
          for more information about truck access and direct carrier handoff.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          UTV shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Send the route, exact dimensions, condition, and transport preference for a shipment-specific quote.</p>
        <Button href="/quote">Request My UTV Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
