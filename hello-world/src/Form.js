import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username :'',
         Comment : '',
         topic : 'react'
      }
    }
    changeHandlerUsername=event=>{
        this.setState({
            username : event.target.value
        })
    }  
    changeHandlerComment=event=>{
        this.setState({
            Comment : event.target.value
        })
    }
    changeHandlerTopic=event=>{
        this.setState({
            topic : event.target.value
        })
    }
    handlerSubmit=event=>{
        alert(`${this.state.username} ${this.state.Comment} ${this.state.topic}`)
        event.preventDefault();
    }
  render() {
    
    return (
        <>

            <div>Form Component</div>
            <br />
            <form onSubmit={this.handlerSubmit} >
                    <div>

                    <label> UserName</label>
                    <input type='text' value={this.state.username} onChange={this.changeHandlerUsername}/>
                    </div>

                    <div>
                    <label> Comments</label>
                    <input type='text' value={this.state.Comment} onChange={this.changeHandlerComment}/>
                    </div>

                    <div>
                        <select value={this.state.topic} onChange={this.changeHandlerTopic} >
                            <option value="react">React</option>
                            <option value="vue">Angular</option>
                            <option value="vue">vue</option>
                        </select>
                    </div>
                    <button type='submit'> Submit</button>
            </form>
        </>
    )
  }
}

export default Form