import React,{useReducer} from 'react'

const initialCount=0;
const Reducer=(state,action)=>{
    switch(action)
    {
        case 'Increment': return state+1;
        case 'Decrement': return state-1;
        case 'Reset': return initialCount;

        default : return state
    }
}


function CounterThree() {
    const [count,dispatch]=useReducer(Reducer,initialCount)
    const [countTwo,dispatchTwo]=useReducer(Reducer,initialCount)
  return (
    <>
            <h1>{count}</h1>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
            
            <h1>{countTwo}</h1>
            <button onClick={()=>dispatchTwo('Increment')}>Increment</button>
            <button onClick={()=>dispatchTwo('Decrement')}>Decrement</button>
            <button onClick={()=>dispatchTwo('Reset')}>Reset</button>
    </>
  )
}

export default CounterThree