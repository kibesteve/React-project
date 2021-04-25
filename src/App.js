import './App.css';
import {useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Todos from './Components/Todos'
import Todo from './Components/Todo'
import Counter from './Components/Counter'
import {useDispatch} from 'react-redux'
import {getUser} from './Redux/Ducks/userSlice'
import axios from 'axios';

export default function App() {
  const {count} = useSelector(state=>state.counter)
  const users = ['Bella Foo', "Steve Jobs", "Anna Ball"] 
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
 
const user = useSelector((state)=>state.user.user.payload.firstname)

// const [user,setUser] = useState(undefined)
// useEffect(() =>{
//   axios.get('http://localhost:8080/user').then((res)=>{
//     const responseUser= res.data
//     setUser(responseUser)

//   })
// },[])

console.log(user)

  return (
    <div className="App">
      { 
      user && <p>Hello, {user} your total votes is: {count} </p>
      }

      {users.map(user=>{
        return (<Counter name={user}></Counter>)
      })}
      
      <Router>
        <Switch>
          <Route exact path="/todos" children={<Todos />} />
          <Route path="/todo/:id" children={<Todo />} />
        </Switch>
      </Router>

    </div>
  ); 
}


