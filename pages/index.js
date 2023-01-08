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
      </main>
    </MainContainer>
  );
}

