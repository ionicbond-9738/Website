import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { PageTitle } from "@/components/PageTitle";

export default function HistoryPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-screen-xl px-4 flex flex-col ">
          <PageTitle title="History" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
