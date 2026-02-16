"use client";
import { PortfolioServiceCard, Service } from "./PortfolioServiceCard";
import { ServiceCard } from "../ServiceCard";

interface PortfolioServicesGridProps {
  services: Service[];
}

export const PortfolioServicesGrid = ({
  services,
}: PortfolioServicesGridProps) => {
  return (
     <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="p-2 sm:p-4 md:p-6 mx-auto max-w-7xl">
            <div className="text-center mb-10 sm:mb-12 md:mb-16 relative">
              {/* Subtle Fibonacci spiral watermark */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 sm:w-32 h-24 sm:h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50,50 m0,0 a20,20 0 0,1 20,20 a30,30 0 0,1 -30,30 a50,50 0 0,1 50,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-black"
                  />
                </svg>
              </div>
    
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-black mb-4 sm:mb-6 tracking-tight">
                Nos solutions
              </h2>
    
              {/* <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Discutons de votre projet et donnons vie à vos idées. Planifiez une séance de co-création dès {" "}
                <span className="font-semibold text-black">aujourd’hui.</span>
              </p> */}
            </div>
    
            {/* outer grid: left big area + right column - responsive layout */}
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="relative bg-black w-full lg:w-[60%] aspect-square sm:aspect-[4/3] lg:aspect-square">
                <div className="absolute bg-[#cbe425] -left-2 top-1/2 w-[60%] sm:w-[70%] h-20 sm:h-32 md:h-50 hidden sm:block"></div>
                <div className="h-full">
                  <ServiceCard
                    service={services[0]}
                    index={0}
                    hasPlaceholder
                    imageUrl="https://theplantsproject.com.au/cdn/shop/articles/office_idea_1024x1024.png?v=1742711986"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-white w-full lg:w-[40%]">
                <div className="relative bg-black flex-[2] min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                  <div className="absolute bg-[#cbe425] -right-2 top-2 w-[70%] sm:w-[80%] h-8 sm:h-10 md:h-12 pointer-events-none hidden sm:block"></div>
                  <div className="h-full">
                    <ServiceCard
                      service={services[1]}
                      index={1}
                      hasPlaceholder
                      imageUrl="https://cdn.prod.website-files.com/5d4c9442574a782d86d480d5/5e5edeec5db29a8bd293684d_TMA-Wilton-Brands-cafe1_edc25c1405df16b8ec979ccd6ea97d0d_1000.webp"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 bg-white flex-[1] items-stretch">
                  <div className="flex-1 relative overflow-hidden">
                    <ServiceCard service={services[2]} index={2} />
                  </div>
                  <div className="flex-1 relative overflow-hidden">
                    <ServiceCard service={services[3]} index={3} />
                  </div>
                </div>
              </div>
            </div>
    
            {/* <div className="mt-12 text-center">
              <p className="text-gray-400 text-xs tracking-wider uppercase">
                Disposition inspirée de la suite de Fibonacci • Φ ≈ 1.618
              </p>
            </div> */}
          </div>
        </section>
  );
};
