// app/products/[id]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { products } from "@/data/products";
import CTASection from "@/components/CTASection";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    notFound();
  }

  const whatsappLink = getWhatsAppLink({
    productName: product.title,
    productCode: product.code,
  });

  return (
    <>
      <section className="relative overflow-hidden px-6 py-24 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF8FB]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#36B1C7]"
          >
            <ArrowLeft size={18} />
            Back To Products
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="relative min-h-[460px] overflow-hidden rounded-[40px] border border-white/20 bg-white shadow-xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="rounded-[40px] border border-white/20 bg-white/70 p-10 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
              <span className="inline-flex rounded-full bg-[#36B1C7]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#36B1C7]">
                {product.category}
              </span>

              <h1 className="mt-8 text-4xl font-black uppercase tracking-tight text-[#0B0F19] sm:text-5xl">
                {product.title}
              </h1>

              <p className="mt-4 text-sm font-black uppercase tracking-[0.25em] text-[#960B33]">
                Code: {product.code}
              </p>

              <p className="mt-8 text-base leading-9 text-gray-600">
                {product.description}
              </p>

              <div className="mt-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(54,177,199,0.3)] transition hover:scale-105"
                >
                  <MessageCircle size={18} />
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}