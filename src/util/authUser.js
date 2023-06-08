import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from "../config/Constants";

export const fetchUserInfoData = createAsyncThunk('auth/fetchUserInfo', async (userInfo)=>{
    let token = null
    if(userInfo.token){
        token = userInfo.token
    }else {
        token = localStorage.getItem("token")
        if(!token){
            localStorage.removeItem("token");
            return null;
        }
    }

    try {
        const response = await fetch(API_REQUEST + '/user/auth', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token
            }
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})

export const loginUserData = createAsyncThunk('auth/loginUser', async (loginInfo)=>{
    try {
        const response = await fetch(API_REQUEST + '/user/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})

export const logoutUserData = createAsyncThunk('auth/logoutUser', async (token)=>{
    try {
        const response = await fetch(API_REQUEST + '/user/auth/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})

export const registerUserData = createAsyncThunk('auth/registerUser', async (registrationInfo)=>{
    try {
        const response = await fetch(API_REQUEST + '/user', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationInfo)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error);
    }
})