"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";

import SectionHeader from "@/components/SectionHeader";

export default function Testimonials() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Client Feedback"
          title="Trusted By"
          highlight="Industry Leaders"
          description="Industrial contractors, engineers, and procurement teams across Saudi Arabia rely on our supply quality, technical support, and dependable delivery."
          center
        />

        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex h-full flex-col rounded-[28px] border border-white/20 bg-white/70 p-6 shadow-[0_10px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(54,177,199,0.15)] sm:rounded-[32px] sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white">
                  <Quote size={20} />
                </div>

                <div className="flex items-center gap-1 text-[#36B1C7]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={14}
                      className="fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-6 flex-1 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 border-t border-gray-200/80 pt-6">
                <p className="text-base font-black uppercase text-[#0B0F19] sm:text-lg">
                  {testimonial.name}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#36B1C7]">
                  {testimonial.role}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
