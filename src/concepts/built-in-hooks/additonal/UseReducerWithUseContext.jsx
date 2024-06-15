// combinedly used to share state between components
// i.e. Global State Management

import { createContext, useContext, useReducer } from "react";

const CountContex = createContext();

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

export default function UseReducerWithUseContext() {
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <>
      <CountContex.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <p>Count: {count}</p>
        <A />
        <B />
      </CountContex.Provider>
    </>
  );
}

function A() {
  const count = useContext(CountContex);

  return (
    <div>
      <p>Component A - {count.countState} </p>
      <button onClick={() => count.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => count.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => count.countDispatch("reset")}>Reset</button>
    </div>
  );
}

function B() {
  const count = useContext(CountContex);

  return (
    <div>
      <p>Component B - {count.countState}</p>
      <button onClick={() => count.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => count.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => count.countDispatch("reset")}>Reset</button>
    </div>
  );
}
