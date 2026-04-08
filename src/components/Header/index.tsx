"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useMenu } from "@/context/MenuContext";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { openCart } = useCart();
  const { openMenu } = useMenu();

  if (!isHome) return <StaticHeader openCart={openCart} openMenu={openMenu} />;
  return <HomeHeader openCart={openCart} openMenu={openMenu} />;
}

interface HeaderProps {
  openCart: () => void;
  openMenu: () => void;
}

/* ---- Header estático para páginas que no son home ---- */
function StaticHeader({ openCart, openMenu }: HeaderProps) {
  return (
    <header className={styles.static}>
      <div className={styles.container}>
        <button className={styles.staticMenuBtn} aria-label="Abrir menú" onClick={openMenu}>
          <span className={styles.menuIcon}>
            <span /><span /><span />
          </span>
        </button>
        <Link href="/" className={styles.staticLogo}>Velom</Link>
        <div className={styles.actions}>
          <button className={styles.staticCartBtn} aria-label="Ver carrito" onClick={openCart}>
            <CartSvg className={styles.cartIcon} />
            <span className={styles.cartCount}>1</span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---- Header animado para home ---- */
function HomeHeader({ openCart, openMenu }: HeaderProps) {
  const [compact, setCompact] = useState(false);
  const [opaque, setOpaque] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });

    const hero = document.getElementById("hero");
    if (hero) {
      const observer = new IntersectionObserver(
        ([entry]) => setOpaque(!entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(hero);
      return () => {
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${compact ? styles.compact : ""} ${opaque ? styles.opaque : ""}`}>
      <div className={styles.container}>
        <button className={styles.menuBtn} aria-label="Abrir menú" onClick={openMenu}>
          <span className={styles.menuIcon}>
            <span /><span /><span />
          </span>
        </button>
        <Link href="/" className={styles.logo}>Velom</Link>
        <div className={styles.actions}>
          <button className={styles.cartBtn} aria-label="Ver carrito" onClick={openCart}>
            <CartSvg className={styles.cartIcon} />
            <span className={styles.cartCount}>1</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function CartSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
