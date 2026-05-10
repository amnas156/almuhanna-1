// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Menu,
} from "lucide-react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const navItems = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "About Us",
    href: "/about",
  },

  {
    title: "Products",
    href: "/products",
  },

  {
    title: "Projects",
    href: "/projects",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://talamuhanna.com"),

  title: {
    default:
      "TALA AABDUL RAHMAN ALMUHANNA CO. | Electrical & Mechanical Solutions",

    template:
      "%s | TALA AABDUL RAHMAN ALMUHANNA CO.",
  },

  description:
    "TALA AABDUL RAHMAN ALMUHANNA CO. is a trusted electrical and mechanical trading company in Saudi Arabia delivering premium industrial products, transformers, low voltage components, copper products, enclosures, and engineering solutions.",

  keywords: [
    "TALA AABDUL RAHMAN ALMUHANNA CO.",
    "Electrical Trading Company Saudi Arabia",
    "Mechanical Products Riyadh",
    "Industrial Products",
    "Low Voltage Components",
    "Transformers",
    "Copper Products",
    "Industrial Accessories",
    "Engineering Solutions",
  ],

  openGraph: {
    title:
      "TALA AABDUL RAHMAN ALMUHANNA CO. | Electrical & Mechanical Solutions",

    description:
      "Premium industrial electrical & mechanical supplier in Saudi Arabia.",

    url: "https://talamuhanna.com",

    siteName:
      "TALA AABDUL RAHMAN ALMUHANNA CO.",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TALA AABDUL RAHMAN ALMUHANNA CO.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "TALA AABDUL RAHMAN ALMUHANNA CO.",

    description:
      "Trusted industrial supplier in Saudi Arabia.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name:
      "TALA AABDUL RAHMAN ALMUHANNA CO.",

    image:
      "https://talamuhanna.com/logo.png",

    url: "https://talamuhanna.com",

    telephone: "+966538357119",

    email: "anstrade@yahoo.com",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Ghorabi Electrical Market, Batha",

      addressLocality: "Riyadh",

      addressCountry: "Saudi Arabia",
    },

    description:
      "Trusted supplier of electrical and mechanical products in Saudi Arabia.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-white text-[#101010] antialiased`}
      >
        {/* ================================================= */}
        {/* STRUCTURED DATA */}
        {/* ================================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {/* ================================================= */}
        {/* PREMIUM BACKGROUND */}
        {/* ================================================= */}

        <div className="fixed inset-0 -z-50 bg-white">
          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* CYAN GLOW */}
          <div className="absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#36B1C7]/15 blur-3xl" />

          {/* BURGUNDY GLOW */}
          <div className="absolute bottom-[-10%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#960B33]/15 blur-3xl" />
        </div>

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-2xl">
          <div className="container-main">
            <div className="flex h-24 items-center justify-between">
              {/* LOGO */}
              <Link
                href="/"
                className="flex items-center gap-5"
              >
                {/* LOGO IMAGE */}
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* TEXT */}
                <div>
                  <div>
  <Link href="/">
    <h1 className="text-lg font-black uppercase leading-[1.1] tracking-[-0.03em] text-[#101010] sm:text-xl">
      TALA ABDUL RAHMAN
      {/* This span makes the middle name smaller and slightly lighter for a premium look */}
      <span className="text-xs font-bold text-gray-500 block sm:text-sm">
        ALMUHANNA CO.
      </span>
    </h1>
  </Link>
</div>
                </div>
              </Link>

              {/* NAVIGATION */}
              <nav className="hidden items-center gap-10 xl:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group relative text-sm font-black uppercase tracking-[0.15em] text-gray-600 transition duration-300 hover:text-[#960B33]"
                  >
                    {item.title}

                    {/* UNDERLINE */}
                    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#36B1C7] to-[#960B33] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              {/* ACTIONS */}
              <div className="flex items-center gap-6">
                {/* WHATSAPP */}
                <a
                  href="https://wa.me/966538357119"
                  target="_blank"
                  className="hidden rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_15px_40px_rgba(54,177,199,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(54,177,199,0.45)] md:inline-flex"
                >
                  WhatsApp
                </a>

                {/* MOBILE MENU */}
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-lg xl:hidden">
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ================================================= */}
        {/* MAIN */}
        {/* ================================================= */}

        <main className="relative min-h-screen">
          {children}
        </main>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <footer className="relative overflow-hidden bg-[#101010] text-white">
          {/* GLOW */}
          <div className="absolute left-[-10%] top-[-20%] h-[350px] w-[350px] rounded-full bg-[#36B1C7]/20 blur-3xl" />

          <div className="absolute bottom-[-20%] right-[-10%] h-[350px] w-[350px] rounded-full bg-[#960B33]/20 blur-3xl" />

          <div className="container-main relative py-24">
            <div className="grid gap-16 lg:grid-cols-4">
              {/* COMPANY */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-lg font-black uppercase leading-tight">
                      TALA AABDUL
                      <span className="block text-[#36B1C7]">
                        RAHMAN
                      </span>
                      ALMUHANNA CO.
                    </h2>
                  </div>
                </div>

                <p className="mt-8 leading-8 text-gray-400">
                  Trusted electrical and mechanical
                  supplier delivering premium industrial
                  products and engineering solutions across
                  Saudi Arabia.
                </p>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="text-xl font-black uppercase">
                  Quick Links
                </h3>

                <div className="mt-8 flex flex-col gap-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-gray-400 transition hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* PRODUCTS */}
              <div>
                <h3 className="text-xl font-black uppercase">
                  Categories
                </h3>

                <div className="mt-8 flex flex-col gap-5 text-gray-400">
                  <p>Low Voltage Components</p>
                  <p>Transformers</p>
                  <p>Power Monitoring</p>
                  <p>Copper Products</p>
                  <p>Industrial Accessories</p>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-xl font-black uppercase">
                  Contact
                </h3>

                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                   
                    <div>
                      <p className="font-semibold">
                        +966 53 835 7119
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    

                    <div>
                      <p className="font-semibold">
                        anstrade@yahoo.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin
                      className="mt-1 text-[#36B1C7]"
                      size={20}
                    />

                    <div>
                      <p className="font-semibold leading-7">
                        Ghorabi Electrical Market,
                        Batha, Riyadh,
                        Saudi Arabia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-20 border-t border-white/10 pt-8 text-center">
              <p className="text-sm text-gray-500">
                © 2026 TALA AABDUL RAHMAN
                ALMUHANNA CO.
                All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}