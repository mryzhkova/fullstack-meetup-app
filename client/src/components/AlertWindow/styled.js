import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIcon = styled(IconButton)(
  ({ theme }) => `
    margin-right: ${theme.spacing(2)};
`
);
