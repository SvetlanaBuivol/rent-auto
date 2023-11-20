import styled from '@emotion/styled';
import bgImage from '../../assets/homeImg/auto.jpg';

export const HomeContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding: 120px 30px;
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
  color: white;
  text-align: end;
  margin-bottom: 48px;
`;

export const StyledText = styled.p`
  color: white;
  text-align: end;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 92px;
`;

export const StyledText2 = styled.p`
  color: white;
  text-align: end;
  font-weight: 600;
  font-size: 18px;
`;
