"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[#36B1C7]/10 blur-[110px]" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-[#960B33]/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <div className="inline-flex rounded-full border border-[#36B1C7]/20 bg-[#36B1C7]/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#36B1C7]">
              FAQ
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-[#0B0F19] sm:text-5xl">
            Common Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Quick answers about our industrial electrical and mechanical supply
            services in Saudi Arabia.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-[0_10px_50px_rgba(0,0,0,0.05)] transition hover:shadow-[0_0_50px_rgba(54,177,199,0.12)]"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-6 p-7 text-left"
                >
                  <span className="text-lg font-black uppercase tracking-tight text-[#0B0F19]">
                    {item.question}
                  </span>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-7 pb-7">
                    <p className="max-w-3xl text-base leading-8 text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}