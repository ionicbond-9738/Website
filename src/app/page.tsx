"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8 relative lg:right-10 text-team">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <Image
            src="/logo-hr.png"
            width={280}
            height={280}
            alt="Logo"
            className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-[280px] max-w-full rounded-lg shadow-2xl select-none"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="px-4 text-center lg:text-left"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-9xl font-bold font-anton leading-tight text-shadow-md whitespace-nowrap">
            #9738 Ionic Bond
          </h1>
          <h3 className="text-lg sm:text-xl lg:text-3xl font-bold">
            Ionic Bond, a <span className="italic">FIRST</span> Robotics
            Competition Team from
            <br />
            Rabin High School, Tel-Mond, Israel
          </h3>
        </motion.div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

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
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="hero-content flex flex-col lg:flex-row items-center gap-8 relative lg:left-10 py-10">
            {/* Logo */}
            <Image
              src="/assets/robot/h2o/1.jpg"
              alt="Robot H2O 2024"
              width={1000}
              height={1000}
              className="w-full max-w-[600px] rounded-lg shadow-2xl"
            />

            {/* Text */}
            <div className="px-4 text-center lg:text-left">
              <h1 className="text-2xl sm:text-xl lg:text-3xl font-bold font-anton leading-tight text-team">
                What is <span className="italic">FIRST</span>
                {"\u00A0\u00A0"}Robotics Competition?
              </h1>
              <p className="text-lg sm:text-base lg:text-xl py-4">
                In FIRST Robotics Competition (FRC), high school students
                worldwide engage in robotics engineering, working under budget
                constraints, tight deadlines, and strict rules. Teams design and
                build robots to compete in a challenging game, but FRC also
                emphasizes strategic planning, fundraising, team identity, and
                promoting STEAM enthusiasm within their communities.
              </p>
              <a
                href={"https://www.firstinspires.org/programs/frc/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm sm:btn-md md:btn-lg lg:btn-xl btn-team text-black rounded-lg">
                  Learn more about FIRST
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 flex flex-wrap justify-center gap-4">
          {[
            { src: "/assets/logos/first_vertical.png", alt: "FIRST Logo" },
            { src: "/assets/logos/tel_mond.png", alt: "Tel Mond Logo" },
            {
              src: "/assets/logos/community_center.png",
              alt: "Community Center Logo",
            },
          ].map((logo, index) => (
            <div
              key={index}
              className="w-full sm:w-auto max-w-[280px] flex justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={280} // intrinsic width
                height={280} // intrinsic height
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
