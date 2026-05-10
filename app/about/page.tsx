import {
  Building2,
  Globe2,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Users,
} from "lucide-react";

import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";

const timeline = [
  {
    year: "2012",
    title: "Company Foundation",
    description:
      "Established in Riyadh as a trusted supplier of industrial electrical & mechanical products.",
  },

  {
    year: "2016",
    title: "Industrial Expansion",
    description:
      "Expanded product categories and strengthened relationships with global industrial brands.",
  },

  {
    year: "2020",
    title: "Major Project Support",
    description:
      "Successfully supplied products for infrastructure and industrial construction projects.",
  },

  {
    year: "2026",
    title: "Saudi Market Leadership",
    description:
      "Continuing to deliver reliable industrial solutions across Saudi Arabia.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable Supply Chain",
    desc: "Trusted sourcing and fast delivery support for industrial projects.",
  },

  {
    icon: Globe2,
    title: "Global Brand Network",
    desc: "Supplying premium international industrial electrical brands.",
  },

  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Efficient logistics and timely supply solutions across Saudi Arabia.",
  },

  {
    icon: Users,
    title: "Technical Support",
    desc: "Professional assistance for product selection and industrial solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF8FB]" />

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#36B1C7]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#960B33]/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeader
            badge="About Company"
            title="Trusted Industrial"
            highlight="Supply Partner"
            description="TALA AABDUL RAHMAN ALMUHANNA CO. is a leading electrical & mechanical trading company delivering premium industrial products and engineering solutions across Saudi Arabia."
            center
          />
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="rounded-[40px] border border-white/20 bg-white/70 p-10 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#36B1C7] to-[#960B33] text-white shadow-[0_0_40px_rgba(54,177,199,0.25)]">
              <Building2 size={40} />
            </div>

            <h2 className="mt-8 text-4xl font-black uppercase tracking-tight text-[#0B0F19]">
              Company Overview
            </h2>

            <p className="mt-6 text-base leading-9 text-gray-600">
              TALA AABDUL RAHMAN ALMUHANNA CO. is a reliable supplier of
              industrial electrical and mechanical products serving contractors,
              infrastructure projects, industrial facilities, and engineering
              companies throughout Saudi Arabia.
            </p>

            <p className="mt-6 text-base leading-9 text-gray-600">
              We specialize in delivering premium industrial products including
              low voltage components, transformers, cable management systems,
              enclosures, automation products, and power monitoring solutions.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-8">
            {/* MISSION */}
            <div className="rounded-[40px] border border-white/20 bg-white/70 p-10 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
              <div className="inline-flex rounded-full bg-[#36B1C7]/10 px-5 py-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#36B1C7]">
                  Mission
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-black uppercase text-[#0B0F19]">
                Deliver Reliable Solutions
              </h3>

              <p className="mt-5 text-base leading-8 text-gray-600">
                To provide premium industrial electrical and mechanical products
                with reliable technical support, competitive pricing, and fast
                supply solutions.
              </p>
            </div>

            {/* VISION */}
            <div className="rounded-[40px] border border-white/20 bg-white/70 p-10 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
              <div className="inline-flex rounded-full bg-[#960B33]/10 px-5 py-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#960B33]">
                  Vision
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-black uppercase text-[#0B0F19]">
                Saudi Industrial Excellence
              </h3>

              <p className="mt-5 text-base leading-8 text-gray-600">
                To become one of the most trusted industrial supply partners in
                Saudi Arabia through quality products, innovation, and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Why Choose Us"
            title="Industrial"
            highlight="Strength"
            description="Professional industrial supply solutions backed by trusted sourcing, technical expertise, and reliable customer support."
            center
          />

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[35px] border border-white/20 bg-white/70 p-8 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(54,177,199,0.15)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#36B1C7] to-[#960B33] text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-2xl font-black uppercase text-[#0B0F19]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            badge="Company Journey"
            title="Industrial"
            highlight="Timeline"
            description="A journey of growth, reliability, and trusted industrial supply solutions."
            center
          />

          <div className="relative mt-24">
            {/* LINE */}
            <div className="absolute left-[22px] top-0 h-full w-[2px] bg-gradient-to-b from-[#36B1C7] to-[#960B33]" />

            <div className="space-y-14">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="relative pl-20"
                >
                  {/* DOT */}
                  <div className="absolute left-0 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] shadow-[0_0_30px_rgba(54,177,199,0.25)]">
                    <BadgeCheck size={18} className="text-white" />
                  </div>

                  <div className="rounded-[35px] border border-white/20 bg-white/70 p-8 shadow-[0_10px_50px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-[#36B1C7]">
                      {item.year}
                    </span>

                    <h3 className="mt-4 text-3xl font-black uppercase text-[#0B0F19]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}