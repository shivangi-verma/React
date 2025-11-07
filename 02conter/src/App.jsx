import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  // let counter = 0;
  function adddValue() {
    // console.log("adddValue clicked", counter);
    // return counter++;
    setCounter(counter + 1);
  }
  function reduceValue() {
    if (counter > 0) setCounter(counter - 1);
    else setCounter(0);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={adddValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={reduceValue}>Decrease Value</button>
    </>
  );
}

export default App;
