"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import { Cormorant, Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
});

// Animated count-up component
const AnimatedCount = ({
  target,
  duration = 1200,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    let raf: number;
    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return (
    <motion.span
      className="inline-block"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

export default function HeroFibo() {
  const [isReady, setIsReady] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => setIsReady(true), 300);
    setTimeout(() => setShowScroll(true), 2000);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleEnter = () => {
    document.body.style.overflow = "auto";
    const nextSection = document.getElementById("projets");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="https://dwp-front.vercel.app/dwp-video.webm"
              type="video/mp4"
            />
          </video>

          {/* Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Fibonacci Spiral Overlay - Subtle artistic element */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            <path
              d="M 500 500 Q 500 300, 700 300 Q 900 300, 900 500 Q 900 700, 700 700 Q 500 700, 500 500"
              fill="none"
              stroke="white"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Content - Using Golden Ratio Proportions */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 32 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className={`text-white ${cormorant.className} text-[clamp(44px,6vw,89px)] leading-[1.1] mb-16 tracking-tight`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            L'art royal{" "}
            <span
              className={`text-[#cbe425] text-[clamp(38px,5.2vw,75px)] tracking-[0.03em] -translate-y-[2px] inline-block ${allura.className}`}
            >
              une harmonie
            </span>{" "}
            juste et parfaite.
          </motion.h1>

          <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8"></div>

          <p className="text-white/70 text-base md:text-xl font-light mb-16 tracking-wide max-w-2xl mx-auto leading-relaxed">
            L'innovation dans chaque ligne.
            <br />
            Solidité dans chaque réalisation.
          </p>

          {/* CTA */}
          <button
            onClick={() => {
              redirect("/expertise");
            }}
            className="group inline-flex items-center gap-4 bg-[#cbe425] text-black px-10 py-5 text-xs font-bold tracking-[0.2em] hover:bg-[#cbe425]/90 transition-all duration-500 hover:gap-6"
          >
            DÉCOUVRIR
            <ChevronDown
              size={16}
              className="transition-transform duration-500 group-hover:translate-y-1"
            />
          </button>
        </motion.div>

        {/* Corner Accent - Fibonacci inspired */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full border-t border-r border-white/20"></div>
          <div className="absolute top-4 right-4 w-40 h-40 border-t border-r border-white/20"></div>
          <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-white/20"></div>
        </div>

        {/* Project Count - Golden Ratio positioned (optional) */}
        <motion.div
          className="absolute bottom-12 right-12 text-white/50 text-right hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-4xl font-light mb-1">
            <AnimatedCount target={500} suffix="+" />
          </div>
          <div className="text-xs tracking-[0.2em]">PROJETS RÉALISÉS</div>
        </motion.div>

        {/* Years - Golden Ratio positioned (optional) */}
        <motion.div
          className="absolute bottom-12 left-12 text-white/50 text-left hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-4xl font-light mb-1">
            <AnimatedCount target={20} suffix="+" />
          </div>
          <div className="text-xs tracking-[0.2em]">ANNÉES D'EXPERTISE</div>
        </motion.div>
      </section>
    </>
  );
}