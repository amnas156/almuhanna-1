import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "TALA AABDUL RAHMAN ALMUHANNA CO. | Electrical & Mechanical Trading Saudi Arabia",

  description:
    "TALA AABDUL RAHMAN ALMUHANNA CO. is a trusted electrical & mechanical industrial supply company in Riyadh, Saudi Arabia delivering premium industrial products and engineering solutions.",

  keywords: [
    "Electrical Trading Saudi Arabia",
    "Mechanical Trading Riyadh",
    "Industrial Supply",
    "Electrical Components",
    "Cable Management",
    "Industrial Automation",
    "Transformers",
    "Almuhanna Co",
  ],

  authors: [
    {
      name: "TALA AABDUL RAHMAN ALMUHANNA CO.",
    },
  ],

  creator: "TALA AABDUL RAHMAN ALMUHANNA CO.",

  metadataBase: new URL("https://www.almuhannaco.com"),

  openGraph: {
    title:
      "TALA AABDUL RAHMAN ALMUHANNA CO. | Electrical & Mechanical Trading Saudi Arabia",

    description:
      "Reliable industrial supply partner in Saudi Arabia for electrical & mechanical products.",

    url: "https://www.almuhannaco.com",

    siteName: "ALMUHANNA CO.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ALMUHANNA CO.",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "TALA AABDUL RAHMAN ALMUHANNA CO. | Electrical & Mechanical Trading Saudi Arabia",

    description:
      "Premium industrial electrical & mechanical supply solutions in Saudi Arabia.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "TALA AABDUL RAHMAN ALMUHANNA CO.",

    url: "https://www.almuhannaco.com",

    logo: "https://www.almuhannaco.com/logo.png",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966538357119",
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["English", "Arabic"],
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "Ghorabi Electrical Market, Batha",
      addressLocality: "Riyadh",
      addressCountry: "Saudi Arabia",
    },

    sameAs: ["https://wa.me/966538357119"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-white font-sans text-[#0B0F19] antialiased`}
      >
        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-50 overflow-hidden bg-white">
          {/* CYAN GLOW */}
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#36B1C7]/10 blur-[140px]" />

          {/* BURGUNDY GLOW */}
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#960B33]/10 blur-[140px]" />

          {/* GRID PATTERN */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="min-h-screen pt-[100px]">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}