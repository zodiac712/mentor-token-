import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import styles from "@/styles/hero/About-Hero.module.css"

export default function AboutHero() {
  return (
    <section className={styles.aboutHeroSection}>
      <div className={styles.backgroundImage}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82fee28bb72f6b61b0aac2695e15d5b93531902b.jpg-rTO2OeRrDwcuGaBmb4ppksQCWZv8gG.jpeg"
          alt="Geometric background pattern"
          fill
          className={styles.bgImg}
        />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Meet our team members
        </h1>
        <p className={styles.subtitle}>
          We Focus on the details of everything we do. All to help businesses around the world
          Focus on what's most important to them.
        </p>
        <Link
          href="/contact"
          className={styles.ctaBtn}
        >
          <ArrowRight className={styles.arrowIcon} />
          <span>Get in touch</span>
        </Link>
      </div>
    </section>
  )
}