import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "ATV Shipping",
  description: "Nationwide ATV shipping — open and enclosed transport.",
  alternates: { canonical: "/atv-shipping" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="ATV Shipping"
      intro="Nationwide ATV shipping — open and enclosed transport."
    />
  );
}
