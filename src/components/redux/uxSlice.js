import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const uxSlice = createSlice({
  name: 'ux',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const uxReducer = uxSlice.reducer;