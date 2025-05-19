import React, { useMemo, useState } from "react";

const UseMemohook = () => {
  const [counter,setCounter] = useState(1);
  // it will take time withou useMemo
  // const result = factorial(counter);

  // With UseMemo
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
        {/* <p>{`My Name is ${name}`}</p> */}
        <hr></hr>
        <DisplayComponent name={name}></DisplayComponent>
      </div>
    </>
  )
}

const DisplayComponent = React.memo(({ name }) => {
  console.log("DisplayComponent rendered");
  return <p>{`My Name is with Component ${name}`}</p>;
});
export default UseMemohook;