import styled from 'styled-components';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const Field = styled(Autocomplete)`
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

  button {
    color: var(--grayLight);
  }
`