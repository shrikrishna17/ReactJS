import React, { useCallback, useEffect, useMemo, useState } from "react";

const UseCallBackHook = () => {
  const [counter,setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter);
  },[counter])

  const [name,setName] = useState("Dipesh");

  function factorial(n) {
    let i = 1;
    while(i < 20000000) i++;
    if(n < 0) {
      return -1
    }
    if(n === 0) {
      return 1;
    }
    return n* factorial(n-1)
  }

  const displayName = useCallback((greetings) => {
    return greetings+" "+ name;
  },[name])

  
  return(
    <>
      <h3>UseMemo Hook</h3>
      <h1>Factorial of {counter} is : <span>{result}</span></h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <hr></hr>
      <div>
        <div>
          <label>Enter Name</label>
        </div>
        <input
          type="text"
          placeholder="enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          >  
        </input>
        <hr></hr>
        <DisplayComponent displayName={displayName}></DisplayComponent>
      </div>
    </>
  )
}


const DisplayComponent = ({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName("Hello"));
    console.log("component rendered");
  },[displayName])
  return <p>{`My Name is ${value}`}</p>;
};
export default UseCallBackHook;