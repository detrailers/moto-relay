import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Motorcycle Shipping Buyer's Guide",
  description:
    "Questions worth asking before you book motorcycle transport, including DOT authorization, insurance, and payment timing.",
  alternates: { canonical: "/motorcycle-shipping-buyers-guide" },
};

const QUESTIONS = [
  {
    title: "Is the carrier DOT-authorized and in good standing?",
    body: "Any transporter moving your vehicle should be DOT-authorized and in good standing. It's reasonable to ask for this before you book.",
  },
  {
    title: "What insurance coverage applies?",
    body: "Ask what insurance coverage applies to your shipment and get the details in writing before pickup.",
  },
  {
    title: "Open or enclosed — which do you need?",
    body: "Open transport is a practical, widely used option. Enclosed transport adds protection from the road and weather. Neither is always the better choice — it depends on your vehicle and your budget.",
  },
  {
    title: "Does your vehicle run and roll?",
    body: "Be upfront about whether your vehicle runs and whether it rolls. This affects how it's loaded and whether a transporter can accept it at all.",
  },
  {
    title: "When is payment due?",
    body: "Understand exactly when a deposit or payment is due — before booking, at pickup, or at dispatch — and get that timing confirmed directly.",
  },
  {
    title: "How will you communicate during transport?",
    body: "Ask how and when you'll be updated on pickup, transit, and delivery, so you know what to expect.",
  },
];

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Guide"
      title="Motorcycle Shipping Buyer's Guide"
      intro="A few questions worth asking before you book any motorcycle transporter."
    >
      <div className="space-y-6">
        {QUESTIONS.map((q) => (
          <section key={q.title} className="space-y-1.5">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-foreground">{q.title}</h2>
            <p>{q.body}</p>
          </section>
        ))}
      </div>

      <div className="pt-2">
        <Button href="/quote">Request a Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
