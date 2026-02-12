"use client";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "../../lib/useInView";

interface Reference {
  name: string;
  logo: string;
}

// Default placeholder references - replace with actual client logos
const defaultReferences: Reference[] = [
  { name: "Client 1", logo: "/LOGO/1.png" },
  { name: "Client 2", logo: "/LOGO/2.webp" },
  { name: "Client 3", logo: "/LOGO/3.png" },
  { name: "Client 4", logo: "/LOGO/4.png" },
  { name: "Client 5", logo: "/LOGO/5.png" },
  { name: "Client 6", logo: "/LOGO/6.png" },
  { name: "Client 7", logo: "/LOGO/7.png" },
  { name: "Client 8", logo: "/LOGO/8.png" },
  { name: "Client 9", logo: "/LOGO/9.png" },
  { name: "Client 10", logo: "/LOGO/10.png" },
  { name: "Client 11", logo: "/LOGO/11.png" },
  { name: "Client 12", logo: "/LOGO/12.webp" },
  { name: "Client 13", logo: "/LOGO/13.png" },
  { name: "Client 14", logo: "/LOGO/14.png" },
  { name: "Client 15", logo: "/LOGO/15.png" },
  { name: "Client 16", logo: "/LOGO/16.png" },
  { name: "Client 17", logo: "/LOGO/17.png" },
  { name: "Client 18", logo: "/LOGO/18.png" },
  // { name: "Client 19", logo: "/LOGO/19.png" },
  { name: "Client 20", logo: "/LOGO/20.png" },
  { name: "Client 21", logo: "/LOGO/21.png" },
  { name: "Client 22", logo: "/LOGO/22.png" },
  { name: "Client 23", logo: "/LOGO/23.webp" },
  { name: "Client 24", logo: "/LOGO/24.png" },
  { name: "Client 25", logo: "/LOGO/25.png" },
  { name: "Client 26", logo: "/LOGO/26.png" },
  { name: "Client 27", logo: "/LOGO/27.png" },
  { name: "Client 28", logo: "/LOGO/28.png" },
  { name: "Client 29", logo: "/LOGO/29.png" },
  { name: "Client 30", logo: "/LOGO/30.png" },
  { name: "Client 31", logo: "/LOGO/31.png" },
  { name: "Client 32", logo: "/LOGO/32.png" },
  { name: "Client 33", logo: "/LOGO/33.png" },
  { name: "Client 34", logo: "/LOGO/34.png" },
  { name: "Client 35", logo: "/LOGO/35.png" },
];

interface ReferencesSectionProps {
  references?: Reference[];
  title?: string;
  subtitle?: string;
}

export const ReferencesSection = ({
  references = defaultReferences,
  title = "Ils nous font confiance",
  subtitle = "Des partenaires d'exception pour des projets remarquables",
}: ReferencesSectionProps) => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [isHovering, setIsHovering] = useState(false);

  // Show all references
  // Ensure all references are shown
  const rowReferences = references || [];

  const renderLogoRow = (logos: Reference[], direction: 'left' | 'right') => {
    // Duplicate logos 3 times for seamless infinite scroll (animation uses -33.333%)
    const duplicatedLogos = [...logos, ...logos, ...logos];
    
    return (
      <div className="overflow-hidden">
        <div 
          className="flex w-max"
          style={{
            animation: direction === 'left' 
              ? 'scroll-left 30s linear infinite' 
              : 'scroll-right 30s linear infinite',
            animationPlayState: isHovering ? 'paused' : 'running',
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {duplicatedLogos.map((reference, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="w-28 h-20 sm:w-36 sm:h-28 md:w-44 md:h-32 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#cbe425]/30 relative">
                <Image
                  src={reference.logo}
                  alt={reference.name}
                  fill
                  className="object-contain p-2 sm:p-3 filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-28 bg-black text-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #cbe425 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 px-4 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-[#cbe425] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-4 uppercase">
            Nos références
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Logo Carousel Container - Single Row */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Gradient Masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Single Row - Scrolls Left */}
          <div className="mb-4 sm:mb-6">
            {renderLogoRow(rowReferences, "left")}
          </div>
        </div>

        {/* Decorative Fibonacci Elements */}
        <div className="flex gap-2 sm:gap-3 justify-center mt-12 sm:mt-16">
          {([5, 8, 13, 21, 13, 8, 5] as const).map((size, i, arr) => (
            <div
              key={i}
              className={`bg-white/20 transition-all duration-500 hover:bg-[#cbe425] ${
                i === Math.floor(arr.length / 2)
                  ? "bg-[#cbe425]/40"
                  : ""
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
