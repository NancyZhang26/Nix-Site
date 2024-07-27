import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@styles/Header.module.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.rectangle}>
        <button className={styles.nixLogo}>#NIX Logo</button>
      </div>
      <div className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <Link href="/" passHref>
          <span className={styles.home}>Home</span>
        </Link>
        <Link href="/menu" passHref>
          <span className={styles.menu}>Menu</span>
        </Link>
        <Link href="/signUp" passHref>
          <span className={styles.signUp}>Sign up</span>
        </Link>
        <Link href="/contact" passHref>
          <span className={styles.contact}>Contact</span>
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776; {/* Unicode character for the hamburger menu */}
      </div>
    </div>
  );
};

export default Header;
