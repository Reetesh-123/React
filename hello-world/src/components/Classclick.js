import React, { Component } from 'react'

export class Classclick extends Component {
     clickhandler() {
        console.log("clicked");
    }
  render() {
    return (
      <button onClick={this.clickhandler}>Click Me</button>
    )
  }
}

export default Classclick