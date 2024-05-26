import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    // Both methods are correct
    
    // Here we need to pass count because new count depends on prev count even though we are using componentdidmount

    // const tick=()=>{
    //     setCount(count+1);
    // }

    // useEffect(()=>{
    //     const Interval=setInterval(tick,1000)
    //     return ()=>{
    //         clearInterval(Interval);
    //     }
    // },[count])

    // Here we dont need to pass count because we are using prevState in tick

    const tick=()=>{
        setCount(prevCount=>prevCount+1);
    }

    useEffect(()=>{
        const Interval=setInterval(tick,1000)
        return ()=>{
            clearInterval(Interval);
        }
    },[])
   

  return (
    <h1>{count}</h1>
  )
}

export default IntervalHookCounter