import { useState, useEffect } from 'react'
import './App.css';
import List from './components/List';
import Form from './components/Form';
function App() {

  const getSessionTodo = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  const [todos, setTodos] = useState(
    getSessionTodo('todos', [])
  );

  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {

    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  const completeTodo = (newTodo, index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, newTodo)
    setTodos(newTodos);
  }

  return (
    <div className="App mt-5">
      <Form className="" addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
