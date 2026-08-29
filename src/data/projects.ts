/**
 * Centralised project data for the prototype.
 * Swap the `img()` placeholder URLs for real stills later — nothing else changes.
 */

export type Category = "Commercial" | "Film" | "TV Series";

export interface Project {
  id: string;
  title: string;
  category: Category;
  year: string;
  client: string;
  director: string;
  role: string;
  production: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  videoUrl: string;
  gallery: string[];
  featured: boolean;
  credits: { label: string; value: string }[];
}

/** Remote placeholder image. Replace with real asset URLs when available. */
const img = (seed: string, w = 1600, h = 900, grayscale = false) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}${grayscale ? "?grayscale" : ""}`;

const galleryFor = (seed: string): string[] => [
  img(`${seed}-g1`, 1800, 1012),
  img(`${seed}-g2`, 1200, 1500),
  img(`${seed}-g3`, 1200, 1500, true),
  img(`${seed}-g4`, 1800, 1012, true),
  img(`${seed}-g5`, 1400, 900),
];

const creditsFor = (
  client: string,
  director: string,
  production: string,
  year: string,
): { label: string; value: string }[] => [
  { label: "Client", value: client },
  { label: "Director", value: director },
  { label: "Director of Photography", value: "Mohamed Bakr" },
  { label: "Production", value: production },
  { label: "Year", value: year },
];

interface Seed {
  id: string;
  title: string;
  category: Category;
  year: string;
  client: string;
  director: string;
  production: string;
  description: string;
  featured?: boolean;
  seed: string;
}

const seeds: Seed[] = [
  {
    id: "shahid",
    title: "SHAHID",
    category: "Commercial",
    year: "2026",
    client: "Shahid",
    director: "Layla Mansour",
    production: "NORTH LIGHT FILMS",
    description:
      "A launch campaign built around a single travelling light. Shot on anamorphic glass across three practical stages, the film moves through a viewer's living room and dissolves into the worlds they are watching — each transition carried by a hard key that follows the character rather than the set.",
    featured: true,
    seed: "cine-shahid",
  },
  {
    id: "noir",
    title: "NOIR",
    category: "Film",
    year: "2025",
    client: "Independent",
    director: "Karim Halabi",
    production: "SALT & SMOKE",
    description:
      "A short feature photographed almost entirely at night. Streetlight, sodium vapour and rain became the only sources; the camera stays on long lenses and lets the city compress around a man who has run out of alternatives.",
    featured: true,
    seed: "cine-noir",
  },
  {
    id: "the-last-light",
    title: "THE LAST LIGHT",
    category: "Film",
    year: "2025",
    client: "Independent",
    director: "Nour El Rashid",
    production: "DUNE HOUSE",
    description:
      "Shot across eleven consecutive magic hours in the Western Desert. The schedule was written around the sun: forty minutes a day, no artificial light, one camera, and a crew small enough to disappear from the frame.",
    featured: true,
    seed: "cine-lastlight",
  },
  {
    id: "urban-nights",
    title: "URBAN NIGHTS",
    category: "Commercial",
    year: "2024",
    client: "Meridian Motors",
    director: "Yusuf Adel",
    production: "BLACKBOX",
    description:
      "An automotive film built from reflection. Wet asphalt, a moving light array and a tracking vehicle running at speed give the car its own weather — the product is never lit directly, only revealed by what passes over it.",
    featured: true,
    seed: "cine-urban",
  },
  {
    id: "after-midnight",
    title: "AFTER MIDNIGHT",
    category: "TV Series",
    year: "2024",
    client: "Atlas Network",
    director: "Hana Farouk",
    production: "ATLAS ORIGINALS",
    description:
      "Eight episodes of a nocturnal drama with a fixed visual grammar: two lighting states per location, handheld only inside the apartment, locked frames everywhere else. The rule set made a long shoot feel authored.",
    featured: true,
    seed: "cine-midnight",
  },
  {
    id: "the-journey",
    title: "THE JOURNEY",
    category: "Commercial",
    year: "2023",
    client: "Levant Air",
    director: "Omar Sabry",
    production: "NORTH LIGHT FILMS",
    description:
      "A travel campaign covering four countries in nine days. Natural light, one prime set and a documentary posture — the brief was to make the brand feel observed rather than staged.",
    featured: true,
    seed: "cine-journey",
  },
  {
    id: "salt",
    title: "SALT",
    category: "Film",
    year: "2023",
    client: "Independent",
    director: "Nour El Rashid",
    production: "SALT & SMOKE",
    description:
      "A coastal chamber piece about inheritance. Photographed on expired stock emulation with a cool, silver highlight roll-off to keep the sea present even in interiors.",
    seed: "cine-salt",
  },
  {
    id: "the-quiet-hour",
    title: "THE QUIET HOUR",
    category: "TV Series",
    year: "2023",
    client: "Atlas Network",
    director: "Hana Farouk",
    production: "ATLAS ORIGINALS",
    description:
      "A six-part procedural shot with a two-camera cross-coverage system designed to protect performance. Practicals carry every night interior; nothing is lit from outside the world of the scene.",
    seed: "cine-quiet",
  },
  {
    id: "monolith",
    title: "MONOLITH",
    category: "Commercial",
    year: "2022",
    client: "Verta Architecture",
    director: "Layla Mansour",
    production: "BLACKBOX",
    description:
      "Architecture treated as portraiture. Long slow moves on a technocrane, hard sunlight cut by the building itself, and a palette held to concrete, bronze and sky.",
    seed: "cine-monolith",
  },
  {
    id: "ember",
    title: "EMBER",
    category: "Film",
    year: "2022",
    client: "Independent",
    director: "Karim Halabi",
    production: "DUNE HOUSE",
    description:
      "A one-location drama photographed entirely by firelight and a single tungsten unit. Grain was embraced, not corrected — the image degrades as the night runs down.",
    seed: "cine-ember",
  },
  {
    id: "high-street",
    title: "HIGH STREET",
    category: "Commercial",
    year: "2022",
    client: "Kasr Denim",
    director: "Yusuf Adel",
    production: "BLACKBOX",
    description:
      "A fashion film staged in live traffic. Wide-open apertures, available light and choreography rehearsed to the second so the city could stay exactly as it was.",
    seed: "cine-highstreet",
  },
  {
    id: "seventeen-days",
    title: "SEVENTEEN DAYS",
    category: "TV Series",
    year: "2021",
    client: "Meridian Studios",
    director: "Omar Sabry",
    production: "ATLAS ORIGINALS",
    description:
      "A limited series covering one hospital corridor over seventeen days. A rigid lens set and one dolly move per scene created rhythm inside repetition.",
    seed: "cine-seventeen",
  },
  {
    id: "glasshouse",
    title: "GLASSHOUSE",
    category: "Commercial",
    year: "2021",
    client: "Nadir Fragrance",
    director: "Layla Mansour",
    production: "NORTH LIGHT FILMS",
    description:
      "A product film shot through layered glass and water. Every flare in the piece is optical — no post additions — so the light behaves like a material.",
    seed: "cine-glasshouse",
  },
  {
    id: "northbound",
    title: "NORTHBOUND",
    category: "Film",
    year: "2020",
    client: "Independent",
    director: "Hana Farouk",
    production: "SALT & SMOKE",
    description:
      "A road film photographed from inside the car for two thirds of its running time. Rigs were built to keep the camera at eye height so the landscape passes as memory rather than scenery.",
    seed: "cine-northbound",
  },
];

export const projects: Project[] = seeds.map((s) => ({
  id: s.id,
  title: s.title,
  category: s.category,
  year: s.year,
  client: s.client,
  director: s.director,
  role: "Director of Photography",
  production: s.production,
  description: s.description,
  thumbnail: img(s.seed, 1400, 1750),
  heroImage: img(`${s.seed}-hero`, 2000, 1125),
  videoUrl: "",
  gallery: galleryFor(s.seed),
  featured: Boolean(s.featured),
  credits: creditsFor(s.client, s.director, s.production, s.year),
}));

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

export const categories = ["ALL", "COMMERCIALS", "FILMS", "TV SERIES"] as const;
export type CategoryFilter = (typeof categories)[number];

const filterMap: Record<Exclude<CategoryFilter, "ALL">, Category> = {
  COMMERCIALS: "Commercial",
  FILMS: "Film",
  "TV SERIES": "TV Series",
};

export const filterProjects = (filter: CategoryFilter): Project[] =>
  filter === "ALL" ? projects : projects.filter((p) => p.category === filterMap[filter]);

export const getProject = (id: string): Project | undefined => projects.find((p) => p.id === id);

export const getAdjacent = (id: string) => {
  const i = projects.findIndex((p) => p.id === id);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
};
