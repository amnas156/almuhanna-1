"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`relative z-10 ${
        center ? "mx-auto text-center" : "text-left"
      }`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className={`inline-flex rounded-full border border-[#36B1C7]/20 bg-[#36B1C7]/10 px-4 py-2 backdrop-blur-xl sm:px-5 ${
            center ? "mx-auto" : ""
          }`}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#36B1C7] sm:text-xs sm:tracking-[0.25em]">
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className={`mt-5 text-3xl font-black uppercase leading-[1.12] tracking-tight text-[#0B0F19] sm:mt-6 sm:text-5xl lg:text-6xl ${
          center ? "mx-auto max-w-5xl" : "max-w-4xl"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-[#36B1C7] to-[#960B33] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className={`mt-4 text-sm leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8 ${
            center ? "mx-auto max-w-3xl" : "max-w-2xl"
          }`}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: center ? "96px" : "76px" }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className={`mt-6 h-[3px] rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] sm:mt-8 sm:h-[4px] ${
          center ? "mx-auto sm:w-[120px]" : "sm:w-[90px]"
        }`}
      />
    </div>
  );
}