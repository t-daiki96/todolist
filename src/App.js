import React, { useState } from 'react';

import ToDoList from './ToDoList';
import Form from './Form';
import './css/app.css';

export default () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: todos.length + 1, title: todo.title, desc: todo.desc, done: false }])
  }

  const toggleDone = id => {
    const i = todos.findIndex(todo => todo.id === id)
    const newTodos = todos.concat()
    newTodos[i].done = !todos[i].done
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <Form
        addTodo={addTodo}
      />
      <ToDoList
        todos={todos}
        toggleDone={toggleDone}
      />
    </div>
  );
}
