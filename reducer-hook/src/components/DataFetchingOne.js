import React ,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [Loading, setLoading] = useState(true)
    const [post, setpost] = useState({})    
    const [error, setError] = useState('') 
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
            setLoading(false);
            setpost(res.data);
        })
        .catch(err=>{
            setError(err);
        })
    },[])
  return (
        <>
                {
                    Loading ? 'Loading' : post.title 
                }
                {
                    error ? error : null
                }
        </>
  )
}

export default DataFetchingOne