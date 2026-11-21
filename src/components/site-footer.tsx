import Link from "next/link";
import { site, primaryNav, VEHICLE_TYPES, GUIDE_LINKS, type GuideRoute } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

const FOOTER_GUIDES: GuideRoute[] = [
  "/motorcycle-shipping-cost",
  "/open-vs-enclosed-motorcycle-transport",
  "/door-to-door-vs-depot-motorcycle-transport",
  "/cross-country-motorcycle-shipping",
  "/non-running-motorcycle-shipping",
  "/classic-custom-restored-motorcycle-shipping",
  "/motorcycle-shipping-after-online-purchase-auction",
  "/motorcycle-shipping-insurance",
  "/prepare-motorcycle-for-shipping",
  "/motorcycle-shipping-buyers-guide",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{site.description}</p>
            <ul className="mt-4 space-y-1.5">
              <li>
                <a href={site.emailHref} className="text-sm text-foreground hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="inline-flex rounded-md border border-accent px-3 py-2 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-black md:hidden">
                  Call {site.phone}
                </a>
                <span className="hidden text-sm font-bold text-accent md:inline">Call or text {site.phone}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Shipping Services</h2>
            <ul className="mt-3 space-y-2">
              {VEHICLE_TYPES.map((v) => (
                <li key={v.slug}>
                  <Link href={`/${v.slug}`} className="text-sm text-foreground hover:text-accent">
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Shipping Guides</h2>
            <ul className="mt-3 space-y-2">
              <li><Link href="/comparing-motorcycle-shipping-quotes" className="font-semibold text-accent hover:underline">Comparing prices? Here’s what to ask before booking.</Link></li>
              <li>
                <Link href="/motorcycle-shipping-guides" className="font-semibold text-accent hover:underline">
                  View All Motorcycle Shipping Guides
                </Link>
              </li>
              {FOOTER_GUIDES.map((href) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-foreground hover:text-accent">
                    {GUIDE_LINKS[href]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company</h2>
            <ul className="mt-3 space-y-2">
              {primaryNav
                .filter((item) => !item.children)
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-foreground hover:text-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/privacy" className="text-sm text-foreground hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-foreground hover:text-accent">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={site.facebook}
                  className="text-sm text-foreground hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name} motorcycle &amp; powersports transport. All rights reserved.
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
