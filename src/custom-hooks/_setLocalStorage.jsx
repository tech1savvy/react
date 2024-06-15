import { useEffect, useState } from "react";

export default function useLocalStorage(key, value) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(value));
    } catch (err) {
      console.log(err);
      currentValue = value;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
