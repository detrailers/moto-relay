import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

// Real, owner-approved-scope content — but this is not a substitute for
// legal review. Recommend the owner have an attorney review this page
// before public launch. (Do not surface this note to visitors.)

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing quote requests and use of the Moto Relay website.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <ContentPageLayout eyebrow="Legal" title="Terms of Service" intro="Effective date: August 31, 2026">
      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">Quote requests</h2>
        <p>
          Submitting a quote request through this website does not create a booking or a guaranteed reservation.
          Pricing and estimated timing are confirmed directly with you after we review your shipment details.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Accurate information
        </h2>
        <p>
          You agree to provide accurate information about your vehicle, its condition, and pickup/delivery access.
          Non-rolling vehicles — vehicles that cannot be pushed or rolled — are not accepted for transport.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Deposits and payment
        </h2>
        <p>
          A deposit becomes due once your shipment has been dispatched. No payment is required to request or
          receive a quote.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Carrier terms
        </h2>
        <p>
          Shipments are transported by DOT-authorized carriers. Carrier-specific transport documents and insurance
          terms may also apply to your shipment and will be provided as part of arranging service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">Contact us</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={site.emailHref} className="font-semibold text-accent hover:underline">
            {site.email}
          </a>{" "}
          or by calling{" "}
          <a href={site.phoneHref} className="font-semibold text-accent hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </section>
    </ContentPageLayout>
  );
}
