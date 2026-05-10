import CategorySection from "@/components/CategorySection";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { productCategories, products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-28 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF8FB]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeader
            badge="Product Catalog"
            title="Industrial"
            highlight="Products"
            description="Explore our category-wise electrical and mechanical industrial product range. Click More Details to send direct WhatsApp inquiry."
            center
          />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {productCategories.map((category) => {
            const categoryProducts = products.filter(
              (product) => product.category === category
            );

            if (categoryProducts.length === 0) return null;

            return (
              <CategorySection
                key={category}
                title={category}
                description={`Premium ${category.toLowerCase()} for industrial and commercial electrical applications.`}
                products={categoryProducts}
              />
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}