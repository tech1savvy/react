// used for state management
// alternative for useState()
// useReducer is more primitive form of useState
//   useState is made using useReducer

import { useReducer } from "react";
// useReducer(reducer, initialState)
//   returns array of [newState, dispatch]
// newState = reducer(currentState, action)

const initialCount = 0;
const reducer = (currentCount, action) => {
  switch (action) {
    case "increment":
      return currentCount + 1;
    case "decrement":
      return currentCount - 1;
    case "reset":
      return initialCount;
    default:
      return currentCount;
  }
};

export default function UseReducer() {
  const [countOne, countOneDispatch] = useReducer(reducer, initialCount);
  const [countTwo, countTwoDispatch] = useReducer(reducer, initialCount);
  return (
    <>
      <div>
        <div>First Count: {countOne}</div>
        <button onClick={() => countOneDispatch("increment")}>Increment</button>
        <button onClick={() => countOneDispatch("decrement")}>Decrement</button>
        <button onClick={() => countOneDispatch("reset")}>Reset</button>
      </div>
      <div>
        <div>Second Count: {countTwo}</div>
        <button onClick={() => countTwoDispatch("increment")}>Increment</button>
        <button onClick={() => countTwoDispatch("decrement")}>Decrement</button>
        <button onClick={() => countTwoDispatch("reset")}>Reset</button>
      </div>
    </>
  );
}
