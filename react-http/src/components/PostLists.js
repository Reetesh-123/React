import React, { Component } from 'react'
import axios from 'axios'

export class PostLists extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: []
    }
  }
  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/posts')

    // then accept arrow function as an argument which give us access to the response
    .then(response=>{
        console.log(response)
        this.setState({
            posts: response.data 
        })
    })
    .catch(error=>{
        console.log(error);
    })
  }
  render() {
    const {posts}=this.state
    return (
        <>
            <div>PostLists</div>
            {
                posts.length ?
                posts.map(post=><div key={post.id}> {post.title}</div>) :null
            }
        </>

    )
  }
}

export default PostLists