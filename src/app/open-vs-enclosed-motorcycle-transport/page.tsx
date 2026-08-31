import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Open vs. Enclosed Motorcycle Transport",
  description:
    "A neutral comparison of open and enclosed motorcycle transport, including the benefits and considerations of each option.",
  alternates: { canonical: "/open-vs-enclosed-motorcycle-transport" },
};

export default function Page() {
  return (
    <ContentPageLayout
      eyebrow="Guide"
      title="Open vs. Enclosed Motorcycle Transport"
      intro="Both options get your bike where it's going. Here's how they differ."
    >
      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">Open transport</h2>
        <p>
          Your motorcycle rides on an open trailer, often alongside other vehicles. It&apos;s a widely used, practical
          option for moving a motorcycle from one place to another.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Vehicle is exposed to road debris and weather during transport</li>
          <li>Loaded and secured alongside other vehicles on the same trailer</li>
          <li>A practical choice for many riders and shipments</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">Enclosed transport</h2>
        <p>
          Your motorcycle rides inside a fully enclosed trailer, shielded from the road and the weather for the
          entire trip.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Protection from road debris, dust, and weather</li>
          <li>Not exposed to the elements during the trip</li>
          <li>A common choice for vehicles that call for extra protection</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Which one is right for you?
        </h2>
        <p>
          Neither option is always the better choice — it depends on your vehicle, your budget, and your own
          preference. If you&apos;re not sure which fits your situation, request pricing for both and decide once you
          can compare them side by side.
        </p>
      </section>

      <div className="pt-2">
        <Button href="/quote">Get Pricing for Both</Button>
      </div>
    </ContentPageLayout>
  );
}
