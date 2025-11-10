import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="h-screen w-screen flex justify-center "
        style={{ background: color }}
      >
        <div className="w-3xl container flex flex-wrap justify-center fixed bottom-12  border border-black rounded-2xl px-4 py-4 bg-gray-800">
          <button
            className="p-2 px-4 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 mx-2"
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            onClick={() => setColor("pink")}
            className="p-2 px-4 rounded-xl bg-pink-600 text-white font-bold hover:bg-pink-700 mx-2"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("red")}
            className="p-2 px-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 mx-2"
          >
            red
          </button>
          <button
            onClick={() => setColor("purple")}
            className="p-2 px-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 mx-2"
          >
            lavender
          </button>
          <button
            onClick={() => setColor("blue")}
            className="p-2 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 mx-2"
          >
            blue
          </button>
          <button
            onClick={() => setColor("teal")}
            className="p-2 px-4 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-700 mx-2"
          >
            teal
          </button>

          <button
            onClick={() => setColor("orange")}
            className="p-2 px-4 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 mx-2"
          >
            orange
          </button>
        </div>
      </div>
      {/* <div
        className=" h-screen w-screen m-auto  "
        style={{ backgroundColor: color }}
      >
        <h1 className="text-xl font-bold m-auto ">color changer</h1>
        <div className=" fixed flex flex-wrap justify-center m-5">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 border border-white"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Red
          </button>
          <button
            type="button"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Yellow
          </button>
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Purple
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;
