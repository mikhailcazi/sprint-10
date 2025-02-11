import { createSlice } from "@reduxjs/toolkit";

const antSlice = createSlice({
  name: "ant_slice",
  initialState: [
    { name: "Ant1", lifePoints: 10 },
    { name: "Ant2", lifePoints: 8 },
  ],
  reducers: {
    eat(state, action) {
      const ant = state.find((ant) => ant.name === action.payload);
      if (ant) {
        ant.lifePoints += 5;
      }
    },

    work(state, action) {
      const ant = state.find((ant) => ant.name === action.payload);
      if (ant) {
        ant.lifePoints -= 2;
        if (ant.lifePoints < 0) {
          return state.filter((ant) => ant.name != action.payload);
        }
      }
    },
  },
});

export default antSlice.reducer;
export const { eat, work } = antSlice.actions;
