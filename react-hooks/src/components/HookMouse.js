import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)   

    const logMousePosition=(e)=>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('UseEffect is called'); 
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
          console.log('component unmounting code')
          window.removeEventListener('mousemove',logMousePosition)
        }

    },[])
    
  return (
    
    <div>X-{X} and Y-{Y}</div>
  )
}

export default HookMouse