import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "Open vs. Enclosed Motorcycle Transport",
  description: "Choosing between open and enclosed motorcycle transport.",
  alternates: { canonical: "/open-vs-enclosed-motorcycle-transport" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Guide"
      title="Open vs. Enclosed Motorcycle Transport"
      intro="Choosing between open and enclosed motorcycle transport."
    />
  );
}
