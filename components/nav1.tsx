"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
    { name: "ACCUEIL", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "BLOG", href: "/blog" },
  ];

  // Fibonacci sequence for stagger animation delays
  const fibonacciDelays = [0, 100, 100, 200, 300];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 flex items-center px-6 md:px-12 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto">
       
        <Link href="/" className="relative z-10 group">
          <img
            src="/LOGO/DWP-logo.png"
            alt="DWP logo"
            className="h-10 w-auto transition-all duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav with Fibonacci hover spacing */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transitionDelay: `${fibonacciDelays[index]}ms`,
              }}
              className="relative text-gray-500 text-xs font-medium tracking-[0.2em] hover:text-[#cbe425] transition-all duration-500 group"
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
                  className="absolute -left-4 top-[5px] -translate-y-1/2 text-[#cbe425] text-sm font-medium animate-pulse select-none"
                  style={{
                    animation:
                      "pulse 1.618s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  φ
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button with Golden Ratio expansion */}
        <a
          href="#contact"
          className="hidden md:block relative overflow-hidden bg-[#cbe425] text-black px-8 py-3 text-xs font-bold tracking-[0.15em] transition-all duration-700 hover:tracking-[0.3em] group"
        >
          <span className="relative z-10">Révéler votre intérieur</span>
          {/* Golden ratio expanding background */}
          <span className="absolute inset-0 bg-black transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100"></span>
          <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[#cbe425]">
            Révéler votre intérieur
          </span>
        </a>

        <button
          className="md:hidden p-2 text-[#cbe425] z-10 transition-transform duration-500 hover:rotate-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Fibonacci stagger */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 p-2 text-[#cbe425]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animationDelay: `${fibonacciDelays[index]}ms`,
              }}
              className="text-[#cbe425] text-3xl font-bold tracking-tight hover:text-[#cbe425]/70 transition-all duration-500 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              animationDelay: "500ms",
            }}
            className="mt-4 bg-[#cbe425] text-black px-12 py-4 text-sm font-bold tracking-wider transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
          >
            ON DISCUTE ?
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
