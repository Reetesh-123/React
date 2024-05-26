import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
   
  render() {
    const { count, clickhandler }=this.props
    return (
      <h1 onMouseOver={clickhandler}>Hovered {count} times</h1>
    )
  }
}

export default UpdatedComponent(HoverCounter)