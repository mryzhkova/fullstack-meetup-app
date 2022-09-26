import { createSlice } from '@reduxjs/toolkit';

import { fetchDeleteToken, fetchSignIn, fetchUpdateToken } from '@/store/actions/authActions';

const initialState = {
  token: null,
  refreshToken: null,
  currentRole: '',
  reqTime: 0
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, { payload }) => {
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    setReqTime: (state, { payload }) => {
      state.reqTime = payload;
    }
  },
  extraReducers: {
    [fetchSignIn.fulfilled]: (state, { payload }) => {
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.currentRole = payload.role;
      state.reqTime = new Date().getTime();
    },
    [fetchDeleteToken.fulfilled]: state => {
      state.token = null;
      state.refreshToken = null;
      state.currentRole = '';
    },
    [fetchUpdateToken.fulfilled]: (state, { payload }) => {
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
});

export const { setTokens, setReqTime } = authSlice.actions;

export default authSlice.reducer;
