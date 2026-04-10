export type Category = "remeras" | "pantalones" | "camperas";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  colors: string[];
  sizes: string[];
  image: string;
  description: string;
}

export const products: Product[] = [
  // ---- Remeras ----
  {
    id: "r-001",
    slug: "remera-lino-natural",
    name: "Remera Lino Natural",
    category: "remeras",
    price: 18500,
    colors: ["#e8ddd0", "#02121d", "#3c5967"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/remera1.svg",
    description:
      "Remera de lino lavado con caída suelta. Costura francesa en los laterales y cuello redondo ribeteado. Ideal para días cálidos.",
  },
  {
    id: "r-002",
    slug: "remera-oversize-algodón",
    name: "Remera Oversize Algodón",
    category: "remeras",
    price: 14900,
    colors: ["#fcfcfc", "#b8a794", "#0f0f0f"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/remera2.svg",
    description:
      "Remera oversize de algodón 100% orgánico. Corte amplio, largo extendido y puños ribeteados. Un básico que no falla.",
  },
  {
    id: "r-003",
    slug: "remera-manga-larga-modal",
    name: "Remera Manga Larga Modal",
    category: "remeras",
    price: 16200,
    colors: ["#3c5967", "#b8a794", "#4a3728"],
    sizes: ["S", "M", "L", "XL"],
    image: "/images/products/remera3.svg",
    description:
      "Manga larga en modal suave al tacto. Cuello redondo ajustado, costuras planas y tela que acompaña el movimiento.",
  },

  // ---- Pantalones ----
  {
    id: "p-001",
    slug: "pantalon-cargo-ripstop",
    name: "Pantalón Cargo Ripstop",
    category: "pantalones",
    price: 34800,
    colors: ["#4a3728", "#3c5967", "#02121d"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/pantalon1.svg",
    description:
      "Pantalón cargo en tela ripstop liviana. Cuatro bolsillos laterales con cierre, cintura elástica con cordón y basta doblada.",
  },
  {
    id: "p-002",
    slug: "pantalon-recto-lino",
    name: "Pantalón Recto Lino",
    category: "pantalones",
    price: 29500,
    colors: ["#e8ddd0", "#b8a794", "#fcfcfc"],
    sizes: ["S", "M", "L", "XL"],
    image: "/images/products/pantalon3.svg",
    description:
      "Pantalón de corte recto en lino 100%. Pinzas delanteras, bolsillos laterales y cierre con botón oculto. Elegante y fresco.",
  },
  {
    id: "p-003",
    slug: "pantalon-jogger-algodón",
    name: "Pantalón Jogger Algodón",
    category: "pantalones",
    price: 22900,
    colors: ["#0f0f0f", "#3c5967", "#fcfcfc"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/pantalon4.svg",
    description:
      "Jogger en algodón francTerry con puño en tobillo. Cintura alta con elástico y cordón, bolsillos laterales con cremallera.",
  },

  // ---- Camperas ----
  {
    id: "c-001",
    slug: "campera-coach-nylon",
    name: "Campera Coach Nylon",
    category: "camperas",
    price: 58000,
    colors: ["#02121d", "#3c5967", "#b8a794"],
    sizes: ["S", "M", "L", "XL"],
    image: "/images/products/campera1.svg",
    description:
      "Campera coach en nylon antidesgarros. Cierre central YKK, bolsillos con solapa y logo bordado en el pecho. Corte oversize.",
  },
  {
    id: "c-002",
    slug: "campera-bomber-sarga",
    name: "Campera Bomber Sarga",
    category: "camperas",
    price: 64500,
    colors: ["#4a3728", "#0f0f0f", "#3c5967"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/campera2.svg",
    description:
      "Bomber en sarga de algodón con interior en jersey. Puños y basta en canalé, bolsillos laterales y bolsillo interno.",
  },
  {
    id: "c-003",
    slug: "campera-polar-media-cremallera",
    name: "Campera Polar Media Cremallera",
    category: "camperas",
    price: 42000,
    colors: ["#fcfcfc", "#e8ddd0", "#3c5967"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/campera3.svg",
    description:
      "Polar suave de media cremallera. Dos bolsillos laterales con cierre, cuello alto y tejido antipilling de alta durabilidad.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}
