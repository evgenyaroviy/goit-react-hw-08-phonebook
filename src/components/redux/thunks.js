import { createAsyncThunk } from "@reduxjs/toolkit";
import { delContact, postContact, requestContacts, userLogin, userLogout, userRefresh, userSignUp } from "api";

export const signUpThunk = createAsyncThunk('users/signUp',
  async (body, {rejectWithValue}) => {
    try {
      return await userSignUp(body)
    } catch (e) {
       if (e.response.status === 400) {
        return rejectWithValue('Email or password error');
      }
      return rejectWithValue(e.message);
    }
  });

export const loginThunk = createAsyncThunk('users/login',
  async (body, {rejectWithValue}) => {
    try {
      return await userLogin(body)
    } catch (e) {
      if (e.response.status === 400) {
        return rejectWithValue('Email or password error');
      }
      return rejectWithValue(e.message);
    }
  });

export const logoutThunk = createAsyncThunk('users/logout',
  async (_, thunkAPI) => {
    try {
      await userLogout()
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });


export const userRefreshThunk = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    return await userRefresh(thunkAPI);
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getAllContactsThunk = createAsyncThunk('contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = requestContacts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  });


export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const response = await postContact(body);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });


export const delContactThunk = createAsyncThunk(
  'contacts/delContact',
  async (id, thunkAPI) => {
    try {
      const response = await delContact(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });