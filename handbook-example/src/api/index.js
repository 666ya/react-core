import { useState } from "react";
import UseEffect from "./useEffect";
import ChatRoom from "./chatRoom";
const ApiApp = () => {
  const [count, setCount] = useState(0);
  console.log("父组件渲染");
  return (
    <div>
      <p>
        父组件次数：{count}
        <button onClick={() => setCount((prev) => ++prev)}>增加</button>
      </p>

      <div>
        <UseEffect />
      </div>
      <div>
        <ChatRoom />
      </div>
    </div>
  );
};
export default ApiApp;
