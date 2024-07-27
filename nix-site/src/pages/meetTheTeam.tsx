import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/meetTheTeam.module.css';
import Image from 'next/image';

const meetTheTeam: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NIX - Meet The Team</title>
        <meta name="description" content="Meet the talented girls behind NIX!" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Meet The Team!</h1>
        <div className={styles.items}>
          <Link href="/suLei" className={styles.item}>
            <Image src="/Images/SuLei.png" alt="Su Lei Yadanar" width={225} height={225} className={styles.itemImage}/>
            <p>Su Lei Yadanar</p>
          </Link>
          <Link href="/zarah" className={styles.item}>
            <Image src="/Images/Zahra.png" alt="Zarah Sadeq" width={225} height={225} className={styles.itemImage}/>
            <p>Zarah Sadeq</p>
          </Link>
          <Link href="/grace" className={styles.item}>
            <Image src="/Images/Grace.png" alt="Grace Yang" width={225} height={225} className={styles.itemImage}/>
            <p>Grace Yang</p>
          </Link>
          <Link href="/nancy" className={styles.item}>
            <Image src="/Images/Nancy.png" alt="Nancy Zhang" width={225} height={225} className={styles.itemImage}/>
            <p>Nancy Zhang</p>
          </Link>
          <Link href="/olive" className={styles.item}>
            <Image src="/Images/Olive.png" alt="Olive Thin" width={225} height={225} className={styles.itemImage}/>
            <p>Olive Thin</p>
          </Link>
        </div>
        <Link href="/menu">
          <button className={styles.backButton}>Back to Menu</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default meetTheTeam;
