import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Moto Relay website and services.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Legal"
      title="Terms of Service"
      intro="Terms governing use of the Moto Relay website and services."
    />
  );
}
