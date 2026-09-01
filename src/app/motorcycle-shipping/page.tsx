import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { VehicleServiceBody } from "@/components/vehicle-service-body";

export const metadata: Metadata = {
  title: "Motorcycle Shipping",
  description:
    "Open and enclosed motorcycle shipping across the lower 48 United States. Running and non-running motorcycles accepted. Request a free quote.",
  alternates: { canonical: "/motorcycle-shipping" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="Motorcycle Shipping"
      intro="Nationwide motorcycle shipping — open and enclosed transport, across the lower 48."
    >
      <VehicleServiceBody vehicleLabel="motorcycle" vehiclePlural="motorcycles" slug="motorcycle-shipping" />
    </ContentPageLayout>
  );
}
