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
  Download,
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

const PrivacySection = ({
  icon,
  title,
  children,
  index,
}: PrivacySectionProps) => {
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
            <h2
              className={`text-xl md:text-2xl text-white ${cormorant.className}`}
            >
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
              <span className={`text-[#cbe425] ${allura.className}`}>
                Confidentialité
              </span>
            </motion.h1>

            <motion.p
              className="text-white/70 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Nous accordons une grande importance à la protection de vos
              données personnelles et au respect de votre vie privée.
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
              title="Introduction"
              index={0}
            >
              <p>
                La présente politique de confidentialité a pour objectif
                d’informer les utilisateurs du site DWP de la manière dont leurs
                données personnelles sont collectées, utilisées et protégées,
                conformément à la loi marocaine n°09-08 relative à la protection
                des données à caractère personnel
              </p>
              <p>
                DWP s’engage à respecter la confidentialité, la sécurité et
                l’intégrité des données personnelles de ses utilisateurs.
              </p>
            </PrivacySection>

            <PrivacySection
              icon={<UserCheck className="w-6 h-6" />}
              title="Responsable du traitement"
              index={1}
            >
              <p>
                Le responsable du traitement des données personnelles est :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">DWP</strong>
                </li>
                <li>
                  <strong className="text-white">
                    Société appartenant au Groupe Al Kalim
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    N° 4 rue 2 Quartier Plaisance Vélodrome, Rue Ibn Hamdisse,
                    Casablanca
                  </strong>
                </li>
                <li>
                  <strong className="text-white">contact@dwp.ma</strong>
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection
              icon={<Mail className="w-6 h-6" />}
              title="Données collectées"
              index={1}
            >
              <p>
                Dans le cadre de l’utilisation du site, DWP peut être amenée à
                collecter les données suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Nom et prénom</strong>
                </li>
                <li>
                  <strong className="text-white">Adresse email</strong>
                </li>
                <li>
                  <strong className="text-white">Numéro de téléphone</strong>
                </li>
                <li>
                  <strong className="text-white">
                    Nom de l’entreprise (le cas échéant)
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    Contenu des messages envoyés via les formulaires de contact
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    Données de navigation (cookies, adresse IP, type de
                    navigateur – de manière anonymisée lorsque possible)
                  </strong>
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection
              icon={<Edit3 className="w-6 h-6" />}
              title="Finalités du traitement"
              index={1}
            >
              <p>
                Les données personnelles collectées sont utilisées pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">
                    répondre aux demandes de contact et d’information
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    assurer le suivi commercial et relation client
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    améliorer l’expérience utilisateur du site
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    établir des statistiques internes de fréquentation
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    respecter les obligations légales et réglementaires en
                    vigueur
                  </strong>
                </li>
                <p>
                  Les données ne sont en aucun cas utilisées à des fins non
                  prévues ou cédées à des tiers non autorisés.
                </p>
              </ul>
            </PrivacySection>

            <PrivacySection
              icon={<Lock className="w-6 h-6" />}
              title="Base légale du traitement"
              index={1}
            >
              <p>
                Les traitements de données personnelles effectués par DWP
                reposent sur :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">
                    le consentement de l’utilisateur
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    l’exécution d’une demande formulée par l’utilisateur
                  </strong>
                </li>
                <li>
                  <strong className="text-white">
                    le respect des obligations légales prévues par la loi
                    marocaine n°09-08
                  </strong>
                </li>
              </ul>
            </PrivacySection>

            <PrivacySection
              icon={<Globe className="w-6 h-6" />}
              title="Destinataires des données"
              index={1}
            >
              <p>
                Les données personnelles sont destinées exclusivement à DWP et,
                le cas échéant, à ses prestataires techniques (hébergement,
                maintenance), strictement dans le cadre de leurs missions.
              </p>
              <p>
                DWP s’engage à ne pas vendre, louer ou céder les données
                personnelles à des tiers sans consentement préalable.
              </p>
            </PrivacySection>

            <PrivacySection
              icon={<Shield className="w-6 h-6" />}
              title="Sécurité des données"
              index={1}
            >
              <p>
                DWP met en œuvre toutes les mesures techniques et
                organisationnelles appropriées afin de garantir la sécurité et
                la confidentialité des données personnelles et d’empêcher tout
                accès non autorisé, perte, altération ou divulgation.
              </p>
            </PrivacySection>

            <PrivacySection
              icon={<Eye className="w-6 h-6" />}
              title="Droits des utilisateurs"
              index={5}
            >
              <p className="mb-4">
                Conformément à la loi marocaine n°09-08, l’utilisateur dispose
                des droits suivants :
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
                <p className="mb-4">
                  L’utilisateur peut exercer ses droits en adressant une demande
                  écrite à : contact@dwp.ma
                </p>
            </PrivacySection>

            <PrivacySection
              icon={<Database className="w-6 h-6" />}
              title="Déclaration auprès de la CNDP"
              index={2}
            >
              <p>
                Les traitements de données personnelles effectués via le site
                DWP font l’objet d’une déclaration ou autorisation auprès de la
                Commission Nationale de Contrôle de la Protection des Données à
                Caractère Personnel (CNDP), conformément à la législation
                marocaine en vigueur.
              </p>
            </PrivacySection>

            <PrivacySection
              icon={<Cookie className="w-6 h-6" />}
              title="Cookies"
              index={2}
            >
              <p>
                Le site peut utiliser des cookies afin d’améliorer la navigation
                et d’établir des statistiques de fréquentation.
              </p>
              <p>
                L’utilisateur peut à tout moment configurer son navigateur pour
                accepter ou refuser les cookies.
              </p>
            </PrivacySection>

            <PrivacySection
              icon={<Globe className="w-6 h-6" />}
              title="Droit applicable"
              index={3}
            >
              <p>
                La présente politique de confidentialité est régie par le droit
                marocain. En cas de litige, les tribunaux compétents seront ceux
                du ressort du siège social de DWP.
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
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
