import { useState } from "react";

export default function UseState() {
  // useState returns an array of a variable and its setter function
  // UI changes/reloads when this value is changed
  // it is cumpulsory to pass a defualt state
  const [value, setValue] = useState(false); // here, defualt state = false
  const [array, setArray] = useState([]);

  function handleToggleState() {
    setValue(!value);
  }
  function handlePreverveState() {
    // we append the current state with previous state
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
