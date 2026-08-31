"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/lib/site";
import { Button } from "@/components/button";
import { Wordmark } from "@/components/wordmark";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 overflow-visible border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      {/* Fixed compact chrome height — the wide logo lockup is allowed to
          bleed slightly above/below this bar (via overflow-visible) rather
          than being shrunk to fit inside it or cropped. */}
      <div className="mx-auto flex h-[78px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Wordmark priority />

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <details key={item.label} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-semibold uppercase tracking-wide text-foreground marker:content-none hover:text-accent [&::-webkit-details-marker]:hidden">
                  {item.label}
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-3.5 transition-transform group-open:rotate-180">
                    <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <ul className="absolute left-0 top-full z-10 mt-3 w-56 rounded-md border border-border bg-surface py-2 shadow-lg">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-2 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/quote">Get My Quote</Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn("border-t border-border lg:hidden", mobileOpen ? "block" : "hidden")}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {primaryNav.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-surface"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button href="/quote" className="mt-3" onClick={() => setMobileOpen(false)}>
            Get My Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}
