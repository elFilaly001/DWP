"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cormorant, Allura } from "next/font/google";
import { 
  Shield, 
  Database, 
  Clock, 
  Lock, 
  UserCheck, 
  Globe, 
  Cookie, 
  Mail,
  Eye,
  Trash2,
  Edit3,
  Download
} from "lucide-react";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
});

interface PrivacySectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
}

const PrivacySection = ({ icon, title, children, index }: PrivacySectionProps) => {
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

interface RightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const RightCard = ({ icon, title, description, index }: RightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-5 hover:border-[#cbe425]/20 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#cbe425]/10 flex items-center justify-center text-[#cbe425] flex-shrink-0 group-hover:bg-[#cbe425]/20 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h4 className="text-white font-medium mb-1">{title}</h4>
          <p className="text-neutral-500 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ConfidentialitePage() {
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
              Protection des données
            </motion.div>

            <motion.h1
              className={`text-white ${cormorant.className} text-[clamp(40px,8vw,96px)] leading-[1.05] mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Politique de{" "}
              <span className={`text-[#cbe425] ${allura.className}`}>Confidentialité</span>
            </motion.h1>

            <motion.p
              className="text-white/70 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Nous accordons une grande importance à la protection de vos données personnelles et au respect de votre vie privée.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="space-y-6">
            <PrivacySection
              icon={<Shield className="w-6 h-6" />}
              title="Engagement de confidentialité"
              index={0}
            >
              <p>
                DWP s&apos;engage à protéger la vie privée de ses utilisateurs et à traiter leurs données 
                personnelles avec le plus grand soin, conformément au Règlement Général sur la Protection 
                des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
              <p>
                Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons 
                et protégeons vos informations personnelles lorsque vous utilisez notre site web.
              </p>
            </PrivacySection>

            <PrivacySection
              icon={<Database className="w-6 h-6" />}
              title="Données collectées"
              index={1}
            >
              <p className="font-medium text-white">Nous pouvons collecter les données suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                <li><strong className="text-white">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
                <li><strong className="text-white">Données de communication :</strong> messages envoyés via le formulaire de contact</li>
                <li><strong className="text-white">Données de projet :</strong> informations relatives à vos projets de design d&apos;intérieur</li>
              </ul>
            </PrivacySection>

            <PrivacySection
              icon={<Globe className="w-6 h-6" />}
              title="Finalités du traitement"
              index={2}
            >
              <p className="font-medium text-white">Vos données sont collectées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Gérer notre relation commerciale</li>
                <li>Améliorer nos services et l&apos;expérience utilisateur</li>
                <li>Envoyer des communications marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </PrivacySection>

            <PrivacySection
              icon={<Clock className="w-6 h-6" />}
              title="Durée de conservation"
              index={3}
            >
              <p>
                Vos données personnelles sont conservées pendant une durée qui n&apos;excède pas la durée 
                nécessaire aux finalités pour lesquelles elles sont collectées et traitées :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong className="text-white">Données clients :</strong> 5 ans après la fin de la relation commerciale</li>
                <li><strong className="text-white">Données de prospection :</strong> 3 ans après le dernier contact</li>
                <li><strong className="text-white">Cookies de navigation :</strong> 13 mois maximum</li>
              </ul>
            </PrivacySection>

            <PrivacySection
              icon={<Lock className="w-6 h-6" />}
              title="Sécurité des données"
              index={4}
            >
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                protéger vos données personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction.
              </p>
              <p>
                Ces mesures incluent le chiffrement SSL, la limitation des accès, et des sauvegardes 
                régulières de nos systèmes.
              </p>
            </PrivacySection>

            <PrivacySection
              icon={<UserCheck className="w-6 h-6" />}
              title="Vos droits"
              index={5}
            >
              <p className="mb-4">
                Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <RightCard
                  icon={<Eye className="w-5 h-5" />}
                  title="Droit d'accès"
                  description="Obtenir une copie de vos données"
                  index={0}
                />
                <RightCard
                  icon={<Edit3 className="w-5 h-5" />}
                  title="Droit de rectification"
                  description="Corriger vos données inexactes"
                  index={1}
                />
                <RightCard
                  icon={<Trash2 className="w-5 h-5" />}
                  title="Droit à l'effacement"
                  description="Supprimer vos données"
                  index={2}
                />
                <RightCard
                  icon={<Download className="w-5 h-5" />}
                  title="Droit à la portabilité"
                  description="Récupérer vos données"
                  index={3}
                />
              </div>
            </PrivacySection>

            <PrivacySection
              icon={<Cookie className="w-6 h-6" />}
              title="Cookies"
              index={6}
            >
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies 
                sont de petits fichiers texte stockés sur votre appareil qui nous permettent de vous 
                reconnaître et de mémoriser vos préférences.
              </p>
              <p className="font-medium text-white mt-3">Types de cookies utilisés :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong className="text-white">Cookies analytiques :</strong> pour comprendre comment vous utilisez notre site</li>
                <li><strong className="text-white">Cookies de personnalisation :</strong> pour mémoriser vos préférences</li>
              </ul>
              <p className="mt-3">
                Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.
              </p>
            </PrivacySection>

            <PrivacySection
              icon={<Mail className="w-6 h-6" />}
              title="Contact"
              index={7}
            >
              <p>
                Pour toute question relative à cette politique de confidentialité ou pour exercer vos 
                droits, vous pouvez nous contacter :
              </p>
              <div className="mt-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700">
                <p><strong className="text-white">Email :</strong> contact@dwp-design.fr</p>
                <p><strong className="text-white">Adresse :</strong> 123 Rue de la Création, 75000 Paris, France</p>
                <p><strong className="text-white">Téléphone :</strong> 01 23 45 67 89</p>
              </div>
              <p className="mt-4">
                Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL 
                (Commission Nationale de l&apos;Informatique et des Libertés) si vous estimez que le 
                traitement de vos données n&apos;est pas conforme à la réglementation.
              </p>
            </PrivacySection>
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
