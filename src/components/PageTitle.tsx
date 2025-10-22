"use client"

import Image from "next/image"

export function PageTitle({ title }: { title: string }) {
  return <div className="flex flex-row items-center gap-4">
    <Image
      src="/logo-hr.png"
      width={140}
      height={140}
      alt="Logo"
      className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 rounded-lg shadow-2xl"
    />
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-anton text-team">
      {title}
    </h1>
  </div>
}
