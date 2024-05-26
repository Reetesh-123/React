import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'


// Consuming value using ContextType property, using this.context


export class ComponentE extends Component {
  render() {
    return (
      <>
       Component E context {this.context}
      <ComponentF/>
      </>
    )
  }
}

ComponentE.contextType=UserContext

export default ComponentE