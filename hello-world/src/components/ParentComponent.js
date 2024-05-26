import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname : 'parent'
        }
        this.GreetParent=this.GreetParent.bind(this)
    }
    GreetParent(childName)
    {
        alert(`Greet ${this.state.parentname} by ${childName}`);        
    }
  render() {
    return (
            <ChildComponent greetHandler={this.GreetParent}/>
    )
  }
}

export default ParentComponent