import React, { useState } from 'react'

function HookCounterTwo() {
  const initial=0;
  const [count, setCount] = useState(initial) 
  const IncrementFive=()=>{
    for(let i=0;i<5;i++)
    {
        setCount(prevcount=>prevcount+1)
    }
  }
  return (
    <>
        count {count}
        <button onClick={()=>setCount(initial)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={IncrementFive}>Increment by Five</button>
    </>
  )
}

export default HookCounterTwo