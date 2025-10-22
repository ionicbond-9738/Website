import type {Metadata, Viewport} from "next";
import {Geist, Geist_Mono, Inter, Anton} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

const anton = Anton({
    variable: "--font-anton",
    weight: "400",
    subsets: ["latin"]
})

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "9738 Ionic Bond",
    description: "The website of the FRC team Ionic Bond 9738",
};

export const viewport: Viewport = {
  width: 'device-width',
    initialScale: 1
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${anton.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}
        </body>
        </html>
    );
}
