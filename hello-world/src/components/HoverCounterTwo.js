import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    render() {
        const {count,IncrementCount}=this.props
      return (
        <h1 onMouseOver={IncrementCount}>Hovered {count} times</h1>
      )
    }
    
}

export default HoverCounterTwo