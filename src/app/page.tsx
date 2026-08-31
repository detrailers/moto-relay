import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { QuoteForm } from "@/components/quote-form";
import { site, VEHICLE_TYPES } from "@/lib/site";

export const metadata: Metadata = {
  description: site.description,
  alternates: { canonical: "/" },
};

const VEHICLES: Record<string, { src: string; label: string }> = {
  "motorcycle-shipping": { src: "/images/homepage/motorcycle.png", label: "Motorcycles" },
  "atv-shipping": { src: "/images/homepage/atv.png", label: "ATVs" },
  "utv-shipping": { src: "/images/homepage/utv.png", label: "UTVs" },
  "trike-shipping": { src: "/images/homepage/trike.png", label: "Trikes" },
};

const TRUST = [
  { icon: "▰", title: "Open & Enclosed", sub: "Transport" },
  { icon: "◆", title: "Lower 48", sub: "Nationwide Service" },
  { icon: "▲", title: "Alaska", sub: "Available" },
  { icon: "✦", title: "Real People", sub: "Who Ride" },
];

const STEPS = [
  ["01", "Tell us about your shipment"],
  ["02", "Review your shipping price"],
  ["03", "We arrange the transport"],
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#08090a]">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/moto-relay-motorcycle-shipping-hero.png"
            alt="Motorcycle being loaded into an enclosed transport trailer"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#08090a_0%,rgba(8,9,10,.97)_28%,rgba(8,9,10,.72)_52%,rgba(8,9,10,.08)_82%)]" />
          <div className="texture-diagonal absolute inset-y-0 left-0 w-[56%] opacity-70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08090a] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[560px] max-w-[1380px] items-center px-5 pb-32 pt-14 sm:px-8 lg:min-h-[610px] lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:pb-40 lg:pt-20">
          <div className="max-w-[610px]">
            <div className="mb-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-1 w-14 -skew-x-12 bg-accent" />
              <span className="h-1 w-7 -skew-x-12 bg-accent/70" />
            </div>
            <p className="mb-3 text-xs font-black uppercase tracking-[.28em] text-white/65">By Texas Moto Worx</p>
            <h1 className="font-heading text-[clamp(3.7rem,7vw,7.6rem)] font-black uppercase leading-[.8] tracking-[-.045em] text-white drop-shadow-2xl">
              Nationwide
              <span className="mt-3 block text-accent">Motorcycle</span>
              <span className="block text-accent">Shipping</span>
            </h1>
            <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-white/78 sm:text-xl">
              Specialized transportation for motorcycles, ATVs, UTVs and trikes—across the lower 48, with Alaska service available.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#quote" className="min-w-52 py-4 text-base shadow-[0_12px_35px_rgba(255,106,19,.25)]">Get My Quote</Button>
              <Button href={site.smsHref} variant="secondary" className="min-w-52 border-white/30 bg-black/25 py-4 text-base backdrop-blur">Text for a Quote</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-28 px-4 sm:px-6 lg:-mt-36">
        <div className="mx-auto max-w-6xl" id="quote">
          <QuoteForm heading="Get Your Quote" />
        </div>
      </section>

      <section className="px-4 pb-12 pt-8 sm:px-6 sm:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden border-y border-white/10 bg-[#111316] lg:grid-cols-4">
          {TRUST.map((item, index) => (
            <div key={item.title} className={`flex items-center gap-4 px-4 py-5 sm:px-6 ${index > 0 ? "lg:border-l lg:border-accent/55" : ""}`}>
              <span className="text-2xl text-accent" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="font-heading text-lg font-bold uppercase leading-none text-white">{item.title}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[.18em] text-white/50">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-4 py-12 text-[#121315] sm:px-6 sm:py-16" id="vehicles-we-ship">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[.25em] text-accent">What we move</p>
              <h2 className="mt-2 font-heading text-4xl font-black uppercase leading-none sm:text-6xl">Vehicles We Ship</h2>
            </div>
            <Link href="/motorcycle-shipping" className="hidden text-sm font-black uppercase tracking-wide text-[#121315] sm:block">Explore services <span className="text-accent">→</span></Link>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {VEHICLE_TYPES.map((vehicle) => {
              const card = VEHICLES[vehicle.slug];
              return (
                <Link key={vehicle.slug} href={`/${vehicle.slug}`} className="group relative aspect-[4/3] overflow-hidden bg-black">
                  <Image src={card.src} alt={card.label} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 border-b-4 border-accent p-4 sm:p-5">
                    <p className="font-heading text-xl font-black uppercase text-white sm:text-2xl">{card.label}</p>
                    <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-accent">Shipping →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#111316] px-4 py-12 sm:px-6">
        <div className="texture-diagonal absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="border-l-4 border-accent pl-6">
            <p className="text-xs font-black uppercase tracking-[.26em] text-accent">By Texas Moto Worx</p>
            <h2 className="mt-2 font-heading text-4xl font-black uppercase leading-[.95] text-white sm:text-6xl">Motorcycle People.<br /><span className="text-white/55">Not Just a Shipping Website.</span></h2>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Image src="/images/moto-relay-logo.png" alt="Moto Relay by Texas Moto Worx" width={1746} height={901} className="h-auto w-full max-w-[360px]" />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-2">
            <Link href="/open-vs-enclosed-motorcycle-transport" className="group relative min-h-64 overflow-hidden border border-white/10 bg-[#15171a] p-8">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
              <p className="text-xs font-black uppercase tracking-[.25em] text-accent">Flexible & efficient</p>
              <h3 className="mt-3 font-heading text-5xl font-black uppercase text-white">Open Transport</h3>
              <p className="mt-5 max-w-md text-white/60">A practical shipping option for motorcycles and powersports vehicles.</p>
              <span className="absolute bottom-8 left-8 font-black uppercase tracking-wide text-accent">Learn more →</span>
            </Link>
            <Link href="/open-vs-enclosed-motorcycle-transport" className="group relative min-h-64 overflow-hidden border border-white/10 bg-[#15171a] p-8">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
              <p className="text-xs font-black uppercase tracking-[.25em] text-accent">Added protection</p>
              <h3 className="mt-3 font-heading text-5xl font-black uppercase text-white">Enclosed Transport</h3>
              <p className="mt-5 max-w-md text-white/60">Protection from the road and weather during transport.</p>
              <span className="absolute bottom-8 left-8 font-black uppercase tracking-wide text-accent">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-accent px-4 py-12 text-[#0a0a0b] sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[.28em]">Simple from quote to delivery</p>
          <h2 className="mt-2 font-heading text-4xl font-black uppercase sm:text-6xl">How It Works</h2>
          <ol className="mt-8 grid gap-px bg-black/20 lg:grid-cols-3">
            {STEPS.map(([number, text]) => (
              <li key={number} className="flex min-h-32 items-center gap-5 bg-accent p-6">
                <span className="font-heading text-5xl font-black text-black/25">{number}</span>
                <span className="font-heading text-xl font-black uppercase leading-tight">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative min-h-[440px] overflow-hidden">
        <Image src="/images/homepage/sunset-road-cta.png" alt="Motorcyclist riding on an open road at sunset" fill sizes="100vw" className="object-cover object-[28%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,.35)_45%,rgba(0,0,0,.94)_78%)]" />
        <div className="relative mx-auto flex min-h-[440px] max-w-6xl items-center justify-end px-5 sm:px-8">
          <div className="max-w-lg text-right">
            <p className="text-xs font-black uppercase tracking-[.26em] text-accent">From coast to coast</p>
            <h2 className="mt-3 font-heading text-5xl font-black uppercase leading-[.95] text-white sm:text-7xl">We’ll Get Your Bike There.</h2>
            <div className="mt-7 flex justify-end gap-3">
              <Button href="#quote">Get My Quote</Button>
              <Button href={site.smsHref} variant="secondary" className="border-white/30 bg-black/30">Text Us</Button>
            </div>
            <a href={site.phoneHref} className="mt-5 inline-block text-sm font-bold tracking-wide text-white/70">Call or text {site.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
