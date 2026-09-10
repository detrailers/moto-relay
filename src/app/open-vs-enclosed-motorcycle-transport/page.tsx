import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Open vs. Enclosed Motorcycle Transport",
  description:
    "Compare open and enclosed motorcycle transport, including weather exposure, trailer fit, vehicle types, route-specific pricing, and when each option makes sense.",
  alternates: { canonical: "/open-vs-enclosed-motorcycle-transport" },
};

const FAQS = [
  {
    question: "Is enclosed motorcycle transport always better than open transport?",
    answer:
      "No. Enclosed transport adds protection from weather and road debris, but open transport is practical for many motorcycles and routes. The better choice depends on the vehicle, priorities, dimensions, route, equipment availability, and quote.",
  },
  {
    question: "Is open motorcycle transport safe?",
    answer:
      "Open transport is a widely used option for vehicle shipping. The motorcycle is loaded and secured to suitable transport equipment, but it remains exposed to weather, dust, and road debris during the trip.",
  },
  {
    question: "Does enclosed motorcycle shipping cost more?",
    answer:
      "It can, but Moto Relay does not publish a universal price difference. The route, timing, vehicle dimensions, equipment, and current carrier availability determine the actual open and enclosed quotes.",
  },
  {
    question: "Can ATVs, UTVs, and trikes use enclosed transport?",
    answer:
      "Enclosed transport may be available when the vehicle's exact length, width, height, weight, and ground clearance fit suitable equipment. Tall or wide UTVs, modified ATVs, and trikes may not fit every enclosed trailer.",
  },
  {
    question: "Can Moto Relay quote both open and enclosed transport?",
    answer:
      "Yes. When either option could work for the vehicle and route, request both so you can compare shipment-specific pricing and availability.",
  },
];

