import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eat, work } from "../../state/antSlice";

export default function AntFarm() {
  const ants = useSelector((state) => state.ant);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Ant Farm</h1>
      <ul>
        {ants.map((ant) => (
          <li key={ant.name}>
            {ant.name} - Life Points: {ant.lifePoints}
            <button onClick={() => dispatch(eat(ant.name))}>Eat</button>
            <button onClick={() => dispatch(work(ant.name))}>Work</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
