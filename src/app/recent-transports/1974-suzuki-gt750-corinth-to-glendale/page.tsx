import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

const path = "/recent-transports/1974-suzuki-gt750-corinth-to-glendale";

export const metadata: Metadata = {
  title: "1974 Suzuki GT750 Transport: Texas to Arizona",
  description:
    "How Moto Relay arranged enclosed transportation for a rare, fully restored 1974 Suzuki GT750 from Corinth, Texas to Glendale, Arizona.",
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    images: ["/images/recent-transports/1974-suzuki-gt750-enclosed-side.jpg"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "1974 Suzuki GT750 Enclosed Transport from Texas to Arizona",
    description:
      "A real Moto Relay shipment story about enclosed transportation for a fully restored 1974 Suzuki GT750.",
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    mainEntityOfPage: `${site.url}${path}`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    image: [
      `${site.url}/images/recent-transports/1974-suzuki-gt750-enclosed-side.jpg`,
      `${site.url}/images/recent-transports/1974-suzuki-gt750-enclosed-rear.jpg`,
    ],
    about: ["Motorcycle shipping", "Enclosed motorcycle transport", "1974 Suzuki GT750"],
  };

  return (
    <ContentPageLayout
      eyebrow="Recent Transport · Corinth, Texas to Glendale, Arizona"
      title="A Rare 1974 Suzuki GT750 Shipped Enclosed"
      intro="This completely restored motorcycle called for careful handling and protection throughout its interstate trip."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <figure className="space-y-2">
        <Image
          src="/images/recent-transports/1974-suzuki-gt750-enclosed-side.jpg"
          alt="Side view of the restored blue 1974 Suzuki GT750 secured inside an enclosed motorcycle carrier"
          width={1800}
          height={1013}
          className="aspect-video w-full rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
        <figcaption className="text-sm">The restored GT750 secured inside the enclosed carrier.</figcaption>
      </figure>

      <section className="grid gap-3 rounded-lg border border-border bg-surface p-6 sm:grid-cols-2">
        <div><span className="font-semibold text-foreground">Vehicle:</span> 1974 Suzuki GT750</div>
        <div><span className="font-semibold text-foreground">Condition:</span> Fully restored</div>
        <div><span className="font-semibold text-foreground">Origin:</span> Corinth, Texas</div>
        <div><span className="font-semibold text-foreground">Destination:</span> Glendale, Arizona</div>
        <div><span className="font-semibold text-foreground">Equipment:</span> Enclosed carrier</div>
        <div><span className="font-semibold text-foreground">Result:</span> Smooth loading and delivery</div>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Why enclosed transport was selected
        </h2>
        <p>
          The Suzuki GT750 was both rare and completely restored. Protecting its finish and condition was the
          customer’s priority, so Moto Relay arranged enclosed transportation for the trip from Corinth to Glendale.
          The vehicle and route—not a generic one-size-fits-all rule—guided that equipment choice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Careful pickup and delivery
        </h2>
        <p>
          The independently assigned carrier handled the motorcycle’s physical pickup, securement, transportation,
          and delivery. Loading and unloading both went smoothly, which was especially important for a restored
          collector motorcycle.
        </p>
        <figure className="space-y-2 pt-2">
          <Image
            src="/images/recent-transports/1974-suzuki-gt750-enclosed-rear.jpg"
            alt="Rear view of the restored Suzuki GT750 secured for enclosed transportation"
            width={1800}
            height={1013}
            className="aspect-video w-full rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption className="text-sm">A second view of the motorcycle inside the enclosed trailer.</figcaption>
        </figure>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          A delighted customer
        </h2>
        <p>
          The customer was so pleased with the completed delivery that he voluntarily tipped the driver $50. Tipping
          is never required; the gesture simply reflected how happy he was with the care and service provided.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Planning a collector-motorcycle shipment?
        </h2>
        <p>
          Share the motorcycle’s year, make, model, condition, modifications, route, timing, and transport preference.
          Moto Relay will review the actual shipment and discuss suitable options. You can also compare equipment in
          our{" "}
          <Link href="/open-vs-enclosed-motorcycle-transport" className="font-semibold text-accent hover:underline">
            open versus enclosed motorcycle transport guide
          </Link>
          .
        </p>
      </section>

      <div className="space-y-3 pt-2">
        <p>Tell Moto Relay about your motorcycle and route for a shipment-specific quote.</p>
        <Button href="/quote">Request My Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
