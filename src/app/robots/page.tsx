"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageTitle } from "@/components/PageTitle";
import Carousel from "@/components/Carousel";
import { useState } from "react";

import { Robot } from "@/app/types/robots";

const robots: Robot[] = [
  {
    name: "Zinc (REEFSCAPE)",
    year: 2025,
    images: Array.from(
      { length: 3 },
      (_, i) => `/Website/assets/robot/zinc/${i + 1}.png`,
    ),
    specs: [
      { title: "Weight", detail: "52kg" },
      { title: "Drivetrain", detail: "Swerve MK4" },
      { title: "Lift", detail: "3 Stage cascade actuated" },
      {
        title: "Coral Intake",
        detail: "Passive hopper that transfers Coral into compliant wheels",
      },
      { title: "Algae Intake", detail: "Vacuum generator connected to a bowl" },
      {
        title: "Vision",
        detail:
          "Custom vision framework designed to run on an external coprocessor",
      },
    ],
    binderLink: "/Website/assets/binders/2025.pdf",
  },
  {
    name: "Dopamine (CRESCENDO)",
    year: 2024,
    images: Array.from(
      { length: 3 },
      (_, i) => `/Website/assets/robot/dopamine/${i + 1}.png`,
    ),
    specs: [
      { title: "Weight", detail: "45kg" },
      {
        title: "Drivetrain",
        detail: "2-Speed Transmission Tank Drive powered by 4 CIMs",
      },
      { title: "Arm", detail: "Single Jointed Arm Actuated by a Lead Screw" },
      {
        title: "Intake and Shooter",
        detail:
          "Combines the functions of intake, indexing and shooting in one mechanism",
      },
      { title: "Climber", detail: "Deployable Hooks Mounted on the Arm" },
    ],
    binderLink: "/Website/assets/binders/2024.pdf",
  },
];

export default function HistoryPage() {
  const [alertVisible, setAlertVisible] = useState(false);

  function sendAlert() {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000); // hide after 2s
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-screen-xl px-4 flex flex-col">
          <PageTitle title="Robots" />
          <div className={"py-5"} />
          {/* Spacer */}
          {robots.map((robot) => {
            // Generate a URL-friendly ID for the section
            const sectionId = robot.year.toString();

            return (
              <section
                key={robot.name}
                id={sectionId} // <-- assign id for linking
                className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 mb-20"
              >
                {/* Carousel */}
                <Carousel
                  images={robot.images}
                  interval={3000}
                  autoScroll
                  className="w-full sm:w-[85vw] lg:w-[50%] h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] rounded-xl shadow-lg"
                />

                {/* Text Block */}
                <div className="flex flex-col justify-center gap-4 w-full lg:w-[45%]">
                  <h2
                    className="font-anton font-bold text-team leading-tight tracking-tight text-center lg:text-left flex items-center gap-2"
                    style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
                  >
                    <div
                      className={"flex-col font-normal sm:items-center w-full"}
                    >
                      {robot.name}
                      <div className={"text-xl"}>{robot.year}</div>
                    </div>

                    {/*                  /!* Copy-link button *!/*/}
                    {/*                  <div*/}
                    {/*                    className="relative group"*/}
                    {/*                    data-tip="Click to copy link to clipboard"*/}
                    {/*                  >*/}
                    {/*                    <button*/}
                    {/*                      onClick={() => {*/}
                    {/*                        navigator.clipboard.writeText(*/}
                    {/*                          `${window.location.origin}/robots#${sectionId}`,*/}
                    {/*                        );*/}
                    {/*                        sendAlert();*/}
                    {/*                      }}*/}
                    {/*                      className="btn btn-ghost"*/}
                    {/*                      aria-label="Copy link"*/}
                    {/*                    >*/}
                    {/*                      <LinkIcon className="fill-accent w-6 h-6" />*/}
                    {/*                    </button>*/}

                    {/*                    /!* Tooltip *!/*/}
                    {/*                    <span*/}
                    {/*                      className="*/}
                    {/*  absolute bottom-full left-1/2 -translate-x-1/2 mb-2*/}
                    {/*  px-3 py-1.5*/}
                    {/*  text-base font-medium*/}
                    {/*  text-white bg-black bg-opacity-90*/}
                    {/*  rounded-md*/}
                    {/*  shadow-md*/}
                    {/*  opacity-0 group-hover:opacity-100*/}
                    {/*  transition-opacity duration-200*/}
                    {/*  whitespace-nowrap*/}
                    {/*  pointer-events-none*/}
                    {/*  z-50*/}
                    {/*  font-inter*/}
                    {/*"*/}
                    {/*                    >*/}
                    {/*                      Click to copy link to clipboard*/}
                    {/*                    </span>*/}
                    {/*                  </div>*/}
                  </h2>

                  <ul className="list shadow-md">
                    {robot.specs.map((spec) => (
                      <li key={spec.title} className="py-2">
                        <div className="text-md text-white">
                          <span className="uppercase font-bold text-team">
                            {spec.title}:{" "}
                          </span>
                          {spec.detail}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button className="btn btn-md btn-team text-lg text-zinc-900 self-center lg:self-start">
                    <a
                      href={robot.binderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Technical Binder
                    </a>
                  </button>
                </div>
              </section>
            );
          })}
          {alertVisible && (
            <div className="toast fixed bottom-5 right-5 z-50">
              <div className="alert alert-soft alert-info">
                <span>Copied link to clipboard!</span>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
