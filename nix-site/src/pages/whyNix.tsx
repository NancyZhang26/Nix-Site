import React, { useState, FormEvent } from "react";
import Head from "next/head";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from '@styles/whyNix.module.css';
import Image from 'next/image';
import Link from 'next/link';

const whyNix: React.FC = () => {
    return (
        <div className={styles.cintainer}>
            <Head>
                <title>NIX - Why NIX</title>
                <meta name="description" content="Why Do People Choose NIX?"/>
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.whyNix}>Why NIX?</div>

                <div className={styles.middleSection}>

                    <div className={styles.leftSection}>
                        <div className={styles.frame}><div className={styles.text}>#NIX Logo</div></div>
                        <Link href="/conditionalPomodoro">
                            <button className={styles.button1}>Conditional Pomodoro</button>
                        </Link>
                        <Link href="/personalizedTemplate">
                            <button className={styles.button2}>Personalized Templates</button>
                        </Link>
                        <Link href="/canlendarIntegration">
                            <button className={styles.button3}>Calendar Integration</button>
                        </Link>
                        <Link href="/appUserInteraction">
                            <button className={styles.button4}>App-User Interaction</button>
                        </Link>
                        <Link href="/highAffordability">
                            <button className={styles.button5}>High Affordability</button>
                        </Link>
                    </div>

                    <div className={styles.rightSection}>
                        <div className={styles.frame}><div className={styles.text}>Other Apps</div></div>
                        <Link href="/conditionalPomodoro">
                            <button className={styles.button6}>Unorganized Periods</button>
                        </Link>
                        <Link href="/personalizedTemplate">
                            <button className={styles.button6}>General Themes</button>
                        </Link>
                        <Link href="/canlendarIntegration">
                            <button className={styles.button6}>Default Settings</button>
                        </Link>
                        <Link href="/appUserInteraction">
                            <button className={styles.button6}>Dull Experience</button>
                        </Link>
                        <Link href="/highAffordability">
                            <button className={styles.button6}>Low Affordability</button>
                        </Link>
                    </div>

                </div>
                <Link href="/menu" className={styles.buttonWrapper}>
                    <button className={styles.backButton}>Back to Menu</button>
                </Link>
            </main>
            <Footer />
        </div>
    )
}

export default whyNix;