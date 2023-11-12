import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
   <center>
      <div className="App">
        <h1>React To-Do List</h1>
        <div className="task-container">
          <div className="task-input">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
            />
            <button className='btn' onClick={addTask}>Add</button>
          </div>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button className='btn' onClick={() => removeTask(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
   </center>
  );
};

export default App;
