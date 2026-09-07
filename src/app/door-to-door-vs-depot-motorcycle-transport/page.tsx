import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Door-to-Door vs. Depot-to-Depot Motorcycle Transport",
  description:
    "Learn why door-to-door motorcycle shipping is usually more convenient than depot-to-depot transport and how Moto Relay coordinates direct pickup and delivery.",
  alternates: { canonical: "/door-to-door-vs-depot-motorcycle-transport" },
};

const FAQS = [
  {
    question: "Does door-to-door mean the carrier will reach my exact driveway?",
    answer:
      "The carrier gets as close to the requested address as the truck can safely and legally travel. Low branches, narrow streets, weight restrictions, gates, and tight turns may require meeting at a nearby accessible location.",
  },
  {
    question: "Do I need to travel to a terminal with door-to-door motorcycle shipping?",
    answer:
      "No. Pickup and delivery are coordinated near the addresses you provide, subject to safe truck access.",
  },
  {
    question: "Is depot-to-depot motorcycle shipping always cheaper?",
    answer:
      "No. Any quoted difference should be weighed against extra terminal handling, possible storage, a less direct chain of custody, operating hours, and your travel to and from the depot.",
  },
  {
    question: "Does Moto Relay offer depot-to-depot shipping?",
    answer:
      "No. Moto Relay arranges door-to-door transport across the lower 48 United States because it provides a more direct and convenient customer experience.",
  },
  {
    question: "Does Moto Relay crate motorcycles or powersports vehicles?",
    answer:
      "No. Moto Relay does not use crated vehicle shipping. Crating adds construction, forklift, terminal, and uncrating touchpoints that can create additional opportunities for damage.",
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
      eyebrow="Shipping Guide"
      title="Door-to-Door vs. Depot-to-Depot Motorcycle Transport"
      intro="Door-to-door shipping is the more direct, convenient choice—and it is the service Moto Relay provides."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Our recommendation: choose door-to-door
        </h2>
        <p>
          Door-to-door transport keeps the shipment centered on your pickup and delivery needs. The carrier
          coordinates with you near both addresses, so you do not have to take the motorcycle to a terminal,
          arrange separate transportation home, or repeat that process at the destination.
        </p>
        <p>
          Moto Relay does not offer depot-to-depot shipping. We arrange door-to-door motorcycle and powersports
          transport across the lower 48 United States because it provides a more direct handoff and a simpler
          customer experience.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What door-to-door really means
        </h2>
        <p>
          The carrier coordinates pickup near the origin address and delivery near the destination address. A
          large transport truck may not be able to enter every residential street or driveway, so door-to-door
          means as close to each address as the truck can safely and legally travel.
        </p>
        <p>
          Low branches, narrow roads, weight restrictions, gated access, or limited turning space may require a
          nearby meeting point such as a large parking lot or wide public road. That is still door-to-door service;
          it is a practical safety adjustment, not a terminal shipment.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Why Moto Relay does not recommend depot-to-depot transport
        </h2>
        <div className="space-y-5">
          <div className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">
              A less direct chain of custody
            </h3>
            <p>
              With door-to-door transport, the driver who picks up your vehicle typically remains responsible for
              it throughout the route and completes the delivery. Depot-to-depot shipping can add terminal staff,
              storage areas, and additional handoffs. When more people and facilities are involved, it can be much
              harder to identify who was responsible if a problem occurs.
            </p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">
              More handling and more exposure
            </h3>
            <p>
              A depot may hold thousands of vehicles while many employees and transporters work around them. Your
              vehicle can spend time waiting, being moved, or being handled between parts of its trip. Those extra
              touchpoints create opportunities for damage that do not exist in the same way with a direct carrier
              handoff.
            </p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">
              You still have to travel to both depots
            </h3>
            <p>
              Depot-to-depot means you must take the vehicle to the origin terminal and arrange transportation
              home. At the other end, you must get to the destination terminal and retrieve it. Door-to-door
              service removes those terminal trips and coordinates pickup and delivery near the addresses that
              matter to you.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Avoid services that require crating your vehicle
        </h2>
        <p>
          Some depot and freight-style shipping companies crate motorcycles or powersports vehicles so they can
          stack freight efficiently and move it with forklifts. That may help the shipping company maximize
          trailer or warehouse space, but it does not minimize handling of your vehicle.
        </p>
        <p>
          Building a crate around the vehicle, moving the crate with forklifts, storing it at terminals, and
          uncrating it at the destination all add touchpoints. Each extra step creates another opportunity for
          contact, movement, or handling damage—and can make responsibility harder to trace if something happens.
        </p>
        <p>
          Moto Relay does not crate vehicles. We recommend direct, door-to-door transport because the vehicle is
          handled as a vehicle, not packaged and moved as warehouse freight.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Side-by-side comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-foreground">
                <th className="py-3 pr-4 font-heading uppercase tracking-wide">Consideration</th>
                <th className="px-4 py-3 font-heading uppercase tracking-wide">Door-to-door</th>
                <th className="px-4 py-3 font-heading uppercase tracking-wide">Depot-to-depot</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pickup", "Coordinated near your address", "You take the motorcycle to a terminal"],
                ["Delivery", "Coordinated near the destination", "You retrieve it from a terminal"],
                ["Your local travel", "Usually limited", "Required at both ends"],
                ["Scheduling", "Coordinate directly with the carrier", "Work around terminal procedures and hours"],
                ["Chain of custody", "Usually remains with the transporting driver", "May involve staff, storage, and added handoffs"],
                ["Handling", "Direct carrier handoff", "Additional terminal handling and exposure"],
                ["Crating and forklifts", "Not used by Moto Relay", "May be used by freight-style services"],
                ["Moto Relay", "Service available", "Not offered"],
              ].map(([label, door, depot]) => (
                <tr key={label} className="border-b border-border/70 align-top">
                  <th className="py-3 pr-4 font-semibold text-foreground">{label}</th>
                  <td className="px-4 py-3">{door}</td>
                  <td className="px-4 py-3">{depot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Prepare for a smooth door-to-door pickup
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Confirm the pickup contact, address, and an accessible meeting location.</li>
          <li>Tell the transporter about gates, narrow roads, low trees, or restricted access.</li>
          <li>Make sure the motorcycle rolls and disclose whether it runs.</li>
          <li>Remove or secure loose accessories and personal items.</li>
          <li>Photograph the motorcycle and note its condition before handoff.</li>
          <li>Keep the delivery contact available as the carrier approaches.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Get a door-to-door quote
        </h2>
        <p>
          Your route, timing, vehicle, and choice of open or enclosed equipment all affect the quote. Review our{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost guide
          </Link>{" "}
          and{" "}
          <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
            how the shipping process works
          </Link>{" "}
          before sending your details.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Door-to-door shipping questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="pt-2">
        <Button href="/quote">Request a Door-to-Door Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
