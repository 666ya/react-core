import React, { memo, useMemo } from "react";

export default function TodoList({ list, tab, title }) {
  console.time("log time");
  const memoList = useMemo(() => {
    console.log("useMemo：依赖项改变后会计算");
    return list.filter((item) => {
      return item.tab != tab;
    });
  }, [list, tab]);
  //title改变会每次都计算
  const filterList = list.filter((item) => {
    return item.tab !== tab;
  });
  console.timeEnd("log time");
  return (
    <ul>
      <h1>{title}</h1>
      {memoList.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
