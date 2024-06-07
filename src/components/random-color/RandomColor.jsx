import { useState } from "react";

import styles from "./styles.module.css";
export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  function GenerateHEX() {
    setColor(
      `#${Math.floor(Math.random() * (Math.pow(16, 6) + 1)).toString(16)}`
    );
  }
  function GenerateRGB() {
    let r = Math.floor(Math.random() * 255).toString();
    let g = Math.floor(Math.random() * 255).toString();
    let b = Math.floor(Math.random() * 255).toString();
    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <div className={styles.wrapper}>
      <button onClick={GenerateHEX} className={styles.btn}>
        Generate HEX Color
      </button>
      <button onClick={GenerateRGB} className={styles.btn}>
        Generate RGB Color
      </button>
      <div className={styles.block} style={{ backgroundColor: color }}></div>
      <p>{color}</p>
    </div>
  );
}
