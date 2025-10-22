import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AboutCarousel from "@/components/AboutCarousel";

export default function HomePage() {

    return (
        <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1">
                <div className="mx-auto max-w-screen-xl px-4 flex flex-col ">

                    {/* Logo + Heading */}
                    <div className="flex flex-row items-center gap-4">
                        <Image
                            src="/logo-hr.png"
                            width={140}
                            height={140}
                            alt="Logo"
                            className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 rounded-lg shadow-2xl"
                        />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-anton text-team">
                            About
                        </h1>
                    </div>

                    {/* Carousel + Text block */}
                    <div className="flex flex-col lg:flex-row items-start ">

                        {/* Left: Carousel */}
                        <AboutCarousel/>

                        {/* Right: Text + Button */}
                        <div className="flex flex-col justify-center gap-4 max-w-lg">

                            <h2 className="text-3xl sm:text-5xl text-team font-bold font-anton leading-tight tracking-wide">
                                Who we are
                            </h2>

                            <p className="text-base sm:text-lg">
                                We are 9738 Ionic Bond, a FIRST Robotics Competition team from Tel-Mond, Israel. Our
                                team, which was established in 2024, consists of 17 passionate high-school students, and
                                7 dedicated volunteer mentors.
                            </p>
                            <p>
                                During the 2024 CRESCENDO season, we made a remarkable debut, proudly serving as the
                                alliance captain for the 4th alliance in Israeli District #4. We are also proud to have
                                received the Rookie Inspiration Award (given to first-year teams that had a great impact
                                on their community) twice and the Rookie High Seed Award (given to first-year teams that
                                has made the highest ranking out of the rookie teams) three times.
                            </p>
                            <p>
                                Alongside our competitive activities, we participate in outreach initiatives to make an
                                impact on our community and encourage a passion for STEAM. </p>
                            <a href={"/impact"}>
                                <button
                                    className="btn btn-sm sm:btn-md md:btn-lg lg:btn-xl btn-team text-lg text-zinc-900">
                                    For more details about our Outreach efforts
                                </button>
                            </a>
                        </div>

                    </div>
                </div>

            </main>

            <Footer/>
        </div>
    )
}