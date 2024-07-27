import React from 'react';
import styles from '@styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}>
        <div className={styles.section1}>
          <span className={styles.nixCom}>NIX.com</span>
          <span className={styles.teamInfo}>
            Made by the NIX team.
            <br />
            XOXO.
          </span>
        </div>
        <div className={styles.section2}>
          <span className={styles.location}>Location</span>
          <span className={styles.addressInfo}>
            415 South Street,
            <br />
            Waltham, MA.
            <br />
            02453.
          </span>
        </div>
        <div className={styles.section3}>
          <span className={styles.socialMedia}>Social Media</span>
          <span className={styles.contactInfo}>
            Instagram <br />@nix_productivity
          </span>
        </div>
        <div className={styles.section4}>
          <span className={styles.contact}>Contact</span>
          <span className={styles.contactInfo}>
            617-678-4891
            <br />
            huayizhang@brandeis.edu
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
