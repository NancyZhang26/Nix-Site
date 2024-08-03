import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from '@styles/getStartedNew.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useOnScreen from 'src/app/hooks/IntersectionObserver';


const getStarted: React.FC = () => {
    const ref0 = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLImageElement>(null);
    const ref5 = useRef<HTMLHeadingElement>(null);
    const ref6 = useRef<HTMLHeadingElement>(null);
    const ref7 = useRef<HTMLDivElement>(null);
    const ref8 = useRef<HTMLDivElement>(null);
    const ref9 = useRef<HTMLDivElement>(null);
    const ref10 = useRef<HTMLDivElement>(null);
    const ref11 = useRef<HTMLDivElement>(null);
    const ref12 = useRef<HTMLDivElement>(null);
    const ref13 = useRef<HTMLDivElement>(null);
    const ref14 = useRef<HTMLHeadingElement>(null);
    const ref15 = useRef<HTMLHeadingElement>(null);
    const ref16 = useRef<HTMLButtonElement>(null);
    const refa = useRef<HTMLDivElement>(null);
    const refb = useRef<HTMLDivElement>(null);
    const refc = useRef<HTMLDivElement>(null);
    const refd = useRef<HTMLDivElement>(null);
    const refe = useRef<HTMLDivElement>(null);
    const reff = useRef<HTMLDivElement>(null);

    const isElementOnScreen0 =  useOnScreen(ref0)
    const isElementOnScreen =  useOnScreen(ref)
    const isElementOnScreen2 =  useOnScreen(ref2)
    const isElementOnScreen3 =  useOnScreen(ref3)
    const isElementOnScreen4 =  useOnScreen(ref4)
    const isElementOnScreen5 =  useOnScreen(ref5)
    const isElementOnScreen6 =  useOnScreen(ref6)
    const isElementOnScreen7 =  useOnScreen(ref7)
    const isElementOnScreen8 =  useOnScreen(ref8)
    const isElementOnScreen9 =  useOnScreen(ref9)
    const isElementOnScreen10 =  useOnScreen(ref10)
    const isElementOnScreen11 =  useOnScreen(ref11)
    const isElementOnScreen12 =  useOnScreen(ref12)
    const isElementOnScreen13 =  useOnScreen(ref13)
    const isElementOnScreen14 =  useOnScreen(ref14)
    const isElementOnScreen15 =  useOnScreen(ref15)
    const isElementOnScreen16 =  useOnScreen(ref16)
    const isElementOnScreena =  useOnScreen(refa)
    const isElementOnScreenb =  useOnScreen(refb)
    const isElementOnScreenc =  useOnScreen(refc)
    const isElementOnScreend =  useOnScreen(refd)
    const isElementOnScreene =  useOnScreen(refe)
    const isElementOnScreenf =  useOnScreen(reff)


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
                    <h1 ref={ref0} className={`${styles.titleTrapped} ${isElementOnScreen0 ? styles.fadeInShow : ''}`}>Do You Feel Trapped In Long Screen Time?</h1>
                    <div className={styles.sections}>
                        <div ref={ref} className={`${styles.section} ${isElementOnScreen ? styles.fadeInShow : ''}`}>
                            <Image src="/images/get-started-icons/anxiousness.png" alt="Anxiousness Icon" width={267} height={267}
                            className={styles.circle}/>
                            <h2 className={styles.sectionTitle}>Anxiousness:</h2>
                            <p className={styles.sectionDescription}>Worried about juggling assignments, exams, and social life?</p>
                        </div>
                        <div ref={ref2} className={`${styles.section} ${isElementOnScreen2 ? styles.fadeInShow : ''}`}>
                            <Image src="/images/get-started-icons/procrastination.png" alt="Procrastination Icon" width={267} height={267} 
                            className={styles.circle}/>
                            <h2 className={styles.sectionTitle}>Procrastination:</h2>
                            <p className={styles.sectionDescription}>Putting off studying for that upcoming exam or finishing your project?</p>
                        </div>
                        <div ref={ref3} className={`${styles.section} ${isElementOnScreen3 ? styles.fadeInShow : ''}`}>
                            <Image src="/images/get-started-icons/no-progress.png" alt="No Progress Icon" width={267} height={267} 
                            className={styles.circle}/>
                            <h2 className={styles.sectionTitle}>No Progress:</h2>
                            <p className={styles.sectionDescription}>Feeling stuck even after hours of studying and hard work?</p>
                        </div>
                    </div>
                    <div className={styles.arrowWrapper}>
                        <Image src="/images/arrows/blue-scroll-arrow-down.png" alt="Scroll Arrow" width={134} height={84} 
                        ref={ref4} className={`${styles.scrollArrow1} ${isElementOnScreen4 ? styles.fadeInShow : ''}`} 
                        onClick={() => scrollToPage(page2Ref)}/>
                    </div>
                </div>

                <div className={styles.page2} ref={page2Ref}>
                    <h1 ref={ref5} className={`${styles.titleBetter} ${isElementOnScreen5 ? styles.fadeInShow : ''}`}>
                        You Can Do Better.<br/>Because NIX Got You.
                    </h1>
                    <h2 ref={ref6} className={`${styles.testSave} ${isElementOnScreen6 ? styles.fadeInShow : ''}`}>
                        Save time, achieve more.<br/>Master your minutes with NIX!
                    </h2>
                    <div ref={ref7} className={`${styles.mascotsWrapper} ${isElementOnScreen7 ? styles.fadeInShow : ''}`}>
                        <Image src="/images/mascots/Seal.png" alt="Baby Seal" width={99} height={93} className={styles.seal} />
                        <Image src="/images/mascots/Chick.png" alt="Baby Chick" width={96} height={102} className={styles.chick} />
                        <Image src="/images/mascots/Fox.png" alt="Baby Fox" width={90} height={96} className={styles.fox} />
                        <Image src="/images/mascots/Turtle.png" alt="Baby Turtle" width={120} height={102} className={styles.turtle} />
                    </div>

                    <div ref={ref8} className={`${styles.row1} ${isElementOnScreen8 ? styles.slideInRightShow : ''}`}>
                        <div ref={refa} className={`${styles.box1} ${isElementOnScreena ? styles.SslideInRightShow : ''}`}>
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
                        <div ref={refb} className={`${styles.box2} ${isElementOnScreenb ? styles.SslideInLeftShow : ''}`}>
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

                    <div ref={ref9} className={`${styles.row2} ${isElementOnScreen9 ? styles.slideInLeftShow : ''}`}>
                        <div ref={refd} className={`${styles.box3} ${isElementOnScreend ? styles.SslideInLeftShow : ''}`}>
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
                        <div ref={refc} className={`${styles.box4} ${isElementOnScreenc ? styles.SslideInRightShow : ''}`}>
                            <Image src="/images/multipleDevices.png" alt="Multiple Devices" width={649} height={426} className={styles.multipleDevices} />
                        </div>
                    </div>

                    <div ref={ref10} className={`${styles.row3} ${isElementOnScreen10 ? styles.slideInRightShow : ''}`}>
                        <div ref={refe} className={`${styles.box5} ${isElementOnScreene ? styles.SslideInRightShow : ''}`}>
                            <Image src="/images/multipleStyles.png" alt="Multiple Styles" width={600} height={600} className={styles.multipleStyles} />
                        </div>
                        <div ref={reff} className={`${styles.box6} ${isElementOnScreenf ? styles.SslideInLeftShow : ''}`}>
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
                        <div ref={ref11} className={`${styles.frame1} ${isElementOnScreen11 ? styles.fadeInShow : ''}`}>
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
                        <div ref={ref12} className={`${styles.frame2} ${isElementOnScreen12 ? styles.fadeInShow : ''}`}>
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
                        <div ref={ref13} className={`${styles.frame3} ${isElementOnScreen13 ? styles.fadeInShow : ''}`}>
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

                    <h1 ref={ref14} className={`${styles.titleBetter} ${isElementOnScreen14 ? styles.fadeInShow : ''}`}>You Can Do Better.</h1>
                    <p ref={ref15} className={`${styles.pullUp} ${isElementOnScreen15 ? styles.fadeInShow : ''}`}>Now pull up and waste no time.</p>
                    <Link href="/signUp">
                        <button ref={ref16} className={`${styles.registerButton} ${isElementOnScreen16 ? styles.fadeInShow : ''}`}>Register For Free!</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    )
} 

export default getStarted;