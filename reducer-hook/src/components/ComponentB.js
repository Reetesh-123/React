import React,{useReducer,useContext} from 'react'
import { UserContext } from '../App'




function ComponentB() {
    const countContext=useContext(UserContext);
  return (
    <>
            <h1>{countContext.countState}</h1>
            <button onClick={()=>countContext.countDispatch('Increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('Decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('Reset')}>Reset</button>
    </>
  )
}

export default ComponentB   