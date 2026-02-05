"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cormorant, Allura } from "next/font/google";
import { Send, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Fibonacci sequence for stagger animation delays
  const fibonacciDelays = [0, 100, 200, 300, 500, 800];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
              Parlons de votre projet
            </motion.div>

            <motion.h1
              className={`text-white ${cormorant.className} text-[clamp(40px,8vw,96px)] leading-[1.05] mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Contactez{" "}
              <span className={`text-[#cbe425] ${allura.className}`}>nous</span>
            </motion.h1>

            <motion.p
              className="text-white/70 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Chaque grand projet commence par une conversation. Partagez votre vision, nous lui donnerons vie.
            </motion.p>
          </motion.div>
        </div>

        {/* Corner Accent - Fibonacci inspired */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full border-t border-r border-white/20"></div>
          <div className="absolute top-4 right-4 w-40 h-40 border-t border-r border-white/20"></div>
          <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-white/20"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.618fr] gap-12 lg:gap-16">
            {/* Left: Contact Info (Golden Ratio - smaller part) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-black mb-4">
                  Informations
                </h2>
                <div className="w-16 h-[2px] bg-[#cbe425]"></div>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet de transformation.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Adresse",
                    content: "N° 4 rue 2 Quartier Plaisance Vélodrome, Rue Ibn Hamdisse, Casablanca",
                  },
                  {
                    icon: Phone,
                    title: "Téléphone",
                    content: "+33 1 23 45 67 89",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@designwithpurpose.fr",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: fibonacciDelays[index] / 1000 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-black group-hover:bg-[#cbe425] transition-colors duration-500">
                      <item.icon
                        size={20}
                        className="text-[#cbe425] group-hover:text-black transition-colors duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold tracking-[0.1em] text-black mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-sm font-bold tracking-[0.1em] text-black mb-4">
                  HORAIRES D&apos;OUVERTURE
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form (Golden Ratio - larger part) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 sm:p-12"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#cbe425] rounded-full flex items-center justify-center mb-6">
                    <Send size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-light text-black mb-4">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-8 text-sm font-bold tracking-[0.1em] text-[#cbe425] hover:text-black transition-colors duration-300"
                  >
                    ENVOYER UN AUTRE MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-light text-black mb-2">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-[0.1em] text-black mb-2">
                        NOM COMPLET *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[#cbe425] focus:outline-none transition-colors duration-300 text-black"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-[0.1em] text-black mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[#cbe425] focus:outline-none transition-colors duration-300 text-black"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-[0.1em] text-black mb-2">
                        TÉLÉPHONE
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[#cbe425] focus:outline-none transition-colors duration-300 text-black"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-[0.1em] text-black mb-2">
                        SUJET *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[#cbe425] focus:outline-none transition-colors duration-300 text-black appearance-none cursor-pointer"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="renovation">Rénovation</option>
                        <option value="design">Design d&apos;intérieur</option>
                        <option value="consultation">Consultation</option>
                        <option value="commercial">Projet commercial</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-[0.1em] text-black mb-2">
                      VOTRE MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[#cbe425] focus:outline-none transition-colors duration-300 text-black resize-none"
                      placeholder="Décrivez votre projet ou posez votre question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full sm:w-auto bg-[#cbe425] text-black px-10 py-4 text-xs font-bold tracking-[0.2em] overflow-hidden transition-all duration-700 hover:px-14 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-3 justify-center">
                      {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER LE MESSAGE"}
                      {!isSubmitting && (
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-700 group-hover:translate-x-2"
                        />
                      )}
                    </span>
                    <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[#cbe425] z-10">
                      <span className="flex items-center gap-3">
                        {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER LE MESSAGE"}
                        {!isSubmitting && <ArrowRight size={16} />}
                      </span>
                    </span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fibonacci dots indicator */}
      <section className="py-12 bg-white">
        <div className="flex gap-3 justify-center">
          {([8, 13, 21, 34, 21, 13, 8] as const).map((size, i, arr) => (
            <div
              key={i}
              className={`bg-gray-300 transition-all duration-500 hover:bg-[#cbe425] cursor-pointer ${
                i === Math.floor(arr.length / 2) ? "shadow-lg scale-110 bg-[#cbe425]" : ""
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
