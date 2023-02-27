import { createSlice } from "@reduxjs/toolkit";

import {
  Register,
  logIn,
  logOut,
  refreshUser,
  googleAuth,
} from "../../redux/auth/operations";

export const initialState = {
  user: {
    email: "",
  },
  error: null,
  isLoading: true,
  isLoggedIn: false,
  refreshToken: null,
  sid: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(Register.fulfilled, (state) => {
        state.isRegister = true;
      })
      .addCase(logIn.pending, (state) => {
        state.isLogin = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.accessToken = payload.token;
        state.user.email = payload.user.email;
        state.isLogin = true;
        state.isRegister = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLogin = false;
      })
      .addCase(logOut.fulfilled, (state) => ({
        ...state,
        accessToken: null,
        refreshToken: null,
        sid: null,
        isRegister: false,
        isLogin: false,
      }))
      .addCase(refreshUser.pending, (state) => ({
        ...state,
        isLogin: false,
      }))
      .addCase(refreshUser.fulfilled, (state, { payload }) => ({
        ...state,
        accessToken: payload.newAccessToken,
        refreshToken: payload.newRefreshToken,
        sid: payload.newSid,
        isLogin: true,
      }))
      .addCase(refreshUser.rejected, (state) => ({
        ...state,
        isLogin: false,
        accessToken: null,
        refreshToken: null,
        sid: null,
      }))
      .addCase(googleAuth.fulfilled, (state, action) => {
        const { user, accessToken, refreshToken, sid } = action.payload;
        state.user = user;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.sid = sid;
        state.isLogin = true;
      }),
});

export const authReducer = authSlice.reducer;
