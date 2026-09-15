import type { Metadata } from "next";
import { BookingLinkGenerator } from "@/components/booking-link-generator";

export const metadata: Metadata = {
  title: "Create a Booking Link",
  description: "Prepare a personalized Moto Relay customer booking link.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <main className="bg-background px-4 py-14 sm:py-20"><div className="mx-auto max-w-3xl">
    <div className="mb-8 text-center">
      <p className="text-xs font-black uppercase tracking-[.28em] text-accent">Moto Relay office tool</p>
      <h1 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">Create a Booking Link</h1>
      <p className="mx-auto mt-4 max-w-2xl text-muted">Set the accepted quote and deposit, then copy the personalized link to text or email your customer.</p>
    </div>
    <BookingLinkGenerator />
  </div></main>;
}
