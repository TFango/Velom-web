"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Editorial.module.css";

export default function Editorial() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/gafas.png"
          alt="Hombre sosteniendo gafas de sol"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
          priority
        />
        <div className={styles.overlay} />
      </div>

      <motion.div
        className={styles.label}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ position: "absolute", bottom: 32, left: 32 }}
      >
        <Link href="/product" className={styles.link}>
          Explora lo nuevo en gafas
        </Link>
      </motion.div>
    </section>
  );
}
