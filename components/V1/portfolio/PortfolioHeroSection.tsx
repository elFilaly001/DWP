"use client";
import { ArrowRight } from "lucide-react";

export const PortfolioHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background with subtle spiral - moved to right side */}
      <div className="absolute top-0 bottom-0 right-0 w-1/2 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full flex items-center justify-center opacity-100">
          <div
            dangerouslySetInnerHTML={{
              __html: `
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
  <path fill="#cbe425" opacity="0.12" d="m178.41 115.87v6.6704q-40.948 10.561-40.948 77.449 0 72.447 50.954 85.231v-107.65q0-23.531 2.9651-34.278 2.9652-10.932 12.97-19.084 10.191-8.3378 24.458-8.3378 25.014 0 46.321 23.531 21.493 23.531 21.493 61.329 0 35.389-22.048 63.182-21.864 27.793-66.147 31.684v76.152h-20.011v-76.152q-38.539-3.3351-61.885-28.719-23.161-25.569-23.161-66.332 0-36.686 21.123-59.847 21.123-23.346 53.918-24.828zm30.016 169.35q58.365-8.7083 58.365-75.411 0-30.757-12.599-51.509-12.414-20.937-29.275-20.937-6.1141 0-10.376 4.4467-4.0749 4.2616-5.1905 10.191-0.92746 5.9292-0.92746 23.346z"/>
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

            <h1 className="text-white text-[clamp(20px,8vw,72px)] font-serif leading-[0.95] mb-8 group">
              Chaque création raconte une expérience.
            </h1>

            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
              Chaque projet suit les principes du nombre d’or. Design mathématiquement parfait, résultats naturellement harmonieux.
            </p>

            <button className="group relative bg-[#cbe425] text-black px-10 py-5 text-sm font-bold tracking-[0.2em] overflow-hidden transition-all duration-700 hover:px-12">
              <span className="relative z-10 flex items-center gap-3">
                DÉCOUVRIR NOS RÉALISATIONS
                <ArrowRight
                  size={16}
                  className="transition-transform duration-700 group-hover:translate-x-2"
                />
              </span>
              <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[#cbe425] z-10">
                <span className="flex items-center gap-3">
                  DÉCOUVRIR NOS RÉALISATIONS
                  <ArrowRight size={16} />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
