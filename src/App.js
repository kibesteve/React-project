import './App.css';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Todos from './Components/Todos'
import Todo from './Components/Todo'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos />} />
          <Route path="/todo/:id" children={<Todo />} />
        </Switch>
      </Router>
    </div>
  );
}


