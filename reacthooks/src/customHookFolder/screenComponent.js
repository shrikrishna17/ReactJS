import useScreenCustomHook from "./useScreenCustomHook";

const ScreenComponent = () =>{
  const screenSize = useScreenCustomHook();
  return(
    <div>
      <h2>Screen Component</h2>
      <h2>We are in {screenSize} Screen</h2>
    </div>
  )
}

export default ScreenComponent;