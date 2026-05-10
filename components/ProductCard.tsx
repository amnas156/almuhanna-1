"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: number;
  title: string;
  code: string;
  image: string;
  category: string;
  description: string;
}

export default function ProductCard({
  id,
  title,
  code,
  image,
  category,
  description,
}: ProductCardProps) {
  const whatsappMessage = `Hello, I need more details about:
Product: ${title}
Code: ${code}`;

  const whatsappLink = `https://wa.me/966538357119?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/70 shadow-[0_15px_60px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-[#36B1C7]/40 hover:shadow-[0_0_60px_rgba(54,177,199,0.18)]"
    >
      {/* GLOW EFFECTS */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#36B1C7]/10 blur-3xl transition duration-500 group-hover:bg-[#36B1C7]/20" />

      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#960B33]/10 blur-3xl transition duration-500 group-hover:bg-[#960B33]/20" />

      {/* IMAGE SECTION */}
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/10 to-transparent" />

        {/* CATEGORY BADGE */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-xl">
            {category}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-7">
        {/* PRODUCT CODE */}
        <div className="mb-5 inline-flex rounded-full bg-[#36B1C7]/10 px-4 py-2">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#36B1C7]">
            {code}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-[#0B0F19] transition duration-300 group-hover:text-[#36B1C7]">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600">
          {description}
        </p>

        {/* ACTIONS */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {/* DETAILS PAGE */}
          <Link
            href={`/products/${id}`}
            className="group/details inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#0B0F19] transition hover:text-[#36B1C7]"
          >
            View Details

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover/details:translate-x-1 group-hover/details:-translate-y-1"
            />
          </Link>

          {/* WHATSAPP BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_30px_rgba(54,177,199,0.25)] transition duration-300 hover:scale-105"
          >
            <MessageCircle size={16} />
            More Details
          </a>
        </div>
      </div>

      {/* BORDER HOVER */}
      <div className="absolute inset-0 rounded-[32px] border border-transparent transition duration-500 group-hover:border-[#36B1C7]/20" />
    </motion.div>
  );
}