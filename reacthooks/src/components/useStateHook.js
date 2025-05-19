import React, { useState } from "react";

const UseStateHook = () => {
  const [user, setUser] = useState("Shri");
  const [flag, setFlag] = useState(false);
  // const [step, setStep] = useState(0);
  // lazy initializer calls only on mount not on every render.
  const [step, setStep] = useState(() => {
    return 0;
  })
  const [name, setName] = useState("Rakesh");
  const [names, setNames] = useState([]);

  function changeName() {
    // if ((user == "Shri")) {
    //   setUser("Clicked user");
    // } else {
    //   setUser("Shri")
    // }

    setUser((prev) => (prev === "Shri" ? "Clicked User" : "Shri"));
    setFlag(!flag);
  }

  function stepCount(event, sign) {
    console.log("sign ", sign);
    setStep((prev) => (sign === "+" ? prev + 1 : prev - 1));
  }

  function addNames(e) {
    e.preventDefault();
    setNames([...names,{id: names.length,name}]);
    setName("");
  }

  return (
    <>
      <h6>USEState</h6>
      <div>Hello {user}</div>
      <div>{flag ? "Flag" : "NotFlag"}</div>
      <div>Flag Value : {flag.toString()}</div>
      <button onClick={changeName}>Change User</button>{" "}
      <button onClick={(e) => stepCount(e, "+")}>+</button> {step}{" "}
      <button onClick={(e) => stepCount(e, "-")}>-</button>
      <hr></hr>
      <form onSubmit = {addNames}>
      <input 
        type="text" 
        value={name}
        placeholder="add names"
        onChange={(e) => setName(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      <hr></hr>
      <ul>
        {names?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UseStateHook;
