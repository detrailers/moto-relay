// Central site configuration: brand identity, navigation, and route registry.
// Keep marketing copy here limited to owner-approved lines — this file backs
// metadata, schema and shared components, so anything added here is treated
// as a real, published claim.

export const site = {
  name: "Moto Relay",
  parentCompany: "Texas Moto Worx",
  domain: "motorelaytransport.com",
  url: "https://www.motorelaytransport.com",
  // Approved primary positioning line — used for the homepage <title> and as
  // the sitewide default title fallback.
  positioning: "Nationwide Motorcycle & Powersports Shipping",
  description:
    "Specialized transportation for motorcycles, ATVs, UTVs and trikes across the lower 48 United States.",
  // Single source of truth for the owner-approved phone number. Every
  // component that calls/texts reads from here.
  phone: "(940) 268-1060",
  phoneHref: "tel:+19402681060",
  smsHref: "sms:+19402681060",
  textQuoteHref: "/quote?mode=text",
  // Public and quote-recipient email — owner-approved.
  email: "jeff@motorelaytransport.com",
  emailHref: "mailto:jeff@motorelaytransport.com",
  facebook: "https://www.facebook.com/profile.php?id=61593979203454",
};

// Longer brand form used for the page-title suffix and as the schema.org
// alternateName. Pairing "Relay" with "Transport" (it matches the domain)
// keeps search engines from confusing the brand with electrical relay parts.
export const brandWithService = "Moto Relay Transport";

// Descriptive anchor text for internal links to guide and service pages.
// Used by <RelatedGuides> and the footer so links name the actual topic.
export const GUIDE_LINKS = {
  "/motorcycle-shipping": "Door-to-door motorcycle shipping",
  "/atv-shipping": "ATV shipping",
  "/utv-shipping": "UTV and side-by-side shipping",
  "/trike-shipping": "Trike shipping",
  "/motorcycle-shipping-cost": "Motorcycle shipping cost factors",
  "/comparing-motorcycle-shipping-quotes": "Comparing motorcycle shipping quotes",
  "/open-vs-enclosed-motorcycle-transport": "Open vs. enclosed motorcycle transport",
  "/door-to-door-vs-depot-motorcycle-transport": "Door-to-door vs. depot motorcycle transport",
  "/non-running-motorcycle-shipping": "Non-running motorcycle shipping",
  "/classic-custom-restored-motorcycle-shipping": "Classic and custom motorcycle shipping",
  "/motorcycle-shipping-after-online-purchase-auction": "Shipping a motorcycle bought online or at auction",
  "/cross-country-motorcycle-shipping": "Cross-country motorcycle shipping",
  "/motorcycle-shipping-insurance": "Motorcycle shipping insurance",
  "/prepare-motorcycle-for-shipping": "How to prepare a motorcycle for shipping",
  "/motorcycle-shipping-buyers-guide": "How to choose a motorcycle shipping company",
  "/motorcycle-shipping-faq": "Motorcycle shipping FAQ",
  "/how-it-works": "How motorcycle shipping works",
  "/recent-transports": "Recent motorcycle transports",
  "/motorcycle-shipping-guides": "All motorcycle shipping guides",
} as const;

export type GuideRoute = keyof typeof GUIDE_LINKS;

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
  { label: "About", href: "/about" },
  { label: "Recent Transports", href: "/recent-transports" },
  { label: "FAQ", href: "/motorcycle-shipping-faq" },
  { label: "Guides", href: "/motorcycle-shipping-guides" },
];

// Every currently-built route — the single source of truth for sitemap.ts.
export const ROUTES: string[] = [
  "/",
  "/motorcycle-shipping",
  "/atv-shipping",
  "/utv-shipping",
  "/trike-shipping",
  "/open-vs-enclosed-motorcycle-transport",
  "/door-to-door-vs-depot-motorcycle-transport",
  "/non-running-motorcycle-shipping",
  "/classic-custom-restored-motorcycle-shipping",
  "/motorcycle-shipping-after-online-purchase-auction",
  "/cross-country-motorcycle-shipping",
  "/motorcycle-shipping-insurance",
  "/motorcycle-shipping-guides",
  "/how-it-works",
  "/about",
  "/recent-transports",
  "/recent-transports/1974-suzuki-gt750-corinth-to-glendale",
  "/recent-transports/honda-vfr-st-louis-to-new-york",
  "/comparing-motorcycle-shipping-quotes",
  "/motorcycle-shipping-cost",
  "/prepare-motorcycle-for-shipping",
  "/motorcycle-shipping-faq",
  "/motorcycle-shipping-buyers-guide",
  "/quote",
  "/privacy",
  "/terms",
];
