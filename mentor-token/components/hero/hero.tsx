import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import styles from "@/styles/hero/Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundImage}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background%20image.jpg-o6L5N5jCWs7e9xXiPIaY1ur2eNOplV.jpeg"
          alt="Background"
          fill
          className={styles.bgImg}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          <div className={styles.leftCol}>
            <h1 className={styles.title}>
              Grow your StartUp!<br />
              Monitoring and<br />
              Evaluating now is easy!
            </h1>
            <p className={styles.subtitle}>
              Welcome to Mentor Token, where we redefine the dynamics of start-up success. Our innovative platform offers a transformative approach to mentorship, ensuring that mentors are not just engaged but motivated to drive the success of the ventures they support.
            </p>
            <div className={styles.ctaRow}>
              <a 
                href="/register" 
                className={styles.getStartedBtn}
              >
                <ArrowRight className={styles.arrowIcon} />
                <span>Get Started</span>
              </a>
              <a 
                href="/contact" 
                className={styles.getInTouch}
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className={styles.rightCol}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4a89a1857d65949c80d7c27ee55ebbec0e59524d-jFxzyIL6gM7vDVY3qhH0KHzdLV2iji.png"
              alt="Mentor Token Dashboard"
              width={800}
              height={600}
              className={styles.heroImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}