import React,{useState} from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
  

    const[firstName,bindfirstName,resetfirstName]=useInput('')
    const[lastName,bindlastName,resetlastName]=useInput('')

    const SubmitHandler=(e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetfirstName()
        resetlastName()
    }

  return (
         <>
            <form onSubmit={SubmitHandler}>
                <div>
                    <label>First Name</label>
                    <input value={firstName} {...bindfirstName} text='text'/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input value={lastName} {...bindlastName} text='text'/>
                </div>
                <button> Submit</button>
            </form>

         </>
  )
}

export default UserForm