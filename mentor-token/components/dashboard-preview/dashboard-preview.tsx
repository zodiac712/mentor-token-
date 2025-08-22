"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Dashboard/DashboardPreview.module.css";

export default function DashboardPreview() {
  const [search, setSearch] = useState("");
  const mentors = [
    {
      name: "Kierra Press",
      id: "ID",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AMyYkWNL0FdZf3axnpj9VTvTyNh5fZ.png",
      rating: 2.5,
      skills: "Sales | Management | Problem-solving",
      desc: "Field sales training, 5+ years in an outside sales position"
    },
    {
      name: "Alison Vetrovs",
      id: "ID",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cN4jwpXBEpBhtGnie0QRF8EHD2grrQ.png",
      rating: 4.9,
      skills: "Sales | Management | Problem-solving",
      desc: "The sales representative position is an OR based sales role with uncapp... "
    },
    {
      name: "Marcus Carder",
      id: "ID",
      avatar: "/Marcus-Carder.png",
      rating: 3.2,
      skills: "Leadership | Management | Product sales",
      desc: "Regional sales manager with a strong background in sales and marketing."
    }
  ];


  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        opacity: filled ? 1 : 0.25,
        display: "inline-block",
        marginRight: 2,
        verticalAlign: "middle"
      }}
    >
      <path
        d="M6.26119 0.28418L4.40387 4.04781L0.252441 4.64787L3.25682 7.57877L2.54654 11.7139L6.26119 9.76266L9.97584 11.7139L9.26556 7.57877L12.2699 4.65195L8.11851 4.04781L6.26119 0.28418Z"
        fill="url(#paint0_linear_35_227)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_35_227"
          x1="6.26119"
          y1="0.28418"
          x2="6.26119"
          y2="11.7139"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.161458" stopColor="#6669FB" />
          <stop offset="0.635417" stopColor="#8E4FFF" />
          <stop offset="0.755208" stopColor="#9059F1" />
          <stop offset="1" stopColor="#9747FF" />
        </linearGradient>
      </defs>
    </svg>
  );


  const IdIcon = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.851823 0.765625C0.649733 0.765625 0.455921 0.84017 0.313022 0.972862C0.170123 1.10555 0.0898438 1.28552 0.0898438 1.47318V9.25625C0.0898438 9.4439 0.170123 9.62387 0.313022 9.75656C0.455921 9.88926 0.649733 9.9638 0.851823 9.9638H9.23359C9.43568 9.9638 9.6295 9.88926 9.77239 9.75656C9.91529 9.62387 9.99557 9.4439 9.99557 9.25625V1.47318C9.99557 1.28552 9.91529 1.10555 9.77239 0.972862C9.6295 0.84017 9.43568 0.765625 9.23359 0.765625H0.851823ZM1.6519 4.30339H3.09966V8.5487H1.6519V4.30339ZM3.19491 2.89182C3.19491 3.09355 3.10861 3.28701 2.95499 3.42966C2.80138 3.5723 2.59303 3.65244 2.37578 3.65244C2.15854 3.65244 1.95019 3.5723 1.79657 3.42966C1.64295 3.28701 1.55665 3.09355 1.55665 2.89182C1.55665 2.69009 1.64295 2.49662 1.79657 2.35398C1.95019 2.21134 2.15854 2.1312 2.37578 2.1312C2.59303 2.1312 2.80138 2.21134 2.95499 2.35398C3.10861 2.49662 3.19491 2.69009 3.19491 2.89182ZM8.47161 5.97109C8.47161 4.69395 7.58238 4.19725 6.69925 4.19725C6.41062 4.18423 6.12325 4.24053 5.86488 4.3607C5.66906 4.45268 5.46408 4.6607 5.30559 5.02438H5.26521V4.30339H3.89974V8.55224H5.35207V6.29161C5.3315 6.06024 5.41074 5.76094 5.57381 5.58335C5.73763 5.40504 5.97004 5.36259 6.14758 5.34136H6.2032C6.66496 5.34136 7.00785 5.6067 7.00785 6.27533V8.55153H8.46019L8.47161 5.97109Z" fill="#696CFF"/>
    </svg>
  );


  const LogoutIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M19 12L15 8M19 12L15 16M19 12H9" stroke="#696CFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      <path d="M14 21C9.02944 21 5 16.9706 5 12C5 7.02944 9.02944 3 14 3" stroke="#696CFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </svg>
  );


  const ProgressArrow = () => (
    <svg width="13" height="7" viewBox="0 0 13 7" fill="none">
      <path d="M6.48386 0.620118L12.6787 6.81492L0.289061 6.81492L6.48386 0.620118Z" fill="#44C5E2"/>
    </svg>
  );

  return (
    <div className={styles.pageBg}>
      <div className={styles.dashboardContainer}>
        <div className={styles.headerRow}>
          <h1 className={styles.headerTitle}>
            Every <span className={styles.headerHighlight}>success</span> is rewarded!
          </h1>
          <div className={styles.girlOnClockWrap}>
            <Image
              src="/girl-on-clock.png"
              alt="Productivity Illustration"
              width={800}
              height={800}
              priority
              className={styles.girlOnClockImg}
            />
          </div>
        </div>
        <div className={styles.dashboardMain}>
          <aside className={styles.sidebar}>
            <div>
              <div className={styles.logoRow}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
                  alt="Mentor Token"
                  width={32}
                  height={32}
                />
                <span className={styles.logoText}>Mentor Token</span>
              </div>
              <nav className={styles.nav}>
                <button className={styles.navItem}>Dashboard</button>
                <button className={`${styles.navItem} ${styles.navItemActive}`}>Mentors</button>
                <button className={styles.navItem}>Tokens</button>
              </nav>
            </div>
            <button className={styles.logoutButton}>
              <LogoutIcon />
              Logout
            </button>
          </aside>
          <main className={styles.mainContent}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search Mentor..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
              <section className={styles.mentorsSection}>
                <div className={styles.mentorsHeader}>Mentors</div>
                <div className={styles.mentorsSubheader}>Monitor and add new mentors</div>
                <div className={styles.mentorsActions}>
                  <button className={styles.addMentorBtn}>+ Add New Mentor</button>
                  <button className={styles.createJobBtn}>Create New Job</button>
                </div>
                <div className={styles.mentorCards}>
                  {mentors
                    .filter(m => m.name.toLowerCase().includes(search.toLowerCase()))
                    .map((mentor, idx) => (
                      <div key={idx} className={styles.mentorCard}>
                        <Image
                          src={mentor.avatar}
                          alt={mentor.name}
                          width={56}
                          height={56}
                          className={styles.mentorAvatar}
                        />
                        <div>
                          <div className={styles.mentorNameRow}>
                            {mentor.name}
                            <span className={styles.mentorIdIcon}><IdIcon /></span>
                          </div>
                          <div className={styles.mentorStars}>
                            {[1,2,3,4,5].map(i => (
                              <StarIcon key={i} filled={i <= Math.round(mentor.rating)} />
                            ))}
                            <span style={{ marginLeft: 8, color: "#A0A3BD", fontSize: 13 }}>
                              {mentor.rating} average based on KPI success rate.
                            </span>
                          </div>
                          <div className={styles.mentorSkills}>
                            Skills: <span>{mentor.skills}</span>
                          </div>
                          <div className={styles.mentorDesc}>
                            {mentor.desc}
                          </div>
                        </div>
                        <button className={styles.viewMentorBtn}>View Mentor</button>
                      </div>
                    ))}
                </div>
              </section>
              <div className={styles.quickOverviewCol}>
                <div>
                  <div className={styles.quickOverviewHeader}>Quick Overview</div>
                  <div className={styles.quickOverviewSubheader}>in the last month</div>
                </div>
                <div className={styles.quickOverviewCard}>
                  <div className={styles.quickOverviewLabel}>Total Mentors</div>
                  <div className={styles.quickOverviewValue}>32</div>
                </div>
                <div className={`${styles.quickOverviewCard} ${styles.quickOverviewCardPrimary}`}>
                  <div className={styles.quickOverviewLabel}>Assigned Jobs</div>
                  <div className={styles.quickOverviewValue}>63</div>
                </div>
                <div className={styles.quickOverviewCard}>
                  <div className={styles.quickOverviewProgressRow}>
                    <div className={styles.quickOverviewProgressLabel}>Monthly Progress</div>
                    <ProgressArrow />
                  </div>
                  <div className={styles.quickOverviewProgressValue}>19%</div>
                </div>
                <div className={styles.quickOverviewCard}>
                  <div className={styles.quickOverviewLabel}>Tokens Reserved</div>
                  <div className={styles.quickOverviewValue}>35,125.00</div>
                </div>
              </div>
            </div>
            <div className={styles.cardButtonsRow}>
              <button className={styles.cardButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="22" height="22">
                  <path fill="#696CFF" d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z"/>
                </svg>
              </button>
              <button className={`${styles.cardButton} ${styles.cardButtonActive}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="22" height="22">
                  <path fill="#ffffff" d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"/>
                </svg>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}