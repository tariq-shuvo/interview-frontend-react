import { createSlice } from '@reduxjs/toolkit';
import { addProductInfo, fetchAllProductInfo, fetchSingleProductInfo } from '../../util/productOperation';
// import { logout } from './authSlice';

const initialState = {
  products: [],
  loading: false,
  error: null,
  info: {}
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchAllProductInfo.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [fetchAllProductInfo.fulfilled]: (state, action) => {
        state.products = action.payload.data;
        state.loading = false;
    },
    [fetchAllProductInfo.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
    [fetchSingleProductInfo.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [fetchSingleProductInfo.fulfilled]: (state, action) => {
        state.info = action.payload;
        state.loading = false;
    },
    [fetchSingleProductInfo.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
    [addProductInfo.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [addProductInfo.fulfilled]: (state, action) => {
        state.info = action.payload;
        state.loading = false;
    },
    [addProductInfo.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;