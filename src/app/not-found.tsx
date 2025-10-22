import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-zinc-950 text-white h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <Image src="/logo-hr.png" alt="Go home" width={250} height={250} />
        <div className="text-4xl font-bold text-center">
          404 - Page Not Found
        </div>
        <Link href="/" className={"btn text-xl"}>
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}
