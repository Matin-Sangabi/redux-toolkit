import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //todo => create object :
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find((t) => t.id === action.payload.id);
      selectedTodo.completed = !selectedTodo.completed; //!toggle
    },
    deleteTodo: (state, action) => {
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      state.todos = filterTodo;
    },
    FETCH_TODO_SUCCESS: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, FETCH_TODO_SUCCESS } =
  todoSlice.actions;

export function fetchTodos() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/todos")
      .then((res) => dispatch(FETCH_TODO_SUCCESS(res.data)))
      .catch((err) => console.log(err.message));
  };
}
export default todoSlice.reducer;
