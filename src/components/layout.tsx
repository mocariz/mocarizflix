import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Footer from './Footer';

export interface ComponentProps {
  children: any;
}


const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;

  .container {
    padding-left: 5%;
    padding-right: 5%;
  }
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