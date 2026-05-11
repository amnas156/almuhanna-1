"use client";

import { useState } from "react";

type HeroVideoProps = {
  src: string;
};

export default function HeroVideo({ src }: HeroVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/20 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:rounded-[32px] ${
        isLoaded ? "bg-white/50 backdrop-blur-2xl" : "bg-black"
      }`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-[280px] w-full object-cover sm:h-full"
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setIsLoaded(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
