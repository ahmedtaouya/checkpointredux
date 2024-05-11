import React from 'react'
import Task from './Task';

const ListTask = ({ tasks, toggleDone, deleteTask }) => {
    return (
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleDone={toggleDone}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    );
  };

export default ListTask
