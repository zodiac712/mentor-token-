"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "@/styles//Mentor/MyStatsMentor.module.css";

function MentorTokenLogo() {
  return (
    <svg width="29" height="31" viewBox="0 0 29 31" fill="none">
      <path
        d="M28.375 8.38023C28.375 8.01707 28.1781 7.68245 27.8606 7.50608L14.9856 0.353298C14.6836 0.185507 14.3164 0.185507 14.0143 0.353298L1.13933 7.50608C0.821869 7.68245 0.624977 8.01707 0.624977 8.38023L0.624977 22.6201C0.624977 22.9833 0.821869 23.3179 1.13933 23.4943L14.0143 30.647C14.3164 30.8148 14.6836 30.8148 14.9856 30.647L27.8606 23.4943C28.1781 23.3179 28.375 22.9833 28.375 22.6201V8.38023ZM14.0147 3.88323C14.3165 3.71572 14.6834 3.71572 14.9852 3.88323L22.0355 7.79608C22.7219 8.177 22.7218 9.16404 22.0354 9.54487L19.6439 10.8717C19.2471 11.0918 18.7569 11.0104 18.4048 10.7241C17.3402 9.85844 15.9802 9.3335 14.5 9.3335C13.0197 9.3335 11.6598 9.85844 10.5951 10.7241C10.2431 11.0104 9.75281 11.0918 9.35604 10.8717L6.96455 9.54487C6.27814 9.16404 6.27807 8.177 6.96443 7.79608L14.0147 3.88323ZM12.9583 24.8398C12.9583 25.6021 12.1396 26.0841 11.473 25.7142L4.22304 21.6904C3.90537 21.5141 3.70831 21.1794 3.70831 20.8161V12.976C3.70831 12.2134 4.52765 11.7315 5.19419 12.102L7.83701 13.5712C8.24465 13.7978 8.43335 14.2762 8.37739 14.7393C8.34744 14.9871 8.33331 15.2419 8.33331 15.5002C8.33331 18.0954 9.93714 20.3245 12.219 21.2272C12.6443 21.3955 12.9583 21.7866 12.9583 22.2439V24.8398ZM11.4166 15.5002C11.4166 13.8043 12.8041 12.4168 14.5 12.4168C16.1958 12.4168 17.5833 13.8043 17.5833 15.5002C17.5833 17.196 16.1958 18.5835 14.5 18.5835C12.8041 18.5835 11.4166 17.196 11.4166 15.5002ZM17.5269 25.7142C16.8604 26.0841 16.0416 25.6021 16.0416 24.8398V22.2593C16.0416 21.802 16.3557 21.4109 16.781 21.2427C19.0628 20.3399 20.6666 18.1109 20.6666 15.5156C20.6666 15.2503 20.6517 14.9888 20.6201 14.7329C20.5633 14.2731 20.7521 13.7996 21.157 13.5745L23.8058 12.102C24.4723 11.7315 25.2916 12.2134 25.2916 12.976V20.8161C25.2916 21.1794 25.0946 21.5141 24.7769 21.6904L17.5269 25.7142Z"
        fill="#696CFF"
      />
    </svg>
  );
}
function DashboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
        stroke="#566A7F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
        stroke="#566A7F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
        stroke="#566A7F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
        stroke="#696CFF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function StatsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke="#696CFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7H7V16H10V7Z"
        stroke="#696CFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7H14V12H17V7Z"
        stroke="#696CFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function FeedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#566A7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#566A7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function LogoutIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 12L15 8M19 12L15 16M19 12H9"
        stroke="#696CFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14 21C9.02944 21 5 16.9706 5 12C5 7.02944 9.02944 3 14 3"
        stroke="#696CFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
