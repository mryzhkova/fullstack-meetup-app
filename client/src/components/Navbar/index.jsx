import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ALERT_CONTENT } from '../../constants/alertsContent';
import { fetchDeleteToken } from '../../store/actions/authActions';
import { openAlert } from '../../store/slices/alertSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const { token, refreshToken } = useSelector(state => state.authState);

  const handleSignOut = () => {
    dispatch(fetchDeleteToken(refreshToken));
  };

  const handleOpen = data => () => {
    dispatch(openAlert(data));
  };

  if (token) {
    return (
      <Button onClick={handleSignOut} color="inherit">
        Sign out
      </Button>
    );
  }

  return (
    <>
      <Button
        onClick={handleOpen(ALERT_CONTENT.signInForm)}
        color="inherit"
      >
        Sign in
      </Button>
      <Button
        onClick={handleOpen(ALERT_CONTENT.signUpForm)}
        color="inherit"
      >
        Sign up
      </Button>
    </>
  );
};

export default Navbar;
