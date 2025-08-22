"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "@/styles/startup/StartupJobs.module.css";

function MentorTokenLogo() {
  return (
    <svg width="29" height="31" viewBox="0 0 29 31" fill="none">
      <path
        d="M28.375 8.38023C28.375 8.01707 28.1781 7.68245 27.8606 7.50608L14.9856 0.353298C14.6836 0.185507 14.3164 0.185507 14.0144 0.353298L1.13936 7.50608C0.821892 7.68245 0.625 8.01707 0.625 8.38023L0.625 22.6201C0.625 22.9833 0.821892 23.3179 1.13936 23.4943L14.0144 30.647C14.3164 30.8148 14.6836 30.8148 14.9856 30.647L27.8606 23.4943C28.1781 23.3179 28.375 22.9833 28.375 22.6201V8.38023ZM14.0147 3.88323C14.3166 3.71572 14.6834 3.71572 14.9853 3.88323L22.0355 7.79608C22.7219 8.177 22.7218 9.16404 22.0354 9.54487L19.6439 10.8717C19.2472 11.0918 18.7569 11.0104 18.4049 10.7241C17.3402 9.85844 15.9803 9.3335 14.5 9.3335C13.0197 9.3335 11.6598 9.85844 10.5951 10.7241C10.2431 11.0104 9.75283 11.0918 9.35606 10.8717L6.96457 9.54487C6.27816 9.16404 6.27809 8.177 6.96446 7.79608L14.0147 3.88323ZM12.9583 24.8398C12.9583 25.6021 12.1396 26.0841 11.4731 25.7142L4.22306 21.6904C3.90539 21.5141 3.70833 21.1794 3.70833 20.8161V12.976C3.70833 12.2134 4.52768 11.7315 5.19421 12.102L7.83703 13.5712C8.24468 13.7978 8.43338 14.2762 8.37742 14.7393C8.34746 14.9871 8.33333 15.2419 8.33333 15.5002C8.33333 18.0954 9.93716 20.3245 12.219 21.2272C12.6443 21.3955 12.9583 21.7866 12.9583 22.2439V24.8398ZM11.4167 15.5002C11.4167 13.8043 12.8042 12.4168 14.5 12.4168C16.1958 12.4168 17.5833 13.8043 17.5833 15.5002C17.5833 17.196 16.1958 18.5835 14.5 18.5835C12.8042 18.5835 11.4167 17.196 11.4167 15.5002ZM17.5269 25.7142C16.8604 26.0841 16.0417 25.6021 16.0417 24.8398V22.2593C16.0417 21.802 16.3557 21.4109 16.781 21.2427C19.0628 20.3399 20.6667 18.1109 20.6667 15.5156C20.6667 15.2503 20.6518 14.9888 20.6201 14.7329C20.5633 14.2731 20.7521 13.7996 21.157 13.5745L23.8058 12.102C24.4723 11.7315 25.2917 12.2134 25.2917 12.976V20.8161C25.2917 21.1794 25.0946 21.5141 24.7769 21.6904L17.5269 25.7142Z"
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


const avatars = [
  "/Marcus-Carder.png",
  "/Kierra-Press.png",
  "/Alison-Vetrovs.png",
];

const initialJobs = [
  {
    id: 1,
    logo: "/job1.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue. A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
    applicants: avatars,
  },
  {
    id: 2,
    logo: "/job2.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue. A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
    applicants: avatars,
  },
  {
    id: 3,
    logo: "/job3.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue. A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
    applicants: avatars,
  },
  {
    id: 4,
    logo: "/job4.jpg",
    company: "TechWave Innovations",
    title: "New Job Offer",
    desc: "lorem Ipsum Dolor Sit Amet Consectetur. Facilisis Nunc Ut Tellus Augue. A Aliquam Arcu. Libero Imperdiet Odio Sed Morbi Quis Felis Proin.",
    applicants: avatars,
  },
];

export default function StartupJobs() {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [jobName, setJobName] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [inputError, setInputError] = useState(false);
  const [startupName, setStartupName] = useState("TechWave Innovations");
  const [startupImg, setStartupImg] = useState("/techwave-innovations.jpg");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    async function fetchJobs() {
      const startupId =
        typeof window !== "undefined"
          ? localStorage.getItem("startupId")
          : null;
      if (!startupId) return;
      const res = await fetch(
        `http://localhost:5000/api/jobs?companyId=${startupId}`
      );
      if (res.ok) {
        const data = await res.json();
        setJobs(data);
      }
    }
    fetchJobs();
  }, []);

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
    } else if (route === "/startup-dashboard") {
      router.push("/startup-dashboard");
    } else if (route === "/startup-dashboard/startup-mentors") {
      router.push("/startup-dashboard/startup-mentors");
    } else {
      router.push(route);
    } 
  }

  function handleLogout() {
    router.push("/login");
  }

  async function handleCreateJob(e: React.FormEvent) {
    e.preventDefault();
    if (!jobName.trim() || !jobDesc.trim()) {
      setInputError(true);
      return;
    }
    try {
      const startupId =
        typeof window !== "undefined"
          ? localStorage.getItem("startupId")
          : null;
      if (!startupId) {
        setInputError(true);
        alert("Startup ID not found. Please log in again.");
        return;
      }
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyId: startupId,
          title: jobName,
          description: jobDesc,
          skillsRequired: [],
          status: "Open",
        }),
      });
      if (!res.ok) throw new Error("Failed to create job");
      const newJob = await res.json();
      setJobs([newJob, ...jobs]);
      setShowModal(false);
      setJobName("");
      setJobDesc("");
      setInputError(false);
    } catch (err) {
      setInputError(true);
    }
  }

  async function handleRemoveJob(id: string) {
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete job");
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (err) {
    }
  }

  const jobsToShow = [...initialJobs, ...jobs];

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
            className={`${styles.navBtn} ${
              pathname === "/startup-dashboard/startup-mentors"
                ? styles.navBtnActive
                : ""
            }`}
            onClick={() => handleNav("/startup-dashboard/startup-mentors")}
          >
            <MentorsIcon />
            Mentors
          </button>
          <button
            className={`${styles.navBtn} ${
              pathname === "/startup-dashboard/startup-jobs"
                ? styles.navBtnActive
                : ""
            }`}
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
        <div className={styles.titleRow}>
          <h2 className={styles.title}>Your Startup Jobs</h2>
          <button
            className={styles.createBtn}
            onClick={() => setShowModal(true)}
          >
            + Create New Job
          </button>
        </div>
        <div className={styles.jobsList}>
          {jobsToShow.map((job) => (
            <div key={job._id || job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobLogoWrap}>
                  <Image
                    src={job.logo && job.logo !== "" ? job.logo : "/job1.jpg"}
                    alt="Logo"
                    width={40}
                    height={40}
                    className={styles.jobLogo}
                  />
                </div>
                <span className={styles.jobCompany}>{job.company || startupName}</span>
              </div>
              <div className={styles.jobTitle}>{job.title}</div>
              <div className={styles.jobDesc}>{job.desc || job.description}</div>
              <div className={styles.applicantsWrap}>
                <div className={styles.applicantsAvatars}>
                  {(job.applicants || avatars).map((avatar: string, i: number) => (
                    <Image
                      key={i}
                      src={avatar}
                      alt={`Applicant ${i + 1}`}
                      width={32}
                      height={32}
                      className={styles.applicantAvatar}
                      style={{ marginLeft: i === 0 ? 0 : -8 }}
                    />
                  ))}
                </div>
                <span className={styles.applicantsLabel}>3+ Applicants</span>
              </div>
              <button className={styles.viewBtn}>View More</button>
              {job._id && (
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemoveJob(job._id)}
                  type="button"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        {showModal && (
          <div className={styles.modalOverlay}>
            <form className={styles.modalForm} onSubmit={handleCreateJob}>
              <button
                className={styles.closeBtn}
                onClick={() => {
                  setShowModal(false);
                  setInputError(false);
                }}
                aria-label="Close"
                type="button"
              >
                ×
              </button>
              <div className={styles.modalTitle}>CREATE JOB</div>
              <div className={styles.modalSubtitle}>
                Create a new job for your startup
              </div>
              <div className={styles.modalField}>
                <label className={styles.modalLabel} htmlFor="jobName">
                  Job Name
                </label>
                <input
                  id="jobName"
                  type="text"
                  placeholder="Job Name"
                  value={jobName}
                  onChange={(e) => {
                    setJobName(e.target.value);
                    setInputError(false);
                  }}
                  className={`${styles.modalInput} ${
                    inputError && !jobName.trim() ? styles.inputError : ""
                  }`}
                />
              </div>
              <div className={styles.modalField}>
                <label className={styles.modalLabel} htmlFor="jobDesc">
                  Short Description
                </label>
                <textarea
                  id="jobDesc"
                  placeholder="Write short description about job"
                  value={jobDesc}
                  onChange={(e) => {
                    setJobDesc(e.target.value);
                    setInputError(false);
                  }}
                  className={`${styles.modalTextarea} ${
                    inputError && !jobDesc.trim() ? styles.inputError : ""
                  }`}
                  rows={4}
                />
                {inputError && (
                  <div className={styles.errorMsg}>
                    Please fill in both fields.
                  </div>
                )}
              </div>
              <button className={styles.modalSubmitBtn} type="submit">
                Create Job
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
