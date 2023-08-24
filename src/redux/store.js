import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";
import loginTokenReduser from "./slice/logintokenslice";
import scrollpagination from "./slice/scrollpagination";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    login: loginTokenReduser,
    scrolldata: scrollpagination,
  },
});
