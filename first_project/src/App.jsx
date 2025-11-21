import { React, useState, useRef, useEffect } from "react";
import "./App.css";
import Chai from "./Chai";
import WatchCount from "./components/WatchCount";
import PrevCount from "./components/PrevCount";
import TitleUpdater from "./components/TitleUpdater";
import AutoFocusInput from "./components/AutoFocusInput";
import Clock from "./components/Clock";

function App() {
  const username = "chai";

  return (
    <>
      {/* <h1>chai aur react | {username} </h1> */}
      {/* <WatchCount /> */}
      {/* <PrevCount /> */}
      {/* <TitleUpdater/> */}
      {/* <AutoFocusInput /> */}
      <Clock />
    </>
  );
}

export default App;
