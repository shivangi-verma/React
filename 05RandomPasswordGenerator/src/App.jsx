import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-xl bg-gray-800 rounded-xl p-4 ">
        <input
          type="text"
          placeholder="Password"
          className="p-2 px-4 border border-white rounded-xl w-sm "
        />
        <button className="bg-blue-500 hover:bg-blue-800 rounded-xl p-2 font-bold px-4 ">
          COPY
        </button>
        <div className="flex p-2  justify-center">
          <label htmlFor="myRange" className="p-1 m-1">
            Length(0)
          </label>
          <input
            type="range"
            id="myRange"
            name="myRange"
            min="0"
            max="100"
            value="50"
          ></input>
          <label htmlFor="option1" className="p-1 m-1">
            Numbers
          </label>
          <input
            type="checkbox"
            id="option1"
            name="choices"
            value="value1"
            className="p-1 m-1"
          />

          <label htmlFor="option1" className="p-1 m-1">
            Characters
          </label>
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