function VerifiedIcon() {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_37_1273)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.86668 0.866211C1.61915 0.866211 1.38175 0.95752 1.20672 1.12005C1.03168 1.28258 0.93335 1.50302 0.93335 1.73288V11.2662C0.93335 11.4961 1.03168 11.7165 1.20672 11.879C1.38175 12.0416 1.61915 12.1329 1.86668 12.1329H12.1333C12.3809 12.1329 12.6183 12.0416 12.7933 11.879C12.9683 11.7165 13.0667 11.4961 13.0667 11.2662V1.73288C13.0667 1.50302 12.9683 1.28258 12.7933 1.12005C12.6183 0.95752 12.3809 0.866211 12.1333 0.866211H1.86668ZM2.84668 5.19954H4.62002V10.3995H2.84668V5.19954ZM4.73668 3.47054C4.73668 3.71764 4.63098 3.95461 4.44281 4.12933C4.25465 4.30405 3.99945 4.40221 3.73335 4.40221C3.46725 4.40221 3.21205 4.30405 3.02389 4.12933C2.83572 3.95461 2.73002 3.71764 2.73002 3.47054C2.73002 3.22345 2.83572 2.98648 3.02389 2.81176C3.21205 2.63704 3.46725 2.53888 3.73335 2.53888C3.99945 2.53888 4.25465 2.63704 4.44281 2.81176C4.63098 2.98648 4.73668 3.22345 4.73668 3.47054ZM11.2 7.24228C11.2 5.67794 10.1108 5.06954 9.02908 5.06954C8.67555 5.0536 8.32355 5.12255 8.00708 5.26974C7.76722 5.38241 7.51615 5.63721 7.32202 6.08268H7.27255V5.19954H5.60002V10.4039H7.37895V7.63488C7.35375 7.35148 7.45082 6.98488 7.65055 6.76734C7.85122 6.54894 8.13588 6.49694 8.35335 6.47094H8.42148C8.98708 6.47094 9.40708 6.79594 9.40708 7.61494V10.403H11.186L11.2 7.24228Z"
          fill="#696CFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_37_1273">
          <rect width="14" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2.33341 2.3335H11.6667C12.3084 2.3335 12.8334 2.8585 12.8334 3.50016V10.5002C12.8334 11.1418 12.3084 11.6668 11.6667 11.6668H2.33341C1.69175 11.6668 1.16675 11.1418 1.16675 10.5002V3.50016C1.16675 2.8585 1.69175 2.3335 2.33341 2.3335Z"
        stroke="#696CFF"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8334 3.5L7.00008 7.58333L1.16675 3.5"
        stroke="#696CFF"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <g clipPath="url(#clip0_1_10037)">
        <path
          d="M12.8333 9.86989V11.6199C12.834 11.7824 12.8007 11.9432 12.7356 12.092C12.6705 12.2409 12.5751 12.3745 12.4554 12.4843C12.3357 12.5941 12.1943 12.6778 12.0404 12.7298C11.8865 12.7819 11.7235 12.8012 11.5617 12.7866C9.76665 12.5915 8.04242 11.9781 6.5275 10.9957C5.11807 10.1001 3.92311 8.90516 3.0275 7.49573C2.04166 5.97393 1.42814 4.24131 1.23667 2.43823C1.22209 2.27692 1.24126 2.11434 1.29296 1.96084C1.34466 1.80735 1.42775 1.6663 1.53695 1.54667C1.64615 1.42705 1.77905 1.33147 1.92721 1.26603C2.07537 1.20059 2.23553 1.16671 2.3975 1.16656H4.1475C4.4306 1.16377 4.70505 1.26402 4.9197 1.44862C5.13434 1.63322 5.27455 1.88957 5.31417 2.16989C5.38803 2.72993 5.52501 3.27982 5.7225 3.80906C5.80099 4.01785 5.81797 4.24476 5.77145 4.46291C5.72492 4.68105 5.61684 4.88129 5.46 5.03989L4.71917 5.78073C5.54958 7.24113 6.75877 8.45032 8.21917 9.28073L8.96 8.53989C9.1186 8.38306 9.31884 8.27497 9.53699 8.22845C9.75513 8.18192 9.98205 8.19891 10.1908 8.27739C10.7201 8.47488 11.27 8.61186 11.83 8.68573C12.1134 8.7257 12.3722 8.86843 12.5571 9.08677C12.7421 9.3051 12.8404 9.58381 12.8333 9.86989Z"
          stroke="#696CFF"
          strokeWidth="1.16667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_10037">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function MyStatsMentor() {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [mentorName, setMentorName] = useState("Kirra Press");
  const [mentorImg, setMentorImg] = useState("/default.png");
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis."
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("mentorName");
      if (storedName) setMentorName(storedName);
      const storedImg = localStorage.getItem("mentorImg");
      if (storedImg && storedImg !== "") setMentorImg(storedImg);
      const savedAbout = localStorage.getItem("mentorAboutText");
      if (savedAbout) setAboutText(savedAbout);
    }
  }, []);

    function handleSaveAbout() {
    localStorage.setItem("mentorAboutText", aboutText);
    setIsEditingAbout(false);
  }


  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logoRow}>
          <MentorTokenLogo />
          <span className={styles.logoText}>Mentor Token</span>
        </div>
        <nav className={styles.nav}>
          <button
            className={`${styles.navButton} ${
              pathname === "/mentor-dashboard" ? styles.navButtonActive : ""
            }`}
            onClick={() => router.push("/mentor-dashboard")}
          >
            <DashboardIcon />
            Dashboard
          </button>
          <button
            className={`${styles.navButton} ${
              pathname === "/mentor-dashboard/my-stats"
                ? styles.navButtonActive
                : ""
            }`}
            onClick={() => router.push("/mentor-dashboard/my-stats")}
          >
            <StatsIcon />
            My Stats
          </button>
          <button
            className={styles.navButton}
            onClick={() => router.push("/mentor-dashboard/jobsfeedmentor")}
          >
            <FeedIcon />
            Job Feed
          </button>
        </nav>
        <button
          className={styles.logoutButton}
          onClick={() => router.push("/login")}
        >
          <LogoutIcon />
          Logout
        </button>
      </aside>
      <main className={styles.main}>
        <div className={styles.header}>
         <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            <svg
              className={styles.searchIcon}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="9" cy="9" r="7" stroke="#A0A3BD" strokeWidth="2" />
              <path
                d="M17 17L13.5 13.5"
                stroke="#A0A3BD"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className={styles.profileRow}>
            <Image
              src={mentorImg}
              alt={mentorName}
              width={48}
              height={48}
              className="rounded-full object-cover aspect-square"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.profileInfo}>
              <span className={styles.profileName}>{mentorName}</span>
              <span className={styles.profileRole}>Mentor</span>
            </div>
          </div>
        </div>
        <div className={styles.statsSection}>
          <h2 className={styles.statsTitle}>My Stats</h2>
          <div className={styles.statsRow}>
             <div className={styles.aboutCard}>
              <div className={styles.aboutHeader}>
                <span className={styles.aboutTitle}>About</span>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  onClick={() => setIsEditingAbout(true)}
                  aria-label="Edit About"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M13.3333 3.3335C13.6848 2.98201 14.3152 2.98201 14.6667 3.3335L16.6667 5.3335C17.0182 5.685 17.0182 6.31543 16.6667 6.66693L6.66667 16.6669H3.33333V13.3335L13.3333 3.3335Z"
                      stroke="#696CFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className={styles.aboutSkills}>
                Skills: Sales | Management | Problem-solving
              </div>
              <div className={styles.aboutText}>
                {isEditingAbout ? (
                  <div>
                    <textarea
                      value={aboutText}
                      onChange={e => setAboutText(e.target.value)}
                      rows={6}
                      style={{
                        width: "100%",
                        fontSize: "1rem",
                        padding: "0.5rem",
                        marginBottom: "0.5rem"
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleSaveAbout}
                      style={{
                        background: "#696CFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "0.5rem 1rem",
                        cursor: "pointer"
                      }}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingAbout(false)}
                      style={{
                        marginLeft: "0.5rem",
                        background: "#eee",
                        color: "#333",
                        border: "none",
                        borderRadius: "4px",
                        padding: "0.5rem 1rem",
                        cursor: "pointer"
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <span>{aboutText}</span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.performanceQuickRow}>
            <div className={styles.performanceCard}>
              <h3 className={styles.performanceTitle}>Performance Over Time</h3>
              <div className={styles.performanceInner}>
                <div className={styles.performanceStats}>
                  <div className={styles.performanceStatsTitle}>STATISTICS</div>
                  <div className={styles.performanceStatsDesc}>
                    Overall target accomplishment over the year
                  </div>
                </div>
                <div className={styles.performanceChart}>
                  <svg
                    width="472"
                    height="167"
                    viewBox="0 0 452 157"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.48755 154.711C1.48755 154.711 8.04967 154.711 24.2911 154.711C80.9615 154.711 66.6221 93.2407 105.591 93.2407C139.587 93.2407 126.912 93.2407 155.164 93.2407C210.686 93.2407 204.737 2.02637 260.259 2.02637C266.207 2.02637 287.028 2.02637 292.977 2.02637C338.297 2.02637 339.575 68.4542 370.311 68.4542C377.276 68.4542 389.442 68.4542 392.123 68.4542C409.199 68.4542 406.995 93.2407 425.832 93.2407C444.67 93.2407 449.627 93.1032 449.627 93.1032"
                      stroke="#696CFF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.quickOverview}>
              <h3 className={styles.quickOverviewTitle}>Quick Overview</h3>
              <div className={styles.quickOverviewList}>
                <div className={styles.quickOverviewItem}>
                  <span>Total Jobs</span>
                  <span className="quickOverviewValue">132</span>
                </div>
                <div className={styles.quickOverviewItem}>
                  <span>Total Assigned Jobs</span>
                  <span className="quickOverviewValue">43</span>
                </div>
                <div className={styles.quickOverviewItem}>
                  <span>Jobs That You Have Applied</span>
                  <span className="quickOverviewValue">21</span>
                </div>
                <div
                  className={`${styles.quickOverviewItem} ${styles.quickOverviewItemFinished}`}
                >
                  <span>Finished Jobs</span>
                  <span className="quickOverviewValue">63</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
