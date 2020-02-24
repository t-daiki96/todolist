import React from 'react'

import './css/todo.css'

export default props => {
  const status = props.done ? '済' : '未完了'
  const className = props.done ? 'done' : 'undone'

  return (
    <li class={className}>
      <span class='title'>{props.title}</span>
      <span
        onClick={() => props.toggleDone(props.id)}
        class='status'
      >
        {status}
      </span>
      <p>{props.desc}</p>
    </li>
  )
}
