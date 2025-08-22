"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/styles/register/RegisterMentor.module.css";

const API_BASE = "http://localhost:5000/api";

export default function RegisterMentor() {
  const [mentorName, setMentorName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [svgBtnActive, setSvgBtnActive] = useState(false);
  const [error, setError] = useState("");
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [profileImgPreview, setProfileImgPreview] = useState<string | null>(
    null
  );
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

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setError("");
  let uploadedUrl = profileImgUrl;
  if (profileImg) {
    uploadedUrl = await handleUploadImage();
    setProfileImgUrl(uploadedUrl);
  }
  const res = await fetch(`${API_BASE}/mentors/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: mentorName,
      email,
      password,
      phone,
      address,
      profileImg: uploadedUrl, 
    }),
  });
    if (res.ok) {
      localStorage.setItem("mentorName", mentorName);
      localStorage.setItem("mentorImg", uploadedUrl || "");
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
              CAREER!
            </h2>
            <p>MENTORING AND GUIDING STARTUPS IS EASY!</p>
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
            <div className={styles.svgTop}>
              <svg
                width="39"
                height="45"
                viewBox="0 0 49 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49 15.1267C49 14.4854 48.6523 13.8945 48.0918 13.5831L25.3575 0.95297C24.8242 0.656691 24.1758 0.656691 23.6425 0.952969L0.908235 13.5831C0.347666 13.8945 0 14.4854 0 15.1267L0 40.2709C0 40.9122 0.347665 41.503 0.908234 41.8145L23.6425 54.4446C24.1758 54.7409 24.8242 54.7409 25.3575 54.4446L48.0918 41.8145C48.6523 41.503 49 40.9122 49 40.2709V15.1267ZM23.6431 7.18601C24.1761 6.89022 24.8239 6.89022 25.3569 7.18601L37.806 14.0952C39.018 14.7678 39.0178 16.5107 37.8058 17.1831L33.583 19.526C32.8824 19.9147 32.0167 19.7709 31.3951 19.2654C29.5152 17.7368 27.1138 16.8099 24.5 16.8099C21.8862 16.8099 19.4848 17.7368 17.6049 19.2654C16.9833 19.7709 16.1176 19.9147 15.417 19.526L11.1942 17.1831C9.98215 16.5107 9.98204 14.7678 11.194 14.0952L23.6431 7.18601ZM21.7778 44.1904C21.7778 45.5364 20.3321 46.3875 19.1551 45.7343L6.35334 38.6293C5.7924 38.318 5.44444 37.7269 5.44444 37.0854V23.2418C5.44444 21.8952 6.89121 21.0442 8.06816 21.6984L12.7348 24.2927C13.4546 24.6928 13.7878 25.5376 13.689 26.3552C13.6361 26.7928 13.6111 27.2427 13.6111 27.6988C13.6111 32.2815 16.4431 36.2174 20.4723 37.8115C21.2232 38.1085 21.7778 38.7991 21.7778 39.6067V44.1904ZM19.0556 27.6988C19.0556 24.7043 21.5056 22.2543 24.5 22.2543C27.4944 22.2543 29.9444 24.7043 29.9444 27.6988C29.9444 30.6932 27.4944 33.1432 24.5 33.1432C21.5056 33.1432 19.0556 30.6932 19.0556 27.6988ZM29.8449 45.7343C28.6679 46.3875 27.2222 45.5364 27.2222 44.1904V39.6339C27.2222 38.8263 27.7768 38.1358 28.5277 37.8387C32.5569 36.2447 35.3889 32.3087 35.3889 27.726C35.3889 27.2577 35.3626 26.7959 35.3067 26.344C35.2064 25.5321 35.5397 24.696 36.2547 24.2985L40.9318 21.6984C42.1088 21.0442 43.5556 21.8952 43.5556 23.2418V37.0854C43.5556 37.7269 43.2076 38.318 42.6467 38.6293L29.8449 45.7343Z"
                  fill="#696CFF"
                />
              </svg>
            </div>
            <h3 className={styles.formTitle}>SETUP MENTOR ACCOUNT</h3>
            <button
              type="button"
              className={`${styles.profileBtn} ${
                svgBtnActive ? styles.profileBtnActive : ""
              }`}
              onClick={handleSvgBtnClick}
            >
              {" "}
              {profileImgPreview ? (
                <Image
                  src={profileImgPreview}
                  alt="Profile Preview"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              ) : (
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path
                    d="M41.5557 43.6337V39.4781C41.5557 37.2739 40.68 35.1599 39.1214 33.6013C37.5627 32.0426 35.4488 31.167 33.2445 31.167H16.6222C14.4179 31.167 12.304 32.0426 10.7453 33.6013C9.18667 35.1599 8.31104 37.2739 8.31104 39.4781V43.6337"
                    stroke="#696CFF"
                    strokeWidth="4.15558"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.9332 22.8557C29.5234 22.8557 33.2444 19.1347 33.2444 14.5446C33.2444 9.95443 29.5234 6.2334 24.9332 6.2334C20.3431 6.2334 16.6221 9.95443 16.6221 14.5446C16.6221 19.1347 20.3431 22.8557 24.9332 22.8557Z"
                    stroke="#696CFF"
                    strokeWidth="4.15558"
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
            <form className={styles.form} onSubmit={handleSubmit}>
              <div>
                <label className={styles.label}>Mentor Name</label>
                <input
                  type="text"
                  placeholder="Name and surname"
                  value={mentorName}
                  onChange={(e) => setMentorName(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={!acceptTerms}
              >
                Register
              </button>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className={styles.termsRow} style={{ marginTop: "1rem" }}>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
