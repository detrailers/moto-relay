import { LeadAttributionCapture } from "@/components/lead-attribution-capture";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsEvents } from "@/components/analytics-events";
import { site } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600", "700"] });
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const microsoftUetTagId = process.env.NEXT_PUBLIC_MICROSOFT_UET_TAG_ID;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/moto-relay-logo.png`,
  description: site.description,
  email: site.email,
  telephone: "+1-940-268-1060",
  areaServed: "Lower 48 United States",
  parentOrganization: {
    "@type": "Organization",
    name: site.parentCompany,
  },
  sameAs: [site.facebook],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+1-940-268-1060",
    email: site.email,
    availableLanguage: "English",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` },
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Used only when a page doesn't set its own title (shouldn't normally
    // happen — every route in this project sets one explicitly).
    default: `${site.name} — ${site.positioning}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
    url: site.url,
    images: [
      {
        url: "/images/moto-relay-social-share.png",
        width: 1733,
        height: 909,
        alt: "Moto Relay nationwide motorcycle and powersports shipping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
    images: ["/images/moto-relay-social-share.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XRMMCCNC97"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XRMMCCNC97');`}
        </Script>
        {googleAdsId ? (
          <Script id="google-ads" strategy="afterInteractive">
            {`gtag('config', '${googleAdsId}');`}
          </Script>
        ) : null}
        {microsoftUetTagId ? (
          <Script id="microsoft-uet" strategy="afterInteractive">
            {`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[];f=function(){var o={ti:"${microsoftUetTagId}",enableAutoSpaTracking:true};o.q=w[u];w[u]=new UET(o);w[u].push("pageLoad")};n=d.createElement(t);n.src=r;n.async=1;n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)};i=d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`}
          </Script>
        ) : null}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '932718713224976');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=932718713224976&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LeadAttributionCapture />
        <AnalyticsEvents />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
