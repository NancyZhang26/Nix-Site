import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from "@styles/index.module.css";
import Link from 'next/link';

const index: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NIX - You Can Do Better</title>
        <meta name="description" content="Welcome to NIX, your college companion extraordinaire!" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <span className={styles.better}>You Can Do Better!</span>
          <span className={styles.welcome}>Welcome To NIX.</span>
          <span className={styles.text3}>
            Dive into the time-saving magic of NIX, your college companion extraordinaire!
          </span>
          <Link href="/getStarted">
            <button className={styles.button}>GET STARTED</button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default index;
