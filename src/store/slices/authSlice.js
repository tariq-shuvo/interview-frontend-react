import { createSlice } from '@reduxjs/toolkit';
import { fetchUserInfoData, loginUserData, logoutUserData, registerUserData } from '../../util/authUser';

const initialState = {
  isLoggedIn: false,
  user: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchUserInfoData.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [fetchUserInfoData.fulfilled]: (state, action) => {
        if(action.payload?.success){
          state.user = action.payload.data;
          state.isLoggedIn = true;
        }else{
          state.user = {};
          state.isLoggedIn = false;
        }
        state.loading = false;
    },
    [fetchUserInfoData.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
    [registerUserData.pending]: (state, action) => {
        state.loading = true;
        state.error = null;
    },
    [registerUserData.fulfilled]: (state, action) => {
        state.user = action.payload;
        state.loading = false;
    },
    [registerUserData.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
    [loginUserData.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [loginUserData.fulfilled]: (state, action) => {
        if(action.payload?.success){
          state.isLoggedIn = true
        }else{
          state.isLoggedIn = false
        }
        state.user = action.payload
        state.loading = false;
    },
    [loginUserData.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
    [logoutUserData.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [logoutUserData.fulfilled]: (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = {};
    },
    [logoutUserData.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
  },
});

export const { } = authSlice.actions;

export default authSlice.reducer;