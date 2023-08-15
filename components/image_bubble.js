import styles from '../styles/ImageBubble.module.css';

export default function ImageBubble({children}) {
  return <div className={styles.imageBubble}>
    {children}
  </div>
}