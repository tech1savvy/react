import "./App.css";
import menus from "./components/navigation-menu/MenuData";
import TreeViewMenu from "./components/navigation-menu/TreeViewMenu";

function App() {
  return (
    <>
      <TreeViewMenu menus={menus} />
    </>
  );
}

export default App;
