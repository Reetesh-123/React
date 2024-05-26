import React from 'react'

export default function ChildComponent(props) {
  return (
            // <button onClick={props.greetHandler}>Greet Parent </button>

            //  For passing parameter to parent component use arrow function
            <button onClick={()=>props.greetHandler('child')}>Greet Parent </button>
  )
}
