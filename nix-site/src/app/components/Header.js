import styles from './styles/Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="NIX Logo"/>
            </div>
            <nav className={styles.nav}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}