import { useState } from "react";
import styles from "./styles.module.css";
import useLocalStorage from "./useLocalStorage.jsx";

export default function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  console.log(theme);

  return (
    <div className={styles.themeSwitchWrapper} data-theme={theme}>
      <div className={styles.themeContainer}>
        <p>Hello World</p>
        <button onClick={handleClick}>Switch Theme</button>
      </div>
    </div>
  );
}
