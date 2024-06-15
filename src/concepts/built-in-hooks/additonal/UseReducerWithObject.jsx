import { useReducer } from "react";

// use of objects allows multiple states and more control on values used by actions
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment-first":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement-first":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment-second":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement-second":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset-first":
      return { ...currentState, firstCounter: initialState.firstCounter };
    case "reset-second":
      return { ...currentState, secondCounter: initialState.secondCounter };
    default:
      return { ...currentState };
  }
};

export default function UseReducerWithObject() {
  const [count, countDispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <div>First Count: {count.firstCounter}</div>
        <button
          onClick={() => countDispatch({ type: "increment-first", value: 1 })}
        >
          Increment by 1
        </button>
        <button
          onClick={() => countDispatch({ type: "decrement-first", value: 1 })}
        >
          Decrement by 1
        </button>
        <button onClick={() => countDispatch({ type: "reset-first" })}>
          Reset Counter
        </button>

        <div>Second Count: {count.secondCounter}</div>
        <button
          onClick={() => countDispatch({ type: "increment-second", value: 10 })}
        >
          Increment by 10
        </button>
        <button
          onClick={() => countDispatch({ type: "decrement-second", value: 10 })}
        >
          Decrement by 10
        </button>
        <button onClick={() => countDispatch({ type: "reset-second" })}>
          Reset Counter
        </button>
      </div>
    </>
  );
}
