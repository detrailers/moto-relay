import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Motorcycle Shipping",
  description: "Nationwide motorcycle shipping — open and enclosed transport.",
  alternates: { canonical: "/motorcycle-shipping" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="Motorcycle Shipping"
      intro="Nationwide motorcycle shipping — open and enclosed transport."
    />
  );
}
