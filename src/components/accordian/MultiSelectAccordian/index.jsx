import { useState } from "react";
import data from "./data.js";
import "./styles.css";

export default function MultiSelectAccordian() {
  const [selected, setSelected] = useState([]);

  function handleClick(currentId) {
    let cpySelected = [...selected];
    const indexOfCurrentId = cpySelected.indexOf(currentId);
    console.log(indexOfCurrentId);

    if (indexOfCurrentId === -1) cpySelected.push(currentId);
    else cpySelected.splice(indexOfCurrentId, 1);

    setSelected(cpySelected);
  }

  console.log(selected);

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div onClick={() => handleClick(item.id)} className="cover">
                <h3>{item.cover}</h3>
                <span id="expand">+</span>
              </div>
              {selected.includes(item.id) && (
                <div className="content">{item.content}</div>
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
