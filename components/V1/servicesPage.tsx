"use client";
import { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { ServicesGrid } from "./ServicesGrid";
import { ProcessSection } from "./ProcessSection";
import { TestimonialSection } from "./TestimonialSection";
import { CTASection } from "./CTASection";
import { ReferencesSection } from "./ReferencesSection";

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
      title: "Espaces de Travail Performants",
      description:
        "Nous aménageons des salles de cours, bibliothèques et espaces collaboratifs adaptés aux nouveaux usages pédagogiques. Nos solutions privilégient la modularité, le confort et l’acoustique afin d’améliorer la concentration, l’interaction et le bien-être des étudiants comme des enseignants.",
      featured: true,
      size: "large",
    },
    {
      title: "Campus & Espaces de savoir",
      description:
        "Nous accompagnons les établissements d’enseignement dans la conception et l’aménagement d’espaces pédagogiques modernes : salles de cours, bibliothèques et zones collaboratives.Chaque projet intègre les nouveaux usages, la modularité des espaces et le confort des étudiants comme des enseignants afin de favoriser concentration, échanges et apprentissage.",
      size: "medium",
    },
    {
      title: "Expérience hôtelière & accueil",
      description:
        "Nous concevons et aménageons des hôtels, résidences et espaces d’accueil pensés pour créer une véritable immersion émotionnelle pour le visiteur.Chaque projet valorise l’identité du lieu grâce au design, aux matériaux, à la lumière et à la circulation, tout en garantissant confort, fonctionnalité et efficacité d’exploitation.",
      size: "medium",
    },
    {
      title: "Signalétique & orientation intelligente",
      description:
        "Nous concevons des systèmes de signalétique architecturale qui structurent les espaces et facilitent l’orientation des usagers.Au-delà du simple panneau, notre approche intègre lisibilité, hiérarchisation de l’information, cohérence graphique et intégration au bâtiment afin d’améliorer la fluidité des déplacements, la sécurité et l’expérience utilisateur.",
      size: "small",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Écoute & Cadrage du Projet",
      description:
        "Analyse approfondie des besoins, des usages et des objectifs du client. Définition du périmètre, des attentes, des délais et des contraintes du projet.",
      fibonacci: 1,
    },
    {
      number: "02",
      title: "Diagnostic & Analyse de l’Existant",
      description:
        "Étude du site, des surfaces, des flux et des contraintes techniques. Identification des opportunités d’optimisation et des leviers de transformation.",
      fibonacci: 1,
    },
    {
      number: "03",
      title: "Concept Architectural & Spatial",
      description:
        "Élaboration d’un concept fort, traduisant la vision du projet. Organisation des volumes, des usages et des ambiances, en cohérence avec l’identité du lieu et des usagers.",
      fibonacci: 2,
    },
    {
      number: "04",
      title: "Design Détaillé & Visualisation",
      description:
        "Définition des matériaux, du mobilier, des détails et production de rendus 3D. Cette étape permet une projection claire et une validation avant exécution.",
      fibonacci: 3,
    },
    {
      number: "05",
      title: "Études Techniques & Coordination",
      description:
        "Développement des études techniques (CVC, électricité, éclairage, acoustique, signalétique). Coordination des intervenants pour assurer cohérence, conformité et performance.",
      fibonacci: 5,
    },
    {
      number: "06",
      title: "Budgétisation & Estimation des Coûts",
      description:
        "Évaluation financière du projet à partir du concept défini. Estimation des coûts par poste, arbitrages techniques et ajustements pour garantir la cohérence entre ambition, budget et faisabilité.",
      fibonacci: 8,
    },
    {
      number: "07",
      title: "Pilotage & Suivi de Réalisation",
      description:
        "Organisation, coordination et suivi des travaux. Contrôle des délais, des coûts et de la qualité d’exécution.",
      fibonacci: 13,
    },
    {
      number: "08",
      title: "Livraison & Accompagnement Final",
      description:
        "Réception des ouvrages, ajustements et accompagnement à la prise en main des espaces. L’objectif : livrer un projet maîtrisé, conforme et durable.",
      fibonacci: 13,
    },
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      <TestimonialSection />
      <ServicesGrid services={services} />
      <ProcessSection process={process} />
      <ReferencesSection />
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
