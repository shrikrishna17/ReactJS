import { useState } from "react";
import ContextClass from "../contextFolder/contextclass";
import ContextFunction from "../contextFolder/contextfunction";
import { CounterContext } from "../contextFolder/counterContext";

const UseContextHook = () => {

  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () =>{
    setCounter(counter - 1);
  };
  return(
    <>
      <div>UseCOntext</div>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr></hr>
      {/* <CounterContext.Provider value={counter}>
      <ContextFunction></ContextFunction>
      <hr></hr>
      <ContextClass counter={counter}></ContextClass>
      </CounterContext.Provider> */}

      <CounterContext.Provider value={{counter,setCounter}}>
      <ContextFunction></ContextFunction>
      <hr></hr>
      </CounterContext.Provider>
    </>
  )
}

export default UseContextHook;