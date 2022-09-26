import { createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import authApi from '@/api/authApi';
import { closeAlert, openSnackbar } from '@/store/slices/alertSlice';


export const fetchSignIn = createAsyncThunk(
  'auth/fetchSignIn',
  async (user, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await authApi.sigIn(user);
      const { role } = jwtDecode(data.accessToken);
      dispatch(closeAlert());
      return { ...data, role };
    } catch (error) {
      dispatch(openSnackbar({ severity: 'error', text: error.response.data }));
      return rejectWithValue();
    }
  }
);

export const fetchSignUp = createAsyncThunk(
  'auth/fetchSignUp',
  async (user, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await authApi.signUp(user);
      dispatch(closeAlert());
      dispatch(openSnackbar({ severity: 'success', text: data }));
    } catch (error) {
      dispatch(openSnackbar({ severity: 'error', text: error.response.data }));
      return rejectWithValue();
    }
  }
);

export const fetchDeleteToken = createAsyncThunk(
  'auth/fetchDeleteToken',
  async token => {
    await authApi.deleteToken(token);
  }
);

export const fetchUpdateToken = createAsyncThunk(
  'auth/fetchUpdateToken',
  async token => {
    const { data } = await authApi.refreshToken(token);
    return data;
  }
);
