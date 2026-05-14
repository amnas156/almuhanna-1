"use client";

import { useState } from "react";

import { ShieldCheck } from "lucide-react";

type HeroVideoProps = {
  src: string;
};

export default function HeroVideo({
  src,
}: HeroVideoProps) {
  const [isLoaded, setIsLoaded] =
    useState(false);

  return (
    <div className="relative">
      {/* VIDEO CARD */}
      <div
        className={`relative overflow-hidden rounded-[28px] border border-white/20 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:rounded-[32px] ${
          isLoaded
            ? "bg-white/50 backdrop-blur-2xl"
            : "bg-black"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-[280px] w-full object-cover sm:h-[500px]"
          onLoadedData={() =>
            setIsLoaded(true)
          }
          onError={() =>
            setIsLoaded(false)
          }
        >
          <source
            src={src}
            type="video/mp4"
          />

          Your browser does not support
          the video tag.
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/40 via-transparent to-transparent" />
      </div>

      {/* FLOATING CARD */}
      <div className="relative mx-auto -mt-7 w-[92%] rounded-[24px] border border-white/20 bg-white/85 p-4 shadow-[0_15px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:absolute sm:-bottom-10 sm:-left-10 sm:mt-0 sm:w-auto sm:rounded-[28px] sm:p-6">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* ICON */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white shadow-[0_0_30px_rgba(54,177,199,0.25)] sm:h-14 sm:w-14">
            <ShieldCheck size={22} />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-sm font-black uppercase text-[#0B0F19] sm:text-lg">
              100% Reliable
            </h3>

            <p className="text-xs text-gray-600 sm:text-sm">
              Industrial Supply Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}