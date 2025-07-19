import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); //initialization
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
      <button onClick={() => setCount(count - 1)}>Dec Count</button>
    </div>
  );
}
