import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { PageTitle } from "@/components/PageTitle";

const aboutImages = Array.from(
  { length: 7 },
  (_, i) => `/assets/misc/about/${i + 1}.png`,
);

export default function AboutPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-screen-xl px-4 flex flex-col ">
          <PageTitle title="About" />

          {/* Carousel + Text block */}
          <div className="flex flex-col lg:flex-row items-start ">
            {/* Left: Carousel */}
            <Carousel
              images={aboutImages}
              interval={3000}
              autoScroll
              className="w-[90vw] max-w-[800px] h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] mr-20 mt-10 mb-10"
            />

            {/* Right: Text + Button */}
            <div className="flex flex-col justify-center gap-4 max-w-lg">
              <h2 className="text-3xl sm:text-5xl text-team font-bold font-anton leading-tight tracking-wide">
                Who We Are
              </h2>

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
                teams that had a great impact on their community) twice and the{" "}
                <strong>Rookie High Seed Award</strong> (given to first-year
                teams that has made the highest ranking out of the rookie teams)
                three times.
              </p>
              <p className="sm:text-lg">
                Alongside our competitive activities, we participate in outreach
                initiatives to make an impact on our community and encourage a
                passion for{" "}
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
              <button className="btn btn-sm sm:btn-md md:btn-lg lg:btn-xl btn-team text-lg text-zinc-900">
                <a href={"/impact"}>Details</a>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
