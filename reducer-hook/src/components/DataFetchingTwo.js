import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const IntialState={
    Loading : true,
    post: {},
    error : ''

}

const Reducer=(state,action)=>{
    switch(action.type)
    {
        case 'FETCH_SUCCESS':
            return {
                Loading : false,
                post : action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                Loading : false,
                post : {},
                error: 'Something went wrong'
            }
        default : return state
    }
}

function DataFetchingTwo() {

    const[state,dispatch]=useReducer(Reducer,IntialState)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
            dispatch({type: 'FETCH_SUCCESS',payload: res.data})
        })
        .catch(err=>{
            dispatch({type: 'FETCH_SUCCESS'})
        })
    },[])
  return (
    <>
        {
            state.Loading ? 'Loading' : state.post.title 
        }
        {
            state.error ? state.error : null
        }
    </>
  )
}

export default DataFetchingTwo