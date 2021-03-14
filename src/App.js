import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(t => t.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(t => t.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  useEffect(() =>{
    filterHandler()
  }, [todos, status])

  return (
    <div>
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
