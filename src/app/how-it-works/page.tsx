import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Moto Relay motorcycle and powersports shipping works, from requesting a quote to delivery.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    title: "Request your quote",
    body: "Tell us your pickup and delivery locations, vehicle details, and whether it runs and rolls.",
  },
  {
    title: "We review your shipment",
    body: "We look at your route, vehicle, and transport preference to put together accurate pricing.",
  },
  {
    title: "You receive pricing and timing",
    body: "We respond directly with your quote and an estimated pickup and delivery window for your shipment.",
  },
  {
    title: "You accept the quote",
    body: "Once you're ready to move forward, let us know and we'll begin arranging your transport.",
  },
  {
    title: "Shipment is dispatched",
    body: "Your deposit becomes due once the shipment has been dispatched — not before.",
  },
  {
    title: "Carrier and pickup are coordinated",
    body: "We coordinate a DOT-authorized carrier and confirm pickup details with you directly.",
  },
  {
    title: "Delivery is completed",
    body: "Your vehicle is delivered to the address you provided, completing the shipment.",
  },
];

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Process"
      title="How It Works"
      intro="From quote to delivery, here's what to expect."
    >
      <ol className="space-y-5">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="font-heading text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="font-heading text-base font-bold uppercase tracking-wide text-foreground">
                {step.title}
              </p>
              <p className="mt-1">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="pt-2">
        <Button href="/quote">Get My Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
