import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock3,
} from "lucide-react";

import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import WhatsAppButton from "@/components/WhatsAppButton";

const contactCards = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "+966 53 835 7119",
    link: "tel:+966538357119",
  },

  {
    icon: Mail,
    title: "Email Address",
    value: "anstrade@yahoo.com",
    link: "mailto:anstrade@yahoo.com",
  },

  {
    icon: MapPin,
    title: "Office Location",
    value: "Ghorabi Electrical Market, Batha, Riyadh",
    link: "#",
  },

  {
    icon: Clock3,
    title: "Business Hours",
    value: "Saturday - Thursday | 8:00 AM - 8:00 PM",
    link: "#",
  },
];

export default function ContactPage() {
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
            badge="Contact Us"
            title="Get In Touch"
            highlight="With Us"
            description="Connect with TALA AABDUL RAHMAN ALMUHANNA CO. for premium industrial electrical & mechanical supply solutions across Saudi Arabia."
            center
          />
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.link}
                className="group rounded-[35px] border border-white/20 bg-white/70 p-8 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-[#36B1C7]/20 hover:shadow-[0_0_60px_rgba(54,177,199,0.15)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#36B1C7] to-[#960B33] text-white shadow-[0_0_30px_rgba(54,177,199,0.25)]">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-black uppercase text-[#0B0F19]">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="rounded-[40px] border border-white/20 bg-white/70 p-10 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
            <div className="inline-flex rounded-full bg-[#36B1C7]/10 px-5 py-2">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#36B1C7]">
                Quick Inquiry
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-black uppercase tracking-tight text-[#0B0F19]">
              Need Industrial Products?
            </h2>

            <p className="mt-6 text-base leading-9 text-gray-600">
              Contact our team directly through WhatsApp for fast product
              inquiries, technical support, industrial sourcing, and quotation
              requests.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              {[
                "Fast Product Inquiry Response",
                "Technical Product Support",
                "Bulk Industrial Supply",
                "Saudi Arabia Wide Delivery",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#36B1C7]/10">
                    <MessageCircle
                      size={18}
                      className="text-[#36B1C7]"
                    />
                  </div>

                  <span className="text-base font-semibold text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <WhatsAppButton
                label="Contact on WhatsApp"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* MAP */}
          <div className="overflow-hidden rounded-[40px] border border-white/20 bg-white/70 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
            <div className="relative h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Ghorabi+Electrical+Market+Batha+Riyadh&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* OVERLAY CARD */}
              <div className="absolute bottom-6 left-6 right-6 rounded-[30px] border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black uppercase text-[#0B0F19]">
                      Riyadh Office
                    </h3>

                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Ghorabi Electrical Market,
                      <br />
                      Batha, Riyadh,
                      <br />
                      Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready To Discuss Your Industrial Requirements?"
        description="Get in touch with our experienced team for premium electrical & mechanical industrial supply solutions."
      />
    </>
  );
}