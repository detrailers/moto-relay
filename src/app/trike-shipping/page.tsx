import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { VehicleServiceBody } from "@/components/vehicle-service-body";

export const metadata: Metadata = {
  title: "Trike Shipping",
  description:
    "Open and enclosed trike shipping across the lower 48 United States. Running and non-running trikes accepted. Request a free quote.",
  alternates: { canonical: "/trike-shipping" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="Trike Shipping"
      intro="Nationwide trike shipping — open and enclosed transport, across the lower 48."
    >
      <VehicleServiceBody vehicleLabel="trike" vehiclePlural="trikes" slug="trike-shipping" />
    </ContentPageLayout>
  );
}
