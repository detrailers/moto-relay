import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Non-Running Motorcycle Shipping That Rolls",
  description:
    "Need to ship a motorcycle that does not run? Moto Relay arranges door-to-door transport for non-running motorcycles that roll freely across the lower 48.",
  alternates: { canonical: "/non-running-motorcycle-shipping" },
};

const FAQS = [
  {
    question: "Can you ship a motorcycle that does not run?",
    answer:
      "Yes. Moto Relay can arrange transport for a non-running motorcycle when it rolls freely and can be moved for loading and unloading. Tell us about its condition before the quote is finalized.",
  },
  {
    question: "What does rolls freely mean?",
    answer:
      "The wheels must turn and the motorcycle must be movable without dragging or locked components. It should also be possible to steer and position it for loading. Disclose any brake, steering, tire, or wheel problem in advance.",
  },
  {
    question: "Can Moto Relay ship a motorcycle with locked wheels?",
    answer:
      "Not currently. A motorcycle with locked wheels or one that cannot roll requires a different handling plan and is not eligible for transport through Moto Relay at this time.",
  },
  {
    question: "Does a non-running motorcycle cost more to ship?",
    answer:
      "It can, because its condition may affect the carrier, equipment, and loading plan available for the route. Moto Relay quotes the actual shipment rather than using a generic non-running surcharge or national average.",
  },
  {
    question: "Does Moto Relay crate non-running motorcycles?",
    answer:
      "No. Moto Relay arranges door-to-door transport and does not use depot-to-depot or crated freight shipping.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/non-running-motorcycle-shipping#service`,
    name: "Non-Running Motorcycle Shipping",
    description:
      "Door-to-door transport for non-running motorcycles that roll freely across the lower 48 United States.",
    url: `${site.url}/non-running-motorcycle-shipping`,
    areaServed: "Lower 48 United States",
    provider: { "@id": `${site.url}/#organization` },
    serviceType: "Non-running motorcycle shipping",
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
      eyebrow="Motorcycle Shipping Guide"
      title="Non-Running Motorcycle Shipping"
      intro="Yes, a motorcycle that does not run can be shipped—provided it still rolls freely and its condition is disclosed before pickup."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3 rounded-md border border-border bg-surface p-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">The short answer</h2>
        <p>
          Moto Relay arranges door-to-door shipping for non-running motorcycles that roll freely. The wheels must
          turn, and the motorcycle must be movable for loading and unloading. We do not currently accept a motorcycle
          that cannot roll, has locked wheels, or must be dragged onto the trailer.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Tell us exactly why the motorcycle does not run
        </h2>
        <p>
          “Non-running” can mean anything from a dead battery to a motorcycle with major mechanical damage. Those
          situations do not create the same loading needs. Before quoting, tell Moto Relay whether the motorcycle
          rolls, steers, and brakes, and whether its tires hold air.
        </p>
        <p>
          Accurate information helps us match the shipment with an independently assigned carrier prepared for the
          motorcycle&apos;s actual condition. It also prevents delays or changes at pickup when the motorcycle does not
          move as expected.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What “rolls freely” means for transport
        </h2>
        <p>A non-running motorcycle should meet all of these conditions:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Both wheels turn without a locked brake, seized bearing, or drivetrain preventing movement.</li>
          <li>The motorcycle can be steered and positioned for loading.</li>
          <li>The tires are inflated enough for the motorcycle to move safely.</li>
          <li>Loose or damaged parts are removed or secured before pickup.</li>
          <li>The pickup and delivery contacts can accurately explain any known problem.</li>
        </ul>
        <p>
          If you are unsure, test whether the motorcycle can be rolled a short distance safely before requesting a
          quote. Do not describe it as rolling if a wheel drags, the steering is locked, or moving it requires special
          lifting equipment.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Loading a non-running motorcycle
        </h2>
        <p>
          A motorcycle that cannot power itself onto transport equipment needs a different loading plan than a
          running motorcycle. The carrier must know its condition in advance so suitable equipment and safe access
          can be considered. Do not wait until the driver arrives to disclose that the motorcycle does not start.
        </p>
        <p>
          The motorcycle is secured for transport by the independently assigned carrier. Physical pickup, loading,
          securement, transit, unloading, and delivery are handled by that carrier.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Door-to-door service without crating
        </h2>
        <p>
          Moto Relay does not send motorcycles through storage depots and does not crate them for forklift handling.
          We arrange door-to-door transport, with pickup and delivery as close to the requested addresses as a large
          transport vehicle can safely and legally reach.
        </p>
        <p>
          Learn why we favor direct service in our{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door versus depot-to-depot motorcycle transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open or enclosed transport
        </h2>
        <p>
          Non-running motorcycles may be considered for open or enclosed transport when they roll freely. The route,
          motorcycle, condition, dimensions, and available equipment all matter. Enclosed transport adds protection
          from weather and road debris; open transport is practical for many shipments.
        </p>
        <p>
          See the differences in our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed motorcycle transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Information needed for a non-running motorcycle quote
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Pickup and delivery ZIP codes or cities</li>
          <li>Motorcycle year, make, and model</li>
          <li>The reason it does not run, if known</li>
          <li>Whether it rolls, steers, and brakes</li>
          <li>Whether both tires hold air</li>
          <li>Any accident damage, missing parts, lowered suspension, or unusual dimensions</li>
          <li>Your preference for open, enclosed, or both transport options</li>
        </ul>
        <p>
          Pricing depends on the actual route and shipment details. Review our{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost guide
          </Link>{" "}
          for the factors that affect a quote.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Non-running motorcycle shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Send the actual route and complete condition details for a shipment-specific quote.</p>
        <Button href="/quote">Request My Non-Running Motorcycle Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
