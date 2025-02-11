import { useReducer, useState } from "react";
import { tasksReducer } from "../state/tasksReducer";

export function ToDo() {
  const initialTasks = [
    { id: 1, priority: "high", task: "wash dishes" },
    { id: 2, priority: "low", task: "wash clothes" },
  ];

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <>
      <div>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                {task.id}: {task.task}
              </li>
            );
          })}
        </ul>

        <button onClick={() => dispatch({ type: "ADD_TASK" })}>ADD Task</button>
        <button onClick={() => dispatch({ type: "DELETE_TASK" })}>
          DELETE task
        </button>
      </div>
    </>
  );
}
