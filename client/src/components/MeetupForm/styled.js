import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonBox = styled(Box)(
  ({ theme }) => `
    margin-top: ${theme.spacing(2)};
    display: flex;
    justify-content: end;
    width: 100%;
`
);

export default ButtonBox;
