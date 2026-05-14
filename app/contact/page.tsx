// app/contact/page.tsx

import {
  Mail,
  MapPin,
  Phone,
  Clock3,
} from "lucide-react";

import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import SectionHeader from "@/components/SectionHeader";

import { officeLocation } from "@/data/location";

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
    value: officeLocation.shortLabel,
    link: officeLocation.mapLink,
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
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF8FB]" />

        <div className="absolute -left-20 top-0 h-[240px] w-[240px] rounded-full bg-[#36B1C7]/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-[240px] w-[240px] rounded-full bg-[#960B33]/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

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
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.link}
                className="group rounded-3xl border border-white/20 bg-white/80 p-5 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#36B1C7]/20 hover:shadow-[0_0_60px_rgba(54,177,199,0.15)] sm:rounded-[35px] sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#36B1C7] to-[#960B33] text-white shadow-[0_0_30px_rgba(54,177,199,0.25)] sm:h-16 sm:w-16">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-black uppercase text-[#0B0F19] sm:mt-8 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 break-words text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 sm:gap-12 lg:grid-cols-2">
          {/* CONTACT FORM */}
          <ContactForm />

          {/* LOCATION MAP */}
          <LocationMap />
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