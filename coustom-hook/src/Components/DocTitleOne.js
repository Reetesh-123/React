import React,{useState,useEffect} from 'react'
import useDocTitle from '../hooks/useDocTitle'

function DocTitleOne() {
   const [count, setCount] = useState(0) 

   useDocTitle(count);

  return (
    <>
    <button onClick={()=>{setCount(count+1)}}>Count-{count}</button>
    </>
  )
}

export default DocTitleOne  