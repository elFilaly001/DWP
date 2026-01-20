"use client";
import { useState, useEffect } from "react";
import { PortfolioHeroSection } from "./portfolio/PortfolioHeroSection";
import { PortfolioServicesGrid } from "./portfolio/PortfolioServicesGrid";
import { PortfolioCTASection } from "./portfolio/PortfolioCTASection";

const PortfolioPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Rénovation de cuisine",
      description:
        "Transformez votre cuisine en un paradis culinaire avec des appareils modernes, des rangements sur mesure et des finitions élégantes.",
      featured: true,
      size: "large",
    },
    {
      title: "Conception de bureau",
      description:
        "Créez des espaces de travail inspirants qui stimulent la productivité et reflètent la culture de votre entreprise.",
      size: "medium",
    },
    {
      title: "Rénovation complète",
      description:
        "Des transformations totales qui réinventent votre espace de vie, du sol au plafond, avec un design cohérent.",
      size: "medium",
    },
    {
      title: "Couloirs & Hallways",
      description:
        "Optimisez vos espaces de transition avec des solutions de rangement astucieuses et des éléments de design.",
      size: "small",
    },
    {
      title: "Espaces commerciaux",
      description:
        "Concevez des environnements commerciaux qui améliorent l'expérience client et favorisent la réussite.",
      size: "small",
    },
    {
      title: "Design extérieur",
      description:
        "Sublimez l'attrait de votre propriété avec des rénovations extérieures remarquables.",
      size: "small",
    },
  ];

  return (
    <div className="bg-white">
      <PortfolioHeroSection />
      <PortfolioServicesGrid services={services} />
      <PortfolioCTASection />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expand {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-dash {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: dash 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
