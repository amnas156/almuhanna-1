"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Boxes,
  ShieldCheck,
  Star,
  ArrowUpRight,
} from "lucide-react";

interface StatsCardProps {
  icon: "building" | "boxes" | "shield" | "star";
  value: string;
  label: string;
  description?: string;
}

export default function StatsCard({
  icon,
  value,
  label,
  description,
}: StatsCardProps) {
  const icons = {
    building: Building2,
    boxes: Boxes,
    shield: ShieldCheck,
    star: Star,
  };

  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#36B1C7]/30 hover:shadow-[0_0_50px_rgba(54,177,199,0.14)] sm:rounded-[32px] sm:p-8"
    >
      {/* GLOW */}
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#36B1C7]/10 blur-3xl transition duration-500 group-hover:bg-[#36B1C7]/20 sm:h-40 sm:w-40" />

      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#960B33]/10 blur-3xl transition duration-500 group-hover:bg-[#960B33]/20 sm:h-40 sm:w-40" />

      {/* ICON */}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#36B1C7] to-[#960B33] shadow-[0_0_30px_rgba(54,177,199,0.24)] sm:h-16 sm:w-16">
        <Icon size={24} className="text-white sm:h-7 sm:w-7" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-5 sm:mt-8">
        <h3 className="text-4xl font-black uppercase tracking-tight text-[#0B0F19] sm:text-5xl">
          {value}
        </h3>

        <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-[#0B0F19] sm:mt-3 sm:text-lg sm:tracking-[0.14em]">
          {label}
        </p>

        {description && (
          <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4">
            {description}
          </p>
        )}
      </div>

      {/* HOVER ICON */}
      <div className="absolute right-5 top-5 opacity-100 transition duration-300 sm:right-6 sm:top-6 sm:opacity-0 sm:group-hover:opacity-100">
        <ArrowUpRight
          size={20}
          className="text-[#36B1C7] sm:h-[22px] sm:w-[22px]"
        />
      </div>
    </motion.div>
  );
}