import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "UTV Shipping",
  description: "Nationwide UTV shipping — open and enclosed transport.",
  alternates: { canonical: "/utv-shipping" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Shipping Services"
      title="UTV Shipping"
      intro="Nationwide UTV shipping — open and enclosed transport."
    />
  );
}
