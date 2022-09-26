import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import AlertSnackbar from '@/components/AlertSnackbar';
import AlertWindow from '@/components/AlertWindow';
import Header from '@/components/Header';
import theme from '@/theme';

import StyledContainer from './styled';

const Layout = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <StyledContainer>
      <Outlet />
    </StyledContainer>
    <AlertSnackbar />
    <AlertWindow />
  </ThemeProvider>
);

export default Layout;
