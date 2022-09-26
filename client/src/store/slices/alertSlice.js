import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  snackbar: {
    isOpen: false,
    text: '',
    severity: 'info'
  },
  alertWidow: {
    isOpen: false,
    title: '',
    content: ''
  }
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    openSnackbar: ({ snackbar }, { payload }) => {
      snackbar.isOpen = true;
      snackbar.text = payload.text;
      snackbar.severity = payload.severity;
    },
    closeSnackbar: ({ snackbar }) => {
      snackbar.isOpen = false;
      snackbar.text = '';
      snackbar.severity = 'info';
    },
    openAlert: ({ alertWidow }, { payload }) => {
      alertWidow.isOpen = true;
      alertWidow.title = payload.title;
      alertWidow.content = payload.content;
    },
    closeAlert: ({ alertWidow }) => {
      alertWidow.isOpen = false;
      alertWidow.title = '';
      alertWidow.content = '';
    }
  }
});

export const { openSnackbar, closeSnackbar, openAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
