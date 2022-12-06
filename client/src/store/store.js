import { configureStore } from "@reduxjs/toolkit";
import playlistSliceReducer from "./playListSlice";

export const store = configureStore({
  reducer: {
    playlist: playlistSliceReducer,
  },
});
