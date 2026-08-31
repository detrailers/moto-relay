import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Motorcycle Shipping Buyer's Guide",
  description: "What to know before you ship a motorcycle.",
  alternates: { canonical: "/motorcycle-shipping-buyers-guide" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Guide"
      title="Motorcycle Shipping Buyer's Guide"
      intro="What to know before you ship a motorcycle."
    />
  );
}
