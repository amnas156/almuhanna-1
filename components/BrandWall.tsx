"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BrandItem {
  name: string;
  logo: string;
}

interface BrandWallProps {
  title: string;
  items: BrandItem[];
}

export default function BrandWall({
  title,
  items,
}: BrandWallProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FCFF]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#36B1C7]/10 px-5 py-2">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#36B1C7]">
              Industrial Network
            </span>
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-[#0B0F19] sm:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600">
            Trusted industrial clients and global engineering brands associated
            with our electrical & mechanical supply solutions.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-20 overflow-hidden">
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-8"
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group flex min-w-[260px] items-center justify-center rounded-[32px] border border-white/20 bg-white/70 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-[#36B1C7]/30 hover:shadow-[0_0_50px_rgba(54,177,199,0.15)]"
              >
                <div className="flex flex-col items-center">
                  {/* LOGO */}
                  <div className="relative h-20 w-40">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="mt-6 text-center text-sm font-black uppercase tracking-[0.14em] text-[#0B0F19]">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}