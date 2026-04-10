"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total } = useCart();

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
            transition={{ duration: 0.3, ease: "easeOut" }}
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
            {/* Header */}
            <div className={styles.header}>
              <span className={styles.headerTitle}>Tu carrito</span>
              <button className={styles.closeBtn} onClick={closeCart} aria-label="Cerrar carrito">
                <CloseIcon />
              </button>
            </div>

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
                          sizes="88px"
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.itemInfo}>
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemMeta}>
                          {item.color} · {item.size}
                        </p>
                        <p className={styles.itemPrice}>{formattedPrice}</p>
                        <div className={styles.itemActions}>
                          <div className={styles.qty}>
                            <button
                              className={styles.qtyBtn}
                              onClick={() => updateQuantity(item.id, -1)}
                              aria-label="Reducir cantidad"
                            >
                              −
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
                          <button
                            className={styles.removeBtn}
                            onClick={() => removeItem(item.id)}
                            aria-label="Eliminar producto"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Subtotal</span>
                <span className={styles.totalValue}>{formattedTotal}</span>
              </div>
              <p className={styles.shippingNote}>Envío calculado al finalizar la compra</p>
              <button className={styles.checkoutBtn}>Finalizar compra</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