const COMPARISON = [
  ["Trailer", "Open to the outside", "Fully covered"],
  ["Weather and road debris", "Vehicle remains exposed", "Vehicle is shielded during transit"],
  ["Vehicle fit", "Practical for many motorcycles and powersports vehicles", "Door opening, interior height, width, and ramp clearance must fit"],
  ["Availability", "Depends on route and suitable carrier equipment", "Depends on route and suitable enclosed equipment"],
  ["Pricing", "Quoted for the actual shipment", "Quoted for the actual shipment"],
  ["Moto Relay service", "Door-to-door; no depots or crates", "Door-to-door; no depots or crates"],
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
      eyebrow="Transport Guide"
      title="Open vs. Enclosed Motorcycle Transport"
      intro="Both can provide door-to-door transportation. The difference is exposure, equipment fit, availability, and what matters most for your vehicle."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          The short answer
        </h2>
        <p>
          Open transport carries the motorcycle on a trailer exposed to the outside. Enclosed transport carries it
          inside a covered trailer that shields it from weather and road debris. Enclosed service adds protection,
          while open service remains a practical option for many motorcycles and powersports vehicles.
        </p>
        <p>
          Neither method is automatically the right choice for every shipment. Moto Relay can quote open transport,
          enclosed transport, or both when the vehicle and route allow, so you can compare actual options instead of
          relying on a generic recommendation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open motorcycle transport
        </h2>
        <p>
          With open transport, the motorcycle rides on an open trailer and may travel alongside other vehicles. It is
          loaded and secured for transportation but remains exposed to weather, dust, insects, and road debris during
          the trip.
        </p>
        <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">When open transport may fit</h3>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>You are comfortable with normal outdoor exposure during transportation.</li>
          <li>The motorcycle or powersports vehicle fits the available open equipment.</li>
          <li>You want to compare a practical open option with enclosed service.</li>
          <li>Suitable open equipment and carrier coverage are available for the route.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Enclosed motorcycle transport
        </h2>
        <p>
          With enclosed transport, the vehicle travels inside a fully covered trailer and is shielded from weather and
          road debris. Riders often consider it for custom, collectible, restored, or high-value motorcycles, although
          the decision is based on personal priorities rather than a rule that every such motorcycle must be enclosed.
        </p>
        <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">
          When enclosed transport may fit
        </h3>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Protection from weather and road debris is a high priority.</li>
          <li>The vehicle fits the trailer opening, interior dimensions, ramp, and clearance.</li>
          <li>Suitable enclosed equipment is available for the route and timing.</li>
          <li>The shipment-specific enclosed quote fits your transportation priorities.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open and enclosed transport compared
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-foreground">
                <th className="py-3 pr-4 font-heading uppercase tracking-wide">Consideration</th>
                <th className="px-4 py-3 font-heading uppercase tracking-wide">Open transport</th>
                <th className="px-4 py-3 font-heading uppercase tracking-wide">Enclosed transport</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([label, open, enclosed]) => (
                <tr key={label} className="border-b border-border/70 align-top">
                  <th className="py-3 pr-4 font-semibold text-foreground">{label}</th>
                  <td className="px-4 py-3">{open}</td>
                  <td className="px-4 py-3">{enclosed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Trailer fit matters for ATVs, UTVs, and trikes
        </h2>
        <p>
          Enclosed equipment must accommodate the finished vehicle—not just a base-model specification. Overall
          length, width, height, weight, ground clearance, and loading angle can determine whether a machine fits the
          trailer opening and interior space.
        </p>
        <p>
          Roofs, windshields, enclosed cabs, racks, winches, plows, oversized tires, suspension lifts, conversion kits,
          running boards, trunks, and other additions must be included in the measurements. See the dedicated{" "}
          <Link href="/atv-shipping" className="font-semibold text-accent hover:underline">ATV</Link>,{" "}
          <Link href="/utv-shipping" className="font-semibold text-accent hover:underline">UTV and side-by-side</Link>,
          and{" "}
          <Link href="/trike-shipping" className="font-semibold text-accent hover:underline">trike</Link>{" "}
          shipping guides.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          How open and enclosed pricing works
        </h2>
        <p>
          Moto Relay does not publish a universal price difference between open and enclosed transport. The actual
          route, vehicle, condition, dimensions, timing, access, equipment, and current carrier availability determine
          each quote. Enclosed service may price differently, but a generic national figure cannot reliably describe
          a specific shipment.
        </p>
        <p>
          Read the full{" "}
          <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">
            motorcycle shipping cost guide
          </Link>{" "}
          or request both options when either could work.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Door-to-door with either option
        </h2>
        <p>
          Moto Relay arranges door-to-door service for both open and enclosed shipments. We do not use
          depot-to-depot shipping and do not crate vehicles for warehouse or forklift handling. Pickup and delivery
          are coordinated as close to the requested addresses as the carrier can safely and legally reach.
        </p>
        <p>
          Learn more about direct service in the{" "}
          <Link href="/door-to-door-vs-depot-motorcycle-transport" className="font-semibold text-accent hover:underline">
            door-to-door vs. depot-to-depot motorcycle transport guide
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Details to provide before comparing quotes
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Pickup and delivery ZIP codes or cities</li>
          <li>Vehicle year, make, model, and type</li>
          <li>Whether it runs, steers, brakes, and rolls freely</li>
          <li>Finished length, width, height, weight, and ground clearance when relevant</li>
          <li>Installed accessories, modifications, or special loading concerns</li>
          <li>Preferred timing and any pickup or delivery access restrictions</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open and enclosed transport questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <div className="space-y-3 pt-2">
        <p>
          Review Moto Relay&apos;s{" "}
          <Link href="/motorcycle-shipping" className="font-semibold text-accent hover:underline">
            door-to-door motorcycle shipping service
          </Link>{" "}
          and{" "}
          <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
            complete shipping process
          </Link>.
        </p>
        <Button href="/quote">Compare Open and Enclosed Quotes</Button>
      </div>
    </ContentPageLayout>
  );
}
