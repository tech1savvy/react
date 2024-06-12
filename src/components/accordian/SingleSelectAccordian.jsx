import { useState } from "react";
import data from "./AccordianData.js";
import styles from "./styles.module.css";

// add rotation to the expand icon

export default function SingleSelectAccordian() {
  const [selected, setSelected] = useState(null);

  function handleClick(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  console.log(selected);

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordian}>
        {data && data.length > 0 ? (
          data.map(({ id, cover, content }) => (
            <div className={styles.item} key={id}>
              <div onClick={() => handleClick(id)} className={styles.cover}>
                <h3>{cover}</h3>
                <span>+</span>
              </div>
              {selected === id && (
                <div className={styles.content}>{content}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
