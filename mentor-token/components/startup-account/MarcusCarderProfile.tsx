"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/profile-mentors/Marcus-Carder.module.css";


function MentorTokenLogo() {
  return (
    <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.375 8.38023C28.375 8.01707 28.1781 7.68245 27.8606 7.50608L14.9856 0.353298C14.6836 0.185507 14.3164 0.185507 14.0144 0.353298L1.13936 7.50608C0.821892 7.68245 0.625 8.01707 0.625 8.38023L0.625 22.6201C0.625 22.9833 0.821892 23.3179 1.13936 23.4943L14.0144 30.647C14.3164 30.8148 14.6836 30.8148 14.9856 30.647L27.8606 23.4943C28.1781 23.3179 28.375 22.9833 28.375 22.6201V8.38023ZM14.0147 3.88323C14.3166 3.71572 14.6834 3.71572 14.9853 3.88323L22.0355 7.79608C22.7219 8.177 22.7218 9.16404 22.0354 9.54487L19.6439 10.8717C19.2472 11.0918 18.7569 11.0104 18.4049 10.7241C17.3402 9.85844 15.9803 9.3335 14.5 9.3335C13.0197 9.3335 11.6598 9.85844 10.5951 10.7241C10.2431 11.0104 9.75283 11.0918 9.35606 10.8717L6.96457 9.54487C6.27816 9.16404 6.27809 8.177 6.96446 7.79608L14.0147 3.88323ZM12.9583 24.8398C12.9583 25.6021 12.1396 26.0841 11.4731 25.7142L4.22306 21.6904C3.90539 21.5141 3.70833 21.1794 3.70833 20.8161V12.976C3.70833 12.2134 4.52768 11.7315 5.19421 12.102L7.83703 13.5712C8.24468 13.7978 8.43338 14.2762 8.37742 14.7393C8.34746 14.9871 8.33333 15.2419 8.33333 15.5002C8.33333 18.0954 9.93716 20.3245 12.219 21.2272C12.6443 21.3955 12.9583 21.7866 12.9583 22.2439V24.8398ZM11.4167 15.5002C11.4167 13.8043 12.8042 12.4168 14.5 12.4168C16.1958 12.4168 17.5833 13.8043 17.5833 15.5002C17.5833 17.196 16.1958 18.5835 14.5 18.5835C12.8042 18.5835 11.4167 17.196 11.4167 15.5002ZM17.5269 25.7142C16.8604 26.0841 16.0417 25.6021 16.0417 24.8398V22.2593C16.0417 21.802 16.3557 21.4109 16.781 21.2427C19.0628 20.3399 20.6667 18.1109 20.6667 15.5156C20.6667 15.2503 20.6518 14.9888 20.6201 14.7329C20.5633 14.2731 20.7521 13.7996 21.157 13.5745L23.8058 12.102C24.4723 11.7315 25.2917 12.2134 25.2917 12.976V20.8161C25.2917 21.1794 25.0946 21.5141 24.7769 21.6904L17.5269 25.7142Z" fill="#696CFF"/>
    </svg>
  );
}
function DashboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#566A7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#566A7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#566A7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#566A7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function MentorsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z" stroke="#566A7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.16 14.56C4.74 16.18 4.74 18.82 7.16 20.43C9.91 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92 12.73 7.16 14.56Z" stroke="#566A7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function JobsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#566A7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="#566A7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function LogoutIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M19 12L15 8M19 12L15 16M19 12H9" stroke="#696CFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      <path d="M14 21C9.02944 21 5 16.9706 5 12C5 7.02944 9.02944 3 14 3" stroke="#696CFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.33341 2.3335H11.6667C12.3084 2.3335 12.8334 2.8585 12.8334 3.50016V10.5002C12.8334 11.1418 12.3084 11.6668 11.6667 11.6668H2.33341C1.69175 11.6668 1.16675 11.1418 1.16675 10.5002V3.50016C1.16675 2.8585 1.69175 2.3335 2.33341 2.3335Z" stroke="#696CFF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.8334 3.5L7.00008 7.58333L1.16675 3.5" stroke="#696CFF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <g clipPath="url(#clip0_1_10037)">
        <path d="M12.8333 9.86989V11.6199C12.834 11.7824 12.8007 11.9432 12.7356 12.092C12.6705 12.2409 12.5751 12.3745 12.4554 12.4843C12.3357 12.5941 12.1943 12.6778 12.0404 12.7298C11.8865 12.7819 11.7235 12.8012 11.5617 12.7866C9.76665 12.5915 8.04242 11.9781 6.5275 10.9957C5.11807 10.1001 3.92311 8.90516 3.0275 7.49573C2.04166 5.97393 1.42814 4.24131 1.23667 2.43823C1.22209 2.27692 1.24126 2.11434 1.29296 1.96084C1.34466 1.80735 1.42775 1.6663 1.53695 1.54667C1.64615 1.42705 1.77905 1.33147 1.92721 1.26603C2.07537 1.20059 2.23553 1.16671 2.3975 1.16656H4.1475C4.4306 1.16377 4.70505 1.26402 4.9197 1.44862C5.13434 1.63322 5.27455 1.88957 5.31417 2.16989C5.38803 2.72993 5.52501 3.27982 5.7225 3.80906C5.80099 4.01785 5.81797 4.24476 5.77145 4.46291C5.72492 4.68105 5.61684 4.88129 5.46 5.03989L4.71917 5.78073C5.54958 7.24113 6.75877 8.45032 8.21917 9.28073L8.96 8.53989C9.1186 8.38306 9.31884 8.27497 9.53699 8.22845C9.75513 8.18192 9.98205 8.19891 10.1908 8.27739C10.7201 8.47488 11.27 8.61186 11.83 8.68573C12.1134 8.7257 12.3722 8.86843 12.5571 9.08677C12.7421 9.3051 12.8404 9.58381 12.8333 9.86989Z" stroke="#696CFF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_1_10037">
          <rect width="14" height="14" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
