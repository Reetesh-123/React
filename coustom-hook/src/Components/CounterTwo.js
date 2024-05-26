import React,{useState} from 'react'
import useCounter from '../hooks/useCounter';


function CounterTwo() {
   
    const[count,Increment,Decrement,Reset]=useCounter(10,10)

  return (
    <>
            <h1> Count - {count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
            
    </>
  )

}

export default CounterTwo