export function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        id: state.length + 1,
        priority: "medium",
        task: "walk the dog",
      };
      return [...state, newTask];
    case "DELETE_TASK":
      return state.slice(0, state.length - 2);
    default:
      return state;
  }
}
