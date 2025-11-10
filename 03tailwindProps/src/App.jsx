import React from "react"; // Add this line
import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card username="this is card one" btnText="Click Me" />
      <Card username="this is card two" btnText="Visit Me" />
    </>
  );
}

export default App;
