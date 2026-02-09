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
        "Aménagement d’espaces universitaires et pédagogiques Nous accompagnons les institutions dans la création d’environnements d’apprentissage inspirants et fonctionnels. Nos solutions intègrent les nouveaux usages pédagogiques, la modularité des espaces et le confort des étudiants et enseignants.L’architecture intérieure devient ici un levier de transmission du savoir, favorisant concentration, échange et innovation.",
      featured: true,
      size: "large",
    },
    {
      title: "Solution Campus & Espaces de Savoir",
      description:
        "Aménagement d’espaces universitaires et pédagogiques Nous accompagnons les institutions dans la création d’environnements d’apprentissage inspirants et fonctionnels. Nos solutions intègrent les nouveaux usages pédagogiques, la modularité des espaces et le confort des étudiants et enseignants. L’architecture intérieure devient ici un levier de transmission du savoir, favorisant concentration, échange et innovation.",
      size: "medium",
    },
    {
      title: "Solution Expérience Hôtelière & Accueil",
      description:
        "Aménagement hôtelier et espaces d’hospitalité Nous concevons des espaces qui racontent une expérience, bien au-delà de l’esthétique. Chaque projet hôtelier est pensé pour créer une immersion émotionnelle, renforcer l’identité du lieu et optimiser l’expérience client, du premier regard jusqu’au dernier souvenir. Design, matériaux, lumière et circulation sont orchestrés pour allier élégance, confort et rentabilité.",
      size: "medium",
    },
    {
      title: "Solution Signalétique & Orientation Intelligente",
      description:
        "Étude et conception de signalétique architecturale Nous développons des solutions de signalétique qui structurent l’espace, guident les usagers et valorisent l’architecture. Notre approche va au-delà du panneau : elle intègre lisibilité, hiérarchisation de l’information, cohérence graphique et intégration architecturale. La signalétique devient un outil de fluidité, de sécurité et d’identité, au service de l’expérience utilisateur.",
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
