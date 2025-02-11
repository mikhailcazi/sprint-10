import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name_slice",
  initialState: {
    name: "Roman",
  },
  reducers: {
    changeName(state) {
      state.name = (Math.random() + 1).toString(36).substring(7);
    },
  },
});

export default nameSlice.reducer;
export const { changeName } = nameSlice.actions;
