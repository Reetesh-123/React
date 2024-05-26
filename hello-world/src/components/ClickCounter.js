import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {
  
  
  render() {
    // console.log(this.props.count);
    const {count,clickhandler} = this.props
    return (
      <button onClick={clickhandler}>Clicked {count} times</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)