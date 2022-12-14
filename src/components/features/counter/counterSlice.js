import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  numOfCakes : 20,
};
//*Redux Toolkit allows us to write "mutating" logic in reducers. It
//* doesn't actually mutate the state because it uses the Immer library,
//* which detects changes to a "draft state" and produces a brand new
//* immutable state based off those changes


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount : (state , action) =>{
      state.numOfCakes -= action.payload
    },
    buyCake : (state) =>{
      state.numOfCakes -= 1;
    }
  },
});

export const {increment , decrement , incrementByAmount , buyCake} = counterSlice.actions

export default counterSlice.reducer