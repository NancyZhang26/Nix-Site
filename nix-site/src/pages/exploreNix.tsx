import React from "react";
import Head from "next/head";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from '@styles/exploreNix.module.css';
import Image from 'next/image';
import Link from 'next/link';

const exploreNix: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>NIX - Explore Nix</title>
                <meta name="description" content="Explore in-depth information about NIX!" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.leftSection}>
                    <h1 className={styles.exploreNix}>Explore NIX: <br /> Get to know us more!</h1>
                    <p className={styles.text}>At NIX, we offer a personalized time management app offering structured 
                        solutions to break the cycle of excessive smartphone use, optimize time 
                        management, and strike a perfect balance between productivity and 
                        well-being using advanced Screen Time reducing methodologies.</p>
                </div>
                <div className={styles.rightSection}>
                    <Image className={styles.babyLizard} src="/images/baby-lizard.png" alt="Baby lizard" width="442" height="461"/>
                </div>
            </main>
            <Link href="/menu" className={styles.buttonWrapper}>
                <button className={styles.backButton}>Back to Menu</button>
            </Link>
            <Footer />
        </div>
    )
}

export default exploreNix;
