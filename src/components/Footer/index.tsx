"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <footer className={styles.footer}>
      {/* Descuento */}
      <div className={styles.discount}>
        <p className={styles.discountText}>Inicia sesión y recibi un descuento</p>
      </div>

      {/* Email */}
      <form className={styles.emailForm} onSubmit={handleSubmit}>
        <label htmlFor="footer-email" className={styles.emailLabel}>
          Email
        </label>
        <input
          id="footer-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
          placeholder=""
          autoComplete="email"
        />
      </form>

      {/* Nav + Redes */}
      <div className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><Link href="/shop" className={styles.navLink}>Shop</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          <li><Link href="/about" className={styles.navLink}>About us</Link></li>
        </ul>

        <ul className={styles.socialLinks}>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              Facebook
            </a>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className={styles.logoRow}>
        <span className={styles.logo}>VELOM</span>
      </div>
    </footer>
  );
}
