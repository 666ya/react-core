import React, { useState } from "react";
import TodoList from "./todoList";
import "./index.css";
let list = [];
for (let i = 1; i < 10; i++) {
  list.push({
    name: `list${i}`,
    tab: i,
  });
}
export default function App() {
  const [tab, setTab] = useState(1);
  const [title, setTitle] = useState("test");
  const handleClick = () => {
    const value = Math.floor(Math.random() * 10);
    setTab(value);
  };
  console.log(list);
  return (
    <div>
      <TodoList list={list} tab={tab} title={title} />
      <div className="footer">
        <button onClick={() => handleClick()}>随机list</button>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
    </div>
  );
}
