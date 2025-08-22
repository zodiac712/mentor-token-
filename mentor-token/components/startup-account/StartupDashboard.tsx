"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "@/styles/startup/StartupDashboard.module.css";

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
        stroke="#566A7F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MentorsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
        stroke="#566A7F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.16 14.56C4.74 16.18 4.74 18.82 7.16 20.43C9.91 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92 12.73 7.16 14.56Z"
        stroke="#566A7F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function JobsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#566A7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
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
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      style={{ marginRight: 8, verticalAlign: "middle" }}
    >
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
function ArrowIcon({ color = "#CBC6D7" }) {
  return (
    <svg width="39" height="38" viewBox="0 0 39 38" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M26.0312 23.1694C25.3513 22.9873 24.9479 22.2885 25.1301 21.6087L27.7686 11.7614L17.9214 9.12287C17.2416 8.94072 16.8381 8.24195 17.0203 7.56214C17.2024 6.88233 17.9012 6.4789 18.581 6.66105L29.6592 9.62944C30.339 9.8116 30.7424 10.5104 30.5603 11.1902L27.5919 22.2683C27.4097 22.9482 26.711 23.3516 26.0312 23.1694ZM18.2275 27.6749C17.5477 27.4927 17.1443 26.794 17.3264 26.1141L19.965 16.2669L10.1177 13.6283C9.43791 13.4462 9.03448 12.7474 9.21663 12.0676C9.39879 11.3878 10.0975 10.9843 10.7774 11.1665L21.8555 14.1349C22.5353 14.317 22.9388 15.0158 22.7566 15.6956L19.7882 26.7738C19.6061 27.4536 18.9073 27.857 18.2275 27.6749Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="30.5839"
            height="30.5839"
            fill="white"
            transform="translate(8.49231) rotate(15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
function ArrowIconBlue() {
  return (
    <svg width="39" height="38" viewBox="0 0 39 38" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M26.0312 23.2075C25.3513 23.0254 24.9479 22.3266 25.1301 21.6468L27.7686 11.7995L17.9214 9.16096C17.2416 8.9788 16.8381 8.28004 17.0203 7.60023C17.2024 6.92042 17.9012 6.51699 18.581 6.69914L29.6592 9.66753C30.339 9.84968 30.7424 10.5484 30.5603 11.2283L27.5919 22.3064C27.4097 22.9862 26.711 23.3897 26.0312 23.2075ZM18.2275 27.713C17.5477 27.5308 17.1443 26.832 17.3264 26.1522L19.965 16.305L10.1177 13.6664C9.43791 13.4842 9.03448 12.7855 9.21663 12.1057C9.39879 11.4259 10.0975 11.0224 10.7774 11.2046L21.8555 14.173C22.5353 14.3551 22.9388 15.0539 22.7566 15.7337L19.7882 26.8119C19.6061 27.4917 18.9073 27.8951 18.2275 27.713Z"
          fill="#6C6EFF"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="30.5839"
            height="30.5839"
            fill="white"
            transform="translate(8.49231 0.0380859) rotate(15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
function ChartSVG() {
  return (
    <svg
      width="100%"
      height="157"
      viewBox="0 0 920 157"
      fill="none"
      style={{ width: "920px" }}
    >
      <path
        d="M1.48755 154.711C1.48755 154.711 8.04967 154.711 24.2911 154.711C80.9615 154.711 66.6221 93.2407 105.591 93.2407C139.587 93.2407 126.912 93.2407 155.164 93.2407C210.686 93.2407 204.737 2.02637 260.259 2.02637C266.207 2.02637 287.028 2.02637 292.977 2.02637C338.297 2.02637 339.575 68.4542 370.311 68.4542C377.276 68.4542 389.442 68.4542 392.123 68.4542C409.199 68.4542 406.995 93.2407 425.832 93.2407C444.67 93.2407 449.627 93.1032 449.627 93.1032"
        stroke="#696CFF"
        strokeWidth="2.97438"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function StartupDashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [startupName, setStartupName] = useState("TechWave Innovations");
  const [startupImg, setStartupImg] = useState("/techwave-innovations.jpg");

     useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("startupName");
      if (storedName) setStartupName(storedName);
      const storedImg = localStorage.getItem("startupImg");
      if (storedImg && storedImg !== "") setStartupImg(storedImg);
    }
  }, []);


  function handleNav(route: string) {
    if (route === "/jobs") {
      router.push("/startup-dashboard/startup-jobs");
    } else {
      router.push(route);
    }
  }

  function handleLogout() {
    router.push("/login");
  }

  function handleViewMentor(name: string) {
    alert(`Viewing mentor: ${name}`);
  }

  const jobs = [
    { name: "Revenue per rate", status: "DONE" },
    { name: "ARPU (Average revenue per use)", status: "REJECTED" },
    { name: "CAC (Custom Aquisition Cost)", status: "IN PROGRESS" },
    { name: "Churn Rate", status: "DONE" },
    { name: "Burn Rate", status: "IN PROGRESS" },
    { name: "Operation Efficiency", status: "DONE" },
    { name: "Burn Rate", status: "IN PROGRESS" },
    { name: "Operation Efficiency", status: "DONE" },
    { name: "Burn Rate", status: "IN PROGRESS" },
    { name: "Operation Efficiency", status: "DONE" },
  ];

  function filterJobs(tab: string) {
    if (tab === "All") return jobs;
    return jobs.filter((job) => job.status === tab.toUpperCase());
  }


  const mentors = [
    {
      name: "Lucie Weber",
      img: "/lucie-weber.jpg",
      jobs: 18,
      arrow: <ArrowIcon />,
    },
    {
      name: "Crystal Porter",
      img: "/crystal-porter.jpg",
      jobs: 51,
      arrow: <ArrowIconBlue />,
    },
    {
      name: "Thomas Rose",
      img: "/thomas-rose.jpg",
      jobs: 22,
      arrow: <ArrowIcon />,
    },
  ];

  const filteredMentors = mentors.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.bg}>
      <aside className={styles.sidebar}>
        <div className={styles.logoRow}>
          <MentorTokenLogo />
          <span className={styles.logoText}>Mentor Token</span>
        </div>
        <nav className={styles.nav}>
          <button
            className={`${styles.navBtn} ${
              pathname === "/startup-dashboard" ? styles.navBtnActive : ""
            }`}
            onClick={() => handleNav("/startup-dashboard")}
          >
            <DashboardIcon />
            Dashboard
          </button>
          <button
            className={styles.navBtn}
            onClick={() => handleNav("/startup-dashboard/startup-mentors")}
          >
            <MentorsIcon />
            Mentors
          </button>
          <button
            className={styles.navBtn}
            onClick={() => handleNav("/jobs")}
          >
            <JobsIcon />
            Jobs
          </button>
        </nav>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </button>
      </aside>
      <main className={styles.main}>
        <div className={styles.headerRow}>
          <div className={styles.searchWrap}>
            <input
              type="text"
              placeholder="Search Mentor..."
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
              src={startupImg}
              alt={startupName}
              width={48}
              height={48}
              className={styles.profileImg}
            />
            <div>
              <div className={styles.profileName}>{startupName}</div>
            </div>
          </div>
        </div>
        <div className={styles.contentRow}>

          <section className={styles.jobsSection}>
            <h2 className={styles.sectionTitle}>Assigned Jobs</h2>
            <div className={styles.tabsRow}>
              {["All", "Done", "Rejected", "In Progress"].map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tabBtn} ${
                    activeTab === tab ? styles.tabBtnActive : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={styles.jobsList}>
              {filterJobs(activeTab).map((job, idx) => (
                <div key={idx} className={styles.jobCard}>
                  <span className={styles.jobName}>{job.name}</span>
                  <span
                    className={`${styles.jobStatus} ${
                      job.status === "DONE"
                        ? styles.statusDone
                        : job.status === "REJECTED"
                        ? styles.statusRejected
                        : styles.statusProgress
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.rightSection}>
            <h2 className={styles.rightSectionTitle}>Best Performing Mentors</h2>
            <div className={styles.mentorsListWrap}>
              <div className={styles.mentorsList}>
                {filteredMentors.length === 0 ? (
                  <div className={styles.noMentors}>No mentors found.</div>
                ) : (
                  filteredMentors.map((mentor, idx) => (
                    <div key={mentor.name} className={styles.mentorRow}>
                      <div className={styles.mentorInfo}>
                        <Image
                          src={mentor.img}
                          alt={mentor.name}
                          width={48}
                          height={48}
                          className={styles.mentorImg}
                        />
                        <span className={styles.mentorName}>{mentor.name}</span>
                      </div>
                      <div className={styles.mentorStats}>
                        <span className={styles.mentorJobs}>{mentor.jobs}</span>
                        <span className={styles.mentorJobsLabel}>Achieved Jobs</span>
                        <button
                          className={styles.mentorArrowBtn}
                          onClick={() => handleViewMentor(mentor.name)}
                          aria-label={`View ${mentor.name}`}
                        >
                          {mentor.arrow}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <h2 className={styles.statsTitle}>OVERALL STATISTIC</h2>
            <div className={styles.statsCard}>
              <div className={styles.statsCardTitle}>STATISTICS</div>
              <div className={styles.statsCardSubtitle}>
                Overall target accomplishment over the year
              </div>
              <ChartSVG />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}