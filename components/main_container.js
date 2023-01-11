import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function MainContainer({ children }) {
  return (
    <>
      <Head>
        <title>Kristopher Ali | kristech.io</title>
        <meta
          name="description"
          content="Kristopher Ali is a software engineer who specializes in creating websites, games, and desktop + mobile apps."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}>
        <span className={styles.background_dot}></span>
        {children}
      </div>
    </>
  );
}

