import React, { useState, useEffect } from "react";

function Clock() {
  const [timeEl, setTimeEl] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const setInterval = setTimeout(setTimeEl, 1000);
    setTimeEl(setInterval);
    return () => clearTimeout(setInterval);
  }, [timeEl]);

  return (
    <div>
      <h1>Clock</h1>
      <h2>Time : {timeEl}</h2>
    </div>
  );
}

export default Clock;
