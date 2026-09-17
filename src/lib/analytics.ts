type AnalyticsParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: AnalyticsParameters) => void;
    fbq?: (command: "track", eventName: string, parameters?: AnalyticsParameters) => void;
    uetq?: Array<Record<string, unknown>>;
  }
}

export function trackAnalyticsEvent(eventName: string, parameters?: AnalyticsParameters) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, parameters);
}

export function trackMetaPixelEvent(eventName: string, parameters?: AnalyticsParameters) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", eventName, parameters);
}

export function trackGoogleAdsConversion(label: string | undefined, parameters?: AnalyticsParameters) {
  if (typeof window === "undefined" || !label) return;
  window.gtag?.("event", "conversion", { send_to: label, ...parameters });
}

export function trackMicrosoftEvent(eventName: string, parameters?: AnalyticsParameters) {
  if (typeof window === "undefined") return;
  window.uetq = window.uetq || [];
  window.uetq.push({ ec: "lead", ea: eventName, ...parameters });
}
