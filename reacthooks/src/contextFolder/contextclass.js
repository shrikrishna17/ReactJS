import React from "react";
import { CounterContext } from "./counterContext";


class ContextClass extends React.Component {
  render() {
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
      <h1>Function Class component</h1>
      <h2>{this.props.counter}</h2>
      <hr></hr>
      <CounterContext.Consumer>
        {(value) => {
          return <h2>{value}</h2>
        }}
      </CounterContext.Consumer>
    </div>
  );
}
}

export default ContextClass;
