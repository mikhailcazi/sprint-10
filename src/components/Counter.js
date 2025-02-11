import { useReducer, useState } from "react";

export function Counter() {
  const [state, dispatch] = useReducer(counterReducer, {
    color1: "red",
    color2: "blue",
  });

  return (
    <div>
      <p>{state.color1 + " " + state.color2}</p>
      <button onClick={() => dispatch("PURPLE")}>PURPLE</button>
      <button onClick={() => dispatch("ORANGE")}>ORANGE</button>
      <button onClick={() => dispatch("GREEN")}>GREEN</button>
    </div>
  );
}
