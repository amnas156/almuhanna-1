"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";

interface CategorySectionProps {
  title: string;
  description?: string;
  products: Product[];
}

export default function CategorySection({
  title,
  description,
  products,
}: CategorySectionProps) {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="absolute left-0 top-0 h-[180px] w-[180px] rounded-full bg-[#36B1C7]/10 blur-[90px] sm:h-[250px] sm:w-[250px]" />
      <div className="absolute bottom-0 right-0 h-[180px] w-[180px] rounded-full bg-[#960B33]/10 blur-[90px] sm:h-[250px] sm:w-[250px]" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 lg:mb-14"
        >
          <div className="inline-flex rounded-full border border-[#36B1C7]/20 bg-[#36B1C7]/10 px-4 py-2 backdrop-blur-xl sm:px-5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#36B1C7] sm:text-xs">
              Product Category
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black uppercase leading-tight tracking-tight text-[#0B0F19] sm:mt-6 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
              {description}
            </p>
          )}

          <div className="mt-6 h-[4px] w-20 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] sm:mt-7 sm:w-28" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}