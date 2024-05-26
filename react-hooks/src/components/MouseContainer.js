import React,{useState,useEffect} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
  const [disable, setDisable] = useState(true)
  return (
    <>
        <button onClick={()=>setDisable(!disable)}>toggle</button>
        {disable && <HookMouse/>}
    </>
  )
}

export default MouseContainer