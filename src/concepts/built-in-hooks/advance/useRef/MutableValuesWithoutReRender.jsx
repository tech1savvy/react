import { useRef, useState } from "react";

export default function MutableValuesWithoutReRender() {
  const clickCountRef = useRef(0); // Tracks clicks without re-rendering
  const [stateCount, setStateCount] = useState(0); // Tracks clicks and re-renders
  let normalCount = 0; // This will reset on every render

  const handleRefClick = () => {
    clickCountRef.current += 1; // Updates ref value but does NOT trigger re-render
    console.log("Click count (Ref):", clickCountRef.current);
  };

  const handleStateClick = () => {
    setStateCount(stateCount + 1); // Updates state and triggers re-render
  };

  const handleNormalClick = () => {
    normalCount += 1; // Increases but resets on every re-render
    console.log("Click count (Normal Variable):", normalCount);
  };

  return (
    <div>
      <p>Ref Count (No Re-Render): {clickCountRef.current}</p>
      <p>State Count (Re-Renders): {stateCount}</p>
      <p>Normal Variable (Resets on Re-Render): {normalCount}</p>
      <button onClick={handleRefClick}>Increment with useRef</button>
      <button onClick={handleStateClick}>Increment with useState</button>
      <button onClick={handleNormalClick}>Increment with Normal Variable</button>
    </div>
  );
}
