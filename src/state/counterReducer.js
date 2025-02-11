function counterReducer(state, action) {
  switch (action) {
    case "PURPLE":
      return {
        color1: "red",
        color2: "blue",
      };
    case "ORANGE":
      return {
        color1: "red",
        color2: "yellow",
      };
    case "GREEN":
      return {
        color1: "yellow",
        color2: "blue",
      };
    default:
      return state;
  }
}
