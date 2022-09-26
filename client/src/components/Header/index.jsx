import { Toolbar, AppBar, Container } from '@mui/material';
import React from 'react';

import Navbar from '@/components/Navbar';

import AppTitle from './styled';

const Header = () => (
  <AppBar>
    <Container fixed>
      <Toolbar>
        <AppTitle variant="h6">Meetup App</AppTitle>
        <Navbar />
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
