import React from 'react';

import ToDo from './ToDo';

export default props => {
  return (
    <ul>
      {props.todos.map(todo =>
        <ToDo
          key={todo.id}
          {...todo}
          toggleDone={props.toggleDone}
          deleteToDo={props.deleteToDo}
        />
      )}
    </ul>
  )
}
