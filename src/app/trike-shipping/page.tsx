import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Trike Shipping",
  description: "Nationwide trike shipping — open and enclosed transport.",
  alternates: { canonical: "/trike-shipping" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="Trike Shipping"
      intro="Nationwide trike shipping — open and enclosed transport."
    />
  );
}
