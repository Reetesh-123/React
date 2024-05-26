import React, { Component } from 'react'

 class UserGreeting extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn : false
     }
   }
  render() {
    //   let message;
    //   if(this.state.isLoggedIn)
    //   {
    //     message=<div>Welcome Reetesh</div>
    //   }
    //   else
    //   {
    //     message=<div>Welcome Guest</div>
    //   }
    //   return <>{message}</>
    
    return (


        this.state.isLoggedIn ? <div>Welcome Reetesh</div> : <div>Welcome Guest</div>
    )
  }
}

export default UserGreeting