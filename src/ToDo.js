import React from 'react'

import './css/todo.css'

export default props => {
  const status = props.done ? 'return' : 'done'
  const className = props.done ? 'done' : 'undone'

  return (
    <li className={className}>
      <span className='title'>{props.title}</span><br />
      <p>{props.desc}</p>
      <span
        onClick={() => props.toggleDone(props.id)}
        className='status'
      >
        {status}
      </span>
      <span
        onClick={() => props.deleteToDo(props.id)}
        className='delete'
      >
        delete
      </span>
    </li>
  )
}
