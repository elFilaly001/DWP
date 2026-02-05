"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cormorant, Allura } from "next/font/google";
import { Building2, User, Server, Scale, FileText, Shield } from "lucide-react";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
});

interface LegalSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
}

const LegalSection = ({ icon, title, children, index }: LegalSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-[#cbe425]/30 transition-all duration-500">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cbe425]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#cbe425]/10 flex items-center justify-center text-[#cbe425] group-hover:bg-[#cbe425]/20 transition-colors duration-300">
              {icon}
            </div>
            <h2 className={`text-xl md:text-2xl text-white ${cormorant.className}`}>
              {title}
            </h2>
          </div>
          <div className="text-neutral-400 text-sm md:text-base leading-relaxed space-y-3 pl-16">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background with subtle spiral */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <div
            className="w-full md:w-[50%] h-full flex items-center justify-center"
            dangerouslySetInnerHTML={{
              __html: `
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 915 580" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <path d="M 18.898132,563.14957 A 543.94263,543.75146 0 0 1 562.84077,19.398132" style="fill:none;stroke:#c5d558;stroke-width:2.66666667;"/>
    <path style="fill:none;stroke:#c5d558;stroke-width:2.66666667;" d="M -899.02731,355.46605 A 336.18655,336.06839 0 0 1 -562.84075,19.397675" transform="scale(-1,1)"/>
    <path transform="matrix(0,-1,-1,0,0,0)" d="m -563.14906,-691.27235 a 207.68251,207.75557 0 0 1 207.68251,-207.75556" style="fill:none;stroke:#c5d558;stroke-width:2.66666667;"/>
    <path style="fill:none;stroke:#c5d558;stroke-width:2.66666667;" d="M 562.84128,-434.76319 A 128.43051,128.38536 0 0 1 691.27179,-563.14854" transform="scale(1,-1)"/>
    <path d="m 562.84184,434.7637 a 79.324539,79.296654 0 0 1 79.32454,-79.29665" style="fill:none;stroke:#c5d558;stroke-width:2.66666667;"/>
</svg>
`,
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 sm:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              className="text-white/60 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Informations légales
            </motion.div>

            <motion.h1
              className={`text-white ${cormorant.className} text-[clamp(40px,8vw,96px)] leading-[1.05] mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Mentions{" "}
              <span className={`text-[#cbe425] ${allura.className}`}>Légales</span>
            </motion.h1>

            <motion.p
              className="text-white/70 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Conformément aux dispositions légales, voici les informations relatives à l&apos;éditeur du site.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="space-y-6">
            <LegalSection
              icon={<Building2 className="w-6 h-6" />}
              title="Éditeur du site"
              index={0}
            >
              <p><strong className="text-white">Raison sociale :</strong> DWP - Design With Purpose</p>
              <p><strong className="text-white">Forme juridique :</strong> [À compléter]</p>
              <p><strong className="text-white">Capital social :</strong> [À compléter]</p>
              <p><strong className="text-white">Siège social :</strong> 123 Rue de la Création, 75000 Paris, France</p>
              <p><strong className="text-white">SIRET :</strong> [À compléter]</p>
              <p><strong className="text-white">RCS :</strong> [À compléter]</p>
              <p><strong className="text-white">Numéro de TVA intracommunautaire :</strong> [À compléter]</p>
            </LegalSection>

            <LegalSection
              icon={<User className="w-6 h-6" />}
              title="Directeur de la publication"
              index={1}
            >
              <p><strong className="text-white">Nom :</strong> [À compléter]</p>
              <p><strong className="text-white">Qualité :</strong> [À compléter]</p>
              <p><strong className="text-white">Email :</strong> contact@dwp-design.fr</p>
              <p><strong className="text-white">Téléphone :</strong> 01 23 45 67 89</p>
            </LegalSection>

            <LegalSection
              icon={<Server className="w-6 h-6" />}
              title="Hébergement"
              index={2}
            >
              <p><strong className="text-white">Hébergeur :</strong> [Nom de l&apos;hébergeur]</p>
              <p><strong className="text-white">Adresse :</strong> [Adresse de l&apos;hébergeur]</p>
              <p><strong className="text-white">Téléphone :</strong> [Téléphone de l&apos;hébergeur]</p>
            </LegalSection>

            <LegalSection
              icon={<Scale className="w-6 h-6" />}
              title="Propriété intellectuelle"
              index={3}
            >
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo, icônes, etc.) 
                est la propriété exclusive de DWP ou de ses partenaires. Toute reproduction, distribution, 
                modification, adaptation, retransmission ou publication de ces éléments est strictement 
                interdite sans l&apos;accord écrit préalable de DWP.
              </p>
              <p>
                Les marques et logos figurant sur ce site sont des marques déposées par DWP ou ses 
                partenaires. Toute reproduction totale ou partielle de ces marques ou logos, effectuée 
                à partir des éléments du site sans l&apos;autorisation expresse de DWP, est prohibée.
              </p>
            </LegalSection>

            <LegalSection
              icon={<FileText className="w-6 h-6" />}
              title="Conditions d&apos;utilisation"
              index={4}
            >
              <p>
                L&apos;utilisation du site implique l&apos;acceptation pleine et entière des conditions générales 
                d&apos;utilisation décrites ci-après. Ces conditions d&apos;utilisation sont susceptibles d&apos;être 
                modifiées ou complétées à tout moment.
              </p>
              <p>
                DWP se réserve le droit de modifier, à tout moment et sans préavis, le contenu du site 
                ainsi que les présentes mentions légales. L&apos;utilisateur est donc invité à les consulter 
                régulièrement.
              </p>
            </LegalSection>

            <LegalSection
              icon={<Shield className="w-6 h-6" />}
              title="Limitation de responsabilité"
              index={5}
            >
              <p>
                DWP s&apos;efforce de fournir sur ce site des informations aussi précises que possible. 
                Toutefois, DWP ne pourra être tenue responsable des omissions, des inexactitudes et 
                des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers 
                partenaires qui lui fournissent ces informations.
              </p>
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site internet en direction 
                d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la 
                responsabilité de DWP.
              </p>
            </LegalSection>
          </div>

          {/* Last updated */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-neutral-800 text-center"
          >
            <p className="text-neutral-500 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
