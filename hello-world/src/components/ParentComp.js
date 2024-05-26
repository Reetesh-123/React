import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Reetesh'
      }
    }
    componentDidMount()
    {
        setInterval(() => {
            this.setState({
                name:'Reetesh'
            })
        }, 2000);
    }
  render() {
    console.log('************************Parent Component render*****************************');
    return (
        <>

            <div>ParentComp</div>
            <MemoComp name={this.state.name}/>
            {/* <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/> */}
        </>

    )
  }
}

export default ParentComp