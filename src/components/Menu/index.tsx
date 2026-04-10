"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useMenu } from "@/context/MenuContext";
import styles from "./Menu.module.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/shop", label: "Shop" },
  { href: "/product", label: "Producto" },
];

const secondaryLinks = [
  { href: "/", label: "Instagram" },
  { href: "/", label: "Facebook" },
  { href: "/", label: "Contacto" },
];

export default function Menu() {
  const { isOpen, closeMenu } = useMenu();

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
            onClick={closeMenu}
          />

          {/* Drawer */}
          <motion.div
            className={styles.drawer}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Close */}
            <button className={styles.closeBtn} onClick={closeMenu} aria-label="Cerrar menú">
              ✕
            </button>

            {/* Logo */}
            <div className={styles.logoRow}>
              <span className={styles.logo}>Velom</span>
            </div>

            {/* Links principales */}
            <nav className={styles.nav}>
              {links.map((link, i) => (
                <motion.div
                  key={link.href + link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.1 + i * 0.06,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <Link href={link.href} className={styles.navLink} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className={styles.divider} />

            {/* Links secundarios */}
            <div className={styles.secondary}>
              {secondaryLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.25 + i * 0.05,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <Link href={link.href} className={styles.secondaryLink} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className={styles.menuFooter}>
              <span className={styles.footerText}>© 2025 VELOM</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
