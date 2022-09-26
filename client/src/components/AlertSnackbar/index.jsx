import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeSnackbar } from '../../store/slices/alertSlice';

const AlertSnackbar = () => {
  const dispatch = useDispatch();

  const { isOpen, text, severity } = useSelector(
    state => state.alertState.snackbar
  );

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} variant="filled" severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
