import React, { Component } from 'react'

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0 ,
       name : ''
    }
  }
  componentDidMount()
  {
    document.title=`You clicked ${this.state.count} times`
  }
  componentDidUpdate(prevProps,prevState)
  {
    if(prevState.count!==(this.state.count))
    {
      console.log('Updated document title');
      document.title=`You clicked ${this.state.count} times`
    }
  }
  
    ChangeHandler=()=>{
    this.setState(prevState=>{
        return {count: prevState.count+1}
    })
  }
  render() {
    return (
      <>
      <input type="text" value={this.name} onChange={e=>{this.setState({name: e.target.value})}} />
      <button onClick={this.ChangeHandler}>clicked {this.state.count} times</button>
      </>
    )
  }
}

export default ClassCounterOne