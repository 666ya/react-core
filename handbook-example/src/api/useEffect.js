const { useEffect, useState } = require("react");

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    console.log("子组件：没有依赖，每次都执行");
  });

  useEffect(() => {
    console.log("子组件：依赖count,改变才执行");
  }, [count]);
  console.log("子组件渲染");

  return (
    <div>
      UseEffect: {count}
      {isShow && (
        <button
          onClick={() => {
            setCount(1);
          }}
        >
          增加
        </button>
      )}
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {isShow ? "隐藏" : "显示"}
      </button>
    </div>
  );
};
export default UseEffect;
