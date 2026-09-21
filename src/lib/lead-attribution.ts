// First-touch visit attribution, matching Auto Haulers' six source fields.
// Only public campaign labels and paths are retained, never form values or URL queries.
export type LeadAttribution = {
  source: string;
  medium: string;
  campaign: string;
  ad: string;
  term: string;
  landing: string;
};
type Visit = LeadAttribution & { lastSeen: number };
const STORAGE_KEY = "motorelay_visit_source";
const HOSTS = ["motorelaytransport.com", "www.motorelaytransport.com"];
const NOT_SET = "(not set)";
const TTL = 30 * 60 * 1000;
let memory: Visit | null = null;
let lastUrl = "";
let enteredDocument = false;

const safeTag = (value: unknown) => typeof value === "string" && /^[a-z0-9 _./-]{1,120}$/i.test(value) ? value : NOT_SET;
const safePath = (value: unknown) => typeof value === "string" && /^\/[a-z0-9/_.-]{0,179}$/i.test(value) ? value : "/";

export function measurementDisabled() {
  if (typeof window === "undefined") return false;
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  if (nav.globalPrivacyControl === true || nav.doNotTrack === "1") return true;
  try { return window.localStorage.getItem("motorelay_ad_measurement_off") === "1"; } catch { return false; }
}

// Treat client attribution as untrusted metadata, without making legacy form requests fail.
export function normalizeAttribution(input: unknown): LeadAttribution {
  const x = input && typeof input === "object" && !Array.isArray(input) ? input as Record<string, unknown> : {};
  if (x.source === "Not measured (privacy preference)") {
    return { source: "Not measured (privacy preference)", medium: "Not measured", campaign: "Not measured", ad: "Not measured", term: "Not measured", landing: "Not measured" };
  }
  return {
    source: x.source === "(direct)" ? "(direct)" : safeTag(x.source),
    medium: x.medium === "(none)" ? "(none)" : safeTag(x.medium),
    campaign: safeTag(x.campaign), ad: safeTag(x.ad), term: safeTag(x.term),
    landing: x.landing === undefined || x.landing === NOT_SET ? NOT_SET : safePath(x.landing),
  };
}

export function getLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") return normalizeAttribution(null);
  if (measurementDisabled()) {
    memory = null;
    try { window.sessionStorage.removeItem(STORAGE_KEY); } catch { /* Storage may be disabled. */ }
    return normalizeAttribution({ source: "Not measured (privacy preference)" });
  }
  const now = Date.now();
  if (!memory) {
    try {
      const stored = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "null");
      if (stored && typeof stored.lastSeen === "number") memory = { ...normalizeAttribution(stored), lastSeen: stored.lastSeen };
    } catch { /* Keep an in-memory fallback if storage is unavailable. */ }
  }
  const params = new URLSearchParams(window.location.search);
  const ownHost = (host: string) => HOSTS.includes(host) || host === window.location.hostname;
  let referrerHost = "";
  if (!enteredDocument) {
    try { referrerHost = new URL(document.referrer).hostname.toLowerCase(); } catch { /* Direct visit. */ }
  }
  const external = !!referrerHost && !ownHost(referrerHost);
  const changedUrl = window.location.href !== lastUrl;
  const sources = ["google", "bing", "facebook", "instagram", "youtube", "chatgpt", "perplexity", "newsletter", "email"];
  const media = ["organic", "cpc", "ppc", "paid_social", "social", "email", "referral"];
  const taggedSource = (params.get("utm_source") || "").toLowerCase();
  const taggedMedium = (params.get("utm_medium") || "").toLowerCase();
  let source = "(direct)", medium = "(none)";
  if (sources.includes(taggedSource)) { source = taggedSource; medium = media.includes(taggedMedium) ? taggedMedium : "referral"; }
  else if (params.has("gclid")) { source = "google"; medium = "cpc"; }
  else if (params.has("msclkid")) { source = "bing"; medium = "cpc"; }
  else if (/(^|\.)google\.[a-z.]+$/.test(referrerHost)) { source = "google"; medium = "organic"; }
  else if (/(^|\.)bing\.com$/.test(referrerHost)) { source = "bing"; medium = "organic"; }
  else if (/(^|\.)(facebook\.com|fb\.com|instagram\.com)$/.test(referrerHost)) { source = referrerHost.includes("instagram") ? "instagram" : "facebook"; medium = "social"; }
  else if (/(^|\.)(chatgpt\.com|chat\.openai\.com)$/.test(referrerHost)) { source = "chatgpt"; medium = "referral"; }
  else if (/(^|\.)perplexity\.ai$/.test(referrerHost)) { source = "perplexity"; medium = "referral"; }
  else if (/(^|\.)youtube\.com$/.test(referrerHost)) { source = "youtube"; medium = "social"; }
  else if (external) { source = "other_website"; medium = "referral"; }
  const newSource = changedUrl && source !== "(direct)" && (params.has("utm_source") || params.has("gclid") || params.has("msclkid") || external);
  if (!memory || now - memory.lastSeen > TTL || now < memory.lastSeen || newSource) {
    memory = { source, medium, campaign: safeTag(params.get("utm_campaign")), ad: safeTag(params.get("utm_content")), term: safeTag(params.get("utm_term")), landing: safePath(window.location.pathname), lastSeen: now };
  }
  enteredDocument = true;
  lastUrl = window.location.href;
  memory.lastSeen = now;
  try { window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(memory)); } catch { /* Quotes still work. */ }
  return normalizeAttribution(memory);
}

export function attributionRows(input: unknown): [string, string][] {
  const a = normalizeAttribution(input);
  return [["Website source", a.source], ["Traffic channel", a.medium], ["Campaign name", a.campaign], ["Ad name", a.ad], ["Search term", a.term], ["Original landing page", a.landing]];
}

// Called only after the existing server reports a successful submission.
// Do not create tags, replace tracking IDs, or send customer contact/shipment data.
export function trackSuccessfulLead(formName: string, attribution: LeadAttribution) {
  if (typeof window === "undefined" || !HOSTS.includes(window.location.hostname) || measurementDisabled()) return;
  const a = normalizeAttribution(attribution);
  const details = { form_name: formName, lead_source: a.source, lead_medium: a.medium, campaign_name: a.campaign, ad_content: a.ad };
  try { window.gtag?.("event", "generate_lead", details); } catch { /* Measurement must never block a quote. */ }
  try { window.fbq?.("track", "Lead"); } catch { /* Allow GA even when Meta is blocked, and vice versa. */ }
}
