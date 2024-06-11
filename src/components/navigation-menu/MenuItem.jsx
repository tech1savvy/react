import MenuList from "./MenuList";
import styles from "./styles.module.css";
import { useState } from "react";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggleChildren(getCurrentLabel) {
    console.log(displayCurrentChildren);
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <li>
      <div className={styles.menuItem}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
