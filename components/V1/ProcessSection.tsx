import React, { useState } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  fibonacci: number;
}

interface ProcessSectionProps {
  process: ProcessStep[];
}

export const ProcessSection = ({ process }: ProcessSectionProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl text-black font-sans mb-4 sm:mb-6">
            Notre méthodologie
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
            Une approche structurée, pensée pour créer des espaces justes,
            durables et singuliers
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {process.map((step, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className={`group relative block mx-auto h-64 sm:h-80 lg:h-96 w-full max-w-sm cursor-pointer ${
                activeCard === index ? "z-50" : "z-10"
              }`}
            >
              <span className="absolute inset-0 border-2 border-dashed border-white" />
              <div
                className={`relative flex h-full w-full transform items-end border-2 border-white bg-black transition-transform overflow-hidden md:group-hover:scale-105 ${
                  activeCard === index ? "scale-105" : ""
                }`}
              >
                {/* Sierpinski Triangle SVG Background - First Card Only */}
                {index === 0 && (
                  <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="80%"
                      height="80%"
                      viewBox="0 0 400 346"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <path id="lev0" fill="#c5d558" d="M0 0,2 0,1 1.732 z" />
                        <g id="lev1">
                          <use
                            xlinkHref="#lev0"
                            transform="matrix(0.5 0 0 0.5  0  0)"
                          />
                          <use
                            xlinkHref="#lev0"
                            transform="matrix(0.5 0 0 0.5  1  0)"
                          />
                          <use
                            xlinkHref="#lev0"
                            transform="matrix(0.5 0 0 0.5 0.5 0.866)"
                          />
                        </g>
                        <g id="lev2">
                          <use
                            xlinkHref="#lev1"
                            transform="matrix(0.5 0 0 0.5  0  0)"
                          />
                          <use
                            xlinkHref="#lev1"
                            transform="matrix(0.5 0 0 0.5  1  0)"
                          />
                          <use
                            xlinkHref="#lev1"
                            transform="matrix(0.5 0 0 0.5 0.5 0.866)"
                          />
                        </g>
                        <g id="lev3">
                          <use
                            xlinkHref="#lev2"
                            transform="matrix(0.5 0 0 0.5  0  0)"
                          />
                          <use
                            xlinkHref="#lev2"
                            transform="matrix(0.5 0 0 0.5  1  0)"
                          />
                          <use
                            xlinkHref="#lev2"
                            transform="matrix(0.5 0 0 0.5 0.5 0.866)"
                          />
                        </g>
                        <g id="lev4">
                          <use
                            xlinkHref="#lev3"
                            transform="matrix(0.5 0 0 0.5  0  0)"
                          />
                          <use
                            xlinkHref="#lev3"
                            transform="matrix(0.5 0 0 0.5  1  0)"
                          />
                          <use
                            xlinkHref="#lev3"
                            transform="matrix(0.5 0 0 0.5 0.5 0.866)"
                          />
                        </g>
                        <g id="lev5">
                          <use
                            xlinkHref="#lev4"
                            transform="matrix(0.5 0 0 0.5  0  0)"
                          />
                          <use
                            xlinkHref="#lev4"
                            transform="matrix(0.5 0 0 0.5  1  0)"
                          />
                          <use
                            xlinkHref="#lev4"
                            transform="matrix(0.5 0 0 0.5 0.5 0.866)"
                          />
                        </g>
                      </defs>
                      <use
                        xlinkHref="#lev5"
                        transform="translate(0,0) scale(200)"
                      />
                    </svg>
                  </div>
                )}
                <div
                  className={`absolute z-20 p-4 !pt-0 transition-opacity sm:p-6 lg:p-8 bottom-0 left-0 right-0 ${
                    activeCard === index
                      ? "opacity-0"
                      : "opacity-100 md:group-hover:opacity-0"
                  }`}
                >
                  <div className="text-6xl sm:text-7xl font-light text-gray-700">
                    {step.number}
                  </div>
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl text-white">
                    {step.title}
                  </h2>
                </div>
                <div
                  className={`absolute z-30 p-4 transition-opacity sm:p-6 lg:p-8 inset-0 flex flex-col justify-center ${
                    activeCard === index
                      ? "opacity-100"
                      : "opacity-0 md:group-hover:opacity-100"
                  }`}
                >
                  <h3 className="text-xl font-medium sm:text-2xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
