import { React, useState, useRef, useEffect } from "react";
import "./App.css";
import Chai from "./Chai";
import WatchCount from "./components/WatchCount";

function App() {
  const username = "chai";

  return (
    <>
      <h1>chai aur react | {username} </h1>
      <WatchCount />
    </>
  );
}

export default App;
