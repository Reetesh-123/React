import React,{useReducer} from 'react'

const initialCount={
    firstCounter : 0 ,
    secondCounter : 0
}
const Reducer=(state,action)=>{
    switch(action.type)
    {
        case 'Increment': return {...state,firstCounter: state.firstCounter+action.value}
        case 'Decrement': return {...state,firstCounter:state.firstCounter-action.value}

        case 'Increment 2': return {...state,secondCounter: state.secondCounter+action.value}
        case 'Decrement 2': return {...state,secondCounter:state.secondCounter-action.value}
        
        case 'Reset': return initialCount

        default : return state
    }
}


function CounterTwo() {
    const [count,dispatch]=useReducer(Reducer,initialCount)
  return (
    <>
            <h1>{count.firstCounter}</h1>
            <h1>{count.secondCounter}</h1>

            <button onClick={()=>dispatch({type :'Increment',value : 1})}>Increment</button>
            <button onClick={()=>dispatch({type :'Decrement' ,value : 1})}>Decrement</button>
            <button onClick={()=>dispatch({type :'Increment',value : 5})}>Increment by 5</button>
            <button onClick={()=>dispatch({type :'Decrement' ,value : 5})}>Decrement by 5</button>
            <button onClick={()=>dispatch({type :'Reset'})}>Reset</button>

            <button onClick={()=>dispatch({type :'Increment 2',value : 5})}>Increment by 5</button>
            <button onClick={()=>dispatch({type :'Decrement 2' ,value : 5})}>Decrement by 5</button>
    </>
  )
}

export default CounterTwo   