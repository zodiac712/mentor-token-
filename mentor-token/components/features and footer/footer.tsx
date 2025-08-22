import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/footer/footer.module.css"


const LinkedinIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#696CFF"/>
    <path d="M14.2051 12.2341C14.2049 12.632 14.0467 13.0134 13.7652 13.2946C13.4838 13.5758 13.1022 13.7336 12.7043 13.7334C12.3065 13.7332 11.9251 13.575 11.6439 13.2935C11.3627 13.0121 11.2049 12.6305 11.2051 12.2326C11.2053 11.8348 11.3635 11.4534 11.6449 11.1722C11.9264 10.891 12.308 10.7332 12.7058 10.7334C13.1037 10.7336 13.4851 10.8918 13.7663 11.1733C14.0474 11.4547 14.2053 11.8363 14.2051 12.2341ZM14.2501 14.8441H11.2501V24.2341H14.2501V14.8441ZM18.9901 14.8441H16.0051V24.2341H18.9601V19.3066C18.9601 16.5616 22.5376 16.3066 22.5376 19.3066V24.2341H25.5001V18.2866C25.5001 13.6591 20.2051 13.8316 18.9601 16.1041L18.9901 14.8441Z" fill="#696CFF"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#696CFF"/>
    <path d="M23.359 14.3853C23.9874 13.9777 24.4035 13.4213 24.6072 12.7137C23.9959 13.0564 23.387 13.2914 22.7788 13.4213C22.232 12.8 21.5399 12.4844 20.71 12.4844C19.8988 12.4844 19.2137 12.7852 18.6545 13.3703C18.0984 13.9596 17.8176 14.6755 17.8176 15.5113C17.8176 15.7652 17.848 15.9921 17.9086 16.1844C15.5163 16.0981 13.5362 15.0494 11.9761 13.0309C11.7116 13.5249 11.5794 14.0278 11.5794 14.5481C11.5794 15.6173 12.0064 16.4646 12.8588 17.0868C12.3727 17.0432 11.9442 16.9134 11.5794 16.7005C11.5794 17.464 11.7917 18.1018 12.2172 18.6631C12.6441 19.2187 13.1924 19.5729 13.8621 19.7242C13.6194 19.7899 13.3635 19.8211 13.1007 19.8211C12.858 19.8211 12.6861 19.7998 12.5842 19.7529C12.7631 20.3751 13.1007 20.8797 13.5883 21.266C14.0744 21.6539 14.6336 21.8585 15.262 21.8766C14.226 22.7355 13.0416 23.1604 11.7015 23.1604C11.3733 23.1604 11.1408 23.1554 11 23.1291C12.3198 24.0348 13.789 24.4844 15.4144 24.4844C17.078 24.4844 18.5479 24.0389 19.8273 23.148C21.1067 22.2621 22.0508 21.169 22.6575 19.8819C23.2672 18.5966 23.569 17.2586 23.569 15.8614V15.4768C24.1585 15.0083 24.6352 14.4807 25 13.898C24.4711 14.1388 23.9244 14.3023 23.359 14.3853Z" fill="#696CFF"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#696CFF"/>
    <path d="M20.5625 18.951L21 16.6177L18.8125 16.6182V14.751C18.8125 14.0305 19.1555 13.8177 20.125 13.8177H21V11.4844C21 11.4844 20.1031 11.4844 19.25 11.4844C17.4685 11.4844 16.1875 12.6207 16.1875 14.751V16.6177H14V18.951H16.1875V25.4844H18.8125V18.951H20.5625Z" fill="#696CFF"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoCol}>
            <div className={styles.logoRow}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
                alt="Mentor Token Logo"
                width={32}
                height={32}
                className={styles.logoImg}
              />
              <span className={styles.logoText}>Mentor Token</span>
            </div>
            <p className={styles.desc}>
              With Mentor Token, every failure transforms into an opportunity for growth.
            </p>
          </div>
          <div>
            <h3 className={styles.heading}>Pages</h3>
            <div className={styles.linkList}>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.contactList}>
              <p>stefansmokovski75@gmail.com</p>
              <p>+(389) 123 456 789</p>
            </div>
          </div>
          <div>
            <h3 className={styles.heading}>Follow Us</h3>
            <div className={styles.socialList}>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            ©2025 Mentor Token. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}