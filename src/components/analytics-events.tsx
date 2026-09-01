"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

const CONTACT_PROTOCOLS = {
  "tel:": "call",
  "sms:": "text",
  "mailto:": "email",
} as const;

export function AnalyticsEvents() {
  useEffect(() => {
    function trackContactClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href")?.toLowerCase() ?? "";
      const protocol = Object.keys(CONTACT_PROTOCOLS).find((candidate) => href.startsWith(candidate));
      if (!protocol) return;

      trackAnalyticsEvent("contact_click", {
        contact_method: CONTACT_PROTOCOLS[protocol as keyof typeof CONTACT_PROTOCOLS],
        link_text: link.textContent?.trim().slice(0, 80) || "contact link",
      });
    }

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  return null;
}
