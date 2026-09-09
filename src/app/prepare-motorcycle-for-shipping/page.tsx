import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "How to Prepare a Motorcycle for Shipping",
  description:
    "Use this practical motorcycle shipping checklist to document condition, secure accessories, prepare for pickup, and avoid preventable delays.",
  alternates: { canonical: "/prepare-motorcycle-for-shipping" },
};

const STEPS = [
  {
    title: "Confirm the shipment details",
    body: "Verify the pickup and delivery contacts, addresses, phone numbers, timing, and whether the motorcycle runs and rolls. Tell Moto Relay about access restrictions, a low-clearance bike, or anything else that could affect loading.",
  },
  {
    title: "Clean enough to inspect",
    body: "The motorcycle does not need professional detailing, but dirt should not hide its condition. A clean, visible surface makes pickup photos and the condition report more useful.",
  },
  {
    title: "Photograph its condition",
    body: "Take clear, date-stamped photos from the front, rear, both sides, and close range. Include the odometer and any existing scratches, dents, cracked panels, or other damage. Keep the original photos until delivery is complete.",
  },
  {
    title: "Remove personal and loose items",
    body: "Empty removable luggage and do not place household goods in saddlebags, trunks, or storage compartments. Remove or firmly secure loose accessories that could move, detach, or interfere with loading.",
  },
  {
    title: "Check the motorcycle's basic condition",
    body: "Look for visible fluid leaks, properly inflated tires, a charged battery, and working steering and brakes. Disclose mechanical problems before dispatch. A non-running motorcycle must still roll freely for Moto Relay to accept it.",
  },
  {
    title: "Follow the carrier's fuel instructions",
    body: "Do not guess at a universal fuel level. Requirements can depend on the equipment and carrier. Follow the instructions provided for your assigned shipment and avoid filling the tank immediately before pickup unless directed.",
  },
  {
    title: "Prepare keys, alarms, and access",
    body: "Have the required key ready for a running motorcycle and provide any special starting or alarm instructions. Make sure the carrier can safely reach the pickup area, or arrange a nearby accessible meeting point for a large transport truck.",
  },
  {
    title: "Review the pickup inspection",
    body: "Walk around the motorcycle with the driver, compare the written condition report with the vehicle, and keep your copy. At delivery, inspect the motorcycle again before signing the final paperwork.",
  },
];

const FAQS = [
  {
    question: "How much fuel should be in a motorcycle before shipping?",
    answer:
      "Follow the instructions for your assigned carrier and equipment. Requirements can vary, so Moto Relay does not recommend relying on one universal fuel level.",
  },
  {
    question: "Can I leave personal items in the motorcycle's saddlebags?",
    answer:
      "Personal or household items should be removed. They may not be covered by carrier cargo insurance and can add weight, move in transit, or complicate inspection.",
  },
  {
    question: "Does a motorcycle need to run to be shipped?",
    answer:
      "Not always. Moto Relay can arrange transport for a non-running motorcycle when it rolls freely. Disclose its condition before dispatch so appropriate loading equipment can be coordinated.",
  },
  {
    question: "Should I photograph my motorcycle before pickup?",
    answer:
      "Yes. Clear photos and a careful pickup condition report create a useful record of the motorcycle's pre-shipment condition.",
  },
  {
    question: "Will the carrier pick up directly from my driveway?",
    answer:
      "Door-to-door means as close to the addresses as the transport truck can safely and legally reach. Tight streets, low branches, steep grades, or local restrictions may require a nearby accessible meeting point.",
  },
];

export default function Page() {
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
      eyebrow="Pickup Checklist"
      title="How to Prepare a Motorcycle for Shipping"
      intro="A little preparation makes pickup easier, documents your motorcycle's condition, and helps prevent avoidable delays."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Before the carrier arrives
        </h2>
        <p>
          Start with the instructions for your actual shipment. Motorcycle size, condition, accessories, route, and
          transport equipment can change what the carrier needs at pickup. When an assigned carrier gives a specific
          preparation instruction, follow it instead of relying on a generic checklist.
        </p>
        <p>
          Moto Relay provides door-to-door transport rather than depot-to-depot or crated freight shipping. Your
          motorcycle should be accessible for inspection and loading at pickup.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Eight-step motorcycle shipping checklist
        </h2>
        {STEPS.map((step, index) => (
          <div key={step.title} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">
              {index + 1}. {step.title}
            </h3>
            <p>{step.body}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Items to remove or secure
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Personal belongings and household goods</li>
          <li>Loose electronics, mounts, covers, and detachable accessories</li>
          <li>Removable luggage contents and valuables</li>
          <li>Toll tags or parking passes you do not want activated in transit</li>
          <li>Alarm settings that could activate while the motorcycle is being handled</li>
        </ul>
        <p>
          Factory-mounted or permanent accessories should be disclosed when they materially change the motorcycle&apos;s
          length, width, height, ground clearance, or loading needs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What to have ready at pickup
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>The motorcycle and any required key</li>
          <li>Your pickup contact&apos;s working phone number</li>
          <li>Starting, alarm, steering-lock, or mechanical instructions</li>
          <li>Your pre-pickup photos</li>
          <li>Enough time to review and sign the condition report</li>
        </ul>
        <p>
          Not sure which equipment is right for the shipment? Compare{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open and enclosed motorcycle transport
          </Link>
          . You can also review how{" "}
          <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
            Moto Relay shipping works
          </Link>{" "}
          from quote through delivery.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Motorcycle preparation questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>Ready to plan your shipment? Send Moto Relay the route, motorcycle, and timing details.</p>
        <Button href="/quote">Request My Motorcycle Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
