import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Support() {
  return (
    <div>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow mt-5 mx-auto">
          <Image
            src={"/assets/misc/campaigns/parents_info.png"}
            alt={"Parents Information"}
            width={600}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
