import React, { useState, FormEvent } from "react";
import Head from "next/head";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from '@styles/signUp.module.css';
import Image from 'next/image';

const SignUp: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError("Honey, your password must be at least 6 characters long, containing at least one letter and one number, so malicious hackers won't steal your chance to do better.");
    } else if (password !== confirmPassword) {
      setError("Oops king/queen, your passwords do not match :( ");
    } else {
      setError("");
      // Handle form submission
      console.log("Form submitted with password:", password);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NIX - Sign Up</title>
        <meta name="description" content="Get ready to do better with the NIX team!" />
      </Head>
      <Header />
      <div className={styles.frame} />
      <main className={styles.main}>
        <div className={styles.leftSection}>
          <h1 className={styles.Adventure}>Your Adventure Starts Here!</h1>
          <p className={styles.Ready}>
            Ready to do better? 
            Fill out the form on the right and start bending time to your will!
          </p>
          <div className={styles.arrow}>
            <Image className={styles.scrollArrow1} src="/images/arrows/blue-scroll-arrow-right.png" alt="blue scroll arrow" width={154} height={86} />
            <Image className={styles.scrollArrow2} src="/images/arrows/blue-scroll-arrow-right.png" alt="blue scroll arrow" width={154} height={86} />
          </div>
        </div>

        <div className={styles.rightSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span className={styles.labelName}>Name</span> <span className={styles.required}>(Required)</span>
              </label>
              <div className={styles.row}>
                <div className={styles.fieldSubGroup}>
                  <label className={styles.names} htmlFor="firstName">First Name <span className={styles.Srequired}>(Required)</span></label>
                  <input className={styles.input} type="text" id="firstName" name="firstName" required />
                </div>
                <div className={styles.fieldSubGroup}>
                  <label className={styles.names} htmlFor="lastName">Last Name <span className={styles.Srequired}>(Required)</span></label>
                  <input className={styles.input} type="text" id="lastName" name="lastName" required />
                </div>
              </div>
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">Email <span className={styles.required}>(Required)</span></label>
              <input className={styles.input} type="email" id="email" name="email" required />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="password">Password <span className={styles.required}>(Required)</span></label>
              <input className={styles.input} type={showPassword ? "text" : "password"} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="confirmPassword">Confirm Password <span className={styles.required}>(Required)</span></label>
              <input className={styles.input} type={showPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.fieldGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} /> Show Password
              </label>
            </div>
            <button className={styles.submitButton} type="submit">Pull Up!</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
