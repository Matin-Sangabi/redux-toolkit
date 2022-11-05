import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import usersReducers from './users/userSlice';

export const store = configureStore({
  reducer: {counter : counterReducer , users : usersReducers },
});
