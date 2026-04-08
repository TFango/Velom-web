"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ProductGrid.module.css";

const items = [
  {
    id: 1,
    image: "/images/remeraOpcion1.jpg",
    name: "Remera Overzide",
    price: "$xxx",
  },
  {
    id: 2,
    image: "/images/remeraOpcion2.jpg",
    name: "Chaqueta de Cuero",
    price: "$xxx",
  },
];

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className={styles.heading}>Hecho para ti</h2>
        <p className={styles.sub}>versatilidad y moda combinada</p>
      </motion.div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: i * 0.07,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <Link href="/product" className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className={styles.image}
              />
            </Link>
            <div className={styles.info}>
              <span className={styles.name}>{item.name.toUpperCase()}</span>
              <span className={styles.price}>{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
