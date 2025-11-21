import { React, useState, useEffect, useRef } from "react";

function PreviousNumber() {
  const [count, setCount] = useState(0);
  const prevCounter = useRef(0);
  useEffect(() => {
    prevCounter.current = count;
  }, [count]);

  return (
    <div>
      <h1>Previous Number</h1>
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

export default PreviousNumber;
