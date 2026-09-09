import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Moto Relay",
  description:
    "Moto Relay is owned and operated by Texas Moto Worx and backed by 22 years of transport experience serving motorcycle and powersports customers.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Shipment-specific answers",
    body: "Routes, timing, equipment, and vehicles differ. Moto Relay reviews the actual shipment details instead of treating every move as if it were the same.",
  },
  {
    title: "Door-to-door convenience",
    body: "Moto Relay does not offer depot-to-depot shipping or a depot-and-crate process. Service is coordinated from pickup to delivery as close to each address as the transport truck can safely and legally reach.",
  },
  {
    title: "Clear vehicle requirements",
    body: "Customers are asked for the year, make, model, dimensions when relevant, and whether the vehicle runs and rolls so the shipment can be matched with suitable equipment.",
  },
  {
    title: "Credentials you can review",
    body: "Information for the carrier assigned to a shipment—including identifying authority, insurance, and licensing details—can be provided directly to the customer for review.",
  },
];

export default function Page() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Moto Relay",
    url: `${site.url}/about`,
    mainEntity: {
      "@id": `${site.url}/#organization`,
      "@type": "Organization",
      name: site.name,
      parentOrganization: {
        "@type": "Organization",
        name: site.parentCompany,
      },
      areaServed: "Lower 48 United States",
      telephone: "+1-940-268-1060",
      email: site.email,
    },
  };

  return (
    <ContentPageLayout
      eyebrow="About Moto Relay"
      title="Transport Experience Focused on Motorcycles and Powersports"
      intro="Moto Relay is owned and operated by Texas Moto Worx and backed by 22 years of transport experience."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Who we are
        </h2>
        <p>
          Moto Relay coordinates nationwide transportation for motorcycles, ATVs, UTVs, side-by-sides, and trikes
          across the lower 48 United States. Texas Moto Worx owns and operates the company, bringing 22 years of
          transport experience to each customer conversation and shipment plan.
        </p>
        <p>
          Our focus is straightforward: understand the vehicle and route, explain the available transport options,
          and help the customer prepare for a smooth door-to-door pickup and delivery.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What customers can expect
        </h2>
        {VALUES.map((value) => (
          <div key={value.title} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{value.title}</h3>
            <p>{value.body}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open and enclosed options
        </h2>
        <p>
          Moto Relay can review open and enclosed transportation options for a shipment. The right choice depends on
          the vehicle, route, timing, equipment availability, and the customer&apos;s priorities—not a one-size-fits-all
          recommendation.
        </p>
        <p>
          Learn more in our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed motorcycle transport guide
          </Link>{" "}
          or follow the complete{" "}
          <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
            Moto Relay shipping process
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Transparent information before pickup
        </h2>
        <p>
          Customers should be able to understand who is assigned to transport their vehicle. Carrier identifying
          authority, insurance, and licensing information can be provided directly for review once a carrier is
          assigned to the shipment.
        </p>
        <p>
          Our{" "}
          <Link href="/motorcycle-shipping-buyers-guide" className="font-semibold text-accent hover:underline">
            motorcycle shipping buyer&apos;s guide
          </Link>{" "}
          explains the practical questions customers should ask when comparing transport companies and reviewing a
          shipment.
        </p>
      </section>

      <div className="space-y-3 pt-2">
        <p>Tell Moto Relay what you need to move, where it is going, and your preferred timing.</p>
        <Button href="/quote">Request My Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
