import React,{Component} from 'react'

class Message extends Component{
    constructor()
    {
        super();
        this.state={
            Message:'Welcome Visitors'
        }
    }
    changeMessage()
    {
        this.setState({
            Message:'Thank You for subscribing'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <botton onClick={()=>{this.changeMessage()}}>Subscribe</botton>

            </div>
        )
    }
}
export default Message