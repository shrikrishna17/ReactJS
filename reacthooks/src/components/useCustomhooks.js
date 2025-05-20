import { useState } from "react";
import ScreenComponent from "../customHookFolder/screenComponent";
import useCounterCustomHook from "../customHookFolder/useCounterCustomHook";

const UseCustomHook = () => {
  /*
  // const [counter,setCounter] = useState(0);
  
  // const increment = () => {
  //   return setCounter(counter + 1)
  // }

  // const decrement = () => {
  //   return setCounter(counter - 1)
  // }
  */

  const [counter, increment, decrement, reset] = useCounterCustomHook(0);
  return (
    <div>
      <h2>CustomHook</h2>
      <h1>{counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <ScreenComponent></ScreenComponent>
    </div>
  )
}

export default UseCustomHook;