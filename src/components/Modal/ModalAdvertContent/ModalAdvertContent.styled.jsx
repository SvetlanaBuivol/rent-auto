import styled from '@emotion/styled';

export const ModalImgContainer = styled.div`
  height: 248px;
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const ModalImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const ModalCarHeader = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const ModalCarInfo = styled.p`
  width: 277px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 14px;
  color: var(--secondTextCl);
`;

export const ModalCarDescr = styled.p`
  line-height: 20px;
  margin-bottom: 24px;
  font-weight: 400;
`;

export const AccText = styled.p`
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const FeaturesText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 24px;
  color: var(--secondTextCl);
`;
export const HeadRentalCond = styled.p`
  margin-bottom: 8px;
`;
export const TextBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const ModalTextBtn = styled.div`
  display: flex;
  padding: 7px 14px;
  border-radius: 35px;
  background-color: var(--modalBgText);
  font-size: 12px;
  line-height: 18px;
  color: var(--modalTextCl);
  letter-spacing: 0.4px;
  & span {
    color: var(--blueCl);
    font-weight: 600;
  }
`;

export const RentCar = styled.button`
  width: 168px;
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
