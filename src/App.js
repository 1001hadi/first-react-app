import {useState} from 'react' 
import { Todo } from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = (e) => { setNewTodo(e.target.value.trim()) };

  const addTask = () => {
    if(!newTodo) return;
    const tasks = {
      id: todos.length === 0 ? 1 : todos[todos.length -1].id +1,
      name: newTodo,
      completed: false
    };
    setTodos([...todos, tasks])
  };

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const completeTodo = (id) => setTodos(todos.map(todo => todo.id === id ? {...todo, completed:true} : todo))
  
  return (
    <div className="App">
      <div className='what'>What shoud be done Today?</div>
       <div className="addTask">
        <input placeholder='Enter your tasks...' onChange={handleAdd}/>
        <button onClick={addTask}>Add Todo</button>
       </div>
      <div className="list">{todos.map(todo =>{
        return(
          <Todo name={todo.name} id={todo.id} completed={todo.completed} deleteTodo={deleteTodo} completeTodo={completeTodo}/> 
        )})}</div>
    </div>
  );
}

export default App;
