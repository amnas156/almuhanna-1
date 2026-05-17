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

export default function BrandWall({ title, items }: BrandWallProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FCFF]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#36B1C7]/10 px-4 py-2">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#36B1C7] sm:text-xs">
              Industrial Network
            </span>
          </span>

          <h2 className="mt-5 text-3xl font-black uppercase tracking-tight text-[#0B0F19] sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Trusted industrial clients and global engineering brands associated
            with our electrical & mechanical supply solutions.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden sm:mt-16 lg:mt-20">
          <div className="absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-4 sm:gap-6 lg:gap-8"
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group flex min-w-[170px] items-center justify-center rounded-[24px] border border-gray-100 bg-white/85 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#36B1C7]/30 hover:shadow-[0_0_40px_rgba(54,177,199,0.12)] sm:min-w-[220px] sm:rounded-[28px] sm:p-6 lg:min-w-[260px] lg:rounded-[32px] lg:p-8"
              >
                <div className="flex flex-col items-center">
                  <div className="relative h-14 w-28 sm:h-16 sm:w-36 lg:h-20 lg:w-40">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </div>

                  <h3 className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.1em] text-[#0B0F19] sm:mt-5 sm:text-xs lg:mt-6 lg:text-sm">
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