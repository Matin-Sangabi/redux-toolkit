import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import usersReducers from "./users/userSlice";
import todoReducer from "./todos/todosSlice";
export const store = configureStore({
  reducer: { counter: counterReducer, users: usersReducers, todos: todoReducer },
});
