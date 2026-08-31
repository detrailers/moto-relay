// Central site configuration: brand identity, navigation, and route registry.
// Keep marketing copy here limited to owner-approved lines — this file backs
// metadata, schema and shared components, so anything added here is treated
// as a real, published claim.

// Prefilled SMS body for every "Text for a Quote" CTA. Keep this to the
// blank template only — no marketing copy in the message body.
const SMS_PREFILL = `Hi, I'd like a Moto Relay shipping quote.

Pickup:
Delivery:
Year/Make/Model:
Open / Enclosed / Both:
Runs:
Rolls:`;

export const site = {
  name: "Moto Relay",
  parentCompany: "Texas Moto Worx",
  domain: "motorelaytransport.com",
  url: "https://www.motorelaytransport.com",
  // Approved primary positioning line — used for the homepage <title> and as
  // the sitewide default title fallback.
  positioning: "Nationwide Motorcycle & Powersports Shipping",
  // Placeholder-quality description only. Not final marketing copy — flagged
  // for owner review before this goes live.
  description:
    "Specialized transportation for motorcycles, ATVs, UTVs and trikes across the lower 48, with Alaska service available.",
  // Single source of truth for the owner-approved phone number. Every
  // component that calls/texts reads from here.
  phone: "(940) 268-1060",
  phoneHref: "tel:+19402681060",
  smsHref: `sms:+19402681060?body=${encodeURIComponent(SMS_PREFILL)}`,
};

export type VehicleType = {
  slug: string;
  label: string;
};

// Backs the "Vehicles We Ship" cards, the quote form's vehicle-type field,
// and the header's "Shipping Services" dropdown.
export const VEHICLE_TYPES: VehicleType[] = [
  { slug: "motorcycle-shipping", label: "Motorcycle Shipping" },
  { slug: "atv-shipping", label: "ATV Shipping" },
  { slug: "utv-shipping", label: "UTV Shipping" },
  { slug: "trike-shipping", label: "Trike Shipping" },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Shipping Services",
    href: "/#vehicles-we-ship",
    children: VEHICLE_TYPES.map((v) => ({ label: v.label, href: `/${v.slug}` })),
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/motorcycle-shipping-faq" },
  { label: "Buyer's Guide", href: "/motorcycle-shipping-buyers-guide" },
];

// Every currently-built route — the single source of truth for sitemap.ts.
export const ROUTES: string[] = [
  "/",
  "/motorcycle-shipping",
  "/atv-shipping",
  "/utv-shipping",
  "/trike-shipping",
  "/open-vs-enclosed-motorcycle-transport",
  "/how-it-works",
  "/motorcycle-shipping-cost",
  "/motorcycle-shipping-faq",
  "/motorcycle-shipping-buyers-guide",
  "/quote",
  "/privacy",
  "/terms",
];
