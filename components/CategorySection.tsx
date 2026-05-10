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
    <section className="relative py-20">
      {/* BACKGROUND DECOR */}
      <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-[#36B1C7]/10 blur-[100px]" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-[#960B33]/10 blur-[100px]" />

      <div className="relative z-10">
        {/* CATEGORY HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          {/* SMALL BADGE */}
          <div className="inline-flex rounded-full border border-[#36B1C7]/20 bg-[#36B1C7]/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#36B1C7]">
              Product Category
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-[#0B0F19] sm:text-5xl">
            {title}
          </h2>

          {/* DESCRIPTION */}
          {description && (
            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
              {description}
            </p>
          )}

          {/* DECORATIVE LINE */}
          <div className="mt-7 h-[4px] w-28 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33]" />
        </motion.div>

        {/* PRODUCTS GRID */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <ProductCard
                id={product.id}
                title={product.title}
                code={product.code}
                category={product.category}
                image={product.image}
                description={product.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}