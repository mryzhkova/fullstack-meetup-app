import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeAlert } from '../../store/slices/alertSlice';
import Alerts from '../Alerts';

import { StyledIcon, StyledTitle } from './styled';

const AlertWindow = () => {
  const dispatch = useDispatch();

  const { isOpen, title } = useSelector(state => state.alertState.alertWidow);

  const handleClose = () => {
    dispatch(closeAlert());
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
      <StyledTitle>
        <DialogTitle>{title}</DialogTitle>
        <StyledIcon
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Close fontSize="small" />
        </StyledIcon>
      </StyledTitle>
      <DialogContent>
        <Alerts />
      </DialogContent>
    </Dialog>
  );
};

export default AlertWindow;
