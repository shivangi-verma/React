import React, { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]/.?<>:;~";

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPass(pass);
  }, [length, numberAllowed, charAllowed, setPass]);

  return (
    <>
      <div className="w-xl bg-gray-800 rounded-xl p-4 ">
        {/* readonly input field  */}
        <input
          type="text"
          placeholder="Password"
          className="p-2 px-4 border border-white rounded-xl w-sm "
          value={pass}
          readOnly
        />
        {/* copy button */}
        <button className="bg-blue-500 hover:bg-blue-800 rounded-xl p-2 font-bold px-4 ">
          COPY
        </button>
        <div className="flex p-2  justify-center">
          {/* length slider range label*/}
          <label htmlFor="myRange" className="p-1 m-1">
            Length({length})
          </label>
          {/* length slider range input */}

          <input
            type="range"
            id="myRange"
            name="myRange"
            min={6}
            max={25}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          {/* numbers label */}
          <label htmlFor="option1" className="p-1 m-1">
            Numbers
          </label>
          {/* numbers checkbox */}

          <input
            type="checkbox"
            id="option1"
            name="choices"
            value="value1"
            className="p-1 m-1"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          {/*  characters label */}

          <label htmlFor="option1" className="p-1 m-1">
            Characters
          </label>
          {/* numbers checkbox  */}

          <input
            type="checkbox"
            id="option1"
            name="choices"
            value="value1"
            className="p-1 m-1"
          />
        </div>
      </div>
    </>
  );
}

export default App;
