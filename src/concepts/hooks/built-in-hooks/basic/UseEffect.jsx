import { useEffect, useState } from "react";

export default function BuiltInHook() {
  const [value, setValue] = useState(false);

  function handleClick() {
    setValue(!value);
  }

  useEffect(() => {
    // invoked when changes in props or state mentioned in the []
    console.log(value);
  }, [value]);

  return (
    <div>
      <button onClick={handleClick}>Change State</button>
    </div>
  );
}
