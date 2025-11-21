import React from "react";
import { useState, useRef, useEffect } from "react";

function PrevCount() {
  const [count, setCount] = useState(0);
  const prevCounter = useRef(0);
  useEffect(() => {
    prevCounter.current = count;
  }, [count]);

  return (
    <div>
      <h2>Prev Count: {prevCounter.current} </h2>
      <h2>Current Count: {count} </h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
    </div>
  );
}

export default PrevCount;
