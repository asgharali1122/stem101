import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authAPI from '../sevices/auth_API';

const initialState = {
  userid: null,
  username: null,
  access: null,
  refresh: null,
  user: {},
  userRequestStatus: '',
  token: '',
  userProfile: {},
  userEntity: {},
  userEntityRequestStatus: '',
};

const getUserProfileAsync = createAsyncThunk(
  'auth/getUserProfile',
  async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      return initialState;
    },
    updateAuthUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: {
    [getUserProfileAsync.pending]: (state) => {
      state.userProfileRequestStatus = 'pending';
    },
    [getUserProfileAsync.rejected]: (state, action) => {
      state.userProfileRequestStatus = 'rejected';
    },
    [getUserProfileAsync.fulfilled]: (state, action) => {
      state.userProfileRequestStatus = 'fulfilled';
      state.userProfile = action?.payload;
    },
  },
});

export const { login, logout, setUser, updateAuthUser } = authSlice.actions;
export { getUserProfileAsync }; 
export default authSlice.reducer;
