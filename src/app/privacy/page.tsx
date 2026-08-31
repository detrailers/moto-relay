import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Moto Relay handles your information.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How Moto Relay handles your information."
    />
  );
}
