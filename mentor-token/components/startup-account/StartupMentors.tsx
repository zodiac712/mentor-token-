"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "@/styles/startup/StartupMentors.module.css";

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
function TrendingIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M8.625 0.75L9.22238 1.875L10.5 2.03025L9.5625 2.87512L9.75 4.125L8.625 3.42188L7.5 4.125L7.6875 2.87512L6.75 2.03025L8.0625 1.875L8.625 0.75Z"
        fill="#696CFF"
      />
      <path
        d="M8.51883 4.96838L7.79208 4.78163C7.66181 5.28347 7.38572 5.73544 6.9987 6.08044C6.61167 6.42544 6.13108 6.64799 5.61763 6.71998C5.10418 6.79197 4.58091 6.71016 4.11393 6.48489C3.64695 6.25963 3.25722 5.90101 2.99396 5.45434C2.73071 5.00768 2.60574 4.49301 2.63486 3.97535C2.66397 3.4577 2.84586 2.96029 3.15754 2.54596C3.46922 2.13163 3.89671 1.81898 4.38601 1.64749C4.8753 1.47601 5.40444 1.4534 5.90658 1.5825L6.0937 0.85613C5.3617 0.665724 4.58693 0.72701 3.89396 1.03013C3.20099 1.33326 2.63009 1.86061 2.27304 2.5274C1.916 3.19418 1.79355 3.96167 1.9254 4.70646C2.05724 5.45124 2.43571 6.13005 2.99995 6.63375V11.25L5.24995 9.75L7.49995 11.25V6.6405C7.99801 6.1966 8.35268 5.61452 8.51883 4.96838ZM6.74995 9.84863L5.24995 8.8485L3.74995 9.84863V7.14375C4.21534 7.37755 4.72888 7.49949 5.24969 7.49988C5.7705 7.50027 6.28422 7.3791 6.74995 7.146V9.84863Z"
        fill="#696CFF"
      />
    </svg>
  );
}

