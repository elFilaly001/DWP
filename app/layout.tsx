import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Nav1 from "@/components/V1/nav1";
import Footer from "@/components/V1/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DWP",
  description:
    "Mobilier professionnel de qualite superieure. Mobilier scolaire, de bureau, solutions acoustiques et projets sur mesure. Fabrique au Maroc.",
  generator: "Me",
  icons: {
    icon: "/LOGO/21212.png",
    shortcut: "/LOGO/21212.png",
    apple: "/LOGO/21212.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <Nav1 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
