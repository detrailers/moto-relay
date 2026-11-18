import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Book Your Shipment",
  description: "Complete your accepted Moto Relay motorcycle or powersports shipment booking.",
  robots: { index: false, follow: false },
};

function one(value: string | string[] | undefined) {
  return typeof value === "string" ? value.slice(0, 180) : "";
}

export default async function Page({ searchParams }: PageProps<"/book-shipment">) {
  const query = await searchParams;
  const quoteNumber = one(query.quote);
  const totalPrice = one(query.total).replace(/[^0-9.]/g, "");
  const depositAmount = one(query.deposit).replace(/[^0-9.]/g, "");
  const pickupDate = one(query.pickup);
  const total = Number(totalPrice);
  const deposit = Number(depositAmount);
  const prepared = Boolean(Number.isFinite(total) && Number.isFinite(deposit) && total > 0 && deposit > 0 && deposit <= total);
  const transportType = ["Open", "Enclosed"].includes(one(query.transport)) ? one(query.transport) : "";
  const initialValues = {
    ...(quoteNumber ? { quoteNumber } : {}),
    ...(Number.isFinite(total) && total > 0 ? { totalPrice } : {}),
    ...([195, 245, 295].includes(deposit) ? { depositAmount } : {}),
    ...(pickupDate ? { pickupDate } : {}),
    ...(transportType ? { transportType } : {}),
  };

  return <main className="bg-background px-4 py-14 sm:py-20"><div className="mx-auto max-w-4xl">
    <div className="mb-8 text-center"><p className="text-xs font-black uppercase tracking-[.28em] text-accent">For accepted quotes</p><h1 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">Book Your Shipment</h1><p className="mx-auto mt-4 max-w-2xl text-muted">Complete the transportation details below. Your deposit is processed separately and securely through eProcessing Network.</p></div>
    <BookingForm initialValues={initialValues} prepared={prepared} />
  </div></main>;
}
