import { useState } from "react";

export default function UseState() {
  const [value, setValue] = useState(false);
  const [array, setArray] = useState([]);

  function handleToggleState() {
    setValue(!value);
  }
  function handlePreverveState() {
    setArray((prevArray) => {
      return [...prevArray, value];
    });
  }

  return (
    <div>
      <button onClick={handleToggleState}>Toggle State</button>
      <p>{value.toString()}</p>
      <button onClick={handlePreverveState}>Preserve State</button>
      <p>{array.toString()}</p>
    </div>
  );
}
