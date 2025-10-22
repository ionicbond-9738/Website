"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [1, 2, 3, 4, 5, 6, 7];

export default function AboutCarousel() {
    const [current, setCurrent] = useState(0);

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="flex justify-center py-10 px-4">
            <div className="relative w-[90vw] max-w-[600px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Image */}
                <Image
                    src={`/assets/misc/about/about${images[current]}.png`}
                    alt={`Team ${images[current]}`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={current === 0}
                />

                {/* Left button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 md:left-6 top-1/2 bg-white/70 border-none text-black btn btn-circle btn-md hover:bg-white z-20"
                >
                    ❮
                </button>

                {/* Right button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 md:right-6 top-1/2 bg-white/70 border-none text-black btn btn-circle btn-md hover:bg-white z-20"
                >
                    ❯
                </button>

                {/* Dots */}
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                    {images.map((_, idx) => (
                        <span
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full cursor-pointer transition-colors ${
                                idx === current ? "bg-white" : "bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
