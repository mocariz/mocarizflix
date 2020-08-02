import React from 'react';
import styled from 'styled-components';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Block = styled(Backdrop)`
  z-index: auto !important;
`

export interface ComponentProps {
  show: boolean;
}

const Component = (props: ComponentProps) => {
  return (
    <Block open={props.show}>
      <CircularProgress color="inherit" />
    </Block>
  )
}

export default Component;