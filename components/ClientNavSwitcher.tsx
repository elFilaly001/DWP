"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Nav1 from "@/components/nav1";

export default function ClientNavSwitcher() {
  const pathname = usePathname();

  return pathname?.includes("/V1home") ? <Nav1 /> : <Navbar />;
}
