import { createAction } from '@reduxjs/toolkit';

export const addProduct = createAction('products/addProduct');
export const updateProduct = createAction('products/updateProduct');
export const deleteProduct = createAction('products/deleteProduct');