import React, { Component } from 'react'
import ClickCounterTwo from './ClickCounterTwo'

class Counters extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      IncrementCount=()=>{
          this.setState((prevState)=>{
              return {count: prevState.count+1}
          })
      }
  render() {
    return (
                <>
                    {this.props.render(this.state.count,this.IncrementCount)}
                </>
    )
  }
}

export default Counters