"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import styles from "./ProductPage.module.css";

const product = {
  ...products[0],
  image: "/images/remera.png",
  name: "Remera Manga Corta",
  price: 99999,
};

const accordionItems = [
  { id: "care", label: "Instrucciones de cuidado", content: "Lavar a mano o en ciclo delicado. No usar blanqueador. Planchar a baja temperatura." },
  { id: "size", label: "Guía de talle", content: "S: 88-92cm pecho. M: 92-96cm. L: 96-100cm. XL: 100-106cm. XXL: 106-112cm." },
  { id: "returns", label: "Compra y devolución", content: "Devolución gratuita dentro de los 30 días. El producto debe estar sin uso y con etiquetas." },
  { id: "sustainability", label: "Sustentabilidad", content: "Fabricado con algodón orgánico certificado GOTS. Producción de bajo impacto ambiental." },
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <main className={styles.main}>

      {/* Header de producto: nombre + precio */}
      <div className={styles.productHeader}>
        <span className={styles.productName}>{product.name.toUpperCase()}</span>
        <span className={styles.productPrice}>{formattedPrice}</span>
      </div>

      {/* Imagen */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="100vw"
          className={styles.image}
          priority
        />
      </motion.div>

      {/* Filas de color y talle */}
      <motion.div
        className={styles.selectors}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Color */}
        <div className={styles.row}>
          <span className={styles.rowLabel}>Color</span>
          <div className={styles.colors}>
            {product.colors.map((color) => (
              <button
                key={color}
                className={styles.colorBtn}
                aria-label={color}
                data-active={color === selectedColor}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Talle */}
        <div className={styles.row}>
          <span className={styles.rowLabel}>Talle</span>
          <div className={styles.sizes}>
            {product.sizes.map((size) => (
              <button
                key={size}
                className={styles.sizeBtn}
                data-active={size === selectedSize}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Botón agregar */}
      <motion.button
        className={styles.addBtn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
      >
        Añadir al carrito
      </motion.button>

      {/* Acordeones */}
      <div className={styles.accordion}>
        {accordionItems.map((item) => (
          <div key={item.id} className={styles.accordionItem}>
            <button
              className={styles.accordionTrigger}
              onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
              aria-expanded={openAccordion === item.id}
            >
              <span>{item.label.toUpperCase()}</span>
              <motion.span
                className={styles.accordionIcon}
                animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              >
                ∨
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openAccordion === item.id && (
                <motion.div
                  className={styles.accordionContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <p className={styles.accordionText}>{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

    </main>
  );
}
