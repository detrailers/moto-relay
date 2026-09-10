import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

const path = "/classic-custom-restored-motorcycle-shipping";

export const metadata: Metadata = {
  title: "Classic, Custom & Restored Motorcycle Shipping",
  description:
    "Door-to-door shipping for classic, custom, restored, rare, and collectible motorcycles. Compare open and enclosed transport for your actual route and bike.",
  alternates: { canonical: path },
};

const FAQS = [
  {
    question: "What is the best way to ship a classic or restored motorcycle?",
    answer:
      "The right plan depends on the motorcycle, route, timing, dimensions, condition, and the owner's priorities. Enclosed transport shields the motorcycle from weather and road debris, while open transport remains practical for many shipments. Moto Relay can quote either or both when suitable equipment is available.",
  },
  {
    question: "Should a rare motorcycle always be shipped enclosed?",
    answer:
      "Not automatically, but many owners of rare, restored, custom, or collectible motorcycles prefer enclosed transport because it adds protection from weather and road debris. The final choice should reflect the actual motorcycle, route, availability, and shipment-specific quote.",
  },
  {
    question: "How should I document a restored motorcycle before pickup?",
    answer:
      "Take clear, date-stamped photographs from every side and include close views of the paint, chrome, wheels, seat, accessories, and any existing mark. Keep copies and review the pickup condition documentation before the motorcycle leaves.",
  },
  {
    question: "Can Moto Relay ship a custom motorcycle with unusual dimensions?",
    answer:
      "Custom motorcycles can be considered, but modifications must be disclosed. Provide the finished length, width, height, ground clearance, weight when known, and details about handlebars, fairings, saddlebags, spoilers, or other additions so trailer fit can be evaluated.",
  },
  {
    question: "Does Moto Relay crate classic motorcycles or use storage depots?",
    answer:
      "No. Moto Relay arranges door-to-door transport and does not offer crated or depot-to-depot motorcycle shipping.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: "Classic, Custom and Restored Motorcycle Shipping",
    description:
      "Door-to-door open and enclosed transport for classic, custom, restored, rare, and collectible motorcycles across the lower 48 United States.",
    url: `${site.url}${path}`,
    areaServed: "Lower 48 United States",
    provider: { "@id": `${site.url}/#organization` },
    serviceType: "Classic and custom motorcycle shipping",
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
      eyebrow="Specialized Motorcycle Shipping"
      title="Classic, Custom & Restored Motorcycle Shipping"
      intro="Door-to-door transport planned around the actual motorcycle, its condition, its modifications, and the protection that matters to its owner."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3 rounded-md border border-border bg-surface p-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">The short answer</h2>
        <p>
          Classic, custom, restored, rare, and collectible motorcycles deserve a shipment plan based on the bike—not
          a generic freight process. Moto Relay arranges door-to-door open and enclosed transport across the lower 48
          and does not use depots or crates.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Why the motorcycle&apos;s details matter
        </h2>
        <p>
          A restored factory motorcycle, a long-fork custom build, and an irreplaceable survivor may all need different
          handling considerations. Before quoting, provide the year, make, model, condition, finished dimensions,
          modifications, and anything the independently assigned carrier should know before pickup.
        </p>
        <p>
          Custom handlebars, low ground clearance, extended frames, oversized fairings, hard saddlebags, delicate
          finishes, and non-original parts can affect trailer fit and loading. Accurate details help avoid surprises
          when the carrier arrives.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open versus enclosed transport
        </h2>
        <p>
          Enclosed transport shields the motorcycle from weather and road debris during transit. That added protection
          is often a priority for owners of restored, collectible, rare, or high-value motorcycles. Open transport is
          still a practical option for many motorcycles and routes.
        </p>
        <p>
          Moto Relay does not apply one answer to every motorcycle. When both options fit the vehicle and route, we can
          quote open and enclosed service so the owner can compare actual availability and pricing. Read the full{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed motorcycle transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Document the motorcycle before pickup
        </h2>
        <p>
          Thorough photographs are especially important when the paint, chrome, upholstery, accessories, or restoration
          work are difficult to replace. Before pickup:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Clean the motorcycle enough for its condition to be visible.</li>
          <li>Photograph all four sides in good light.</li>
          <li>Take close views of paint, chrome, wheels, seat, gauges, exhaust, and custom parts.</li>
          <li>Record any existing scratch, chip, dent, stain, or mechanical issue.</li>
          <li>Keep the photographs and review the pickup condition documentation.</li>
        </ul>
        <p>
          Continue with the complete{" "}
          <Link href="/prepare-motorcycle-for-shipping" className="font-semibold text-accent hover:underline">
            motorcycle shipping preparation checklist
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Carrier information and physical handling
        </h2>
        <p>
          Physical pickup, loading, securement, transit, unloading, and delivery are handled by the independently
          assigned carrier. The carrier&apos;s licensing, insurance, and applicable USDOT or MC information can be
          provided directly to the customer.
        </p>
        <p>
          Review the documentation, verify the motorcycle&apos;s condition at pickup and delivery, and raise any concern
          before the motorcycle is moved. Our{" "}
          <Link href="/motorcycle-shipping-buyers-guide" className="font-semibold text-accent hover:underline">
            motorcycle shipping buyer&apos;s guide
          </Link>{" "}
          explains what to review when comparing a shipping company and assigned carrier.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Door-to-door instead of depot-to-depot
        </h2>
        <p>
          Moto Relay does not send motorcycles through storage depots and does not crate them for forklift handling.
          Door-to-door service reduces terminal trips and avoids adding depot and crating steps to the shipment.
          Pickup and delivery are arranged as close to each requested address as the transport vehicle can safely and
          legally reach.
        </p>
        <p>
          Compare the handling and custody differences in our{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door versus depot-to-depot guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          A real restored-motorcycle shipment
        </h2>
        <p>
          Moto Relay arranged enclosed transportation for a rare, completely restored 1974 Suzuki GT750 from Corinth,
          Texas, to Glendale, Arizona. Loading and unloading went smoothly, and the customer was delighted with the
          completed delivery.
        </p>
        <p>
          See the photos and shipment details in the{" "}
          <Link
            href="/recent-transports/1974-suzuki-gt750-corinth-to-glendale"
            className="font-semibold text-accent hover:underline"
          >
            1974 Suzuki GT750 transport story
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What to include in your quote request
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Pickup and delivery ZIP codes or cities</li>
          <li>Year, make, model, and current condition</li>
          <li>Whether the motorcycle runs and rolls freely</li>
          <li>Finished dimensions and ground clearance when modified</li>
          <li>Custom, rare, fragile, or irreplaceable components</li>
          <li>Open, enclosed, or both transport preferences</li>
          <li>Preferred timing and access restrictions</li>
        </ul>
        <p>
          Moto Relay quotes the actual route and motorcycle rather than a generic national average. See the{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost factors
          </Link>{" "}
          that can affect a shipment.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Classic and custom motorcycle shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Tell Moto Relay about the motorcycle, route, condition, modifications, and preferred protection.</p>
        <Button href="/quote">Request My Motorcycle Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
