"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

// Put this inside your ServicesPage component (above the return) or in the file scope
const ServiceCard = ({
  service,
  index,
  className = "",
  hasPlaceholder = false,
  imageHeight,
  imageWidth,
}: {
  service: any;
  index: number;
  className?: string;
  hasPlaceholder?: boolean;
  imageHeight?: string; // CSS height (e.g. '200px' or '60%')
  imageWidth?: string; // CSS width (e.g. '100%' or '300px')
}) => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div
      className={`${className} relative group cursor-pointer overflow-hidden rounded-sm aspect-square transition-all duration-700 ease-out hover:shadow-2xl hover:z-10 flex flex-col`}
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
    >
      {/* base dark overlay (behind placeholder/content) */}
      <div className="absolute inset-0 bg-black transition-transform duration-1000 group-hover:scale-110 z-0" />

      {/* decorative placeholder rendered in-flow at the top when requested */}
      {hasPlaceholder && (
        <div
          className={`flex items-center justify-center border border-white/10 text-white/60 text-sm font-medium pointer-events-none relative z-10 ${
            imageHeight || imageWidth ? "" : "w-full h-[60%]"
          }`}
          style={{
            height: imageHeight ?? undefined,
            width: imageWidth ?? undefined,
          }}
        >
          Image
        </div>
      )}

      <div className="relative p-6 md:p-8 flex flex-col justify-between transform transition-transform duration-500 group-hover:scale-105 z-20 flex-1">
        <div>
          <h3
            className={`text-white font-light mb-4 transition-all duration-500 group-hover:tracking-wide ${
              index % 5 === 2 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
            }`}
          >
            {service.title}
          </h3>

          <p
            className={`text-white/70 leading-relaxed mb-6 transition-all duration-700`}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Rénovation de cuisine",
      description:
        "Transformez votre cuisine en un paradis culinaire avec des appareils modernes, des rangements sur mesure et des finitions élégantes.",
      featured: true,
      size: "large", // Golden rectangle: 2x height
    },
    {
      title: "Conception de bureau",
      description:
        "Créez des espaces de travail inspirants qui stimulent la productivité et reflètent la culture de votre entreprise.",
      size: "medium",
    },
    {
      title: "Rénovation complète",
      description:
        "Des transformations totales qui réinventent votre espace de vie, du sol au plafond, avec un design cohérent.",
      size: "medium",
    },
    {
      title: "Couloirs & Hallways",
      description:
        "Optimisez vos espaces de transition avec des solutions de rangement astucieuses et des éléments de design.",
      size: "small",
    },
    {
      title: "Espaces commerciaux",
      description:
        "Concevez des environnements commerciaux qui améliorent l'expérience client et favorisent la réussite.",
      size: "small",
    },
    {
      title: "Design extérieur",
      description:
        "Sublimez l'attrait de votre propriété avec des rénovations extérieures remarquables.",
      size: "small",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Nous commençons par une discussion approfondie pour comprendre votre vision, vos besoins et votre budget.",
      fibonacci: 1,
    },
    {
      number: "02",
      title: "Conception",
      description:
        "Notre équipe élabore des concepts détaillés et des visualisations 3D pour votre validation.",
      fibonacci: 1,
    },
    {
      number: "03",
      title: "Planification",
      description:
        "Nous développons des plans complets, sélectionnons les matériaux et établissons le calendrier.",
      fibonacci: 2,
    },
    {
      number: "04",
      title: "Exécution",
      description:
        "Nos artisans qualifiés donnent vie au projet avec précision et soin.",
      fibonacci: 3,
    },
    {
      number: "05",
      title: "Livraison",
      description:
        "Visite finale, contrôle qualité et remise de votre espace transformé.",
      fibonacci: 5,
    },
  ];

  const gridSize = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };
  // Fibonacci grid sizing system - sequence: 1, 1, 2, 3, 5...
  const fibonacciGrid = {
    f1: "col-span-1 row-span-1", // 1×1 square
    f2: "col-span-1 row-span-1", // 1×1 square (second)
    f3: "col-span-2 row-span-2", // 2×2 square
    f4: "col-span-3 row-span-2", // 3×2 rectangle
    f5: "col-span-3 row-span-3", // 3×3 square (approximates 5)
  };

  // Auto-assign Fibonacci sizes based on index
  const getFibonacciClass = (index: number) => {
    const sequence = ["f1", "f2", "f3", "f4", "f5"];
    return fibonacciGrid[
      sequence[index % sequence.length] as keyof typeof fibonacciGrid
    ];
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Golden Ratio Split */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        {/* Background with subtle spiral - moved to right side */}
        <div className="absolute top-0 bottom-0 right-0 w-1/2 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full flex items-center justify-center opacity-100">
            <div
              dangerouslySetInnerHTML={{
                __html: `
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
  <path fill="#ffffff" opacity="0.12" d="m178.41 115.87v6.6704q-40.948 10.561-40.948 77.449 0 72.447 50.954 85.231v-107.65q0-23.531 2.9651-34.278 2.9652-10.932 12.97-19.084 10.191-8.3378 24.458-8.3378 25.014 0 46.321 23.531 21.493 23.531 21.493 61.329 0 35.389-22.048 63.182-21.864 27.793-66.147 31.684v76.152h-20.011v-76.152q-38.539-3.3351-61.885-28.719-23.161-25.569-23.161-66.332 0-36.686 21.123-59.847 21.123-23.346 53.918-24.828zm30.016 169.35q58.365-8.7083 58.365-75.411 0-30.757-12.599-51.509-12.414-20.937-29.275-20.937-6.1141 0-10.376 4.4467-4.0749 4.2616-5.1905 10.191-0.92746 5.9292-0.92746 23.346z"/>
</svg>
`,
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-[1.618fr_1fr] gap-12 items-center">
            {/* Left: 61.8% - Content (Golden Ratio) */}
            <div>
              <div className="text-white/60 text-sm tracking-[0.3em] mb-6 uppercase">
                Notre expertise
              </div>

              <h1 className="text-white text-[clamp(50px,8vw,96px)] font-serif leading-[0.95] mb-8 group">
                Rénover votre espace
              </h1>

              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                Chaque projet suit les principes du nombre d'or. Design
                mathématiquement parfait, résultats naturellement harmonieux.
              </p>

              <button className="group relative bg-white text-black px-10 py-5 text-sm font-bold tracking-[0.2em] overflow-hidden transition-all duration-700 hover:px-12">
                <span className="relative z-10 flex items-center gap-3">
                  DÉCOUVRIR NOS SERVICES
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-700 group-hover:translate-x-2"
                  />
                </span>
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white z-10">
                  <span className="flex items-center gap-3">
                    DÉCOUVRIR NOS SERVICES
                    <ArrowRight size={16} />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Fibonacci Layout (REPLACED FOR IMAGE LAYOUT) */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="p-6 mx-auto">
          <div className="text-center mb-16 relative">
            {/* Subtle Fibonacci spiral watermark */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50,50 m0,0 a20,20 0 0,1 20,20 a30,30 0 0,1 -30,30 a50,50 0 0,1 50,50"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  opacity="0.06"
                />
              </svg>
            </div>

            <h2 className="text-5xl md:text-7xl font-light text-black mb-6 tracking-tight">
              Nos prestations
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Services de rénovation aux proportions du{" "}
              <span className="font-semibold text-black">nombre d'or (Φ)</span>
            </p>
          </div>

          {/* outer grid: left big area + right column */}

          <div className="flex flex-row gap-3  ">
            <div className="bg-black w-[900px] aspect-square">
              <ServiceCard service={services[0]} index={0} hasPlaceholder />
            </div>
            <div className="flex flex-col gap-3 bg-white  w-[600px] aspect-square">
              <div className="bg-black h-[600px]">
                <ServiceCard service={services[1]} index={1} hasPlaceholder />
              </div>
              <div className="flex flex-row gap-3 bg-white">
                <div className="bg-black w-[300px] aspect-square">
                  <ServiceCard service={services[2]} index={2} />
                </div>
                <div className="bg-black  w-[300px] aspect-square">
                  <ServiceCard service={services[3]} index={3} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-xs tracking-wider uppercase">
              Disposition inspirée de la suite de Fibonacci • Φ ≈ 1.618
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl text-black font-sans mb-6">
              Notre méthode
            </h2>
            <p className="text-gray-600 text-lg">
              Un processus en 5 étapes suivant la séquence de Fibonacci
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="grid md:grid-cols-[1fr_1.618fr] gap-8 items-center">
                  {/* Left: Number with Fibonacci visualization */}
                  <div className="relative">
                    <div className="text-[120px] md:text-[180px] font-light text-gray-200 group-hover:text-gray-300 transition-all duration-700 leading-none">
                      {step.number}
                    </div>

                    {/* Fibonacci dots */}
                    <div className="absolute top-35  left-50 flex gap-2">
                      {Array.from({ length: step.fibonacci }).map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ transitionDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: Content (Golden Ratio) */}
                  <div className="relative pl-8 border-l-2 border-gray-200 group-hover:border-black transition-all duration-500">
                    <h3 className="text-3xl text-gray-400 font-sans mb-4 transition-all duration-500 group-hover:translate-x-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Golden Ratio Layout */}
    

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl text-gray-500 font-light mb-8">
            Envie de rénover ?
          </h2>

          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et donnons vie à vos idées. Planifiez une
            consultation gratuite dès aujourd'hui.
          </p>

          <button className="group relative bg-black text-white px-12 py-6 text-sm font-bold tracking-[0.2em] overflow-hidden transition-all duration-700 hover:px-16">
            <span className="relative z-10 flex items-center gap-4 mx-auto justify-center">
              RÉVÉLER VOTRE INTÉRIEUR
              <ArrowRight
                size={18}
                className="transition-transform duration-700 group-hover:translate-x-2"
              />
            </span>

            {/* Golden rectangle expanding border */}
            <span className="absolute inset-0 border-2 border-black scale-100 group-hover:scale-[1.05] transition-transform duration-700"></span>
          </button>

          {/* Fibonacci dots indicator */}
          <div className="flex gap-3 justify-center mt-12">
            {[8, 13, 21, 13, 8].map((size, i) => (
              <div
                key={i}
                className="bg-gray-300 rounded-full transition-all duration-500 hover:bg-black cursor-pointer"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expand {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-dash {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: dash 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
