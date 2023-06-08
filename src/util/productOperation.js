import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from "../config/Constants";

export const fetchAllProductInfo = createAsyncThunk('propduct/fetchAllProductInfo', async ()=>{
    try {
        const response = await fetch(API_REQUEST + '/product', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})

export const fetchSingleProductInfo = createAsyncThunk('propduct/fetchSingleProductInfo', async (productID)=>{
    try {
        const response = await fetch(API_REQUEST + `/product/${productID}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})

export const addProductInfo = createAsyncThunk('auth/addProductInfo', async (productInfo, token)=>{
    try {
        const response = await fetch(API_REQUEST + '/product', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify(productInfo)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})

export const updateProductInfo = createAsyncThunk('propduct/updateProductInfo', async (productID, productInfo, token)=>{
    try {
        const response = await fetch(API_REQUEST + `/product/${productID}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token
            },
            body: JSON.stringify(productInfo)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})

export const deleteProductInfo = createAsyncThunk('propduct/deleteProductInfo', async (productID, token)=>{
    try {
        const response = await fetch(API_REQUEST + '/product', {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token
            },
            body: JSON.stringify(productID)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})

export const deleteBatchProductInfo = createAsyncThunk('propduct/deleteBatchProductInfo', async (productBatchIds, token)=>{
    try {
        const response = await fetch(API_REQUEST + '/product/batch', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token
            },
            body: JSON.stringify(productBatchIds)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})