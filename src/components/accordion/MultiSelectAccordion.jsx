import { useState } from "react";
import data from "./AccordionData.js";
import styles from "./styles.module.css";

export default function MultiSelectAccordion() {
  const [selected, setSelected] = useState([]);

  function handleClick(currentId) {
    setSelected((prevSelected) =>
      prevSelected.includes(currentId)
        ? prevSelected.filter((id) => id !== currentId)
        : [...prevSelected, currentId]
    );
  }

  console.log(selected);

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {data && data.length > 0 ? (
          data.map(({ id, cover, content }) => (
            <div className={styles.item} key={id}>
              <div onClick={() => handleClick(id)} className={styles.cover}>
                <h3>{cover}</h3>
                <span>+</span>
              </div>
              {selected.includes(id) && (
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
