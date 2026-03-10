import type { Metadata } from "next";
import BlogPage from "@/components/V1/BlogPage";

export const metadata: Metadata = {
  title: "DWP - Blog",
  description:
    "Explorations, réflexions et regards d'experts sur l'architecture intérieure, la lumière et le design.",
  keywords: [
    "blog architecture intérieure",
    "éclairage intérieur",
    "design lumière",
    "ambiance lumineuse",
    "design d'intérieur",
    "DWP",
  ],
  openGraph: {
    title: "DWP - Blog",
    description:
      "Explorations, réflexions et regards d'experts sur l'architecture intérieure, la lumière et le design.",
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
