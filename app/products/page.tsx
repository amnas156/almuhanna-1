import CategorySection from "@/components/CategorySection";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { productCategories, products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF8FB]" />

        <div className="absolute -left-20 top-0 h-[240px] w-[240px] rounded-full bg-[#36B1C7]/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-[240px] w-[240px] rounded-full bg-[#960B33]/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

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

      {/* PRODUCTS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-16 sm:space-y-24">
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