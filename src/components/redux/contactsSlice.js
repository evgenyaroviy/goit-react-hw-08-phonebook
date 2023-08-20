import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, delContactThunk, getAllContactsThunk } from './thunks';
import { handleFulfield, handleFulfieldContacts, handleFulfilledAddContact, handleFulfilledDeleteContact, handlePending, handleRejected } from './hendlers';

export const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfieldContacts)
      .addCase(addContactThunk.fulfilled, handleFulfilledAddContact)
      .addCase(delContactThunk.fulfilled, handleFulfilledDeleteContact)
      .addMatcher((actions) => actions.type.endsWith('/fulfilled'), handleFulfield)
      .addMatcher((actions) => actions.type.endsWith('/pending'), handlePending)
      .addMatcher((actions) => actions.type.endsWith('/rejected'), handleRejected)
  },
});

export const contactsReducer = contactsSlice.reducer;
