import React,{useState,useEffect} from 'react'

function HookCounterOne() {
  const [count, setcount] = useState(0)
  const [name, setName] = useState('') 

  useEffect(()=>{
        console.log('UseEffect Updated title')
        document.title=`You clicked ${count} times`
  },[count])

  return (
    <>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
     <button onClick={()=>setcount(count+1)}>clicked {count} times</button>
    </>
  )
}

export default HookCounterOne