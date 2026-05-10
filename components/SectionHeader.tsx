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
      {/* BADGE */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className={`inline-flex rounded-full border border-[#36B1C7]/20 bg-[#36B1C7]/10 px-5 py-2 backdrop-blur-xl ${
            center ? "mx-auto" : ""
          }`}
        >
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#36B1C7]">
            {badge}
          </span>
        </motion.div>
      )}

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className={`mt-6 text-4xl font-black uppercase leading-tight tracking-tight text-[#0B0F19] sm:text-5xl lg:text-6xl ${
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

      {/* DESCRIPTION */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className={`mt-7 text-base leading-8 text-gray-600 sm:text-lg ${
            center ? "mx-auto max-w-3xl" : "max-w-2xl"
          }`}
        >
          {description}
        </motion.p>
      )}

      {/* DECORATIVE LINE */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: center ? "120px" : "90px" }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className={`mt-8 h-[4px] rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}