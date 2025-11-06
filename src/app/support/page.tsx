import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageTitle } from "@/components/PageTitle";

export default function Support() {
  return (
    <div>
      <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto max-w-screen-xl px-8 mt-8 flex flex-col items-center">
            <PageTitle title="Support Us!" />
            <h1 className="text-2xl sm:text-xl lg:text-4xl font-bold font-anton leading-tight text-team pt-10 ml-10">
              What is <span className="italic">FIRST</span>
              {"\u00A0\u00A0"}Robotics Competition?
            </h1>
            <p className={"text-md sm:text-lg lg:text-xl ml-10"}>
              By sponsoring our team, you'll play a vital role in our success,
              helping us <br />
              reach new heights and enhancing our impact on the community.
            </p>
            <button className="btn btn-sm sm:btn-md md:btn-lg lg:btn-xl btn-team text-xl text-zinc-900 px-30 mt-5 ml-10 max-w-md justify-center items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"/Website/assets/sponsors.pdf"}
              >
                Details
              </a>
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
