import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    FETCH_USER_REQUEST: (state) => {
      state.loading = true;
      state.error = false;
      state.users = [];
    },
    FETCH_USER_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.users = [];
    },
    FETCH_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = false;
      state.users = action.payload;
    },
  },
});

const { FETCH_USER_REQUEST, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } =
  userSlice.actions;

export function fetchUsers() {
  return (dispatch) => {
    dispatch(FETCH_USER_REQUEST());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {dispatch(FETCH_USER_SUCCESS(res.data))})
      .catch((err) => dispatch(FETCH_USER_FAILURE(err.message)));
  };
}

export default userSlice.reducer;