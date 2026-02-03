
import ContactPage from "@/components/V1/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Architecture Intérieure & Rénovation | DWP",
  description:
    "Contactez DWP pour vos projets d'architecture intérieure, rénovation, design d'espaces, conseils et devis personnalisés. Nous intervenons en France, Europe et Maroc.",
  keywords: [
    // French
    "contact",
    "devis",
    "architecture intérieure",
    "rénovation",
    "design d'intérieur",
    "projets",
    "France",
    "Europe",
    "Maroc",
    "conseil",
    "expertise",
    // English
    "contact",
    "quote",
    "interior architecture",
    "renovation",
    "interior design",
    "projects",
    "France",
    "Europe",
    "Morocco",
    "consulting",
    "expertise"
  ],
  openGraph: {
    title: "Contact | Architecture Intérieure & Rénovation | DWP",
    description:
      "Contactez DWP pour vos projets d'architecture intérieure, rénovation, design d'espaces, conseils et devis personnalisés.",
    url: "https://dwp-seven.vercel.app/contact",
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
    title: "Contact | Architecture Intérieure & Rénovation | DWP",
    description:
      "Contactez DWP pour vos projets d'architecture intérieure, rénovation, design d'espaces, conseils et devis personnalisés.",
    images: ["https://dwp-front.vercel.app/LOGO/logo.png"]
  }
};

export default function Page() {
  return <ContactPage />;
}
