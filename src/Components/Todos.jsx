import React, {useEffect,useState} from  "react"
//import {useParams} from "react-router-dom"
import {CircularProgress} from "@material-ui/core"
import axios from 'axios'

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
    <>{todos ? (<h1>This is the Todos component</h1>
    ) : < CircularProgress/>}
    </>
    )
}
export default Todos    