export default function StartupMentors() {
  const [startupName, setStartupName] = useState("TechWave Innovations");
  const [startupImg, setStartupImg] = useState("/techwave-innovations.jpg");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("startupName");
      if (storedName) setStartupName(storedName);
      const storedImg = localStorage.getItem("startupImg");
      if (storedImg && storedImg !== "") setStartupImg(storedImg);
    }
  }, []);

  const [search, setSearch] = useState("");
  const [showAddMentorModal, setShowAddMentorModal] = useState(false);
  const [mentorEmail, setMentorEmail] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [mentorSurname, setMentorSurname] = useState("");
  const [mentors, setMentors] = useState([
    {
      _id: "static1",
      name: "Kierra Press",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AMyYkWNL0FdZf3axnpj9VTvTyNh5fZ.png",
      rating: 2.49,
      stars: 2,
      skills: "Sales | Management | Problem-solving",
      desc: "Field sales training, 5+ years in an outside sales position",
      removable: false,
    },
    {
      _id: "static2",
      name: "Alison Vetrovs",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cN4jwpXBEpBhtGnie0QRF8EHD2grrQ.png",
      rating: 4.92,
      stars: 5,
      skills: "Sales | Management | Problem-solving",
      desc: "The sales representative position is an OR based sales role with uncapp... ",
      trending: true,
      removable: false,
    },
    {
      _id: "static3",
      name: "Marcus Carder",
      img: "/Marcus-Carder.png",
      rating: 3.49,
      stars: 3,
      skills: "Leadership | Management | Product sales",
      desc: "Regional sales manager with a strong background in sales and marketing.",
      removable: false,
    },
  ]);

  useEffect(() => {
    const startupId = typeof window !== "undefined" ? localStorage.getItem("startupId") : null;
    if (startupId) {
      fetch(`http://localhost:5000/api/startups/${startupId}/mentors`)
        .then(res => res.json())
        .then(data => {
          setMentors(prev =>
            [
              ...prev.filter(m => m._id && m._id.startsWith("static")),
              ...data
            ]
          );
        });
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
    if (name === "Kierra Press") {
      router.push("/startup-dashboard/startup-mentors/kierra-press");
    } else if (name === "Alison Vetrovs") {
      router.push("/startup-dashboard/startup-mentors/alison-vetrovs");
    } else if (name === "Marcus Carder") {
      router.push("/startup-dashboard/startup-mentors/marcus-carder");
    }
  }
  function handleAddMentor() {
    setShowAddMentorModal(true);
  }
  function handleCloseAddMentorModal() {
    setShowAddMentorModal(false);
    setMentorEmail("");
    setMentorName("");
    setMentorSurname("");
  }

  async function handleCreateMentor() {
    const startupId = typeof window !== "undefined" ? localStorage.getItem("startupId") : null;
    if (!mentorEmail || !mentorName || !mentorSurname || !startupId) return;
    const mentorData = {
      name: `${mentorName} ${mentorSurname}`,
      email: mentorEmail,
      img: "https://ui-avatars.com/api/?name=" +
        encodeURIComponent(mentorName + " " + mentorSurname) +
        "&background=696CFF&color=fff",
      rating: 0,
      stars: 0,
      skills: "",
      desc: mentorEmail,
      trending: false,
      removable: true
    };
    const res = await fetch(`http://localhost:5000/api/startups/${startupId}/mentors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mentorData)
    });
    if (res.ok) {
      const newMentor = await res.json();
      setMentors(prev => [...prev, newMentor]);
      setShowAddMentorModal(false);
      setMentorEmail("");
      setMentorName("");
      setMentorSurname("");
    }
  }

  async function handleRemoveMentor(idx: number) {
    const mentor = mentors[idx];
    if (!mentor.removable || !mentor._id) return;
    const startupId = typeof window !== "undefined" ? localStorage.getItem("startupId") : null;
    if (!startupId) return;
    const res = await fetch(`http://localhost:5000/api/startups/${startupId}/mentors/${mentor._id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      setMentors(mentors.filter((_, i) => i !== idx));
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const filteredMentors = mentors.filter((m) =>
  typeof m.name === "string" && m.name.toLowerCase().includes(search.toLowerCase())
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
            className={`${styles.navBtn} ${
              pathname === "/startup-dashboard/startup-mentors" ? styles.navBtnActive : ""
            }`}
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
              className={styles.searchInput}
              value={search}
              onChange={handleSearchChange}
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
        <div className={styles.mentorsCard}>
          <div>
            <h2 className={styles.mentorsCardTitle}>My Mentors</h2>
            <div className={styles.mentorsCardSubtitle}>
              Monitor and add new mentors
            </div>
            <button
              className={styles.addMentorBtn}
              onClick={handleAddMentor}
            >
              + Add New Mentor
            </button>
          </div>
          <Image
            src="/girl-on-clock.png"
            alt="Productivity Illustration"
            width={250}
            height={120}
            className={styles.mentorsCardImg}
            priority
          />
        </div>
        <div className={styles.contentRow}>
          <section className={styles.mentorsListSection}>
            <div className={styles.mentorsList}>
              {filteredMentors.map((mentor, idx) => (
                <div
                  key={mentor._id || idx}
                  className={styles.mentorCard}
                >
                  {mentor.trending && (
                    <div className={styles.trendingBadge}>
                      <TrendingIcon />
                      <span>TRENDING</span>
                    </div>
                  )}
                  <Image
                    src={mentor.img}
                    alt={mentor.name}
                    width={56}
                    height={56}
                    className={styles.mentorImg}
                  />
                  <div>
                    <div className={styles.mentorNameRow}>
                      {mentor.name}
                      <span className={styles.idIcon}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.851823 0.765625C0.649733 0.765625 0.455921 0.84017 0.313022 0.972862C0.170123 1.10555 0.0898438 1.28552 0.0898438 1.47318V9.25625C0.0898438 9.4439 0.170123 9.62387 0.313022 9.75656C0.455921 9.88926 0.649733 9.9638 0.851823 9.9638H9.23359C9.43568 9.9638 9.6295 9.88926 9.77239 9.75656C9.91529 9.62387 9.99557 9.4439 9.99557 9.25625V1.47318C9.99557 1.28552 9.91529 1.10555 9.77239 0.972862C9.6295 0.84017 9.43568 0.765625 9.23359 0.765625H0.851823ZM1.6519 4.30339H3.09966V8.5487H1.6519V4.30339ZM3.19491 2.89182C3.19491 3.09355 3.10861 3.28701 2.95499 3.42966C2.80138 3.5723 2.59303 3.65244 2.37578 3.65244C2.15854 3.65244 1.95019 3.5723 1.79657 3.42966C1.64295 3.28701 1.55665 3.09355 1.55665 2.89182C1.55665 2.69009 1.64295 2.49662 1.79657 2.35398C1.95019 2.21134 2.15854 2.1312 2.37578 2.1312C2.59303 2.1312 2.80138 2.21134 2.95499 2.35398C3.10861 2.49662 3.19491 2.69009 3.19491 2.89182ZM8.47161 5.97109C8.47161 4.69395 7.58238 4.19725 6.69925 4.19725C6.41062 4.18423 6.12325 4.24053 5.86488 4.3607C5.66906 4.45268 5.46408 4.6607 5.30559 5.02438H5.26521V4.30339H3.89974V8.55224H5.35207V6.29161C5.3315 6.06024 5.41074 5.76094 5.57381 5.58335C5.73763 5.40504 5.97004 5.36259 6.14758 5.34136H6.2032C6.66496 5.34136 7.00785 5.6067 7.00785 6.27533V8.55153H8.46019L8.47161 5.97109Z"
                            fill="#696CFF"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className={styles.mentorStarsRow}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          style={{
                            opacity: i <= Math.round(mentor.rating) ? 1 : 0.25,
                            display: "inline-block",
                            marginRight: 2,
                            verticalAlign: "middle",
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
                      ))}
                      <span className={styles.mentorRating}>
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
                  <button
                    className={styles.viewMentorBtn}
                    onClick={() => handleViewMentor(mentor.name)}
                  >
                    View Mentor
                  </button>
                  {mentor.removable && (
                    <button
                      className={styles.removeMentorBtn}
                      onClick={() => handleRemoveMentor(idx)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
          <aside className={styles.quickOverview}>
            <div>
              <h3 className={styles.quickOverviewTitle}>Quick Overview</h3>
              <div className={styles.quickOverviewSubtitle}>
                In the last month
              </div>
              <div className={styles.quickOverviewStats}>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Total Mentors</span>
                  <span className={styles.statValue}>{mentors.length}</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Total Assigned Jobs</span>
                  <span className={styles.statValue}>143</span>
                </div>
                <div className={styles.statCardBlue}>
                  <span className={styles.statLabelWhite}>Finished Jobs</span>
                  <span className={styles.statValueWhite}>63</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
        {showAddMentorModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalForm}>
              <button
                className={styles.closeBtn}
                onClick={handleCloseAddMentorModal}
                aria-label="Close"
              >
                ×
              </button>
              <div className={styles.modalTitle}>ADD NEW MENTOR</div>
              <div className={styles.modalSubtitle}>
                Add new mentor and start monitoring
              </div>
              <div className={styles.modalField}>
                <label
                  className={styles.modalLabel}
                  htmlFor="mentorEmail"
                >
                  Email Address
                </label>
                <input
                  id="mentorEmail"
                  type="email"
                  value={mentorEmail}
                  onChange={(e) => setMentorEmail(e.target.value)}
                  placeholder="newmentor@gmail.com"
                  className={styles.modalInput}
                />
              </div>
              <div className={styles.modalFieldRow}>
                <div className={styles.modalFieldHalf}>
                  <label
                    className={styles.modalLabel}
                    htmlFor="mentorName"
                  >
                    Name
                  </label>
                  <input
                    id="mentorName"
                    type="text"
                    value={mentorName}
                    onChange={(e) => setMentorName(e.target.value)}
                    placeholder="Mira"
                    className={styles.modalInput}
                  />
                </div>
                <div className={styles.modalFieldHalf}>
                  <label
                    className={styles.modalLabel}
                    htmlFor="mentorSurname"
                  >
                    Surname
                  </label>
                  <input
                    id="mentorSurname"
                    type="text"
                    value={mentorSurname}
                    onChange={(e) => setMentorSurname(e.target.value)}
                    placeholder="Gedit"
                    className={styles.modalInput}
                  />
                </div>
              </div>
              <button
                className={styles.modalSubmitBtn}
                onClick={handleCreateMentor}
              >
                Create new Mentor
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}