import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car_slice",
  initialState: {
    speed: 200,
    isTopLane: true,
  },

  reducers: {
    accelerate(state) {
      state.speed += 10;
    },

    decelerate(state) {
      state.speed -= 10;
    },

    changeLane(state) {
      state.isTopLane = !state.isTopLane;
    },
  },
});

export default carSlice.reducer;
export const { accelerate, decelerate, changeLane } = carSlice.actions;
