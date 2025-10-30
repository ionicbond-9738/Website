"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";

const aboutImages = Array.from(
  { length: 7 },
  (_, i) => `/assets/misc/about/${i + 1}.png`,
);

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
          <div className="hero-content flex flex-col lg:flex-row items-center gap-8 relative lg:left-10 py-10 text-center">
            {/* Logo */}
            <Image
              src="/assets/robot/h2o/1.jpg"
              alt="Robot H2O 2024"
              width={800}
              height={800}
              className="w-full max-w-[600px] rounded-lg shadow-2xl"
            />

            {/* Text */}
            <div className="px-4 max-w-2xl text-center flex flex-col items-center gap-4">
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
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="hero-content flex flex-col lg:flex-row items-center gap-10 relative lg:left-10 py-10 text-center">
            {/* Logo */}
            <Carousel
              images={aboutImages}
              interval={3000}
              autoScroll
              className="w-full max-w-[600px] rounded-lg shadow-2xl min-h-[300px] sm:min-h-[400px]"
            />

            {/* Text and title */}
            <div className="px-4 max-w-xl text-center flex flex-col items-center gap-4">
              <h1 className="text-2xl sm:text-5xl text-team font-bold font-anton leading-tight tracking-wide">
                Who We Are
              </h1>
              <div className="mx-auto max-w-screen-2xl px-4 flex flex-wrap justify-center gap-4">
                <p className="text-base sm:text-lg">
                  We are{" "}
                  <span className="italic font-bold text-team">
                    #9738 Ionic Bond
                  </span>
                  , a FIRST Robotics Competition team from Tel-Mond, Israel. Our
                  team, which was established in 2024, consists of 17 passionate
                  high-school students, and 7 dedicated volunteer mentors.
                </p>
                <p className="sm:text-lg">
                  During the 2024 CRESCENDO season, we made a remarkable debut,
                  proudly serving as the
                  <strong> alliance captain for the 4th alliance</strong> in
                  Israeli District #4. We are also proud to have received the{" "}
                  <strong>Rookie Inspiration Award</strong> (given to first-year
                  teams that had a great impact on their community) twice and
                  the <strong>Rookie High Seed Award</strong> (given to
                  first-year teams that has made the highest ranking out of the
                  rookie teams) three times.
                </p>
                <p className="sm:text-lg">
                  Alongside our competitive activities, we participate in
                  outreach initiatives to make an impact on our community and
                  encourage a passion for{" "}
                  <span className="relative group cursor-pointer font-bold">
                    STEAM
                    <span
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
               px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0
               group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    >
                      Science, Technology, Engineering, Arts, and Math
                    </span>
                  </span>
                  .
                </p>
              </div>

              <button className="btn btn-sm sm:btn-md md:btn-lg lg:btn-xl btn-team text-xl text-zinc-900 px-30 py-5">
                <a href={"/impact"}>Details</a>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 flex flex-wrap justify-center gap-4 mt-20">
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
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
