import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Motorcycle Shipping Cost: What Determines Your Quote",
  description:
    "Understand motorcycle shipping costs, the factors that change a quote, and practical ways to control the price of open or enclosed transport.",
  alternates: { canonical: "/motorcycle-shipping-cost" },
};

const FACTORS = [
  {
    title: "Pickup, delivery, and distance",
    body: "The route matters as much as the mileage. A shipment between frequently traveled metro areas may be easier to schedule than one involving remote pickup or delivery points.",
  },
  {
    title: "Open or enclosed transport",
    body: "Open transport is practical for many motorcycles. Enclosed transport adds protection from weather and road debris and requires different equipment and carrier availability.",
  },
  {
    title: "Motorcycle size and type",
    body: "A standard motorcycle, large touring bike, custom build, trike, ATV, and UTV occupy different amounts of trailer space and may require different loading plans.",
  },
  {
    title: "Whether the vehicle runs and rolls",
    body: "A non-running vehicle can require extra loading coordination. Moto Relay can arrange transport for non-running vehicles when they still roll freely.",
  },
  {
    title: "Timing and carrier availability",
    body: "Flexible pickup timing can make matching your shipment with a suitable carrier easier. Tight deadlines, seasonal demand, and limited route coverage can affect a quote.",
  },
];

const FAQS = [
  {
    question: "Can I get a motorcycle shipping price without pickup and delivery locations?",
    answer:
      "Not an accurate one. The route, distance, access at both locations, and current carrier availability all affect the quote.",
  },
  {
    question: "Is open motorcycle transport always less expensive than enclosed transport?",
    answer:
      "Open transport is often the more practical option, but the actual difference depends on the route, timing, vehicle, and available equipment. Requesting both options gives you the best comparison.",
  },
  {
    question: "Does a non-running motorcycle cost more to ship?",
    answer:
      "It can require additional loading planning. Moto Relay accepts non-running motorcycles when they roll, but non-rolling vehicles cannot currently be accepted.",
  },
  {
    question: "How can I help keep my motorcycle shipping cost down?",
    answer:
      "Provide complete vehicle and route details, offer reasonable pickup flexibility, and compare open and enclosed service when either could work for your motorcycle.",
  },
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
      eyebrow="Pricing Guide"
      title="Motorcycle Shipping Cost"
      intro="There is no honest one-price-fits-all answer. Your route, motorcycle, timing, and transport type determine the quote."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Why motorcycle shipping prices vary
        </h2>
        <p>
          A useful shipping quote is based on the actual job—not a national average that may have little to do
          with your route. Two motorcycles traveling the same distance can price differently when one needs
          enclosed service, has limited pickup access, or must move within a narrow window.
        </p>
        <p>
          Moto Relay requests the details that materially affect transport before providing a price. That gives
          you a quote built around your shipment instead of a teaser rate that changes later.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Five factors that shape your quote
        </h2>
        <div className="space-y-5">
          {FACTORS.map((factor) => (
            <div key={factor.title} className="space-y-1.5">
              <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{factor.title}</h3>
              <p>{factor.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Information needed for an accurate price
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Pickup and delivery ZIP codes or cities</li>
          <li>Year, make, and model of the motorcycle or powersports vehicle</li>
          <li>Whether it runs and whether it rolls freely</li>
          <li>Your preference for open, enclosed, or both transport options</li>
          <li>Your preferred pickup timing and any access limitations</li>
        </ul>
        <p>
          Shipping a side-by-side? Our{" "}
          <Link href="/utv-shipping" className="font-semibold text-accent hover:underline">
            UTV shipping guide
          </Link>{" "}
          explains the measurements and accessory details needed for standard and enclosed-cab machines.
        </p>
        <p>
          Shipping a factory trike or motorcycle conversion? Review the rear-width, clearance, and condition details
          in our{" "}
          <Link href="/trike-shipping" className="font-semibold text-accent hover:underline">
            trike shipping guide
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Practical ways to control the cost
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Give complete and accurate details when requesting the quote.</li>
          <li>Allow a reasonable pickup window when your schedule permits.</li>
          <li>Ask for both open and enclosed pricing if either option would work.</li>
          <li>Make sure the motorcycle is accessible and ready when the carrier arrives.</li>
          <li>Avoid changing the vehicle, route, or timing after dispatch whenever possible.</li>
        </ul>
        <p>
          Moto Relay provides convenient door-to-door service. Learn why it is generally preferable to terminal
          shipping in our{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door versus depot-to-depot guide
          </Link>
          . You can also compare{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open and enclosed transport
          </Link>
          .
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Motorcycle shipping cost questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Ready for a shipment-specific price? Send the route and vehicle details and Moto Relay will review them.</p>
        <Button href="/quote">Request My Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
