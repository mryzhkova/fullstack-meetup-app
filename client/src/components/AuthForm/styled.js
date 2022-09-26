import { ButtonUnstyled } from '@mui/base';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonsWrapper = styled(Box)(
  ({ theme }) => `
    margin-top: ${theme.spacing(3)};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
);

export const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  border: none;
  background: none;
  text-decoration: underline;
  color: ${theme.palette.primary.main};
  cursor: pointer;
`
);

export const GoogleButton = styled(Button)(
  ({ theme }) => `
  width: 100%;
  margin-top: ${theme.spacing(1)};
`
);
