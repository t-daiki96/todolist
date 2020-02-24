import React, { useState } from 'react';

import ToDoList from './ToDoList';
import Form from './Form';
import './css/app.css';

export default () => {
  const [todos, setTodos] = useState([])
  let [id, setId] = useState([])

  const addTodo = todo => {
    setTodos([...todos, { id, title: todo.title, desc: todo.desc, done: false }])
    setId(++id)
  }

  const toggleDone = id => {
    const i = todos.findIndex(todo => todo.id === id)
    const newTodos = todos.concat()
    newTodos[i].done = !todos[i].done
    setTodos(newTodos)
  }

  const deleteToDo = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
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
        deleteToDo={deleteToDo}
      />
    </div>
  );
}
