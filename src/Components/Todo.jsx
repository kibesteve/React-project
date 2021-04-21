import React, {useEffect,useState} from  "react"
import {useParams} from "react-router-dom"
import {CircularProgress} from "@material-ui/core"
import axios from 'axios'

const Todo = ()=>{
    const {id} = useParams()
    console.log(id)
    return  <h1>{'THis is the Todo component with id: '+id}</h1>
}

export default Todo