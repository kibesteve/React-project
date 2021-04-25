import React from  "react"
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from 'axios'
import { CircularProgress } from "@material-ui/core"


const Todo = ()=>{
    const {id} = useParams()

    const [todoDetails, setTodoDetails] = useState()

    useEffect((id) =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/'+id)
        .then((res)=>{
            const responseTodo = res.data
            setTodoDetails(responseTodo)
        })
    },[])
    console.log(todoDetails)
    const {userId,title,completed} = todoDetails || {}
    return  (
        <div>
            {todoDetails? (
            <div>
                <h1>{'Todo id: '+id}</h1>
                <h1>{'Todo Title: '+title}</h1>
                <h1>{'Todo userid: '+userId}</h1>
                <h1>{'Completed: '+completed}</h1>
            </div>): (<CircularProgress />)
            }
            
        </div>)
}

export default Todo