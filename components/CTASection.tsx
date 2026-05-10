import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Need Reliable Electrical & Mechanical Supply?",
  description = "Connect with ANS Trade for premium industrial products, competitive pricing, and fast support across Saudi Arabia.",
  primaryText = "Contact on WhatsApp",
  primaryHref = "https://wa.me/966538357119",
  secondaryText = "View Products",
  secondaryHref = "/products",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#36B1C7]/25 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#960B33]/25 blur-[130px]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-10 shadow-[0_0_80px_rgba(54,177,199,0.18)] backdrop-blur-2xl md:p-16">
          {/* CARD GLOWS */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#36B1C7]/20 blur-[90px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#960B33]/20 blur-[90px]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            {/* TEXT */}
            <div>
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-xl">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#36B1C7]">
                  Industrial Supply Partner
                </span>
              </div>

              <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                {description}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href={primaryHref}
                target="_blank"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(54,177,199,0.3)] transition duration-300 hover:scale-105 lg:w-auto"
              >
                <MessageCircle size={18} />
                {primaryText}
              </a>

              <Link
                href={secondaryHref}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white backdrop-blur-xl transition duration-300 hover:border-[#36B1C7]/40 hover:bg-white/15 lg:w-auto"
              >
                {secondaryText}
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}