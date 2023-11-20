import React from 'react';
import {
  HeaderTitle,
  HomeContainer,
  StyledText,
  StyledText2,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HeaderTitle>Drive the Experience. Rent Your Journey.</HeaderTitle>
      <StyledText>
        Unleash the road trip of your dreams with RentAuto.
        <br /> Rent a car seamlessly, explore effortlessly.
      </StyledText>
      <StyledText2>Your adventure starts here.</StyledText2>
    </HomeContainer>
  );
};

export default Home;
