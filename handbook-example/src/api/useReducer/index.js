import React, { useReducer } from "react";
function reducer(state, action) {
  console.log("reducer");
  if (action.type === "add") {
    console.log("add");
    return ++state;
  }
}
function init(data) {
  console.log("init");
  return data.age;
}

export default function App() {
  // const [state, dispatch] = useReducer(reducer, init({ age: 24 })); //每次渲染都会触发init
  const [state, dispatch] = useReducer(reducer, { age: 24 }, init); // 只触发一次init
  const handleClick = () => {
    const action = {
      type: "add",
    };
    dispatch(action);
    console.log(state);
    const nextState = reducer(state, action);
    console.log(nextState);
  };
  return (
    <div>
      {state}
      <button onClick={handleClick}>增加</button>
    </div>
  );
}
