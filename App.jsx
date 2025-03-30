import React, { useState } from "react";
import Header from "./component/Header";
import ToDoList from "./component/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: false },
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    }
  };

  // Function to mark a task as completed
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to edit an existing task
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header />
      <ToDoList tasks={tasks} addTask={addTask} toggleTask={toggleTask} removeTask={removeTask} editTask={editTask} />
    </div>
  );
};

export default App;