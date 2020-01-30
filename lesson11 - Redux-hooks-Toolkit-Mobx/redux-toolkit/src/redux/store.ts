import { configureStore } from "@reduxjs/toolkit";
import ShowsReducer from "./showsSlice";

const store = configureStore({
  reducer: {
    shows: ShowsReducer
  }
});

export default store;
