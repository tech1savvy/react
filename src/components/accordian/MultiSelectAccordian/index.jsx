import { useState } from "react";
import data from "./data.js";
import "./styles.css";

export default function MultiSelectAccordian() {
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
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map(({ id, cover, content }) => (
            <div className="item" key={id}>
              <div onClick={() => handleClick(id)} className="cover">
                <h3>{cover}</h3>
                <span id="expand">+</span>
              </div>
              {selected.includes(id) && (
                <div className="content">{content}</div>
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
