import React from 'react'
import './MyStyles.css'
function StyleSheet(props) {
    let classname=props.primary ? 'primary' : ''
  return (
    <h1 className={`${classname} font-xl`}>StyleSheet</h1>
  )
}

export default StyleSheet   