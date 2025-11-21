import React, { useEffect, useState } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div>
      <h1>TitleUpdater</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default TitleUpdater;
