import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, signUpThunk, userRefreshThunk } from './thunks';
import { handleFulfieldLogin, handleFulfieldSignUp, handleFulfilledLogout, handleFulfilledRefresh, handlePendingRefresh, handleRejectedRefresh } from './hendlers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  isRefreshing: false,
};

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