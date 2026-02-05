
import ServicePage from "@/components/V1/servicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise & Services en Architecture Intérieure | DWP",
  description:
    "Découvrez l’expertise DWP en rénovation, design d’intérieur, conception de bureaux, cuisines, espaces commerciaux et extérieurs. Solutions sur mesure pour particuliers et professionnels.",
  keywords: [
    "expertise architecture intérieure",
    "services rénovation",
    "design d'intérieur",
    "conception de bureau",
    "rénovation de cuisine",
    "espace commercial",
    "extérieur",
    "projets sur mesure",
    "France",
    "créatif",
    "modern",
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
    "Rabat",
    "Chefchaouni Hamza",  
    "Hamza Chefchaouni",
    "Chefchaouni"
  ],
  openGraph: {
    title: "Expertise & Services en Architecture Intérieure | DWP",
    description:
      "Découvrez l’expertise DWP en rénovation, design d’intérieur, conception de bureaux, cuisines, espaces commerciaux et extérieurs.",
    url: "https://dwp-seven.vercel.app/expertise",
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
    title: "Expertise & Services en Architecture Intérieure | DWP",
    description:
      "Découvrez l’expertise DWP en rénovation, design d’intérieur, conception de bureaux, cuisines, espaces commerciaux et extérieurs.",
    images: ["https://dwp-front.vercel.app/LOGO/logo.png"]
  }
};

export default function Page() {
  return <ServicePage />;
}
