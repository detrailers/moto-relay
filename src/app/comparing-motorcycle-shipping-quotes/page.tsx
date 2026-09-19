import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Button } from "@/components/button";

const title = "What Makes a Motorcycle Shipping Quote Realistic?";
const description = "Compare motorcycle shipping quotes with confidence. Learn how carrier acceptance affects price and timing, and what to ask before booking.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/comparing-motorcycle-shipping-quotes" },
  openGraph: { title, description, url: "/comparing-motorcycle-shipping-quotes", type: "article", images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

export default function Page() {
  return (
    <ContentPageLayout eyebrow="Comparing Shipping Quotes" title={title}
      intro="A low quote is only a good deal if your motorcycle gets moved.">
      <section className="space-y-3 rounded-lg border border-border bg-surface p-5"><h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">Price matters. So does getting your vehicle moved.</h2><p>We know cost is a big part of your decision, and we want you to get your motorcycle moved at the best price available. A lower quote can be appealing—but will a carrier accept the job at that price?</p><p>If the price doesn’t attract a carrier, you could end up waiting longer or being asked to pay more. Before you book, make sure you understand what’s behind the number and what happens if no carrier accepts it.</p></section>
      <section className="space-y-3"><h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">A quote and a carrier commitment are different steps</h2><p>When you compare motorcycle shipping quotes, it’s natural to focus on the price. But there’s another question worth asking: has a carrier agreed to transport your motorcycle at that price?</p><p>A quote is an estimate or offer from the company arranging your shipment. Carrier acceptance is a separate step. Until a carrier commits, a low number doesn’t necessarily mean your transportation is arranged.</p><p>Making a shipment available on a shipping network lets carriers consider the job. It does not, by itself, mean that a carrier has accepted it or that pickup is confirmed.</p></section>
      <section className="space-y-3"><h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">Why a low quote can mean a longer wait</h2><p>Carriers decide which vehicles to transport based on their routes, available space, schedules, equipment, and the amount they’ll earn for the trip.</p><p>If your shipment is priced below what available carriers are willing to accept, it may remain listed without attracting a commitment. That can mean waiting longer—or being asked to approve a higher price to get things moving.</p><p>A lower quote isn’t automatically a bad quote, and a higher price alone doesn’t guarantee pickup. The useful comparison is what each price includes, whether a carrier has committed, and how the company handles changes.</p></section>
      <section className="space-y-3"><h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">Ask these questions before choosing a quote</h2><ul className="list-disc space-y-2 pl-5"><li>Has a carrier already accepted my shipment, or are you still looking for one?</li><li>Can the quoted price change, and under what circumstances?</li><li>What happens if no carrier accepts the shipment at this price?</li><li>Is my pickup window an estimate or a confirmed commitment?</li><li>When will I be charged, and what are the cancellation terms?</li></ul></section>
      <section className="space-y-3"><h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">Our approach: price for the move you actually need</h2><p>At Moto Relay, we aim to recommend a realistic price based on your motorcycle, route, and timing—and explain what is confirmed and what is still being arranged.</p><p>Our goal is to help you make an informed decision and get your vehicle moving with clear expectations from the start. Share your pickup and delivery locations, vehicle details, preferred transport type, and timing so we can talk through the options that fit your move.</p></section>
      <section className="space-y-4 border-t border-border pt-6">
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">Comparing quotes? Let’s talk through your move.</h2>
        <p>We’ll help you understand your route, timing, and what each offer actually promises.</p>
        <Button href="/quote">Request My Shipping Quote</Button>
        <p>For more detail, read our <Link href="/motorcycle-shipping-cost" className="font-semibold text-accent hover:underline">shipping cost guide</Link> or explore <Link href="/motorcycle-shipping-guides" className="font-semibold text-accent hover:underline">all shipping guides</Link>.</p>
      </section>
    </ContentPageLayout>
  );
}
