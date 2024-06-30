import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/faq.module.css';
import Image from 'next/image';

const faq: React.FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>NIX - FAQs</title>
                <meta name="description" content="Look at some of our frequently asked questions here!" />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>FAQs</h1>
                <div className={styles.topRow}>
                    <div className={styles.frame}>
                        <div className={styles.imgWrapper}><Image src="/Images/faq-icons/q1Icon.png" alt="icon1" width={50} height={50} /></div>
                        <p className={styles.Q1}>What is NIX?</p>
                        <p className={styles.A1}>NIX is a personalized time management app designed to help users reduce excessive smartphone use, 
                            optimize time management, and achieve a balanced lifestyle. 
                            It employs advanced methodologies to encourage screen time reduction and enhance productivity.</p>
                    </div>
                    <div className={styles.frame}>
                        <div className={styles.imgWrapper}><Image src="/Images/faq-icons/q2Icon.png" alt="icon2" width={50} height={50} /></div>
                        <p className={styles.Q2}>How does NIX help in reducing screen time?</p>
                        <p className={styles.A2}>NIX uses structured solutions to break the cycle of excessive smartphone use. 
                            It provides users with tools and strategies to manage their time effectively, set goals, 
                            and track progress, ultimately reducing screen dependency.</p>
                    </div>
                    <div className={styles.frame}>
                        <div className={styles.imgWrapper}><Image src="/Images/faq-icons/q3Icon.png" alt="icon3" width={50} height={50} /></div>
                        <p className={styles.Q3}>How do I get started with NIX?</p>
                        <p className={styles.A3}>To get started with NIX, simply download the app, create an account, 
                            and follow the onboarding process to set up your personalized time management plan.</p>
                    </div>
                </div>
                <div className={styles.bottomRow}>
                    <div className={styles.frame}>
                        <div className={styles.imgWrapper}><Image src="/Images/faq-icons/q4Icon.png" alt="icon4" width={50} height={50} /></div>
                        <p className={styles.Q4}>How does NIX ensure data privacy?</p>
                        <p className={styles.A4}>NIX is committed to protecting user data. 
                            The app employs robust security measures to ensure that all personal information is kept secure and confidential. 
                            Detailed privacy policies are available within the app.</p>
                    </div>
                    <div className={styles.frame}>
                        <div className={styles.imgWrapper}><Image src="/Images/faq-icons/q5Icon.png" alt="icon5" width={50} height={80} /></div>
                        <p className={styles.Q5}>Can I customize my experience with NIX?</p>
                        <p className={styles.A5}>Yes, NIX is highly customizable. Users can tailor their Pomodoro sessions, 
                            create personalized templates, and integrate their calendars to match their unique schedules and preferences.</p>
                    </div>
                    <div className={styles.frame}>
                        <div className={styles.imgWrapper}><Image src="/Images/faq-icons/q6Icon.png" alt="icon6" width={50} height={60} /></div>
                        <p className={styles.Q6}>Where can I find support if I have issues with NIX?</p>
                        <p className={styles.A6}>For support, users can visit the NIX website or contact the customer service team through the app. 
                            There are also comprehensive FAQs and help guides available to assist users in resolving common issues.</p>
                    </div>
                </div>
                <Link href="/menu">
                    <button className={styles.backButton}>Back to Menu</button>
                </Link>
            </main>
            <Footer />
        </div>

    )
}

export default faq;