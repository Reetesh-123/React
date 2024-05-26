import React from "react";
  
const UpdatedComponent=OriginalComponent=>{
    
     class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      clickhandler=()=>{
          this.setState(prevState=>{
              return {count: prevState.count+1}
          })
        }
    
      render() {
        console.log(this.props.count)
        return (
             <OriginalComponent count={this.state.count} clickhandler={this.clickhandler} />
        )
      }
    }
    return NewComponent
}
export default UpdatedComponent