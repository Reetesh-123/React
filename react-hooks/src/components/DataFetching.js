import React, {useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [post, setPost] = useState([]) 
    const [id, setId] = useState(1)
    const [IdFromButtonclick, setIdFromButtonclick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${IdFromButtonclick}`)
        .then(res=>{
          console.log(res)
          setPost(res.data)
        })
        .catch(err=>{
          console.log(err);
        })
    },[IdFromButtonclick])

    const Idhandler=()=>{
      setIdFromButtonclick(id);
    }

  return (
    <div>
    <input type="text" value={id} onChange={e=>{setId(e.target.value)}} />
    <button  onClick={Idhandler}>Fetch Data</button>
      {post.title}
      {/* <ul>
        {posts.map(post=><li id={post.id}>{post.title}</li>)}
      </ul>  */}
    </div>
  )
}

export default DataFetching