import React, { useEffect, useRef, useState } from "react";

function AutoFocusInput() {
  const [text, setText] = useState("");
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <div>
      <h1>AutoFocusInput</h1>
      <input
        type="text"
        ref={textRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default AutoFocusInput;
