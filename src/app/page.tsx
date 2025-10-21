"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function HomePage() {

    return (
        <div className="bg-zinc-950  text-white min-h-screen">
            <Navbar/>
            <div className="hero text-[#ff69b4] w-400 h-20">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src="/logo-hr.png" width={180} height={180} alt="Logo"
                           className="max-w-sm rounded-lg shadow-2xl"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
