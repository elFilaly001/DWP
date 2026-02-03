
import PortfolioPage from "@/components/V1/portfolioPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Réalisations | Architecture Intérieure & Rénovation | DWP",
  description:
    "Découvrez nos réalisations en architecture intérieure, rénovation de cuisines, bureaux, espaces commerciaux et extérieurs. Projets sur mesure pour particuliers et professionnels.",
  keywords: [
    // French
    "portfolio",
    "réalisations",
    "architecture intérieure",
    "rénovation",
    "design d'intérieur",
    "cuisine",
    "bureau",
    "espace commercial",
    "extérieur",
    "projets sur mesure",
    "France",
    "Europe",
    // English
    "portfolio",
    "projects",
    "interior architecture",
    "renovation",
    "interior design",
    "kitchen",
    "office",
    "commercial space",
    "outdoor design",
    "custom projects",
    "France",
    "Europe",
    "Maroc",
    "Morocco",
    "Africa",
    "Afrique",
    "Casablanca",
    "Rabat"
  ],
  openGraph: {
    title: "Portfolio Réalisations | Architecture Intérieure & Rénovation | DWP",
    description:
      "Découvrez nos réalisations en architecture intérieure, rénovation de cuisines, bureaux, espaces commerciaux et extérieurs.",
    url: "https://dwp-seven.vercel.app/portfolio",
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
    title: "Portfolio Réalisations | Architecture Intérieure & Rénovation | DWP",
    description:
      "Découvrez nos réalisations en architecture intérieure, rénovation de cuisines, bureaux, espaces commerciaux et extérieurs.",
    images: ["https://dwp-front.vercel.app/LOGO/logo.png"]
  }
};

export default function Page() {
  return <PortfolioPage />;
}
