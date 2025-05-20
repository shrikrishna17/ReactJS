import { useState } from "react";

export default function useCounterCustomHook (props) {
  const [value,setValue] = useState(props);

  const increment = () => {
    return setValue(value + 1)
  }

  const decrement = () => {
    return setValue(value - 1)
  }
  const reset = () => {
    return setValue(props);
  }
  return [value, increment, decrement,reset]
  
};