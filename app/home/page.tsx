
import HomePage from "@/components/V1/home_hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Intérieure & Rénovation | DWP",
  description:
    "DWP - Experts en architecture intérieure, rénovation, et design d'espaces modernes pour particuliers et professionnels. Découvrez nos projets et notre savoir-faire.",
  keywords: [
    // French
    "architecture intérieure",
    "rénovation",
    "design d'intérieur",
    "espace commercial",
    "cuisine",
    "bureau",
    "projets",
    "expertise",
    "France",
    "modern",
    "créatif",
    // English
    "interior architecture",
    "renovation",
    "interior design",
    "commercial space",
    "kitchen",
    "office",
    "projects",
    "expertise",
    "modern design",
    "dwp",
    "design",
    "purpose",
    "design with purpose",
    "creative",
    "Maroc",
    "Morocco",
    "Europe",
    "Africa",
    "Afrique",
    "Casablanca",
    "Rabat"
  ],
  openGraph: {
    title: "Architecture Intérieure & Rénovation | DWP",
    description:
      "DWP - Experts en architecture intérieure, rénovation, et design d'espaces modernes pour particuliers et professionnels.",
    url: "https://dwp-seven.vercel.app/home",
    siteName: "DWP",
    images: [
      {
        url: "https://dwp-front.vercel.app/LOGO/logo.png",
        width: 800,
        height: 600,
        alt: "DWP Logo"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture Intérieure & Rénovation | DWP",
    description:
      "DWP - Experts en architecture intérieure, rénovation, et design d'espaces modernes.",
    images: ["https://dwp-front.vercel.app/LOGO/logo.png"]
  }
};

export default function Page() {
  return <HomePage />;
}
