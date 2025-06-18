import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { FetchTodos } from './Components/Todos'


function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const data = await res.json();
        setTodos(data);
      })
      .catch((err) => {
        console.error("Failed to fetch todos:", err);
      });
  }, []);

  return (
    <div>

      <CreateTodo setTodos={setTodos} />
      <FetchTodos todos={todos} setTodos={setTodos} ></FetchTodos>
    </div>
  )
}

export default App

