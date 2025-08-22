"use client";

import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/features and footer/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import styles from "@/styles/contact/Contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert("Message sent!");
    } else {
      alert("Failed to send message.");
    }
  } catch {
    alert("Error sending message.");
  }
};

  return (
    <div className={styles.pageBg}>
      <Header />

      <main className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            <div className={styles.headerText}>
              <h1 className={styles.title}>
                Let’s Talk!
              </h1>
              <p className={styles.subtitle}>
                We’re thrilled to connect with you! Whether you have a question, need assistance, or want to discuss a potential project, we’re here to listen and help. At Mentor Token, we believe in the power of collaboration and are committed to providing you with the best support and solutions. Fill out the form below, and one of our team members will get back to you as soon as possible. <b>Let’s create something amazing together!</b>
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGrid}>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email adress"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <Textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className={styles.textarea}
                required
              />
              <div className={styles.buttonRow}>
                <Button
                  type="submit"
                  className={styles.submitBtn}
                >
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}