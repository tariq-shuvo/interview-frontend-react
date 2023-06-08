import { createSlice } from '@reduxjs/toolkit';
import { fetchUserInfoData, loginUserData, registerUserData } from '../../util/authUser';

const initialState = {
  isLoggedIn: true,
  user: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action){
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: {
    [fetchUserInfoData.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [fetchUserInfoData.fulfilled]: (state, action) => {
        state.user = action.payload;
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
        state.user = action.payload;
        state.loading = false;
    },
    [loginUserData.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;