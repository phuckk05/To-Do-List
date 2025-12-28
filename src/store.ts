import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from "./features/todo/homeSlice";

export const store = configureStore({
    reducer: {
        toDo: toDoReducer,
    },
});
export default store;