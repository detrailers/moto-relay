type AnalyticsParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: AnalyticsParameters) => void;
  }
}

export function trackAnalyticsEvent(eventName: string, parameters?: AnalyticsParameters) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, parameters);
}
