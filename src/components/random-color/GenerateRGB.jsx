import { useState } from "react";
import styles from "./styles.module.css";
export default function GenerateRGB() {
  const [color, setColor] = useState("rbg(0,0,0)");
  function handleClick() {}
  return (
    <div className={styles.wrapper}>
      <button onClick={handleClick} className={styles.btn}>
        Generate RGB Color
      </button>
      <div className={styles.block} style={{ backgroundColor: color }}></div>
      <p>{color}</p>
    </div>
  );
}
