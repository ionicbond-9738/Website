"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/history", label: "History" },
    { href: "/impact", label: "Impact" },
    { href: "/support-us", label: "Support Us!" },
  ];

  return (
    <div>
      <div className="drawer select-none">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar fixed top-0 left-0 right-0 z-50 bg-zinc-900 text-white px-4 shadow-sm">
            {/* Drawer button for small screens */}
            <div className="flex-none lg:hidden">
              <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* Logo + Title */}
            <ul className="flex items-center gap-2">
              <li>
                <Link href="/">
                  <div className="btn-ghost btn-circle w-10 rounded-full cursor-pointer">
                    <Image src="/logo.png" width={500} height={500} alt="Logo" className="select-none" />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <div className="btn-ghost text-2xl font-bold cursor-pointer text-white">
                    <span className={"text-team italic"}>#9738</span> Ionic Bond
                  </div>
                </Link>
              </li>
            </ul>

            <div className="flex-1" />

            {/* Horizontal Nav for large screens */}
            <div className="hidden lg:flex">
              <ul className="flex items-center gap-5">
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>
                      <div
                        className={`btn-ghost text-xl text-base-content cursor-pointer ${pathname === href ? "font-bold" : ""
                          }`}
                      >
                        {label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Drawer Content */}
        <div className="drawer-side">
          <label htmlFor="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <span className={`cursor-pointer ${pathname === href ? "font-bold" : ""}`}>
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="min-w-screen pb-17"></div>
    </div>
  );
}
