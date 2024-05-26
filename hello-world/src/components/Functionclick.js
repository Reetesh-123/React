import React from 'react'

function Functionclick() {
    function clickhandler()
    {
        console.log("clicked")
    }
  return (
    <>
            {/* // dont add parenthesis on clickhandler because we are passing function not calling it. */}
            <button onClick={clickhandler}>Click</button>
    </>
  )
}

export default Functionclick    