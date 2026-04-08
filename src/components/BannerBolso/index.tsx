"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BannerBolso.module.css";

export default function BannerBolso() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <Image
            src="/images/bolso.png"
            alt="Bolso de cuero premium"
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className={styles.image}
            priority
          />
        </motion.div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className={styles.heading}>Los últimos modelos en bolsos</h2>
          <p className={styles.sub}>calidad totalmente premiun</p>
          <Link href="/product" className={styles.cta}>
            Explorar bolsos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
