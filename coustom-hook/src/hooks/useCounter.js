import React,{useState} from 'react'

function useCounter(initialCount=0,val=1) {
    const [count, setCount] = useState(initialCount)

    const Increment=()=>{
        setCount(prevCount=>prevCount+val)
    }
    const Decrement=()=>{
        setCount(prevCount=>prevCount-val)
    }
    const Reset=()=>{
        setCount(initialCount)
    }
    return [count,Increment,Decrement,Reset]
}

export default useCounter