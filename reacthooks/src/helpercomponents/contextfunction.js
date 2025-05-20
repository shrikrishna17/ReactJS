import { useContext } from "react";
import { CounterContext } from "./counterContext";

const ContextFunction = () => {

  const {counter,setCounter} = useContext(CounterContext);
  return (
    <div
      style={{
        border: "1 px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px auto",
        width: "300px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Function component</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <hr></hr>
      <FChild counter={counter}></FChild>
    </div>
  );
};

const FChild = () => {
  const {counter,setCounter} = useContext(CounterContext);
  return (
    <div>
      <h1>Function Child Component</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <h2>{counter}</h2>
    </div>
  )
}

export default ContextFunction;
