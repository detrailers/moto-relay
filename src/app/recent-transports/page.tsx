import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Recent Motorcycle & Powersports Transports",
  description:
    "Real Moto Relay motorcycle and powersports transport stories, including routes, vehicle requirements, equipment choices, and delivery results.",
  alternates: { canonical: "/recent-transports" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Real Shipment Stories"
      title="Recent Moto Relay Transports"
      intro="Actual shipment stories showing how the vehicle, route, equipment, and customer’s priorities shape each transport plan."
      reviewed
    >
      <section className="rounded-lg border border-border bg-surface p-6">
        <Image
          src="/images/recent-transports/1974-suzuki-gt750-enclosed-side.jpg"
          alt="Restored blue 1974 Suzuki GT750 secured inside an enclosed motorcycle carrier"
          width={1800}
          height={1013}
          className="mb-6 aspect-video w-full rounded-md object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <p className="text-xs font-bold uppercase tracking-widest text-accent">Corinth, Texas to Glendale, Arizona</p>
        <h2 className="mt-2 font-heading text-xl font-bold uppercase tracking-wide text-foreground">
          Fully Restored 1974 Suzuki GT750 Shipped Enclosed
        </h2>
        <p className="mt-3">
          This rare, fully restored motorcycle required careful handling and enclosed transportation. Loading and
          unloading went smoothly, and the customer was delighted with the delivery.
        </p>
        <Link
          href="/recent-transports/1974-suzuki-gt750-corinth-to-glendale"
          className="mt-4 inline-block font-semibold text-accent hover:underline"
        >
          Read the shipment story →
        </Link>
      </section>

      <div className="space-y-3 pt-2">
        <p>Have a restored, collector, or unusual motorcycle to move? Tell us about the vehicle and route.</p>
        <Button href="/quote">Request My Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
