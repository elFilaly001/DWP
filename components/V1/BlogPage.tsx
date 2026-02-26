import React from "react";
import Image from "next/image";

const articleSections = [
  {
    id: "et-la-lumiere-fut",
    label: "Chapitre 01",
    title: "Et la lumière fut : l'élément clé de l'harmonie intérieure",
    body: `Depuis toujours, elle façonne notre perception du monde et structure nos espaces de vie. En architecture intérieure, la lumière ne se limite pas à éclairer : elle révèle, transforme et sublime. Elle influence l'ambiance, le confort et même l'état d'esprit des occupants. Comprendre son rôle et maîtriser ses paramètres techniques permet de créer des espaces harmonieux, fonctionnels et émotionnellement impactants.`,
  },
  {
    id: "comprendre-la-lumiere",
    label: "Chapitre 02",
    title: "Comprendre la lumière : une énergie au service du design",
    body: `La lumière est un rayonnement électromagnétique perceptible par l'œil humain. Au-delà de sa définition scientifique, elle devient en design d'intérieur une véritable matière immatérielle. Son intensité, sa direction et sa température de couleur influencent la perception des volumes, la profondeur des espaces et la mise en valeur des textures.`,
  },
  {
    id: "naturelle-vs-artificielle",
    label: "Chapitre 03",
    title:
      "Lumière naturelle et lumière artificielle : une complémentarité essentielle",
    body: `La lumière naturelle, provenant du soleil, évolue au fil des heures et des saisons. Elle apporte chaleur, dynamisme et bien-être, mais reste difficilement contrôlable et nécessite une conception architecturale adaptée. La lumière artificielle, quant à elle, offre une maîtrise totale : éclairage ambiant pour illuminer uniformément, éclairage d'accentuation pour valoriser des éléments précis, et éclairage de travail pour optimiser la visibilité dans les zones fonctionnelles.`,
  },
  {
    id: "parametres-techniques",
    label: "Chapitre 04",
    title: "Les paramètres techniques à maîtriser",
    body: `L'intensité lumineuse doit être adaptée à l'usage de chaque espace : plus soutenue dans les bureaux, plus douce dans les zones de détente. La température de couleur joue également un rôle majeur : les teintes chaudes (2000–3000K) créent une atmosphère chaleureuse et relaxante, tandis que les teintes plus froides (3500–5000K) stimulent la concentration. La distribution homogène de la lumière évite les zones d'ombre et améliore le confort visuel, tandis que les variateurs d'intensité et systèmes d'éclairage zoné permettent d'ajuster l'ambiance aux différents moments de la journée.`,
  },
  {
    id: "lumiere-et-surfaces",
    label: "Chapitre 05",
    title: "La lumière et les surfaces : un dialogue permanent",
    body: `La couleur des murs et des plafonds influence directement la réflexion lumineuse. Les teintes claires amplifient la luminosité et donnent une impression d'espace, tandis que les couleurs foncées absorbent la lumière et créent des ambiances plus intimistes. Le choix des matières, des textures et des finitions participe ainsi pleinement à la mise en scène de la lumière.`,
  },
  {
    id: "conclusion",
    label: "Chapitre 06",
    title: "Conclusion : la lumière comme signature architecturale",
    body: `Bien maîtrisée, la lumière devient la signature d'un projet. Elle structure l'espace, révèle les matières et crée une expérience sensorielle complète. Plus qu'un simple outil fonctionnel, elle est un langage architectural à part entière, capable de transformer un intérieur en œuvre vivante.`,
  },
];

const blogImages = [
  "/blog-visual-1.png",
  "/blog-visual-2.jpeg",
  "/blog-visual-3.png",
  "/blog-visual-4.png",
  "/blog-visual-5.png",
  "/blog-visual-6.png",
];

export const BlogPage = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #cbe425 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="text-[#cbe425] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-4 uppercase">
            Journal de l'intérieur
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.95] mb-6 sm:mb-8">
            Et la lumière fut.
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Comment la lumière façonne nos espaces, notre perception et nos
            émotions. Une exploration technique et sensible au cœur de
            l’architecture intérieure.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="relative pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 space-y-16 sm:space-y-20 md:space-y-24">
          {articleSections.map((section, index) => {
            const isEven = index % 2 === 0;
            const imageSrc = blogImages[index];

            return (
              <article
                key={section.id}
                className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
                id={section.id}
              >
                {/* Text */}
                <div
                  className={
                    isEven ? "order-1" : "order-2 md:order-1 md:pl-8"
                  }
                >
                  <div className="text-[#cbe425] text-[0.7rem] sm:text-xs tracking-[0.25em] uppercase mb-3">
                    {section.label}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-5">
                    {section.title}
                  </h2>
                  <p className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                    {section.body}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={
                    isEven ? "order-2" : "order-1 md:order-2 md:pr-8"
                  }
                >
                  <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />
                    <div className="relative z-10 h-full w-full flex items-end justify-between p-4 sm:p-5 md:p-6">
                      {/* <div className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-white/60">
                        Visuel lumière 0{index + 1}
                      </div> */}
                      <div className="text-[0.65rem] sm:text-xs text-white/60">
                        © DWP
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;

