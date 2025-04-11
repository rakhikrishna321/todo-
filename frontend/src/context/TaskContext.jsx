import { createContext, useState } from 'react';

// Create a context
export const TaskContext = createContext();

// Provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Pass everything needed to context consumers
  return (
    <TaskContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
