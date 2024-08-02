import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from '@styles/getStartedNew.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useOnScreen from "src/app/hooks/IntersectionObserver";


const getStarted: React.FC = () => {
    const page2Ref = useRef<HTMLDivElement>(null);
  
    const scrollToPage = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      };

      const [currentImageIndexPage2, setCurrentImageIndexPage2] = useState(0);
    
      const imagesPage2 = [
        '/images/screenshots/page1/screenshot1.png',
        '/images/screenshots/page1/screenshot2.png',
        '/images/screenshots/page1/screenshot3.png'
      ];

      const handleNext = (setImageIndex: React.Dispatch<React.SetStateAction<number>>, images: string[]) => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handlePrevious = (setImageIndex: React.Dispatch<React.SetStateAction<number>>, images: string[]) => {
        setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };


    return (
        <div className={styles.container}>
            <Head>
                <title>NIX - Get Started With Us</title>
                <meta name="description" content="Explore in-depth information about NIX!" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.page1}>
                    <h1 className={styles.titleTrapped}>Do You Feel Trapped In Long Screen Time?</h1>
                    <div className={styles.sections}>
                        <div className={styles.section}>
                            <Image src="/images/get-started-icons/anxiousness.png" alt="Anxiousness Icon" width={267} height={267}
                            className={styles.circle}/>
                            <h2 className={styles.sectionTitle}>Anxiousness:</h2>
                            <p className={styles.sectionDescription}>Worried about juggling assignments, exams, and social life?</p>
                        </div>
                        <div className={styles.section}>
                            <Image src="/images/get-started-icons/procrastination.png" alt="Procrastination Icon" width={267} height={267} 
                            className={styles.circle}/>
                            <h2 className={styles.sectionTitle}>Procrastination:</h2>
                            <p className={styles.sectionDescription}>Putting off studying for that upcoming exam or finishing your project?</p>
                        </div>
                        <div className={styles.section}>
                            <Image src="/images/get-started-icons/no-progress.png" alt="No Progress Icon" width={267} height={267} 
                            className={styles.circle}/>
                            <h2 className={styles.sectionTitle}>No Progress:</h2>
                            <p className={styles.sectionDescription}>Feeling stuck even after hours of studying and hard work?</p>
                        </div>
                    </div>
                    <div className={styles.arrowWrapper}>
                        <Image src="/images/arrows/blue-scroll-arrow-down.png" alt="Scroll Arrow" width={134} height={84} 
                        className={styles.scrollArrow1} onClick={() => scrollToPage(page2Ref)}/>
                    </div>
                </div>

                <div className={styles.page2} ref={page2Ref}>
                    <h1 className={styles.titleBetter}>
                        You Can Do Better.<br/>Because NIX Got You.
                    </h1>
                    <h2 className={styles.textSave}>
                        Save time, achieve more.<br/>Master your minutes with NIX!
                    </h2>
                    <div className={styles.mascotsWrapper}>
                        <Image src="/images/mascots/Seal.png" alt="Baby Seal" width={99} height={93} className={styles.seal} />
                        <Image src="/images/mascots/Chick.png" alt="Baby Chick" width={96} height={102} className={styles.chick} />
                        <Image src="/images/mascots/Fox.png" alt="Baby Fox" width={90} height={96} className={styles.fox} />
                        <Image src="/images/mascots/Turtle.png" alt="Baby Turtle" width={120} height={102} className={styles.turtle} />
                    </div>

                    <div className={styles.row1}>
                        <div className={styles.box1}>
                            <div className={styles.wrapper}>
                                <div className={styles.leftArrow} onClick={() => handlePrevious(setCurrentImageIndexPage2, imagesPage2)}>
                                    <Image src="/images/arrows/blue-scroll-arrow-left-small.png" alt="Right Arrow" width={66} height={60} 
                                    className={styles.leftArrow1}/>
                                </div>
                                <div className={styles.imageWrapper}>
                                    <Image src="/images/iphoneFrame.png" alt="iphoneFrame" width={405} height={798.012} className={styles.iphoneFrame} />
                                    <div className={styles.screenContainer}>
                                        <Image src={imagesPage2[currentImageIndexPage2]} alt="App Screenshot" className={styles.screenshot} fill style={{ objectFit: "cover" }} />
                                    </div>
                                </div>
                                <div className={styles.rightArrow} onClick={() => handleNext(setCurrentImageIndexPage2, imagesPage2)}>
                                    <Image src="/images/arrows/blue-scroll-arrow-right-small.png" alt="Right Arrow" width={66} height={60} 
                                    className={styles.rightArrow1}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box2}>
                            <p className={styles.text1}>Unlock Your Potential</p>
                            <h2 className={styles.sTitle1}>Customized Recommendations</h2>
                            <p className={styles.text1}>
                                NIX will provide tailored suggestions and motivational 
                                tips whenever you attempt to access a blocked app, ensuring you stay on track.
                            </p>
                            <h2 className={styles.sTitle1}>
                                💡 Expert Advice <br />
                                📋 Personalized Tips <br />
                                📝 Goal Tracking <br />
                                🔥 Productivity Boost
                            </h2>
                        </div>
                    </div>

                    <div className={styles.row2}>
                        <div className={styles.box3}>
                            <p className={styles.text2}>Unleash Your Productivity</p>
                            <h2 className={styles.sTitle2}>Seamless Synchronization</h2>
                            <p className={styles.text2}>
                                NIX will sync your tasks and progress across all your devices, 
                                ensuring you stay productive no matter where you are.
                            </p>
                            <h2 className={styles.sTitle2}>
                                ⏰ Real-Time Updates <br />
                                💪 Stable Performance <br />
                                🔗 Easy Integration <br />
                                💻 Cross-Device Productivity
                            </h2>
                        </div>
                        <div className={styles.box4}>
                            <Image src="/images/multipleDevices.png" alt="Multiple Devices" width={649} height={426} className={styles.multipleDevices} />
                        </div>
                    </div>

                    <div className={styles.row3}>
                        <div className={styles.box5}>
                            <Image src="/images/multipleStyles.png" alt="Multiple Styles" width={600} height={600} className={styles.multipleStyles} />
                        </div>
                        <div className={styles.box6}>
                            <p className={styles.text3}>Unveil Your Style</p>
                            <h2 className={styles.sTitle3}>GenZ Aesthetics</h2>
                            <p className={styles.text3}>
                                NIX offers beautiful, trendy templates and aesthetics designed for the GenZ crowd, 
                                making your productivity journey visually appealing and engaging.
                            </p>
                            <h2 className={styles.sTitle3}>
                                🎨 Modern Designs <br />
                                🛠️ Customized Templates <br />
                                🧩 Intuitive Interface <br />
                                💎 Eye-Catching Layouts
                            </h2>
                        </div>
                    </div>

                    <div className={styles.row4}>
                        <div className={styles.frame1}>
                            <h3 className={styles.title1}>Free</h3>
                            <ul>
                                <li>✔️ Goal Personalization</li>
                                <li>✔️ Only 1 Active Template</li>
                                <li>✔️ 3 Pomodoro Sessions daily</li>
                                <li>✔️ Regular Focus Mode Only</li>
                                <li>✖️ *No Calendar Sync</li>
                                <li>✖️ *No Theme Personalization</li>
                            </ul>
                            <div className={styles.price}>$0</div>
                        </div>
                        <div className={styles.frame2}>
                            <h3 className={styles.title1}>Premium</h3>
                            <ul>
                                <li>✔️ Goal Personalization</li>
                                <li>✔️ Unlimited Templates</li>
                                <li>✔️ Unlimited Pomodoro Sessions</li>
                                <li>✔️ Access to All Focus Modes</li>
                                <li>✔️ Allow Calendar Sync</li>
                                <li>✔️ Theme Personalization</li>
                            </ul>
                            <div className={styles.price}>$6.99</div>
                            <p className={styles.monthlyPrice}><span className={styles.month}>/month</span> *$80 yearly</p>
                        </div>
                        <div className={styles.frame3}>
                            <h3 className={styles.title1}>Life Time</h3>
                                <ul>
                                <li>✔️ Goal Personalization</li>
                                <li>✔️ Unlimited Templates</li>
                                <li>✔️ Unlimited Pomodoro Sessions</li>
                                <li>✔️ Access to All Focus Modes</li>
                                <li>✔️ Allow Calendar Sync</li>
                                <li>✔️ Theme Personalization</li>
                                </ul>
                            <div className={styles.price}>$150</div>
                        </div>
                    </div>

                    <h1 className={styles.titleBetter}>You Can Do Better.</h1>
                    <p className={styles.pullUp}>Now pull up and waste no time.</p>
                    <Link href="/signUp">
                        <button className={styles.registerButton}>Register For Free!</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    )
} 

export default getStarted;