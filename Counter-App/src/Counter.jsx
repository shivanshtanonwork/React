import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  let incCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  let decCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={incCount}>Inc Count</button>
      <button onClick={decCount}>Dec Count</button>
    </div>
  );
}
