import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { VehicleServiceBody } from "@/components/vehicle-service-body";

export const metadata: Metadata = {
  title: "ATV Shipping",
  description:
    "Open and enclosed ATV shipping across the lower 48 United States. Running and non-running ATVs accepted. Request a free quote.",
  alternates: { canonical: "/atv-shipping" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="ATV Shipping"
      intro="Nationwide ATV shipping — open and enclosed transport, across the lower 48."
    >
      <VehicleServiceBody vehicleLabel="ATV" vehiclePlural="ATVs" />
    </ContentPageLayout>
  );
}
