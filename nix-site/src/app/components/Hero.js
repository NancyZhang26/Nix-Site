import styles from './styles/Hero.module.css';

export default function Hero(){
    return(
        <section className={styles.hero}>
            <h1>Your Time, Your Rules<br />Welcome to NIX</h1>
            <p>Dive into the time-saving magic of NIX, your college companion extraordinaire!</p>
            <button className={styles.getStarted}>GET STARTED</button>
        </section>
    );
}