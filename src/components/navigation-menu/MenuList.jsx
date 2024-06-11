import MenuItem from "./MenuItem";
import styles from "./styles.module.css";

export default function MenuList({ list = [] }) {
  return (
    <ul className={styles.menuListContainer}>
      {list && list.length
        ? list.map((item) => <MenuItem key={item.label} item={item} />)
        : null}
    </ul>
  );
}
