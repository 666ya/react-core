import {  useState } from "react";

export default function TaskList({onChangeTask,onDeleteTask,taskList}) {
  return (
    <ul className="taskList">
      {taskList.map((item) => (
        <li key={item.id}>
          <Task task={item} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  let taskContent;
  if (isEdit) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            onChange({
              ...task,
              text: e.target.value,
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
        defaultChecked={task.done}
        onChange={() =>
            onChange({
            ...task,
            done: !task.done,
          })
        }
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>删除</button>
    </label>
  );
}
