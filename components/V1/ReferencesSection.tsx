"use client";
import Image from "next/image";
import { useInView } from "../../lib/useInView";

interface Reference {
  name: string;
  logo: string;
}

// Default placeholder references - replace with actual client logos
const defaultReferences: Reference[] = [
  { name: "Client 1", logo: "/LOGO/21212.png" },
  { name: "Client 2", logo: "/LOGO/advAV.png" },
  { name: "Client 3", logo: "/LOGO/DWP-logo-1.png" },
  { name: "Client 4", logo: "/LOGO/DWP-logo.png" },
  { name: "Client 5", logo: "/LOGO/UIR.jpg" },
  { name: "Client 6", logo: "/LOGO/pharma5.png" },
  { name: "Client 7", logo: "/LOGO/uim.jpg" },
  { name: "Client 8", logo: "/LOGO/maupassant.png" },
  { name: "Client 9", logo: "/LOGO/ONCORAD.png" },
  { name: "Client 10", logo: "/LOGO/1337.png" },
  { name: "Client 11", logo: "/LOGO/cmc.png" },
  { name: "Client 12", logo: "/LOGO/masen.png" },
  { name: "Client 13", logo: "/LOGO/landor.jpg" },
  { name: "Client 14", logo: "/LOGO/ocp.png" },
  { name: "Client 15", logo: "/LOGO/pwc.png" },
  { name: "Client 16", logo: "/LOGO/deloite.png" },
  { name: "Client 17", logo: "/LOGO/nexia.PNG" },
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

  // Duplicate references for seamless infinite scroll
  const duplicatedReferences = [...references, ...references, ...references];

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

        {/* Logo Carousel Container */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Gradient Masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="overflow-hidden">
            <div className="flex w-max animate-scroll">
              {duplicatedReferences.map((reference, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 sm:mx-8 md:mx-12 group"
                >
                  <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#cbe425]/30 group-hover:scale-105 relative">
                    <Image
                      src={reference.logo}
                      alt={reference.name}
                      fill
                      className="object-contain p-3 sm:p-4 filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
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

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ReferencesSection;
