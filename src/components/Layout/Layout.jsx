import Navigation from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
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
