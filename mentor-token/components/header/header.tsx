"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "@/styles/header/Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoRow}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
              alt="Mentor Token Logo"
              width={32}
              height={32}
              className={styles.logoImg}
            />
            <span className={styles.logoText}>Mentor Token</span>
          </Link>

          <nav className={styles.nav}>
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={styles.navLink}
            >
              Contact
            </Link>
          </nav>

          <div className={styles.actions}>
            <Link href="/login" className={styles.loginLink}>
              Login
            </Link>
            <Link href="/register">
              <Button className={styles.ctaBtn}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}