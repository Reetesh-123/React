import React,{useState,useMemo} from 'react'

function Counter() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

 const Increment1 =()=>{
    
    setCounter1(counter1+1);
 }
 const isEven=useMemo(()=>{
    let i=0;
    while(i<100000000)
    i++;
    return counter1%2===0 ? "Even" :"Odd"
 },[counter1])
 
 const Increment2 =()=>{
    setCounter2(counter2+1);
 }

  return (
    <>
        <button onClick={Increment1}>Counter 1 - {counter1}</button>
        <span>{isEven}</span>
        <button onClick={Increment2}>Counter 2 - {counter2}</button>
    </>
  )
}

export default Counter