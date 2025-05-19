import { useEffect, useState } from "react";

const UseEffectHook = () => {

  const [date, setDate] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component");

  // it will execute state is update in component.
  // useEffect(() => {
  //   console.log("Component mounted or updated");
  // })

  // only for first time 
  // useEffect(() => {
  //   console.log("Component mounted or updated");
  // },[])

  // with dependency 
  useEffect(() => {
    console.log("Component mounted or updated");
  },[date])

  // unmount the component
  // useEffect(() => {
  //   console.log("Component mounted or updated");
  //   const interval = setInterval(showDate, 1000);

  //   return () => {
  //     console.log("Clean up of interval");
  //     clearInterval(interval);
  //   }
  // },[date])
  const showDate = () => {
    setDate(new Date().toString());
  }

  return (
    <>
      <h3>UseEffect</h3>    
      <h4>{date}</h4>
      <button onClick={showDate}>Show Date</button>
      <div>{message}</div>
      <button onClick={() => setMessage("Changed function component")}>Change Message</button>
      
    </>
  )
}

export default UseEffectHook;