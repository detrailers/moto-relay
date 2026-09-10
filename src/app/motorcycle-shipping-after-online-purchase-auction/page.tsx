import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

const path = "/motorcycle-shipping-after-online-purchase-auction";

export const metadata: Metadata = {
  title: "Shipping a Motorcycle After an Online Purchase",
  description:
    "Bought a motorcycle online, from a dealer, or at auction? Learn what Moto Relay needs to arrange door-to-door pickup and delivery across the lower 48.",
  alternates: { canonical: path },
};

const FAQS = [
  {
    question: "Can Moto Relay pick up a motorcycle from a private seller?",
    answer:
      "Yes. Moto Relay can arrange pickup from a private seller when the seller or another authorized contact is available, the motorcycle is ready and accessible, and the carrier can safely reach the pickup location.",
  },
  {
    question: "Can a motorcycle be picked up from a dealership or auction?",
    answer:
      "Yes. Provide the business or auction name, release requirements, operating hours, pickup reference or lot number, and a contact who can confirm that the motorcycle is released and ready before the carrier arrives.",
  },
  {
    question: "Should I book shipping before paying for the motorcycle?",
    answer:
      "Confirm that the transaction is legitimate and that the motorcycle can be released before scheduling pickup. Moto Relay arranges transportation and does not verify the motorcycle's ownership, mechanical condition, seller, or purchase transaction for you.",
  },
  {
    question: "What if the motorcycle I bought does not run?",
    answer:
      "Tell Moto Relay before quoting. A non-running motorcycle can be considered when it still rolls freely and can be moved for loading. A motorcycle that cannot roll is not currently eligible for transport through Moto Relay.",
  },
  {
    question: "Can the seller put parts or a box on the motorcycle for transport?",
    answer:
      "Do not assume loose parts or personal items can travel with the motorcycle. Disclose any additional item before booking. Accessories should be installed securely or removed according to the agreed preparation plan.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: "Motorcycle Shipping After an Online Purchase or Auction",
    description:
      "Door-to-door motorcycle pickup and delivery after a private sale, online purchase, dealership purchase, or auction across the lower 48 United States.",
    url: `${site.url}${path}`,
    areaServed: "Lower 48 United States",
    provider: { "@id": `${site.url}/#organization` },
    serviceType: "Purchased motorcycle shipping",
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
      eyebrow="Motorcycle Buying & Shipping Guide"
      title="Shipping a Motorcycle After an Online Purchase or Auction"
      intro="Bought a motorcycle from a private seller, dealer, marketplace, or auction? The next step is coordinating a release-ready pickup with accurate contacts and motorcycle details."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3 rounded-md border border-border bg-surface p-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">The short answer</h2>
        <p>
          Moto Relay arranges door-to-door transport after an online motorcycle purchase, private sale, dealership
          purchase, or auction win. Before dispatch, confirm that the motorcycle is paid for as agreed, released for
          pickup, accessible, and accurately described.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Confirm the motorcycle and seller before booking transport
        </h2>
        <p>
          Transportation should not be used as a substitute for checking the motorcycle or purchase. Confirm the
          seller&apos;s identity, the motorcycle&apos;s VIN and ownership documents, its actual condition, and the terms of
          the sale. If possible, inspect the motorcycle yourself or use a qualified independent inspection service.
        </p>
        <p>
          Moto Relay arranges transportation; it does not authenticate advertisements, inspect motorcycles, hold
          purchase funds, guarantee mechanical condition, or resolve disputes between a buyer and seller.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Make sure the motorcycle is released and ready
        </h2>
        <p>
          A carrier should not arrive while payment, paperwork, auction fees, storage charges, or release authorization
          are still unresolved. Ask the pickup location to confirm that the motorcycle can leave and that an authorized
          person will be available during the agreed pickup window.
        </p>
        <p>For a dealer or auction pickup, collect:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Business or facility name and complete pickup address</li>
          <li>Operating hours and any appointment rules</li>
          <li>Buyer, release, stock, gate-pass, or lot number</li>
          <li>Name and phone number of the release contact</li>
          <li>Confirmation that all holds and required fees are cleared</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Get an accurate condition report from the seller
        </h2>
        <p>
          Ask the seller whether the motorcycle starts, runs, steers, brakes, rolls freely, and has inflated tires.
          Request current photographs from every side, including close views of existing damage and accessories. Those
          details help prevent a quote or loading plan from being based on an inaccurate advertisement.
        </p>
        <p>
          If it does not run, use our{" "}
          <Link href="/non-running-motorcycle-shipping" className="font-semibold text-accent hover:underline">
            non-running motorcycle shipping guide
          </Link>{" "}
          to confirm whether it is eligible for Moto Relay service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Choose open or enclosed transport
        </h2>
        <p>
          Open transport is practical for many purchases. Enclosed transport shields the motorcycle from weather and
          road debris and may be a priority for a rare, restored, custom, collectible, or high-value motorcycle. The
          actual route, motorcycle, timing, dimensions, and suitable carrier availability determine the options.
        </p>
        <p>
          Compare both in our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed motorcycle transport guide
          </Link>. For a special purchase, also review our{" "}
          <Link href="/classic-custom-restored-motorcycle-shipping" className="font-semibold text-accent hover:underline">
            classic, custom, and restored motorcycle shipping guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Coordinate pickup when you are not there
        </h2>
        <p>
          The buyer does not normally need to travel to the seller&apos;s location. Provide reliable phone numbers for
          both pickup and delivery contacts, and make sure each person knows the carrier will coordinate timing. The
          independently assigned carrier handles physical pickup, loading, securement, transit, unloading, and delivery.
        </p>
        <p>
          Moto Relay provides door-to-door service rather than depot-to-depot shipping. A large transport vehicle may
          require a nearby accessible meeting point if it cannot safely or legally reach the exact address. See our{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door motorcycle transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Information Moto Relay needs for the quote
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Complete pickup and delivery ZIP codes or cities</li>
          <li>Motorcycle year, make, model, and modifications</li>
          <li>Whether it runs, rolls, steers, brakes, and has inflated tires</li>
          <li>Seller, dealer, or auction contact information and operating hours</li>
          <li>Any release procedure, reference number, or pickup deadline</li>
          <li>Open, enclosed, or both transport preferences</li>
          <li>Any address-access restrictions at pickup or delivery</li>
        </ul>
        <p>
          Moto Relay prices the actual route and shipment instead of promising a generic national average. Learn about
          the variables in our{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Before the carrier arrives
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Confirm the motorcycle is fully released and accessible.</li>
          <li>Remove or secure loose accessories and personal property.</li>
          <li>Have keys available when applicable.</li>
          <li>Make sure the pickup contact can review the motorcycle&apos;s condition.</li>
          <li>Tell Moto Relay immediately if the condition or pickup situation changes.</li>
        </ul>
        <p>
          Share the complete{" "}
          <Link href="/prepare-motorcycle-for-shipping" className="font-semibold text-accent hover:underline">
            motorcycle preparation checklist
          </Link>{" "}
          with the seller before pickup.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Online purchase and auction shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Send the route, motorcycle condition, seller contact, and release details for a shipment-specific quote.</p>
        <Button href="/quote">Request My Purchased Motorcycle Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
