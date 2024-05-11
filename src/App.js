
import React ,{ useState } from 'react';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask addTask={addTask} />
      <ListTask tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
