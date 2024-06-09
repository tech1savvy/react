import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.css";

export default function StarRating({ noOfStars = 3 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }

  function handleMouseLeave(currentIndex) {
    setHover(rating);
  }

  return (
    <div className={styles.wrapper}>
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? styles.active : styles.inactive
            }
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
}
