import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {Usercontext,Channelcontext} from '../App'


function ComponentE() {
    const user=useContext(Usercontext)
    const channel=useContext(Channelcontext)
  return (
    <div> username-{user}  channelname-{channel} </div>
  )
}

export default ComponentE