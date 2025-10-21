// components/Navbar.tsx
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
        <div className="navbar shadow-sm flex items-center px-4 bg-zinc-950 text-black">
            {/* Left side */}
            <ul className="flex items-center gap-3">
                <li>
                    <Link href="/">
                        <div className="btn btn-circle avatar w-10 rounded-full cursor-pointer">
                            <Image src="/logo.png" width={500} height={500} alt="Logo" />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <div className="btn-ghost text-xl text-base-content font-bold cursor-pointer">
                            9738 Ionic Bond
                        </div>
                    </Link>
                </li>
            </ul>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Right side nav links */}
            <ul className="flex items-center gap-3">
                {navItems.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href}>
                            <div
                                className={`btn-ghost text-l text-base-content cursor-pointer ${
                                    pathname === href ? "font-bold" : ""
                                }`}
                            >
                                {label}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
