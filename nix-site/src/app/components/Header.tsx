import React from 'react';
import Link from 'next/link';
import styles from '@styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.rectangle}>
        <button className={styles.nixLogo}>#NIX Logo</button>
      </div>
      <Link href="/signUp" passHref>
        <span className={styles.signUp}>Sign up</span>
      </Link>
      <Link href="/contact" passHref>
        <span className={styles.contact}>Contact</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.home}>Home</span>
      </Link>
      <Link href="/menu" passHref>
        <span className={styles.menu}>Menu</span>
      </Link>
    </div>
  );
};

export default Header;