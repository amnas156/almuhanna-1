"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="absolute -left-20 top-0 h-[220px] w-[220px] rounded-full bg-[#36B1C7]/10 blur-[80px] sm:h-[320px] sm:w-[320px]" />
      <div className="absolute -right-20 bottom-0 h-[220px] w-[220px] rounded-full bg-[#960B33]/10 blur-[80px] sm:h-[320px] sm:w-[320px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center sm:mb-14">
          <div className="inline-flex rounded-full border border-[#36B1C7]/20 bg-[#36B1C7]/10 px-4 py-2 backdrop-blur-xl sm:px-5">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#36B1C7] sm:text-xs">
              FAQ
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black uppercase tracking-tight text-[#0B0F19] sm:mt-6 sm:text-5xl">
            Common Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
            Quick answers about our industrial electrical and mechanical supply
            services in Saudi Arabia.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition hover:shadow-[0_0_50px_rgba(54,177,199,0.12)] sm:rounded-[30px]"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:gap-6 sm:p-7"
                >
                  <span className="text-sm font-black uppercase leading-6 tracking-tight text-[#0B0F19] sm:text-lg sm:leading-7">
                    {item.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white sm:h-11 sm:w-11">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                    <p className="max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
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