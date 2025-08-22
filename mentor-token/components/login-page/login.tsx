"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/login/Login.module.css";

const API_BASE = "http://localhost:5000/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userType", data.type);
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userId", data.userId);
     if (data.type === "mentor") {
  localStorage.setItem("mentorName", data.name);
  localStorage.setItem("mentorImg", data.profileImg || ""); 
  router.push("/mentor-dashboard");
} else {
  localStorage.setItem("startupName", data.name);
  localStorage.setItem("startupId", data.userId); 
  localStorage.setItem("startupImg", data.profileImg || ""); 
  router.push("/startup-dashboard");
}
    } else {
      setError(data.message || "Login failed");
    }
  }
  return (
    <div className={styles.bg}>
      <div className={styles.loginContainer}>
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
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zaV2NCKR71r8AFjMPT8yOcxdKUBQrY.png"
                alt="Mentor Token Logo"
                width={38}
                height={38}
                className={styles.logoImg}
              />
              <span className="sr-only">Mentor Token</span>
            </div>
            <h3 className={styles.formTitle}>LOG IN TO MENTOR TOKEN</h3>
            <p className={styles.formSubtitle}>
              Enter your email and pass to login.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  placeholder="mentortoken@mail.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.forgotRow}>
                <a href="#" className={styles.forgotLink}>
                  Forgot password?
                </a>
              </div>
              {error && <div className={styles.error}>{error}</div>}
              <button type="submit" className={styles.submitBtn}>
                Log in
              </button>
              <div className={styles.registerRow}>
                Don’t have account?{" "}
                <Link href="/register" className={styles.registerLink}>
                  Register.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
