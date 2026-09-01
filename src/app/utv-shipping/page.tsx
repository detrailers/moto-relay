import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { VehicleServiceBody } from "@/components/vehicle-service-body";

export const metadata: Metadata = {
  title: "UTV Shipping",
  description:
    "Open and enclosed UTV shipping across the lower 48 United States. Running and non-running UTVs accepted. Request a free quote.",
  alternates: { canonical: "/utv-shipping" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="UTV Shipping"
      intro="Nationwide UTV shipping — open and enclosed transport, across the lower 48."
    >
      <VehicleServiceBody vehicleLabel="UTV" vehiclePlural="UTVs" slug="utv-shipping" />
    </ContentPageLayout>
  );
}
