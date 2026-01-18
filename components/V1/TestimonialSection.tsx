export const TestimonialSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr] gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left: 38.2% - Image/Avatar placeholder */}
          <div className="relative aspect-square max-w-[280px] sm:max-w-[320px] md:max-w-none mx-auto md:mx-0 bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/Gemini_Generated_Image_59ewwk59ewwk59ew.png"
                alt="design team member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: 61.8% - Quote (Golden Ratio) */}
          <div className="text-center md:text-left">
            <div className="text-white/60 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
              Message de notre équipe
            </div>

            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-6 sm:mb-8 italic">
              « Chaque projet de rénovation est une opportunité de créer quelque
              chose d'extraordinaire. Nous abordons chaque espace avec un regard
              neuf et l'engagement de dépasser les attentes. »
            </blockquote>

            <div>
              <div className="font-medium mb-1 text-sm sm:text-base">
                Carlos Rodriguez
              </div>
              <div className="text-white/60 text-xs sm:text-sm">
                Designer d'intérieur principale
              </div>
            </div>

            {/* Golden ratio line */}
            <div
              className="mt-6 sm:mt-8 h-[1px] bg-white/20 w-0 animate-expand mx-auto md:mx-0"
              style={{ animation: "expand 2s ease-out forwards" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
