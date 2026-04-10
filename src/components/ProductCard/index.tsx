"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Link
      href={`/product/${product.slug}`}
      className={styles.card}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name.toUpperCase()}</h3>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
    </Link>
  );
}
