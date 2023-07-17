import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "./store/reducers/chapters";

const store = configureStore({
    reducer: { 
        chapters: chaptersReducer,
    },
});

export default store;