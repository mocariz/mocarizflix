import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Field = styled(TextField)`
  label, input {
    color: var(--grayLight);

    &.Mui-focused {
      color: var(--grayLight);
    }
  }

  .MuiFilledInput-root {
    background-color: var(--inputBg);
    color: var(--grayLight);

    &.Mui-focused {
      background-color: var(--inputBg);
    }

    &:hover {
      background-color: var(--inputBg);
    }
  }

  .MuiFilledInput-underline:after {
    border-color: var(--grayLight);
  }
`