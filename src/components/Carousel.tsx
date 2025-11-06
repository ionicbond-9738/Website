"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { shuffleArray } from "@/app/utils";

export interface CarouselProps {
  images: string[];
  autoScroll?: boolean;
  interval?: number;
  className?: string;
}

export default function Carousel({
  images,
  autoScroll = true,
  interval = 3000,
  className = "",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [shuffledImages] = useState(() => shuffleArray(images));

  // Resettable interval logic
  const resetInterval = () => {
    if (!autoScroll) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoScroll, interval, total]);

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
    resetInterval();
  };
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-2xl select-none ${className}`}
    >
      {/* Image Wrapper with transition */}
      <div className="relative w-full h-[400px] sm:h-[500px]">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Carousel image ${idx + 1}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
            priority={idx === 0}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-zinc-500/60 hover:bg-zinc-800/90 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 z-20"
      >
        ❮
      </button>

      <button
        onClick={next}
        className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-zinc-500/60 hover:bg-zinc-800/90 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 z-20"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              idx === current
                ? "bg-white scale-125 shadow-md"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
