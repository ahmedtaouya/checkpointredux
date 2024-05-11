import React from 'react'

const Task = ({ task, toggleDone, deleteTask }) => {
    const { id, description, isDone } = task;
  
    return (
      <div>
        <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
          {description}
        </span>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => toggleDone(id)}
        />
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
    );
  };

export default Task
