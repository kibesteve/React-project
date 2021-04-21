import React from "react"
import {useHistory} from "react-router-dom"

const TodoCard = (props)=>{
    const {todo} = props
    const {id,title,completed} =todo
    let history = useHistory
        return(
            <div 
                key={id} style={{
                    backgroundColor: "grey",
                    margin:"10px",
                    padding: "10px",
                    width: "150px"}} onClick={()=> history.push('/todos/'+id)}>
                <h4>{title}</h4>
                <h6>{'Completed: '+ completed }</h6>
            </div>
        )
}
export default TodoCard