"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Featured.module.css";

const items = [
  { id: 1, url: "/images/remera.png", name: "Remera Esencial", slug: "remera-esencial" },
  { id: 2, url: "/images/campera.png", name: "Campera Urbana", slug: "campera-urbana" },
  { id: 3, url: "/images/buzo.png", name: "Buzo Clásico", slug: "buzo-clasico" },
  { id: 4, url: "/images/pantalon.png", name: "Pantalón Cargo", slug: "pantalon-cargo" },
];

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
    const nextIndex = (active + 1) % items.length;
    setDirection(1);
    setActive(nextIndex);
  }, [active]);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
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
                src={items[active].url}
                alt={items[active].name}
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className={styles.image}
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.footer}>
          <div className={styles.indicators} role="tablist" aria-label="Imagen activa">
            {items.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={i === active}
                aria-label={item.name}
                className={styles.indicator}
                data-active={i === active}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <h2 className={styles.heading}>Una nueva era de moda</h2>
          <Link href="/product" className={styles.cta}>
            Explora la nueva colección
          </Link>
        </div>
      </div>
    </section>
  );
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};
