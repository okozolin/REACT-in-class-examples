import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "shows",
  initialState: [],
  reducers: {
    updateShows: (state, action) => {
      return action.payload;
    }
  }
});

export const { updateShows } = slice.actions;
export default slice.reducer;
