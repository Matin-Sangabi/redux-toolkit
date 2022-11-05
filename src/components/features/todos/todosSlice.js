import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodo = createAsyncThunk(
  "Todo/getAsyncTodo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addAsyncTodo = createAsyncThunk(
    "Todo/addAsyncTodo",
    async (payload, { rejectWithValue }) => {
      try {
        const response = await axios.post("http://localhost:3001/todos" , {
            id : Date.now(),
            title : payload.title,
            completed : false,
        });
        return response.data;
      } catch (error) {
        return rejectWithValue([], error);
      }
    }
  );
  export const toggleCompleteAsync = createAsyncThunk(
    "Todo/toggleCompleteAsync",
    async (payload, { rejectWithValue }) => {
      try {
        const response = await axios.put(`http://localhost:3001/todos/${payload.id}` , {
            id : payload.id,
            title : payload.title,
            completed : payload.completed,
        });
        return response.data;
      } catch (error) {
        return rejectWithValue([], error);
      }
    }
  );
  export const deleteAsyncTodo = createAsyncThunk(
    "Todo/deleteAsyncTodo",
    async (payload, { rejectWithValue }) => {
      try {
        await axios.delete(`http://localhost:3001/todos/${payload.id}`);
        return {id :payload.id}
      } catch (error) {
        return rejectWithValue([], error);
      }
    }
  );
const initialState = {
  loading: false,
  error: false,
  todos: [],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(getAsyncTodo.pending , (state ) =>{
        return { ...state, todos: [], loading: true, error: false }
    });
    builder.addCase(getAsyncTodo.rejected , (state , action) =>{
        return { ...state, todos: [], loading: false, error: action.payload.message };
    });
    builder.addCase(getAsyncTodo.fulfilled , (state , action) =>{
        return { ...state, todos: action.payload, loading: false, error: false };
    });
    builder.addCase(addAsyncTodo.fulfilled , (state , action) =>{
        state.todos.push(action.payload);
    });
    builder.addCase(toggleCompleteAsync.fulfilled , (state , action) =>{
        const selectedTodo = state.todos.find(t => t.id === action.payload.id);
        selectedTodo.completed = action.payload.completed
    });
    builder.addCase(deleteAsyncTodo.fulfilled , (state , action) =>{
        const deleteTodo = state.todos.filter(t => t.id !== action.payload.id);
        state.todos = deleteTodo;
    });
  },
});


export default todoSlice.reducer;
