// app/page.tsx

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

import { brands } from "@/data/brands";
import { clients } from "@/data/clients";
import { products } from "@/data/products";

import BrandWall from "@/components/BrandWall";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import FAQPopupButton from "@/components/FAQPopupButton";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import StatsCard from "@/components/StatsCard";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF7FA]" />

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#36B1C7]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#960B33]/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex rounded-full border border-[#36B1C7]/20 bg-[#36B1C7]/10 px-5 py-2 backdrop-blur-xl">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#36B1C7]">
                Saudi Industrial Supply
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black uppercase leading-[1] tracking-tight text-[#0B0F19] sm:text-6xl lg:text-7xl">
              Trusted Electrical &
              <span className="bg-gradient-to-r from-[#36B1C7] to-[#960B33] bg-clip-text text-transparent">
                {" "}
                Mechanical Solutions
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600">
              Reliable industrial supply partner in Saudi Arabia delivering
              premium electrical, automation, power distribution, and mechanical
              solutions for modern infrastructure and industrial projects.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(54,177,199,0.3)] transition duration-300 hover:scale-105"
              >
                View Products

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="https://wa.me/966538357119"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#36B1C7]/20 bg-white/70 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#0B0F19] backdrop-blur-xl transition duration-300 hover:border-[#36B1C7]/40 hover:bg-white"
              >
                Contact Us
              </a>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-12 flex flex-wrap gap-4">
              {[
                "Premium Supply",
                "Trusted Support",
                "Industrial Quality",
              ].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur-xl"
                >
                  <BadgeCheck size={16} className="text-[#36B1C7]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/50 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
              <Image
                src="/images/hero/industrial-hero.jpg"
                alt="Industrial Solutions"
                width={900}
                height={700}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 -left-10 rounded-[30px] border border-white/20 bg-white/70 p-6 shadow-[0_15px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white">
                  <ShieldCheck size={26} />
                </div>

                <div>
                  <h3 className="text-lg font-black uppercase text-[#0B0F19]">
                    100% Reliable
                  </h3>

                  <p className="text-sm text-gray-600">
                    Industrial Supply Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            icon="building"
            value="14+"
            label="Years Experience"
            description="Serving industrial and infrastructure sectors across Saudi Arabia."
          />

          <StatsCard
            icon="boxes"
            value="500+"
            label="Industrial Products"
            description="Premium electrical and mechanical industrial solutions."
          />

          <StatsCard
            icon="shield"
            value="120+"
            label="Trusted Clients"
            description="Supporting contractors, engineers, and industrial companies."
          />

          <StatsCard
            icon="star"
            value="24/7"
            label="Technical Support"
            description="Reliable support and industrial sourcing assistance."
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Industrial Products"
            title="Featured"
            highlight="Products"
            description="Explore our premium industrial electrical and mechanical product range for modern infrastructure and industrial applications."
            center
          />

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                code={product.code}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <BrandWall title="Trusted Clients" items={clients} />

      {/* BRANDS */}
      <BrandWall title="Global Industrial Brands" items={brands} />

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Why Choose Us"
            title="Reliable Industrial"
            highlight="Supply Partner"
            description="Delivering trusted industrial solutions with premium quality products, technical expertise, and fast customer support."
            center
          />

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Premium Products",
                desc: "High-quality industrial electrical & mechanical products.",
              },
              {
                title: "Technical Support",
                desc: "Professional support for product selection and solutions.",
              },
              {
                title: "Fast Delivery",
                desc: "Reliable supply chain and timely project support.",
              },
              {
                title: "Competitive Pricing",
                desc: "Cost-effective industrial sourcing solutions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/20 bg-white/70 p-8 shadow-[0_10px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(54,177,199,0.15)]"
              >
                <h3 className="text-2xl font-black uppercase text-[#0B0F19]">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTASection />

      {/* FAQ POPUP BUTTON */}
      <FAQPopupButton />
    </>
  );
}