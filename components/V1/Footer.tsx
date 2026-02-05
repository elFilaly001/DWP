import React from "react";
import Link from "next/link";

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
        <div className="flex flex-col items-start gap-3">
          <img src="/LOGO/DWP-logo.png" alt="DWP logo" className="h-10 w-auto mb-2" />
          <span className="text-[#cbe425] text-base font-semibold tracking-wide">Design with purpose</span>
        </div>
        {/* Navigation links */}
        <nav className="flex flex-col items-center gap-2 md:gap-3 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#cbe425] transition-colors duration-300 py-1 px-2 rounded">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Legal mentions and confidentiality */}
        <div className="flex flex-col items-end gap-2 text-xs text-neutral-500">
          <Link href="/mentions-legales" className="hover:text-[#cbe425] transition-colors duration-300">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-[#cbe425] transition-colors duration-300">Confidentialité</Link>
        </div>
      </div>
      <div className="w-full border-t border-neutral-800 mt-8 mb-4"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
        <span>&copy; {new Date().getFullYear()} DWP. Tous droits réservés.</span>
        <span>Design with purpose.</span>
      </div>
    </footer>
  );
};

export default Footer;
