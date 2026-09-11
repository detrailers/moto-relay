import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ContentPageLayout } from "@/components/content-page-layout";
import { site } from "@/lib/site";

const path = "/motorcycle-shipping-insurance";

export const metadata: Metadata = {
  title: "Motorcycle Shipping Insurance: What to Verify",
  description:
    "Before motorcycle pickup, learn how to review the assigned carrier, insurance documentation, cargo coverage, exclusions, condition records, and damage procedures.",
  alternates: { canonical: path },
};

const FAQS = [
  {
    question: "Does every motorcycle transporter have cargo insurance?",
    answer:
      "Do not assume so. FMCSA states that federal cargo-insurance filing requirements generally apply to household-goods carriers and household-goods freight forwarders, not most for-hire property carriers. Ask for the assigned carrier's current insurance documentation and confirm that the policy applies to motorcycles and the planned shipment.",
  },
  {
    question: "Is an active USDOT or MC number proof that my motorcycle is covered?",
    answer:
      "No. An official carrier record helps verify identity, authority, and publicly available safety information, but it does not by itself prove that a particular motorcycle or type of damage is covered by a cargo policy. Review the actual insurance information for the assigned carrier.",
  },
  {
    question: "What insurance details should I check before motorcycle pickup?",
    answer:
      "Check the named insured, insurer, policy number, effective and expiration dates, coverage type, limits, deductible, exclusions, and claim-reporting instructions. Ask whether motorcycles and the specific transport equipment and operation are covered, and contact the listed insurance representative if clarification is needed.",
  },
  {
    question: "What should I do if I see damage at delivery?",
    answer:
      "Do not ignore it. Photograph the motorcycle before it is moved further, compare it with the pickup records, note the damage on the delivery condition documentation, retain copies, and promptly follow the written claim-reporting instructions provided for the shipment.",
  },
  {
    question: "Does Moto Relay physically transport the motorcycle?",
    answer:
      "Physical pickup, loading, securement, transit, unloading, and delivery are handled by the independently assigned carrier. That carrier's licensing, insurance, and applicable USDOT or MC information can be provided directly to the customer.",
  },
];

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Motorcycle Shipping Insurance: What to Verify Before Pickup",
    description:
      "A practical guide to reviewing carrier identity, motorcycle cargo coverage, exclusions, condition documentation, and damage procedures before transport.",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    mainEntityOfPage: `${site.url}${path}`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    about: ["Motorcycle shipping insurance", "Cargo insurance", "Motor carrier verification"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <ContentPageLayout
      eyebrow="Before-You-Ship Guide"
      title="Motorcycle Shipping Insurance: What to Verify Before Pickup"
      intro="“We have insurance” is not enough information. Review the assigned carrier, the actual insurance documentation, and whether the coverage applies to motorcycles before pickup."
      reviewed
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="space-y-3 rounded-md border border-border bg-surface p-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">The short answer</h2>
        <p>
          Before pickup, ask for the independently assigned carrier&apos;s current insurance information. Confirm that
          the named insured matches the carrier, the dates are current, and the relevant coverage applies to
          motorcycles. Review limits, deductibles, exclusions, and claim instructions instead of relying only on a
          verbal statement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Public liability and cargo coverage are not the same
        </h2>
        <p>
          FMCSA financial-responsibility requirements vary by entity, operating authority, cargo, and vehicle type.
          Public-liability coverage addresses bodily injury, property damage, and environmental restoration—not
          automatically damage to the motorcycle being transported.
        </p>
        <p>
          FMCSA states that federal cargo-insurance filing requirements generally apply to household-goods carriers and
          household-goods freight forwarders. Most for-hire property carriers are not required to file cargo insurance
          with FMCSA. Therefore, an active federal record should not be treated as proof that a motorcycle is covered
          for cargo loss or damage.
        </p>
        <p>
          Review the official{" "}
          <a
            href="https://www.fmcsa.dot.gov/registration/insurance-filing-requirements"
            className="font-semibold text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            FMCSA insurance filing requirements
          </a>{" "}
          and its explanation of{" "}
          <a
            href="https://www.fmcsa.dot.gov/faq/who-required-carry-cargo-insurance"
            className="font-semibold text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            who must carry federally filed cargo insurance
          </a>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Verify the assigned carrier&apos;s identity first
        </h2>
        <p>
          The company physically handling the motorcycle should match the carrier shown on the shipment and insurance
          documents. Compare the legal name, USDOT number, MC number when applicable, address, and contact details. A
          similarly named company or document issued to a different business is not the same carrier.
        </p>
        <p>
          FMCSA&apos;s free SAFER Company Snapshot can be searched by company name, USDOT number, or MC number and shows
          identification, operating information, cargo categories, inspection information, and available safety data.
          Use the official{" "}
          <a
            href="https://www.fmcsa.dot.gov/safety/company-safety-records"
            className="font-semibold text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            FMCSA company safety records page
          </a>{" "}
          rather than an unofficial look-alike website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Insurance questions to answer before pickup
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Does the named insured exactly match the assigned carrier?</li>
          <li>Are the policy effective and expiration dates current for the transport dates?</li>
          <li>Does the coverage apply to motorcycles transported as cargo?</li>
          <li>Are the specific vehicle, trailer, and operation covered when required by the policy?</li>
          <li>What is the coverage limit per occurrence, vehicle, or shipment?</li>
          <li>What deductible could apply, and who is responsible for it?</li>
          <li>Are there exclusions for certain vehicle types, causes of loss, loading, unloading, or unattended storage?</li>
          <li>Are special-value declarations or advance documentation required?</li>
          <li>Who must be contacted, and how quickly, if damage is discovered?</li>
        </ul>
        <p>
          A certificate or summary is evidence of information in effect when issued; it is not a replacement for the
          policy terms. If an answer matters to your decision, request clarification from the insurance representative
          identified on the document and retain the response.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Document motorcycle condition carefully
        </h2>
        <p>
          Insurance review and condition documentation work together. Before pickup, clean the motorcycle enough for
          its condition to be visible and photograph every side in good light. Add close views of the paint, chrome,
          wheels, seat, fairings, exhaust, windscreen, accessories, and every existing mark.
        </p>
        <p>
          Review the pickup condition record before the motorcycle leaves and keep your own copy. At delivery, compare
          the motorcycle with the pickup photographs before it is moved further. Follow the full{" "}
          <Link href="/prepare-motorcycle-for-shipping" className="font-semibold text-accent hover:underline">
            motorcycle preparation checklist
          </Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          If damage is discovered at delivery
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Photograph the condition immediately from wide and close angles.</li>
          <li>Compare the motorcycle with the pickup photographs and condition record.</li>
          <li>Note the observed damage on the delivery documentation before signing when possible.</li>
          <li>Keep copies of shipment records, photographs, communications, estimates, and receipts.</li>
          <li>Promptly follow the written notice and claim instructions provided for the shipment.</li>
        </ol>
        <p>
          Do not make unnecessary repairs or discard damaged parts before learning what documentation or inspection the
          claim process requires, except when immediate action is reasonably necessary to prevent further damage or
          address safety.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          How Moto Relay handles carrier information
        </h2>
        <p>
          Physical pickup, loading, securement, transit, unloading, and delivery are handled by the independently
          assigned carrier. That carrier&apos;s licensing, insurance, and applicable USDOT or MC information can be
          provided directly to the customer. Customers should review the documents and ask questions before pickup.
        </p>
        <p>
          Crystal&apos;s real experience shows why this matters. After she reported paying more than $2,000 for damage from
          a prior shipment when the other transporter&apos;s insurance did not respond as she expected, carrier insurance
          confirmation became a priority for her next move. Read the{" "}
          <Link href="/recent-transports/honda-vfr-st-louis-to-new-york" className="font-semibold text-accent hover:underline">
            Honda VFR transport story
          </Link>.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Motorcycle shipping insurance questions
        </h2>
        {FAQS.map((item) => (
          <div key={item.question} className="space-y-1.5">
            <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <aside className="rounded-md border border-border p-5 text-sm">
        This page provides general educational information, not legal, insurance, or claims advice. Policy terms and
        circumstances vary. Read the applicable documents and consult the insurer or a qualified professional about
        your specific situation.
      </aside>

      <div className="space-y-3 pt-2">
        <p>
          Review our{" "}
          <Link href="/motorcycle-shipping-buyers-guide" className="font-semibold text-accent hover:underline">
            motorcycle shipping buyer&apos;s guide
          </Link>, then send the actual route and motorcycle details for a shipment-specific quote.
        </p>
        <Button href="/quote">Request My Motorcycle Shipping Quote</Button>
      </div>
    </ContentPageLayout>
  );
}
