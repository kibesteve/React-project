import React, {useEffect,useState} from  "react"
//import {useParams} from "react-router-dom"
import {CircularProgress} from "@material-ui/core"
import axios from 'axios'
import TodoCard from "./TodoCard"
//import "./styles.css"

const Todos = ()=>{

    const [todos, setTodo] = useState()

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            const responseTodos = res.data
            setTodo(responseTodos)
        })
    },[])
    console.log(todos)
    return (
    <>
        <logo /> 
        {
            todos ? 
                (
                <div style = {{display:"flex", flexWrap:"wrap"}} >
                    {todos.slice(0,10).map(todo=><TodoCard todo ={todo}/>)}
                </div>
                ) : < CircularProgress/>
        }
    </>
    )
}
export default Todos    