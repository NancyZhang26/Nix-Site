import React from "react";
import Head from "next/head";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from '@styles/contact.module.css';
import Image from 'next/image';

const contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NIX - Contact</title>
        <meta name="description" content="Get in touch with the NIX team!" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.leftSection}>
          <h1 className={styles.GetInTouch}>Get In Touch!</h1>
          <p className={styles.readyToMaster}>
            Ready to master your time? Drop us a message and let's start the
            productivity journey together! We can't wait to chat with you!
          </p>
          <div className={styles.arrow}>
            <Image className={styles.scrollArrow1} src="/images/arrows/green-scroll-arrow-right.png" alt="green scroll arrow" width={154} height={86} />
            <Image className={styles.scrollArrow2} src="/images/arrows/green-scroll-arrow-right.png" alt="green scroll arrow" width={154} height={86} />
          </div>
        </div>

        <div className={styles.rightSection}>
          <form className={styles.form}>
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
              <label className={styles.label} htmlFor="message">Message <span className={styles.required}>(Required)</span></label>
              <textarea className={styles.textarea} id="message" name="message" required></textarea>
            </div>
            <button className={styles.submitButton} type="submit">Submit</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default contact;
