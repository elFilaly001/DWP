// \"use client\";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
  ctaLabel?: string;
  ctaHref?: string;
  _index?: number;
}

interface AnimatedImageSliderProps {
  slides?: Slide[];
  images?: Slide[];
  className?: string;
  mainPosition?: "left" | "right";
}

const defaultSlides: Slide[] = [
  {
    title: "Espaces de travail immersifs",
    description:
      "Des volumes baignés de lumière, pensés pour la concentration, les échanges et le bien-être au quotidien.",
    imageUrl:
      "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1600&auto=format&fit=crop",
    ctaLabel: "Découvrir nos réalisations",
    ctaHref: "/portfolio",
  },
  {
    title: "Hospitality & expérience visiteur",
    description:
      "Des lieux d’accueil qui racontent une histoire, entre confort, émotion et identité de marque.",
    imageUrl:
      "https://images.unsplash.com/photo-1519710884009-22a691464eed?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Espaces éducatifs et campus",
    description:
      "Des salles de cours, bibliothèques et tiers-lieux qui s’adaptent aux nouveaux usages pédagogiques.",
    imageUrl:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Espaces commerciaux & retail",
    description:
      "Des parcours fluides, lisibles, où chaque détail est conçu pour guider, inspirer et engager.",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
  },
];

export const AnimatedImageSlider = ({
  slides,
  images,
  className = "",
  mainPosition = "left",
}: AnimatedImageSliderProps) => {
  const baseSlides = images ?? slides ?? defaultSlides;
  const initialSlides: Slide[] = baseSlides.map((slide, index) => ({
    ...slide,
    _index: index,
  }));
  const [items, setItems] = useState<Slide[]>(initialSlides);

  const handleNext = () => {
    setItems((prev) => {
      if (prev.length <= 1) return prev;
      return [...prev.slice(1), prev[0]];
    });
  };

  const handlePrev = () => {
    setItems((prev) => {
      if (prev.length <= 1) return prev;
      return [prev[prev.length - 1], ...prev.slice(0, -1)];
    });
  };

  return (
    <section className={`py-10 sm:py-14 bg-[#f5f5f5] ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[360px] sm:h-[420px] md:h-[460px] lg:h-[520px]">
          {items.map((slide, index) => {
            const baseClasses =
              "absolute top-1/2 -translate-y-1/2 rounded-2xl shadow-2xl bg-center bg-cover transition-all duration-500 ease-out";

            let positionClasses = "";

            if (mainPosition === "left") {
              if (index === 0) {
                // Slide principal à gauche
                positionClasses =
                  "left-0 w-full h-full sm:w-[70%] sm:h-[80%] md:h-[85%] lg:h-[90%] z-30";
              } else if (index === 1) {
                // Première carte secondaire à droite
                positionClasses =
                  "hidden sm:block left-[68%] w-[30%] h-[65%] scale-95 opacity-90 z-20";
              } else if (index === 2) {
                // Deuxième carte secondaire à droite
                positionClasses =
                  "hidden sm:block left-[82%] w-[22%] h-[55%] scale-90 opacity-60 z-10";
              } else {
                // Les suivantes sont alignées hors-champ à droite
                positionClasses =
                  "hidden sm:block left-[90%] w-[20%] h-[45%] scale-90 opacity-0 pointer-events-none";
              }
            } else {
              if (index === 0) {
                // Slide principal à droite
                positionClasses =
                  "right-0 w-full h-full sm:w-[70%] sm:h-[80%] md:h-[85%] lg:h-[90%] z-30";
              } else if (index === 1) {
                // Première carte secondaire à gauche
                positionClasses =
                  "hidden sm:block right-[68%] w-[30%] h-[65%] scale-95 opacity-90 z-20";
              } else if (index === 2) {
                // Deuxième carte secondaire à gauche
                positionClasses =
                  "hidden sm:block right-[82%] w-[22%] h-[55%] scale-90 opacity-60 z-10";
              } else {
                // Les suivantes sont alignées hors-champ à gauche
                positionClasses =
                  "hidden sm:block right-[90%] w-[20%] h-[45%] scale-90 opacity-0 pointer-events-none";
              }
            }

            const isPrimarySlide = slide._index === 0;

            return (
              <div
                key={`${slide.title}-${index}`}
                className={`${baseClasses} ${positionClasses}`}
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.25), transparent), url('${slide.imageUrl}')`,
                }}
              >
                {isPrimarySlide && index === 0 && (
                  <div className="relative h-full w-full p-6 sm:p-8 md:p-10 flex flex-col justify-center text-white">
                    <div className="max-w-md sm:max-w-lg">
                      <h3 className="text-white text-[clamp(20px,4vw,40px)] font-serif leading-[0.95] mb-4 sm:mb-5">
                        {slide.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-5 sm:mb-6">
                        {slide.description}
                      </p>
                      {slide.ctaLabel && slide.ctaHref && (
                        <a href={slide.ctaHref}>
                          <button className="group relative bg-[#cbe425] text-black px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] rounded-lg overflow-hidden transition-all duration-700 hover:px-8 sm:hover:px-12 inline-flex items-center gap-3">
                            <span className="relative z-10 flex items-center gap-3">
                              {slide.ctaLabel}
                              <ArrowRight
                                size={16}
                                className="transition-transform duration-700 group-hover:translate-x-2"
                              />
                            </span>
                            <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[#cbe425] z-10">
                              <span className="flex items-center gap-3">
                                {slide.ctaLabel}
                                <ArrowRight size={16} />
                              </span>
                            </span>
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="absolute -bottom-10 sm:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40">
            <button
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Projet précédent"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Projet suivant"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedImageSlider;

