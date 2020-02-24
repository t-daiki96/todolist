import React, { useState } from 'react';

import './css/form.css'

export default props => {
  const initialTitle = ''
  const initialDesc = ''
  const [title, setTitle] = useState(initialTitle)
  const [desc, setDesc] = useState(initialDesc);

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodo({ title, desc })
    setTitle(initialTitle)
    setDesc(initialDesc)
  }

  return (
    <div class='form'>
      <span>title</span><br />
      <input name='title' type='text' value={title} onChange={e => setTitle(e.target.value)} /><br />
      <span>desc</span><br />
      <textarea name='desc' value={desc} onChange={e => setDesc(e.target.value)}></textarea><br />
      <button onClick={handleSubmit}>todoを作成</button>
    </div>
  )
}
