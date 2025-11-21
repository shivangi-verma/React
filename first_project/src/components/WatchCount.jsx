import { React, useState, useEffect, useRef } from "react";
function WatchCount() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Count Changed !");
  }, [count]);

  useEffect(() => {
    if (text === "") return;
    const timer = setTimeout(() => setText(""), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Counter
      </button>
      <h1>Counter : {count} </h1>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <input
        type="text"
        placeholder="username"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}
export default WatchCount;
