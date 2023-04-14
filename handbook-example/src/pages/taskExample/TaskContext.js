import { useReducer, createContext, useContext } from "react";

const TasksContext = createContext(null);
const TasksDispatch = createContext(null);
export function TasksProvider({ children }) {
  const [taskList, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <TasksContext.Provider value={taskList}>
      <TasksDispatch.Provider value={dispatch}>
        {children}
      </TasksDispatch.Provider>
    </TasksContext.Provider>
  );
}


export function useTasks(){
    return useContext(TasksContext)
}
export function useTasksDidpatch(){
    return useContext(TasksDispatch)
}

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


const initialTasks = [
  { id: 0, text: "哲学家之路", done: true },
  { id: 1, text: "参观寺庙", done: false },
  { id: 2, text: "喝抹茶", done: false },
];
