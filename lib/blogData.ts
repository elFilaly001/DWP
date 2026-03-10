export interface BlogSection {
  id: string;
  label: string;
  title: string;
  body: string;
}

export interface BlogPost {
  id: string;
  date: string;
  category: string;
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  excerpt: string;
  coverImage: string;
  sections: BlogSection[];
  images: string[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "la-lumiere",
    date: "Janvier 2025",
    category: "Éclairage & Design",
    heroLabel: "Journal de l'intérieur",
    heroTitle: "Et la lumière fut.",
    heroSubtitle:
      "Comment la lumière façonne nos espaces, notre perception et nos émotions. Une exploration technique et sensible au cœur de l'architecture intérieure.",
    excerpt:
      "En architecture intérieure, la lumière ne se limite pas à éclairer : elle révèle, transforme et sublime. Découvrez comment maîtriser cet élément fondamental du design.",
    coverImage: "/blog-visual-1.png",
    sections: [
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
    ],
    images: [
      "/blog-visual-1.png",
      "/blog-visual-2.jpeg",
      "/blog-visual-3.png",
      "/blog-visual-4.png",
      "/blog-visual-5.png",
      "/blog-visual-6.png",
    ],
    metadata: {
      title: "DWP - Et la lumière fut",
      description:
        "Un regard d'expert sur la lumière en architecture intérieure : concepts, paramètres techniques et clés pour créer des espaces harmonieux et sensibles.",
      keywords: [
        "blog architecture intérieure",
        "éclairage intérieur",
        "design lumière",
        "ambiance lumineuse",
        "température de couleur",
        "éclairage naturel",
        "éclairage artificiel",
        "confort visuel",
        "design d'intérieur",
        "DWP",
      ],
    },
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getAllBlogIds(): string[] {
  return blogPosts.map((post) => post.id);
}
