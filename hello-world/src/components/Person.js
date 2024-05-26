import React from 'react'

export default function Person({person}) {
  return (
    <h1>I am {person.name}. I am {person.age} year old. I am skilled in {person.skill}</h1>
  )
}
