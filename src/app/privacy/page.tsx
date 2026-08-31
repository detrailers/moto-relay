import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

// Real, owner-approved-scope content — but this is not a substitute for
// legal review. Recommend the owner have an attorney review this page
// before public launch. (Do not surface this note to visitors.)

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Moto Relay collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <ContentPageLayout eyebrow="Legal" title="Privacy Policy" intro="Effective date: August 31, 2026">
      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Information we collect
        </h2>
        <p>
          When you request a quote, we collect the information you provide: your name, phone number, and email
          address, along with pickup and delivery locations, vehicle details (year, make, model), vehicle
          condition (whether it runs and rolls), and your transport preference.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          How we use this information
        </h2>
        <p>
          We use the information you submit to respond to your quote request and to coordinate shipping services
          if you move forward. We do not use it for unrelated marketing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          When we share information
        </h2>
        <p>
          We may share the details of your shipment with transportation providers as needed to price or arrange
          your service. We do not sell your information to third parties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          How we protect information
        </h2>
        <p>
          We take reasonable steps to keep the information you submit secure and retain it only as long as
          reasonably needed to respond to your request and provide our services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">Contact us</h2>
        <p>
          Questions about this policy can be sent to{" "}
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
