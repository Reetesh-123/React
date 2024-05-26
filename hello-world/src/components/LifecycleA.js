import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Reetesh'
      }
      console.log('Lifecycle A Constructor')
    }
   
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    componentDidMount()
    {
        console.log('Lifecycle A componentDidMount');

    }
    shouldComponentUpdate()
    {
        console.log('Lifecycle A shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate()
    { 
        console.log('Lifecycle A getSnapshotBeforeUpdate' )
        return null;
    }
    componentDidUpdate()
    {
        console.log('Lifecycle A componentDidUpdate' )

    }
    changeState=()=>
    {
        this.setState(
            {
                name : 'Reetesh Kumar'
            }
        )
    }
  render() {
    console.log('Lifecycle A render')
    return (
        <>
            <div>LifceCycle A</div>
            <button onClick={this.state.changeState}> Change State</button>
            <LifecycleB/>
        </>
    )
  }
}

export default LifecycleA