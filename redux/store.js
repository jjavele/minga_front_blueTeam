import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "../redux/reducers/chapters";

const store = configureStore({
    reducer: { 
        chapters: chaptersReducer,
    },
});

export default store;