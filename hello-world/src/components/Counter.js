import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increament()
    {
        // this.setState({
        //     count : this.state.count + 1 
        // },
        // // Using callback due to asynch nature of js
        // ()=>{
        //     console.log(this.state.count)
        // }
        // )
        
        // React combine all the increment and give wrong result ie we pass prevstate in setState method

        this.setState(prevState=>({
            count : prevState.count+1
        })
            
        )

    }
    increamentFive()
    {
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        this.increament();
    }
  render() {
    return (
        <>
             <div> {this.state.count}</div>

              <button onClick={()=>{this.increamentFive()}}>Increase</button>
        </>
    )
  }
}
