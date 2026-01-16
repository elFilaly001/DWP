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
  imageUrl,
}: {
  service: any;
  index: number;
  className?: string;
  hasPlaceholder?: boolean;
  imageHeight?: string;
  imageWidth?: string;
  imageUrl?: string;
}) => {
  const [active, setActive] = useState<number | null>(null);

  // Make the card fill its parent and use a column flex layout so flex-basis (percent) works
  const imageFlexBasis = imageHeight || "60%";

  return (
    <div
      className={`${className} relative group cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:shadow-2xl hover:z-10 h-full flex flex-col`}
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
    >
      {/* base dark overlay */}
      <div className="absolute inset-0 bg-black transition-transform duration-1000 group-hover:scale-110 z-0" />

      {/* Image area uses flex-basis so it scales with parent height (prevents collapse on zoom) */}
      {imageUrl ? (
        <div
          className="w-full overflow-hidden z-10"
          style={{
            flexBasis: imageFlexBasis,
          }}
        >
          <img
            src={imageUrl}
            alt={service?.title ?? "service image"}
            className="w-full h-full object-cover"
            style={{ height: "100%" }}
          />
        </div>
      ) : hasPlaceholder ? (
        <div
          className="w-full flex items-center justify-center border border-white/10 text-white/60 text-sm font-medium pointer-events-none z-10"
          style={{
            flexBasis: imageFlexBasis,
          }}
        >
          Image
        </div>
      ) : null}

      {/* Content area fills remaining space and scrolls when needed */}
      <div className="p-6 md:p-8 z-20 overflow-y-auto scrollbar-hide flex-1">
        <div className="transform transition-transform duration-500 group-hover:scale-105">
          <h3
            className={`text-white font-light mb-4 transition-all duration-500 group-hover:tracking-wide ${
              index % 5 === 2 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
            }`}
          >
            {service.title}
          </h3>

          <p className="text-white/70 leading-relaxed transition-all duration-700 whitespace-pre-line text-sm md:text-base">
            {service.description.trim()}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
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
      description: `
        Transformez votre cuisine en un paradis culinaire avec des appareils modernes, des rangements sur mesure et des finitions élégantes.
        Notre expertise en rénovation culinaire combine fonctionnalité professionnelle et design sophistiqué pour créer des espaces qui inspirent la créativité et facilitent le travail quotidien. Que vous souhaitiez moderniser une cuisine existante ou la réinventer complètement, nous intégrons des solutions innovantes adaptées à vos besoins spécifiques. Des systèmes d'éclairage LED stratégiquement positionnés aux surfaces de travail durables et hygiéniques, chaque détail est méticuleusement planifié pour optimiser l'efficacité et l'esthétique.
        `,
      featured: true,
      size: "large",
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
      title: "Rencontre",
      description:
        "Tout projet débute par une rencontre. Un temps d’échange essentiel pour comprendre votre vision, vos usages, vos contraintes et vos ambitions, et poser les bases d’une collaboration claire et sereine.",
      fibonacci: 1,
    },
    {
      number: "02",
      title: "Analyse & intention",
      description:
        "Nous analysons le lieu, son contexte et son potentiel. Cette phase permet de définir une intention forte, en alignant identité, fonctionnalité et sens, afin de donner une direction claire au projet.",
      fibonacci: 1,
    },
    {
      number: "03",
      title: "Concept & narration",
      description:
        "Nous traduisons l’intention en concept. Ambiances, lignes directrices et partis pris esthétiques prennent forme pour construire une narration cohérente et élégante autour de l’espace.",
      fibonacci: 2,
    },
    {
      number: "04",
      title: "Définition des espaces",
      description:
        "Le concept est ensuite structuré et rationalisé. Organisation des volumes, parcours, matériaux et premières orientations techniques sont définis pour assurer l’équilibre entre design, usage et faisabilité.",
      fibonacci: 3,
    },
    {
      number: "05",
      title: "Coordination & mise en œuvre",
      description:
        "Nous accompagnons le projet dans sa phase de réalisation. La coordination des intervenants, le suivi des choix et le contrôle de la qualité garantissent le respect de la vision initiale à chaque étape.",
      fibonacci: 5,
    },
    {
      number: "06",
      title: "Ajustements & finitions",
      description:
        "Chaque détail compte. Nous affinons, ajustons et veillons à la cohérence globale du projet, afin d’atteindre un niveau de finition à la hauteur des exigences définies.",
      fibonacci: 8,
    },
    {
      number: "07",
      title: "Livraison",
      description:
        "Le projet est livré dans sa forme finale. Un espace abouti, prêt à être vécu, fidèle à l’intention de départ et pensé pour durer.",
      fibonacci: 13,
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
        {/* Background with subtle spiral */}
        <div
          className="absolute inset-0 opacity-20 w-full h-full flex items-center justify-center "
          dangerouslySetInnerHTML={{
            __html: `
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" height="580" width="915" id="svg2">
    <metadata id="metadata7"></metadata>
    <defs id="defs5"/>
    <path transform="matrix(0,1,1,0,0,0)" id="path2782" style="opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:1.99999988;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <text transform="scale(1.0001758,0.99982423)" xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:13.32342434px;line-height:1.25;font-family:'Times New Roman';letter-spacing:0px;word-spacing:0px;fill:#c5d558;fill-opacity:1;stroke:none;stroke-width:1" x="196.37582" y="-166.3719" id="text990"><tspan id="tspan988" x="196.37582" y="-166.3719" style="stroke-width:1">constructed startin with 1x1mm square; last square is 144x144</tspan></text>
    <path d="M 18.898132,563.14957 A 543.94263,543.75146 0 0 1 562.84077,19.398132" id="path1873" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path1875" d="M -899.02731,355.46605 A 336.18655,336.06839 0 0 1 -562.84075,19.397675" transform="scale(-1,1)"/>
    <path transform="matrix(0,-1,-1,0,0,0)" d="m -563.14906,-691.27235 a 207.68251,207.75557 0 0 1 207.68251,-207.75556" id="path2762" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path2764" d="M 562.84128,-434.76319 A 128.43051,128.38536 0 0 1 691.27179,-563.14854" transform="scale(1,-1)"/>
    <path d="m 562.84184,434.7637 a 79.324539,79.296654 0 0 1 79.32454,-79.29665" id="path2766" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path2768" d="m -691.27137,404.55478 a 49.105476,49.088211 0 0 1 49.10548,-49.08821" transform="scale(-1,1)"/>
    <path transform="scale(-1)" d="m -691.27178,-404.55426 a 30.218561,30.207939 0 0 1 30.21856,-30.20794" id="path2770" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path2772" d="m 642.16632,-415.8829 a 18.886414,18.879776 0 0 1 18.88641,-18.87978" transform="scale(1,-1)"/>
    <path d="m 642.16683,415.88342 a 11.331649,11.327665 0 0 1 11.33164,-11.32766" id="path2774" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2784" d="M 653.49848,415.88344 V 404.55528" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2786" d="M 661.05275,415.88294 H 642.16583" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2788" d="m 653.49798,412.10688 h 7.55477" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2790" d="m 657.27586,412.10738 v 3.77606" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2794" d="m 661.05325,404.55428 v 30.20844" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2796" d="m 642.16586,404.55478 h 49.10598" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2798" d="M 642.16636,434.76372 V 355.46656" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2800" d="M 691.27181,434.76322 H 562.84079" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2802" d="M 691.27234,355.46658 V 563.14961" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2804" d="M 562.8408,355.27506 H 899.21875" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path id="rect2806" d="M 562.84129,563.14958 V 19.397678" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 18.89815,563.1496 V 18.89761" id="path922"/>
    <path id="path924" d="M 899.02836,562.64954 V 18.897641" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 18.89765,18.897107 H 899.5276" id="path926"/>
    <path id="path928" d="M 18.89765,563.14909 H 899.52759" style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path transform="scale(-1,1)" d="m -661.05231,412.10681 a 7.5542655,7.5516105 0 0 1 7.55426,-7.55161" id="path1028" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    <path style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path1030" d="m -661.05276,-412.10736 a 3.7768829,3.7755551 0 0 1 3.77688,-3.77556" transform="scale(-1)"/>
    <path transform="scale(1,-1)" d="m 653.50534,-412.10101 a 3.7768831,3.7755556 0 0 1 3.77689,-3.77556" id="path1034" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#c5d558;stroke-width:2.66666667;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
</svg>
`,
          }}
        />

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


              <button className="group relative bg-[#cbe425] text-black px-10 py-5 text-sm font-bold tracking-[0.2em] overflow-hidden transition-all duration-700 hover:px-12">
                <span className="relative z-10 flex items-center gap-3">
                  DÉCOUVRIR NOS SERVICES
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-700 group-hover:translate-x-2"
                  />
                </span>
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[#cbe425] z-10">
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
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-32 h-32 opacity-5">
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

            <h2 className="text-5xl md:text-7xl font-light text-black mb-6 tracking-tight">
              Nos solutions
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Services de rénovation aux proportions du{" "}
              <span className="font-semibold text-black">nombre d'or (Φ)</span>
            </p>
          </div>

          {/* outer grid: left big area + right column */}

          <div className="flex flex-row gap-3  ">
            <div className="relative bg-black w-[900px] aspect-square ">
              <div className="absolute bg-[#cbe425] -left-2 top-50 w-[550px] h-50 "></div>
              <div>
                <ServiceCard
                  service={services[0]}
                  index={0}
                  hasPlaceholder
                  imageUrl="https://theplantsproject.com.au/cdn/shop/articles/office_idea_1024x1024.png?v=1742711986" // <-- add your image URL here
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-white w-[600px] aspect-square">
              <div className="relative bg-black flex-[2]">
                <div className="absolute bg-[#cbe425] -right-2 top-2 w-[550px] h-12 pointer-events-none"></div>
                <div className="h-full">
                  <ServiceCard
                    service={services[1]}
                    index={1}
                    hasPlaceholder
                    imageUrl="https://cdn.prod.website-files.com/5d4c9442574a782d86d480d5/5e5edeec5db29a8bd293684d_TMA-Wilton-Brands-cafe1_edc25c1405df16b8ec979ccd6ea97d0d_1000.webp"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 bg-white flex-[1] items-stretch">
                <div className="flex-1 relative overflow-hidden">
                  <ServiceCard service={services[2]} index={2} />
                </div>
                <div className="flex-1 relative overflow-hidden">
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
              Notre méthodologie
            </h2>
            <p className="text-gray-600 text-lg">
              Une approche structurée, pensée pour créer des espaces justes, durables et singuliers
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
                          className="w-3 h-3 bg-black opacity-0 group-hover:opacity-100 transition-all duration-500"
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
      <section className="py-24 px-6 md:px-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.618fr] gap-12 items-center">
            {/* Left: 38.2% - Image/Avatar placeholder */}
            <div className="relative aspect-square bg-gray-800  overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/Gemini_Generated_Image_59ewwk59ewwk59ew.png"
                  alt="design team member"
                />
              </div>
            </div>

            {/* Right: 61.8% - Quote (Golden Ratio) */}
            <div>
              <div className="text-white/60 text-xs tracking-[0.3em] mb-6 uppercase">
                Message de notre équipe
              </div>

              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic">
                « Chaque projet de rénovation est une opportunité de créer
                quelque chose d'extraordinaire. Nous abordons chaque espace avec
                un regard neuf et l'engagement de dépasser les attentes. »
              </blockquote>

              <div>
                <div className="font-medium mb-1">Carlos Rodriguez</div>
                <div className="text-white/60 text-sm">
                  Designer d'intérieur principale
                </div>
              </div>

              {/* Golden ratio line */}
              <div
                className="mt-8 h-[1px] bg-white/20 w-0 animate-expand"
                style={{ animation: "expand 2s ease-out forwards" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl text-black font-light mb-8">
            Envie de rêver ?
          </h2>

          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et donnons vie à vos idées. Planifiez une
            consultation gratuite dès aujourd'hui.
          </p>

          <button className="group relative bg-[#cbe425] text-black px-12 py-6 text-sm font-bold tracking-[0.2em] overflow-hidden transition-all duration-700 hover:px-16">
            <span className="relative z-10 flex items-center  gap-4 mx-auto justify-center">
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
            {(
              [
                8, 13, 21, 28, 21, 13, 8 // symmetric, 28px center
              ] as const
            ).map((size, i, arr) => (
              <div
                key={i}
                className={`bg-gray-300 transition-all duration-500 hover:bg-black cursor-pointer ${
                  i === Math.floor(arr.length / 2) ? "shadow-lg scale-110" : ""
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

export default ServicesPage;
