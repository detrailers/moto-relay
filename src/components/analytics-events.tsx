"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  trackAnalyticsEvent,
  trackGoogleAdsConversion,
  trackMetaPixelEvent,
  trackMicrosoftEvent,
} from "@/lib/analytics";

const CONTACT_PROTOCOLS = {
  "tel:": "call",
  "sms:": "text",
  "mailto:": "email",
} as const;

export function AnalyticsEvents() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== previousPathname.current) {
      trackMetaPixelEvent("PageView");
      previousPathname.current = pathname;
    }
  }, [pathname]);

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
      const contactMethod = CONTACT_PROTOCOLS[protocol as keyof typeof CONTACT_PROTOCOLS];
      trackMetaPixelEvent("Contact", { contact_method: contactMethod });
      trackGoogleAdsConversion(process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_SEND_TO, {
        contact_method: contactMethod,
      });
      trackMicrosoftEvent("contact_click", { contact_method: contactMethod });
    }

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  return null;
}
