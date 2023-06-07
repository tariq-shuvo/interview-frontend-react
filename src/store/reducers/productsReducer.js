import { createReducer } from '@reduxjs/toolkit';
import { addProduct, deleteProduct } from '../actions/productActions';

const initialState = { products: [] };

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      state.products.push(action.payload);
    })
    .addCase(deleteProduct, (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
    });
});

export default productsReducer;