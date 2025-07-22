import { useState } from "react";

export default function LudoBoard() {
  const [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    red: 0,
    hotpink: 0,
  });

  let incColor = (color) => {
    setMoves((prevMoves) => {
      return {
        ...prevMoves,
        [color]: prevMoves[color] + 1,
      };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div>
        <p>Blue : {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => incColor("blue")}
        >
          +1
        </button>
        <p>Yellow : {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => incColor("yellow")}
        >
          +1
        </button>
        <p>Red : {moves.red}</p>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => incColor("red")}
        >
          +1
        </button>
        <p>Hotpink : {moves.hotpink}</p>
        <button
          style={{ backgroundColor: "hotpink" }}
          onClick={() => incColor("hotpink")}
        >
          +1
        </button>
      </div>
    </div>
  );
}
