import React, { useState } from 'react'

function ParentCallback() {
    const [count, setCount] = useState(0)
    function handleClick(){
        console.log('Child Clicked!');
        
    }

  return (
    <div>
        <h1>ParentCallback</h1>
        <h2>Count : {count}</h2>
        <button onPress={handleClick}>Child</button>
        <button onClick={()=>{setCount(count+1)}}>Update Count</button>

<React.memo>
    
</React.memo>
    </div>
  )
}

export default ParentCallback