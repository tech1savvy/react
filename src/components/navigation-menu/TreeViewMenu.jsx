import MenuList from "./MenuList.jsx";
import styles from "./styles.module.css";

export default function TreeViewMenu({ menus = [] }) {
  return (
    <div className={styles.treeViewMenuContainer}>
      <MenuList list={menus} />
    </div>
  );
}
