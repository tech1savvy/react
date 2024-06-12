import MenuList from "./MenuList";
import styles from "./styles.module.css";
import { useState } from "react";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);
  function handleToggleChildren() {
    setDisplayCurrentChildren(!displayCurrentChildren);
  }

  console.log(item.label, displayCurrentChildren);

  return (
    <li>
      <div className={styles.menuItem}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={handleToggleChildren}>
            {displayCurrentChildren ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length &&
      displayCurrentChildren ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
