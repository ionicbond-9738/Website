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
                    <div className="hero-content flex-col lg:flex-row flex items-center relative right-20">
                        <Image
                            src="/logo-hr.png"
                            width={280}
                            height={280}
                            alt="Logo"
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div className="px-4">
                            <h1 className="text-9xl font-bold font-anton leading-tight">
                                #9738 Ionic Bond
                            </h1>
                            <h3 className="py-8 text-3xl font-bold text-white">
                                Ionic Bond, a <span className="italic">FIRST</span> Robotics Competition Team<br/>
                                from Rabin High School, Tel-Mond, Israel
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Placeholder below */}
                <div className="mx-auto max-w-screen-xl px-4 py-6">
                    <Image
                        src="/placeholders/cheese.jpg"
                        alt="Team Photo"
                        width={854}
                        height={480}
                        className="w-full max-w-4xl rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </main>

            <Footer/>
        </div>
    );
}
