import React from 'react'
import Person from './Person'
function NameList() {
    const Persons=[
        {
            id : 1,
            name : 'Bruce',
            age : 30,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Clark',
            age : 25,
            skill : 'Angular'
        },
        {
            id : 3,
            name : 'Diana',
            age : 28,
            skill : 'Vue'
        }
    ]
    // const names=['Bruce','Clark','Diana']
    // const nameList=names.map(name=><h1>{name}</h1>)
    const PersonList=Persons.map(person=><Person key={person.id} person={person}/>)
  return (
        <div>

            {/* {nameList} */}
            {PersonList}

        </div>
  )
}

export default NameList