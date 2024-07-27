import React, { useRef, useState } from "react";
import Head from "next/head";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import styles from '@styles/getStarted.module.css';
import Image from 'next/image';
import Link from 'next/link';

const getStarted: React.FC = () => {
  const page2Ref = useRef<HTMLDivElement>(null);
  const page3Ref = useRef<HTMLDivElement>(null);
  const page4Ref = useRef<HTMLDivElement>(null);
  const page5Ref = useRef<HTMLDivElement>(null);
  const page6Ref = useRef<HTMLDivElement>(null);

  const scrollToPage = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentImageIndexPage2, setCurrentImageIndexPage2] = useState(0);
  const [currentImageIndexPage3, setCurrentImageIndexPage3] = useState(0);
  const [currentImageIndexPage4, setCurrentImageIndexPage4] = useState(0);
  const [currentImageIndexPage5, setCurrentImageIndexPage5] = useState(0);

  const imagesPage2 = [
    '/images/screenshots/page1/screenshot1.png',
    '/images/screenshots/page1/screenshot2.png',
    '/images/screenshots/page1/screenshot3.png'
  ];
  
  const imagesPage3 = [
    '/images/screenshots/page2/screenshot1.png',
    '/images/screenshots/page2/screenshot2.png',
    '/images/screenshots/page2/screenshot3.png'
  ];
  
  const imagesPage4 = [
    '/images/screenshots/page3/screenshot1.png',
    '/images/screenshots/page3/screenshot2.png',
    '/images/screenshots/page3/screenshot3.png'
  ];
  
  const imagesPage5 = [
    '/images/screenshots/page4/screenshot1.png',
    '/images/screenshots/page4/screenshot2.png',
    '/images/screenshots/page4/screenshot3.png'
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
        <title>NIX - Get Started</title>
        <meta name="description" content="Do you feel trapped in long screen time? Get started with NIX to improve your time management." />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Do You Feel Trapped in Long Screen Time?</h1>
        <div className={styles.page1}>
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
          <div className={styles.wrapper}>
            <div className={styles.leftSection}>
              <h1 className={styles.title2}>Don't Worry! NIX Got You!</h1>
              <p className={styles.text2}>Yo, I am <span className={styles.text22}>Ignis the Lizard</span>
                <br/> 
                Let’s burn through procrastination and ignite your productivity!
                NIX’s Conditional Pomodoro can help you focus in self-controlled sessions with short breaks in between. 
                <span className={styles.text22}> <br/> No one will become a dull boy!</span>
              </p>
              <div className={styles.iconWrapper}>
                <Image src="/images/mascots/nix-lizard.png" alt="Lizard" width={349} height={292} />
              </div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.leftArrow} onClick={() => handlePrevious(setCurrentImageIndexPage2, imagesPage2)}>
                <Image src="/images/arrows/yellow-scroll-arrow-left.png" alt="Left Arrow" width={102} height={60} />
              </div>
              <div className={styles.imageWrapper}>
                <Image src="/images/iphone.png" alt="iPhone 15 frame" width={300} height={591.12} className={styles.iphoneFrame} />
                <div className={styles.screenContainer}>
                  <Image src={imagesPage2[currentImageIndexPage2]} alt="App Screenshot" className={styles.screenshot} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className={styles.rightArrow} onClick={() => handleNext(setCurrentImageIndexPage2, imagesPage2)}>
                <Image src="/images/arrows/yellow-scroll-arrow-right.png" alt="Right Arrow" width={102} height={60} />
              </div>
            </div>
          </div>
          <div className={styles.arrowWrapper}>
            <Image src="/images/arrows/yellow-scroll-arrow-down.png" alt="Scroll Arrow" width={134} height={84} 
              className={styles.scrollArrow} onClick={() => scrollToPage(page3Ref)}/>
          </div>
        </div>

        <div className={styles.page3} ref={page3Ref}>
          <div className={styles.wrapper}>
            <div className={styles.leftSection}>
              <h1 className={styles.title3}>Don't Worry! <br /> NIX Got You!</h1>
              <p className={styles.text3}>Hey! I am <span className={styles.text33}>Zephyr the Chick</span>
                <br/> 
                I will help you breeze through your daily goals. Watch your accomplishments grow and gain 
                the confidence to take on more! Your devices will all be synced when NIX is blocking your apps --
                <span className={styles.text33}> <br/> No Cheating!!</span>
              </p>
              <div className={styles.iconWrapper}>
                <Image src="/images/mascots/nix-chick.png" alt="Chick" width={300} height={292} />
              </div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.leftArrow} onClick={() => handlePrevious(setCurrentImageIndexPage3, imagesPage3)}>
                <Image src="/images/arrows/yellow-scroll-arrow-left.png" alt="Left Arrow" width={102} height={60} />
              </div>
              <div className={styles.imageWrapper}>
                <Image src="/images/iphone.png" alt="iPhone 15 frame" width={300} height={591.12} className={styles.iphoneFrame}/>
                <div className={styles.screenContainer}>
                  <Image src={imagesPage3[currentImageIndexPage3]} alt="App Screenshot" className={styles.screenshot} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className={styles.rightArrow} onClick={() => handleNext(setCurrentImageIndexPage3, imagesPage3)}>
                <Image src="/images/arrows/yellow-scroll-arrow-right.png" alt="Right Arrow" width={102} height={60} />
              </div>
            </div>
          </div>
          <div className={styles.arrowWrapper}>
            <Image src="/images/arrows/yellow-scroll-arrow-down.png" alt="Scroll Arrow" width={134} height={84}
              className={styles.scrollArrow} onClick={() => scrollToPage(page4Ref)}/>
          </div>
        </div>

        <div className={styles.page4} ref={page4Ref}>
          <div className={styles.wrapper}>
            <div className={styles.leftSection}>
              <h1 className={styles.title4}>Don't Worry! <br /> NIX Got You!</h1>
              <p className={styles.text4}>Rawrr. I am <span className={styles.text44}>Terra the Cheetah</span>
                <br/> 
                Grounding yourself in focus is key to success. 
                NIX offers distraction-free modes and reminders to help you maintain concentration on what's important. 
                <span className={styles.text44}> <br/> You ready to slay your day like an absolute king/queen?!</span>
              </p>
              <div className={styles.iconWrapper}>
                <Image src="/images/mascots/nix-cheetah.png" alt="Cheetah" width={349} height={292} />
              </div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.leftArrow} onClick={() => handlePrevious(setCurrentImageIndexPage4, imagesPage4)}>
                <Image src="/images/arrows/yellow-scroll-arrow-left.png" alt="Left Arrow" width={102} height={60} />
              </div>
              <div className={styles.imageWrapper}>
                <Image src="/images/iphone.png" alt="iPhone 15 frame" width={300} height={591.12} className={styles.iphoneFrame}/>
                <div className={styles.screenContainer}>
                  <Image src={imagesPage4[currentImageIndexPage4]} alt="App Screenshot" className={styles.screenshot} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className={styles.rightArrow} onClick={() => handleNext(setCurrentImageIndexPage4, imagesPage4)}>
                <Image src="/images/arrows/yellow-scroll-arrow-right.png" alt="Right Arrow" width={102} height={60} />
              </div>
            </div>
          </div>
          <div className={styles.arrowWrapper}>
            <Image src="/images/arrows/yellow-scroll-arrow-down.png" alt="Scroll Arrow" width={134} height={84} 
              className={styles.scrollArrow} onClick={() => scrollToPage(page5Ref)}/>
          </div>
        </div>

        <div className={styles.page5} ref={page5Ref}>
          <div className={styles.wrapper}>
            <div className={styles.leftSection}>
              <h1 className={styles.title5}>Don't Worry! <br /> NIX Got You!</h1>
              <p className={styles.text5}>Sup. I am <span className={styles.text55}>Aqua the Seal</span>
                <br/> 
                Managing your tasks can be as smooth as flowing water. Our easy-to-use interface ensures you stay on track effortlessly. 
                Our aesthetic templates will make your journey unforgettable.
                <span className={styles.text55}> <br/> Say less. Pull up.</span>
              </p>
              <div className={styles.iconWrapper}>
                <Image src="/images/mascots/nix-seal.png" alt="Seal" width={349} height={292} />
              </div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.leftArrow} onClick={() => handlePrevious(setCurrentImageIndexPage5, imagesPage5)}>
                <Image src="/images/arrows/blue-scroll-arrow-left-small.png" alt="Left Arrow" width={102} height={60} />
              </div>
              <div className={styles.imageWrapper}>
                <Image src="/images/iphone.png" alt="iPhone 15 frame" width={300} height={591.12} className={styles.iphoneFrame}/>
                <div className={styles.screenContainer}>
                  <Image src={imagesPage5[currentImageIndexPage5]} alt="App Screenshot" className={styles.screenshot} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className={styles.rightArrow} onClick={() => handleNext(setCurrentImageIndexPage5, imagesPage5)}>
                <Image src="/images/arrows/blue-scroll-arrow-right-small.png" alt="Right Arrow" width={102} height={60} />
              </div>
            </div>
          </div>
          <div className={styles.arrowWrapper}>
            <Image src="/images/arrows/blue-scroll-arrow-down.png" alt="Scroll Arrow" width={134} height={84}
            className={styles.scrollArrow} onClick={() => scrollToPage(page6Ref)} />
          </div>
        </div>

        <div className={styles.page6} ref={page6Ref}>
          <div className={styles.topSection}>
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
          <h1 className={styles.slogan}>You Can Do Better.</h1>
          <div className={styles.free}>It's Free!</div>
          <div className={styles.bottomSection}>
              <div className={styles.arrowContainer}>
                <Image src="/images/arrows/blue-scroll-arrow-right.png" alt="Scroll Arrow" width={100} height={70}/>
              </div>
              <Link href="/signUp">
                <button className={styles.registerButton}>Register</button>
              </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default getStarted;
