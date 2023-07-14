import { configureStore } from "@reduxjs/toolkit";
import mangaReducer  from "./reducers/mangas";

export const store = configureStore({
  reducer:mangaReducer,
});
