import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {increment,decrement,test} from '../Redux/Ducks/counterSlice'


const Counter =(props) =>{
    const {name} = props
    const [count,setCounter] = useState(0)

    const dispatch = useDispatch()

    const incr = ()=>{
        dispatch(increment())
        setCounter(count+1)
    }  
    const decr = ()=>{
        dispatch(decrement())
        setCounter(count-1)
    }  

    return (
        <div style = {{backgroundColor: "grey",margin: "10px"}}>
            <h3>{"Count:" + count }</h3>
            <h1>{name}</h1>
            <div style = {{display: "flex",justifyContent: "center"}}>
                <button onClick={incr}>Increment</button>
                <button onClick={decr}>Decrement</button>
                <button onClick={()=>dispatch(test({testValue:2}))}>Test</button>
            </div>
        </div>
    )
}
export default Counter