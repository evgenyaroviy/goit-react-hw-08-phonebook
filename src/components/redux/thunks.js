import { createAsyncThunk } from "@reduxjs/toolkit";
import { delContact, postContact, requestContacts } from "api";

export const getAllContactsThunk = createAsyncThunk('contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = requestContacts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
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