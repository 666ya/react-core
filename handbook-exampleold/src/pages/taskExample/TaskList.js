
import {  useState } from "react";
import { useTasks, useTasksDidpatch } from "./TaskContext";
export default function TaskList() {
   const taskList = useTasks()
    return (
      <ul className="taskList">
        {taskList.map((item) => (
          <li key={item.id}>
            <Task task={item}  />
          </li>
        ))}
      </ul>
    );
  }

  function Task({ task}) {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useTasksDidpatch()
    let taskContent;
    if (isEdit) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={(e) =>
              dispatch({
                type: 'change',
                task: {
                 ...task,
                 text: e.target.value,
                }
             })
            }
          />
          <button onClick={() => setIsEdit(false)}>保存</button>
        </>
      );
    } else {
      taskContent = (
        <>
          {task.text}
          <button onClick={() => setIsEdit(true)}>编辑</button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() =>
              dispatch({
               type: 'change',
               task: {
                ...task,
                done: !task.done,
               }
            })
          }
        />
        {taskContent}
        <button onClick={() => dispatch({
          type: 'delete',
          id: task.id
        })}>删除</button>
      </label>
    );
  }