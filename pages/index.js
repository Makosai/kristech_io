import MainContainer from '../components/main_container';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <MainContainer>
      <main className={styles.main}>
        <div id={styles.headerContainer}>
          <div id={styles.header}>Kris</div>
          <div id={styles.headerInline}>Tech</div>
          <div id={styles.headerDot}>.</div>
          <div id={styles.headerIO}>io</div>
        </div>
        <div id={styles.navigator} className="dark">
          <div className={styles.navItem}>About me</div>
          <div className={styles.navItem}>Portfolio</div>
          <div className={styles.navItem}>Blog</div>
          <div className={styles.navItem}>Contact</div>
        </div>
      </main>
    </MainContainer>
  );
}

