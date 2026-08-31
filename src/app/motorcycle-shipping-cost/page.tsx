import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Motorcycle Shipping Cost",
  description: "What motorcycle shipping costs and what affects the price.",
  alternates: { canonical: "/motorcycle-shipping-cost" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Pricing"
      title="Motorcycle Shipping Cost"
      intro="What motorcycle shipping costs and what affects the price."
    />
  );
}
