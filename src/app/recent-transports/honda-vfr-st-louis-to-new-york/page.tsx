import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

const path = "/recent-transports/honda-vfr-st-louis-to-new-york";

export const metadata: Metadata = {
  title: "Honda VFR Transport: St. Louis to New York",
  description:
    "Crystal's experience shipping her Honda VFR motorcycle from St. Louis to New York with Moto Relay after a previous transport damage and insurance problem.",
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    images: ["/images/recent-transports/honda-vfr-st-louis-to-new-york.jpg"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Honda VFR Motorcycle Transport from St. Louis to New York",
    description:
      "A real Moto Relay customer story about shipping a cherished Honda VFR from St. Louis to New York after a difficult previous transport experience.",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    mainEntityOfPage: `${site.url}${path}`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    image: [`${site.url}/images/recent-transports/honda-vfr-st-louis-to-new-york.jpg`],
    about: ["Honda VFR", "Motorcycle shipping", "St. Louis", "New York"],
  };

  return (
    <ContentPageLayout
      eyebrow="Customer Story · St. Louis to New York"
      title="Crystal’s Honda VFR Shipped to New York"
      intro="After a damaging experience with a previous transporter, Crystal wanted responsive communication and confirmation of motorcycle insurance coverage before entrusting her Honda VFR to another shipment."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <figure className="space-y-2">
        <Image
          src="/images/recent-transports/honda-vfr-st-louis-to-new-york.jpg"
          alt="Crystal's red Honda VFR motorcycle secured inside the transport trailer"
          width={1800}
          height={1350}
          className="aspect-[4/3] w-full rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
        <figcaption className="text-sm">Crystal&apos;s Honda VFR secured inside the transport trailer.</figcaption>
      </figure>

      <section className="grid gap-3 rounded-lg border border-border bg-surface p-6 sm:grid-cols-2">
        <div><span className="font-semibold text-foreground">Customer:</span> Crystal</div>
        <div><span className="font-semibold text-foreground">Motorcycle:</span> Honda VFR</div>
        <div><span className="font-semibold text-foreground">Origin:</span> St. Louis</div>
        <div><span className="font-semibold text-foreground">Destination:</span> New York</div>
        <div><span className="font-semibold text-foreground">Priority:</span> Insurance confirmation</div>
        <div><span className="font-semibold text-foreground">Result:</span> Timely pickup and delivery</div>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          A motorcycle she travels with and loves
        </h2>
        <p>
          Crystal bought her Honda VFR new and describes it as a motorcycle she absolutely loves. Because she travels
          frequently for work, she ships the bike to places where she expects to stay for a considerable amount of
          time. That has given her experience with multiple motorcycle shipments—and not all of them have gone well.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          A previous transport left her cautious
        </h2>
        <p>
          According to Crystal, her motorcycle was damaged during a prior shipment with another company. The situation
          became more difficult when she tried to have the damage addressed. She says the insurer told her the policy
          did not provide coverage for motorcycles, despite what she believed she had been told before transport.
        </p>
        <p>
          Crystal reports paying a little over $2,000 out of pocket for the repairs. That experience understandably
          made her hesitant when she later needed to move her VFR from St. Louis to New York.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Responsive communication and insurance documentation
        </h2>
        <p>
          Crystal found Moto Relay and submitted a quote request. She says the response was quick and that she was told
          she could call and speak with a real person whenever she needed help. After she explained the prior damage
          experience, Moto Relay also committed to verifying the independently assigned carrier&apos;s insurance coverage
          before pickup.
        </p>
        <p>
          The assigned carrier&apos;s licensing, insurance, and applicable USDOT or MC information can be provided directly
          to a Moto Relay customer. The insurance documentation should be reviewed for the actual carrier and shipment;
          a general statement that a company “has insurance” is not a substitute for the relevant policy information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Timely pickup and delivery in New York
        </h2>
        <p>
          Crystal booked after the initial conversation gave her confidence in the process. She reports that the VFR
          was picked up in a timely manner and delivered within the quoted delivery window. The motorcycle arrived in
          New York, and she was very happy with how the shipment went.
        </p>
      </section>

      <blockquote className="space-y-3 rounded-lg border-l-4 border-accent bg-surface p-6 text-lg italic text-foreground">
        <p>
          “Today my bike is comfortably in New York, and I am so happy with how the shipment went. I will be using Moto
          Relay from now on.”
        </p>
        <footer className="text-sm not-italic text-muted-foreground">— Crystal, Honda VFR owner</footer>
      </blockquote>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Sharing Moto Relay with fellow riders
        </h2>
        <p>
          Crystal belongs to a small motorcycle club and has shared Moto Relay&apos;s information with fellow members. She
          says the feedback she hears from them has also been positive.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What riders can learn from Crystal&apos;s experience
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Ask for the assigned carrier&apos;s insurance documentation rather than relying only on a verbal statement.</li>
          <li>Confirm that the documentation applies to the carrier and type of vehicle being transported.</li>
          <li>Photograph the motorcycle carefully before pickup and review its documented condition.</li>
          <li>Keep written transport terms and carrier information with the shipment records.</li>
          <li>Choose a company that remains reachable when questions arise.</li>
        </ul>
        <p>
          For more questions to ask before booking, use our{" "}
          <Link href="/motorcycle-shipping-buyers-guide" className="font-semibold text-accent hover:underline">
            motorcycle shipping buyer&apos;s guide
          </Link>, our{" "}
          <Link href="/motorcycle-shipping-insurance" className="font-semibold text-accent hover:underline">
            motorcycle shipping insurance guide
          </Link>,{" "}
          and our{" "}
          <Link href="/prepare-motorcycle-for-shipping" className="font-semibold text-accent hover:underline">
            motorcycle preparation checklist
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Planning a long-distance motorcycle shipment?
        </h2>
        <p>
          Moto Relay arranges door-to-door motorcycle transport across the lower 48 United States. Share the actual
          route, motorcycle, condition, timing, and preference for open, enclosed, or both. Review our{" "}
          <Link href="/cross-country-motorcycle-shipping" className="font-semibold text-accent hover:underline">
            cross-country motorcycle shipping guide
          </Link>{" "}
          for long-distance planning details.
        </p>
      </section>

      <div className="space-y-3 pt-2">
        <p>Tell Moto Relay about your motorcycle and route for a shipment-specific quote.</p>
        <Button href="/quote">Request My Motorcycle Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
