import React,{ useState } from 'react'

function HookCounterFour() {
  const [items, setitems] = useState([])

  const InsertHandler=()=>{
    let num 
    setitems([...items,{
        id : items.length,
        value : Math.floor(Math.random()*10+1) 
    }])
  }

  return (
    <>
    <button onClick={InsertHandler}>Insert Random Item</button>
    <ul>
          {
            items.map(item=><li key={item.id}>{item.value}</li>)
          }
    </ul>
    </>
  )
}

export default HookCounterFour