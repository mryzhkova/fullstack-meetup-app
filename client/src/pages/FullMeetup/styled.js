import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DisplayBox = styled(Box)`
  display: flex;
`;

export const StyledBox = styled(DisplayBox)(
  ({ theme }) => `
    margin-top: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
    >* {
      margin-left: ${theme.spacing(1)};
    }
`
);

export const Description = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    margin-top: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
`
);

export const IconText = styled(Typography)(
  ({ theme }) => `
    margin-left: ${theme.spacing(1)};
`
);

export const ButtonsWrapper = styled(DisplayBox)(
  ({ theme }) => `
    margin-top: ${theme.spacing(4)};
    >*:last-child {
      margin-left: ${theme.spacing(1)};
    }
`
);

export const Title = styled(Typography)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(2)};
`
);

export const CloseButtonWrapper = styled(Box)`
  text-align: end;
`;
