// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Products", href: "/products" },
  { title: "Contact", href: "/contact" },
];

const productLinks = [
  "Low Voltage Components",
  "Enclosures",
  "Copper Products",
  "Terminal Blocks",
  "Power Monitoring",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#060B16] text-white">
      {/* GLOW EFFECTS */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#36B1C7]/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#960B33]/20 blur-[120px]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-24 lg:px-10">
        {/* TOP */}
        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-4">
          {/* COMPANY */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              {/* LOGO */}
              <div className="relative h-16 w-16 overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_0_40px_rgba(54,177,199,0.15)]">
                <Image
                  src="/logo.png"
                  alt="TALA AABDUL RAHMAN ALMUHANNA CO."
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* COMPANY NAME */}
              <div className="leading-none">
                <h2 className="text-lg font-black uppercase tracking-[0.12em] text-white sm:text-2xl">
                  TALA AABDUL RAHMAN
                </h2>

                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.35em] text-gray-400">
                  ALMUHANNA CO.
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400">
              Trusted industrial supply partner in Saudi Arabia delivering
              premium electrical and mechanical solutions for construction,
              industrial automation, infrastructure, and engineering projects.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/966538357119"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(54,177,199,0.25)] transition duration-300 hover:scale-105"
              >
                Contact on WhatsApp

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-[0.15em]">
              Quick Links
            </h3>

            <div className="mt-8 space-y-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-3 text-gray-400 transition duration-300 hover:text-[#36B1C7]"
                >
                  <ChevronRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span className="text-sm font-semibold uppercase tracking-[0.12em]">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* PRODUCT LINKS */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-[0.15em]">
              Product Categories
            </h3>

            <div className="mt-8 space-y-4">
              {productLinks.map((item) => (
                <Link
                  key={item}
                  href="/products"
                  className="group flex items-center gap-3 text-gray-400 transition duration-300 hover:text-[#36B1C7]"
                >
                  <ChevronRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span className="text-sm font-semibold uppercase tracking-[0.12em]">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="grid gap-6 border-b border-white/10 py-10 lg:grid-cols-3">
          {/* PHONE */}
          <div className="flex items-start gap-4 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#36B1C7]/15 text-[#36B1C7]">
              <Phone size={24} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Phone
              </p>

              <a
                href="tel:+966538357119"
                className="mt-2 block text-lg font-bold text-white transition hover:text-[#36B1C7]"
              >
                +966 53 835 7119
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#36B1C7]/15 text-[#36B1C7]">
              <Mail size={24} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Email
              </p>

              <a
                href="mailto:anstrade@yahoo.com"
                className="mt-2 block text-lg font-bold text-white transition hover:text-[#36B1C7]"
              >
                anstrade@yahoo.com
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-4 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#36B1C7]/15 text-[#36B1C7]">
              <MapPin size={24} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Location
              </p>

              <p className="mt-2 text-lg font-bold leading-7 text-white">
                Ghorabi Electrical Market,
                <br />
                Batha, Riyadh
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center lg:flex-row lg:text-left">
          <p className="text-sm text-gray-500">
            © 2026 TALA AABDUL RAHMAN ALMUHANNA CO. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Premium Electrical & Mechanical Industrial Supply Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}