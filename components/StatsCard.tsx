// components/StatsCard.tsx

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
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/70 p-8 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-[#36B1C7]/30 hover:shadow-[0_0_60px_rgba(54,177,199,0.16)]"
    >
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#36B1C7]/10 blur-3xl transition duration-500 group-hover:bg-[#36B1C7]/20" />

      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#960B33]/10 blur-3xl transition duration-500 group-hover:bg-[#960B33]/20" />

      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#36B1C7] to-[#960B33] shadow-[0_0_35px_rgba(54,177,199,0.28)]">
        <Icon size={28} className="text-white" />
      </div>

      <div className="relative z-10 mt-8">
        <h3 className="text-5xl font-black uppercase tracking-tight text-[#0B0F19]">
          {value}
        </h3>

        <p className="mt-3 text-lg font-black uppercase tracking-[0.14em] text-[#0B0F19]">
          {label}
        </p>

        {description && (
          <p className="mt-4 text-sm leading-7 text-gray-600">
            {description}
          </p>
        )}
      </div>

      <div className="absolute right-6 top-6 opacity-0 transition duration-300 group-hover:opacity-100">
        <ArrowUpRight size={22} className="text-[#36B1C7]" />
      </div>
    </motion.div>
  );
}