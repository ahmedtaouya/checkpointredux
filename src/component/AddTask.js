import React, { useState } from 'react'

const AddTask = ({ addTask }) => {
    const [description, setDescription] = useState('');
  
    const handleAddTask = () => {
      if (description.trim()) {
        addTask({
          id: new Date().getTime(),
          description: description,
          isDone: false
        });
        setDescription('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  };

export default AddTask
