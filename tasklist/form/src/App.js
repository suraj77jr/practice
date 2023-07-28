import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const LOCAL_STORAGE_KEY = "tasks";
  // State to store contacts
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addTaskHandler = (task) => {
    console.log(task);
    setTasks([...tasks, { id: uuid(), ...task }]);
  };

  const removeTaskHandler = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTaskList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  // To persist data, should not be lost on refresh
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="ui container">
      
      <Header />
      <AddTask addTaskHandler={addTaskHandler} />
      <TaskList tasks={tasks} getTaskId={removeTaskHandler} />
    </div>
  );
}

export default App;