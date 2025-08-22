"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/styles/register/RegisterStartup.module.css";

const API_BASE = "http://localhost:5000/api";

function MentorTokenLogo() {
  return (
    <svg width="39" height="39" viewBox="0 0 31 29" fill="none">
      <path
        d="M28.375 8.38023C28.375 8.01707 28.1781 7.68245 27.8606 7.50608L14.9856 0.353298C14.6836 0.185507 14.3164 0.185507 14.0143 0.353298L1.13933 7.50608C0.821869 7.68245 0.624977 8.01707 0.624977 8.38023L0.624977 22.6201C0.624977 22.9833 0.821869 23.3179 1.13933 23.4943L14.0143 30.647C14.3164 30.8148 14.6836 30.8148 14.9856 30.647L27.8606 23.4943C28.1781 23.3179 28.375 22.9833 28.375 22.6201V8.38023ZM14.0147 3.88323C14.3165 3.71572 14.6834 3.71572 14.9852 3.88323L22.0355 7.79608C22.7219 8.177 22.7218 9.16404 22.0354 9.54487L19.6439 10.8717C19.2471 11.0918 18.7569 11.0104 18.4048 10.7241C17.3402 9.85844 15.9802 9.3335 14.5 9.3335C13.0197 9.3335 11.6598 9.85844 10.5951 10.7241C10.2431 11.0104 9.75281 11.0918 9.35604 10.8717L6.96455 9.54487C6.27814 9.16404 6.27807 8.177 6.96443 7.79608L14.0147 3.88323ZM12.9583 24.8398C12.9583 25.6021 12.1396 26.0841 11.473 25.7142L4.22304 21.6904C3.90537 21.5141 3.70831 21.1794 3.70831 20.8161V12.976C3.70831 12.2134 4.52765 11.7315 5.19419 12.102L7.83701 13.5712C8.24465 13.7978 8.43335 14.2762 8.37739 14.7393C8.34744 14.9871 8.33331 15.2419 8.33331 15.5002C8.33331 18.0954 9.93714 20.3245 12.219 21.2272C12.6443 21.3955 12.9583 21.7866 12.9583 22.2439V24.8398ZM11.4166 15.5002C11.4166 13.8043 12.8041 12.4168 14.5 12.4168C16.1958 12.4168 17.5833 13.8043 17.5833 15.5002C17.5833 17.196 16.1958 18.5835 14.5 18.5835C12.8041 18.5835 11.4166 17.196 11.4166 15.5002ZM17.5269 25.7142C16.8604 26.0841 16.0416 25.6021 16.0416 24.8398V22.2593C16.0416 21.802 16.3557 21.4109 16.781 21.2427C19.0628 20.3399 20.6666 18.1109 20.6666 15.5156C20.6666 15.2503 20.6517 14.9888 20.6201 14.7329C20.5633 14.2731 20.7521 13.7996 21.157 13.5745L23.8058 12.102C24.4723 11.7315 25.2916 12.2134 25.2916 12.976V20.8161C25.2916 21.1794 25.0946 21.5141 24.7769 21.6904L17.5269 25.7142Z"
        fill="#696CFF"
      />
    </svg>
  );
}

