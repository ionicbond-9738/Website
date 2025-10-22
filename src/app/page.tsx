"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function HomePage() {

    return (
        <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
            <Navbar/>

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="mx-auto max-w-screen-xl px-4 text-team">
                    <div className="hero-content flex flex-col lg:flex-row items-center gap-8 relative lg:right-10">
                        {/* Logo */}
                        <Image
                            src="/logo-hr.png"
                            width={280}
                            height={280}
                            alt="Logo"
                            className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-[280px] max-w-full rounded-lg shadow-2xl"
                        />

                        {/* Text */}
                        <div className="px-4 text-center lg:text-left">
                            <h1 className="text-4xl sm:text-6xl lg:text-9xl font-bold font-anton leading-tight text-shadow-md text-shadow-pink-500 whitespace-nowrap">
                                #9738 Ionic Bond
                            </h1>
                            <h3 className="text-lg sm:text-xl lg:text-3xl font-bold">
                                Ionic Bond, a <span className="italic">FIRST</span> Robotics Competition Team from<br />
                                Rabin High School, Tel-Mond, Israel
                            </h3>
                        </div>
                    </div>
                </div>


                <div className="mx-auto max-w-screen-xl px-4 py-6">
                    <Image
                        src="/assets/team/team_photo_2025.jpg"
                        alt="Team Photo"
                        width={854}
                        height={480}
                        className="w-full max-w-5xl rounded-lg shadow-lg mx-auto"
                    />
                </div>

                {/* Hero 2 */}

            </main>

            <Footer/>
        </div>
    );
}
