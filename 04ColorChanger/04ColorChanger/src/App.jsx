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
    </>
  );
}

export default App;
