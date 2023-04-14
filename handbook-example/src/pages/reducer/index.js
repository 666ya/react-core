import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./style.css";

function taskReducer(taskList, action) {
  switch (action.type) {
    case "add": {
      return [
        ...taskList,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "change": {
      return taskList.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        } else {
          return item;
        }
      });
    }
    case "delete": {
      return taskList.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("未知操作" + action.type);
    }
  }
}

let nextId = 3;
const initialTasks =  [
    {
      id: 0,
      text: "参观卡夫卡博物馆",
      done: true,
    },
    {
      id: 1,
      text: "看木偶戏",
      done: false,
    },
    {
      id: 2,
      text: "列侬墙图片",
      done: false,
    },
  ]
export default function TaskApp() {
  const [taskList, dispatch] = useReducer(taskReducer,initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "add",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "change",
      task: task,
    });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "delete",
      id: id,
    });
  }
  return (
    <>
      <h1> 布拉格行程 </h1> <AddTask onAddTask={handleAddTask} />
      <TaskList
        taskList={taskList}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
