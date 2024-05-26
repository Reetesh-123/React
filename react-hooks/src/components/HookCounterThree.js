import React, { useState } from 'react'
function HookCounterThree() {
    const [Name, setName] = useState({firstName: '', lastName: ''})
  return (
    <>
        
    <form >
        {/* ...Name what it is doing is first replicate object than update these property   */}
        {/* if we dont use it then by changing one second become null  */}

        <input type="text" value={Name.firstName} onChange={(e)=>{setName({ ...Name, firstName : e.target.value})}} />
        <input type="text" value={Name.lastName} onChange={(e)=>{setName({...Name, lastName : e.target.value})}} />

     

        <h2>Your firstName is {Name.firstName}</h2>
    </form>
        <h2>Your LastName is {Name.lastName}</h2>
    </>
  )
}

export default HookCounterThree 