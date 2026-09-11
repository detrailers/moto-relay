import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

const path = "/motorcycle-shipping-guides";

export const metadata: Metadata = {
  title: "Motorcycle Shipping Guides & Resources",
  description:
    "Moto Relay's motorcycle shipping guides cover costs, insurance, preparation, open and enclosed transport, non-running bikes, cross-country routes, and more.",
  alternates: { canonical: path },
};

const SECTIONS = [
  {
    title: "Start with the essentials",
    intro: "Understand the service, compare companies, and see how a shipment moves from quote to delivery.",
    links: [
      {
        href: "/motorcycle-shipping",
        title: "Door-to-Door Motorcycle Shipping",
        description: "Moto Relay's core motorcycle transport service across the lower 48 United States.",
      },
      {
        href: "/how-it-works",
        title: "How Motorcycle Shipping Works",
        description: "The process from a route-specific quote through carrier dispatch, pickup, and delivery.",
      },
      {
        href: "/motorcycle-shipping-buyers-guide",
        title: "Motorcycle Shipping Buyer's Guide",
        description: "Questions, records, terms, and warning signs to review before choosing a company.",
      },
      {
        href: "/motorcycle-shipping-faq",
        title: "Motorcycle Shipping FAQ",
        description: "Direct answers about service, timing, costs, condition, preparation, and transport options.",
      },
    ],
  },
  {
    title: "Compare service and equipment",
    intro: "Choose the transport approach that fits the actual motorcycle, route, and owner priorities.",
    links: [
      {
        href: "/door-to-door-vs-depot-motorcycle-transport",
        title: "Door-to-Door vs. Depot-to-Depot",
        description: "Compare direct carrier pickup with terminal trips, storage, custody handoffs, and crating.",
      },
      {
        href: "/open-vs-enclosed-motorcycle-transport",
        title: "Open vs. Enclosed Transport",
        description: "Compare weather exposure, protection, trailer fit, availability, and route-specific pricing.",
      },
      {
        href: "/motorcycle-shipping-cost",
        title: "Motorcycle Shipping Cost Factors",
        description: "Why real pricing depends on the route, motorcycle, condition, timing, access, and equipment.",
      },
      {
        href: "/motorcycle-shipping-insurance",
        title: "Motorcycle Shipping Insurance",
        description: "What to verify about the assigned carrier, cargo coverage, exclusions, and claim procedures.",
      },
    ],
  },
  {
    title: "Plan for the motorcycle and route",
    intro: "Use the guide that matches the motorcycle's condition, value, purchase situation, or distance.",
    links: [
      {
        href: "/non-running-motorcycle-shipping",
        title: "Non-Running Motorcycle Shipping",
        description: "Eligibility, condition details, and loading considerations for motorcycles that still roll freely.",
      },
      {
        href: "/classic-custom-restored-motorcycle-shipping",
        title: "Classic, Custom & Restored Motorcycles",
        description: "Protection, documentation, dimensions, and transport choices for special motorcycles.",
      },
      {
        href: "/motorcycle-shipping-after-online-purchase-auction",
        title: "Online Purchase & Auction Shipping",
        description: "Coordinate seller, dealer, and auction releases when the buyer is not at pickup.",
      },
      {
        href: "/cross-country-motorcycle-shipping",
        title: "Cross-Country Motorcycle Shipping",
        description: "Long-distance timing, route pricing, communication, and multi-state preparation.",
      },
    ],
  },
  {
    title: "Prepare and see real results",
    intro: "Get the motorcycle ready and learn from actual Moto Relay shipment stories.",
    links: [
      {
        href: "/prepare-motorcycle-for-shipping",
        title: "Motorcycle Preparation Checklist",
        description: "Condition photos, keys, accessories, tires, contacts, and pickup-readiness steps.",
      },
      {
        href: "/recent-transports",
        title: "Recent Moto Relay Transports",
        description: "Real routes, motorcycles, customer priorities, equipment choices, and delivery results.",
      },
      {
        href: "/recent-transports/1974-suzuki-gt750-corinth-to-glendale",
        title: "Restored 1974 Suzuki GT750",
        description: "Enclosed transportation for a rare restored motorcycle from Corinth to Glendale.",
      },
      {
        href: "/recent-transports/honda-vfr-st-louis-to-new-york",
        title: "Crystal's Honda VFR",
        description: "A St. Louis-to-New York shipment where insurance confirmation and communication mattered.",
      },
    ],
  },
];

export default function Page() {
  const allLinks = SECTIONS.flatMap((section) => section.links);
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Moto Relay Motorcycle Shipping Guides",
    description:
      "Motorcycle shipping resources covering service, equipment, costs, insurance, preparation, special motorcycles, long-distance routes, and real transports.",
    url: `${site.url}${path}`,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allLinks.length,
      itemListElement: allLinks.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `${site.url}${item.href}`,
      })),
    },
  };

  return (
    <ContentPageLayout
      eyebrow="Moto Relay Resource Center"
      title="Motorcycle Shipping Guides"
      intro="Clear answers for planning door-to-door motorcycle transport—from choosing equipment and verifying insurance to preparing the motorcycle and coordinating delivery."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <section className="space-y-3 rounded-md border border-border bg-surface p-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Find the answer you need
        </h2>
        <p>
          Start with the essentials if this is your first motorcycle shipment. If you already know the route or have a
          special situation, go directly to the guide for non-running, classic, purchased, or cross-country motorcycles.
          Every Moto Relay quote is still based on the actual route, motorcycle, condition, timing, and equipment.
        </p>
      </section>

      {SECTIONS.map((section) => (
        <section key={section.title} className="space-y-4">
          <div className="space-y-2">
            <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">{section.title}</h2>
            <p>{section.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {section.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <h3 className="font-heading font-bold uppercase tracking-wide text-foreground group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-accent">Read guide →</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          ATV, UTV, and trike shipping guides
        </h2>
        <p>
          Moto Relay also has dedicated information for{" "}
          <Link href="/atv-shipping" className="font-semibold text-accent hover:underline">ATV shipping</Link>,{" "}
          <Link href="/utv-shipping" className="font-semibold text-accent hover:underline">UTV and side-by-side shipping</Link>,
          and{" "}
          <Link href="/trike-shipping" className="font-semibold text-accent hover:underline">trike shipping</Link>.
          Dimensions, accessories, condition, and trailer fit are especially important for these vehicles.
        </p>
      </section>

      <div className="space-y-3 pt-2">
        <p>Ready to discuss the actual shipment? Send Moto Relay the route and motorcycle details.</p>
        <Button href="/quote">Request My Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
