import Link from "next/link";
import { GUIDE_LINKS, type GuideRoute } from "@/lib/site";

// End-of-page block of descriptive internal links. Anchor text comes from
// GUIDE_LINKS so every page describes a destination with the same
// keyword-rich wording (helps search engines understand what each page is
// about, and avoids generic "learn more" links).
export function RelatedGuides({
  routes,
  heading = "Related motorcycle shipping guides",
}: {
  routes: GuideRoute[];
  heading?: string;
}) {
  return (
    <nav aria-label={heading} className="space-y-3 border-t border-border pt-6">
      <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">{heading}</h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {routes.map((href) => (
          <li key={href}>
            <Link href={href} className="font-semibold text-accent hover:underline">
              {GUIDE_LINKS[href]} →
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
