import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Footer from './Footer';

export interface ComponentProps {
  children: any;
}


const Main = styled.main`
  background-color: var(--black);
  opacity: 0.9;
  color: var(--white);
  flex: 1;
`;

const Layout = (props: ComponentProps) => {
  return (
    <>
      <Menu />

      <Main>
        {props.children}
      </Main>

      <Footer />
    </>
  )
}

export default Layout;