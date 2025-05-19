import { useEffect, useRef, useState } from "react"


const UseRefHook = () => {

  const [name, setname] = useState("");
  // get DOM reference using useRef
  const inputEl = useRef("");
  console.log(inputEl);
  const resetInput = () => {
    setname("");
    inputEl.current.focus();
  }

  // useref for previous valus
  const [counter, setCounter] = useState(0);
  const previosCounterRef = useRef("")

  useEffect(() => {
    previosCounterRef.current = counter;
  },[counter])
  return (
    <>
    <div>
      <input
        ref= {inputEl}
        name="name"
        autoComplete="off"
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        ></input>
        <button onClick={resetInput}>Reset</button>
    </div>
    <div>
      My name is {name}
    </div>
    <hr></hr>
    <h1>Random Counter : {counter}</h1>
    {typeof previosCounterRef.current !== "undefined" && (
      <h2>Previous Counter : {previosCounterRef.current}</h2>
    ) }
    <button onClick={(e) => {setCounter(Math.ceil(Math.random() * 100))}}>Click me</button>
    </>
  )
}

export default UseRefHook;