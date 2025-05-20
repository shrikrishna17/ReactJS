import { createContext, useState } from "react";

export const CounterContext = createContext(null);

/*
additonal context for the state management.
*/
// export const CounterContextProvider = ({childrn}) => {
//   const [counter, setCounter] = useState(0);
//   const increment = () => {
//     setCounter(counter + 1);
//   }
//   const decrement = () =>{
//     setCounter(counter - 1);
//   };

//   const contextValue = {
//     increment,
//     decrement
//   }

//   return <CounterContextProvider value={contextValue}> {childrn}</CounterContextProvider>
// }
