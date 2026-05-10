import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const stats = [
  {
    number: "500+",
    label: "Industrial Products",
  },

  {
    number: "100+",
    label: "Trusted Clients",
  },

  {
    number: "24/7",
    label: "Technical Support",
  },
];

const categories = [
  {
    title: "Low Voltage Components",
    desc: "Premium protection and switching systems for industrial applications.",
  },

  {
    title: "Enclosures",
    desc: "Wall mount, floor standing and weatherproof industrial enclosures.",
  },

  {
    title: "Copper Products",
    desc: "Copper busbar, braided wire, lugs and grounding accessories.",
  },

  {
    title: "Power Monitoring",
    desc: "Digital meters, controllers and energy monitoring systems.",
  },

  {
    title: "Thermal Management",
    desc: "Industrial cooling fans, heaters and thermostat systems.",
  },

  {
    title: "Transformers",
    desc: "Reliable industrial transformers and electrical solutions.",
  },
];

const products = [
  {
    name: "MCCB Breaker",
    code: "MCCB-204",
    image: "/products/mccb.jpg",
  },

  {
    name: "Industrial Panel Fan",
    code: "FAN-104",
    image: "/products/panel-fan.jpg",
  },

  {
    name: "Power Transformer",
    code: "TR-310",
    image: "/products/transformer.jpg",
  },

  {
    name: "Wall Mount Enclosure",
    code: "ENC-220",
    image: "/products/enclosure.jpg",
  },
];

const associates = [
  "Al Masar Yellow Co",
  "Shapoorji Pallonji Co.",
  "United Construction Co.",
  "New Feb Co",
  "Saudi Icon Co.",
  "CEPCO",
];

const whyChoose = [
  "Reliable Supply Chain",
  "Premium Product Quality",
  "Competitive Pricing",
  "Industrial Technical Support",
];

const testimonials = [
  {
    name: "Industrial Contractor",
    review:
      "Reliable products and professional support for our industrial projects.",
  },

  {
    name: "Project Engineer",
    review:
      "Excellent product quality and trusted engineering support.",
  },

  {
    name: "Construction Company",
    review:
      "Premium industrial supplier with fast response and delivery.",
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================= */}
      {/* FIXED FAQ BUTTON */}
      {/* ================================================= */}

      <Link
        href="/faq"
        className="group fixed right-5 top-1/2 z-50 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#36B1C7] to-[#960B33] text-white shadow-[0_20px_60px_rgba(54,177,199,0.35)] transition-all duration-500 hover:scale-110"
      >
        <HelpCircle
          size={30}
          className="transition duration-300 group-hover:rotate-12"
        />
      </Link>

      {/* ================================================= */}
      {/* WHATSAPP BUTTON */}
      {/* ================================================= */}

      <a
        href="https://wa.me/966538357119"
        target="_blank"
        className="group fixed bottom-6 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_60px_rgba(37,211,102,0.35)] transition-all duration-500 hover:scale-110"
      >
        <MessageCircle
          size={30}
          className="transition duration-300 group-hover:rotate-12"
        />
      </a>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:py-44">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 bg-white" />

        <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* GLOW */}
        <div className="absolute left-[-10%] top-[10%] -z-10 h-[550px] w-[550px] rounded-full bg-[#36B1C7]/15 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[550px] w-[550px] rounded-full bg-[#960B33]/15 blur-3xl" />

        <div className="container-main grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-100 bg-white/80 px-6 py-3 shadow-xl shadow-cyan-500/10 backdrop-blur-2xl">
              <Sparkles size={18} className="text-[#36B1C7]" />

              <span className="text-xs font-black uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
                Trusted Industrial Supplier
              </span>
            </div>

            {/* TITLE */}
            <h1 className="mt-8 text-5xl font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#101010] sm:text-6xl md:text-8xl xl:text-[8.5rem]">
              Trusted
              <span className="block bg-gradient-to-r from-[#36B1C7] to-[#960B33] bg-clip-text text-transparent">
                Electrical &
              </span>
              Mechanical
            </h1>

            {/* DESC */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Reliable industrial supply partner in Saudi Arabia
              delivering premium electrical & mechanical
              products with trusted engineering solutions.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_15px_40px_rgba(54,177,199,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(54,177,199,0.45)]"
              >
                View Products

                <ArrowRight
                  size={20}
                  className="ml-3 transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#101010] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#36B1C7] hover:text-[#36B1C7]"
              >
                Contact Us
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-5">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[2rem] border border-gray-100 bg-white/80 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(54,177,199,0.15)] sm:p-7"
                >
                  <h3 className="text-2xl font-black text-[#960B33] sm:text-3xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-[10px] font-black uppercase tracking-wide text-gray-500 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* FLOATING LIGHT */}
            <div className="absolute -right-8 top-10 h-40 w-40 rounded-full bg-[#36B1C7]/20 blur-3xl" />

            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#960B33]/20 blur-3xl" />

            {/* FLOAT CARD */}
            <div className="absolute -left-6 top-10 z-10 hidden rounded-[2rem] border border-white/50 bg-white/85 p-6 shadow-2xl backdrop-blur-2xl lg:block">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#36B1C7]">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h4 className="font-black">
                    Reliable Supply
                  </h4>

                  <p className="text-sm text-gray-500">
                    Industrial Grade
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="rounded-[2.5rem] border border-gray-100 bg-white/80 p-4 shadow-2xl backdrop-blur-2xl sm:rounded-[3rem] sm:p-5">
              <div className="relative h-[360px] overflow-hidden rounded-[2rem] sm:h-[580px] sm:rounded-[2.5rem]">
                <Image
                  src="/hero-industrial.png"
                  alt="Industrial Products"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* PRODUCT CATEGORIES */}
      {/* ================================================= */}

      <section className="relative px-4 py-28 sm:px-6 lg:py-36">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#36B1C7]/10 blur-3xl" />

        <div className="container-main">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#36B1C7]">
              Product Categories
            </p>

            <h2 className="mt-5 text-gray-800 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
              Industrial Product Solutions
            </h2>
          </div>

          {/* GRID */}
          <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-gray-100 bg-white/80 p-8 shadow-xl backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(54,177,199,0.18)]"
              >
                {/* ICON */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#36B1C7] to-[#960B33] text-white shadow-xl">
                  <Factory size={30} />
                </div>

                {/* TITLE */}
                <h3 className="mt-7 text-2xl text-gray-800 font-black">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-4 leading-8 text-gray-600">
                  {item.desc}
                </p>

                {/* BTN */}
                <Link
                  href="/products"
                  className="mt-7 inline-flex items-center font-black uppercase tracking-wide text-[#36B1C7]"
                >
                  Explore

                  <ChevronRight
                    size={18}
                    className="ml-2"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}