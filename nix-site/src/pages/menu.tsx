import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/menu.module.css';
import Image from 'next/image';

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NIX - Menu</title>
        <meta name="description" content="Explore the menu options at NIX, your college companion extraordinaire!" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome To NIX!</h1>
        <div className={styles.menuItems}>
          <Link href="/exploreNix" className={styles.menuItem}>
            <Image src="/Images/menu-icons/explore-nix.png" alt="Explore NIX" width={250} height={250}
            className={styles.menuItemImage}/>
            <p>Explore NIX</p>
          </Link>
          <Link href="/whyNix" className={styles.menuItem}>
            <Image src="/Images/menu-icons/why-nix.png" alt="Why NIX" width={250} height={250}
            className={styles.menuItemImage} />
            <p>Why NIX</p>
          </Link>
          <Link href="/meetTheTeam" className={styles.menuItem}>
            <Image src="/Images/menu-icons/meet-the-team.png" alt="Meet the Team" width={250} height={250}
            className={styles.menuItemImage} />
            <p>Meet the Team</p>
          </Link>
          <Link href="/faq" className={styles.menuItem}>
            <Image src="/Images/menu-icons/faq.png" alt="FAQs" width={250} height={250} 
            className={styles.menuItemImage}/>
            <p>FAQs</p>
          </Link>
        </div>
        <Link href="/">
          <button className={styles.backButton}>Back to Home</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};


export default Menu;
