import { createSlice } from '@reduxjs/toolkit';
// import { logout } from './authSlice';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: {
      reducer: (state, action) => {
        state.products.push(action.payload);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            createdAt: new Date(),
          },
        };
      },
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(logout, (state, action) => {
    //   state.products = [];
    // });
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;