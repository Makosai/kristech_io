import BackgroundHandler from '../components/background_handler';
import ColorScheme from '../components/color_scheme';
import PageOrientation from '../components/page_orientation';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <BackgroundHandler />
      <PageOrientation />
      <main className={styles.main}>
        <div id={styles.headerContainer}>
          <div id={styles.header}>Kris</div>
          <div id={styles.headerInline}>Tech</div>
          <div id={styles.headerDot}>.</div>
          <div id={styles.headerIO}>io</div>
        </div>
        <div id={styles.navigator}>
          <div className={styles.navItem}>
            <Link href="aboutme">About me</Link>
          </div>
          <div className={styles.navItem}>Portfolio</div>
          <div className={styles.navItem}>Blog</div>
          <div className={styles.navItem}>Contact</div>
        </div>
        <ColorScheme />
      </main>
    </>
  );
}

