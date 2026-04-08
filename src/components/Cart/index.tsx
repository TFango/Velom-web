"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { items, isOpen, closeCart, updateQuantity, total } = useCart();

  const formattedTotal = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(total);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "ease-out" }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            className={styles.drawer}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Close */}
            <button className={styles.closeBtn} onClick={closeCart} aria-label="Cerrar carrito">
              ✕
            </button>

            {/* Items */}
            <div className={styles.items}>
              {items.length === 0 ? (
                <p className={styles.empty}>Tu carrito está vacío.</p>
              ) : (
                items.map((item) => {
                  const formattedPrice = new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    maximumFractionDigits: 0,
                  }).format(item.price);

                  return (
                    <div key={item.id} className={styles.item}>
                      <div className={styles.itemImage}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="72px"
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.itemInfo}>
                        <p className={styles.itemName}>{item.name.toUpperCase()}</p>
                        <p className={styles.itemMeta}>
                          {item.color} · {item.size}
                        </p>
                        <p className={styles.itemPrice}>{formattedPrice}</p>
                        <div className={styles.qty}>
                          <button
                            className={styles.qtyBtn}
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label="Reducir cantidad"
                          >
                            -
                          </button>
                          <span className={styles.qtyValue}>{item.quantity}</span>
                          <button
                            className={styles.qtyBtn}
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Aumentar cantidad"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <span className={styles.removeBtn}>
                        <TrashIcon />
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Total</span>
                <span className={styles.totalValue}>{formattedTotal}</span>
              </div>
              <button className={styles.checkoutBtn}>Comprar</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}
