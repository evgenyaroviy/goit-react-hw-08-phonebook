import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, signUpThunk, userRefreshThunk } from './thunks';
import { handleFulfieldLogin, handleFulfieldSignUp, handleFulfilledLogout, handleFulfilledRefresh, handlePendingRefresh, handleRejectedRefresh } from './hendlers';

export const initialState = {
    token: '',
    isloading: false,
    error: '',
    profile: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleFulfieldSignUp)
      .addCase(loginThunk.fulfilled, handleFulfieldLogin)
      .addCase(userRefreshThunk.pending, handlePendingRefresh)
      .addCase(userRefreshThunk.fulfilled, handleFulfilledRefresh)
      .addCase(userRefreshThunk.rejected, handleRejectedRefresh)
      .addCase(logoutThunk.fulfilled, handleFulfilledLogout);
  },
});
export const authReducer = authSlice.reducer;