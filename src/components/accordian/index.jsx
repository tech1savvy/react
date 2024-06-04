// single selection
// multiple selection

import { useState } from "react";
import data from "./data.js";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  console.log(selected);

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(item.id)}
                className="cover"
              >
                <h3 key={item}>{item.cover}</h3>
                <span id="expand">+</span>
              </div>
              {selected === item.id ? (
                <div className="content">{item.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
