import React from "react";
import { TasksProvider } from "./TaskContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./style.css";
export default function TaskApp(second) {
  return (
    <>
      <TasksProvider>
        <h1> 在京都休息的一天 </h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}
