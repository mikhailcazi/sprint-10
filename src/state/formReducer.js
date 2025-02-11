export function formReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
}