export default function RegisterStartup() {
  const [startupName, setStartupName] = useState("");
  const [legalRep, setLegalRep] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [svgBtnActive, setSvgBtnActive] = useState(false);
  const [error, setError] = useState("");
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [profileImgPreview, setProfileImgPreview] = useState<string | null>(null);
  const [profileImgUrl, setProfileImgUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const password = searchParams.get("password") || "";

function handleSvgBtnClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImg(file);
      setProfileImgPreview(URL.createObjectURL(file));
    }
  }

  async function handleUploadImage(): Promise<string | null> {
    if (!profileImg) return null;
    const formData = new FormData();
    formData.append("image", profileImg);
    const res = await fetch(`${API_BASE}/upload`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      return data.url;
    }
    return null;
  }


  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    let uploadedUrl = profileImgUrl;
    if (profileImg && !profileImgUrl) {
      uploadedUrl = await handleUploadImage();
      setProfileImgUrl(uploadedUrl);
    }
    const res = await fetch(`${API_BASE}/startups/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startupName,
        email,
        password,
        representative: legalRep,
        address: businessAddress,
       invitedMentors: inviteEmail ? [{ email: inviteEmail }] : [],
        profileImg: uploadedUrl, 
      }),
    });
    if (res.ok) {
      const response = await res.json();
      localStorage.setItem("startupName", startupName);
      localStorage.setItem("startupId", response._id);
      localStorage.setItem("startupImg", uploadedUrl || "");
      router.push("/login");
    } else {
      const data = await res.json();
      setError(data.message || "Registration failed");
    }
  }

  return (
    <div className={styles.bg}>
      <div className={styles.registerContainer}>
        <div className={styles.left}>
          <div className={styles.leftBgLogo}>
            <Image
              src="/background-logo.png"
              alt="Background Pattern"
              fill
              style={{
                objectFit: "cover",
                opacity: 0.22,
              }}
              className={styles.bgLogoImg}
              priority
            />
          </div>
          <div className={styles.rocketWrap}>
            <Image
              src="/rocket.png"
              alt="Rocket"
              width={850}
              height={320}
              priority
              className={styles.rocketImg}
              style={{ transform: "rotate(-7deg)" }}
            />
          </div>
          <div className={styles.leftText}>
            <h2>
              GROW
              <br />
              YOUR
              <br />
              STARTUP!
            </h2>
            <p>MONITORING AND EVALUATING NOW IS EASY!</p>
          </div>
          <div className={styles.leftFooter}>
            <div className={styles.leftFooterRow}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
                alt="Mentor Token Logo"
                width={24}
                height={24}
                className={styles.leftFooterLogo}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span>Mentor Token</span>
            </div>
            <span className={styles.leftFooterDomain}>mentortoken.com</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formWrap}>
            <div className={styles.logoRow}>
              <MentorTokenLogo />
            </div>
            <h3 className={styles.formTitle}>SETUP STARTUP ACCOUNT</h3>
             <button
              type="button"
              className={`${styles.profileBtn} ${svgBtnActive ? styles.profileBtnActive : ""}`}
              onClick={handleSvgBtnClick}
              tabIndex={0}
            >
              {profileImgPreview ? (
                <Image
                  src={profileImgPreview}
                  alt="Profile Preview"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              ) : (
              <svg
                width="108"
                height="108"
                viewBox="0 0 122 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.511 70.5117V65.6343"
                  stroke="#696CFF"
                  strokeWidth="2.98795"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M73.4204 48.6978C76.6694 48.6978 79.284 51.3316 79.284 54.5806V61.1941C74.5547 63.9625 68.3065 65.6351 61.5008 65.6351C54.6951 65.6351 48.4662 63.9625 43.7368 61.1941V54.5614C43.7368 51.3124 46.3707 48.6978 49.6197 48.6978H73.4204Z"
                  stroke="#696CFF"
                  strokeWidth="2.98795"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M68.2393 48.6892V47.9856C68.2393 45.6401 66.336 43.7368 63.9906 43.7368H59.0305C56.685 43.7368 54.7817 45.6401 54.7817 47.9856V48.6892"
                  stroke="#696CFF"
                  strokeWidth="2.98795"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.7837 68.2166L44.147 73.0401C44.3931 76.2911 47.1019 78.8038 50.3606 78.8038H72.6598C75.9185 78.8038 78.6273 76.2911 78.8734 73.0401L79.2367 68.2166"
                  stroke="#696CFF"
                  strokeWidth="2.98795"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              )}
            </button>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <form className={styles.form} onSubmit={handleRegister}>
              <div>
                <label className={styles.label} htmlFor="startupName">
                  Startup Name
                </label>
                <input
                  id="startupName"
                  type="text"
                  placeholder="My Startup Name"
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="legalRep">
                  Legal Representative<span className={styles.required}>*</span>
                </label>
                <input
                  id="legalRep"
                  type="text"
                  placeholder="Name and surname"
                  value={legalRep}
                  onChange={(e) => setLegalRep(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="businessAddress">
                  Registered Business Address
                  <span className={styles.required}>*</span>
                </label>
                <input
                  id="businessAddress"
                  type="text"
                  placeholder="Registered Business Address"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="inviteEmail">
                  Invite Mentors via email
                </label>
                <input
                  id="inviteEmail"
                  type="email"
                  placeholder="Enter email address to invite mentor"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className={styles.input}
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                style={{ marginTop: "0.7rem" }}
                disabled={!acceptTerms}
              >
                Register
              </button>
              {error && <div style={{ color: "red" }}>{error}</div>}
            </form>
            <div className={styles.termsRow}>
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className={styles.checkbox}
                required
              />
              <label htmlFor="acceptTerms" className={styles.termsLabel}>
                By signing up to create an account I accept Company’s{" "}
                <Link href="#" className={styles.termsLink}>
                  Terms of use &nbsp;&&nbsp; Privacy Policy
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
