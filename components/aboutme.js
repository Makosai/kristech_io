import styles from '../styles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <div id={styles.modal} className={styles.show}>
      <div className={styles.picture}>Test</div>
      <div className={styles.content}>Test</div>
    </div>
  );
}
