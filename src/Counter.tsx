import { useState } from "react";

export default function Counter() {
  const name = "GDSE";
  //   let count = 65;

  const [count, setCount] = useState(65); // [variable, method]

  /* const ar = useState(65);    // return -> array with 2 elements
const count = ar[0];  // state variable
const setCount = ar[1];  // method for changing the state variable*/

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Hello {name}!</h1>
      <h2>Let's count your batch number from: {count} </h2>
      <p>Ongoing batch number is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
