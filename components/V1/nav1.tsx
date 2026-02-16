"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ACCUEIL", href: "/home" },
    { name: "EXPERTISE", href: "/expertise" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "BLOG", href: "/blog" },
  ];

  // Fibonacci sequence for stagger animation delays
  const fibonacciDelays = [0, 100, 100, 200, 300];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-16 md:h-20 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto">
       
        <Link href="/" className="relative z-10 group">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/LOGO/DWP-logo.png"
              alt="DWP logo"
              className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_20px_rgba(203,228,37,0.6)]"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav with Fibonacci hover spacing */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transitionDelay: `${fibonacciDelays[index]}ms`,
              }}
              className="relative text-gray-500 text-[10px] xl:text-xs font-medium tracking-[0.15em] xl:tracking-[0.2em] hover:text-[#cbe425] transition-all duration-500 group"
            >
              {link.name}

              {/* Golden spiral underline effect */}
              <span
                className="absolute bottom-0 left-0 h-[1px] bg-[#cbe425] transition-all duration-700 ease-out"
                style={{
                  width: hoveredIndex === index ? "100%" : "0%",
                }}
              ></span>

              {/* Golden ratio dot indicator */}
              {hoveredIndex === index && (
                <span
                  className="absolute -left-5 xl:-left-6 top-[6px] -translate-y-1/2 text-[#cbe425] text-sm font-medium animate-pulse select-none"
                  style={{
                    animation:
                      "pulse 1.618s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                   <img src="/LOGO/21212.png" alt="logo" className="h-5 xl:h-6 w-auto" />
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button with Golden Ratio expansion */}
        <Link
          href="/contact"
          className="hidden lg:block relative overflow-hidden bg-[#cbe425] text-black px-6 xl:px-8 py-2.5 xl:py-3 rounded-lg transition-all duration-700 group"
        >
          <span className={`relative z-10 text-lg xl:text-xl ${dancingScript.className}`}>Design with purpose</span>
          {/* Golden ratio expanding background */}
          <span className="absolute inset-0 bg-black transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100"></span>
          <span className={`absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[#cbe425] text-lg xl:text-xl ${dancingScript.className}`}>
            Design with purpose
          </span>
        </Link>

        <button
          className="lg:hidden p-2 text-[#cbe425] z-10 transition-transform duration-500 hover:rotate-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Fibonacci stagger */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6 md:gap-8 px-6">
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-[#cbe425]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={28} className="sm:w-8 sm:h-8" />
          </button>

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animationDelay: `${fibonacciDelays[index]}ms`,
              }}
              className="text-[#cbe425] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight hover:text-[#cbe425]/70 transition-all duration-500 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              animationDelay: "500ms",
            }}
            className={`mt-4 bg-[#cbe425] text-black px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold tracking-wider transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 ${dancingScript.className}`}
          >
            Design with purpose
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
