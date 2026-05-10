"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Menu, X, PhoneCall } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm transition-all duration-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4">
            {/* LOGO IMAGE */}
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
              <Image
                src="/logo.png"
                alt="TALA AABDUL RAHMAN ALMUHANNA CO."
                fill
                priority
                className="object-contain p-2"
              />
            </div>

            {/* COMPANY NAME */}
            <div className="leading-none">
              <h1 className="text-xs font-black uppercase tracking-[0.14em] text-[#0B0F19] sm:text-sm">
                TALA AABDUL RAHMAN
              </h1>

              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.32em] text-gray-500">
                ALMUHANNA CO.
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative text-sm font-black uppercase tracking-[0.14em] transition duration-300 ${
                    isActive
                      ? "text-[#36B1C7]"
                      : "text-gray-700 hover:text-[#36B1C7]"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="https://wa.me/966538357119"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(54,177,199,0.3)] transition duration-300 hover:scale-105 lg:inline-flex"
          >
            <PhoneCall size={18} />

            WhatsApp
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-lg lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050816]/95 px-8 pt-32 backdrop-blur-3xl lg:hidden"
          >
            {/* MOBILE LINKS */}
            <div className="space-y-7">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-3xl font-black uppercase tracking-[0.14em] transition ${
                        isActive
                          ? "text-[#36B1C7]"
                          : "text-white hover:text-[#36B1C7]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* MOBILE CTA */}
            <a
              href="https://wa.me/966538357119"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-14 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-7 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(54,177,199,0.3)]"
            >
              <PhoneCall size={18} />

              Contact on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}