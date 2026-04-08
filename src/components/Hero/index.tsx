import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>

      <Image
        src="/images/hero.png"
        alt="Nueva colección VELOM"
        fill
        priority
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <h1 className={styles.title}>Nueva colección</h1>

        <Link href="/product" className={styles.cta}>
          Comprar ahora
          <svg
            className={styles.ctaArrow}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

    </section>
  );
}
