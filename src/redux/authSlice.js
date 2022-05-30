import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  userid: null,
  username: null,
  access: null,
  refresh: null,
  value:0,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.value += 1
      // console.log("action.payload","action");
      // state.userid = action.payload.userid;
      // state.username = action.payload.username;
      // state.access = action.payload.access;
      // state.refresh = action.payload.refresh;
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      console.log("valus", action.payload)
      state.value += action.payload
    },
  },
});

export const { increment, decrement, incrementByAmount , authenticate} = authSlice.actions;

export default authSlice.reducer;
