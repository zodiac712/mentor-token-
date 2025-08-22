"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "@/styles/Mentor/JobsFeedMentor.module.css";

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
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
        stroke="#566A7F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
        stroke="#566A7F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
        stroke="#566A7F"
        strokeWidth="1.5"
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
        stroke="#566A7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7H7V16H10V7Z"
        stroke="#566A7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7H14V12H17V7Z"
        stroke="#566A7F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function FeedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#696CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#696CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const jobs = [
  {
    id: 1,
    logo: "/jobs6.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
  },
  {
    id: 2,
    logo: "/jobs5.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
  },
  {
    id: 3,
    logo: "/jobs6.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
  },
  {
    id: 4,
    logo: "/jobs7.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
  },
  {
    id: 5,
    logo: "/job1.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
  },
  {
    id: 6,
    logo: "/job2.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
  },
  {
    id: 7,
    logo: "/job3.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
  },
  {
    id: 8,
    logo: "/job4.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
  },
];

const sortOptions = ["Popular", "Newest", "Oldest"];
const categoryOptions = ["All Category", "Engineering", "Design", "Marketing"];

export default function JobsFeedMentor() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [showSort, setShowSort] = useState(false);
  const [category, setCategory] = useState(categoryOptions[0]);
  const [showCategory, setShowCategory] = useState(false);
  const [mentorName, setMentorName] = useState("Kirra Press");
  const [mentorImg, setMentorImg] = useState("/Kierra-Press.png");
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("mentorName");
      if (storedName) setMentorName(storedName);
      const storedImg = localStorage.getItem("mentorImg");
      if (storedImg && storedImg !== "") setMentorImg(storedImg);
    }
  }, []);

 
  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortBy === "Newest") return b.id - a.id;
    if (sortBy === "Oldest") return a.id - b.id;
    return 0; 
  });

  
  const filteredJobs =
    category === "All Category"
      ? sortedJobs
      : sortedJobs.filter((job) => job.category === category);


  function handleViewMore(job: any) {
    setSelectedJob(job);
    setShowModal(true);
    setApplied(false); 
  }

  function handleCloseModal() {
    setShowModal(false);
    setSelectedJob(null);
    setApplied(false);
  }

  function handleApply() {
    setApplied(true);

  }

  return (
    <div className={styles.bg}>
      <aside className={styles.sidebar}>
        <div className={styles.logoRow}>
          <MentorTokenLogo />
          <span className={styles.logoText}>Mentor Token</span>
        </div>
        <nav className={styles.nav}>
          <button
            className={styles.navButton}
            onClick={() => router.push("/mentor-dashboard")}
          >
            <DashboardIcon />
            Dashboard
          </button>
          <button
            className={styles.navButton}
            onClick={() => router.push("/mentor-dashboard/my-stats")}
          >
            <StatsIcon />
            My Stats
          </button>
          <button
            className={`${styles.navButton} ${styles.navButtonActive}`}
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
        <div className={styles.headerRow}>
          <div className={styles.searchWrap}>
            <input
              type="text"
              placeholder="Search"
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
              width={44}
              height={44}
              className={styles.profileImg}
            />
            <div className={styles.profileInfo}>
              <span className={styles.profileName}>{mentorName}</span>
              <span className={styles.profileRole}>Mentor</span>
            </div>
          </div>
        </div>
        <div className={styles.titleRow}>
          <div>
            <h2 className={styles.title}>All startup Jobs</h2>
            <div className={styles.filtersRow}>
              <div
                className={styles.filterGroup}
                style={{ position: "relative" }}
              >
                <span className={styles.filterLabel}>Sort by:</span>
                <button
                  className={styles.filterBtn}
                  onClick={() => setShowSort((v) => !v)}
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={showSort}
                >
                  {sortBy}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#A0A3BD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {showSort && (
                  <ul className={styles.dropdownMenu}>
                    {sortOptions.map((option) => (
                      <li
                        key={option}
                        className={
                          option === sortBy ? styles.dropdownActive : ""
                        }
                        onClick={() => {
                          setSortBy(option);
                          setShowSort(false);
                        }}
                        tabIndex={0}
                        role="option"
                        aria-selected={option === sortBy}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className={styles.filterGroup}
                style={{ position: "relative" }}
              >
                <span className={styles.filterLabel}>Category:</span>
                <button
                  className={styles.filterBtn}
                  onClick={() => setShowCategory((v) => !v)}
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={showCategory}
                >
                  {category}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#A0A3BD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {showCategory && (
                  <ul className={styles.dropdownMenu}>
                    {categoryOptions.map((option) => (
                      <li
                        key={option}
                        className={
                          option === category ? styles.dropdownActive : ""
                        }
                        onClick={() => {
                          setCategory(option);
                          setShowCategory(false);
                        }}
                        tabIndex={0}
                        role="option"
                        aria-selected={option === category}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div>
            <button className={styles.filtersBtn}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 5H15M6 9H12M8 13H10"
                  stroke="#696CFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filters
            </button>
          </div>
        </div>
        <div className={styles.jobsGrid}>
          {filteredJobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <Image
                  src={job.logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className={styles.jobLogo}
                />
                <span className={styles.jobCompany}>{job.company}</span>
              </div>
              <div className={styles.jobTitle}>{job.title}</div>
              <div className={styles.jobDesc}>{job.desc}</div>
              <button
                className={styles.viewBtn}
                onClick={() => handleViewMore(job)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
        {showModal && selectedJob && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
              <button
                className={styles.closeBtn}
                onClick={handleCloseModal}
                aria-label="Close"
                type="button"
              >
                ×
              </button>
              <div className={styles.modalHeader}>
                <Image
                  src={selectedJob.logo}
                  alt={selectedJob.company}
                  width={56}
                  height={56}
                  className={styles.modalLogo}
                />
                <div className={styles.modalCompany}>{selectedJob.company}</div>
              </div>
              <div className={styles.modalTitle}>{selectedJob.title}</div>
              <div className={styles.modalDesc}>
                {selectedJob.desc}
                <br />
                {selectedJob.desc}
              </div>
              <button className={styles.modalApplyBtn} onClick={handleApply}>
                Apply
              </button>
              {applied && (
                <span className={styles.appliedMsg}>Applied</span>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}