import { useEffect, useState } from "react";

export default function UseEffect() {
  const [value, setValue] = useState(false);

  function handleClick() {
    setValue(!value);
  }

  // order matters
  // useEffect(setupFunction,dependenciesArray)
  useEffect(() => {
    console.log("component initialized");
  }, []);

  useEffect(() => {
    console.log("component initialized or any state changed");
  });

  useEffect(() => {
    console.log("component initialized or value state changed");
  }, [value]);

  useEffect(() => {
    // clean up function
    return () => cons;
    ole.log("component about to unmount");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Change State</button>
    </div>
  );
}
