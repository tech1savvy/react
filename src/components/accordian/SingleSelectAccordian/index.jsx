import { useState } from "react";
import data from "./data.js";
import "./styles.css";

// add rotation to the expand icon

export default function SingleSelectAccordian() {
  const [selected, setSelected] = useState(null);

  function handleClick(currentId) {
    setSelected(currentId === selected ? null : currentId);
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
              {selected === id && <div className="content">{content}</div>}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
