import type { Metadata, Viewport } from "next";
import "./portfolio.css";

const SITE = "https://mousti.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title:
    "Mustafa Isshakh — Mobile Apps, CRM & ERP Systems, SEO Websites & Growth Marketing | Qatar",
  description:
    "I build mobile apps, CRM & ERP systems, and SEO-optimized converting websites — plus social media marketing, Google & YouTube Ads. You pay only after delivery. Marketing charged on results. Based in Qatar, working worldwide.",
  keywords: [
    "mobile app developer Qatar",
    "CRM development",
    "ERP system",
    "web application developer",
    "SEO website Qatar",
    "social media marketing Qatar",
    "Google Ads",
    "YouTube Ads",
    "cloud computing",
    "Doha developer",
    "freelance developer Qatar",
  ],
  authors: [{ name: "Mustafa Isshakh", url: SITE }],
  creator: "Mustafa Isshakh",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/img/favicon.svg",
    apple: "/assets/img/favicon.svg",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/?lang=ar",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    siteName: "Mustafa Isshakh",
    locale: "en_US",
    alternateLocale: ["ar_QA"],
    url: SITE,
    title:
      "Mustafa Isshakh — Apps, Systems, Websites & Growth That Actually Converts",
    description:
      "Mobile apps, CRM/ERP systems, SEO websites, social media marketing and paid ads. Pay after delivery. Marketing paid on results.",
    images: [
      { url: "/assets/img/og-cover.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Isshakh — Apps, Systems, Websites & Growth That Converts",
    description:
      "Mobile apps, CRM/ERP systems, SEO websites, social media marketing and paid ads. Pay after delivery.",
    images: ["/assets/img/og-cover.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#05070E",
};

/* Search-engine structured data: who I am, what I offer, and the FAQ. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mousti.org/#person",
      "name": "Mustafa Isshakh",
      "alternateName": "Mousti",
      "jobTitle": "Full-Stack Software Engineer & Digital Growth Specialist",
      "email": "mailto:masta@mousti.org",
      "telephone": "+97455708226",
      "url": "https://mousti.org/",
      "knowsAbout": ["Mobile App Development","CRM Development","ERP Systems","Web Applications","SEO","Social Media Marketing","Google Ads","YouTube Ads","Cloud Computing"],
      "address": { "@type": "PostalAddress", "addressCountry": "QA", "addressLocality": "Doha" }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mousti.org/#service",
      "name": "Mustafa Isshakh — Software & Digital Growth",
      "image": "https://mousti.org/assets/img/og-cover.png",
      "url": "https://mousti.org/",
      "telephone": "+97455708226",
      "email": "mailto:masta@mousti.org",
      "priceRange": "$$",
      "areaServed": ["QA","Worldwide"],
      "address": { "@type": "PostalAddress", "addressCountry": "QA", "addressLocality": "Doha" },
      "makesOffer": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Application Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & ERP System Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO-Optimized Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing & Content Production" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads & YouTube Ads Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Computing & DevOps" } }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mousti.org/#website",
      "url": "https://mousti.org/",
      "name": "Mustafa Isshakh — Portfolio",
      "inLanguage": ["en","ar"],
      "publisher": { "@id": "https://mousti.org/#person" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I pay before the work starts?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. For apps, systems and websites you pay only after the product is delivered, tested and confirmed to work exactly as expected. For marketing, you pay when results start coming in." } },
        { "@type": "Question", "name": "What kind of applications can you build?",
          "acceptedAnswer": { "@type": "Answer", "text": "Any kind — iOS and Android mobile apps, CRM and ERP systems, internal business platforms, dashboards, booking and delivery systems, e-commerce and fully custom web applications." } },
        { "@type": "Question", "name": "Are the websites SEO optimized?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every website ships with full technical SEO, Google Search Console setup, Google Business Profile optimization, structured data, sitemaps and a conversion-focused layout." } },
        { "@type": "Question", "name": "How does result-based marketing pricing work?",
          "acceptedAnswer": { "@type": "Answer", "text": "I manage your accounts, produce the content and run the ads first. You only start paying once the campaigns are producing real customers and measurable results." } }
      ]
    }
  ]
};

/* Without JavaScript nothing should stay invisible. */
const noJsFallback =
  "[data-reveal]{opacity:1!important;transform:none!important}" +
  ".preloader{display:none}" +
  ".skill__bar i{width:100%!important}";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;700;800&family=Cairo:wght@400;600;700;900&display=swap"
        />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noJsFallback }} />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
