import { createSlice } from "@reduxjs/toolkit";

const charSlice = createSlice({
  name: "char_Slice",
  initialState: {
    head: 0,
    torso: 0,
    shoes: 0,
  },
  reducers: {
    changeHead(state, action) {
      let newVal;
      if (action.payload === "inc") {
        newVal = state.head === 2 ? 0 : state.head + 1;
      } else {
        newVal = state.head === 0 ? 2 : state.head - 1;
      }
      state.head = newVal;
    },
    changeTorso(state, action) {
      let newVal;
      if (action.payload === "inc") {
        newVal = state.torso === 2 ? 0 : state.torso + 1;
      } else {
        newVal = state.torso === 0 ? 2 : state.torso - 1;
      }
      state.torso = newVal;
    },
    changeShoes(state, action) {
      let newVal;
      if (action.payload === "inc") {
        newVal = state.shoes === 2 ? 0 : state.shoes + 1;
      } else {
        newVal = state.shoes === 0 ? 2 : state.shoes - 1;
      }
      state.shoes = newVal;
    },
  },
});

export default charSlice.reducer;
export const { changeHead, changeTorso, changeShoes } = charSlice.actions;
