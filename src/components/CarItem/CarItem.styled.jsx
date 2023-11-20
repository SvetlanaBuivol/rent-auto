import styled from '@emotion/styled';

export const AdvertCard = styled.li`
  position: relative;
  width: 274px;
  overflow: hidden;
`;

export const CarImg = styled.img`
  height: 268px;
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarHeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CarHeader = styled.h2`
  font-weight: 500;
  font-size: 16px;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const CarInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 28px;
  color: var(--secondTextCl);
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  height: 44px;
  background-color: var(--blueCl);
  color: var(--whiteCl);
  border-radius: 12px;
  font-weight: 600;
  transition: background-color 250ms ease-in;

  :hover {
    background-color: var(--hoverBlueCl);
  }
`;

export const HeartBtn = styled.button`
  position: absolute;
  left: 242px;
  top: 14px;
`;
