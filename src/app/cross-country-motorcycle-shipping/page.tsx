import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

const path = "/cross-country-motorcycle-shipping";

export const metadata: Metadata = {
  title: "Cross-Country Motorcycle Shipping",
  description:
    "Door-to-door cross-country motorcycle shipping across the lower 48. Learn how routes, timing, motorcycle condition, and open or enclosed equipment affect transport.",
  alternates: { canonical: path },
};

const FAQS = [
  {
    question: "How does cross-country motorcycle shipping work?",
    answer:
      "Moto Relay reviews the route, motorcycle, condition, timing, access, and transport preference, then coordinates an independently assigned carrier. That carrier handles physical pickup, loading, securement, transit, unloading, and delivery.",
  },
  {
    question: "How long does it take to ship a motorcycle across the country?",
    answer:
      "There is no dependable one-time-fits-all answer. Pickup timing and transit depend on the exact route, distance, carrier availability, equipment, weather, traffic, required stops, and safe operating conditions. Timing should be discussed for the actual shipment rather than treated as a guaranteed national average.",
  },
  {
    question: "How much does cross-country motorcycle shipping cost?",
    answer:
      "Moto Relay quotes the actual route and shipment. Distance matters, but so do the origin and destination, motorcycle size and condition, open or enclosed equipment, access, timing, and current carrier availability.",
  },
  {
    question: "Is open or enclosed transport better for a cross-country shipment?",
    answer:
      "Open transport is practical for many motorcycles. Enclosed transport shields the motorcycle from weather and road debris. The better choice depends on the motorcycle, route, dimensions, owner priorities, equipment availability, and shipment-specific quotes.",
  },
  {
    question: "Is cross-country motorcycle shipping door-to-door?",
    answer:
      "Yes. Moto Relay arranges door-to-door service rather than depot-to-depot shipping. If a large transport vehicle cannot safely or legally reach an exact address, the customer and carrier may coordinate a nearby accessible meeting point.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: "Cross-Country Motorcycle Shipping",
    description:
      "Door-to-door open and enclosed cross-country motorcycle transport across the lower 48 United States.",
    url: `${site.url}${path}`,
    areaServed: "Lower 48 United States",
    provider: { "@id": `${site.url}/#organization` },
    serviceType: "Cross-country motorcycle shipping",
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
      eyebrow="Nationwide Motorcycle Transport"
      title="Cross-Country Motorcycle Shipping"
      intro="Door-to-door motorcycle transport across the lower 48, planned and quoted for the actual route rather than a generic national estimate."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3 rounded-md border border-border bg-surface p-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">The short answer</h2>
        <p>
          Moto Relay arranges cross-country motorcycle shipping between locations in the lower 48 United States.
          Service is door-to-door, with open and enclosed options considered according to the motorcycle, exact route,
          timing, dimensions, condition, and suitable carrier availability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          How a long-distance motorcycle shipment works
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Provide the exact route, motorcycle details, condition, timing, and transport preference.</li>
          <li>Moto Relay reviews the shipment and provides route-specific pricing.</li>
          <li>A suitable independently assigned carrier is coordinated for the shipment.</li>
          <li>The carrier contacts the pickup party to coordinate an accessible meeting point and timing.</li>
          <li>The carrier handles physical loading, securement, transit, unloading, and delivery.</li>
          <li>The delivery contact reviews the motorcycle&apos;s condition at arrival.</li>
        </ol>
        <p>
          See the complete{" "}
          <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
            Moto Relay shipping process
          </Link>{" "}
          from quote through delivery.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Cross-country timing depends on the real route
        </h2>
        <p>
          A coast-to-coast move, a north-to-south route, and a trip between two rural locations do not have identical
          schedules. Pickup timing and time in transit can be affected by carrier coverage, equipment, distance,
          weather, traffic, road conditions, required rest, other scheduled stops, and safe operating conditions.
        </p>
        <p>
          Discuss timing for the actual shipment and keep pickup and delivery contacts reachable. Estimated windows can
          change while a carrier is operating over a long distance, so avoid planning around an unsupported exact-date
          promise.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          How cross-country motorcycle shipping is priced
        </h2>
        <p>
          Mileage is important, but it is not the only factor. Pricing also depends on the actual origin and
          destination, route coverage, motorcycle size and condition, open or enclosed equipment, pickup and delivery
          access, timing, and current carrier availability.
        </p>
        <p>
          Moto Relay quotes the real shipment instead of publishing one generic cross-country price. Review the{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost factors
          </Link>{" "}
          that can change a route-specific quote.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open versus enclosed cross-country transport
        </h2>
        <p>
          Open transport carries the motorcycle on equipment exposed to the outside and is practical for many long
          routes. Enclosed transport shields the motorcycle from weather and road debris. Owners of rare, restored,
          custom, collectible, or high-value motorcycles often consider enclosed service when added protection is a
          priority.
        </p>
        <p>
          Neither option is automatically best for every motorcycle. When the route and motorcycle allow, request
          pricing for both and compare the actual choices. Read our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed motorcycle transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Door-to-door without depots or crates
        </h2>
        <p>
          Moto Relay does not offer depot-to-depot or crated motorcycle shipping. Pickup and delivery are coordinated
          as close to the requested addresses as the transport vehicle can safely and legally reach. Narrow streets,
          low branches, tight turns, weight restrictions, or limited space may require a nearby meeting point.
        </p>
        <p>
          This still provides direct carrier pickup and delivery without requiring the customer to transport the
          motorcycle to one storage terminal and retrieve it from another. Learn more in the{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door versus depot-to-depot guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Prepare for a multi-state trip
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Confirm the motorcycle runs and rolls exactly as disclosed.</li>
          <li>Remove personal property and secure or remove loose accessories.</li>
          <li>Photograph every side and any existing mark before pickup.</li>
          <li>Provide keys and any unusual starting or operating instructions.</li>
          <li>Make sure both contacts understand the expected communication process.</li>
          <li>Identify accessible meeting locations if either address cannot accommodate a large truck.</li>
        </ul>
        <p>
          Follow the full{" "}
          <Link href="/prepare-motorcycle-for-shipping" className="font-semibold text-accent hover:underline">
            motorcycle preparation checklist
          </Link>{" "}
          before the carrier arrives.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Running, non-running, classic, and newly purchased motorcycles
        </h2>
        <p>
          Moto Relay can arrange transport for running motorcycles and non-running motorcycles that still roll freely.
          A motorcycle that cannot roll is not currently eligible. Use our{" "}
          <Link href="/non-running-motorcycle-shipping" className="font-semibold text-accent hover:underline">
            non-running motorcycle shipping guide
          </Link>{" "}
          if condition affects loading.
        </p>
        <p>
          For a rare or modified bike, see our{" "}
          <Link href="/classic-custom-restored-motorcycle-shipping" className="font-semibold text-accent hover:underline">
            classic, custom, and restored motorcycle guide
          </Link>. If the motorcycle is waiting at a seller, dealership, or auction, follow the{" "}
          <Link href="/motorcycle-shipping-after-online-purchase-auction" className="font-semibold text-accent hover:underline">
            online-purchase and auction pickup guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Information needed for an accurate quote
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Pickup and delivery ZIP codes or cities</li>
          <li>Motorcycle year, make, model, and modifications</li>
          <li>Whether it runs, rolls, steers, brakes, and has inflated tires</li>
          <li>Open, enclosed, or both transport preferences</li>
          <li>Preferred pickup timing and any deadline</li>
          <li>Reliable pickup and delivery contact information</li>
          <li>Any access restriction at either end of the route</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Cross-country motorcycle shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          A real St. Louis-to-New York shipment
        </h2>
        <p>
          Read how Crystal&apos;s Honda VFR was picked up on time and delivered in New York within the quoted window after
          a difficult prior experience made carrier insurance documentation especially important. See the{" "}
          <Link href="/recent-transports/honda-vfr-st-louis-to-new-york" className="font-semibold text-accent hover:underline">
            Honda VFR customer story
          </Link>.
        </p>
      </section>

      <div className="space-y-3 pt-2">
        <p>Send the actual cross-country route and motorcycle details for a shipment-specific quote.</p>
        <Button href="/quote">Request My Cross-Country Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
