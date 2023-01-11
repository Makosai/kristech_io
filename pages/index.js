import ColorScheme from '../public/theme-light-dark.svg';
import MainContainer from '../components/main_container';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [colorScheme, setColorScheme] = useState(null);

  function getNextColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'light'
      : 'dark';
  }

  useEffect(() => {
    console.log('colorScheme', colorScheme);

    switch (colorScheme) {
      case 'light':
        const isLightMode = window.matchMedia(
          '(prefers-color-scheme: light)'
        ).matches;
        if (isLightMode) {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
        break;

      case 'dark':
        const isDarkMode = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        if (isDarkMode) {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
        break;
    }
  }, [colorScheme]);

  return (
    <MainContainer>
      <main className={styles.main}>
        <div id={styles.headerContainer}>
          <div id={styles.header}>Kris</div>
          <div id={styles.headerInline}>Tech</div>
          <div id={styles.headerDot}>.</div>
          <div id={styles.headerIO}>io</div>
        </div>
        <div id={styles.navigator}>
          <div className={styles.navItem}>About me</div>
          <div className={styles.navItem}>Portfolio</div>
          <div className={styles.navItem}>Blog</div>
          <div className={styles.navItem}>Contact</div>
        </div>
        <ColorScheme
          alt="light/dark theme"
          width={30}
          height={30}
          className={styles.colorScheme}
          onClick={() =>
            setColorScheme(colorScheme === null ? getNextColorScheme() : colorScheme === 'light' ? 'dark' : 'light')
          }
        />
      </main>
    </MainContainer>
  );
}

