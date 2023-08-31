import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navButton}>
        |||
      </div>
      <div className={styles.navHome}>
        <Link href="/">
          kristech.io
        </Link>
      </div>
    </div>
  );
}

