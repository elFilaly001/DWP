import type { Metadata } from "next";
import BlogPage from "@/components/V1/BlogPage";

export const metadata: Metadata = {
  title: "Blog Architecture Intérieure & Lumière | DWP",
  description:
    "Un regard d’expert sur la lumière en architecture intérieure : concepts, paramètres techniques et clés pour créer des espaces harmonieux et sensibles.",
  keywords: [
    "blog architecture intérieure",
    "éclairage intérieur",
    "design lumière",
    "ambiance lumineuse",
    "température de couleur",
    "éclairage naturel",
    "éclairage artificiel",
    "confort visuel",
    "design d'intérieur",
    "DWP",
  ],
  openGraph: {
    title: "Blog Architecture Intérieure & Lumière | DWP",
    description:
      "Comprendre comment la lumière sculpte les espaces et influence les émotions en architecture intérieure.",
    url: "https://dwp-seven.vercel.app/blog",
    siteName: "DWP",
    images: [
      {
        url: "https://dwp-front.vercel.app/LOGO/logo.png",
        width: 800,
        height: 600,
        alt: "DWP Logo",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Architecture Intérieure & Lumière | DWP",
    description:
      "Un regard d’expert sur la lumière en architecture intérieure et son impact sur nos espaces.",
    images: ["https://dwp-front.vercel.app/LOGO/logo.png"],
  },
};

export default function Page() {
  return <BlogPage />;
}
