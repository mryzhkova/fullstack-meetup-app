import { Container, styled } from '@mui/material';

const StyledContainer = styled(Container)(
  ({ theme }) => `
    margin-top: ${theme.spacing(13)};
`
);

export default StyledContainer;
