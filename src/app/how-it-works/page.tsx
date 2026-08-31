import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How motorcycle and powersports shipping works, from quote to delivery.",
  alternates: { canonical: "/how-it-works" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Process"
      title="How It Works"
      intro="How motorcycle and powersports shipping works, from quote to delivery."
    />
  );
}
