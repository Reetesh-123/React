import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
    
  render() {
    const {count,IncrementCount}=this.props
    return (
    <> 
        <button onClick={IncrementCount}>Clicked {count} times</button>
      {/* {this.props.name} */}
    </>

    )
  }
}

export default ClickCounterTwo  
