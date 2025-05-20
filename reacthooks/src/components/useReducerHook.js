import { useReducer, useState } from "react";

const UseReducerHook = () => {
  const initialState = 0;
  function reducer(state,action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        throw new Error();
    }
  }
  const [state,dispatch] = useReducer(reducer, initialState);

  // const [counter, setCounter] = useReducer(0);
  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  // const decrement = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <div>
      <h2>UseReducerHook</h2>
      <h3>{state}</h3>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
      <button onClick={() => dispatch({type:"increment"})}>Increment</button>
      <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
    </div>
  );
};

export default UseReducerHook;
