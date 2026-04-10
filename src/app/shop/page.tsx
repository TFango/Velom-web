"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, type Category } from "@/data/products";
import styles from "./shop.module.css";

const FILTERS: { label: string; value: "all" | Category }[] = [
  { label: "Todo", value: "all" },
  { label: "Remeras", value: "remeras" },
  { label: "Pantalones", value: "pantalones" },
  { label: "Camperas", value: "camperas" },
];

export default function ShopPage() {
  const [active, setActive] = useState<"all" | Category>("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <main className={styles.page}>
      {/* Barra superior fija */}
      <div className={styles.topBar}>
        <nav className={styles.filterBar}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={styles.filterBtn}
              data-active={active === f.value}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </main>
  );
}
