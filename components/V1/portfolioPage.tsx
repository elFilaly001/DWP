"use client";
import { useState, useEffect } from "react";
import { PortfolioHeroSection } from "./portfolio/PortfolioHeroSection";
// import { PortfolioServicesGrid } from "./portfolio/PortfolioServicesGrid";
import { PortfolioCTASection } from "./portfolio/PortfolioCTASection";
import AnimatedImageSlider from "./AnimatedImageSlider";

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

  
  const slider1Images = [
    {
      title: "PWC",
      description:
        "Un plateau lumineux et structuré, pensé pour allier collaboration et intimité au quotidien.",
      imageUrl: "/pwc-visual-6.webp",
    },
    {
      title: "Espace de réunion immersif",
      description:
        "Une salle de réunion habillée de matières chaleureuses, où la lumière souligne les volumes et les perspectives.",
      imageUrl:
        "/pwc-visual-1.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-2.webp",
    },
    {
      title: "Espace de réunion immersif",
      description:
        "Une salle de réunion habillée de matières chaleureuses, où la lumière souligne les volumes et les perspectives.",
      imageUrl:
        "/pwc-visual-3.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-4.webp",
    },
    {
      title: "Espace de réunion immersif",
      description:
        "Une salle de réunion habillée de matières chaleureuses, où la lumière souligne les volumes et les perspectives.",
      imageUrl:
        "/pwc-visual-5.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual.webp",
    },
    {
      title: "Espace de réunion immersif",
      description:
        "Une salle de réunion habillée de matières chaleureuses, où la lumière souligne les volumes et les perspectives.",
      imageUrl:
        "/pwc-visual-7.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-8.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-9.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-10.webp",
    },
    {
      title: "Espace de réunion immersif",
      description:
        "Une salle de réunion habillée de matières chaleureuses, où la lumière souligne les volumes et les perspectives.",
      imageUrl:
        "/pwc-visual-11.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-12.webp",
    },
    {
      title: "Espace de réunion immersif",
      description:
        "Une salle de réunion habillée de matières chaleureuses, où la lumière souligne les volumes et les perspectives.",
      imageUrl:
        "/pwc-visual-13.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-14.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-15.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-16.webp",
    },
    {
      title: "Accueil & lobby",
      description:
        "Un espace d’accueil qui pose le ton dès l’entrée : lisible, rassurant et immédiatement identifiable.",
      imageUrl:
        "/pwc-visual-17.webp",
    },
  ];

  const slider2Images = [
      {
        title: "ABS (Africa Business School) ",
        description:
          "Un cadre académique d'excellence où se rencontrent prestige, modernité et esprit de réseau.",
        imageUrl:
          "/abs-visual-3.webp",
      },
      {
        title: "Suite parentale",
        description:
          "Une chambre pensée comme un refuge, où la palette de couleurs et la lumière créent une atmosphère apaisée.",
        imageUrl:
          "/abs-visual-2.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-1.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-4.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-5.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-6.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-7.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-8.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-9.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-10.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-11.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-12.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-13.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-14.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-15.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-16.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-17.webp",
      },
      {
        title: "Espace lecture & bibliothèque",
        description:
          "Un coin lecture enveloppant, structuré par des modules de rangements sur mesure.",
        imageUrl:
          "/abs-visual-18.webp",
      },
  ];

  const slider3Images = [
    {
      title: "Clifford Chance",
      description:
        "Des bureaux de très haut standing conjuguant élégance intemporelle et confidentialité absolue.",
      imageUrl:
        "/clifford-chance-visual-13.webp",
      },
      {
        title: "Salle de cours nouvelle génération",
        description:
          "Un environnement modulaire, pensé pour soutenir les pédagogies actives et les échanges entre étudiants.",
        imageUrl:
          "/clifford-chance-visual-2.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-3.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-4.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-5.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-6.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-7.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-8.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-9.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-10.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-11.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-12.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-1.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-14.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-15.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-16.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-17.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/clifford-chance-visual-18.webp",
      },
  ];

  const slider4Images = [
    {
      title: "MARSA MAROC",
      description:
        "Un aménagement ergonomique aux lignes sobres, reflétant la solidité d'un grand leader institutionnel.",
      imageUrl:
        "/marsa-1.webp",
      },
      {
        title: "Salle de cours nouvelle génération",
        description:
          "Un environnement modulaire, pensé pour soutenir les pédagogies actives et les échanges entre étudiants.",
        imageUrl:
          "/marsa-2.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-3.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-4.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-5.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-6.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-7.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-8.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-9.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-10.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-11.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-12.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-13.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-14.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-15.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-16.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-17.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-18.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-19.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-20.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/marsa-21.webp",
      },
  ];

  const slider5Images = [
    {
      title: "PWC Cyber Security",
      description:
        "Un hub technologique avant-gardiste favorisant une concentration de pointe et une sécurité maximale.",
      imageUrl:
        "/pwc-cyber-1.webp",
      },
      {
        title: "Salle de cours nouvelle génération",
        description:
          "Un environnement modulaire, pensé pour soutenir les pédagogies actives et les échanges entre étudiants.",
        imageUrl:
          "/pwc-cyber-2.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-3.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-4.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-5.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-6.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-7.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-8.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-9.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-10.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-11.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-12.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-13.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-14.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-15.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-16.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-17.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-18.webp",
      },
      {
        title: "Espaces informels",
        description:
          "Des zones de respiration au cœur du campus, favorisant la rencontre, l’échange et la créativité.",
        imageUrl:
          "/pwc-cyber-19.webp",
      },
  ];

  const codingSchoolImageFiles = [
    "IMG_0957.jpg",
    "IMG_0907.jpg",
    "IMG_1160.jpg",
    "IMG_1222.jpg",
    "IMG_1139.jpg",
    "IMG_1034.jpg",
    "IMG_1116.jpg",
    "IMG_0985.jpg",
    "IMG_1119.jpg",
    "IMG_1050.jpg",
    "IMG_1207.jpg",
    "IMG_1020.jpg",
    "IMG_1002.jpg",
    "IMG_1049.jpg",
    "IMG_1249.jpg",
    "IMG_1133.jpg",
    "IMG_1246.jpg",
    "IMG_1181.jpg",
    "IMG_1241.jpg",
    "IMG_0962.jpg",
    "IMG_1057.jpg",
    "IMG_0969.jpg",
    "IMG_1161.jpg",
    "IMG_1237.jpg",
    "IMG_1118.jpg",
    "IMG_1147.jpg",
    "IMG_1230.jpg",
    "IMG_1066.jpg",
    "IMG_0978.jpg",
    "IMG_0984.jpg",
    "IMG_1193.jpg",
    "IMG_1108.jpg",
    "IMG_1059.jpg",
    "IMG_1102.jpg",
    "IMG_1137.jpg",
    "IMG_1169.jpg",
    "IMG_1092.jpg",
    "IMG_1176.jpg",
    "IMG_1240.jpg",
    "IMG_1226.jpg",
    "IMG_1185.jpg",
    "IMG_1223.jpg",
    "IMG_0901.jpg",
    "IMG_1174.jpg",
    "IMG_1242.jpg",
    "IMG_1167.jpg",
    "IMG_1138.jpg",
    "IMG_1090.jpg",
    "IMG_1168.jpg",
    "IMG_1060.jpg",
    "IMG_1091.jpg",
    "IMG_1219.jpg",
    "IMG_1166.jpg",
    "IMG_0990.jpg",
    "IMG_1225.jpg",
    "IMG_1190.jpg",
    "IMG_1239.jpg",
    "IMG_1248.jpg",
    "IMG_1146.jpg",
    "IMG_0976.jpg",
    "IMG_1071.jpg",
    "IMG_0958.jpg",
    "IMG_1183.jpg",
    "IMG_0893.jpg",
    "IMG_1078.jpg",
    "IMG_1052.jpg",
    "IMG_1194.jpg",
    "IMG_1046.jpg",
    "IMG_0986.jpg",
    "IMG_1244.jpg",
    "IMG_0974.jpg",
    "IMG_0960.jpg",
    "IMG_0908.jpg",
    "IMG_1188.jpg",
    "IMG_1055.jpg",
    "IMG_1191.jpg",
    "IMG_1123.jpg",
    "IMG_1152.jpg",
    "IMG_1096.jpg",
    "IMG_1200.jpg",
    "IMG_1053.jpg",
    "IMG_1189.jpg",
    "IMG_1224.jpg",
    "IMG_1170.jpg",
    "IMG_1209.jpg",
    "IMG_1247.jpg",
    "IMG_1128.jpg",
    "IMG_0965.jpg",
  ];

  const codingSchoolImages = codingSchoolImageFiles.map((file, index) => ({
    title:
      index === 0
        ? "1337 School of coding"
        : "",
    description:
      index === 0
        ? "Un espace ouvert et disruptif, conçu pour stimuler l'innovation et l'intelligence collective."
        : "",
    imageUrl: `/codingschool/${file}`,
  }));

  return (
    <div className="bg-white">
      <PortfolioHeroSection />
      <AnimatedImageSlider mainPosition="right" images={codingSchoolImages} />
      <AnimatedImageSlider mainPosition="left" images={slider5Images} />
      <AnimatedImageSlider mainPosition="right" images={slider3Images} />
      <AnimatedImageSlider mainPosition="left" images={slider4Images} />
      <AnimatedImageSlider mainPosition="right" images={slider1Images} />
      <AnimatedImageSlider mainPosition="left" images={slider2Images} />
      {/* <PortfolioServicesGrid services={services} /> */}
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
