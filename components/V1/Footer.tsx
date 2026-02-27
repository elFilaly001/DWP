

import React from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const navLinks = [
  { name: "ACCUEIL", href: "/home" },
  { name: "EXPERTISE", href: "/expertise" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 pt-12 pb-6 px-4 border-t border-neutral-800 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start">
        {/* Brand logo and tagline */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <img src="/LOGO/DWP-logo.png" alt="DWP logo" className="h-10 w-auto mb-2" />
          <span className={`text-[#cbe425] text-base font-semibold tracking-wide ${dancingScript.className}`}>
            Design with purpose
          </span>
        </div>
        {/* Navigation links */}
        <nav className="flex flex-col items-center gap-2 md:gap-3 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#cbe425] transition-colors duration-300 py-1 px-2 rounded">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Address and phone */}
        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-neutral-500 text-center md:text-right">
          <span>
            N° 4 rue 2 Quartier Plaisance Vélodrome, Rue Ibn Hamdisse, Casablanca
          </span>
          <span>
            N° 7, Rue Salsola 552 lot 7 Secteur 18 Hay Riad, Rabat
          </span>
          <span>
            Tél :{" "}
            <a href="tel:+" className="hover:text-[#cbe425] transition-colors duration-300">
              0522 360 314
            </a>
          </span>
        </div>
      </div>
      <div className="w-full border-t border-neutral-800 mt-8 mb-4"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-2 md:gap-0">
        <span>&copy; {new Date().getFullYear()} DWP. Tous droits réservés.</span>
        {/* Social Media Icons */}
        <div className="flex flex-row gap-4 my-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#cbe425] transition-colors duration-300">
            <Facebook size={20} strokeWidth={1.5} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#cbe425] transition-colors duration-300">
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#cbe425] transition-colors duration-300">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#cbe425] transition-colors duration-300">
            <Youtube size={20} strokeWidth={1.5} />
          </a>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="/mentions-legales" className="hover:text-[#cbe425] transition-colors duration-300">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-[#cbe425] transition-colors duration-300">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
