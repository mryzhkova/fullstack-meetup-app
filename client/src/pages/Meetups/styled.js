import { Box, styled } from '@mui/material';

const ButtonBox = styled(Box)(
  ({ theme }) => `
    margin-top: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(4)};
`
);

export default ButtonBox;
