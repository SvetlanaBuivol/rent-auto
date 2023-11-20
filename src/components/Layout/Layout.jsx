import Navigation from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderStyled, MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <Navigation />
      </HeaderStyled>
      <main>
        <MainContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </main>
    </>
  );
};

export default Layout;
