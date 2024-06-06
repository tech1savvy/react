import styles from "./styles.module.css";
export default function RandomColor() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.btn}>Generate HEX Color</div>
      {/* why they are not on separate lines */}
      <div className={styles.btn}>Generate RGB Color</div>
    </div>
  );
}
