import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { TextQuoteCta } from "@/components/text-quote-cta";

export const metadata: Metadata = {
  title: "Get a Motorcycle & Powersports Shipping Quote",
  description:
    "Request a route-specific quote for door-to-door motorcycle, ATV, UTV or trike shipping across the lower 48 states.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
        Get Your Route-Specific Shipping Quote
      </h1>
      <p className="mt-4 text-center text-muted-foreground">
        Tell us about the actual vehicle and route so Moto Relay can review the equipment, timing, and carrier
        availability your shipment requires.
      </p>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          ["No teaser pricing", "Your quote is based on the actual route and vehicle."],
          ["No payment to ask", "A deposit is not due merely to request or receive a quote."],
          ["Lower 48 service", "Door-to-door transport is available across the contiguous United States."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-border bg-surface p-4">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>
      <div className="mt-8">
        <QuoteForm />
      </div>
      <div className="mt-10">
        <TextQuoteCta />
      </div>

      <section className="mt-12 space-y-4 border-t border-border pt-10">
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
          What happens after you request a quote?
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>Moto Relay reviews the route, vehicle, condition, timing, and transport preference.</li>
          <li>You receive shipment-specific pricing and an estimated pickup and delivery window.</li>
          <li>If you accept, Moto Relay begins matching the shipment with a suitable DOT-authorized carrier.</li>
          <li>The deposit becomes due after the shipment is dispatched.</li>
        </ol>
        <p className="text-muted-foreground">
          Read the complete{" "}
          <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
            quote-to-delivery process
          </Link>{" "}
          or review answers in the{" "}
          <Link href="/motorcycle-shipping-faq" className="font-semibold text-accent hover:underline">
            shipping FAQ
          </Link>
          .
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
          Details that help prevent quote changes
        </h2>
        <p className="text-muted-foreground">
          Provide accurate year, make, model, running and rolling condition, and open or enclosed preference. For
          ATVs, UTVs, trikes, custom motorcycles, and modified vehicles, include finished dimensions, weight when
          known, installed accessories, and anything that may affect loading or clearance in the shipment-notes field.
        </p>
        <p className="text-sm text-muted-foreground">
          Contact information and shipment details are used to respond to the request. See the{" "}
          <Link href="/privacy" className="font-semibold text-accent hover:underline">privacy policy</Link>.
        </p>
      </section>
    </article>
  );
}
