import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Motorcycle Shipping Cost",
  description:
    "What affects motorcycle shipping cost and why an accurate price requires your shipment details. Request a free quote.",
  alternates: { canonical: "/motorcycle-shipping-cost" },
};

const FACTORS = [
  "Pickup and delivery locations, and the distance between them",
  "Vehicle type — motorcycle, ATV, UTV, or trike",
  "Open or enclosed transport",
  "The vehicle's condition, including whether it runs and rolls",
  "Timing and current carrier availability",
];

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Pricing"
      title="Motorcycle Shipping Cost"
      intro="We don't publish flat rates, because shipping cost genuinely depends on your shipment."
    >
      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What affects the price
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          {FACTORS.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Why we don&apos;t publish price ranges
        </h2>
        <p>
          Two shipments that look similar on paper can price very differently once route, vehicle condition, and
          carrier availability are factored in. Rather than give you a number that might not apply to your
          shipment, we ask for your details and respond with pricing built for your specific route and vehicle.
        </p>
      </section>

      <div className="pt-2">
        <Button href="/quote">Request a Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
