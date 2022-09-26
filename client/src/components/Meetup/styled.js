import { Box, Button, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Title = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButton = styled(Button)`
  min-width: 50px;
`;

export const AdminBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

