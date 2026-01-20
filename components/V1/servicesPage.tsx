"use client";
import { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { ServicesGrid } from "./ServicesGrid";
import { ProcessSection } from "./ProcessSection";
import { TestimonialSection } from "./TestimonialSection";
import { CTASection } from "./CTASection";

const ServicesPage = () => {
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
        "Transformez votre cuisine en un paradis culinaire avec des appareils modernes, des rangements sur mesure et des finitions élégantes qui inspirent la créativité.",
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

  const process = [
    {
      number: "01",
      title: "Rencontre",
      description:
        "Tout projet débute par une rencontre. Un temps d’échange essentiel pour comprendre votre vision, vos usages, vos contraintes et vos ambitions, et poser les bases d’une collaboration claire et sereine.",
      fibonacci: 1,
    },
    {
      number: "02",
      title: "Intention",
      description:
        "Nous analysons le lieu, son contexte et son potentiel. Cette phase permet de définir une intention forte, en alignant identité, fonctionnalité et sens, afin de donner une direction claire au projet.",
      fibonacci: 1,
    },
    {
      number: "03",
      title: "Narration",
      description:
        "Nous traduisons l’intention en concept. Ambiances, lignes directrices et partis pris esthétiques prennent forme pour construire une narration cohérente et élégante autour de l’espace.",
      fibonacci: 2,
    },
    {
      number: "04",
      title: "Définition des espaces",
      description:
        "Le concept est ensuite structuré et rationalisé. Organisation des volumes, parcours, matériaux et premières orientations techniques sont définis pour assurer l’équilibre entre design, usage et faisabilité.",
      fibonacci: 3,
    },
    {
      number: "05",
      title: "Coordination ",
      description:
        "Nous accompagnons le projet dans sa phase de réalisation. La coordination des intervenants, le suivi des choix et le contrôle de la qualité garantissent le respect de la vision initiale à chaque étape.",
      fibonacci: 5,
    },
    {
      number: "06",
      title: "Finitions",
      description:
        "Chaque détail compte. Nous affinons, ajustons et veillons à la cohérence globale du projet, afin d’atteindre un niveau de finition à la hauteur des exigences définies.",
      fibonacci: 8,
    },
    {
      number: "07",
      title: "Détails ",
      description:
        "Les détails viennent parfaire le projet. Finitions, matériaux et éléments sur mesure sont ajustés avec précision pour garantir une cohérence globale.",
      fibonacci: 13,
    },
    {
      number: "08",
      title: "Révélation",
      description:
        "Le projet est livré dans sa forme aboutie. Un espace prêt à être vécu, fidèle à l’intention initiale et révélant pleinement l’identité du lieu.",
      fibonacci: 13,
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      <TestimonialSection />
      <ServicesGrid services={services} />
      <ProcessSection process={process} />
      <CTASection />

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

export default ServicesPage;
