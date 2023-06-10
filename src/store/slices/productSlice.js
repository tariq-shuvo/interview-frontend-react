import { createSlice } from '@reduxjs/toolkit';
import { addProductInfo, deleteBatchProductInfo, deleteProductInfo, fetchAllProductInfo, fetchSingleProductInfo, updateProductInfo } from '../../util/productOperation';

const initialState = {
  products: [],
  loading: false,
  error: null,
  operation: {},
  info: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeOperationalInfo(state, action){
        state.operation = {} 
    }
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
        state.operation = action.payload;
        if(action.payload.success){
            state.products.push(action.payload.data);
        }
        state.loading = false;
    },
    [addProductInfo.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
    [updateProductInfo.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [updateProductInfo.fulfilled]: (state, action) => {
        state.operation = action.payload;
        if(action.payload.success){
            state.products = state.products.map(obj => {
                if (obj._id === action.payload.data._id) {
                    obj = action.payload.data
                }
                return obj;
            });
        }
        state.loading = false;
    },
    [updateProductInfo.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
    [deleteProductInfo.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [deleteProductInfo.fulfilled]: (state, action) => {
        state.info = action.payload;
        if(action.payload.success){
            state.products = state.products.filter(productInfo => productInfo._id !== action.payload.data._id);
        }
        state.loading = false;
    },
    [deleteProductInfo.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
    [deleteBatchProductInfo.pending]: (state, action) => {
        state.loading = true;
        state.error = null
    },
    [deleteBatchProductInfo.fulfilled]: (state, action) => {
        state.info = action.payload;
        if(action.payload.success){
            state.products = action.payload.data;
        }
        state.loading = false;
    },
    [deleteBatchProductInfo.rejected]: (state, action) => {
        state.error = action.error;
        state.loading = false;
    },
  },
});

export const { removeOperationalInfo } = productsSlice.actions;

export default productsSlice.reducer;