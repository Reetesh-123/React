import React, { Component } from 'react'

 class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    countHandler=()=>{
       this.setState({
        count: this.state.count+1
       })
    }
  render() {
    return (
     <button onClick={this.countHandler}>Counted {this.state.count} times</button>
    )
  }
}

export default ClassCounter