function VerifiedIcon() {
  return (
    <svg width="23" height="24" viewBox="0 0 23 24" fill="none">
      <path d="M11.5555 22.508C17.3238 22.508 22 17.8319 22 12.0636C22 6.29528 17.3238 1.61914 11.5555 1.61914C5.78722 1.61914 1.11108 6.29528 1.11108 12.0636C1.11108 17.8319 5.78722 22.508 11.5555 22.508Z" fill="#48E285" stroke="white" strokeWidth="1.8"/>
    </svg>
  );
}

export default function MarcusCarderProfile() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [jobName, setJobName] = useState("");
  const [jobDesc, setJobDesc] = useState("");


  const [assignedJobs, setAssignedJobs] = useState([
    { name: "Revenue per rate", status: "DONE" },
    { name: "ARPU (Average revenue per use)", status: "CANCELED" },
    { name: "CAC (Custom Aqusition Cost)", status: "IN PROGRESS" },
    { name: "Churn Rate", status: "DONE" },
    { name: "Burn Rate", status: "IN PROGRESS" },
    { name: "Operation Efficiency", status: "DONE" },
    { name: "Burn Rate", status: "IN PROGRESS" },
    { name: "Operation Efficiency", status: "DONE" },
  ]);
 
  const [pendingJobs, setPendingJobs] = useState([
    { name: "Revenue per rate" },
    { name: "ARPU (Average revenue per use)" },
    { name: "CAC (Custom Aqusition Cost)" },
  ]);

  function handleNav(route: string) {
    router.push(route);
  }
  function handleLogout() {
    router.push("/login");
  }
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  function handleOfferNewJob() {
    setShowOfferModal(true);
  }
  function handleCloseOfferModal() {
    setShowOfferModal(false);
    setJobName("");
    setJobDesc("");
  }
  function handleSendJobOffer() {
    if (jobName.trim()) {
      setAssignedJobs(prev => [
        ...prev,
        {
          name: jobName,
          status: "IN PROGRESS",
          desc: jobDesc,
          isCustom: true, 
        },
      ]);
    }
    setShowOfferModal(false);
    setJobName("");
    setJobDesc("");
  }
  function handleAssignedTab(tab: string) {
    setActiveTab(tab);
  }

  function handleCancelJob(jobName: string) {
    setAssignedJobs(prev =>
      prev.filter(j => !(j.name === jobName && j.isCustom === true))
    );
  }
  function handleCancelOffer(jobName: string) {
    setPendingJobs(prev => prev.filter(j => j.name !== jobName));
  }

  function filterJobs(tab: string) {
    if (tab === "All") return assignedJobs;
    if (tab === "Done") return assignedJobs.filter(j => j.status === "DONE");
    if (tab === "Canceled") return assignedJobs.filter(j => j.status === "CANCELED");
    if (tab === "In Progress") return assignedJobs.filter(j => j.status === "IN PROGRESS");
    return assignedJobs;
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logoRow}>
          <MentorTokenLogo />
          <span className={styles.logoText}>
            Mentor Token
          </span>
        </div>
        <nav className={styles.nav}>
          <button
            className={styles.navButton}
            onClick={() => handleNav("/startup-dashboard")}
          >
            <DashboardIcon />
            Dashboard
          </button>
          <button
            className={`${styles.navButton} ${styles.navButtonActive}`}
            onClick={() => handleNav("/startup-dashboard/startup-mentors")}
          >
            <MentorsIcon />
            Mentors
          </button>
          <button
            className={styles.navButton}
            onClick={() => handleNav("/jobs")}
          >
            <JobsIcon />
            Jobs
          </button>
        </nav>
        <button
          className={styles.logoutButton}
          onClick={handleLogout}
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
              placeholder="Search Startup, KPI, Mentor..."
              value={search}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.profileRow}>
            <Image
              src="/techwave-innovations.jpg"
              alt="TechWave Innovations"
              width={48}
              height={48}
              className={styles.profileAvatarSmall}
            />
            <div>
              <div className={styles.profileNameSmall}>
                TechWave Innovations
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileAboutRow}>
          <div className={styles.profileCard}>
            <Image
              src="/Marcus-Carder.png"
              alt="Marcus Carder"
              width={120}
              height={120}
              className={styles.profileAvatar}
              unoptimized
            />
            <div className={styles.profileNameRow}>
              <span className={styles.profileName}>Marcus Carder</span>
              <VerifiedIcon />
            </div>
            <div className={styles.profileJob}>
              Sales Representative
            </div>
            <div className={styles.profileContact}>
              <EmailIcon />
              mentormail@mail.com
            </div>
            <div className={styles.profileContact}>
              <PhoneIcon />
              +389 77 663 234
            </div>
          </div>
          <div className={styles.aboutCard}>
            <div>
              <div className={styles.aboutTitle}>About Mentor</div>
              <div className={styles.aboutSkills}>
                Skills: Sales | Management | Problem-solving
              </div>
              <div className={styles.aboutText}>
                Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis. Lorem ipsum dolor sit amet consectetur. Suspendisse quis varius felis augue adipiscing. Sapien volutpat ac velit facilisis fermentum diam bibendum libero non. Semper morbi at congue pellentesque pharetra amet rhoncus elit quis.
              </div>
            </div>
            <button
              className={styles.offerJobBtn}
              onClick={handleOfferNewJob}
            >
              + Offer New Job
            </button>
          </div>
        </div>
        <div className={styles.jobsRow}>
          <div className={styles.assignedJobs}>
            <div className={styles.sectionTitle}>Assigned Jobs</div>
            <div className={styles.tabs}>
              <button
                className={`${styles.tabButton} ${activeTab === "All" ? styles.tabButtonActive : ""}`}
                onClick={() => handleAssignedTab("All")}
              >
                All
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "Done" ? styles.tabButtonActive : ""}`}
                onClick={() => handleAssignedTab("Done")}
              >
                Done
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "Canceled" ? styles.tabButtonActive : ""}`}
                onClick={() => handleAssignedTab("Canceled")}
              >
                Canceled
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "In Progress" ? styles.tabButtonActive : ""}`}
                onClick={() => handleAssignedTab("In Progress")}
              >
                In Progress
              </button>
            </div>
            <div className={styles.jobList}>
              {filterJobs(activeTab).map((job, idx) => (
                <div key={idx} className={styles.jobCard}>
                  <span className={styles.jobName}>{job.name}</span>
                  {job.status === "DONE" && (
                    <span className={styles.statusDone}>DONE</span>
                  )}
                  {job.status === "CANCELED" && (
                    <span className={styles.statusCanceled}>CANCELED</span>
                  )}
                  {job.status === "IN PROGRESS" && (
                    <div className={styles.inProgressRow}>
                      <span className={styles.statusInProgress}>IN PROGRESS</span>
                      {job.isCustom === true && (
                        <button
                          className={styles.cancelJobBtn}
                          onClick={() => handleCancelJob(job.name)}
                        >
                          Cancel Job
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.pendingJobs}>
            <div className={styles.sectionTitle}>Pending Job Offers</div>
            <div className={styles.jobList}>
              {pendingJobs.map((job, idx) => (
                <div key={idx} className={styles.jobCard}>
                  <span className={styles.jobName}>{job.name}</span>
                  <button
                    className={styles.cancelOfferBtn}
                    onClick={() => handleCancelOffer(job.name)}
                  >
                    Cancel Offer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showOfferModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <button
                className={styles.closeModalBtn}
                onClick={handleCloseOfferModal}
                aria-label="Close"
              >
                ×
              </button>
              <div className={styles.modalTitle}>OFFER JOB</div>
              <div className={styles.modalDesc}>
                Create and offer job to a mentor
              </div>
              <div className={styles.modalField}>
                <label className={styles.modalLabel} htmlFor="jobName">
                  Job Name
                </label>
                <input
                  id="jobName"
                  type="text"
                  value={jobName}
                  onChange={e => setJobName(e.target.value)}
                  placeholder="Job Name"
                  className={styles.modalInput}
                />
              </div>
              <div className={styles.modalField}>
                <label className={styles.modalLabelDesc} htmlFor="jobDesc">
                  Short Description
                </label>
                <textarea
                  id="jobDesc"
                  value={jobDesc}
                  onChange={e => setJobDesc(e.target.value)}
                  placeholder="Write short description about job offering"
                  className={styles.modalTextarea}
                  rows={4}
                />
              </div>
              <button
                className={styles.sendJobOfferBtn}
                onClick={handleSendJobOffer}
              >
                Send Job Offer
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}