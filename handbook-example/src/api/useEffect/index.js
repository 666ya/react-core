import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const request = function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2);
        }, 2000);
      });
    };
    request().then((res) => {
      setCount((count) => res * count);
    });
    // return () => {
    //   console.log("clean up");
    //   clearTimeout(timeId);
    // };
    // function request() {
    //   return {
    //     name: "1",
    //   };
    // }
    // console.log("useEffect");
    // const res = request();
    // console.log(res.name);
    // funciton
  }, []);
  return (
    <div>
      {count}
      {/* <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      /> */}
    </div>
  );
}
