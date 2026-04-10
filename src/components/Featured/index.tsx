"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import styles from "./Featured.module.css";

export default function Featured() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active]
  );

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % products.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  const formattedPrice = (price: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <section className={styles.section}>

      {/* ---- Mobile: carrusel clásico con productos reales ---- */}
      <div className={styles.mobileLayout}>
        <div className={styles.carousel}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className={styles.slide}
            >
              <Image
                src={products[active].image}
                alt={products[active].name}
                fill
                sizes="90vw"
                className={styles.image}
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.footer}>
          <div className={styles.indicators} role="tablist">
            {products.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={i === active}
                aria-label={p.name}
                className={styles.indicator}
                data-active={i === active}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <h2 className={styles.heading}>Una nueva era de moda</h2>
          <Link href="/shop" className={styles.cta}>
            Explora la nueva colección
          </Link>
        </div>
      </div>

      {/* ---- Desktop: marquee infinito ---- */}
      <div className={styles.desktopLayout}>
        <div className={styles.marqueeHeader}>
          <h2 className={styles.heading}>Una nueva era de moda</h2>
          <Link href="/shop" className={styles.cta}>Explora la colección</Link>
        </div>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeInner}>
            {[...products, ...products].map((p, i) => (
              <Link key={i} href={`/product/${p.slug}`} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="400px"
                    className={styles.cardImage}
                    draggable={false}
                  />
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardName}>{p.name.toUpperCase()}</p>
                  <p className={styles.cardPrice}>{formattedPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};
