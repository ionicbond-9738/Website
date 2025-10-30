import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { PageTitle } from "@/components/PageTitle";
import Image from "next/image";

const impactImages = Array.of(
  "/assets/misc/impact/independence_demonstration.png",
  "/assets/misc/impact/end_of_june.jpg",
  "/assets/misc/impact/parent_demonstration.jpg",
);

const cheeseImages = Array.from(
  { length: 7 },
  (_, i) => `/placeholders/cheese.jpg`,
);

function ActivityCard({
  title,
  image,
  text,
}: {
  title: string;
  image: string;
  text: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 w-full max-w-5xl">
      {/* Image */}
      <div className="relative w-full sm:w-4/5 md:w-[420px] lg:w-[520px] aspect-[16/9] max-w-full rounded-lg shadow-2xl overflow-hidden select-none">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center gap-4 max-w-lg text-center lg:text-left">
        <h2 className="text-3xl sm:text-5xl text-team font-bold font-anton leading-tight tracking-wide">
          {title}
        </h2>
        <p className="text-base sm:text-lg">{text}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-screen-xl px-4 flex flex-col ">
          <PageTitle title="Impact" />

          {/* Carousel + Text block */}
          <div className="flex flex-col lg:flex-row items-start">
            {/* Left: Carousel */}
            <Carousel
              images={impactImages}
              interval={3000}
              autoScroll
              className="w-[70vw] max-w-[600px] h-[165px] sm:h-[210px] md:h-[240px] lg:h-[300px] mr-16 mt-5 mb-8"
            />

            {/* Right: Text + Button */}
            <div className="flex flex-col justify-center gap-4 max-w-lg">
              <h2 className="text-3xl sm:text-5xl text-team font-bold font-anton leading-tight tracking-wide">
                Our Mission
              </h2>

              <p className={"text-base sm:text-lg"}>
                We believe that making a lasting impact on our community is just
                as important as building the robot. Our outreach initiatives
                enable us to connect with the community, promote interest in
                STEAM, and make a meaningful difference through volunteering and
                social media activity.
              </p>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center space-y-7">
            <ActivityCard
              title="Hospital Schneider"
              image="/assets/misc/impact/hospital.jpg"
              text="Our team along Steampunk 1577 volenteered at hospital Schneider,
                         encouraging patients to participate in STEM related activities."
            />
            <ActivityCard
              title="Robotics Demonstrations"
              image="/assets/misc/impact/demonstration.jpg"
              text="
                        In our school and community,
                        we organized numerous robotics demonstrations
                        to expose them to our team and FIRST."
            />
            <ActivityCard
              title="Elementary School Visits"
              image="/assets/misc/impact/elementary.jpg"
              text="Teaching elementary school students
              about STEM through engaging science
               and technology activities, we
               encourage them to explore and
                learn more about science and technology."
            />
            <ActivityCard
              title="Hanubotica"
              image="/assets/misc/impact/hanubotica.jpg"
              text="A fun Hanukkah event for kids in elementary
              school and kindergarten featuring STEM related
              activities and demonstration of our robot."
            />
            <ActivityCard
              title="Promoting Inclusivity"
              image="/assets/misc/impact/pride.jpg"
              text="Our team promotes inclusivity in the
               FIRST Israel community through the
               yearly End of June Event.."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
