import React from "react";
import Head from "next/head";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from "@styles/index.module.css";
import Link from 'next/link';
import Image from 'next/image';

const index: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NIX - You Can Do Better</title>
        <meta name="description" content="Welcome to NIX, your college companion extraordinaire!" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.leftSection}>
          <Image src="/images/iphone.png" alt="iPhone 15 frame" width={330} height={650} className={styles.iphoneFrame} />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.heroContainer}>
            <span className={styles.better}>You Can Do Better.</span>
            <span className={styles.welcome}>Welcome To NIX.</span>
            <span className={styles.text3}>
              Dive into the time-saving magic of NIX, <br />your college companion extraordinaire!
            </span>
            <div className={styles.division}>
              <Link href="/getStartedNew">
                <button className={styles.button}>GET STARTED</button>
              </Link>
              <Link href="/signUp">
                <button className={styles.button2}>SIGN UP</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default index;
