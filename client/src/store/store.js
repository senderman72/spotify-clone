import { configureStore } from "@reduxjs/toolkit";
import playlistSliceReducer from "./playListSlice";
import playerReducer from "./playerSlice";

export const store = configureStore({
  reducer: {
    playlist: playlistSliceReducer,
    player: playerReducer,
  },
});
