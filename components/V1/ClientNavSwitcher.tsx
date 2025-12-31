"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/V0/navbar";
import Nav1 from "@/components/V0/nav1";

export default function ClientNavSwitcher() {
  const pathname = usePathname();

  return pathname?.includes("/V1") ? <Nav1 /> : <Navbar />;
}
