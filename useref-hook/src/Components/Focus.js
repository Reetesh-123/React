import React,{useEffect,useRef} from 'react'


function Focus() {
    
    const InputRef=useRef(null)

    useEffect(() => {
      // Focus the input element
      InputRef.current.focus()
    }, [])
  return (
    <>
        <input ref={InputRef} type='text'/>
    </>
  )
}

export default Focus        