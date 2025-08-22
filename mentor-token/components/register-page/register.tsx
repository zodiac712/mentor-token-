"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/register/Register.module.css";

export default function Register() {
  const [accountType, setAccountType] = useState<"Startup" | "Mentor">("Mentor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const hasNumberOrSymbol = (str: string) => {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (
        (code >= 48 && code <= 57) || 
        (code >= 33 && code <= 47) ||
        (code >= 58 && code <= 64) ||
        (code >= 91 && code <= 96) ||
        (code >= 123 && code <= 126)
      ) {
        return true;
      }
    }
    return false;
  };

  const passwordChecks = [
    {
      label: "Password Strength : Weak",
      valid: password.length >= 8,
    },
    {
      label: "Cannot contain your name or email address",
      valid: !password || (!email || (!password.includes(email))),
    },
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "Contains a number or symbol",
      valid: hasNumberOrSymbol(password),
    },
  ];

  const handleContinue = (e: React.FormEvent) => {
  e.preventDefault();
  if (accountType === "Startup") {
    router.push(`/register-startup?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  } else {
    router.push(`/register-mentor?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  }
  };

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
          {/* Rocket image */}
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
              GROW<br />YOUR<br />STARTUP!
            </h2>
            <p>
              MONITORING AND EVALUATING NOW IS EASY!
            </p>
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
            </div>
            <h3 className={styles.formTitle}>
              CHOOSE ACCOUNT TYPE
            </h3>
            <div className={styles.accountTypeSwitch}>
              <button
                type="button"
                className={`${styles.accountTypeBtn} ${accountType === "Startup" ? styles.accountTypeBtnActive : ""}`}
                onClick={() => setAccountType("Startup")}
              >
                Startup
              </button>
              <button
                type="button"
                className={`${styles.accountTypeBtn} ${accountType === "Mentor" ? styles.accountTypeBtnActiveMentor : ""}`}
                onClick={() => setAccountType("Mentor")}
              >
                Mentor
              </button>
            </div>
            <form className={styles.form} onSubmit={handleContinue}>
              <div>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  placeholder="mentormail@mail.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className={styles.input}
                />
              </div>
              <ul className={styles.passwordChecks}>
                {passwordChecks.map((check, i) => (
                  <li
                    key={i}
                    className={check.valid ? styles.checkValid : styles.checkInvalid}
                  >
                    <span className={styles.checkMark}>{check.valid ? "✓" : "✓"}</span>
                    {check.label}
                  </li>
                ))}
              </ul>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={
                  !email ||
                  !password ||
                  !passwordChecks.every(check => check.valid)
                }
              >
                Continue
              </button>
            </form>
            <div className={styles.loginRow}>
              Already have account?{" "}
              <Link href="/login" className={styles.loginLink}>
                Login.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}