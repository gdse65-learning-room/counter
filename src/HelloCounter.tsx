import { useState } from "react";

export default function HelloCounter() {
  //   const [name, setName] = useState("IJSE");
  const [number, setNumber] = useState(1);

  function handleIncrement() {
    setNumber(number + 1); //

    // if((number + 1) %  != 0) {
    //     setName("IJSE");
    // } else {
    //     setName("GDSE");
    // }
  }

  function handleDecrement() {
    setNumber(number - 1);

    // if((number - 1) % 5 != 0) {
    //     setName("IJSE");
    // } else {
    //     setName("GDSE");
    // }
  }

  return (
    <>
      <h1>Hello {number % 5 != 0 ? "IJSE" : "GDSE"}</h1>
      <h2>The number is: {number}</h2>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
