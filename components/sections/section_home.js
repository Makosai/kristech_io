import ColorScheme from '../color_scheme';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function SectionHome() {
  return (
    <>
      <main className={styles.main}>
        <div id={styles.headerContainer}>
          <div id={styles.header}>Kris</div>
          <div id={styles.headerInline}>Tech</div>
          <div id={styles.headerDot}>.</div>
          <div id={styles.headerIO}>io</div>
        </div>
        <div id={styles.navigator}>
          <div className={styles.navItem}>
            <Link href="#aboutme">About me</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="#portfolio">Portfolio</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="#blog">Blog</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
        <ColorScheme />
      </main>
    </>
  );
}

