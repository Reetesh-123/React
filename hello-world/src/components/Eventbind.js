import React, { Component } from 'react'

export class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
        }
        // 3.
        // this.handler=this.handler.bind(this).
    }


    // 1.
    // this will not work because this is undefined in handler so we bind 
    // handler()
    // {
    //     this.setState({
    //         message : 'Congrats'
    //     })
    // }

    // 2. After binding the 'this'
    handler()
    {
        this.setState({
            message : 'Congrats'
        })
    }




  render() {
    return (
        <div>
                <div>{this.state.message}</div>

                {/* Using binding */}
                {/* <button onClick={this.handler.bind(this)}>Click Me</button> */}

                {/*  Using arrow function */}
                <button onClick={()=>{this.handler()}}>Click Me</button>

                {/* Constructor Binding */}
                {/* <button onClick={this.handler}>Click Me</button> */}


        </div>
    )
  }
}

export default Eventbind    