"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  productName?: string;
  productCode?: string;
  className?: string;
  label?: string;
}

export default function WhatsAppButton({
  productName,
  productCode,
  className = "",
  label = "Contact on WhatsApp",
}: WhatsAppButtonProps) {
  const phone = "966538357119";

  const message = productName
    ? `Hello, I need more details about:
Product: ${productName}
Code: ${productCode}`
    : `Hello, I would like to know more about your electrical & mechanical products.`;

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-7 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_35px_rgba(54,177,199,0.28)] transition duration-300 hover:shadow-[0_0_55px_rgba(54,177,199,0.4)] ${className}`}
    >
      <MessageCircle
        size={18}
        className="transition duration-300 group-hover:rotate-6"
      />

      <span>{label}</span>
    </motion.a>
  );
}